
import React from 'react';
import { render } from 'react-dom';
import CommentBox from '../ui/CommentBox.js'

let main = function(){
    render(
        <CommentBox url="/api/comments" pollInterval={200000} />,
        document.getElementById('content')
    );
}

main();

/*
var React = require('react');
import { render } from 'react-dom';
var HelloworldComponent = React.createClass({
    displayName : 'HelloWorldComponent',
    render : function(){
        return (
            <div>Hello world</div>
        );
    }
});

let main = function(){
    render(
        <HelloworldComponent />,
        document.getElementById('example')
    );
}
main();
*/
