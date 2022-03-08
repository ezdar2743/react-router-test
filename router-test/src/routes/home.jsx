import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Todo from '../components/todo';
import { add,remove} from '../store';

const Home = ({toDos,addToDo}) => {
    const [text, setText] = useState("");
    const onChange = (e)=>{
        setText(e.target.value)
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        addToDo(text)
        setText('')
        

    }
    
    return (
        
        <>
            <h1>To do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text}  onChange={onChange}/>
                <button>add</button>
            </form>
            <ul>{toDos.map(text=>(
                <Todo {...text} key={text.id}/>
                
            ))}</ul>
        </>
    );
};
function mapStateToProps(state,ownProps){
    return  {toDos: state}

}
function mapDispatchToProps(dispatch,ownProps){
    return {
        addToDo: (text)=>{
            dispatch(add(text))
        }
    }

}
export default connect(mapStateToProps,mapDispatchToProps) (Home);