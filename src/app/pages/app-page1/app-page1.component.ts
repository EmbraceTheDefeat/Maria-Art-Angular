import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-page1',
  templateUrl: 'app-page1.component.html',
  styleUrls: ['app-page1.component.css'],
})
export class AppPage1 {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Ð¡Ð²ÑÑÐ¶Ð¸ ÑÐµ Ñ Ð¼ÐµÐ½ - Maria Art ')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Ð¡Ð²ÑÑÐ¶Ð¸ ÑÐµ Ñ Ð¼ÐµÐ½ - Maria Art ',
      },
    ])
  }
}
