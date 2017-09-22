import React from 'react';

export default class NewComment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            val : ''
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', (e) => {
            if(e.ctrlKey && e.keyCode === 13) {
                this.addComment();
            }
        })
    }

    changeHandler(e) {
        this.setState({
            val : e.target.value
        })
    }

    addComment() {
        if(this.state.val) {
            this.props.handler(this.state.val);
            this.setState({
                val: ''
            });
        }
    }

    render() {
        return (
            <div className="reviews__creation">
                <textarea className="reviews__creation_text" title="Напишите отзыв" value={this.state.val} onChange={this.changeHandler.bind(this)}/>
                <button className="reviews__creation_btn" onClick={this.addComment.bind(this)}>
                    Написать консультанту
                </button>
            </div>
        )
    }
}