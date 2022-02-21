import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nrg-card-header',
  templateUrl: './nrg-card-header.component.html',
  styleUrls: ['./nrg-card-header.component.css']
})
export class NrgCardHeaderComponent implements OnInit {
  
  @Input() title?:string;
  @Input() nav?:string;
  constructor() { }
   
  ngOnInit(

    
  ) {
      
  }
  
}
