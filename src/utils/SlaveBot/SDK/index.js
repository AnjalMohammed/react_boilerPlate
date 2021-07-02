import { CancelToken } from 'axios';
import SimpleInterface from './SimpleInterface'
import API from '../FunctionLists/API';

export default {
	init(opts) {
		const CancelTokenSrc = CancelToken.source();
		opts.CancelTokenSrc = CancelTokenSrc.token;
		const client = SimpleInterface.init(opts);
		return {
			_cancellation: CancelTokenSrc,
			_cancel(message) { CancelTokenSrc.cancel(message); },
			api: API.init(client),
		};
	},
};
