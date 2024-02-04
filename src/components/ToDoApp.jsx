import React, {useState} from 'react';
import 'bulma/css/bulma.css';

import {InputToDo, Filter, ToDo} from './index';

export const ToDoApp = () => {
    // generate random key: uniqness useful for add/remove
    const getKey = () => Math.random().toString(32).substring(2);

    // make state
    const [todos, setToDos] = useState([]);
    const [filter, setFilter] = useState('ALL');

    const handleAdd = text => {
        setToDos([...todos, {key:getKey(), text, done:false}]);
    };

    const handleFilterChange = value => setFilter(value);
    
    const displayToDos = todos.filter(todo => {
        if (filter === 'ALL') return true;
        if (filter === "TODO") return !todo.done;
        if (filter === 'DONE') return todo.done;
    });
    
    const handleCheck = checked => {
        const newToDos = todos.map(todo => {
            if(todo.key === checked.key) {
                return {...todo, done: !todo.done};
            }
            return todo;
        });
        setToDos(newToDos);
    };

    return (
        <div className='panel is-warning'>
            <div className='panel-heading'>
                ToDo-List
            </div>
            <InputToDo onAdd={handleAdd} />
            <Filter 
                onChange={handleFilterChange}
                value={filter}
            />
            {displayToDos.map(todo => (
                <ToDo  
                    key={todo.key}
                    todo={todo}
                    onCheck={handleCheck} 
                />
            ))}
            <div className='panel-block'>
                {displayToDos.length} todos
            </div>
        </div>
    );
}

export default ToDoApp;