import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { AppPage } from './app-page.component'

const routes = [
  {
    path: '',
    component: AppPage,
  },
]

@NgModule({
  declarations: [AppPage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [AppPage],
})
export class AppPageModule {}
