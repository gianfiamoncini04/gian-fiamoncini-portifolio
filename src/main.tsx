import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@/constants/theme-provider";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import pt from "@/lib/languages/pt.json";
import en from "@/lib/languages/en.json";

i18next.init({
	interpolation: { escapeValue: false },
	lng: "pt",
	resources: {
		pt: {
			common: pt,
		},
		en: {
			common: en,
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ThemeProvider storageKey="vite-ui-theme" defaultTheme="system">
		<I18nextProvider i18n={i18next}>
			<BrowserRouter basename="/">
				<App />
			</BrowserRouter>
		</I18nextProvider>
	</ThemeProvider>
);
