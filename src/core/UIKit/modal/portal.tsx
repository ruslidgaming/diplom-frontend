import { useState, useLayoutEffect } from "react"
import { createPortal } from "react-dom"

interface Props {
	children: JSX.Element
	wrapperId: string;
	onExit?: () => void;
}

const PortalModal = ({ children, wrapperId }: Props) => {
	const [portalElement, setPortalElement] = useState<HTMLElement | null>(null)

	useLayoutEffect(() => {
		let element = document.getElementById(wrapperId) as HTMLElement
		let portalCreated = false
		if (!element) {
			element = createWrapperAndAppendToBody(wrapperId)
			portalCreated = true
		}

		setPortalElement(element)

		return () => {
			if (portalCreated && element.parentNode) {
				element.parentNode.removeChild(element)
			}
		}
	}, [wrapperId])

	const createWrapperAndAppendToBody = (elementId: string) => {
		const element = document.createElement("div")
		element.setAttribute("id", elementId)
		document.body.appendChild(element)
		return element
	}

	if (!portalElement) return null

	return createPortal(children, portalElement)
}

export default PortalModal