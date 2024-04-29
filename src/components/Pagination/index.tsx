import '../Styles/Pagination.scss'

import { Icon } from "@fluentui/react";

type PaginationProps = {
    handlePageChange: (page: boolean) => void;
    page: number;
};

const Pagination = ({handlePageChange, page}: PaginationProps) => {
  return (
    <div className="pagination">
        <Icon iconName='ChevronLeft' onClick={() => handlePageChange(false)} className="pagination-icon" />
        <span>{page}</span>
        <Icon iconName='ChevronRight' onClick={() => handlePageChange(true)} className="pagination-icon" />
      </div>
  )
}

export default Pagination;