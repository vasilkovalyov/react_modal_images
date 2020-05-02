import React from 'react'
import './Pagination.scss'

export default function Pagination(props) {
    const totalItems = props.totalElems;
    const countPerPage = props.perPage;
    const currentPage = props.currentPage

    const countPages = () => Math.ceil(totalItems / countPerPage)

    return (
        <div className="pagination">
            <button className="pagination__btn pagination__btn-prev" onClick={props.handleOnPrevPage}>Prev</button>
            <ul className="pagination__list">
                <li className="pagination__item">{currentPage}</li>
            </ul>
            <button className="pagination__btn pagination__btn-next" onClick={props.handleOnNextPage}>Next</button>
        </div>
    )
}