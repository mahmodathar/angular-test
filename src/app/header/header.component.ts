import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems:any;
  db:any= {};
  isData = false

  constructor(
    private httpService:HttpService
  ) { }

  ngOnInit(): void {
    this.createMenuItem();
    this.httpService.getDB().subscribe( (data:any) =>{
      this.db = data;
      this.isData = true;
    })
  }

  createMenuItem(){
     this.httpService.getMenu().subscribe( data => {
       this.menuItems = data
     })
  }

  createLogo(){

  }

}
