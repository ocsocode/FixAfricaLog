import { Component, Input, OnInit } from '@angular/core';
import { TippingService } from '../../services/tipping.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-profile',
  templateUrl: './author-profile.component.html',
  styleUrls: ['./author-profile.component.css'],
})
export class AuthorProfileComponent implements OnInit {
  @Input() authorId!: string;

  totalTips: number = 0;
  recentTips: Tip[] = [];

  constructor(private route: ActivatedRoute, private tippingService: TippingService) {}

  ngOnInit(): void {
    this.authorId = this.route.snapshot.paramMap.get('id')!;
    this.loadTipData();
  }

  loadTipData(): void {
  this.tippingService.getTotalTipsForAuthor(this.authorId).subscribe(
    (total) => (this.totalTips = total),
    (error) => console.error('Error fetching total tips:', error)
  );

  this.tippingService.getTipsForAuthor(this.authorId).subscribe(
    (tips) => (this.recentTips = tips.slice(-5)),
    (error) => console.error('Error fetching tips:', error)
  );
}


}
