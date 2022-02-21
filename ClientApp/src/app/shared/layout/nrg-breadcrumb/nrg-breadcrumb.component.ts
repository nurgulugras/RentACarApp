import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Data, NavigationEnd, Router } from '@angular/router';
import { BreadcrumbItem } from 'src/app/models/breadcrumb-item';

@Component({
  selector: 'nrg-breadcrumb',
  templateUrl: './nrg-breadcrumb.component.html',
  styleUrls: ['./nrg-breadcrumb.component.css']
})
export class NrgBreadcrumbComponent implements OnInit {

breadcumbitem:BreadcrumbItem;
  public constructor(public route:ActivatedRoute, private router:Router) {
    router.events.subscribe((val) => {
      

      if (val instanceof ActivationEnd) {
        if(val.snapshot.firstChild){
      this.breadcumbitem=val.snapshot.firstChild.data as BreadcrumbItem;
        }
      }
    });
  }
  ngOnInit() {
  }
 
}