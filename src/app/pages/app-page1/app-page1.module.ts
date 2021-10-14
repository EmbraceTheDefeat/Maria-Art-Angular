import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { AppPage1 } from './app-page1.component'

const routes = [
  {
    path: '',
    component: AppPage1,
  },
]

@NgModule({
  declarations: [AppPage1],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [AppPage1],
})
export class AppPage1Module {}
