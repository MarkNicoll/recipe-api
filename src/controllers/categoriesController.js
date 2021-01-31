import client from "../dbClient.js";

export const getCategories = (req, res) => {
  client.query('SELECT * FROM public."categories"', function (err, result) {
    if (err) res.send(err);
    if (result) res.send(result.rows);
  });
};
