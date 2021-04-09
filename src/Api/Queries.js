import { useQuery } from "react-query"
import { getItems } from "./ApiCalls"

export const LoadItems = () =>{
    const query = useQuery('items', getItems)
    return query
}