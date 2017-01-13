//noinspection JSUnresolvedVariable
import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';



const title = "Persim";

class AppNavbar extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="inverse" inverse toggleable >
                    <NavbarToggler right onClick={this.toggle}/>
                    <NavbarBrand href="/">{title}</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">Ders Programı</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">Çıkış</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;
