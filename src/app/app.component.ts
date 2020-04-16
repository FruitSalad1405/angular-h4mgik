import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Bitch Ass';
  minum = [{
    nama : 'Coca Cola',
    harga : 6500
  }, {
    nama : 'Sprite',
    harga:6000
  }]
  
  itemArr = [1,2,3,4]

  show : boolean = true;

  user = {
    name: 'Fruit Salad'
  };
}
