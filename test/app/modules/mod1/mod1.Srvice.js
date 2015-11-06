function list(){

	var r = {
		get: getList
	}

	return r;

	function getList(){

		var arr = [];

		for(var i = 0; i < 10; i +=1){

			arr.push(i);
		}
		return arr;
	};
};

module.exports = list;