import { Download } from "lucide-react";
import { ModeToggle } from "@/constants/mode-toggle";
import { LangToggle } from "@/constants/lang-toggle";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function Header() {
	const { t } = useTranslation("common");

	return (
		<>
			<header className="flex flex-col justify-center items-center gap-32 pt-[50px] text-xl">
				<p className="dark:text-white text-sm font-bold flex flex-row gap-8">
					<ModeToggle />
					<LangToggle />
					<a href={`/${t("cvfile")}.pdf`} target="_blank">
						<Button variant="outline">
							<Download className="h-[1.2rem] w-[1.2rem] mr-2" />
							{t("cv")}
						</Button>
					</a>
				</p>
			</header>
		</>
	);
}
