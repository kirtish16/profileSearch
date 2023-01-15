import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsInfo } from '../shared/utilinfo';

import { HttpClient } from '@angular/common/http'

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // public API_URL = 'http://127.0.0.1:8000/api/';
  public API_URL = 'https://ks11.pythonanywhere.com/api/';

  constructor(private router: Router, private utils: UtilsInfo, public http:HttpClient ) { }

  //Check if User Exists
  checkUserExist(userName:any){
    return this.http.get<any>(
      this.API_URL + 'check/' + userName).pipe(
        retry(1))

  }

  //Fetch User Detail from server
  fetchUserInfo(userName: any):Observable<any>{
    return this.http.get<any>(
      this.API_URL + 'detail/' + userName).pipe(
        retry(1), catchError(this.handleError.bind(this))
        )
      }
      
  //Fetch User Repos Detail from server
  fetchUserRepos(username:any,itemsPerPage:any,pageSelected:any){
    
    return this.http.get<any>(
      this.API_URL + 'repos/' + username + '?per_page=' + itemsPerPage + '&page=' + pageSelected).pipe(
        retry(1), catchError(this.handleError.bind(this))
      )

  }

  // Error handling 
  handleError(error: any) {
    
      this.utils.errorMessage = 'Error : ' + ( error.error.message ? error.error.message  : 'Try Again' );
    this.utils.stopLoader();

    return throwError(() => new Error(this.utils.errorMessage)) ;
  }



}
