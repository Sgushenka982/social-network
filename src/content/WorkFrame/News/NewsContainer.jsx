import News from './News'
import {connect} from 'react-redux';



let mapStateToProps =(state)=>{
    return{
        state:state.newsPage
    }
}

const NewsContainer = connect(mapStateToProps)(News);

export default NewsContainer;