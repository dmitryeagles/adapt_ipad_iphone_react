import { ButtonGroup, IconButton } from '@mui/material';
import React from 'react'
import { TPagination } from "../../src/types/common.types";
import "../../src/page/icons-wrapper/icons-wrapper.scss";

const Pagination: React.FC<TPagination>  = ({ itemsPerPage, totalItems , paginate}) => {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='paginationPosition'>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <ButtonGroup variant="text" key={number}>
            <IconButton onClick={() => paginate(number)}size="small">•</IconButton>
          </ButtonGroup>
        ))}
      </ul>
    </div>
  )
}

export default Pagination