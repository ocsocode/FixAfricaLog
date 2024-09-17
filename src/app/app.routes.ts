import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { BlogComponent } from './components/blog/blog.component';
import { CustomerManagementComponent } from './components/customer-management/customer-management.component';
import { SatisfactionComponent } from './components/satisfaction/satisfaction.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'customer-management', component: CustomerManagementComponent },
  { path: 'satisfaction', component: SatisfactionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
