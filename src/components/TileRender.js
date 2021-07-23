


function TileRender({name, image, specialty, weight, greased, medal}) {
        return(
            <div>
                <ul>Specialty: {specialty}</ul>
                <ul>Weight: {weight}</ul>
                <ul>Greased: {greased? 'true' : 'false'}</ul>
                <ul>Achievement: {medal}</ul>
            </div>
        )
}

export default TileRender