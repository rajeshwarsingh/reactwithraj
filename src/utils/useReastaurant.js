import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";

export default (restId)=>{
  const [restInfo, setRestInfo] = useState(null);
  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async()=>{
    const data = await fetch(`${MENU_URL}${restId}`);
    const json = await data.json();
    setRestInfo(json.data.cards);
  }
  
  
  return restInfo
}