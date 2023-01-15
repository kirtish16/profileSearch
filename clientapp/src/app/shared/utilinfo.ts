import { Injectable} from '@angular/core'

@Injectable({
    providedIn: 'root'
  })
  export class UtilsInfo {
  
    public showLoading = false;
    public itemsPerPage = 10;
    public errorMessage = '' ; 

    startLoader() {
      this.showLoading = true;
    }
    stopLoader() {
      this.showLoading = false;
    }

    showPopup(message:any){
      this.errorMessage = message
    }
    
    closePopup(){
      this.errorMessage = '' 
    }

  }
  