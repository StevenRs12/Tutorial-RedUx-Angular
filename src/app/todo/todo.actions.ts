import { Action } from '@ngrx/store'

export const AGREGAR_TODO = '[TODO] aregar todo';
export const TOGGLE_TODO = '[TODO] toggle todo';
export const TOGGLE_ALL_TODO = '[TODO] toggle ALL todo';
export const EDITAR_TODO = '[TODO] editar todo';
export const BORRAR_TODO = '[TODO] borrar todo';
export const BORRAR_ALL_TODO = '[TODO] borrar all todo';


export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;

    constructor(public texto: string) { }
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;

    constructor(public id: number) { }
}

export class ToggleAllTodoAction implements Action {
    readonly type = TOGGLE_ALL_TODO;

    constructor(public completado: boolean) { }
}

export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;

    constructor(public id: number, public texto: string) { }
}

export class BorrarTodoAction implements Action {
    readonly type = BORRAR_TODO;

    constructor(public id: number) { }
}

export class BorrarAllTodoAction implements Action {
    readonly type = BORRAR_ALL_TODO;
}

export type Acciones = AgregarTodoAction | ToggleTodoAction | EditarTodoAction | BorrarTodoAction | ToggleAllTodoAction | BorrarAllTodoAction;