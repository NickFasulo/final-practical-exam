const Animal = require("../models/Animal");

module.exports = {
  findAllAnimals: () => {
    return new Promise((resolve, reject) => {
      Animal.find(params)
        .then(animals => {
          resolve(animals);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  createAnimal: (params, animal) => {
    return new Promise((resolve, reject) => {
      Animal.create(animal)
        .then(animal => {
          resolve(animal);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  updateAnimalByID: (id, newAnimal) => {
    return new Promise((resolve, reject) => {
      Animal.findByIdAndUpdate(id, { newAnimal }, { new: true })
        .then(newAnimal => resolve(newAnimal))
        .catch(error => reject(error));
    });
  },
  deleteAnimalByID: (id) => {
    
  }
};
