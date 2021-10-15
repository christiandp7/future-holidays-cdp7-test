// Put your application javascript here
const store = Vue.reactive({
	state: {
		cart: [],
	},

	getCart() {
		axios
			.get('/cart.js')
			.then(resp => {
				this.state.cart.unshift(resp.data)
			})
			.catch(err => {
				console.log(err)
			})
	},
})
