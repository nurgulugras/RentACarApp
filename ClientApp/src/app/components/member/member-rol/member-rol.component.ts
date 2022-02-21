import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-member-rol',
  templateUrl: './member-rol.component.html',
  styleUrls: ['./member-rol.component.css']
})
export class MemberRolComponent implements OnInit {

  constructor() { }
  member:Member=new Member();
  ngOnInit() {
  }

}
