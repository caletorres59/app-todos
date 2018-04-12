import { AngularFirestore } from 'angularfire2/firestore';
import  { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private db: AngularFirestore)
  {
    // db.collection('task').add({ name: 'prueba' });
  }
  
}
