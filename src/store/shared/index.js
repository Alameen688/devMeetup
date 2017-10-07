export const sharedModule = {
  state: {
    loading: false,
    meetUpLoading: false,
    error: null
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setMeetUpLoading (state, payload) {
      state.meetUpLoading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    clearError ({commit}) {
      commit('clearError')
    }
  },
  getters: {
    error (state) {
      return state.error
    },
    loading (state) {
      return state.loading
    },
    meetUpLoading (state) {
      return state.meetUpLoading
    }
  }
}
