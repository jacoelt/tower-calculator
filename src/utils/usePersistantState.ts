import { debounce } from "@mui/material";
import { useEffect, useState } from "react";

export default function usePersistantState<T>(
   key: string,
   initialValue: T
): [T, (value: T) => void] {
   const [state, setInternalState] = useState<T>(initialValue);

   useEffect(() => {
       const value = localStorage.getItem(key);

       if (!value) return;

       console.log('parse')
       setInternalState(JSON.parse(value));
       console.log('parsed')
   }, [key]);

   const setState = debounce((value: T) => {
       localStorage.setItem(key, JSON.stringify(value));
       setInternalState(value);
   }, 300);

   return [state, setState];
}