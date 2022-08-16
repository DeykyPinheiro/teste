import Head from "next/head"
import Image from "next/image"
import styles from "../../styles/Home.module.css"

export default function Home() {
	return (
		<>
			<Head>
				<title>Pagina Principal</title>
				<meta name="keywords" content="Roupas, Calcados, Bones"></meta>
				<meta name="description" content="Encontre a melhor roupa pra voce"></meta>
			</Head>
			<div className={styles.title}>
				<h1> Hello World Next.JS </h1>
			</div>
			<Image src="/images/city.jpg" width="300px"
				height="300px" />
		</>
	)
}
