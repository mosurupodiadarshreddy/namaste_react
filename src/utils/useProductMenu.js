//Custom HOOK

import { useEffect } from "react";
import { useState } from "react";

const useProductMenu = (id) => {

const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://dummyjson.com/products/" + id
    );
    const json = await data.json();
    console.log(json);
    setMenuData(json);
  };

    return menuData;
}

export default useProductMenu;