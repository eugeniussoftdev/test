function mod1($scope, fac){

	$scope.dataset = [
	11,
	22222,
	3333333,
	44,
	5555,
	666
	];

	$scope.list = fac.get();

	console.log(fac);
	// console.log();
};

module.exports = mod1;