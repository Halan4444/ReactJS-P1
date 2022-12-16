import React, {Component} from 'react';
import HeaderDemo from "../component/BaiTapChiaLayout/HeaderDemo";

const student1 = {
    name: 'Ha Lan',
    age: 12
}

class DataBinding extends Component {

    name = 'Truong Tan Khai';

    student = {
        name: 'Song Le',
        age: 20
    }

    renderImage = () => {
        return <img src='https://vmo.link/DPirOYh' alt="covid.jpg" />
    }
    renderMultiComponent = () => {
       return<div>
            <nav className='nav justify-content-center bg-dark'>
                <a className='nav-link active' href='http://cyberlearn.vn'>Active Link</a>
                <a className='nav-link' href='http://cyberlearn.vn'>Link</a>
                <a className='nav-link disabled' href='http://cyberlearn.vn'>Disabled Link</a>
            </nav>
        </div>

    }

    //Render nội dung
    renderInfoVirus = () => {
        const virus = {
            id: 'Covid-19',
            name: 'Corona',
            img: 'https://vmo.link/',
            alias: 'SARS-CoV-2'
        }

        return <div className='card text-white bg-primary'>
            <h1>Hi Ban Oi</h1>
            <img className='card-img-top' src={virus.img} alt={virus.id}/>
                <div className='card-body'>
                    <h4 className='card-title'>{virus.name}</h4>
                    <p className='card-text'>{virus.alias}</p>
                </div>
        </div>
    }


    render() {
        const school = 'cyberlearn';
        return (
        <div>
            <h1>hello {this.name} - school: {school}</h1>
            <h3>Binding Object</h3>
            <h1 id='title'>name: {this.student.name} - age: {this.student.age}</h1>
            <h1 id='title'>name: {student1.name} - age: {student1.age}</h1>
            <h3>Binding Function</h3>
            {this.renderImage()}
            <hr/>
            {this.renderMultiComponent()}
            <hr/>
            {this.renderInfoVirus()}

        </div>
        );
    }
}

export default DataBinding;