import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ScheduleAllModule,  } from '@syncfusion/ej2-angular-schedule';
import { SyncComponent } from './sync/sync.component';



@NgModule({
  declarations: [
    AppComponent,
    SyncComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DateTimePickerAllModule,
    DatePickerAllModule,
    DatePickerModule,
    ScheduleAllModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
