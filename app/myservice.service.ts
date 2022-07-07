import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

productDetail = [
  {
    productName : "cookies",
    Price : 100,
    Quantity : 20,
  },
  
  {
    productName : "Boost",
    Price : 150,
    Quantity : 10,
  },
  
  {
    productName : "Horliks",
    Price : 200,
    Quantity : 30,
  }
]
  constructor() { }

  
}
