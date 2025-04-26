import { location } from '../../Locations.json'
import Styling from '../../Styling'

interface NavigatorProps {
    className: string
}
// interface Potion {
//     price: number
//     available: number
// }
interface Location {
    alias: string
    // potion: Potion
}

const Navigator: React.FC<NavigatorProps> = ({ className }) => {
    return (
        <div className={className}>
            <span className={Styling.header1}>GPS</span>
            {location.map((location: Location, index: number) => (
                <button
                    type='button'
                    key={index}
                    className={Styling.flexButton}
                >
                    {location.alias}
                </button>
            ))}
        </div>
    )
}

export default Navigator
