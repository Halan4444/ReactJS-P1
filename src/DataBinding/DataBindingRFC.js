import React from 'react';


const school = 'Cyperlearn'

const student1 = {
    name: 'Covid 19',
    age:2
}
function DataBindingRfc(props) {

    const renderInfoVirus1 = () => {
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


    const name = "Khai Cyperlearn"
    return (
        <div>
            <h1>
                React funtional component data binding
            </h1>
            <hr/>
            <h1 className='text-danger'>{name}</h1>
            <h1>name: {student1.name} age:{student1.age}</h1>
            <h3>Info Virus</h3>
            {renderInfoVirus1()}
        </div>
    );
}

export default DataBindingRfc;