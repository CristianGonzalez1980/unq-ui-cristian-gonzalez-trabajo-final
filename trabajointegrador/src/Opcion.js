import React from 'react';

function Opcion({cuadro, onSelection}) {
    const { text, color, id, image } = cuadro;

    return (
    <div className={`opcion opcion--${color}`} >
        <div className="actions">
          <img src={image} alt={image} className="imagen-opcion" onClick={() => onSelection(id)} />
        </div>
        <p className="text">{text}</p>
     </div> 
    );
}
export default Opcion;