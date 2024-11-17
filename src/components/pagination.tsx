import React from 'react'
import { IPagination } from '../types/types'

function Pagination({
    setCursor,
    setPage,
    page,
    count,
    setReload,
    setStreams,
}: IPagination) {
    const nextClick = () => {
        if (page + 1 <= count) {
            setStreams(null)
        }
        setReload(false)
        setCursor('next')
        setPage(page + 1 > count ? count : page + 1)
    }

    const prevClick = () => {
        setReload(false)
        setCursor('prev')
        setPage(page - 1 < 1 ? 1 : page - 1)
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item" onClick={() => prevClick()}>
                    <button className="page-link" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>

                <li className="page-item" onClick={() => nextClick()}>
                    <button className="page-link" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
