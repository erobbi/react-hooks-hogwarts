


function TileRender({name, image, specialty, weight, greased, medal}) {
    // make a nested function here to render
        return(
            <div>
                <ul>Name: {name}</ul>
                <img id = 'imageHog' src = {image}/>
                imageHog.style.height = 50px;
                <ul>Specialty: {specialty}</ul>
                <ul>Weight: {weight}</ul>
                <ul>Greased: {greased? 'true' : 'false'}</ul>
                <ul>Achievement: {medal}</ul>
                <br/>
            </div>
        )
    // make a return to TileRender that will make a listener on the tile
}

export default TileRender