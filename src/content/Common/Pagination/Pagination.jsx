import React from 'react'
import s from "./Pagination.module.css";
import {useState} from "react";

const Pagination = ({totalUsersCount,pageSize,currentPage,onPageChanged,portionSize = 10})=>{

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let [portionNumber,setPortionNumber] = useState(1)
    let portionCount =Math.ceil(pagesCount/portionSize)
    let leftPortionPageNumber = (portionNumber-1)*portionSize+1;
    let rightPortionPageNumber = portionNumber*portionSize;

    let pagesElement = pages
        .filter(p=>p>=leftPortionPageNumber&&p<=rightPortionPageNumber)
        .map(p => {
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
            {portionNumber> 1 &&
            <button onClick={()=>{setPortionNumber(portionNumber-1)}}>Prev</button>}
            {pagesElement}
            {portionCount >portionNumber &&
            <button onClick={()=>{setPortionNumber(portionNumber+1)}}>Next</button>}
        </div>
    )
}

export default Pagination