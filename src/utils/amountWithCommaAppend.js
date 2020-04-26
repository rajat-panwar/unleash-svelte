export function amountWithCommaAppend (Amount = '') {
    if (!Amount) {
        return ''
      }
      let amount = Amount + ''
      let delimiter = ','
      let a = amount.split('.')
      let integerPart = a[0]
      let decimalPart = a[1]
      let k = []
      if (integerPart.length < 4) {
        return (!(amount.indexOf('.') === -1) ? (integerPart + '.' + decimalPart) : integerPart)
      }
      if (integerPart.length > 3) {
        var nn = integerPart.substr(integerPart.length - 3)
        k.unshift(nn)
        integerPart = integerPart.substr(0, integerPart.length - 3)
      }
      while (integerPart.length > 2) {
        var nm = integerPart.substr(integerPart.length - 2)
        k.unshift(nm)
        integerPart = integerPart.substr(0, integerPart.length - 2)
      }
      if (integerPart.length > 0) { k.unshift(integerPart) }
      integerPart = k.join(delimiter)
      return (!(amount.indexOf('.') === -1) ? (integerPart + '.' + decimalPart) : integerPart)
}