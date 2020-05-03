import React, { Component } from 'react'
import axios from 'axios'

import './PostList.scss'

import Post from '../Post/Post'
import Pagination from '../Pagination/Pagination';
import Modal from '../Modal/Modal';
import SimpleSwiperWithParams from '../SwiperComponent/SwiperComponent';
import UserProfileInfo from '../User/UserProfileInfo';
import UserModalProfile from '../User/UserModalProfile';

const apiKey = '1Vd3uFiWa7U0PzNxwg17UmTEBCygJE6knnSTKAiL4wM';

class PostList extends Component {
    state = {
        currentPage: 1,
        postList: [],
        loading: false,
        perPageCount: 9,
        totalPhotos: 0,
        isModal: false,
        modalData: null,
        activePostImages: null,
        isModalUser: false,
        userInfo: null
    }

    componentWillMount() {
        this.axiosPost(this.state.currentPage)
    }

    axiosPost(page) {
        axios.get(`https://api.unsplash.com/photos/`, {
            params: {
                client_id: apiKey,
                page: page,
                per_page: this.state.perPageCount
            }
        })
        .then(response => response)
        .then(data => {
            this.setState({
                postList: data.data,
                loading: true,
                totalPhotos: data.headers['x-total']
            })
        })
        .catch(e => console.log(e.message))
    }

    onClickUserInfo(data) {
        this.setState({
            isModalUser: true,
            userInfo: data.user
        })
    }

    handleOnPrevPage(number) {
        let num = number - 1;
        this.setState({
            currentPage: num
        })
        this.axiosPost(num);
    }

    handleOnNextPage(number) {
        let num = number + 1;
        this.setState({
            currentPage: num
        })
        this.axiosPost(num);
    }

    handleClickImagesUser(user) {
        axios.get(user.user.links.photos, {
            params: {
                client_id: apiKey,
                per_page: 10
            }
        })
        .then(response => response.data)
        .then(data => {
            this.setState({
                activePostImages: data.map(item => item.urls.small),
                modalData: user
            })
        })
        .catch(e => console.log(e.message));


        setTimeout(() => {
            this.setState({
                isModal: true,
            })
        }, 300);
    }

    handleCloseModal(e) {
        this.setState({
            isModal: false
        })
    }

    handleCloseModalUser(e) {
        this.setState({
            isModalUser: false
        })
    }

    render() {
        const userList = !this.state.loading ? 
            <span className="loader"></span> : 
            this.state.postList.map((item, i) => <div className="col" key={i}>
                <Post post={item} onClickImagesUser={this.handleClickImagesUser.bind(this, item)} onClickUserInfo={this.onClickUserInfo.bind(this, item)}/>
            </div>)
        
        return (
            <div className="section-content">
                <div className="post-list">
                    {userList}
                </div>
                { this.state.loading ? (
                    <Pagination 
                        totalElems={this.state.totalPhotos} 
                        perPage={this.state.perPageCount}
                        currentPage={this.state.currentPage}
                        handleOnNextPage={this.handleOnNextPage.bind(this, this.state.currentPage)}
                        handleOnPrevPage={this.handleOnPrevPage.bind(this, this.state.currentPage)}
                    />
                ) : null }
                {this.state.isModal ? (
                    <Modal onCloseModal={this.handleCloseModal.bind(this)}>
                        { this.state.loading ? <SimpleSwiperWithParams slides={this.state.activePostImages}/> : null }
                    </Modal>
                ) : null}
                { this.state.isModalUser ? (
                    <Modal onCloseModal={this.handleCloseModalUser.bind(this)}>
                        <UserModalProfile user={this.state.userInfo}/>
                    </Modal>
                ) : null}
            </div>
        )
    }
}

export default PostList;