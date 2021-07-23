import hogs from "../porkers_data"
import TileRender from "./TileRender"

function TileData( {hogsData} ) {
    return (
        <tile>
            {hogsData.map( (hog) => {
                return (
                    <TileRender
                    name = {hog.name}
                    image = {hog.image}
                    specialty = {hog.specialty}
                    weight = {hog.weight}
                    greased = {hog.greased}
                    medal = {hog["highest medal acheived"]}
                    />
                )
            })}
        </tile>
    )
}

export default TileData