export function checkTokens() {
  const authToken = localStorage.getItem("authToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (authToken === null || refreshToken === null) {
    return false;
  }

  if (authToken === "" || refreshToken === "") {
    
    return false;
  }

  if (authToken.length < 220 || refreshToken.length < 220) {
    return false;
  }

  return true
}
