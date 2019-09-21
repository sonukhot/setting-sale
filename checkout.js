function selectSaleItems(items) {
  return items.filter(function discount(items) {
    return items.discount > 0
  })
}
//filter out discounts
module.exports = selectSaleItems
