import React from 'react'

import { Link} from 'react-router-dom';
import { Container, Row, Image, Nav } from 'react-bootstrap';

import Logo from '../Assets/Logo.png';


const style = {
    header:{
        width:"100%",
        height: "100px",
        margin: "0 0 30px 0"
    },
    logo: {
        width: "30%",
        padding: "5px",
    },
    nav_wrapper :{
        alignItems: "center",
        justifyContent: "space-between",
    },
    menu: {
        textDcoration: "none",
        color: "#A459D1",
        fontWeight: "1000",
        fontSize: "1.3rem",
    },
}

function Header() {

  return (
    <header style={style.header}>
      <Container>
            <Row>
                <div className="nav_wrapper d-flex" style={style.nav_wrapper}>
                    <div className='logo'>
                        <Link to='/home'> <Image src={Logo} roundedCircle style={style.logo}/> </Link>
                    </div>

                    <div>
                        <ul className="menu d-flex align-items-right gap-10">
                            <Nav
                                activeKey="/home"
                                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>

                                <Nav.Item>
                                    <Link to="/home" style={style.menu}> Home </Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to="About" style={style.menu}> About </Link>
                                </Nav.Item>
                            </Nav>
                        </ul>
                    </div>
                </div>
            </Row>
        </Container>
    </header>
  )
}

export default Header
