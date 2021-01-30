import pool from '../dbPool.js';

export const getDishes = (req, res) => {
    pool.connect(function (err) {
        pool.query('SELECT * FROM public."dishes"', function (err, result) {
            if (err) res.send(err);
            if (result) res.send(result.rows);
        });
    });
}