/* eslint-disable */
import SDK from './SDK';

let obj = {
	initialize() {
		// if (process.env.NODE_ENV === 'development') 
		return SDK.init({
			baseUrl: `https://cat-fact.herokuapp.com/`,
			// apiToken: 'tokenGoesHere',
		})
		// else
		// return same
	}
}

export default obj;
