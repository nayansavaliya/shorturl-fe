import axios from 'axios'
import { toast } from 'react-toastify'
import { apiUrl } from '../config.json'

// axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.baseURL = apiUrl

axios.interceptors.response.use(null, (error) => {
	const expectedError =
		error.response &&
		error.response.status >= 400 &&
		error.response.status < 500
	if (expectedError) {
		toast.error(`${error.response.data}`)
	}
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete,
}