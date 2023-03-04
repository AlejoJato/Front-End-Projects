function initMap() {
    const buenosAires = {
        lat : -34.668292,
        lng : -58.501344
    }

    const turin = {
        lat : 45.080729,
        lng : 7.709656
    }

    const ibiza = {
        lat : 38.904494,
        lng : 1.436173
    }

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom : 2,
        center : ibiza
    })

    const marker1 = new google.maps.Marker( {
        position : buenosAires,
        map
    })
    const marker2 = new google.maps.Marker( {
        position : turin,
        map
    })
    const marker3 = new google.maps.Marker( {
        position : ibiza,
        map
    })
}