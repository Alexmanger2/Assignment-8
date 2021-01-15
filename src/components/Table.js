import React from 'react'
import TableRow from './TableRow'

function renderRows(numRows, numOfCols,color){
    
    let allRows = [];
    for(let i = 0; i < numRows; i++){
       allRows.push(<TableRow cols={numOfCols} color={color}/>)
    }
    return allRows;

}


function Table(props) {
    
    return (
        <table className="table">
        {renderRows(props.numOfRows,props.numOfCols,props.color)}
        </table>
    )
}

export default Table

