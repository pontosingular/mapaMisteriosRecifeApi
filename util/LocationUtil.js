const createRangePoints = ({lat, lng}, range) => {
    let unit = 0.000009;
    let latMax = lat + (unit * range)
    let latMin = lat - (unit * range)
    let lngMax = lng + (unit * range)
    let lngMin = lng - (unit * range)

    return {latMax, latMin, lngMax, lngMin}
}

module.exports = {createRangePoints}