import pool from '../dbPool';

module.exports = {
    getDishes : function(req, res){
        pool.connect(function(err) {
            pool.query('SELECT * FROM public."dishes"', function(err, result) {
               if (err) res.send(err);
               if (result) res.send(result.rows);
           });
       });
    }
}