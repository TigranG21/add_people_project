import React, { Component } from "react";

const TableHead = () =>{
    return(
        <thead className="tableHead">
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
        
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => {props.removeCharacter(index)}}>Delete</button>
                </td>
            </tr>
        )
    })

    return (
        <tbody className="tableBody">
            {rows}
        </tbody>
    )
}

const Table = (props) => {
        const {characterData, removeCharacter} = props

        return(
            <table>
                <TableHead />
                <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
            </table>
        )
}

export default Table