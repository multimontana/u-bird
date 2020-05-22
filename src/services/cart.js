import { observable, action, computed } from 'mobx'

class Cart {
	@observable cart = []
	@observable item = {}

	@action addToCart(object) {
		let idx = this.cart.findIndex(item => item.id === object.id)
		if (idx !== -1) {
			this.cart[idx].count++
			return
		}
		this.cart.push(object)
	}
	@action getItems() {
		return this.cart
	}

	@action setItem(item) {
		this.item = item
	}

	@action getAllSum()
	{
		return this.cart.forEach(item => {
			return item.price * item.count
		})
	}
}

export default new Cart()
