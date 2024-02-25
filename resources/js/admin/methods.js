export function getAdminObj() {
    const get = JSON.parse(localStorage.getItem("adminObj"));
    return get.token;
  }