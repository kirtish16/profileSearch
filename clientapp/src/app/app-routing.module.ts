import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
