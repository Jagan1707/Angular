import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    name:"jagan",
    password : "jagan17"
  }

  userDetail =[
    {
      Name : "jagan"
    },
    {
      Name : "Vijay"
    },
    {
      Name : "Rajesh"
    },
    {
      Name : "mani"
    }
  ]


  typeuser = {
    name:"",
    password : ""
  }


  constructor() { }

  ngOnInit(): void {
  }

}
