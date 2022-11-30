#! /usr/bin/env node
import parseUrlByUrlFormat from "./modules/url-parser/index.js";
import zoo from "./modules/zoo/index.js";

const command = process.argv[2] ? process.argv[2].trim() : "";

switch (command) {
  case "-url-parser": {
    const url = process.argv[3] ? process.argv[3].trim() : "";
    const urlFormatString = process.argv[4] ? process.argv[4].trim() : "";
    console.log(parseUrlByUrlFormat(url, urlFormatString));
    break;
  }
  case "-zoo": {
    const animal = process.argv[3] ? process.argv[3].trim().toLowerCase() : "";
    const phrase = process.argv[4] ? process.argv[4].trim() : "";
    if (!animal) {
      console.log(
        "Animal not found, try: elephant, lion, snake, tiger, wolf or wookie"
      );
      break;
    }
    console.log(zoo.animalSpeaks(animal, phrase));
    break;
  }
  case "-help":
    console.log("Commands available as now:");
    console.log("-url-parser <URL> <FORMAT>");
    console.log("-zoo <ANIMAL> <PHRASE>");
    break;
  default:
    console.log(`Bad option: ${command}`);
    console.log("Try -help");
    break;
}
