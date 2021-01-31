import express from "express"
import { getDishes, createDish } from "./controllers/dishesController.js";
import { getCategories } from "./controllers/categoriesController.js";
import { getDays } from "./controllers/daysController.js";

const router = express.Router();

router.route('/dishes').get(getDishes)
    .post(createDish);
    
router.route('/categories').get(getCategories);
router.route('/days').get(getDays);

export default router;