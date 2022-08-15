import Link from "../../node_modules/next/link"
import styles from "../../styles/Home.module.css"



export default function Navbar() {
	return (
		<div className={styles.container}>
			<ul>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
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
		</div>
	)
}
