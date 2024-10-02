import {
	faAnglesLeft,
	faAnglesRight,
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

type TGridPaginationSectionProps = {
	totalRecords: number
	currentPage: number
	pageSize: number
	setPage: React.Dispatch<React.SetStateAction<number>>
	setPageSize?: React.Dispatch<React.SetStateAction<number>>
	currentListLength: number
}

export const GridPaginationSection = ({
	currentPage,
	pageSize,
	setPage,
	totalRecords,
	setPageSize,
	currentListLength,
}: TGridPaginationSectionProps) => {
	const maxPagesToShow = 3
	const currentBlockStartPage =
		Math.floor((currentPage - 1) / maxPagesToShow) * maxPagesToShow + 1
	const [startPage, setStartPage] = useState(currentBlockStartPage)
	const totalPages = Math.ceil(totalRecords / pageSize)

	const arrayOfPages = Array.from(
		{ length: maxPagesToShow },
		(_, i) => startPage + i,
	)

	const handleFirstPage = () => {
		setPage(1)
		setStartPage(1)
	}

	const handleLastPage = () => {
		setPage(totalPages)
		const lastBlockInitialPage =
			Math.floor((totalPages - 1) / maxPagesToShow) * maxPagesToShow + 1

		setStartPage(lastBlockInitialPage)
	}

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setPage((prevPage) => prevPage + 1)
			if (currentPage % maxPagesToShow === 0) {
				setStartPage((prevStartPage) => prevStartPage + maxPagesToShow)
			}
		}
	}

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setPage((prevPage) => prevPage - 1)
			if ((currentPage - 1) % maxPagesToShow === 0) {
				setStartPage((prevStartPage) => prevStartPage - maxPagesToShow)
			}
		}
	}

	return (
		<section className="mb-4 mt-3 flex flex-col items-center justify-center gap-3">
			<div>
				Mostrando {currentListLength < pageSize ? currentListLength : pageSize}{' '}
				de un total de <b>{totalRecords} resultados</b>
			</div>
			<div className="flex gap-3">
				<button disabled={currentPage === 1} onClick={() => handleFirstPage()}>
					<FontAwesomeIcon icon={faAnglesLeft} />
				</button>
				<button
					disabled={currentPage === 1}
					onClick={() => handlePreviousPage()}
				>
					<FontAwesomeIcon icon={faChevronLeft} />
				</button>
				{arrayOfPages.map((page) => {
					if (page <= totalPages)
						return (
							<button
								key={page.toString()}
								className={`flex h-6 w-6 items-center justify-center rounded-full ${
									page === currentPage ? 'bg-green-700' : 'bg-greenSmooth'
								} p-4 text-white`}
								onClick={() => {
									console.log(page)
									setPage(page)
								}}
							>
								{page}
							</button>
						)
				})}
				<button
					disabled={currentPage === totalPages}
					onClick={() => handleNextPage()}
				>
					<FontAwesomeIcon icon={faChevronRight} />
				</button>
				<button
					disabled={currentPage === totalPages}
					onClick={() => handleLastPage()}
				>
					<FontAwesomeIcon icon={faAnglesRight} />
				</button>
			</div>
		</section>
	)
}
