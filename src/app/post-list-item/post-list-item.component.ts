import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() postTitle;
  @Input() postContent;
  @Input() postLikes;
  @Input() postDate;

  constructor() { }

  ngOnInit() {
  }

  getClass() {
    if(this.postLikes > 0) {
      return 'alert-success';
    } else if(this.postLikes < 0) {
      return 'alert-danger';
    }
  }

}