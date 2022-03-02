import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Rental } from 'src/app/models/rental';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { RentalService } from 'src/app/shared/services/rental.service';
import { RentedModule } from './rented.module';

@Component({
  selector: 'app-rented',
  templateUrl: './rented.component.html',
  styleUrls: ['./rented.component.scss']
})
export class RentedComponent implements OnInit {
 @ViewChild("rentedForm") rentedForm:RentedComponent;
 rent:Rental[];
 rented:Rental;
 rentFormModalShow:boolean;
 selectedRent:Rental;
 selectedState:string;
 isHideEndTheRent:boolean=true;

  constructor(private http:HttpClient,private alertify:AlertifyService,private rentalservice:RentalService,private router:Router,private route:ActivatedRoute) {
    this.selectedState="all";
   }
  
  ngOnInit() {
    this.onChangedRentStated(); 
  }
  showModal(rent:Rental){
    this.rentFormModalShow=true;
    this.selectedRent=rent;
    console.log(this.selectedRent.id);
  }
  closeModal():void{
   this.rentFormModalShow=false;
  }
  deleteRent(){
    this.selectedRent.isActive=false;
    this.rentalservice.deleteRent(this.selectedRent.id,this.selectedRent)
    .subscribe(()=>{
     this.alertify.success('Delete Car Succesfull');
    }, err=>{
     this.alertify.error("Error");
    });
   }
   
  getRentActives(){
    this.rentalservice.getRentActives().subscribe((res)=>{
      this.rent=res;
  })
}
  getRentPassives(){
    this.rentalservice.getRentPassives().subscribe((res)=>{
      this.rent=res;
  })
}
   getAllRents(){
  this.rentalservice.getAllRents().subscribe((res)=>{
    this.rent=res;
   })
}

  onChangedRentStated(){
  if(this.selectedState=="active" ){
    this.getRentActives();
  }
  else if(this.selectedState=="passive" ){
    this.getRentPassives();
  }
  else {
    this.getAllRents();
  }
}

  
}
