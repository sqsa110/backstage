import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import '../bin/encode.js';
import AntdBox from './antbox.js'; 
import Tables from './tables.js';
import 'antd/dist/antd.css';
import './antbox.css';

class Users extends React.Component {
    render() {
        return (
            <div>
                <h2>Users</h2>
            </div>
        )
    }
}

let myRouter =  <Route path="/" component={AntdBox}>
                    <IndexRoute component={Tables} />
                    <Route path="/abc" component={Tables} />
                    <Route path="/aaa" component={Users} />
                 </Route>


ReactDOM.render((
	<Router routes={myRouter} history={hashHistory} />
), document.getElementById('login'));

