
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
