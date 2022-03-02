import React from "react";
import './search-box.css';

class SearchBox extends React.Component {
    render() {
      return  <div className='container'>
      <div className="box">
       <input type="text" className="searchField" placeholder="Enter FIR"></input>
       <button className="btn">Predict</button>
      </div>
     
    </div>
    }
  }

export default SearchBox;
