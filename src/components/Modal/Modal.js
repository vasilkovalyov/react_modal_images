import React, { Component } from 'react'
import './Modal.scss'
import SimpleSwiperWithParams from '../SwiperComponent/SwiperComponent';

import axios from 'axios'

const apiKey = '1Vd3uFiWa7U0PzNxwg17UmTEBCygJE6knnSTKAiL4wM';


class Modal extends Component {
    state = {
        slides: [],
        isLoading: false
    }

    componentWillMount() {
        const url = this.props.modalData.user.links.photos;

        axios.get(url, {
            params: {
                client_id: apiKey,
                per_page: 10
            }
        })
        .then(response => response.data)
        .then(data => {
            this.setState({
                slides: data,
                isLoading: true
            })
        })
        .catch(e => console.log(e.message))
    }


    render() {
        return (
            <div className="modal" >
                <div className="modal__overlay" onClick={this.props.onCloseModal}></div>
                <div className="modal__content">
                    <button onClick={this.props.onCloseModal}>Close</button>
                    <div className="modal__image">
                        { this.state.isLoading ? <SimpleSwiperWithParams slides={this.state.slides}/> : null }
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;