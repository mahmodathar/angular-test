import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {


  apiUrl ="https://my-json-server.typicode.com/mahmodathar/angular-test/"

  constructor(
    private httpClient: HttpClient
  ) { }


  getMenu(){
     return  this.httpClient.get(`${this.apiUrl}/menu`)
  }

  getDB(){
    return  this.httpClient.get(`${this.apiUrl}/db`)
 }







}
