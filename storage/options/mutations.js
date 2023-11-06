export default{
    loadingSpinner(state, payload){
        state.loadingSpinner = payload
    },
    saveTokens(state, payload){
        state.tokens = payload
    },
    removeTokens(state, payload){
        state.tokens = payload
    }
}