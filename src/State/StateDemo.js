import React, {Component} from 'react';

class StateDemo extends Component {

    state = {
        status : false
    }


    userLogin = {
        name: 'Song Lee',
        age: 20
    }

    login = () => {
        //this.state.status = true: Không set giá trị trực tiếp trên state mà phải thông qua setState
        let newState = {
            status : true
        }
        //Gọi phương thức setState => truyền vào state mới
        //setState: là phương thức bất đồng bộ

        this.setState(newState,() => {
            console.log(this.state)
        })

    }

    renderUserLogin = () => {
        if(this.state.status) {
            return <div className='text-center' >{this.userLogin.name}</div>
        }
        return <button onClick={ () => {this.login()} }>Login</button>
    }

    render() {
        return (
            <div>
                {this.renderUserLogin()}
            </div>
        );
    }
}

export default StateDemo;