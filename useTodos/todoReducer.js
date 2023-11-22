

export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload]
        //throw new Error('Action.Type = ABC no esta implementada')//en caso de que aun el caso no este implementada, como pruebas se pone esta linea y se quita el return
        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload)
        case '[TODO] Toggle Todo':
            return initialState.map(todo =>{
                if(todo.id === action.payload){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })
        default:
            return initialState
    }
}