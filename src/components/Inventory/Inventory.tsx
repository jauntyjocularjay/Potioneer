import React from 'react'
import Styling from '../../Styling'

interface InventoryProps {
    className: string
}

interface InventoryItem {
    [key: string]: number
}
interface Data {
    inventory: InventoryItem
}

const Inventory: React.FC<InventoryProps> = ({className = ''}) => {
    const user = window.localStorage.getItem('user')
    const data: Data = user ? JSON.parse(user) : {inventory: {}}
    return (
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
    )
}

export default Inventory