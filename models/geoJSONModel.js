/**
 * Created by bhuvanmalik on 21/02/16.
 */
var GeoJSON = require('mongoose-geojson-schema');
var mongoose= require('mongoose');
var Schema= mongoose.Schema;

var geoJSONModel= new Schema({


    any: mongoose.Schema.Types.GeoJSON,
    point: mongoose.Schema.Types.Point,
    multipoint: mongoose.Schema.Types.MultiPoint,
    linestring: mongoose.Schema.Types.LineString,
    multilinestring: mongoose.Schema.Types.MultiLineString,
    polygon: mongoose.Schema.Types.Polygon,
    multipolygon: mongoose.Schema.Types.MultiPolygon,
    geometry: mongoose.Schema.Types.Geometry,
    geometrycollection: mongoose.Schema.Types.GeometryCollection,
    feature: mongoose.Schema.Types.Feature,
    featurecollection: mongoose.Schema.Types.FeatureCollection

});


module.exports=mongoose.model('Map', geoJSONModel,'maps');