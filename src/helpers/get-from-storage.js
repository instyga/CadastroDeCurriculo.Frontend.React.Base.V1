export const getFromStorage = (key) => {
  const value = localStorage.getItem(key);
  if (typeof value === "object" && value !== null) {
    return JSON.parse(value);
  }
  return value;
};
