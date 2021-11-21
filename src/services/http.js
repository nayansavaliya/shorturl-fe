import axios from 'axios'
import { toast } from 'react-toastify'

axios.defaults.baseURL = process.env.REACT_APP_API_URL

axios.interceptors.response.use(null, (resp, error) => {
	const expectedError =
		error.response &&
		error.response.status >= 400 &&
		error.response.status < 500

	if (!expectedError) {
		toast.error(`${resp.data.message}`)
	}
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete,
}