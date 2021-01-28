import pool from '../dbPool';

module.exports = {
    getCategories : function(req, res){
        pool.connect(function(err) {
            pool.query('SELECT * FROM public."categories"', function(err, result) {
                if (err) res.send(err);
                if (result) res.send(result.rows);
            });
        });
    }
}