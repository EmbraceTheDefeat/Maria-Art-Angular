import { Component, Input } from '@angular/core'

@Component({
  selector: 'feature-card',
  templateUrl: 'feature-card.component.html',
  styleUrls: ['feature-card.component.css'],
})
export class FeatureCard {
  @Input()
  image_src: string = '0c545438-dccd-4f3c-8e7c-92d8d4113c1d'
  @Input()
  image_alt: string = 'image'
  @Input()
  text: string =
    'ÐÐ°ÐºÑÐ¿Ð¸ ÐµÐ´Ð¸Ð½ÑÑÐ²ÐµÐ½ Ð¿Ð¾ ÑÐ¾Ð´Ð° ÑÐ¸ Ð¿Ð¾Ð´Ð°ÑÑÐº Ð¾Ñ Ð¼Ð°Ð³Ð°Ð·Ð¸Ð½Ð° Ð¸Ð»Ð¸ ÑÐµ ÑÐ²ÑÑÐ¶Ð¸ Ñ Ð¼ÐµÐ½ Ð¸ Ð½Ð°Ð¿ÑÐ°Ð²Ð¸ Ð¿Ð¾ÑÑÑÐºÐ°.'
  @Input()
  rootClassName: string = ''

  constructor() {}
}
