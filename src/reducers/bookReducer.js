import * as uuid from 'uuid';

export const bookReducer = (state, action) => {
    switch(action.type){
        case 'ADD_BOOK':
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: uuid.v1(),
            }];
        case 'DELETE_BOOK':
            return state.filter(book => book.id !== action.id);
        default:
            return state;
    }
}