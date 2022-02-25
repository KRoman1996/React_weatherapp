import React, {Component} from 'react';

class CurWeather extends Component  {
    render(){
        return(           
            <div className="row">

                <div className="col-sm-6">
                    <p>name : {this.props.city.name}</p>
                    <p>lat : {this.props.city.lat}</p>
                    <p>lon : {this.props.city.lon}</p>
                </div>
                <div className="col-sm-6">
                    <p>Temperature : {this.props.curWeather.temp}</p>
                    <p>Humidity : {this.props.curWeather.humi}</p>
                    <p>Description : {this.props.curWeather.desc}</p>
                </div>

            </div>

        );
    }
}

export default CurWeather;