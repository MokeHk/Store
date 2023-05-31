import { useParams } from "react-router-dom";
import ItemDetail from "../components/itemDetail";
import SellBuyItem from "../components/sellBuyItem";
import { getItems, getItem } from "../data/items.js";
import NotFound from "./notFound";

export default function BuySell() {
  const items = getItems();
  const params = useParams();

  if (getItem(params.id) !== undefined) {
    return (
      <div>
        <ItemDetail key={items._id} {...getItem(params.id)} />
        <SellBuyItem key={items._id} {...getItem(params.id)} />
      </div>
    );
  } else {
    return (
      <div>
        <NotFound />
      </div>
    );
  }
}
