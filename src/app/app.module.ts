import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Module1aComponent } from './module1a/module1a.component';
import { Module1bComponent } from './module1b/module1b.component';
import { Module1cComponent } from './module1c/module1c.component';
import { Module1dComponent } from './module1d/module1d.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { Module1Component } from './module1/module1.component';
import { Module2Component } from './module2/module2.component';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Module2XComponent } from './module2-x/module2-x.component';
import { Module2YComponent } from './module2-y/module2-y.component';
import { Module2ZComponent } from './module2-z/module2-z.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Module2WComponent } from './module2-w/module2-w.component';
import { MainPageComponent } from './main-page/main-page.component';
//import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
//import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
//import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
//import { ModalModule } from '@bit/valor-soft';
//import { MatDialogModule }


const appRoute: Routes = [
  //{path:'', redirectTo:'Module1a', pathMatch:'full'},
  {path:'Module1', component: Module1Component},
  {path:'Module2', component: Module2Component},
  {path:'Module1/Module1a', component: Module1aComponent},
  {path:'Module1/Module1b', component: Module1bComponent},
  {path:'Module1/Module1c', component: Module1cComponent},
  {path:'Module1/Module1d', component: Module1dComponent},
  {path:'Module2/Module2-x', component: Module2XComponent},
  {path:'Module2/Module2-y', component: Module2YComponent},
  {path:'Module2/Module2-z', component: Module2ZComponent}
]

@NgModule({
  
  declarations: [
    AppComponent,
    Module1Component,
    Module2Component,
    Module1aComponent,
    Module1bComponent,
    Module1cComponent,
    Module1dComponent,
    Module2XComponent,
    Module2YComponent,
    Module2ZComponent,
    Module2WComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    NgbModule,
    BrowserAnimationsModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
