import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { TippingService } from '../services/tipping.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts = [];

  constructor(private blogService: BlogService, private tippingService: TippingService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.blogService.getPosts().subscribe(posts => this.posts = posts);
  }

  tipAuthor(authorId: string, tipAmount: number) {
    this.tippingService.sendTip(authorId, tipAmount).subscribe(response => {
      // Handle the response, such as showing a success message
    });
  }
}
