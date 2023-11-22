import { Component, OnInit } from '@angular/core';
import { ReqiustService } from 'src/app/services/reqiust.service';

@Component({
  selector: 'app-reqiust',
  templateUrl: './reqiust.component.html',
  styleUrls: ['./reqiust.component.css']
})
export class ReqiustComponent implements OnInit {
 
  ReqiustData:any;
 
  constructor( private reqApi:ReqiustService){

  }



  ngOnInit(): void {
    
  }



}
