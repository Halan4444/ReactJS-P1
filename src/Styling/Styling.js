import React, {Component} from 'react';
import Child from './Child'
import style from './Styling.module.css'


class Styling extends Component {
    render() {
        const styleText = {
            color: 'pink',
            padding:'15px',
            backgroundColor:'black'
        }


        return (
            <div>
                <Child/>
                <p className='txt'>Hello Cyperlearn</p>
                <span className={style.txtStyle}>Hello Khải cyperlearn</span>
                <p style={styleText}>Hello Khải 32132</p>
                <p style={{color: 'pink',
                    padding:'15px',
                    backgroundColor:'black'}}>
                    hello Khải 321321
                </p>
            </div>
        );
    }
}

export default Styling;