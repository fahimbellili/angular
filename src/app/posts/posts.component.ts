import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;

  myDate = new Date();

  like = 0;
  dlike = 0;

  constructor() {
  }

  ngOnInit() {
  }

  onLike() {
    console.log('Like !' + this.like);
    this.like += 1;
  }

  onDontLike() {
    console.log('Don\'t like !' + this.dlike);
    this.dlike += 1;
  }
}
