import React     from 'react';
import Navbar    from 'react-bootstrap/lib/Navbar';
import Nav       from 'react-bootstrap/lib/Nav';
import NavItem   from 'react-bootstrap/lib/NavItem';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import './Navigation.less';


export default class Navigation extends React.Component {
    render() {

        return (

            <Navbar className='Navbar__container'>
                <Navbar.Header>
                    <Navbar.Brand >
                        <a href="#">
                            <span>Soundproducion  </span>
                            <Glyphicon glyph='bullhorn' />
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Home</NavItem>
                        <NavItem eventKey={2} href="#">Portfolio</NavItem>
                        <NavItem eventKey={3} href="#">Sounds</NavItem>
                    </Nav>

                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Contact</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
