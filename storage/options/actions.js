import { checkTokens } from "../../functions/checkTokens";
export default {
  setLogin(context, payload) {
    localStorage.setItem("authToken", payload.accesToken);
    localStorage.setItem("refreshToken", payload.refreshToken);
    context.commit("saveTokens", payload);
  },
  setLogout(context) {
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
    context.commit("removeTokens", {
      accesToken: null,
      refreshToken: null
    });
  },
  loadTokens(context){
    const auth = localStorage.getItem('authToken');
    const refreshToken = localStorage.getItem("refreshToken");
    context.commit('saveTokens',{
      accesToken: auth,
      refreshToken: refreshToken
    })
  },
  async tryLogin(context) {

    const refreshToken = localStorage.getItem("refreshToken");
    const validTokens = checkTokens();
    if(!validTokens){
      return;
    }

    const response = await fetch("https://projekt1.server.arturscibor.pl/refreshToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken: refreshToken }),
    });
    const responseData = await response.json();
    if (!response.ok) {
      console.log(responseData.error);
      return;
    }
    context.commit("saveTokens", {
      accesToken: responseData.Tokens.accesToken,
      refreshToken: responseData.Tokens.refreshToken,
    });

  },
};
