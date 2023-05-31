import { Input, Text, SimpleGrid, Card } from "@chakra-ui/react";
import { saveItem } from "../data/items";
import { useState } from "react";

export default function AddItem() {
  const initialState = {
    product: "",
    unit: "Unit",
    quantity: "",
    price: "",
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div>
      <Card p={10} bgColor="#aca9a9">
        <Text className="h4">Add an item</Text>
        <form onSubmit={handleSubmit}>
          <SimpleGrid columns={2} spacing={3}>
            <Text>
              <label htmlFor="product">Product</label>
              <Input
                type="String"
                value={values.product}
                name="product"
                required={true}
                onChange={handleChange}
              />
            </Text>
            <Text>
              <label htmlFor="unit">Unit</label>
              <Input
                type="Text"
                value={values.unit}
                name="unit"
                onChange={handleChange}
              />
            </Text>
            <Text>
              <label htmlFor="quantity">Quantity</label>
              <Input
                type="Number"
                value={values.quantity}
                name="quantity"
                required={true}
                onChange={handleChange}
              />
            </Text>
            <Text>
              <label htmlFor="price">Price</label>
              <Input
                type="Number"
                value={values.price}
                name="price"
                required={true}
                onChange={handleChange}
              />
            </Text>
            <button type="submit" className="btn btn-secondary btn-mini">
              Add
            </button>
          </SimpleGrid>
        </form>
      </Card>
    </div>
  );
}
