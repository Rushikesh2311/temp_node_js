
const _ = require('lodash');

const tmp = [1,[2,[3,[4,[5]]]]];
const arr = _.flattenDeep(tmp);
console.log(arr);