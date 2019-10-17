import React, {Component} from 'react';
import * as XLSX from 'xlsx';
import TableDisplay from './tableDisplay';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      file:null
    } 
  }
  handleChange(event){
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader(); 

    reader.onload = function(e){
      var data = e.target.result;
      let readedData = XLSX.read(data, {type: 'binary'});
      const wsname = readedData.SheetNames[0];
      const ws = readedData.Sheets[wsname];

      const sheetdata = XLSX.utils.sheet_to_json(ws, {header:false});
      this.setState({
        file:sheetdata
      })
     
    }.bind(this);
    reader.readAsBinaryString(file)
   
}  
render() {
  return (
    <div className="App" >
      <form >
        <div>
        <h1>Upload:</h1>
        <input type="file" onChange={this.handleChange.bind(this)}/>
        </div>
        <div style = {{ 'padding': '10px 0'}}>
        <button>Submit</button>
        </div>
      </form>
      <hr/>
      <h4>File added</h4>
      <div className="fileDisplay">       
        <TableDisplay data= {this.state.file} />
      </div>

    </div>
  );
}
}
export default  App;

