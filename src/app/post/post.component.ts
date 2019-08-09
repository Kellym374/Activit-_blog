import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoves: number;
  @Input() postCreated: Date;


  constructor() { }

  ngOnInit() {
  }

  loveIt(){
    if(this.postLoves = this.postLoves + 1){
      console.log("+1");
    }
   
  }

  dontLove(){
    if(this.postLoves = this.postLoves - 1){
      console.log("-1");
    }
  }

}
