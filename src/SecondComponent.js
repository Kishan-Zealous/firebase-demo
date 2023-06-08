import React from 'react'

const SecondComponent = ({ handleDrop,secondArray,handleDragEnd,handleDragStart,x,y,handleDrag }) => {
    return (
        <div id="secondelement" style={{ width: '500px', height: "500px", background: "#ffffff", color: "#000" }}>
                {secondArray.map((element)=><h3 onDrop={handleDrop} name={element} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDrag={handleDrag} style={{ color:element }}>{element}</h3>)}
        </div>
    )
}

export default SecondComponent