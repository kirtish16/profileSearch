import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UtilsInfo } from 'src/app/shared/utilinfo';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username = ""

  userData = { 
    name: '',
    bio: '',
    img_url: '',
    company: '',
    url: '',
    location: '',
    public_repos: '',
    repos : [{
      name: '',
      desc: '',
      language: '',
      url: ''
    }]
  };

  userRepo: boolean = false;

  pageSelected: number = 1;

  constructor(private route : ActivatedRoute, public utils: UtilsInfo,public api:ApiService,private cdRef : ChangeDetectorRef) { 
    this.utils.startLoader() ; 

    this.route.params.subscribe(params => {
      this.username = params['id'];
    }) ;
    
    this.getUserDetails()
    
  }
  
  ngOnInit(): void {}
  
  ngAfterViewInit(){    
    if(this.userData.name != '')
      this.userRepo = true

  }
    
  ngAfterViewChecked() {
    this.cdRef.detectChanges()
  }
  
  getUserDetails(){
    this.api.fetchUserInfo(this.username).subscribe(data => {    
      this.userData.name = data.name ? data.name : 'Unknown';
      this.userData.bio = data.bio ? data.bio : 'No Bio';
      this.userData.company = data.company ? data.company : 'No company';
      this.userData.location = data.location ? data.location : 'UnKnown';
      this.userData.url = data.url ? data.url : '';
      this.userData.img_url = data.img_url ? data.img_url : '';
      this.userData.public_repos = data.public_repos ? data.public_repos : '';
    })

      this.getRepos(this.pageSelected);

    }

    getRepos(page:any){

      this.api.fetchUserRepos(this.username, this.utils.itemsPerPage, page).subscribe(repos_info => {
        this.userData.repos = repos_info['repos']

        this.userRepo = true 

        this.utils.stopLoader();
      })

    }

  // pagingation 
  pageChangeHandler(event: any) {
    this.utils.startLoader();

    this.pageSelected = event;
  
    // scroll page up when page changed 
    window.scrollTo(0, 0);

    this.getRepos(this.pageSelected);
    
  }


}
