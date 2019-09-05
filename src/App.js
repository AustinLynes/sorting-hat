import React, { Component } from "react";
import "./App.scss";
import { Router } from './components/Router'
const houses = [
  {
    id: "000",
    name: "griffendor",
    traits: [
      "bravery",
      "daring",
      "nerve",
      "fire",
      "lion"
    ],
    description: "Gryffindor values bravery, daring, nerve, and chivalry. Its emblematic animal is the lion and its colours are scarlet and gold. Minerva McGonagall was the most recent Head of Gryffindor. Sir Nicholas de Mimsy-Porpington, also known as 'Nearly Headless Nick', was the house ghost. The founder of the house was Godric Gryffindor. Gryffindor corresponds to the element of Fire. The common room was located in one of the highest towers at Hogwarts, the entrance was situated on the seventh floor in the east wing of the castle and is guarded by a portrait of The Fat Lady. She permits entrance if given the correct password, which is changed numerous times throughout the school year. Famous Gryffindors include Albus Dumbledore, Harry Potter, and Minervra McGonagall.",
    points: 0
  },
  {
    id: "001",
    name: "hufflepuff",
    traits: [
      "hard-work",
      "dedication",
      "patience",
      "earth",
      "badger"

    ],
    description: "Hufflepuff values hard work, dedication, patience, loyalty, and fair play. Its emblematic animal is the badger, and Yellow and Black are its colours. Pomona Sprout was the Head of Hufflepuff during 1991-1998, Sprout left the post of Head of Hufflepuff and Herbology Professor sometime before 2017 and her successor for the position of Head of Hufflepuff is currently unknown. The Fat Friar is its ghost. The founder of the house was Helga Hufflepuff. Hufflepuff corresponds to the element of earth. The Hufflepuff dormitories and common room are located somewhere in the basement, near the castles kitchens. It can be accessed by tapping the barrel two from the bottom, middle of the second row in the rhythm of 'Helga Hufflepuff' and is described as being a cosy and welcoming place with yellow hangings, fat armchairs, and underground tunnels that lead to the dormitories, which have perfectly round doors, similar to barrel tops. Famous Hufflepuffs include Hengist of Woodcroft (founder of Hogsmeade), Newt Scamander (author of Fantastic Beasts and Where to Find Them), and Artemisia Lufkin (first female minister for magic)",
    points: 0
  },
  {
    id: "002",
    name: "ravenclaw",
    traits: [
      "intellegence",
      "knowledge",
      "wit",
      "air",
      "raven"
    ],
    description: "Ravenclaw values intelligence, knowledge, and wit. Its emblematic animal is the eagle, and its colours are blue and bronze. The Ravenclaw Head of House in the 1990s was Filius Flitwick. The ghost of Ravenclaw is the Grey Lady, who was the daughter of Rowena Ravenclaw, the house's founder. Ravenclaw corresponds to the element of air. The Ravenclaw common room and dormitories are located in a tower on the west side of the castle. Ravenclaw students must answer a riddle as opposed to giving a password to enter their dormitories. This riddle, however, can be answered by non-Ravenclaws. Famous Ravenclaws include Gilderoy Lockheart, Ignatia Wildsmith (inventor of Floo powder), and Garrick Ollivander. It is roumored that Alastor 'Mad-Eye' Moody was a Ravenclaw.",
    points: 0
  },
  {
    id: "003",
    name: "slytherin",
    traits: [
      "ambition",
      "cunning",
      "resourcefulness",
      "water",
      "snake"
    ],
    description: "Slytherin house values ambition, cunning and resourcefulness and was founded by Salazar Slytherin. Its emblematic animal is the serpent, and its colours are emerald green and silver. Professor Horace Slughorn was the Head of Slytherin during the 1997–1998 school year, replacing Severus Snape, who as well, replaced Slughorn as Potions Professor when he retired for the first time several years prior.The Bloody Baron is the house ghost. The founder of the house was Salazar Slytherin. Slytherin corresponds roughly to the element of water. The Slytherin dormitories and common room are reached through a bare stone wall in the Dungeons. The Slytherin common room lies beneath the Black Lake. It is a long, low underground room with rough stone walls and silver lamps hanging from the ceiling. Famous Slytherins include Merlin, Tom Riddle, and Dolores Umbridge.",
    points: 0
  },
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      houses,
      winner: ''
    }

  }
  hasDuplicates = (arr) => {
    return (new Set(arr)).size !== arr.length;
  }
  findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
  setHouse = () => {
    const arr = [];
    this.state.houses.map(house => {
      arr.push(house.points);
    })
    alert(JSON.stringify(arr))

    const most_found = Math.max.apply(Math, arr)
 
    this.state.houses.map(house => {
      if (house.points === most_found) {
        window.localStorage.setItem('name', house.name);
        window.localStorage.setItem('description', house.description);
      }
    })
  
  }

  togglePoint = (name, sub) => {
    this.state.houses.map(house => {
      if (house.name === name) {
        if (sub === true) {
          this.setState({
            ...house, points: house.points -= 1
          })

        }
        else if (sub === false) {
          this.setState({
            ...house, points: house.points += 1
          })
        }
        sub = !sub
        console.log(sub);
        console.log(`${house.name}: ${house.points}`)
      }
    })
  }
  render() {
    return (
      <div className="App">
        <Router togglePoint={this.togglePoint} state={this.state} setHouse={this.setHouse} />
      </div>
    );
  }
}

export default App;
