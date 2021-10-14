import { Component, Input } from '@angular/core'

@Component({
  selector: 'blog-post-card2',
  templateUrl: 'blog-post-card2.component.html',
  styleUrls: ['blog-post-card2.component.css'],
})
export class BlogPostCard2 {
  @Input()
  when: string = '3 days ago'
  @Input()
  rootClassName: string = ''
  @Input()
  title: string = 'Lorem ipsum dolor sit amet'
  @Input()
  author: string = 'Jane Doe'
  @Input()
  profile_alt: string = 'profile'
  @Input()
  profile_src: string =
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200'
  @Input()
  description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...'
  @Input()
  image_alt: string = 'image'
  @Input()
  label: string = 'ENTERPRISE'
  @Input()
  image_src: string =
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000'

  constructor() {}
}
