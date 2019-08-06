import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import * as fromFiltroActions from '../../filter/filter.action';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = [];
  filtro: fromFiltroActions.filtrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.store.subscribe(state => {
      this.todos = state.todos;
      this.filtro = state.filtro;
    });

  }

}
