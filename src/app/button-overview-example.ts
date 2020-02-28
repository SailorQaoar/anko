const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

import { Component } from "@angular/core";

export interface PeriodicElement {
  name: string;
  position?: number;
  customStoreCheck?: string;
  buyPrice?: number;
  sellPrice?: string;
  origin?: string;
  link?: string;
  buyDate?: string;
  cardPaypal?: string;
  shippedTo?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Hydrogen" },
  { position: 2, name: "Helium" },
  { position: 3, name: "Lithium" },
  { position: 4, name: "Beryllium" },
  { position: 5, name: "Boron" },
  { position: 6, name: "Carbon" },
  { position: 7, name: "Nitrogen" },
  { position: 8, name: "Oxygen" },
  { position: 9, name: "Fluorine" },
  { position: 10, name: "Neon" }
];

@Component({
  selector: "button-overview-example",
  templateUrl: "button-overview-example.html",
  styleUrls: ["button-overview-example.css"]
})
export class ButtonOverviewExample {
  displayedColumns: string[] = [
    "position",
    "name",
    "customStoreCheck",
    "buyPrice",
    "sellPrice",
    "origin",
    "link",
    "buyDate",
    "cardPaypal",
    "shippedTo"
  ];
  dataSource = ELEMENT_DATA;

getScrollAreaHeight(){
  return window.innerHeight.toString()+'px';
}

}
