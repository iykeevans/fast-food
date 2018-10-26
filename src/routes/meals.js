const express = require('express');
const Meals = require('../controllers/meals');

const router = express.Router();

router.get('/', Meals.getAllMeals);
router.get('/:id', Meals.getOneMeal);
router.delete('/:id', Meals.deleteOneMeal);
router.post('/:id/meal', Meals.addMeal);

module.exports = router;