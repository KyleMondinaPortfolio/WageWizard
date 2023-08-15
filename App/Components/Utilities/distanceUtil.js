export function find_distance(lat1, lat2, lon1, lon2){
    lon1 = lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;
    
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;

    let a = Math.pow(Math.sin(dlat / 2), 2)
        + Math.cos(lat1) * Math.cos(lat2)
        * Math.pow(Math.sin(dlon / 2), 2);

    let c = 2 * Math.asin(Math.sqrt(a));
    let r = 6371;
    console.log("distance "+((c * r) * 1000))
    return ((c * r) * 1000);

}

export function checkIfInsideGeofence(geofence,location){
    let isInsideGeofence = false;
    if (find_distance(
        geofence.latitude,
        location.latitude,
        geofence.longitude,
        location.longitude) < geofence.radius){
            isInsideGeofence = true
    }

    return isInsideGeofence
}

