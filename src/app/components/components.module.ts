import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { GalleryCard1 } from './gallery-card1/gallery-card1.component'
import { HeaderFull } from './header-full/header-full.component'
import { Footer } from './footer/footer.component'
import { FeatureCard } from './feature-card/feature-card.component'
import { BlogCard } from './blog-card/blog-card.component'
import { OutlineGrayButton } from './outline-gray-button/outline-gray-button.component'
import { FooterGray } from './footer-gray/footer-gray.component'
import { NextButton } from './next-button/next-button.component'
import { SecondaryButton } from './secondary-button/secondary-button.component'
import { PrimaryBlueButton } from './primary-blue-button/primary-blue-button.component'
import { BlogPostCard4 } from './blog-post-card4/blog-post-card4.component'
import { BlogPostCard2 } from './blog-post-card2/blog-post-card2.component'
import { ListItem } from './list-item/list-item.component'
import { OutlineBlackButton } from './outline-black-button/outline-black-button.component'
import { Header } from './header/header.component'
import { PrimaryPinkButton } from './primary-pink-button/primary-pink-button.component'
import { OutlineBlueButton } from './outline-blue-button/outline-blue-button.component'

@NgModule({
  declarations: [
    GalleryCard1,
    HeaderFull,
    Footer,
    FeatureCard,
    BlogCard,
    OutlineGrayButton,
    FooterGray,
    NextButton,
    SecondaryButton,
    PrimaryBlueButton,
    BlogPostCard4,
    BlogPostCard2,
    ListItem,
    OutlineBlackButton,
    Header,
    PrimaryPinkButton,
    OutlineBlueButton,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    GalleryCard1,
    HeaderFull,
    Footer,
    FeatureCard,
    BlogCard,
    OutlineGrayButton,
    FooterGray,
    NextButton,
    SecondaryButton,
    PrimaryBlueButton,
    BlogPostCard4,
    BlogPostCard2,
    ListItem,
    OutlineBlackButton,
    Header,
    PrimaryPinkButton,
    OutlineBlueButton,
  ],
})
export class ComponentsModule {}
