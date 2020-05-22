import {observable, action} from 'mobx'

class ProductItem {
	@observable productItem = {}

	@action createItem(item) {
		this.productItem = item
	}

	@action getItem() {
		return this.productItem
	}
}

export default new ProductItem()
