import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import * as moment from 'moment';
import { NpsService } from '../core/nps.service';
import { AuthService } from '../core/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'page-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.scss']
})
export class UserComponent implements OnInit  {

  displayedColumns: string[] = [
    'ratingDate', 
    'rate1', 
    'rate2', 
    'rate3', 
    'rate4', 
    'rate5', 
    'detractor', 
    'promoter',
    'nps', 
    'reserva'
  ];
  dataSource: any;

  constructor(
    public npsService: NpsService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private location : Location
  ) {

  }

  ngOnInit(){
    this.npsService.getNpsList().subscribe(val => {
      this.dataSource = val
    })
  }

  stringToDate(date){
    return moment(date, 'YYYY-MM-DD').toDate()
  }
  
  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.location.back();
    }, (error) => {
      console.log("Logout error", error);
    });
  }

  npsClassification(nps){
    let clientCathegory;
    if(nps<70){
      clientCathegory = 'detractor'
    }else if(nps>=70 && nps<90){
      clientCathegory = 'passive'
    }else{
      clientCathegory = 'promoter'
    }
    return clientCathegory
  }
}
