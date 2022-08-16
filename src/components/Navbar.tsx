import Link from "../../node_modules/next/link"
import styles from "../../styles/Navbar.module.css"

export default function Navbar() {
	return (
		<div>
			<ul className={styles.navbar}>
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
				<li>
					<Link href="/Contact">
						<a>Contact</a>
					</Link>
				</li>
				<li>
					<Link href="/todos">
						<a>Todo</a>
					</Link>
				</li>
			</ul>
		</div>
	)
}
