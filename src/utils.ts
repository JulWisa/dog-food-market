export const getPriceWIthDiscount = (price: number, discount: number): string =>
	(price * (1 - discount * 0.01)).toFixed(2)
