import './App.css';
import React, {Component} from 'react';
import Header from './components/Header';
import HourlyTable from './components/HourlyTable';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {

  render(){
    return(
      <Provider store={store}>
      <div className="container">
        <Header/>
        <hr/>
        
        <div className="row">
          <div className="col-sm-12">
            <HourlyTable />
          </div>
        </div>
      </div>
      </Provider>
    );
  }
}
export default App;
