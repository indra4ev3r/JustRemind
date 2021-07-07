import React, { useState } from 'react';

export const AddReminder = () => {
    const [items, setItems] = useState([]);
    const [text, setText] = useState('');
    
    const onClick = () => {
        setItems([...items, {id: items.length, value: text}]);
        setText('');
    }

    return (
        <div style={{flex: 1, alignItems: 'start'}}>
            <h5>
                Add a Reminder {' '}               
                <input type="text" name="reminder" value={text} onChange={e => setText(e.target.value)} />
                <button onClick={onClick}>Add</button>
            </h5>
            {items.map((rem, key) => <li key={rem.id} style={{flex: 1, alignItems: 'flex-start', alignContent: 'start', textAlign: 'left'}}>{rem.value}</li>)}
        </div>
    );
}
