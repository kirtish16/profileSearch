import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { LoaderComponent } from './components/loader/loader.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './components/user/user.component'

import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { NgxPaginationModule } from 'ngx-pagination';

import { BrowserAnimationsModule } from  
    '@angular/platform-browser/animations';
import { ErrorComponent } from './components/error/error.component'; 

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoaderComponent,
    UserComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
