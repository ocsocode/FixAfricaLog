import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { LiquidityOfferingsComponent } from './liquidity-offerings/liquidity-offerings.component';
import { CustomerCredentialsComponent } from './customer-credentials/customer-credentials.component';
import { Routes } from '@angular/router';
import { AuthorProfileComponent } from './components/author-profile/author-profile.component';
import { HttpClientModule } from '@angular/common/http';
// Do not include AppComponent or HomeComponent in NgModule declarations

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
    // Other imports
  ],

  declarations: [
    // other components
    LiquidityOfferingsComponent,
    CustomerCredentialsComponent
  ],

  providers: []
})

const routes: Routes = [
  {
    path: 'author/:id',
    component: AuthorProfileComponent,
  },
];

export class AppModule { }