function Bucket() {

    let _entries = [];
    let _size = 0;
    const size = () => size;

    const print = () => {
        console.log(_entries);
    }

    const add = (key, value) => {
        if (has(key)) {
            remove(key);
        }
        _entries.push([key, value]);
        _size += 1;
    }

    const keys = () => {
        return _entries.map(([k, v]) => k);
    }

    const values = () => {
        return _entries.map(([k, v]) => v);
    }

    const entries = () => {
        return _entries;
    }

    const find = (key) => {
        const entry = _entries.find(([k, v]) => k === key);
        return entry ? entry[1] : null;
    }

    const remove = (key) => {
        const index = _entries.find(([k, v]) => k === key);
        if (index !== null) {
            _entries.pop(index);
            _size -= 1;
            return true;
        }
        return false;
    }

    const has = (key) => {
        return _entries.some(([k, v]) => k === key);
    }

    return {
        add,
        find,
        remove,
        print,
        has,
        size,
        keys,
        values,
        entries
    }
}

export default Bucket;