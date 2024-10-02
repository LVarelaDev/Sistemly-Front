import { ReactNode } from 'react'

const FGridColumnHeader = ({
	classNameHeader,
	labelHeader,
}: {
	classNameHeader?: string
	labelHeader: string | ReactNode
}) => {
	return (
		<th
			className={`px-4 py-5 text-left text-sm font-bold ${
				classNameHeader ?? ''
			}`}
		>
			{labelHeader}
		</th>
	)
}

export default FGridColumnHeader
