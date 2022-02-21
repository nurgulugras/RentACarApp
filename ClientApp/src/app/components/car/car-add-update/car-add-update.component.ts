import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { NrgCardComponent } from 'src/app/shared/components';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { CarsService } from 'src/app/shared/services/cars.service';
declare let alertify:any;
@Component({
  selector: 'app-car-add-update',
  templateUrl: './car-add-update.component.html',
  styleUrls: ['./car-add-update.component.css']
})
export class CarAddUpdateComponent implements OnInit
 {
  @ViewChild("editForm") carForm: NgForm;
  car:Car =new Car();
  isEdit: boolean;
  isForm: boolean = false;
  buttonName:string;
  selectedId:number;
  public loading = false;

  constructor(public route: ActivatedRoute, private router: Router, private carsservice: CarsService,private alertify:AlertifyService) {
  }
  getSelectedId(){
    // this.selectedId=parseInt( this.route.snapshot.paramMap.get('id'));
    this.selectedId=1
  }
 
  ngOnInit(): void {

    this.getSelectedId();
      
    
    console.log(this.router.url);
    if (this.router.url == "/cars/add") {
      
      this.isEdit = false;
      this.buttonName="Add";
      this.isForm=true;
      console.log(this.isEdit);
    }
    else if (this.router.url == "/cars/update" + "/" + this.selectedId) {
      this.isEdit = true;
      this.buttonName="Update";
      console.log(this.isEdit);
      this.getCarDetail();
    }
  }
  getCarDetail() {
      this.loading = true;
      this.carsservice.getCarDetail(+this.route.snapshot.params['id']).subscribe(car => {
      this.car = car;
      this.loading = false;
      this.isForm = true;
    });
  }
  addOrUpdate(){
    if(this.isEdit==false){
      this.addCar();
    }
    else{
      this.updateCar();
    }
  }
  addCar(){
    this.carsservice.addCar(this.car).subscribe(()=>{
      this.alertify.success('Add Car Succesfull');
      console.log(this.car);
      this.car =new Car();
      this.carForm.reset();
    }, err=>{
      this.alertify.error(err);
    });
  }
  updateCar(){
   this.carsservice.updateCar(+this.route.snapshot.params['id'],this.car)
   .subscribe(()=>{
    this.alertify.success('Update Car Succesfull');
   }, err=>{
    this.alertify.error(err);
   });
  }
}
