import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'cyp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cypi';
  test = "";

  constructor(private http:HttpClient) {

  }

  sendRequest(){
    this.http.get<Array<{id:number, body:string, postId:number}>>(`http://${window.location.hostname}:3000/comments`).subscribe((data)=>{
      this.test = data[0].body;
    })
  }
}
