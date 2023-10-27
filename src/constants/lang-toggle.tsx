import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from 'react-i18next'


export function LangToggle() {
	const {t, i18n} = useTranslation('common')

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<Languages className="h-[1.2rem] w-[1.2rem]" />
					<span className="sr-only">Toggle Lang</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem
					onClick={() => i18n.changeLanguage('pt')}
					className={`cursor-pointer ${i18n.language=='pt' ? 'bg-gray-200 dark:bg-[#1e293b]' : ""}`}> PT &nbsp;<span className="opacity-80">{t('constants.lang-toogle-label-pt')}</span>
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => i18n.changeLanguage('en')}
					className={`cursor-pointer ${i18n.language=='en' ? 'bg-gray-200 dark:bg-[#1e293b]' : ""}`}> EN &nbsp;<span className="opacity-80">{t('constants.lang-toogle-label-en')}</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
