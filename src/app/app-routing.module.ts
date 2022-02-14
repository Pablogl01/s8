import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StarShipComponent } from './star-ship/star-ship.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'StarShip',component: StarShipComponent},
{path: '**', pathMatch:'full', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
