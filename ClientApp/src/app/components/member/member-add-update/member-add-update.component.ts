import { ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/models/member';
import { RolType } from 'src/app/models/types/rolType.enum';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { MemberService } from 'src/app/shared/services/member.service';

@Component({
  selector: 'app-member-add-update',
  templateUrl: './member-add-update.component.html',
  styleUrls: ['./member-add-update.component.css']
})
export class MemberAddUpdateComponent implements OnInit {
  @ViewChild("editForm") memberForm: NgForm;
  member:Member =new Member();
  roltypeadmin:RolType;
  roltypecustomer:RolType;
  admin:string;
  customer:string;
  
  isEdit: boolean;
  isForm: boolean = false;
  buttonName:string;
  public loading = false;
 
  constructor(public route: ActivatedRoute, private router: Router, private membersservice: MemberService,private alertify:AlertifyService) {
  }
 
  ngOnInit(): void {
    this.member.isActive=true;
 
    if (this.router.url == "/members/add") {
      this.isEdit = false;
      this.buttonName="Add";
      this.isForm=true;
      console.log(this.isEdit);
    }
    else if (this.router.url == "/members/update" + "/" + this.route.snapshot.paramMap.get('id')) {
      this.isEdit = true;
      this.buttonName="Update";
      console.log(this.isEdit);
      this.getMemberDetail();
    }
   
  }
  getMemberDetail() {
      
      this.loading = true;
      this.membersservice.getMemberDetail(+this.route.snapshot.params['id']).subscribe(member => {
      this.member = member;
      this.loading = false;
      this.isForm = true;
      
    });
  }
  addOrUpdate(){
    if(this.isEdit==false){
      this.addMember();
      this.member.isActive==true;
    }
    else{
      this.updateMember();
    }
  }
  addMember(){
    this.membersservice.addMember(this.member).subscribe(()=>{
      this.alertify.success('Add Member Succesfull');
      this.member =new Member();
      this.memberForm.reset();
    }, err=>{
      this.alertify.error(err);
    });
  }
  updateMember(){
   this.membersservice.updateMember(+this.route.snapshot.params['id'],this.member)
   .subscribe(()=>{
    this.alertify.success('Update Member Succesfull');
   }, err=>{
    this.alertify.error(err);
   });
  }
  
  



}

