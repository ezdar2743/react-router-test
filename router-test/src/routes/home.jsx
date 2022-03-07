import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Todo from '../components/todo';
import { actionCreators} from '../store';

const Home = ({toDos,addTodo}) => {
    const [text, setText] = useState("");
    const onChange = (e)=>{
        setText(e.target.value)
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        addTodo(text)
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
        addTodo: (text)=>{
            dispatch(actionCreators.addTodo(text))
        }
    }

}
export default connect(mapStateToProps,mapDispatchToProps) (Home);