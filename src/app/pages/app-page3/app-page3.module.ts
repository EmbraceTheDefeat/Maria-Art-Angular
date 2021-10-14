import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { AppPage3 } from './app-page3.component'

const routes = [
  {
    path: '',
    component: AppPage3,
  },
]

@NgModule({
  declarations: [AppPage3],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [AppPage3],
})
export class AppPage3Module {}
