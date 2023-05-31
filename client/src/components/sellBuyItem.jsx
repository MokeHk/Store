import { Input, Text, SimpleGrid, Card, Button } from "@chakra-ui/react";
import { saveItem } from "../data/items";
import { useState } from "react";

export default function SellBuyItem({ price }) {
  const initialState = {
    quantity: "",
    price: price,
    selling: true,
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const toggleSell = () => {
    setValues({ ...values, selling: !values.selling });
  };

  return (
    <div>
      <Card p={10} verticalAlign="bottom" bgColor="#aca9a9">
        <Text p={2} align="center" className="h4">{`${
          values.selling === true ? "Sell" : "Buy"
        }`}</Text>
        <form onSubmit={handleSubmit}>
          <SimpleGrid columns={2} spacing={3}>
            <Text>
              <label htmlFor="quantity">Quantity:</label>
              <Input
                value={values.quantity}
                name="quantity"
                type="number"
                required={true}
                onChange={handleChange}
              />
            </Text>
            <Text>
              <label htmlFor="price">Price:</label>
              <Input
                value={values.price}
                onChange={handleChange}
                type="number"
                name="price"
                required={true}
              />
            </Text>
            <button type="submit" className="btn btn-secondary btn-mini">
              {`${values.selling === true ? "Sell" : "Buy"}`}
            </button>
          </SimpleGrid>
        </form>
        <Text align="right">
          <button
            type="button"
            className="btn btn-warning"
            onClick={toggleSell}
          >
            {`I want to ${values.selling === true ? "Buy" : "Sell"} instead`}
          </button>
        </Text>
      </Card>
    </div>
  );
}
