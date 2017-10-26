import Species from "./species.js"
import traits from "./traits.js"

class TraitDeck {
  constructor(args) {
    this.traitNames = Object.keys(traits);
    this.size = args.size || 60;
    this.generateDeck();
  }

  generateDeck() {
    this.traits = [];
    for (let i = 0; i < this.size; i++) {

      const traitIndex = Math.round(Math.random() * (this.traitNames.length - 1));

      const traitName = this.traitNames[traitIndex];

      this.traits.push(traits[traitName]);

    }
  }

  draw(amount) {
    const drawnTraits = [];
    for (let i = 0; i < amount; i++) {
      drawnTraits.push(this.traits.pop());
    }
    return drawnTraits;
  }
}

class Player {
  constructor(args) {
    this.name = args.name;
    this.species = [];
    this.hand = [];
    this.newSpecies();
  }

  newSpecies() {
    this.species.push(new Species({}));
  }

  giveTraits(traits) {
    this.hand = this.hand.concat(traits);
  }
}

class AdaptGame {
  constructor(args) {
    this.n_players = args.n_players
    this.round = 0;
    this.players = [];
    this.traitDeck = new TraitDeck({});
    this.initializePlayers();
    this.thisPlayer = this.players[0];
    this.newRound();
  }

  newRound() {
    this.round++;
    this.dealTraits();
  }

  initializePlayers() {
    for (let i = 0; i < this.n_players; i++) {
      this.players.push(new Player({
        name: "player_"+i
      }))
    }
  }

  dealTraits() {
    const base_card_draw = 4;
    this.players.forEach(player => {
      const traits = this.traitDeck.draw(base_card_draw + player.species.length);
      player.giveTraits(traits);
    })
  }
}

const game = new AdaptGame({
  n_players: 4
});

window.game = game;

console.log(game);
