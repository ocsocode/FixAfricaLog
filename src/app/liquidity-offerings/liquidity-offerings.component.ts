import { Component, OnInit } from '@angular/core';
import { LiquidityProviderService } from '../services/liquidity-provider.service';

@Component({
  selector: 'app-liquidity-offerings',
  templateUrl: './liquidity-offerings.component.html',
  styleUrls: ['./liquidity-offerings.component.css']
})
export class LiquidityOfferingsComponent implements OnInit {
  offerings: any[] = [];
  errorMessage: string | null = null;

  constructor(private liquidityProviderService: LiquidityProviderService) {}

  ngOnInit(): void {
    this.loadOfferings();
  }

  loadOfferings(): void {
    const providerDID = 'did:dht:3fkz5ssfxbriwks3iy5nwys3q5kyx64ettp9wfn1yfekfkiguj1y'; // Example DID
    this.liquidityProviderService.getOfferings(providerDID)
      .subscribe(
        (response) => this.offerings = response.offerings,
        (error) => this.errorMessage = 'Failed to load offerings'
      );
  }
}
