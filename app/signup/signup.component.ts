import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  user = {
    name:"jagan",
    password : "jagan17"
    
  }


  userName : String = ""

  typeuser = {
    name:"",
    password : ""
  }
  constructor() { }

  ngOnInit(): void {
  }

}
