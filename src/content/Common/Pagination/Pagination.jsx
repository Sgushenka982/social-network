import React from 'react'
import s from "./Pagination.module.css";

const Pagination = ({totalUsersCount,pageSize,currentPage,onPageChanged})=>{
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let pagesElement = pages.map(p => {
        return (
            <span
                key={p}
                className={currentPage === p ? s.selected : null}
                onClick={() => onPageChanged(p)}
            >
                {p}
            </span>
        )
    })
    return(
        <div className={s.pagination}>
            {pagesElement}
        </div>
    )
}

export default Pagination