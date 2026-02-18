// ★ここをあなたのGAS URLに変更！
const GAS_API_URL = "https://script.google.com/macros/s/AKfycbyWAv3my-hptaFkUptfhkIsN0lmFYdx5OCYz8hRD2NmFfvPDVZQ8K8N2X4yO_6IfQCr/exec";

async function apiLogin(contractId, userId) {
  const url = `${GAS_API_URL}?action=login&contractId=${encodeURIComponent(contractId)}&userId=${encodeURIComponent(userId)}`;
  const res = await fetch(url);
  return await res.json();
}

async function apiMe(contractId, userId) {
  const url = `${GAS_API_URL}?action=me&contractId=${encodeURIComponent(contractId)}&userId=${encodeURIComponent(userId)}`;
  const res = await fetch(url);
  return await res.json();
}
