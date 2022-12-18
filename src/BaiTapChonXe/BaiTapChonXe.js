import React, {Component} from 'react';

class BaiTapChonXe extends Component {

    state = {
        imgProduct:require('../assets/products/black-car.jpg')
    }

    renderCar = (imgNewProduct) => {
        let newState = {
            imgProduct: imgNewProduct
        }
        this.setState(newState)
    }


    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-8'>
                        <img style={{width:'100%'}} src={this.state.imgProduct}/>
                    </div>
                    <div className='col-4'>
                        <div className="card text-dark">
                            <div className='card-header text-primary' style={{backgroundColor: "lightgray"}}>Exterior Color</div>
                            <div className="card-body">
                                <div className='row border pt-2 pb-2 mt-2' onClick={() => {this.renderCar(require('../assets/products/black-car.jpg'))}} style={{cursor:'pointer'}}>
                                    <img  className='col-4' src={require('../assets/icons/icon-black.jpg')} />
                                    <div className='col-8'>
                                        <h3>
                                            Crystal Black
                                        </h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>

                                <div className='row border pt-2 pb-2 mt-2' onClick={() => {this.renderCar(require('../assets/products/steel-car.jpg'))}} style={{cursor:'pointer'}}>
                                    <img className='col-4' src={require('../assets/icons/icon-steel.jpg')} />
                                    <div className='col-8'>
                                        <h3>
                                            Crystal Black
                                        </h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>

                                <div className='row border pt-2 pb-2 mt-2' onClick={() => {this.renderCar(require('../assets/products/silver-car.jpg'))}} style={{cursor:'pointer'}}>
                                    <img className='col-4' src={require('../assets/icons/icon-silver.jpg')} />
                                    <div className='col-8'>
                                        <h3>
                                            Crystal Black
                                        </h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>

                                <div className='row border pt-2 pb-2 mt-2' onClick={() => {this.renderCar(require('../assets/products/red-car.jpg'))}} style={{cursor:'pointer'}}>
                                    <img className='col-4' src={require('../assets/icons/icon-red.jpg')} />
                                    <div className='col-8'>
                                        <h3>
                                            Crystal Black
                                        </h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BaiTapChonXe;