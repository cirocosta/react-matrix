module.exports = {

	/**
	 * Creates a linear scale given a domain array
	 * and a range array
	 * @param  {array} d1
	 * @param  {array} d2
	 * @return {Function}
	 */
	linear: (d1, d2) => {
		return (num) => d2[0] + (d2[1] - d2[0]) * ((num-d1[0])/(d1[1]-d1[0]));
	}
};
