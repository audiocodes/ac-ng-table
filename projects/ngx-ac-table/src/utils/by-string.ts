export const byString = (object, str: string): any => {

    if (str.indexOf('[') >= 0) {
        str = str.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    }
    str = str.replace(/^\./, '');           // strip a leading dot

    const a = str.split('.');
    const n = a.length;

    for (let i = 0; i < n; ++i) {
        if (object && a[i] in object) {
            object = object[a[i]];
        } else {
            return;
        }
    }

    return object;
};
