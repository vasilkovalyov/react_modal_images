import React, { Component } from 'react'
import axios from 'axios'

const apiKey = '1Vd3uFiWa7U0PzNxwg17UmTEBCygJE6knnSTKAiL4wM';

class UserImages extends Component {
    state = {
        userPhotos: [],
        loading: false
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
        axios.get(this.props.photosUrl, {
            params: {
                client_id: apiKey,
                per_page: this.props.countImages
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


    getUserPhoto() {
        return this.state.loading ? (
            this.state.userPhotos.map((item,i) => <div className="post__user-photo-item" key={i} onClick={this.props.onClickImagesUser}>
                <img src={item.urls.regular} alt={i}/>
            </div>)
        ) : null;
    }

    render() {
        return (
            <div className="post__user-photo-list">
                {this.getUserPhoto()}
            </div>
        )
    }
}

export default UserImages;