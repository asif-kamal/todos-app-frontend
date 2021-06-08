import React from 'react';


class InputField extends React.Component {

    state = {
        todoItem: "",
    }

    handlechange = e => {this.setState({todoItem: e.target.value})}
    handleSubmit = e => {
        e.preventDefault();
    }

    render() {
        return(
            <form>
                <input type='text' name='todoItem' placeholder='Add a todo item to your list' onChange={this.handleChange}/>
            </form>
        )
    }
}

export default InputField;