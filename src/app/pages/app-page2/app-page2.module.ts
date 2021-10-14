import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { AppPage2 } from './app-page2.component'

const routes = [
  {
    path: '',
    component: AppPage2,
  },
]

@NgModule({
  declarations: [AppPage2],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [AppPage2],
})
export class AppPage2Module {}
