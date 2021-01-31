import client from "../dbClient.js";

export const getDays = (req, res) => {
  client.query('SELECT * FROM public."days"', function (err, result) {
    if (err) res.send(err);
    if (result) res.send(result.rows);
  });
};
