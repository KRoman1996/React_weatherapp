import React, {Component} from "react";

class Header extends Component  {
    render(){
        return (
            <form onSubmit={this.props.getWeather}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search" name="city"/>
                    <button className="btn btn-success" type="submit">Get weather</button>
                </div>

            </form>
        );
    }
}

export default Header;