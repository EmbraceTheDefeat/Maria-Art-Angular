import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-page3',
  templateUrl: 'app-page3.component.html',
  styleUrls: ['app-page3.component.css'],
})
export class AppPage3 {
  rawkucf: string = ' '
  rawshnw: string = ' '
  rawidqy: string = ' '
  rawd6sv: string = ' '
  rawzvsi: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Maria Art ')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Maria Art ',
      },
    ])
  }
}
