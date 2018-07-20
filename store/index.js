// import Vuex from 'vuex';

// /* eslint-disable */
// const createStore = () => new Vuex.Store({
//   state: {
//     counter: 0,
//   },
//   mutations: {
//     increment(state) {
//       state.counter = state.counter + 1;
//     },
//   },
//   getters: {},
// });

// export default createStore;
/* eslint-disable */
export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}
