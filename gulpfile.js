/**
 * Created by bhuvanmalik on 14/12/15.
 */

var gulp = require('gulp'),
    nodemon = require('nodemon');

gulp.task('default', function(){
    nodemon({

        script:'app.js',
        ext: 'js',


        ignore: ['./node_modules/**']
    }).on('restart', function(){
        console.log('restarting..');
    });
});

