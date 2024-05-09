export const GetPath = () => {
    const path = window.location.pathname
    const pathnameArray = path.split('/')
    const temp = pathnameArray[1]
    return temp.charAt(0).toUpperCase() + temp.slice(1)
}

export const formatPrice = (price) => {
    const priceArray = price.toString().split('').reverse()
    const formattedPrice = priceArray.map((digit, index) => {
        if (index !== 0 && index % 3 === 0) {
            return digit + ','
        } else {
            return digit
        }
    }).reverse().join('') + '원'

    return formattedPrice
}