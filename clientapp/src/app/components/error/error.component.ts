import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsInfo } from 'src/app/shared/utilinfo';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  errorMessage = ''

  constructor(public utils : UtilsInfo,private router: Router){}

  show(){
    this.utils.showPopup("Error occured")
  }

  close(){
    this.utils.closePopup()
    this.router.navigate(['']);
  }

}
