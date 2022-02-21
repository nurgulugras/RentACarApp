import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/shared/services/cars.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars?:Car[];
  isSafeDeleted:boolean;
  constructor(private http:HttpClient,private carsservice:CarsService ) {}
   
  ngOnInit(): void {
    
    
      this.carsservice.getCarActives().subscribe((res)=>{
        this.cars=res;
    })
  
  }
 }


