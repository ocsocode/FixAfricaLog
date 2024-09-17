import { Component, OnInit } from '@angular/core';
import { CredentialService } from '../services/credential.service';

@Component({
  selector: 'app-customer-credentials',
  templateUrl: './customer-credentials.component.html',
  styleUrls: ['./customer-credentials.component.css']
})
export class CustomerCredentialsComponent implements OnInit {
  credential: any | null = null;
  errorMessage: string | null = null;

  constructor(private credentialService: CredentialService) {}

  ngOnInit(): void {
    this.fetchCredential();
  }

  fetchCredential(): void {
    const customerName = 'John Doe';
    const countryCode = 'US';
    const customerDID = 'did:example:123'; // Example DID

    this.credentialService.getCredential(customerName, countryCode, customerDID)
      .subscribe(
        (response) => this.credential = response.credential,
        (error) => this.errorMessage = 'Failed to fetch credential'
      );
  }
}
