import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Tasks } from './principal/tasks.interface';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ServiceTodosService {

  constructor(private db: AngularFirestore) {

  }
  
  //metodo que me permite obtener todas los todos
  getTasks():Observable<Tasks[]> 
  {
    return this.db.collection<Tasks>('tasks').valueChanges();
  }
 
  //metodo que me permite guardar una tarea
  saveTasks(nombre:string)
  {
    const id = this.db.createId();
    return this.db.collection('tasks').doc(id).set({ id: id, name: nombre, status: false });
  }
//Metodo que me permite editar una tarea
  editTask(id:string,status:boolean)
  {
    this.db.collection('tasks').doc(id).update({ status: status });
  } 
  //metodo que me permite eliminar una tarea
  deleteTask(id)
  {
    this.db.collection('tasks').doc(id).delete();  
  }
  
  

}
