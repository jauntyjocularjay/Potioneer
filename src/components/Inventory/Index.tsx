import React from 'react'
import { useState } from 'react'
import Styling from '../../Styling'
import {inputType as input} from '../constants/index'

interface InventoryProps {
    className: string
}

interface InventoryItem {
    [key: string]: number
}
interface Data {
    inventory: InventoryItem
}

const Inventory: React.FC<InventoryProps> = () => {
    const user = window.localStorage.getItem('user')
    const data: Data = user ? JSON.parse(user) : {inventory: {}}
    const [quantityHeld, setQuantityHeld ] = useState(0)

    return (
        <div className='card'>
            <h1 className={Styling.header1}>Inventory</h1>

            {
                Object.entries(data.inventory).map(([alias, quantity]: [String, number], index: Number) => (
                    <form key={index.toString()} className='card' id={`sell-${alias}`}>
                    <label>
                        <span className='potion-alias'>{alias}</span>
                        <span className='quantity'>{quantity.toString()}</span>
                        <input type={input.number} id='to-buy' className='input is-info' defaultValue={0} max={quantity} min={0} />
                        <input type={input.button} className='input is-primary' value='Sell' />
                    </label>
                    </form>

                ))
            }
        </div>

        /*
        <div className={className}>
            <span className={Styling.header1}>Inventory</span>    
            <table>
                <tbody>
                    {
                        Object.entries(data.inventory).map(([name, quantity]) => (
                            <tr key={name}>
                                <td>{name}</td>
                                <td>{quantity}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        */
        
    )
}

export default Inventory