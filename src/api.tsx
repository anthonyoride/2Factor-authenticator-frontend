import axios from 'axios'
export default axios.create({
	baseURL: 'http://localhost:4000/gerald-app/api/v1',
	headers: {
		"Content-Type": "application/json"
	} 
})