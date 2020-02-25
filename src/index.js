//import React from 'react';
//import ReactDOM from 'react-dom';

console.log("Building Class");


class Building {
    constructor(name, type, floors) {
        this.name = name;
        this.type = type;
        this.floors = floors;
    }
    add_buildingWiki(wikiLink) {
        this.buildingWiki = wikiLink;
    }
    getDetails() {
        console.log(`\nBuilding name: ${this.name} \nType: ${this.type}\nFloors: ${this.floors}\nWikipedia Link: ${this.buildingWiki}`);
    }
}

let building1 = new Building("MetLife Building", "Office", 59);
building1.add_buildingWiki('https://en.wikipedia.org/wiki/MetLife_Building');
building1.getDetails();

let building2 = new Building("Empire State Building", "Office/Observatory", 102);
building2.add_buildingWiki('https://en.wikipedia.org/wiki/Empire_State_Building');
   building2.getDetails();

//ReactDOM.render(document.getElementById('app'));