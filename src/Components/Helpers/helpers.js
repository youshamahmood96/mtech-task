import { useEffect, useState } from "react"

export const truncate = (str) =>{
    if(str.length>50){
        let strArray = str.substr(0, 50).split(' ')
        strArray.pop()
        return strArray.join(' ')  + ' . . .'
    }
    else{
        return str
    }
}
export function useDelayUnmount(isMounted, delayTime) {
    const [showDiv, setShowDiv] = useState(false);
    useEffect(() => {
      let timeoutId;
      if (isMounted) {
        setShowDiv(true);
      } else if (!isMounted) {
        timeoutId = setTimeout(() => setShowDiv(false), delayTime); 
      }
      return () => clearTimeout(timeoutId); 
    }, [isMounted, delayTime, showDiv]);
    return showDiv;
}