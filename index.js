const testCard = 5325233430109903

const validateCard = cardNumber => {
	const regexStr = /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/
	return regexStr.test(cardNumber)
}

console.log(validateCard(testCard))
