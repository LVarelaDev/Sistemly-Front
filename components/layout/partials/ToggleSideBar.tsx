
import { useSidebar } from '@/stores/sideBarStore'
import { Button } from '@nextui-org/button'
import { ArrowLeft03Icon, ArrowRight03Icon } from 'hugeicons-react'

const ToogleSidebar = () => {
	const { isExpanded, setIsExpanded } = useSidebar()
	return (
		<Button isIconOnly variant="light" radius="full" onClick={setIsExpanded}>
			{isExpanded ? <ArrowLeft03Icon /> : <ArrowRight03Icon />}
		</Button>
	)
}

export default ToogleSidebar
