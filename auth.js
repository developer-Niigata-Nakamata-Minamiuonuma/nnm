function saveLogin(contractId, userId) {
  localStorage.setItem("nnm_contractId", contractId);
  localStorage.setItem("nnm_userId", userId);
}

function getLogin() {
  return {
    contractId: localStorage.getItem("nnm_contractId") || "",
    userId: localStorage.getItem("nnm_userId") || ""
  };
}

function logout() {
  localStorage.removeItem("nnm_contractId");
  localStorage.removeItem("nnm_userId");
  location.href = "./login.html";
}

function requireLoginOrRedirect() {
  const { contractId, userId } = getLogin();
  if (!contractId || !userId) {
    location.href = "./login.html";
    return null;
  }
  return { contractId, userId };
}
