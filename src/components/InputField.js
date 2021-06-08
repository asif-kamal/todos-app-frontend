import React from 'react';


class InputField extends React.Component {
    render() {
        return(
            <form>
                <input type='text' name='todo' placeholder='Add a todo item to your list'/>
            </form>
        )
    }
}

export default InputField;