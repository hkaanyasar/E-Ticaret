import { Injectable } from '@angular/core';
declare let alertify:any;


@Injectable()
export class AlertifyService {

  constructor() { }
  success(massage:string){
    alertify.success(massage)
  }
}
