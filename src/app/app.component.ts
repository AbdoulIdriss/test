import { Component } from '@angular/core';
import { AidService } from "./service/aid.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  name = 'Soul';
  today = Date.now();
  str = "hello angular"

  appareils:any = [
    {name: 'Aspiratuer',Quantity: 4, status:'Available'},
    {name: 'Ordinateur',Quantity: 10, status:'Available'},
    {name: 'Phones',Quantity: 5, status:'non-Available'},
  ]

  // presentOrNot(){
  //   if(this.appareil.status === 'available') {
  //     return this.appareil.status.backgroundcolor = green;
  //   }
  //   return this.appareil.status.backgroungcolor = red;
  // }

  //down for service 
  nom=''

  constructor(private aid:AidService) //used a private to acces it just in that area and gave the name of the service as paramter
  {
    console.warn(this.aid.getData); //we enterd the parameter for the constructor to take the values from the getData method
    this.nom = this.aid.getData().name //creates a variable and assigned the value of the name created in our getData method
  }

  hero: any =  //here we created a hero class with name and age props
  {
    name:'ironman',
    age:20
  }


}
