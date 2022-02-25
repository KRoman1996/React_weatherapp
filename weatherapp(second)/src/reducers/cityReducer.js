import { ADD_CITY_WEATHER, WEATHER_CLICKED, SET_CITY_INFO, INITIALIZE } from "../actions/types";

const initialState = {
    clicked: false,
    cityInfo: [{
        name: undefined,
        lat: undefined,
        lon: undefined,
        daily: [{
            day: undefined,
            desc: undefined
        }]
    }],

};

export default function(state = initialState, action)   {
    switch(action.type) {
        case INITIALIZE:
            return initialState;
        case WEATHER_CLICKED:
            return {
                ...state,
                clicked: true
            }
        case SET_CITY_INFO:
            const {name, lat, lon} = action.payload;
            state.cityInfo[action.payload.id] = {name, lat, lon};
            
            return {
                ...state
            }
        case ADD_CITY_WEATHER:
            state.cityInfo[action.payload.id].daily = action.payload.weathers;
            return  {
                ...state
            }
        default:
            return state;
    }    
}