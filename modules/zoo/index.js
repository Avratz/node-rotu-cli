import { Elephant, Lion, Snake, Tiger, Wolf, Wookie } from "./animals/index.js";

class Zoo {
  constructor() {
    this.animals = {
      elephant: new Elephant(),
      lion: new Lion(),
      snake: new Snake(),
      tiger: new Tiger(),
      wolf: new Wolf(),
      wookie: new Wookie(),
    };
  }

  /**
   * Summary: Return the phrase spoken by the animal.
   * @param { String } animal Animal to be selected.
   * @param { String } phrase Phrase to be said by the animal.
   */
  animalSpeaks(animal, phrase) {
    const animalSelected = this.animals[animal];
    if (!animalSelected) {
      return "Animal not found, try: elephant, lion, snake, tiger, wolf or wookie";
    }
    return animalSelected.speak(phrase);
  }
}

export default new Zoo();
