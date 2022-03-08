import React from 'react';
import {connect} from "react-redux"
import { Link } from 'react-router-dom';
import { remove } from '../store';

const Todo = ({text,onBtnClick,id}) => {

    return (
        
            
            <>
            <Link to={`/${id}`}>
        <li>{text} </li>
        </Link>
        <button onClick={onBtnClick}>delete</button>
        </>
      
    );
};
function mapDispatchToProps(dispatch, ownProps){
    return{
    onBtnClick: ()=>dispatch(remove(ownProps.id))
    
}

}
export default connect(null,mapDispatchToProps) (Todo);