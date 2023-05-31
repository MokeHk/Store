const items = [
  {
    _id: "1111",
    product: "Wheat",
    unit: "Quintals",
    price: "5000",
    quantity: "50",
  },
  {
    _id: "2222",
    product: "A4 Paper",
    unit: "Box",
    price: "300",
    quantity: "500",
  },
  {
    _id: "3333",
    product: "Bottle",
    unit: "Dozen",
    price: "50",
    quantity: "200",
  },
  {
    _id: "4444",
    product: "Pipe",
    unit: "Meter",
    price: "500000",
    quantity: "30",
  },
  {
    _id: "5555",
    product: "Biscuit",
    unit: "Box",
    price: "300",
    quantity: "50",
  },
  {
    _id: "6666",
    product: "LG-TV",
    unit: "Unit",
    price: "70000",
    quantity: "12",
  },
];

export function getItems() {
  return items;
}

export function getItem(id) {
  return items.find((m) => m._id === id);
}

export function saveItem(item) {
  let itemInDb = items.find((m) => m._id === item._id) || {};
  itemInDb.product = item.product;
  itemInDb.unit = item.unit;
  itemInDb.quantity = item.quantity;
  itemInDb.name = item.name;

  if (!itemInDb._id) {
    itemInDb._id = Date.now().toString();
    items.push(itemInDb);
  }

  return itemInDb;
}
