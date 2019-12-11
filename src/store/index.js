import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    defaultParams: {
      lifeCount: 21,
      playerName: 'Player'
    },
    players: [
      {
        lifeCount: 21,
        playerName: 'Player'
      },
      {
        lifeCount: 21,
        playerName: 'Player'
      },
      {
        lifeCount: 21,
        playerName: 'Player'
      },
      {
        lifeCount: 21,
        playerName: 'Player'
      }
    ]
  },
  mutations: {
    plus (state, id) {
      state.players[id].lifeCount++
    },

    min (state, id) {
      state.players[id].lifeCount--
    }
  },
  actions: {
  },
  modules: {
  }
})
