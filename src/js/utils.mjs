export function getLocalStorage(key) {
    let retString = localStorage.getItem(key);
    let retArray = JSON.parse(retString);
    return retArray;
}

  // save add data to local storage
export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
    let dataS = JSON.stringify(data);
    localStorage.setItem(key, dataS );
}

function loadTemplate(path) {

    return async function () {
        const res = await fetch(path);
        if (res.ok) {
        const html = await res.text();
        return html;
        }
    };
}
  
export async function loadHeaderFooter() {
  
    const headerTemplateFn = loadTemplate("/partials/header.html");
    const footerTemplatefn = loadTemplate("/partials/footer.html");
  
    const header = document.getElementById("main-header");
    const footer = document.getElementById("main-footer");
  
    renderWithTemplate(headerTemplateFn, header);
    renderWithTemplate(footerTemplatefn, footer);
}