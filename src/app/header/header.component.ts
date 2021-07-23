import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems : any[]= []

  constructor() { }

  ngOnInit(): void {
    this.createMenuItem();
  }

  createMenuItem(){

    let item = {
      title:"myTitle",
      link:"mylink",
      url:"myurl"
    }

    for(let i =0; i <= 5; i++){
        console.log(i);
        this.menuItems.push(item)
    }


  }

}
