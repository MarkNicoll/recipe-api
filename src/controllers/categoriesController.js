import pool from '../dbPool.js';

export const getCategories = (req, res) => {
    pool.connect(function (err) {
        pool.query('SELECT * FROM public."categories"', function (err, result) {
            console.log(result)
            if (err) res.send(err);
            if (result) res.send(result.rows);
        });
    });
}