import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';

/*const routes: Routes = [
  {path: 'login', component: LoginComponent},

  {path: 'hello-world', component: HelloWorldComponent},
  {path: 'logout', component: LoginComponent},
];
*/
export const routes: Routes = [
  { path: '', component: LoginComponent,
      children: [
        
          { path: 'logout', component: LoginComponent },
          { path: 'hello-world',component: HelloWorldComponent }
      ]
  },
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
