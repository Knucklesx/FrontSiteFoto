"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<div className="relative">
			<div className="fixed top-0 right-10 z-10">
				<button onClick={toggleMenu}>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d={
								isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
							}
						></path>
					</svg>
				</button>
				{isMenuOpen && (
					<div className="relative">
						<div className="fixed w-1/2 h-full bg- top-0 right-0 z-10 bg-slate-300 bg-opacity-50">
							<button
								onClick={toggleMenu}
								className="fixed right-10 text-white"
							>
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d={"M6 18L18 6M6 6l12 12"}
									></path>
								</svg>
							</button>
							<div className="text-center flex flex-col opacity-100 text-black">
								<div className="m-auto w-fit">
									<Link href="/">
										<button className="mb-2 mt-20 text-2xl">Home</button>
									</Link>
								</div>
								<div className="m-auto w-fit ">
									<Link href="/casa">
										<button className="mb-2 mt-10 text-2xl">Home</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
