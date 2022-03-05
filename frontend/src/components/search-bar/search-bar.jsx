import React from "react";
import './search-box.css';
import axios from 'axios';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', output: null };
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }
    onClickHandler = (event) => {
        event.preventDefault();
        if (this.state.value) {
            axios.get('http://localhost:3001/get-result', { params: this.state.value }).then((value) => {
                console.log(value)
                this.setState({ output: value.data })
            })
        } else {

            window.alert('please enter the FIR data')
            this.setState({ output: null })
        }
        console.log(this.state.value);
    }
    render() {
        return <div className='container'>
            <div className="box">
                <input type="text" className="searchField" placeholder="Enter FIR" onChange={this.handleChange}></input>
                <button className="btn" onClick={this.onClickHandler}>Predict</button>
            </div>
            {this.state.output ? <div className="output">output:{this.state.output}</div> : null}
        </div>
    }
}

export default SearchBox;