import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvalidUserComponent } from './components/invalid-user/invalid-user.component';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path:'',
    component:SearchComponent
  },
  {
    path:'user/:id',
    component:UserComponent
  },
  {
    path:'invalid',
    component:InvalidUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
