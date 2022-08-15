import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
	return (
		<div className={styles.container}>
			<ul>
				<li>
					<Link href="/products">
						<a>Produto</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a>About</a>
					</Link>
				</li>
			</ul>
			<h1>Hello World Next.js</h1>
		</div>
	)
}
