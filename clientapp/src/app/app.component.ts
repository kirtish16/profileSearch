import { AfterViewChecked,ChangeDetectorRef } from '@angular/core';

import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { UtilsInfo } from './shared/utilinfo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked{
  title = 'clientapp';

  constructor(public utils : UtilsInfo, private router: Router,private cdRef:ChangeDetectorRef) { }

  ngAfterViewChecked(): void {
      this.cdRef.detectChanges()
  }

}
