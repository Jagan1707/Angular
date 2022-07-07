import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  generateNumber = Number;
  // getnumber(value : Number){
  //   this.generateNumber = value;
  // }
  
  
  
  parentCom = [
    {
      id : 1,
      name : 'Mike_Wheeler',
      role : 'School student'
    },
    {
      id:2,
      name : 'Lucas_Sinclair',
      role : 'School student'
    },
    {
      id : 3,
      name : "will_Byers",
      role : "School student"
    },
    {
      id : 4,
      name : "Dustin_Hend",
      role : "School student"
    },
    {
      id : 5,
      name : "Max_Mayfield",
      role : "School student"
    }
  ]


  

}
