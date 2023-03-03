export default {
  setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, btoa(JSON.stringify(value)));
  },
  getItem<T>(key: string, defaultValue: T | null = null): T | null {
    const data = localStorage.getItem(key);

    if (!data) {
      return defaultValue;
    }

    return JSON.parse(atob(data));
  },
};
