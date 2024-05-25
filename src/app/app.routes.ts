import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'search', component: SearchComponent},
    { path: 'bookings', component: BookingsComponent},
    { path: 'admin', component: AdminComponent}
];
