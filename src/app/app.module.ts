import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPipePipe } from './Pipes/first-pipe.pipe';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { StuffComponent } from './stuff/stuff.component';
import { ReactifFormComponent } from './reactif-form/reactif-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from './reactif-form/form-control/form-control.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPipePipe,
    UserComponent,
    AdminComponent,
    StuffComponent,
    ReactifFormComponent,
    FormControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
