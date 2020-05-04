const mapboxgl = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const createMarker = (markerType, coords) => {
    // let pin = "http://i.imgur.com/WbMOfMl.png"
    // if (markerType === 'activity') {
    //     pin = "http://i.imgur.com/WbMOfMl.png"
    //     console.log('inside activity image')
    // }
    // else if (markerType === 'hotel') {
    //     pin =  "http://i.imgur.com/D9574Cu.png"
    // }
    // else if (markerType === 'restaurant') {
    //     pin = "http://i.imgur.com/cqR6pUI.png"
    // }
    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    if (markerType === 'activity') {
        console.log('inside activity image')
        markerDomEl.style.backgroundImage = `url(${iconURLs.activities})`;
        // markerDomEl.style.backgroundColor = 'blue'
    }
    else if (markerType === 'hotel') {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)"
    }
    else if (markerType === 'restaurant') {
        markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)"
    }
    console.log('line 28')
    const thisMarker = new mapboxgl.Marker(markerDomEl).setLngLat(coords);
    console.log(thisMarker)
    return thisMarker
}

module.exports = createMarker