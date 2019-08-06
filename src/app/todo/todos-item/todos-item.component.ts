import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ToggleTodoAction, EditarTodoAction, BorrarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.scss']
})
export class TodosItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputFisico', { static: false }) txtInputFisico: ElementRef;

  chkfield: FormControl;
  txtInput: FormControl;
  editando: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.chkfield = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkfield.valueChanges.subscribe(() => {
      const accion = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(accion);
    });

  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);

  }

  terminarEdicion() {
    this.editando = false;
    const accion = new EditarTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(accion);

  }

  eliminar(){
    const accion = new BorrarTodoAction(this.todo.id);
    this.store.dispatch(accion);
    console.log('hola');
    

  }
}
