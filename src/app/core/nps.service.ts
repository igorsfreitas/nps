import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NpsService {

  constructor(private http: HttpClient){}


  getNpsList(){
    return this.http.get('http://www.mocky.io/v2/5c2ca9e62e0000c029e876ea');
  }
}
