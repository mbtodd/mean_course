import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  newPost = 'NO CONTENT';


  onAddPost(postInput: HTMLTextAreaElement) {
    console.dir(postInput)
    this.newPost = 'the user\'s post';
    // console.log('This has posted')
  }
}
