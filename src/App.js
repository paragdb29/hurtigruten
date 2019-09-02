import React from 'react';
import List from './List';
import "./style.scss";
import magnifyingGlass from "./assets/magnifying-glass.svg";
import cross from "./assets/cross.svg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedVal: '',
      searchResult: []
    };
  }
  
  onInputChange = (event) => {
    this.setState({searchedVal: event.target.value});
  }

  onInputKeyUp = (event) => {
    if(event.keyCode === 13){
      fetch('http://localhost:4000/ships/'+this.state.searchedVal)
        .then((res) => { return res.json() })
        .then((data) => {
          console.log(data);
            this.setState({searchResult:data});
          })
    }
  }

  clearInput = () => {
    this.setState({searchedVal:'', searchResult:[]});
  }

  render(){
    return (
      <div id="app">
        <h1>Parags assignment</h1>
        <div className="search-input-container">
          <input autoComplete="off" type="text" value={this.state.searchedVal} 
          placeholder="Search" name="search-input" aria-label="Type here and press enter to search" 
          onChange={this.onInputChange.bind(this)} onKeyUp={this.onInputKeyUp.bind(this)}/>
          {this.state.searchedVal.length > 0?
          <div role="img" alt="clear" className="icon" aria-label="click here to clear search" onClick={this.clearInput.bind(this)}><img src={cross} alt="magnifying Glass"/></div>:
          <div role="img" alt="search" className="icon"  aria-label="click here to Search" ><img src={magnifyingGlass} alt="magnifying Glass"/></div>}
        </div>
        {this.state.searchResult.length > 0 ? <List listData={this.state.searchResult}/>:null}
      </div>
    );
  }
}

export default App;
