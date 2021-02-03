/* Quick Question #1
    1,2,3,4
*/

/* Quick Question #2
    ref
*/

/* Quick Question #3
    {[1,2,3] => false}
*/

function hasDuplicate(arr) {
    let set = new Set(arr);
    return arr.length == set.size ? true : false;
};

function vowelCount(str) {
    let newStr = str.toLowerCase().split('');
    let vowel = 'aeiou';
    let map = new Map();
    let vowels = newStr.filter((value, i, arr) => {
        if (vowel.indexOf(value) != -1) {
            if (map.has(value)) {
                map.set(value, (map.get(value) + 1));
            } else {
                map.set(value, 1);
            }
            return value;
        }
    });
    return map;        
};