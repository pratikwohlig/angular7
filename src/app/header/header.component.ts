import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuHidden = false;
  constructor() { }

  ngOnInit() {
  }
  sidebarCollapse() {
    $('#sidebar').toggleClass('active');
    if(!this.menuHidden)
      this.menuHidden=true;
    else
      this.menuHidden=false;
  }
}
