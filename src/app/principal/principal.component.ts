import { ComponentFixture } from '@angular/core/testing';
import { Tasks } from './tasks.interface';
import { Component, OnInit } from '@angular/core';

import { ServiceTodosService } from '../service-todos.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  
  tasks: Tasks[] = [];
  msgAlert: string = '';
  showme = true;
  count: number;
  
  constructor(private serviceTasks: ServiceTodosService) {
    serviceTasks.getTasks().subscribe((content) => (this.tasks = content));
    
  }
  //agregar tarea

  addTask(input: HTMLInputElement) {  
    const task = input.value;
    const status = false;
    if (input.value !== '') {
      this.serviceTasks.saveTasks(task);
      input.value = '';
    } 
  }
  //editar tarea
  editTask(id: string, input) {
    let status: boolean;
    if (input.target.checked) {
      status = true;
    } else {
      status = false;
    }
    this.serviceTasks.editTask(id, status);
  }
  //eliminar tarea
  deleteTask(id: string)
  {
    this.serviceTasks.deleteTask(id);   
  }
  //contar tarea
  countTasks()
  {
    return this.tasks.filter((task) => task.status).length;
  }
  //filtros
 
  listCompleteTasks()
  {
    
    this.tasks = this.tasks.filter((task) => task.status == true);
    
  }
  listActiveTasks()
  {
   
    this.tasks = this.tasks.filter((task) => task.status == false);
    
  }

  ngOnInit() {
  }

}
