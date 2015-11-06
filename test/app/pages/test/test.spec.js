var x = require('./test.js');



describe("testing", function(){

	var a = x;
	it('should work', function(){

		// should()
		assert.equal(a(), 1);
	})
})