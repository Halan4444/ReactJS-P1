import React, {Component} from 'react';

class RenderWithLoop extends Component {

    productList = [
        {id:1, name:'black car', price:1000,img:'./carbasic/products/black-car.jpg'},
        {id:2, name:'red car', price:2000,img:'./carbasic/products/red-car.jpg'},
        {id:3, name:'silver car', price:3000,img:'./carbasic/products/steel-car.jpg'},
        {id:4, name:'steel car', price:4000,img:'./carbasic/products/silver-car.jpg'},
    ]

    renderTable = () => {
        //Cách 1:
        // let mangTrComponent = [];
        // for (let index =0; index < this.productList.length; index++) {
        //     let product = this.productList[index];
        //     let trJSX = (<tr key={index}>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td>
        //             <img style={{width: '100px'}} src={product.img} />
        //         </td>
        //     </tr>)
        //     mangTrComponent.push(trJSX)
        // }
        // return mangTrComponent

        //Cách 2:
        return  this.productList.map((product, index) => {
            return (
                <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                        <img src={product.img} style={{width:'200px'}} alt={product.id}/>
                    </td>
                </tr>
        )
        });}

    render() {
        return (
            <div className='container'>
                <table className='table'>
                    <tbody>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Img</th>
                        </tr>
                    </tbody>
                    <tbody>
                    {this.renderTable()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RenderWithLoop;