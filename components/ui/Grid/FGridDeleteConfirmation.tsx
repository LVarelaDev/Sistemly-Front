import { Button } from '@nextui-org/button'
import React, { ReactNode } from 'react'

type TFGridDeleteConfirmation<T> = {
	element: T
	templateConfirmText?: string
	buttonDeleteText?: string | ReactNode
	setConfirmDeleteKey: React.Dispatch<React.SetStateAction<T[keyof T] | null>>
	handleDeleteRow: (row: T) => void
}

const FGridDeleteConfirmation = <T,>({
	element,
	templateConfirmText,
	buttonDeleteText,
	setConfirmDeleteKey,
	handleDeleteRow,
}: TFGridDeleteConfirmation<T>) => {
	const replaceTemplate = <T,>(template: string, element: T) => {
		let templateText = template.replaceAll(
			/\{\{(.*?)\}\}/g,
			function (_, p1: keyof T) {
				return element[p1] as string
			},
		)

		return templateText
	}

	return (
		<tr className="bg-gray-100 transition-all duration-1000 ease-linear">
			<td className="border" colSpan={100}>
				<div className="mx-3 flex justify-between">
					<div className="flex items-center">
						<div className="text-base text-red-500 font-bold">
							{templateConfirmText
								? replaceTemplate(templateConfirmText, element)
								: '¿Estás seguro que deseas eliminar este elemento?'}
						</div>
					</div>
					<div className="flex gap-5">
						<Button
							className="bg-white border border-purplePrimary px-4 py-2"
							onClick={() => setConfirmDeleteKey(null)}
						>
							Cancelar
						</Button>
						<Button
							className="bg-red-500 text-white"
							onClick={() => handleDeleteRow(element)}
						>
							{buttonDeleteText ?? 'Confirmar'}
						</Button>
					</div>
				</div>
			</td>
		</tr>
	)
}

export default FGridDeleteConfirmation
