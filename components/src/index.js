import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    avatarImage={faker.image.avatar()}
                    author="Amol"
                    postTime="Today at 6:00PM"
                    commentText="Ayush can't bake"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatarImage={faker.image.avatar()}
                    author="Ayush"
                    postTime="Yesterday at 7:15AM"
                    commentText="Excellent recipe! I just burnt the cookies in the oven"
                />
            </ApprovalCard>
        </div>
    );
};
ReactDOM.render(<App />, document.querySelector('#root'));
