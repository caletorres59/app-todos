import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { environment } from '../environments/environment';
import { ServiceTodosService } from './service-todos.service';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [ServiceTodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
