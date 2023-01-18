import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-invalid-user',
  templateUrl: './invalid-user.component.html',
  styleUrls: ['./invalid-user.component.css']
})
export class InvalidUserComponent {

  constructor(private router : Router){}

  goToHome(){
    this.router.navigate([''])
  }

}
