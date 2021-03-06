// Put your application javascript here
const store = Vue.reactive({
	state: {
		cartState: [],
		cartSidebar: {
			open: false,
		},
		menuMobile: {
			open: false,
		},
	},

	getCart() {
		axios
			.get('/cart.js')
			.then(response => {
				this.state.cartState.unshift(response.data)
			})
			.catch(err => {
				console.log(err)
			})
	},

	openCartSidebar() {
		this.state.cartSidebar.open = true
	},
	closeCartSidebar() {
		this.state.cartSidebar.open = false
	},

	openMenuMobile() {
		this.state.menuMobile.open = true
	},
	closeMenuMobile() {
		this.state.menuMobile.open = false
	},
})
