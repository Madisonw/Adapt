import traits from "./traits.js";

class Species {
  constructor(args) {
    this.pop = args.pop || 1;
    this.size = args.size || 1;
    this.traits = args.traits || [];
  }

  addAttribute(attr) {
    this.traits.push(attr);
  }

  hasTrait(attr) {
    let hasTrait = false;
    this.traits.forEach(attr => {
      if (hasTrait) return;
      if (attr === attr) hasTrait = true;
    })
    return hasTrait;
  }

  canAttack(targetSpecies) {
    if (targetSpecies.size < this.size) {
      if (!this.hasTrait(traits.carnivore)) {
        return false;
      }

      return true;
    }
    return false;
  }

  receiveAttack() {
    this.pop--;
    if (this.pop < 1) {
      this.goExtinct();
    }
  }

  goExtinct() {
    console.log("oh noes, i'm extinct", this)
  }

  attack(targetSpecies) {
    if (this.canAttack(targetSpecies)) {
      targetSpecies.receiveAttack()
      return targetSpecies;
    } else {
      console.warn("cannot attack this species")
    }
  }
}

export default Species;
