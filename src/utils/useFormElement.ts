// import { ElementType, useState } from "react"
import {useDraggable} from '@dnd-kit/core';
// import {CSS} from '@dnd-kit/utilities';


export const useFormElement = (uniqueId: string) => {
 // const [element, setElement] = useState<ElementType[]>([])
 
 const {attributes, listeners, setNodeRef, transform} = useDraggable({
  id: uniqueId
  ,
 });

 return { attributes, listeners, setNodeRef, transform}

}