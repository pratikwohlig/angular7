import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navigation = [
    {
      name: "Home",
      classis: "active",
      anchor: "home",
      subnav: [{
          name: "Subnav1",
          classis: "active",
          anchor: "home"
      }]
    }, {
      name: "Form",
      classis: "active",
      anchor: "form",
      subnav: []
    },
    {
        name: "Grid",
        classis: "active",
        anchor: "grid",
        subnav: []
    }
  ];
  constructor() { }
  
  ngOnInit() {
  }

}
