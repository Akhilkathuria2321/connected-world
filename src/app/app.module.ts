import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { IconsModule } from './icons/icons.module';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { CarSimulatorComponent } from './car-simulator/car-simulator.component';
import { TestComponent } from './test/test.component';
import { AgmDirectionModule } from 'agm-direction';   // agm-direction

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    MapComponent,
    CarSimulatorComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBiORUB4P28AAOMzoTcflhqWzUSmIMbkU8'
    }),
    AgmDirectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
