import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <div className="metadata">
                        <span className="date">Today at 7:00PM</span>
                    </div>
                    <div className="text">Excellent recipe! I just burnt some cookies in the oven now</div>
                </div>
            </div>
        </div>
    );
};
ReactDOM.render(<App />, document.querySelector('#root'));
