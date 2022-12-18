import React, {Component} from 'react';

class HandleEvent extends Component {

    handleClick = (name) => {
        alert(name)
    }

    //Truyền tham số khi click
    handleClickParams = (param, button) => {
        console.log("param",param);
        console.log("param",button.target);

        alert("button: ", button)
    }

    render() {
        return (
            <div>
                <button id="btnClickMe" onClick={ () => {
                    this.handleClick('Khải')
                }} >Click Me !</button>

                <button id='btnClickMe' onClick={this.handleClickParams.bind(this,'hello men')}>Click Here</button>
            </div>
        );
    }
}

export default HandleEvent;