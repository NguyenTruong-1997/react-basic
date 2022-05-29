
export interface  PaginationProps {
  pagination: any;
  onPageChange: (value: number) => void;
}

export default function Pagination ({ pagination, onPageChange }:  PaginationProps) {
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows/_limit);

  const handlePageChange = (newPage: number) => {
    onPageChange(newPage);
  }

  return (
    <div>
      <button disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>Prev</button>

      <button disabled={_page >= totalPages} onClick={() => handlePageChange(_page + 1)}>Next</button>
    </div>
  );
}
