import express from "express"
import dishesController from "./controllers/dishesController";
import categoriesController from "./controllers/categoriesController";
import daysController from "./controllers/daysController";

const router = express.Router();

router.route('/dishes').get(dishesController.getDishes);
router.route('/categories').get(categoriesController.getCategories);
router.route('/days').get(daysController.getDays);

module.exports = router;