import React, { Component } from 'react'
import axios from 'axios'

import './PostList.scss'

import Post from '../Post/Post'
import Pagination from '../Pagination/Pagination';
import Modal from '../Modal/Modal';

const apiKey = '1Vd3uFiWa7U0PzNxwg17UmTEBCygJE6knnSTKAiL4wM';

class PostList extends Component {
    state = {
        currentPage: 1,
        postList: [],
        loading: false,
        perPageCount: 9,
        totalPhotos: 0,
        isModal: false,
        modalData: null
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
        this.setState({
            isModal: true,
            modalData: user
        })
    }

    handleCloseModal(e) {
        console.log(e);
        
        this.setState({
            isModal: false
        })
    }

    render() {
        const userList = !this.state.loading ? 
            <span className="loader"></span> : 
            this.state.postList.map((item, i) => <div className="col" key={i}>
                <Post post={item} onClickImagesUser={this.handleClickImagesUser.bind(this, item)}/>
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

                {this.state.isModal ? <Modal modalData={this.state.modalData} onCloseModal={this.handleCloseModal.bind(this)}/> : null}
            </div>
        )
    }
}

export default PostList;