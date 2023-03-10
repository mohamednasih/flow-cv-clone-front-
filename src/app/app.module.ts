import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './containers/navbar/navbar.component';
import { SvgComponent } from './utilities/svg/svg.component';
import { HttpClientModule } from '@angular/common/http';
import { ManageVersionComponent } from './containers/manage-version/manage-version.component';
import { ContentsComponent } from './containers/contents/contents.component';
import { ObjectivesComponent } from './containers/contents/objectives/objectives.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SvgComponent,
    ManageVersionComponent,
    ContentsComponent,
    ObjectivesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
