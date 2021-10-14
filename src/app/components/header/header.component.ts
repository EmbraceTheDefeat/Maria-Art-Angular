import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class Header {
  @Input()
  image_src: string = '/playground_assets/maria%20art_free-file1-1000h.png'
  @Input()
  image_alt: string = 'image'

  constructor() {}
}
