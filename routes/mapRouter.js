/**
 * Created by bhuvanmalik on 21/02/16.
 */


var express = require('express');


var mroutes= function(Map) {

    var mapRouter=express.Router();

    var mapController = require('../controllers/mapController')(Map);
    


    mapRouter.route('/all')
        .get(mapController.getall);






    return mapRouter;
};


module.exports = mroutes;