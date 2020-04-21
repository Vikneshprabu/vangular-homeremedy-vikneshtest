import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  links = [
    {path:'/main',label:'Leave',active:'button-active'},
    {path:'/chat',label:'Chat',active:'button-active'}
  ]
}