import pool from "../dbPool.js";

export const getDishes = (req, res) => {
  pool.connect(function (err) {
    pool.query('SELECT * FROM public."dishes"', function (err, result) {
      if (err) res.send(err);
      if (result) res.send(result.rows);
    });
  });
};

export const createDish = (req, res) => {
  const name = req.body.dish.name;
  const recipe = req.body.dish.recipe;
  const source = req.body.dish.source;

  pool.connect(function (err) {
    pool.query(
      "INSERT INTO dishes(firstname, lastname, age, address, email)VALUES($1, $2, $3)",
      [name, recipe, source],
      (err, res) => {
        if (err) res.send(err);
        if (result) res.send(result.rows);
      }
    );
  });
};
