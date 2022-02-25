import React, {Component} from 'react';
import { connect } from 'react-redux';

class HourlyTable extends Component{
    render()    {
        return (
            <div>
                <h2>Daily Weather</h2>
                {
                    this.props.clicked &&
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>City Name</th>
                            {
                                this.props.data[0].daily.map((item,idx) => <th key={idx}>{item.day}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.props.data.map((data,idx) => <tr key={idx}>
                                <td>{data.name}</td>
                        {
                            data.daily.map((item,idx) => <td key={idx}> {String(item.desc).search("cloud") >= 0 ? item.desc : ""}
                            </td>)
                        }
                            </tr>
                        )}
                    </tbody>
                </table>
    }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.cityInfo.cityInfo,
    clicked: state.cityInfo.clicked
});

export default connect(mapStateToProps, null)(HourlyTable);