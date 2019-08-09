import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postCreated = new Date();

  posts = [
    {
      title: "Mon premier post",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque similique culpa, blanditiis qui beatae quod fugiat exercitationem. Nam fuga cumque magni ipsum odio animi, mollitia nobis officiis, dolores, iusto ut.",
      loves: 0,
      created_at: this.postCreated

    },

    {
      title: "Mon deuxieme post",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque similique culpa, blanditiis qui beatae quod fugiat exercitationem. Nam fuga cumque magni ipsum odio animi, mollitia nobis officiis, dolores, iusto ut.",
      loves: 0,
      created_at: this.postCreated

    },
    
    {
      title: "Encore un autre post",
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque similique culpa, blanditiis qui beatae quod fugiat exercitationem. Nam fuga cumque magni ipsum odio animi, mollitia nobis officiis, dolores, iusto ut.",
      loves: 0,
      created_at: this.postCreated

    }
  ];

 

}
