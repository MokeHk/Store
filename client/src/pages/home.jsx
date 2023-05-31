import { Card } from "@chakra-ui/react";
import Items from "../components/items";
import AddItem from "../components/addItem";

export default function Home() {
  return (
    <div>
      <Card>
        <Items />
        <AddItem />
      </Card>
    </div>
  );
}
