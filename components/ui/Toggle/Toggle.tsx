import React from 'react'
import { Switch } from '@nextui-org/react'
import { RegisterOptions, UseFormReturn } from 'react-hook-form'

type props = {
	form: UseFormReturn<any, any>
	name: string
	label: string
	rules?: RegisterOptions<any, string>
	color?: "success" | "default" | "primary" | "secondary" | "warning" | "danger"
}

const Toggle = ({ form, name, label, rules, color="primary" }: props) => {
	const { register } = form

	return (
		<div className="flex gap-2">
			<Switch color={color} aria-label="Active" {...register(name, rules)} />
			<p>{label}</p>
		</div>
	)
}

export default Toggle
