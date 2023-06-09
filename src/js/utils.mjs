// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  //return JSON.parse(localStorage.getItem(key));
  // Retrieve the data stored in local storage for the specified key
  const data = JSON.parse(localStorage.getItem(key));
  // If data was successfully retrieved from local storage
  if (data) {
    // Check if the retrieved data is an array
    // If it is, return it as is
    // If it is not, wrap it in an array and return it
    return Array.isArray(data) ? data : [data];
  } else {
    // If no data was retrieved, log an error message and return an empty array

    return [];
  }
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}
