
const path = window.parent?.location.pathname.split("/").reverse().slice(1).reverse().join("/") || "";
window.APP_API = path + '/bpdp-riskpoint';
