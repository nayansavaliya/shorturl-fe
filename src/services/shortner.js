import http from './http'



export async function generateShortUrl(data) {
	const resp = await http.post('/shortner',data)


	if (!resp || resp.status !== 200) {
		return false
	} else {
		return resp.data.shortUrl
	}
}

export async function getStats() {
	const resp = await http.get('/shortner/stats')
	if (!resp || resp.status !== 200) {
		return false
	} else {
		return resp.data
	}
}
