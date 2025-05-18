export function loadList() {
  const saved = localStorage.getItem("lazyapp-list");
  return saved ? JSON.parse(saved) : [];
}

export function saveList(list) {
  localStorage.setItem("lazyapp-list", JSON.stringify(list));
}
