import { Component, Input } from '@angular/core'

@Component({
  selector: 'primary-pink-button',
  templateUrl: 'primary-pink-button.component.html',
  styleUrls: ['primary-pink-button.component.css'],
})
export class PrimaryPinkButton {
  @Input()
  rootClassName: string = ''
  @Input()
  button: string = 'Ð Ð°Ð·Ð³Ð»ÐµÐ´Ð°Ð¹ ÐºÐ°ÐºÐ²Ð¾ Ð¿ÑÐµÐ´Ð»Ð°Ð³Ð°Ð¼'

  constructor() {}
}
