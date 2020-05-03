import React, { Component } from 'react'
import UserMainInfo from './UserMainInfo'
import UserImages from '../UserData/UserImages'
import '../Post/Post.scss'

import axios from 'axios'

const apiKey = '1Vd3uFiWa7U0PzNxwg17UmTEBCygJE6knnSTKAiL4wM';


class UserProfileInfo extends Component {
    state = {
        userPhotos: [],
        loading: false,
        countImages: 3
    }

    componentWillMount() {
        this.axiosUserPhotos();
    }

    componentWillUnmount() {
        this.setState({
            userPhotos: [],
            loading: false
        })
    }

    axiosUserPhotos() {
        axios.get(this.props.user.links.photos, {
            params: {
                client_id: apiKey,
                per_page: this.state.countImages
            }
        })
        .then(response => response.data)
        .then(data => {
            this.setState({
                userPhotos: data,
                loading: true
            })
        })
        .catch(e => console.log(e.message));
    }
    
    render() {
        const {user, sizeImg, instaLink} = this.props;

        return (
            <div className="post__user-profile-info" >
                <UserMainInfo user={user} sizeImg={sizeImg} instaLink={instaLink}/>
                { this.state.loading ? <UserImages images={this.state.userPhotos} onClickImagesUser={this.props.onClickImagesUser}/> : null}
            </div>
        )
    }
}

export default UserProfileInfo;