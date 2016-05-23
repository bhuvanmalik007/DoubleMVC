

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


    return{
        getall:getall
    }

}



module.exports = mapController;
/**
 * Created by bhuvanmalik on 21/02/16.
 */
