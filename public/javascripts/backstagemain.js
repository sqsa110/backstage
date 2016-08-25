
import React from 'react';
import { render } from 'react-dom';
import LoginBox from '../ui/login/LoginBox.js'

let main = function(){
    render(
        <LoginBox />,
        document.getElementById('content')
    );
}

main();
