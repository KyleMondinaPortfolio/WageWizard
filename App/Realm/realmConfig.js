const SchemaVersion = 7

const JobSchema = {
    name: "Job",
    properties: {
        _id:"int",
        employer:"string",
        client:"string",
    },
    primaryKey: '_id'
}

const GeofenceSchema = {
    name: "Geofence",
    properties: {
        _id: 'int',
        jobId: 'int',
        latitude: 'double',
        longitude: 'double',
        radius: 'double'
    },
    primaryKey: "_id"
}

const WorkLogSchema = {
    name: "WorkLog",
    properties: {
        _id: 'int',
        jobId: 'int',
        time: 'int',
        date: 'date'
    },
    primaryKey: "_id"
}

const realmConfig = {
    schema:[JobSchema, GeofenceSchema, WorkLogSchema],
    schemaVersion:SchemaVersion
}

export default realmConfig



