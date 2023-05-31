import { useParams } from "react-router-dom";
import ItemDetail from "../components/itemDetail";
import SellBuyItem from "../components/sellBuyItem";
import EditItem from "../components/editItem";
import { getItems, getItem } from "../data/items.js";
import NotFound from "./notFound";

export default function Edit() {
  const items = getItems();
  const params = useParams();
  if (getItem(params.id) !== undefined) {
    return (
      <div>
        <ItemDetail key={items._id} {...getItem(params.id)} />
        <EditItem key={items._id} {...getItem(params.id)} />
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
