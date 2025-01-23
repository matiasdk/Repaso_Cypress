describe('agregar tareas', () => {
    it('Agregar una tarea a la lista', () => {
        cypress.visit('http://todomvc-app-for-testing.surge.sh/')
        cypress.get('.new-todo').type('Tarea 1{enter}')

        cypress.get('.todo-list')contains('Tarea 1')
    })
}