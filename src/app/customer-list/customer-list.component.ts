import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customers = this.customerService.getAllCustomers();
  }

  removeCustomer(did: string): void {
    this.customerService.removeCustomer(did);
    this.customers = this.customerService.getAllCustomers(); // Refresh list
  }
}
