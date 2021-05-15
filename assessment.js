const merge = (a,b) => {
    let c = []
    while (a.length && b.length) {
        c.push(a[0] < b[0] ? b.shift() : a.shift())
    }
    if (a.length>0) c=c.concat(a)
    if (b.length>0) c=c.concat(b)
    return c
}

const mergeSort = (arr) => {
    if (arr.length < 2) return arr
    let middle = arr.length/2
    let leftSideArr = arr.slice(0,middle)
    let rightSideArr = arr.slice(middle, arr.length)
    return merge(mergeSort(leftSideArr), mergeSort(rightSideArr))
}

const anagram = strings => {
    const cache = {};
    for (let string of strings) {
        const key = mergeSort([...string]).join('');
        if (!cache[key]) {
            cache[key] = [];
        }
        cache[key].push(string);
    }
    return Object.values(cache);
};

console.log(anagram(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']))