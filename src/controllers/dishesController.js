import client from "../dbClient.js";

export const getDishes = (req, res) => {
    client.query('SELECT * FROM public."dishes"', function (err, result) {
      if (err) res.send(err);
      if (result) res.send(result.rows);
    });
};

export const createDish = (req, res) => {
console.log(req.body)
  const dish = req.body;
  console.log(dish)

  const id = dish.id ? req.body.dish.id : null  
  const name = dish.name;
  const notes =dish.notes;

    client.query(
      "REPLACE INTO dishes(id, name, notes)VALUES('" + id + "','" + name + "','" + notes + "')",
      (err, result) => {
        if (err) res.send(err.toString());
        if (result) res.send(result.rows);
      }
    );
};
