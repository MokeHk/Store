import { Input, Text, SimpleGrid, Card, Button } from "@chakra-ui/react";
import { saveItem } from "../data/items";
import { useState } from "react";

export default function editItem({ product, unit, quantity, price }) {
  const initialState = {
    product: product,
    unit: unit,
    quantity: quantity,
    price: price,
    selling: true,
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(e.target);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div>
      <Card p={10} bgColor="#aca9a9">
        <Text p={10} as="h2">
          Edit item
        </Text>
        <form onSubmit={handleSubmit}>
          <SimpleGrid spacing={3} columns={2}>
            <Text>
              <label htmlFor="product">Product:</label>
              <Input
                type="string"
                value={values.product}
                name="product"
                required={true}
                onChange={handleChange}
              />
            </Text>
            <Text>
              <label htmlFor="unit">Unit:</label>
              <Input
                type="text"
                value={values.unit}
                name="unit"
                onChange={handleChange}
              />
            </Text>
            <Text>
              <label htmlFor="quantity">Quantity:</label>
              <Input
                type="Number"
                value={values.quantity}
                name="quantity"
                required={true}
                onChange={handleChange}
              />
            </Text>
            <Text>
              <label htmlFor="price">Price:</label>
              <Input
                type="Number"
                value={values.price}
                name="price"
                required={true}
                onChange={handleChange}
              />
            </Text>
            <button type="submit" className="btn btn-secondary btn-mini">
              Edit
            </button>
          </SimpleGrid>
        </form>
      </Card>
    </div>
  );
}
