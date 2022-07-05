import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  userName : String = ""
  users=[{
    name:'jagan',
    status:'active',
    place:'IND'
  },{
    name:'Rajesh',
    status:'active',
    place:'USA'
  },
  {
    name:'Vijay',
    status:'Inactive',
    place:'AUS'
  },
  {
    name:'mani',
    status:'',
    place:'UAE'
  },
  {
    name:'saran',
    status:'Inactive',
    place:'ENG'
  }
  ]
  

  constructor(public data : MyserviceService) { }

  ngOnInit(): void {
    
  
  }
  changename(){
    this.userName = "Rajesh" 
   }

}
