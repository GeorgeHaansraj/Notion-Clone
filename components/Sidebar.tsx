import { MenuIcon } from "lucide-react";
import NewDocumentButton from "./NewDocumentButton"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

function Sidebar () {
    const menuOption = (
        <>
            <NewDocumentButton />

        </>
    );

    return (
        <div className="p-2 md:p-5 bg-gray-200 relative">
            <div className="md:hidden">
                <Sheet>
                <SheetTrigger>
                    <MenuIcon className="p-2 hover:opacity-30 rounded-lg" size={40}/>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <div>{menuOption}</div>
                    </SheetHeader>
                </SheetContent>
                </Sheet>
            </div>

            <div className="hidden md:inline">{menuOption}</div>
        </div>
    )
}
export default Sidebar