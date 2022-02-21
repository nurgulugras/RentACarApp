import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { RolType } from 'src/app/models/types/rolType.enum';
import { MemberService } from 'src/app/shared/services/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members:Member[];
  rol:RolType;

  constructor(private http:HttpClient,private memberservice:MemberService) { }

  ngOnInit():void {
    
     
    this.memberservice.getMemberActives().subscribe((res)=>{
      this.members=res;
  })
  }
  getRoleNameFromEnumType(a:any):string{
    return RolType[a];
  }

}
