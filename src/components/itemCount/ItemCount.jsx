import React, { useState } from 'react'

export const ItemCount = ({total, inicial, onAdd}) => {
    const [cantidad, setCantidad] = useState(inicial)

    const aumentar = () => {
        if (cantidad < total ) {
            setCantidad(cantidad+1)
        }
    }

    const reducir =() => {
        if (cantidad > 1) {
            setCantidad(cantidad-1)
        }
    }
  return (
    <div className='contador'>
        <div className='controles'>
            <button className='button' onClick={reducir}>-</button>
            <h4 className='number'>{cantidad}</h4>
            <button className='button' onClick={aumentar}>+</button>
        </div>
        <div className='add-cart'>
            <button className=' cart-button' onClick={() => onAdd(cantidad)} disabled={!total} >
                Agregar al carrito
            </button>
        </div>
    </div>
  )
}
