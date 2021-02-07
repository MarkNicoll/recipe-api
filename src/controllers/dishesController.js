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
  const nameQueryParam = dish.name ? "'" + dish.name + "'" : null;
  const notesQueryParam = dish.notes ? "'" + dish.notes + "'" : null;
  let query;

  if (!id) {
    query =
      "INSERT INTO dishes(name, notes)VALUES(" +
      nameQueryParam +
      notesQueryParam +
      ")";
  } else {
    query =
      "UPDATE public.dishes SET name=" +
      nameQueryParam +
      ", notes=" +
      notesQueryParam +
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
