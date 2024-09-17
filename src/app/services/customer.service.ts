import { Injectable } from '@angular/core';

export interface Customer {
  name: string;
  did: string;
  credential: any;
  countryCode: string;
}

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customers: Customer[] = [];

  addCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  getCustomer(did: string): Customer | undefined {
    return this.customers.find((customer) => customer.did === did);
  }

  getAllCustomers(): Customer[] {
    return this.customers;
  }

  removeCustomer(did: string): void {
    this.customers = this.customers.filter((customer) => customer.did !== did);
  }
}
