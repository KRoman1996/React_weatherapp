import React, {Component} from "react";
import { setCityInfo, addCityWeather, weatherClicked, initialize } from '../actions/getweather';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component  {

    getWeather = async(e) =>{

        e.preventDefault();

        const city = e.target.elements.city1.value;
        const city1 = e.target.elements.city2.value;

        this.props.initialize();

        await this.props.setCityInfo(city, 0);
        await this.props.addCityWeather(
        {
            lat: this.props.city_info[0].lat,
            lon: this.props.city_info[0].lon
        }, 0);

        await this.props.setCityInfo(city1, 1);
        await this.props.addCityWeather(
        {
            lat: this.props.city_info[1].lat,
            lon: this.props.city_info[1].lon
        }, 1);
        this.props.weatherClicked();
    }
    render(){
        return (
            <form onSubmit={this.getWeather}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="city name" name="city1"/>
                    <input type="text" className="form-control" placeholder="city name" name="city2"/>
                    <button className="btn btn-success" type="submit">Get weather</button>
                </div>
            </form>
        );
    }
}


Header.propTypes = {
    weatherClicked: PropTypes.func.isRequired,
    setCityInfo: PropTypes.func.isRequired,
    addCityWeather: PropTypes.func.isRequired
  }
  
  const mapStateToProps = state =>  ({
    city_info: state.cityInfo.cityInfo
  });

export default connect(mapStateToProps, {weatherClicked, setCityInfo, addCityWeather, initialize})(Header);