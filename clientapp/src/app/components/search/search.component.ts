import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtilsInfo } from 'src/app/shared/utilinfo';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  name = new FormControl('')

  constructor(public utils: UtilsInfo,public api: ApiService,private router: Router,private snackbar : MatSnackBar) { }

  result :any
  // function to get user profile data 
  checkUser() {
    this.utils.startLoader();
    
    this.api.checkUserExist(this.name.value).subscribe(data => {    
      this.result = data
      if(this.result && this.result?.message != ''){
        this.router.navigate(['user/' + this.name.value]);
        return
      }
    },
    (error) => {

      if(error.error.success == false)
        this.snackbar.open('Invalid User! Please try valid user name', 'X',{duration: 2000});
      else 
        this.utils.showPopup(error.error.message)
        
        this.utils.stopLoader();
    }) 
    

  }

}
