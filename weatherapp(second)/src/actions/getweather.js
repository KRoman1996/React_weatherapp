import axios from "axios";
import { SET_CITY_INFO, WEATHER_CLICKED, ADD_CITY_WEATHER, INITIALIZE } from "./types";

const API_KEY = "ed83ea85a3d61f02dab41b63228a0a33";

export const setCityInfo = (city, id) => async(dispatch) =>{
    const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = res.data;
    dispatch({
        type: SET_CITY_INFO,
        payload: {
            id,
            name: city,
            lat: data.coord.lat,
            lon: data.coord.lon
        }
    });
    
}

export const weatherClicked = () => dispatch =>    {
    dispatch({
        type: WEATHER_CLICKED
    })
}

export const initialize = () => dispatch =>    {
    dispatch({
        type: INITIALIZE
    })
}

export const addCityWeather = (city, id) => async(dispatch) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&exclude={minutely, hourly}&appid=${API_KEY}&units=metric`);
    const data = res.data.daily;
    
    dispatch({
        type: ADD_CITY_WEATHER,
        payload: {
            id,
            weathers: data.slice(1, 8).map((item,idx) => {
                return(
                    {
                        day: (new Date(data[idx].dt * 1000)).getDate(),
                        desc: item.weather[0].description
                    }
                    )
                }
            )
        }
    })
}