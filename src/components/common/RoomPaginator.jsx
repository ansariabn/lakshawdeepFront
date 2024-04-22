import React from "react"

const RoomPaginator = ({ currentPage, totalPages, onPageChange }) => {
	const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)
	return (
		<nav aria-label="Page navigation">
			<ul className="pagination justify-content-center">
				{pageNumbers.map((pageNumber) => (
					<li
						key={pageNumber}
						className={`page-item ${currentPage === pageNumber ? "active" : ""}`}>
						<button onClick={() => onPageChange(pageNumber)} className="page-link" style={{backgroundColor:" rgb(85, 25, 25)", color:"white", borderColor:"unset"}}>
							{pageNumber}
						</button>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default RoomPaginator
