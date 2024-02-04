import React, {useState} from 'react';
import 'bulma/css/bulma.css';

export const InputToDo = (props) => {
    
    // make state
    const [text, setText] = useState('');

    // reflect input to the text
    const handleChange = e => setText(e.target.value);

    // ENTER -> ToDo
    const handleEnter = e => {
        if(e.key == 'Enter') {
            if(!text.match(/\S/g)) return;
            props.onAdd(text);
            setText('');
        }
    };

    return (
        <div className="panel-block">
            <input
                class="input"
                type="text"
                placeholder="Enter to add"
                value={text}
                onChange={handleChange}
                onKeyPress={handleEnter}
            />
        </div>
    )
}

export default InputToDo;