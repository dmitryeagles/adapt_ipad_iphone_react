import React, { useEffect, useState, useRef } from "react"
import { fetchIcons } from "../../api/client.api";
import Pagination from "../../components/pagination";
import { Icon } from "../../types/common.types";
import { IconItem } from "../../components/icon-item/icon-item";
import "./icons-wrapper.scss";



export const IconsWrapper = () => {
  const [items, setItems] = useState<Icon[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage] = useState<number>(20);

  //save reference for dragItem and dragOverItem
  const dragItem = useRef<any>(null)
  const dragOverItem = useRef<any>(null)

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  //const handle drag sorting
  const handleSort = () => {
    //duplicate items
    let _iconItems = [...items]

    //remove and save the dragged item content
    const [draggedItemContent,] = _iconItems.splice(dragItem.current, 1)

    //switch the position 
    _iconItems.splice(dragOverItem.current, 0, draggedItemContent)

    //reset the position ref
    dragItem.current = null
    dragOverItem.current = null

    //update the actual array
    setItems(_iconItems)

    //write the current position to local storage
    const localIcon = JSON.stringify(_iconItems)
    localStorage.setItem('localIcon', localIcon)
    
  }



  useEffect(() => {
    const fetchData = async () => {
      setItems(await fetchIcons());
    };
    fetchData().catch((e) => console.error(e));
  }, []);

  // Get current icon
  const indexOfFirstPost = currentPage * itemsPerPage;
  const indexOfLastPost = indexOfFirstPost + itemsPerPage;
  let currentItems = []
  //@ts-ignore
  let b = JSON.parse(localStorage.getItem('localIcon'))
  //@ts-ignore
  if (JSON.parse(localStorage.getItem('localIcon'))){
    currentItems = b.slice(indexOfFirstPost, indexOfLastPost)
  } else (currentItems = items.slice(indexOfFirstPost, indexOfLastPost))
   

  return (
    <div>
      <div className="IconItems" >
        {currentItems.map((icon: Icon, index: number) => (
          <div
            key={icon.id}
            draggable
            onDragStart={(e) => dragItem.current = index + currentPage * itemsPerPage}
            onDragEnter={(e) => dragOverItem.current = index + currentPage * itemsPerPage}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}>
            <IconItem icon={icon} index={index} />
          </div>
        ))}

      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
      />
    </div>
  );
};
