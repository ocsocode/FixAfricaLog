import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent {
  customerName: string = '';
  countryCode: string = '';
  did: string = '';

  constructor(private customerService: CustomerService) {}

  addCustomer(): void {
    if (this.customerName && this.countryCode && this.did) {
      const newCustomer = {
        name: this.customerName,
        did: this.did,
        countryCode: this.countryCode,
        credential: null, // Credential will be fetched separately
      };
      this.customerService.addCustomer(newCustomer);
      // Optionally, clear the form
      this.customerName = '';
      this.countryCode = '';
      this.did = '';
    }
  }
}
