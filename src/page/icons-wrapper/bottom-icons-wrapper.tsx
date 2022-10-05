import React, { useEffect, useState } from "react"
import { fetchIcons } from "../../api/client.api";
import { Icon } from "../../types/common.types";
import "./bottom-icons-wrapper.scss";


export const BottomIcons = () => {
  const [items, setItems] = useState<Icon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setItems(await fetchIcons());
    };
    fetchData().catch((e) => console.error(e));
  }, []);

  const bottomItems = items.slice(20, 24);

  return (
    <div className="IconBottomItem">
      {bottomItems.map((items) => (
        <div className="iconBottomBox" key={items.id} draggable= "true">
          <img src={items.path} alt=''/>
          <p>{items.name}</p>
        </div>
      ))}
    </div>
  );
};
