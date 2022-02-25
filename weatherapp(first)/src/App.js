import './App.css';
import React, {Component} from 'react';
import Header from './components/Header';
import axios from 'axios';
import CurWeather from './components/CurWeather';
import HourlyTable from './components/HourlyTable';
import DailyTable from './components/DailyTable';

const API_KEY = "ed83ea85a3d61f02dab41b63228a0a33";

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      city: {
        name: "",
        lat: "",
        lon: ""
      },
      curWeather: {
        temp: "",
        humi: "",
        desc: ""
      },
      hourly: [{
        hour: "",
        temp: "",
        desc: ""
      }],
      daily: [{
        day: "",
        mintemp: "",
        maxtemp: "",
        desc: ""
      }]
    }

  }

  initialize = () =>  {
    this.setState({
      hourly: [{
        hour: "",
        temp: "",
        desc: ""
      }],
      daily: [{
        day: "",
        mintemp: "",
        maxtemp: "",
        desc: ""
      }]
    })
  }

  setCityState = (data) => {
    const newCity = {
      name: data.name,
      lat: data.coord.lat,
      lon: data.coord.lon
    }
    this.setState({
      city: newCity
    })
  }

  setCurWeather = (data) => {
    const newWeather = {
      temp: data.main.temp,
      humi: data.main.humidity,
      desc: data.weather[0].description
    }
    this.setState({
      curWeather: newWeather
    })
  }

  setHourlyState = (data) =>  {
    for(var i = 1; i <= 10; ++ i)  {
      var newDate = new Date(data[i].dt * 1000);

      const newHourlyData = {
        hour: newDate.getHours(),
        temp: data[i].temp,
        desc: data[i].weather[0].description
      }

      this.setState({
        hourly: [...this.state.hourly, newHourlyData]
      })
    }
  }

  setDailyState = (data) => {
    for(var i = 0; i < 7; ++ i)  {
      var newDate = new Date(data[i].dt * 1000);

      const newDailyData = {
        day: newDate.getDate(),
        mintemp: data[i].temp.min,
        maxtemp: data[i].temp.max,
        desc: data[i].weather[0].description
      }

      this.setState({
        daily: [...this.state.daily, newDailyData]
      })
    }
  }

  getWeather = async(e) =>  {
    e.preventDefault();
    this.initialize();
    const city = e.target.elements.city.value;
    const data = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            
    this.setCityState(data.data);
    this.setCurWeather(data.data);

    const hourlyCall = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.city.lat}&lon=${this.state.city.lon}&exclude={minutely}&appid=${API_KEY}&units=metric`);
    const hourlyData = hourlyCall.data;
    
    this.setHourlyState(hourlyData.hourly);
    this.setDailyState(hourlyData.daily);
  }

  render(){
    return(
      <div className="container">
        <Header getWeather = {this.getWeather}/>
        <hr/>
        <CurWeather curWeather = {this.state.curWeather} city={this.state.city}/>
        <div className="row">
          <div className="col-sm-6">
            <HourlyTable  data={this.state.hourly}/>
          </div>
          <div className="col-sm-6">
            <DailyTable data={this.state.daily}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
