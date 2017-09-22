import React from 'react';
import { render } from 'react-dom';
import CommentList from './CommentList.jsx';
import data from './data.jsx';


render(
    <CommentList comments={data} />, document.getElementById('root')
);
