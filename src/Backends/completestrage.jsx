export function loadCompletedList() {
  const saved = localStorage.getItem("lazyapp-completed-list");
  return saved ? JSON.parse(saved) : [];
}

export function saveCompletedList(list) {
  localStorage.setItem("lazyapp-completed-list", JSON.stringify(list));
}
