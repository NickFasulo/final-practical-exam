const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/getallanimals", function(req, res, next) {
  animalController
    .findAllAnimals(req.query.id)
    .then(animals => res.json(animals))
    .catch(error => res.json(error));
});

router.post("/createanimal", function(req, res, next) {
  animalController
    .createAnimal(req.body)
    .then(animal => res.json(animal))
    .catch(error => res.json(error));
});

router.update("/update-animal-by-id", function(req, res, next) {
  const id = req.body.id;
  const newAnimal = req.body.newAnimal;

  animalController
    .updateAnimalByID(id, newAnimal)
    .then(updated => res.json(updated))
    .catch(error => res.json(error));
});

router.delete("/delete-animal-by-id", function(req, res, next) {
  const id = req.params.id;
  const animalID = req.params.animalid;

  animalController
    .deleteAnimalByID(animalID, id)
    .then(filteredAnimals => res.json(filteredAnimals))
    .catch(error => res.json(error));
});

module.exports = router;
