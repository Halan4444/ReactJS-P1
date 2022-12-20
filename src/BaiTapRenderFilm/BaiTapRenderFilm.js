import React, {Component} from 'react';
import DataFilms from '../Data/DataFilms.json'

class BaiTapRenderFilm extends Component {


    renderFilms = () => {

        let contentFilms = DataFilms.map((film,index) => {
            return <div className='col-3 mt-2' key={index}>
                <div className='card text-white bg-primary ml-5' style={{width:'250px'}}>
                    <img style={{width:'250px', height:'350px'}} className='card-img-top' src={film.hinhAnh} alt={film.tenPhim}/>
                    <div className='card-body'>
                        <h4 className='card-title' style={{fontSize:'17px', height:'50px'}}>{film.tenPhim}</h4>
                        <p className='card-text' style={{fontSize:'13px',height:'50px'}}>{film.moTa.length>80 ?<p> {film.moTa.substr(0,80)}...
                        </p> : <p> film.moTa</p>}</p>
                    </div>
                </div>
            </div>
        })
        return contentFilms;
    }

    render() {
        return (
            <div style={{backgroundImage:'url(./background/avanger.jpg)',minHeight:'2000px'}}>
                <div style={{backgroundColor: 'rgba(0,0,0,.8)',minHeight:'2000px'}}>
                <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'rgb(87,83,149)'}}>
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-white my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                    <div className='container-fluid'>
                        <div className='row'>
                            {this.renderFilms()}
                        </div>
                    </div>
            </div>

            </div>
        );
    }
}

export default BaiTapRenderFilm;