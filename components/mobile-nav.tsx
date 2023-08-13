"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Button from "@/components/button";
import IconButtonCart from "@/components/ui/icon-button-cart";
import { Category } from "@/types";
import { cn } from "@/lib/utils";

interface MobileNavProps {
   data: Category[]
}

const MobileNav: React.FC<MobileNavProps> = ({
    data
}) => {

  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`
  }));

  return (
    <>
        <Button onClick={onOpen} className="flex items-center gap-x-1 lg:hidden">
            <Plus size={20} />
            MENU
        </Button>

        <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
            {/*BACKGROUND*/}
            <div className="fixed inset-0 bg-black bg-opacity-25" />
            
            {/*DIALOG POSITION*/}
            <div className="fixed inset-0 z-40 flex">
                <Dialog.Panel className="relative ml-auto flex h-full w-[50%]
                max-w-xs flex-col overflow-y-auto bg-white text-black py-4 pb-6 shadow-xl">
                    {/*CLOSE BUTTON*/}
                    <div className="flex items-center justify-end px-4">
                        <IconButtonCart icon={<X size={15} onClick={onClose} />} />
                    </div>
                    {/*RENDER THE FILTERS*/}
                    <div className="p-4">
                        <nav className="flex flex-col items-left gap-4">
                            {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className={cn(
                                    "text-md font-medium transition-colors hover:text-gray-400",
                                    route.active ? "text-black" : "text-gray-500"
                                )}
                            >
                                {route.label}
                            </Link>
                         ))}
                        </nav>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    </>
  )
}

export default MobileNav;