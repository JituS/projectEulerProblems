var fs = require('fs');

function dataShaper(data){
	return data.map(function(each){
		return each.split(' ').map(function(e){return +e;});
	});
}

var data = dataShaper(fs.readFileSync('data.txt', 'utf8').split('\n'));

function max(array, number){
	return Math.max.apply(this, array);
}

function longestPath(data) {
	return data.reduce(function(pv, cv){
		var result = [];
		pv.forEach(function(each, index){
			var left = each + cv[index];
			var right = each + cv[index+1];
			if(index){
				if(result[result.length-1] < left){
					result[result.length-1] = left;
				}
			}else{
				result.push(left);
			}
			result.push(right);
		});
		return result;
	});
}
console.log(max(longestPath(data)))