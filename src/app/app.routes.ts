import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TpsRegisttrationComponent } from './tps-registtration/tps-registtration.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'regist', component: TpsRegisttrationComponent },
    { path: 'admin', component: AdminPageComponent },
];
