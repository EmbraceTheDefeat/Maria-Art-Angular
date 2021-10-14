import { Component, Input } from '@angular/core'

@Component({
  selector: 'list-item',
  templateUrl: 'list-item.component.html',
  styleUrls: ['list-item.component.css'],
})
export class ListItem {
  @Input()
  description: string = 'Description ..............'
  @Input()
  title: string = 'Title'

  constructor() {}
}
