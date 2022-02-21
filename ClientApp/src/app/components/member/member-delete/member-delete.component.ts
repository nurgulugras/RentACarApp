import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Member } from 'src/app/models/member';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { MemberService } from 'src/app/shared/services/member.service';

@Component({
  selector: 'app-member-delete',
  templateUrl: './member-delete.component.html',
  styleUrls: ['./member-delete.component.css']
})
export class MemberDeleteComponent implements OnInit {

  member:Member;
  isForm: boolean = false;
  public loading = false;
  constructor(private memberservice:MemberService,private route:ActivatedRoute,private alertify:AlertifyService,private router:Router) { }

  ngOnInit() {
    this.getCarDetail();
  }
  getCarDetail() {
    this.loading = true;
    this.memberservice.getMemberDetail(+this.route.snapshot.params['id']).subscribe(member => {
    this.member = member;
    this.loading = false;
    this.isForm = true;
  });
}
deleteMember(){
  this.member.isSafeDeleted=false;
  console.log(this.member.isSafeDeleted);
  this.memberservice.deleteMember(+this.route.snapshot.params['id'],this.member)
  .subscribe(()=>{
   this.alertify.success('Delete Car Succesfull');
  }, err=>{
   this.alertify.error("Error");
  });
 }

}
