import React, {Component} from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from "../actions/postActions";

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        };

        this.props.createPost(post);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={e => this.onSubmit(e)}>
                    <div>
                        <label htmlFor="">Title: </label><br/>
                        <input type="text" onChange={e => this.onChange(e)} name={'title'} value={this.state.title}/>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="">Body: </label><br/>
                        <textarea name={'body'} onChange={e => this.onChange(e)} value={this.state.body} />
                    </div>
                    <br/>
                    <button type={'submit'}>Submit</button>

                </form>
            </div>
        )
    }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(Postform)