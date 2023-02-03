import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './module/landing-page/landing-page.component';
import { VedicNeutraceuticlesComponent } from './module/vedic-neutraceuticles/vedic-neutraceuticles.component';

const routes: Routes = [

  { path: '', component: LandingPageComponent },
  { path: 'vedic-neutraceuticles', component: VedicNeutraceuticlesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


