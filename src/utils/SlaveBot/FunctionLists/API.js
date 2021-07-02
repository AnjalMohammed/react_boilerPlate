export default {
	init(initializedBase) {
		const base = initializedBase;
		return {
			getBreeds(params) {
				return base.details(`facts/random`, params);
			},
		};
	},
};
