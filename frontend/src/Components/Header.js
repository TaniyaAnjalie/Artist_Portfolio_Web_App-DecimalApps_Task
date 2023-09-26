import React from 'react'

import { Link} from 'react-router-dom';
import { Container, Row, Image, Nav } from 'react-bootstrap';

import Logo from '../Assets/Logo.png';


const style = {
    header:{
        margin: "0 0 10px 0"
    },
    logo: {
        width: "30%",
    },
    nav_wrapper :{
        justifyContent: "space-between",
        display: "flex"
    },
    menuContainer: {
        display: 'flex',
        alignItems: 'center',
      },
    menu: {
        textDecoration: "none",
        color: "#A459D1",
        fontWeight: "1000",
        fontSize: "1.3rem",
        marginRight: '30px',
    }
}

function Header() {

  return (
    <header style={style.header}>
      <Container>
            <Row>
                <div style={style.nav_wrapper}>
                    <div className='logo'>
                        <Link to='/home'> <Image src={Logo} roundedCircle style={style.logo}/> </Link>
                    </div>

                    <div style={style.menuContainer}>
                        <ul>
                            <Nav
                                activeKey="/home"
                                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>

                                <Nav.Item>
                                    <Link to="/home" style={style.menu}> Home </Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to="/about" style={style.menu}> About </Link>
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
