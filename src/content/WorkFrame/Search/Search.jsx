import React from 'react'
import s from './Search.module.css'

const Search=(props)=>{
    return(
        <div>
            <input className={s.search} type='text' placeholder='Search news'/>
            <button>Поиск</button>
        </div>
    )
}

export default Search;