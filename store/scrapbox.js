export const state = () => ({
  scrapbox: {}
})

export const getters = {
  scrapbox (state) {
    return state.scrapbox
  }
}

export const mutations = {
  setScrapbox (state, scrapbox) {
    state.scrapbox = scrapbox
  }
}

export const actions = {
  async fetchScrapbox ({ commit }) {
    const scrapbox = await this.$axios.$get('/api/pages/hirosuke29?limit=3')
    commit('setScrapbox', scrapbox)
  }
}
