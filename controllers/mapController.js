

var mapController = function(Map){


    var getall = function (req, res) {
        Map.find(function (err, maps) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(maps);
            }
        });
    }

    var getsearch = function (req, res) {
        Map.findOne({ "features.properties.name":req.params.s}, function(err,map) {

            if (err) {
                res.status(500).send(err);
            }
            else {
                res.json(map);
            }
        });
    }


    return{
        getall:getall,
        getsearch:getsearch
    }

}



module.exports = mapController;
/**
 * Created by bhuvanmalik on 21/02/16.
 */
