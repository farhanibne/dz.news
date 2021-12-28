import React, { Component } from 'react'


export class Navbar extends Component {
    render() {
        return (
           <>
           
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">DZ-NEWS</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="https://farhanibne.github.io/farhan.net/">About US</a>
                </li>
               
             
            </ul>
               
        </div>
        </div>
    </nav>

        <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Be ready......</strong>NEW NEWS EVERY HOUR...
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

           </>
        )
    }
}

export default Navbar
