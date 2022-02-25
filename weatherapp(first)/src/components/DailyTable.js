import React, {Component} from 'react';

class DailyTable extends Component{
    render()    {
        return (
            <div>
                <h2>Daliy Weather</h2>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Hour</th>
                        <th>min temperature</th>
                        <th>max temperature</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.map(item => <tr key={item.day}>
                            <td>{item.day}</td>
                            <td>{item.mintemp}</td>
                            <td>{item.maxtemp}</td>
                            <td>{item.desc}</td>
                        </tr>)
                    }
                </tbody>
            </table>
            </div>
        );
    }
}

export default DailyTable;