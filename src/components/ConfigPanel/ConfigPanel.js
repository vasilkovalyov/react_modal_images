import React from 'react'
import './ConfigPanel.scss'
import axios from 'axios'

const apiKey = '1Vd3uFiWa7U0PzNxwg17UmTEBCygJE6knnSTKAiL4wM';

export default function ConfigPanel(props) {
    function handlePerPageCount(number) {
        axios.get(`https://api.unsplash.com/photos/`, {
            params: {
                client_id: apiKey,
                per_page: number
            }
        })
        .then(response => response.data)
        .then(data => {
            this.setState({
                postList: data,
                perPageCount: number
            })
        })
    }

    return (
        <div className="config-panel">
            <ul className="config-panel__list">
                <li className="config-panel__item">
                    <button className="config-panel__btn">9</button>
                </li>
                <li className="config-panel__item">
                    <button className="config-panel__btn">18</button>
                </li>
                <li className="config-panel__item">
                    <button className="config-panel__btn">36</button>
                </li>
            </ul>
        </div>
    )
}