import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail avatarImage={faker.image.avatar()} author="Amol" postTime="Today at 6:00PM" commentText="Ayush can't bake" />
            <CommentDetail avatarImage={faker.image.avatar()} author="Ayush" postTime="Yesterday at 7:15AM" commentText="Excellent recipe! I just burnt the cookies in the oven" />
        </div>
    );
};
ReactDOM.render(<App />, document.querySelector('#root'));
