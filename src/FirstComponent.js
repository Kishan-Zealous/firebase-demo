import React from 'react'

const FirstComponent = ({handleDrop,firstArray, handleDragEnd,handleDragStart, x, y, handleDrag }) => {
    return (
        <div id='firstelement' style={{ position: 'relative', width: '500px', height: "500px", background: "#ffffff", color: "#000" }}>
            {firstArray.map((element)=><h3 name={element} onDrop={handleDrop} draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDrag={handleDrag} style={{ color:element }}>{element}</h3>)}
        </div>
    )
}

export default FirstComponent