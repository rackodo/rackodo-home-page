import Link from 'next/link'

export default function InlineLink({href, target, children}) {
	return(
		<Link href={href}>
			<a target={target}>{children}</a>
		</Link>
	)
}