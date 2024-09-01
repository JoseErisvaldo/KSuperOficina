import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PaginationControls({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex items-center mt-4">
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        <ChevronLeft />
      </button>
      <span>Page {currentPage} de {totalPages}</span>
      <button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        <ChevronRight />
      </button>
    </div>
  );
}
