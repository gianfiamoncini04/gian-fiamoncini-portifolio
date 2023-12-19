import Typed from "react-typed";
import { useTranslation } from "react-i18next";

export default function Body() {
	const { t } = useTranslation("common");

	return (
		<>
			<span className="text-4xl drop-shadow-[0_0_10px_#00000070] dark:drop-shadow-[0_0_10px_#FFFFFF60] dark:text-white font-bold">
				Portifolio
				<Typed
					strings={[`\n${t("title")}`]}
					typeSpeed={100}
					backSpeed={100}
					loop
				/>
			</span>
            <a href="/form">Form</a>
		</>
	);
}
