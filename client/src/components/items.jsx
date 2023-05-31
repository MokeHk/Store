import { getItems, saveItem } from "../data/items";
import "bootstrap/css/bootstrap.css";

import { Link } from "react-router-dom";

export default function Items() {
  const initialState = { items: getItems() };
  let x = 1;

  return (
    <div className="contain">
      <table className="table contain">
        <thead>
          <tr>
            <th></th>
            <th className="h5">No</th>
            <th className="h5">Product</th>
            <th className="h5">Unit</th>
            <th className="h5">Quantity</th>
            <th className="h5">Price</th>
            <th className="h5">Action</th>
          </tr>
        </thead>
        <tbody>
          {initialState.items.map((item) => (
            <tr key={item._id} className="table-row">
              <td></td>
              <td>{x++}</td>
              <td>{item.product}</td>
              <td>{item.unit}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>
                <Link to={`/${item._id}`}>
                  <button className="btn btn-secondary m-2">Buy/Sell</button>
                </Link>
                <Link to={`/${item._id}/edit`}>
                  <button className="btn btn-danger m-2">Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
