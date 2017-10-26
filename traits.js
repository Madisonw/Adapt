import {
 mod_mayAttack
} from "./modifiers.js"


class Trait {
  constructor(args) {
    this.name = args.name;
    this.description = args.description;

    this.mods = {
      static: args.mods.static || [],
      attack: args.mods.attack || [],
      food: args.mods.food || [],
      abilities: args.mods.abilities || []
    }
  }
}

const carnivore = new Trait({
  name: "Carnivore",
  description: "May never eat plants, but can attack other species",
  mods: {
    attack: [mod_mayAttack]
  }
})

const forager = new Trait({
  name: "Forager",
  description: "May take 2 food at the watering hole",
  mods: {
    attack: []
  }
})

export default {
  carnivore,
  forager
}
