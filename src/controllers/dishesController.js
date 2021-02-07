import client from "../dbClient.js";

export const getDishes = (req, res) => {
  client.query('SELECT * FROM public."dishes"', function (err, result) {
    if (err) res.send(err);
    if (result) res.send(result.rows);
  });
};

export const createDish = (req, res) => {
  const dish = req.body;
  const id = dish.id ? dish.id : null;
  const name = dish.name;
  const notes = dish.notes;
  let query;

  if (id) {
    query =
      "INSERT INTO dishes(id, name, notes)VALUES('" +
      id +
      "','" +
      name +
      "','" +
      notes +
      "')";
  } else {
    query =
      "UPDATE public.dishes SET name=" +
      name +
      ", notes=" +
      notes +
      " WHERE id = " +
      id +
      ";";
  }

  client.query(query, (err, result) => {
    console.log(err);
    console.log(result);
    if (err) res.send(err.toString());
    if (result) res.send(result.rows);
  });
};
