import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-page2',
  templateUrl: 'app-page2.component.html',
  styleUrls: ['app-page2.component.css'],
})
export class AppPage2 {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('ÐÐ° Ð¼ÐµÐ½ - Maria Art ')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'ÐÐ° Ð¼ÐµÐ½ - Maria Art ',
      },
    ])
  }
}
