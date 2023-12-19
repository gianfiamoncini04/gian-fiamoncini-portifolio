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
					<Route path="/" element={<Body />}></Route>
					<Route path="/form" element={<Form />}></Route>
				</Routes>
			</main>
		</>
	);
}
