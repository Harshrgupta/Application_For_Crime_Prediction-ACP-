import React from 'react';
import { Link } from 'react-scroll';
import { Link as Links, withRouter } from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component';
import './header.styles.scss';


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            smooth: true,
            duration: 100,
            clicked: false,
            another: props
        }
    }
    handleclick = () => {
        this.setState({ clicked: !this.state.clicked });
    }
    clickHandler = (event) => {
        event.preventDefault();
        this.state.another.history.push('/')
    }
    render() {
        return (
            <nav className="navbar-item">
                <h3 className="nav-logo">ACP - Application for Crime Prediction</h3>
                <div className="menu-icon" onClick={this.handleclick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    <li><Link className="options" to="home" smooth={this.state.smooth} duration={this.state.duration * 1}> HOME </Link></li>
                    <li><Link className="options" to="ipcs" smooth={this.state.smooth} duration={this.state.duration * 2} > <Links to="/">IPCS </Links> </Link></li>
                    <li><Link className="options" to="about-us" smooth={this.state.smooth} duration={this.state.duration * 3} > <Links to="/">ABOUT US </Links>   </Link></li>
                    {/* <li><Link className="options" to="contact-us"  smooth={ this.state.smooth } duration={this.state.duration*4 } > <Links to="/">CONTACT US </Links>   </Link></li> */}
                    {/* <li><Link className="options-mobile" to="contact-us"  smooth={ this.state.smooth } duration={this.state.duration*6 } > <Links to="/">SIGN UP </Links>   </Link></li> */}
                </ul>
            </nav>
        );
    }
}

export default withRouter(Header); //creating a heigher order component using connect function