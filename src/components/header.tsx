import { ModeToggle } from "@/constants/mode-toggle";

export default function Header() {
	return (
		<>
			<header className="flex flex-col justify-center items-center gap-32 pt-[200px] text-xl">
				<h1 className="text-7xl drop-shadow-lg dark:text-white font-bold">Portifolio em desenvolvimento...</h1>
				<svg className="fill-black dark:fill-white text-6xl motion-safe:animate-spin drop-shadow-lg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"/></svg>
				<p className="dark:text-white">MUDAR TEMA : &nbsp;<ModeToggle /></p>
			</header>
		</>
	);
}
