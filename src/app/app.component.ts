import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Mon premier post',
      content: 'votre AppComponent contiendra l\'array des posts, et il le passera à un component PostListComponent'
    },
    {
      title: 'Mon deuxième post',
      content: 'votre PostListComponent affichera un PostListItemComponent pour chaque post dans l\'array qu\'il a reçu'
    },
    {
      title: 'Encore un post',
      content: 'chaque PostListItemComponent affichera le titre, le contenu et la date de création du post dans le template'
    }
  ];

}
