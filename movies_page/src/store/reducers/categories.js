export const SET_CATEGORIES = "categories/setCategories";

const initState = {
    categories: [],
}

export function categories(state = initState, action) {
    const newState = {...state};
    switch(action.type) {
        case SET_CATEGORIES:
            newState.categories = action.payload;
            break;
        default:
            return state;
    }
    return newState;
}