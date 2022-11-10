import React from 'react';
import SocialLink from './SocialLink';

export default function Navigation(props) {
    // You can fully customize this implementation
    // including changing the JSX, CSS and React hooks
    return (
        // <nav className="navbar navbar-expand-lg sticky-top rounded" aria-label="Eleventh navbar example">
        //     <div class="container-fluid">
        //         <a class="navbar-brand" href="#">Navbar</a>
        //         <button class="navbar-toggler" type="button" 
        //             data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
        //             aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <a className="nav-link active" aria-current="page" href="#about">Обо мне</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#services">Услуги</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#price">Цены</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>


        <nav class="navbar navbar-expand-lg navbar-light sticky-top">
            <div class="container-fluid container-xxl">
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#about">Обо мне</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Услуги</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#price">Цены</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog">Подкаст</a>
                        </li>
                    </ul>
                    {/* <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                    <SocialLink></SocialLink>
                </div>
            </div>
        </nav>
    );
}