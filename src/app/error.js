"use client";

import { useEffect } from "react";

export default function Error({ reset }) {
	// Mark the page as an error page so the Navbar can show readable text
	// (error pages have a light background; no dark-hero white text).
	useEffect(() => {
		document.body.dataset.errorPage = "true";
		return () => {
			delete document.body.dataset.errorPage;
		};
	}, []);

	return (
		<main
			style={{
				position: "relative",
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				overflow: "hidden",
				padding: "2rem",
				textAlign: "center",
			}}
		>
			<div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--brand)]/15 blur-3xl" />
			<div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[var(--foreground)]/5 blur-3xl" />
			<h1 style={{ fontSize: "4rem", margin: 0 }}>500</h1>
			<p style={{ fontSize: "1.25rem", margin: "1rem 0 2rem" }}>
				Something went wrong.
			</p>
			<button
				type="button"
				onClick={() => reset()}
				style={{
					display: "inline-block",
					padding: "0.6rem 1rem",
					background: "#29566A",
					color: "white",
					border: 0,
					borderRadius: "6px",
					textDecoration: "none",
					cursor: "pointer",
				}}
			>
				Retry
			</button>
		</main>
	);
}
