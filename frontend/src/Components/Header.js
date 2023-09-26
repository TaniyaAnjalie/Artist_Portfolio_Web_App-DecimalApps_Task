import React, {useRef, useEffect} from 'react'

import { Link} from 'react-router-dom';
import { Container, Row, Image, Nav } from 'react-bootstrap';

import Logo from '../Assets/Logo.png';


const style = {
    header:{
        width:"100%",
        height: "100px",
    },
    logo: {
        width: "30%",
        padding: "5px",
        marginBottom: "3px",
    },
    nav_wrapper :{
        alignItems: "center",
        justifyContent: "space-between",
    },
    menu: {
        textDcoration: "none",
        color: "purple",
        fontWeight: "1000",
        fontSize: "1.3rem",
    },
    sticky_header: {
        width: "100%",
        height: "110px",
        lineHeight: "80px",
        background: "#fff",
        position: "sticky",
        top: "0",
        left: "0",
        boxShadow: "3px 3px 8px -3px #ddd",
        zIndex: "999",
    },
}

function Header() {

    const headRef = useRef(null)

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop >80 || document.documentElement.scrollTop >80){
                headRef.current.classList.add('sticky_header')
            }else{
                headRef.current.classList.remove('sticky_header')
            }
        })
    }

    useEffect(()=>{
        stickyHeaderFunc()

        return window.removeEventListener('scroll', stickyHeaderFunc)
    })

  return (
    <header className="header" ref={headRef} style={style.header}>
      <Container>
            <Row>
                <div className="nav_wrapper d-flex" style={style.nav_wrapper}>
                    <div className='logo'>
                        <Link to='/home'> <Image src={Logo} roundedCircle style={style.logo}/> </Link>
                    </div>

                    <div className='navigation'>
                        <ul className="menu d-flex align-items-right gap-10" style={style.menu}>
                            <Nav
                                activeKey="/home"
                                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>

                                <Nav.Item>
                                    <Nav.Link href="/home">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="About">About</Nav.Link>
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
