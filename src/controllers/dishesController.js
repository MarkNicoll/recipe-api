import pool from '../dbPool.js';

export const getDishes = (req, res) => {
    console.log('Getting dishes...')
    pool.connect(function (err) {
        pool.query('SELECT * FROM public."dishes"', function (err, result) {
            console.log(result)
            console.log(err)
            if (err) res.send(err);
            if (result) res.send(result.rows);
        });
    });
}