import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang1';
  data = "arnavi";
  getValue(val:string){
    console.log(val)
  }
}
