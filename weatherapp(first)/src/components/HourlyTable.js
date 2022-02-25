import React, {Component} from 'react';

class HourlyTable extends Component{
    render()    {
        return (
            <div>
                <h2>Hourly Weather</h2>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Hour</th>
                        <th>Temperature</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.map(item => <tr key={item.hour}>
                            <td>{item.hour}</td>
                            <td>{item.temp}</td>
                            <td>{item.desc}</td>
                        </tr>)
                    }
                </tbody>
            </table>
            </div>
        );
    }
}

export default HourlyTable;