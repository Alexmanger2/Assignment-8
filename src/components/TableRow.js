
import React from 'react'
import TableCell from './TableCell'



function renderCols(numOfCols, Color){
    let allCols = []; //allCells
    console.log(Color)
    for(let i = 0; i < numOfCols; i++){
       allCols.push(<TableCell color = {Color}/>)
    }
    return allCols;

}


function TableRow(props) {
    return (
        <tr className="row">
         
          {renderCols(props.cols, props.color)}
            
        </tr>
    )
}

export default TableRow
