import { Component, OnInit } from '@angular/core';
import { PremiumService } from '../services/premium.service';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css'],
})
export class PremiumComponent implements OnInit {
  isPremium: boolean = false;

  constructor(private premiumService: PremiumService) {}

  ngOnInit(): void {
    const userDid = 'did:example:currentUser'; // Replace with actual current user DID
    this.isPremium = this.premiumService.isPremiumCustomer(userDid);
  }

  upgradeToPremium(): void {
    const userDid = 'did:example:currentUser'; // Replace with actual current user DID
    this.premiumService.enablePremiumFeatures(userDid);
    this.isPremium = true;
  }
}
