import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-page',
  templateUrl: 'app-page.component.html',
  styleUrls: ['app-page.component.css'],
})
export class AppPage {
  raw1qbf: string = ' '
  raw6udb: string = ' '
  rawimny: string = ' '
  rawwiaj: string = ' '
  raw7ghq: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('ÐÐ°Ð³Ð°Ð·Ð¸Ð½ - Maria Art ')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'ÐÐ°Ð³Ð°Ð·Ð¸Ð½ - Maria Art ',
      },
    ])
  }
}
