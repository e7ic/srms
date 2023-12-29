"use client"

import {Input} from "@/registry/ui/input";
import { Popover, PopoverTrigger, PopoverContent } from "@/registry/ui/popover";
import {Label} from "@/registry/ui/label";

export const Search = () => {
	return (
		<div className="flex items-center space-x-2 px-4 py-2 border-2 border-border/75 rounded-xl">
			<svg viewBox="0 0 24 24" className="w-6 h-6 fill-border">
				<path
					d="M21.7555 20.6065L18.3182 17.2458L18.2376 17.1233C18.0878 16.9742 17.883 16.8902 17.6692 16.8902C17.4554 16.8902 17.2505 16.9742 17.1007 17.1233C14.1795 19.8033 9.67815 19.949 6.58201 17.4637C3.48586 14.9784 2.75567 10.6334 4.87568 7.31017C6.9957 3.98697 11.3081 2.71685 14.9528 4.34214C18.5976 5.96743 20.4438 9.98379 19.267 13.7276C19.1823 13.9981 19.2515 14.2922 19.4487 14.4992C19.6459 14.7062 19.9411 14.7946 20.223 14.7311C20.505 14.6676 20.7309 14.4619 20.8156 14.1914C22.2224 9.74864 20.0977 4.96755 15.8161 2.94106C11.5345 0.914562 6.38084 2.25082 3.68905 6.08542C0.99727 9.92001 1.57518 15.1021 5.04893 18.2795C8.52268 21.4569 13.8498 21.6759 17.5841 18.7949L20.6277 21.7705C20.942 22.0765 21.4502 22.0765 21.7645 21.7705C22.0785 21.4602 22.0785 20.9606 21.7645 20.6503L21.7555 20.6065Z"/>
			</svg>
			<Input className="w-80 border-none text-lg focus:outline-none"/>
			<Popover>
				<PopoverTrigger>
					<svg viewBox="0 0 24 24" className="w-6 h-6 fill-border hover:fill-foreground">
						<path fillRule="evenodd" clipRule="evenodd"
						      d="M3.00034 6.52797C3.00034 8.47287 4.60301 10.0559 6.57451 10.0559C8.546 10.0559 10.1487 8.47287 10.1487 6.52797C10.1487 4.58196 8.546 3 6.57451 3C6.30292 3 6.03358 3.02979 5.77205 3.09046C5.32053 3.19306 5.04 3.63874 5.14506 4.08332C5.25012 4.5279 5.69941 4.80811 6.15204 4.7011C6.28839 4.67021 6.43145 4.65477 6.57451 4.65477C7.62172 4.65477 8.47224 5.49429 8.47224 6.52797C8.47224 7.56054 7.62172 8.40117 6.57451 8.40117C5.52729 8.40117 4.67678 7.56054 4.67678 6.52797C4.67678 6.42206 4.68572 6.31726 4.70248 6.21687C4.7796 5.76567 4.47002 5.33984 4.01402 5.26372C3.55244 5.19202 3.12551 5.49319 3.04951 5.94439C3.0171 6.13413 3.00034 6.3294 3.00034 6.52797ZM14.2893 7.35502H21.1616C21.6243 7.35502 21.9998 6.98435 21.9998 6.52764C21.9998 6.07092 21.6243 5.70025 21.1616 5.70025H14.2893C13.8266 5.70025 13.451 6.07092 13.451 6.52764C13.451 6.98435 13.8266 7.35502 14.2893 7.35502ZM10.7116 18.3492H3.83822C3.37552 18.3492 3 17.9785 3 17.5218C3 17.0651 3.37552 16.6944 3.83822 16.6944H10.7116C11.1743 16.6944 11.5498 17.0651 11.5498 17.5218C11.5498 17.9785 11.1743 18.3492 10.7116 18.3492ZM14.8517 17.522C14.8517 19.4669 16.4543 21.05 18.4258 21.05C20.3962 21.05 22 19.4669 22 17.522C22 17.3235 21.9832 17.1282 21.9508 16.9385C21.8748 16.4873 21.4412 16.1828 20.9863 16.2578C20.5303 16.3339 20.2207 16.7597 20.2979 17.2109C20.3146 17.3113 20.3236 17.4161 20.3236 17.522C20.3236 18.5546 19.4719 19.3952 18.4258 19.3952C17.3786 19.3952 16.5281 18.5546 16.5281 17.522C16.5281 16.3471 17.6904 15.4326 18.8528 15.6952C19.3032 15.7978 19.7525 15.5165 19.8564 15.0719C19.9592 14.6273 19.6753 14.1827 19.2238 14.0823C18.9623 14.0239 18.6941 13.9941 18.4258 13.9941C16.4543 13.9941 14.8517 15.576 14.8517 17.522Z"/>
					</svg>
				</PopoverTrigger>
				<PopoverContent className="p-6 w-80 bg-background shadow-xl rounded-xl">
					<div className="grid gap-4">
						<div className="space-y-2">
							<h4 className="font-medium leading-none">Filter</h4>
							<p className="text-sm text-muted-foreground">
								Set the dimensions for the layer.
							</p>
						</div>
						<div className="grid gap-2">
							<div className="grid grid-cols-3 items-center gap-4">
								<Label htmlFor="width">Width</Label>
								<Input
									id="width"
									defaultValue="100%"
									className="col-span-2 h-8"
								/>
							</div>
							<div className="grid grid-cols-3 items-center gap-4">
								<Label htmlFor="maxWidth">Max. width</Label>
								<Input
									id="maxWidth"
									defaultValue="300px"
									className="col-span-2 h-8"
								/>
							</div>
							<div className="grid grid-cols-3 items-center gap-4">
								<Label htmlFor="height">Height</Label>
								<Input
									id="height"
									defaultValue="25px"
									className="col-span-2 h-8"
								/>
							</div>
							<div className="grid grid-cols-3 items-center gap-4">
								<Label htmlFor="maxHeight">Max. height</Label>
								<Input
									id="maxHeight"
									defaultValue="none"
									className="col-span-2 h-8"
								/>
							</div>
						</div>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	)
}