import React, { Component } from 'react';
import './App.css'
import Table from './components/Table'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      numOfRows: 1,
      numOfCols: 1,
      color: "",
      tag: "All"

    }
  }
    handleAddRow = () => {
        let exisitingRows = this.state.numOfRows;
        this.setState({

          numOfRows: exisitingRows + 1

        })
      }

      handleAddCol = () => {

        let existitingCols = this.state.numOfCols;
        this.setState({

          numOfCols: existitingCols + 1

        })
      }

      handleRemoveRow=()=>{
        let existingRows=this.state.numOfRows;
        this.setState({
          numOfRows:existingRows-1
        })
      }
      handleRemoveCol=()=>{
        let existingCols=this.state.numOfCols;
        this.setState({
          numOfCols:existingCols-1
        })
      }


      handleFillAll=()=>{
        
        this.setState({
          
        })
      }
  

  render(){
     return (
      
  
      <div className="App">
     <button type="button" onClick= {this.handleAddRow}>Add Row </button>
     <button type="button" onClick= {this.handleAddCol}>Add Col</button>
     <button type="button" onClick={this.handleRemoveRow}>Remove Row</button>
     <button type="button" onClick={this.handleRemoveCol}>Remove Column</button>
     <button type="button" onClick={this.handleFillAll}>Fill All</button>
    
     <br></br>
     
     <label>Choose a color to change a cell to: </label>
     <select onChange={ (event) => {
         this.setState({
           color: event.target.value
         })
       }}>
             <option>-Select-</option>
             <option value="yellow">Yellow</option>
             <option value="green">Green</option>
             <option value="red">Red</option>
             <option value="purple">Purple</option>
       </select>
       <br></br>
         <Table 
         numOfRows = {this.state.numOfRows} 
         numOfCols = {this.state.numOfCols}
         color = {this.state.color}
         
         />


       </div>

     
    );
  }
}

export default App
