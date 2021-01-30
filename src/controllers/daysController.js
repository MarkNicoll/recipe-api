import pool from '../dbPool.js';

export const getDays = (req, res) => {
    pool.connect(function (err) {
        pool.query('SELECT * FROM public."days"', function (err, result) {
            if (err) res.send(err);
            if (result) res.send(result.rows);
        });
    });
}