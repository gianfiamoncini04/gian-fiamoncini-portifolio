import { MoonStar, Sun, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/constants/theme-provider";
import { useTranslation } from 'react-i18next'

export function ModeToggle() {
	const { setTheme } = useTheme();
	const { theme } = useTheme();
	const {t} = useTranslation('common')

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<MoonStar className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-white dark:hover:text-white" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem
					onClick={() => setTheme("light")}
					className={`cursor-pointer
					${theme === "light" ? "bg-gray-200" : ""}`}>
					<Sun className="h-[1rem] w-[1rem]"/>&nbsp;&nbsp;{t('constants.mode-toogle-label-light')}
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setTheme("dark")}
					className={`cursor-pointer
					${theme === "dark" ? "bg-[#1e293b]" : " "}`}>
					<MoonStar className="h-[1rem] w-[1rem]" />&nbsp;&nbsp;{t('constants.mode-toogle-label-dark')}
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setTheme("system")}
					className={`cursor-pointer`}>
					<Settings className="h-[1rem] w-[1rem]" />&nbsp;&nbsp;{t('constants.mode-toogle-label-system')}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
