var fs = require('fs');
function dataShaper(data){
	return data.map(function(each){
		return each.split(' ').map(function(e){return +e;});
	}).reverse();
}
var data = dataShaper(fs.readFileSync('data.txt', 'utf8').split('\n'));

function longestPath(data) {
	return data.reduce(function(pv, cv){
		return cv.map(function(each, index){
			var left = each + pv[index];
			var right = each + pv[index + 1];
			return (left > right) ? left : right;
		});
	});
}
console.log(longestPath(data));