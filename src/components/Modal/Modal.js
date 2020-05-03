import React, { Component } from 'react'
import './Modal.scss'



class Modal extends Component {
    state = {
        loading: false
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
    }


    componentWillUnmount() {
        this.setState({
            loading: false
        })
    }
   
    render() {
        return (
            <div className="modal" >
                <div className="modal__overlay" onClick={this.props.onCloseModal}></div>
                <div className="modal__content">
                    <button className="modal__btn" onClick={this.props.onCloseModal}>Close</button>
                    <div className="modal__image">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;