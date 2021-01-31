import client from "../dbClient.js";

export const getDishes = (req, res) => {
    client.query('SELECT * FROM public."dishes"', function (err, result) {
      if (err) res.send(err);
      if (result) res.send(result.rows);
    });
};

export const createDish = (req, res) => {
  const name = req.body.name;
  const notes = req.body.source;

    client.query(
      "INSERT INTO dishes(name, notes)VALUES('" + name + "','" + notes + "')",
      (err, result) => {
        if (err) res.send(err.toString());
        if (result) res.send(result.rows);
      }
    );
};
