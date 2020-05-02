import React, { Component } from 'react'

import UserMainInfo from '../User/UserMainInfo'
import UserProfileInfo from '../User/UserProfileInfo'
import './Post.scss'


class Post extends Component {
    state = {
        isVisibleProfileInfo: false
    }
    
    handleInHover() {
        this.setState({
            isVisibleProfileInfo: true
        })
    }

    handleOutHover() {
        this.setState({
            isVisibleProfileInfo: false
        })
    }

    getProfileInfo(post) {
        return this.state.isVisibleProfileInfo ? (
            <UserProfileInfo user={post.user} sizeImg="medium" instaLink={true} onClickImagesUser={this.props.onClickImagesUser.bind(this)} />
        ) : null
    }
    
    render() {
        const post = this.props.post;
        
        return (
            <div className="post" onMouseLeave={this.handleOutHover.bind(this)}>
                <div className="post__image">
                    <img src={post.urls.regular} alt=""/>
                </div>
                <div className="post__description">
                    <UserMainInfo user={post.user} sizeImg="small" 
                    onHoverIn={this.handleInHover.bind(this)}
                    />
                </div>
                { this.getProfileInfo(post) }
            </div>
        )
    }
    
}

export default Post;
