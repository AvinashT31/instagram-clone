export const initialState = { name: ""};

function reducer(state, action) {
    console.log(action, "action");
    console.log(state, "state");

    switch (action.type) {
        case 'changed_name': {
            return {
                name: action.nextName,
                age: state.age
            };
        }

    }throw Error ('unknown action:' + action.type);

}
export default reducer;