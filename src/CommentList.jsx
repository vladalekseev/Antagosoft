import React from 'react';
import NewComment from './NewComment.jsx'

export default class Article extends React.Component{
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.state = {
            comments : props.comments
        }
    }

    handleClick(text) {
        const date = new Date();
        const obj = {
            name: 'Влад Алексеев',
            date: ` ${date.getDate()} cентября 2017`,
            text: text
        };
        const arr = this.state.comments;
        arr.push(obj);
        this.setState({
            comments : arr
        })
    }

    render() {
        return <div className="reviews__list">{
            this.state.comments.map((comment,i) => {
                return (
                    <div className="reviews__instance" key={i}>
                        <div className="reviews__name">{comment.name}
                            <span className="reviews__date">{comment.date}</span>
                        </div>
                        <div className="reviews__text">{comment.text}
                            <div className="triangle"></div>
                        </div>
                    </div>
                )
            })}
            <NewComment handler = {this.handleClick}/>
        </div>
    }


}
