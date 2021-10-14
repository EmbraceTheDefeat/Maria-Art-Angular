import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

const routes = [
  {
    path: 'app-page',
    loadChildren: () =>
      import('./pages/app-page/app-page.module').then((m) => m.AppPageModule),
  },
  {
    path: 'app-page1',
    loadChildren: () =>
      import('./pages/app-page1/app-page1.module').then(
        (m) => m.AppPage1Module
      ),
  },
  {
    path: 'app-page2',
    loadChildren: () =>
      import('./pages/app-page2/app-page2.module').then(
        (m) => m.AppPage2Module
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/app-page3/app-page3.module').then(
        (m) => m.AppPage3Module
      ),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
