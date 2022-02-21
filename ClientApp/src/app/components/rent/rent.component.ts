import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { CarsService } from 'src/app/shared/services/cars.service';
import { RentalService } from 'src/app/shared/services/rental.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent implements OnInit {
  cars?:Car[];
  rent:Rental=new Rental();
  selectedCar:Car;
  rentFormModalShow:boolean;
  dateStart:string;
 

  constructor(private http:HttpClient,private carsservice:CarsService,private alertify:AlertifyService,private rentservice:RentalService) { }
   
  ngOnInit() {
    this.carsservice.getcars().subscribe((res)=>{
      
     this.cars=res;
     this.dateStart=new Date().toISOString().slice(0, 10);
    })
 
  }
   showModal(car:Car){
   
    this.rentFormModalShow=true;
    this.selectedCar=car;
    this.rent.carId=this.selectedCar.id;
    this.rent.images=this.selectedCar.imageUrl;
    this.rent.brandName=this.selectedCar.brand;
    this.rent.isActive=true;
  }
  closeModal():void{
   this.rentFormModalShow=false;
  }
  addRent(){
     this.rentservice.addRent(this.rent).subscribe(()=>{
     this.alertify.success('rental successful');
     console.log(this.rent);
    }, err=>{
      this.alertify.error(err);
     });
  }
}
  
 
  
 

