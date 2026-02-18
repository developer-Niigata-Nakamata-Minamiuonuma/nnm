// ★ここをあなたのGAS URLに変更！
const GAS_API_URL = "https://script.google.com/macros/s/AKfycbw7kqwqb1y5-C1x-EA_OSDqPoqx2f8_wpgJDqKnBwAsgRuXvhVkGp_3eeP6jXGu07K8/exec";

/**
 * JSONPでGASを呼ぶ（CORS回避）
 */
function callApi(params) {
  return new Promise((resolve, reject) => {
    const callbackName = "cb_" + Math.random().toString(36).slice(2);

    window[callbackName] = (data) => {
      delete window[callbackName];
      script.remove();
      resolve(data);
    };

    const query = new URLSearchParams({
      ...params,
      callback: callbackName,
    }).toString();

    const script = document.createElement("script");
    script.src = `${GAS_API_URL}?${query}`;

    script.onerror = () => {
      delete window[callbackName];
      script.remove();
      reject(new Error("JSONP request failed"));
    };

    document.body.appendChild(script);
  });
}

async function apiLogin(contractId, userId) {
  return await callApi({
    action: "login",
    contractId,
    userId,
  });
}

async function apiMe(contractId, userId) {
  return await callApi({
    action: "me",
    contractId,
    userId,
  });
}
