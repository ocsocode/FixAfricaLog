import { Component, Input } from '@angular/core';
import { TippingService } from '../../services/tipping.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tip-author',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tip-author.component.html',
  styleUrls: ['./tip-author.component.css'],
})

export class TipAuthorComponent {
  @Input() authorId!: string; // Author's unique identifier
  @Input() tipperId!: string; // Tipper's unique identifier (e.g., current user ID)

  amount: number = 0;

  constructor(private tippingService: TippingService) {}

  submitTip(): void {
    if (this.amount > 0) {
      this.tippingService.submitTip(this.authorId, this.amount, this.tipperId).subscribe(
        (response) => {
          alert('Thank you for your tip!');
          this.amount = 0;
        },
        (error) => {
          console.error('Error submitting tip:', error);
          alert('An error occurred while submitting your tip.');
        }
      );
    } else {
      alert('Please enter a valid tip amount.');
    }
  }
  

}


