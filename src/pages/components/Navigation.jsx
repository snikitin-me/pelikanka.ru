import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';

import SocialLink from "./SocialLink";

export default function Navigation(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const toggleOffCanvas = () => {
        setShow((show) => !show);
    }
    // const offsetValue = -56;
    const menuItems = [
        {text: "Обо мне", url: "#about"},
        {text: "Услуги", url: "#services"},
        {text: "Цены", url: "#price"},
        {text: "Блог", url: "/blog"},
        {text: "Подкаст", url: "/podcast"}
    ];

    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light sticky-top">
            <div class="container-fluid container-xxl">

            <button onClick={handleShow} class="navbar-toggler" type="button"
                aria-controls="navbarNavAltMarkup" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    {menuItems.map((item, index) => (
                        <li data-index={index} className="nav-item">
                            <a className="nav-link" href={item.url}>{item.text}</a>
                        </li>
                    ))}
                    
                </ul>
                {/* <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form> */}
                <SocialLink></SocialLink>
            </div>
        </div>
    </nav>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Полина Никитина</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
                {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    {menuItems.map((item, index) => (
                        <li data-index={index} className="nav-item">
                            <a className="nav-link" href={item.url} onClick={toggleOffCanvas}>{item.text}</a>
                        </li>
                    ))}
                </ul> */}

                <Nav
                    activeKey="/home"
                    onSelect={(selectedKey) => {
                            //   alert(`selected ${selectedKey}`)
                            toggleOffCanvas()
                        }
                    }
                    >
                    <Nav.Item>
                        {menuItems.map((item, index) => (
                             <Nav.Link 
                                // offset={offsetValue}
                                data-index={index} href={item.url}>{item.text}</Nav.Link>
                        ))}
                    </Nav.Item>
                </Nav>
                
                <SocialLink></SocialLink>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
}
