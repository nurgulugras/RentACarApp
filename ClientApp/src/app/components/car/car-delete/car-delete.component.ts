import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { CarsService } from 'src/app/shared/services/cars.service';

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css']
})
export class CarDeleteComponent implements OnInit {
  car:Car =new Car();
  isForm: boolean = false;
  public loading = false;
  constructor(private carsservice:CarsService,private route:ActivatedRoute,private alertify:AlertifyService,private router:Router) { }

  ngOnInit() {
    this.getCarDetail();
  }
  getCarDetail() {
    this.loading = true;
    this.carsservice.getCarDetail(+this.route.snapshot.params['id']).subscribe(car => {
    this.car = car;
    this.loading = false;
    this.isForm = true;
  });
}
 deleteCar(){
  this.car.isSafeDeleted=false;
  console.log(this.car.isSafeDeleted);
  this.carsservice.deleteCar(+this.route.snapshot.params['id'],this.car)
  .subscribe(()=>{
   this.alertify.success('Delete Car Succesfull');
  }, err=>{
   this.alertify.error("Error");
  });
 }

}
