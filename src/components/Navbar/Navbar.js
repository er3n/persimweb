//noinspection JSUnresolvedVariable
import React, { Component } from 'react';
import classNames from 'classnames';


const title = "Persim";

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
                <button onClick={this.handleToggle} className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <a className="navbar-brand" href="#" >{title}</a>

                <div className={classNames('collapse', 'navbar-collapse', {show: this.state.isToggleOn})} >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Ders Programı <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;