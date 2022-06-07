const SET_COLOR = "SET_COLOR";

const stateObject = {
    color: "#851a8f",
}
const stateGetters = {
    getColor: (state) => state.color,
}
const actions = {
    setColor: ({commit},color)=> commit("SET_COLOR", color),  
}
const mutations = {
    [SET_COLOR](state, color) {
        state.color = color;
    }
}

export default {
    state: stateObject,
    actions, mutations, getters:stateGetters
}