import Link from "next/link";
import {Brand, Trash} from "@/components/icons";

export default function Sidebar() {
	return (
		<aside className="sr-w-64 sr-py-9">
			<div className="sr-flex sr-items-center sr-justify-center sr-w-full sr-space-x-4">
				<Brand className="sr-w-10"/>
				<span className="sr-text-3xl sr-font-semibold">SR-MS</span>
			</div>
			<ul className="sr-flex sr-flex-col sr-items-center sr-mt-20 sr-w-full">
				<li className="sr-flex">
					<Link href="" className="sr-flex sr-space-x-2 sr-py-4">
						首页
					</Link>
				</li>
				<li className="sr-flex">
					<Link href="" className="sr-flex sr-space-x-2 sr-py-4">
						资源
					</Link>
				</li>
				<li className="">
					<Link href="" className="sr-flex sr-space-x-2 sr-py-4">
						<Trash className="sr-w-6"/>
						<span className="sr-text-xl">回收站</span>
					</Link>
				</li>
			</ul>
		</aside>
	)
}