import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import '../bin/encode.js';
import AntdBox from './antbox';
import Tables from './tables.js';
import 'antd/dist/antd.css';
import './antbox.css';

var About = React.createClass({
  render : function(){
    return (
      <div>
        <p>about page</p>
      </div>
    )
  }
});

let routes = <Route path="/" component={AntdBox}>
        <IndexRoute component={Tables}/>
        <Route path="abc" component={Tables} />
        <Route path="abcd" component={About} />
      </Route>;

ReactDOM.render(<routes />, document.getElementById('login'));

