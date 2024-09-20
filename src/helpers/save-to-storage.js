export const saveToStorage = (key, value) => {
  if (typeof value === "object" && value !== null) {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
};
