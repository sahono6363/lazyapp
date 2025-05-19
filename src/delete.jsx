export function removeItemFromList(list, index) {
  return list.filter((_, i) => i !== index);
}

export function removeList() {
  localStorage.removeItem("lazyapp-list");
}
