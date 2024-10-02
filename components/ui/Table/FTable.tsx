import React, { ReactNode } from 'react'

type CustomGridColumnProps<T> = {
	labelHeader: string
	keyColumnIdentifier?: keyof T
	colRender?: (value: any, row: T) => ReactNode
}

type CustomGridProps<T> = {
	dataList: T[]
	keyIdentifier: keyof T
	children: ReactNode
}

const CustomGrid = <T,>({
	dataList,
	keyIdentifier,
	children,
}: CustomGridProps<T>) => {
	const columns = React.Children.toArray(children)

	return (
		<div className="flex flex-col">
			<div className="flex p-4 gap-5">
				{columns.map((column) => {
					const col = column as React.ReactElement<CustomGridColumnProps<T>>

					return (
						<div key={col.props.labelHeader} className="flex-1 font-bold">
							{col.props.labelHeader}
						</div>
					)
				})}
			</div>
			<div className="flex flex-col gap-2 rounded-lg">
				{dataList.map((item) => (
					<div key={item[keyIdentifier] as React.Key} className="flex">
						{columns.map((column, colIndex) => {
							const col = column as React.ReactElement<CustomGridColumnProps<T>>

							const isFirstColumn = colIndex === 0
							const isLastColumn = colIndex === columns.length - 1

							const roundedClasses = `${isFirstColumn ? 'rounded-l-xl' : ''} ${isLastColumn ? 'rounded-r-xl' : ''}`
							const borderClasses = `${isFirstColumn ? 'border-l' : ''} ${isLastColumn ? 'border-r' : ''}`

							return (
								<div
									key={col.props.labelHeader + colIndex} // Puedes usar combinación de labelHeader y colIndex si labelHeader no es único
									className={`flex items-center flex-1 py-4 bg-white px-3 border-y-1 ${borderClasses} ${roundedClasses}`}
								>
									{col.props.colRender
										? col.props.colRender(
												item[col.props.keyColumnIdentifier as keyof T],
												item,
											)
										: typeof item[col.props.keyColumnIdentifier as keyof T] ===
													'string' ||
												typeof item[
													col.props.keyColumnIdentifier as keyof T
												] === 'number' ||
												typeof item[
													col.props.keyColumnIdentifier as keyof T
												] === 'boolean'
											? String(item[col.props.keyColumnIdentifier as keyof T])
											: null}
								</div>
							)
						})}
					</div>
				))}
			</div>
		</div>
	)
}

const CustomGridColumn = <T,>({
	labelHeader,
	keyColumnIdentifier,
	colRender,
}: CustomGridColumnProps<T>) => null

export { CustomGrid, CustomGridColumn }
