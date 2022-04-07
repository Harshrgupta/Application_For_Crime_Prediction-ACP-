import React from "react";
import './search-box.css';
import axios from 'axios';
const ipc = require('../../constants/ipc.json');

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', output: null, sectionTitle: null };
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }
    onClickHandler = (event) => {
        event.preventDefault();
        if (this.state.value) {
            axios.get('http://localhost:3001/get-result', { params: this.state.value }).then((value) => {
                // console.log(value);
                let val = ipc.filter((item) => (item.Section === value.data || item.Section === value.data.toString()))[0]
                this.setState({ output: value.data, sectionTitle: val.section_title })
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
            {this.state.output ?
                <div className="output">
                    <div>IPC - {this.state.output}</div>
                    <div>{this.state.sectionTitle}</div>
                </div> : null
            }
        </div>
    }
}

export default SearchBox;