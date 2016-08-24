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