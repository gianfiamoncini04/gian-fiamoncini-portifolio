import { Routes, Route } from "react-router-dom";
import Header from "@/components/header";
import Form from "@/components/form";
import Body from "@/components/body";

export default function App() {
	return (
		<>
			<main className="bg-gray-100 dark:bg-[#0d0d0d] min-h-screen">
				<Header />
				<Routes>
					<Route exact path="/" element={<Body />} />
					<Route exact path="/form" element={<Form />} />
				</Routes>
			</main>
		</>
	);
}
