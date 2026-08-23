"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function NotFound() {
	// Mark the page as an error page so the Navbar shows readable dark text.
	useEffect(() => {
		document.body.dataset.errorPage = "true";
		return () => {
			delete document.body.dataset.errorPage;
		};
	}, []);

	return (
		<main
			style={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				padding: "2rem",
				textAlign: "center",
			}}
		>
         <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--brand)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--foreground)]/5 blur-3xl" />
			<h1 style={{ fontSize: "4rem", margin: 0 }}>404</h1>
			<p style={{ fontSize: "1.25rem", margin: "1rem 0 2rem" }}>
				Sorry — the page you were looking for doesn’t exist.
			</p>
			<Link
				href="/"
				style={{
					display: "inline-block",
					padding: "0.6rem 1rem",
					background: "#29566A",
					color: "white",
					borderRadius: "6px",
					textDecoration: "none",
				}}
			>
				Go back home
			</Link>
		</main>
	);
}
