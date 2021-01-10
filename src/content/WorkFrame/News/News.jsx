import React from 'react'
import Search from '../Search/Search'
import s from './News.module.css'

const News=(props)=>{
let newsElement= props.state.news.map(n=>
    <div key={n.id} className={s.post}>
        <img className='img' scr={n.imgScr} alt='картинка'/>
        <p>likeCount={n.likeCount}</p>
    </div>
    )    
    return(
        <div>
            <Search/>
            <div className={s.content}>
                {newsElement}
            </div>
        </div>
    )
}
export default News;