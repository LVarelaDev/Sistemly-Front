import React from 'react'
import { Switch } from '@nextui-org/react'
import { RegisterOptions, UseFormReturn } from 'react-hook-form'

type props = {
	form: UseFormReturn<any, any>
	name: string
	label: string
	rules?: RegisterOptions<any, string>
}

const Toggle = ({ form, name, label, rules }: props) => {
	const { register } = form

	return (
		<div className="flex gap-2">
			<Switch aria-label="Active" {...register(name, rules)} />
			<p>{label}</p>
		</div>
	)
}

export default Toggle
