
import { Component } from '@angular/core';
import { InfoService } from './service/info.service';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  profile;


  constructor(private classes: InfoService){

  this.classes.getUser().subscribe(res => {
   this.profile = res

   console.log(this.profile)

  })

  
  }

}