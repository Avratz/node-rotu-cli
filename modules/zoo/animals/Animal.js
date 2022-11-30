class Animal {
  /**
   * Summary: Transform the phrase of the animal to a string interspersed with the #sound defined in the constructor.
   * @returns {String} The given phrase interspersed with the #sound
   */
  speak(phrase) {
    if (phrase === undefined) {
      throw new Error("Parameter phrase is required");
    }

    return phrase
      .replaceAll(" ", ` ${this.sound} `)
      .concat(` ${this.sound}`)
      .trim();
  }
}

export default Animal;
