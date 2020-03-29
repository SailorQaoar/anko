const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

import { Component, OnInit } from "@angular/core";

export interface PeriodicElement {
  name: string;
  opened?: boolean;
  position?: number;
  customStoreCheck?: string;
  buyPrice?: number;
  sellPrice?: string;
  comment?: string;
  link?: string;
  buyDate?: string;
  cardPaypal?: string;
  shippedTo?: string;
}

const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};


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
  { position: 10, name: "Neon" },
  { position: 11, name: "Hydrogen" },
  { position: 12, name: "Helium" },
  { position: 13, name: "Lithium" },
  { position: 14, name: "Beryllium" },
  { position: 15, name: "Boron" },
  { position: 16, name: "Carbon" },
  { position: 17, name: "Nitrogen" },
  { position: 18, name: "Oxygen" },
  { position: 19, name: "Fluorine" },
  { position: 20, name: "Neon" }
];

@Component({
  selector: "button-overview-example",
  templateUrl: "button-overview-example.html",
  styleUrls: ["button-overview-example.css"]
})
export class ButtonOverviewExample implements OnInit {
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
  selectedCell: any;
  db: any;
ngOnInit(){
  console.warn('aff test lunch');
const f = firebase.initializeApp(firebaseConfig);// .then((ires: any)=>{
  console.warn( f);
console.warn(firebase);
this.db = firebase.firestore();

;

}

getScrollAreaHeight(){
  return window.innerHeight.toString()+'px';
}

}
