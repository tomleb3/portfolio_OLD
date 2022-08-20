export const storageService = {
    save,
    load,
    remove,
};

function save(key: string, val: any) {
    const str: string = JSON.stringify(val);
    localStorage.setItem(key, str);
}

function load<T>(key: string): T | null {
    const str: string | null = localStorage.getItem(key);
    if (str === null) {
        return null;
    }
    return JSON.parse(str);
}

function remove(key: string) {
    localStorage.removeItem(key);
}
