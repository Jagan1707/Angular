import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  shelbyFamily = [
    {
      id : 1,
      name:'Thomas',
      role : "secound brother"
    },
    {
      id:2,
      name : "Arthur",
      role : "first brother"
    },
    {
      id : 3,
      name : "Jhon",
      role : "third brother"
    }

  ]
  

  constructor(public data : MyserviceService) { }

@Input('childcom') childcom :any 
@Output() shelby = new EventEmitter<number>()

random(){
  const numbers = Math.random();
  this.shelby.emit(numbers)
}

  ngOnInit(): void { }
  changename(){
    this.userName = "Rajesh" 
   }

}
