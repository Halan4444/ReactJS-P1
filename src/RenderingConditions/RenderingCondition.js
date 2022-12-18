import React, {Component} from 'react';


class RenderingCondition extends Component {


    state = {
        login: false
    }
    userName = 'Trọng Tấn Khải';

    renderContent = () => {
        if(this.state.login) {
            return <p> Hello {this.userName}</p>
        }
        return <button onClick={()=> {this.check()}}>Đăng Nhập</button>
    }

    check = () => {
        this.setState({
            login:true
        })

    }


    render() {
        return (
            <div>
                Hello Men
                {this.renderContent()}
            </div>
        );
    }
}

export default RenderingCondition;