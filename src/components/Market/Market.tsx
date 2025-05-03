// import { location } from '../../Locations.json'
// import Transactor from './Transactor'
// import Styling from '../../Styling'

// interface MarketProps {
//     index: number
//     className: string
// }

// const Market: React.FC<MarketProps> = ({index, className}) => {
//     const potions = location[index]?.potion
//     if(!potions){throw new Error('Potions unavailable')}
//     return (
//         <form name='market' className={className}>
//             <header className={Styling.header1}>Welcome to {location[index].alias}</header>
//             <table className='table card-content'>
//                 <tbody>
//                     {
//                         potions && Object.entries(potions).map(([potion, details]) => (
//                             <tr key={potion}>
//                                 <td>{potion}</td>
//                                 <td>{details.price}</td>
//                                 <td>{details.available}</td>
//                                 <td>{<Transactor commodity={potion} available={details.available} />}</td>
//                             </tr>
//                         ))
//                     }
//                 </tbody>
//             </table>
//         </form>
//   )
// }

// export default Market