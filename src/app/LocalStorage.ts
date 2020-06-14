const LocalStorage = {
  get(key: string) {
    return localStorage.getItem(key);
  },

  save(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  },

  update(key: string, value: any) {
    const item = LocalStorage.get(key);
    // if current value is a string, then overwrite; else merge objects
    const v =
      typeof value === 'string' ? value : Object.assign({}, item, value);
    return localStorage.setItem(key, JSON.stringify(v));
  },

  favoriteAdd(key: string, value: any) {
    const item: any = JSON.parse(LocalStorage.get(key));
    if (item !== null) {
      if (!item[value.id]) {
        let newItem = { ...item, [value.id]: value };
        localStorage.setItem(key, JSON.stringify(newItem));
        return newItem;
      } else {
        delete item[value.id];
        localStorage.setItem(key, JSON.stringify(item));
        return item;
      }
    } else {
      let newItem = { [value.id]: value };
      localStorage.setItem(key, JSON.stringify(newItem));
      return newItem;
    }
  },

  delete(key: string) {
    return localStorage.removeItem(key);
  },

  clear() {
    return localStorage.clear();
  },
};

export default LocalStorage;
