import { useState } from "react";
import { NotificationIcon, SearchIcon } from "../../components/icon/icon";
import { PrimaryButton } from "../../components/button";
import SearchBoards from "./SearchBoards";


function NavbarHeaderDesktop() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleCreate = () : void => {
        console.log("Create is Clicked!!!")
    }

    return (
        <div className="hidden md:flex justify-between p-3 w-screen h-12 border-b border-b-gray-300 shadow-xs">
            {/* icon application */}
            <div className="flex gap-0.5 items-center w-1/6">
                <img src="icon.png" alt="app-icon" className="w-9 h-9" />
                <p className="font-bold text-gray-800 text-shadow underline underline-offset-4">TaskFlow</p>
            </div>
            {/* Middle Section */}
            <div className="flex justify-center gap-2 items-center w-3/6">
                {/* Search Boards for full desktop */}
                <div className="w-full">
                    <SearchBoards/>
                </div>
                
                <PrimaryButton
                    textButton="Create"
                    handleClick={handleCreate}
                />
            </div>

            {/* auth menu section*/}
            <div className="flex justify-end gap-0.5 items-center w-1/6">
                {/* Notification Section */}
                <div className="tooltip rounded-md p-2 hover:bg-gray-100 hover:cursor-pointer" title="Notification">
                    <NotificationIcon classStyle="size-5 text-gray-800" />
                </div>
                {/* account section */}
                <div className="relative">
                    {/* fake profile */}
                    <div
                        onClick={() => setIsMenuOpen((prevState) => !prevState)}
                        className="size-6 bg-gray-400 rounded-full hover:cursor-pointer"> </div>
                    {/* Menu */}
                    {isMenuOpen && (
                        <div className="absolute right-0 top-8 py-2 bg-white rounded-md border border-gray-300 z-50">
                            <ul>
                                {/* Account */}
                                <li>
                                    <div className="flex items-center gap-1 px-4 py-2 ">
                                        <div className="size-12 bg-gray-400 rounded-full"></div>
                                        <div>
                                            {/* Full Name */}
                                            <p className="text-sm text-nowrap">{`John Doe`}</p>
                                            {/* Email */}
                                            <p className="text-xs text-gray-400 text-nowrap">{`example.123@example.com`}</p>
                                        </div>
                                    </div>

                                </li>
                                {/* Logout section */}
                                <li className="m-2">
                                    <div className="w-full h-0.5 bg-gray-300"></div>
                                </li>

                                <li className="w-72">
                                    <button type="button" className="w-full text-left px-4 py-2  first-letter:uppercase hover:bg-gray-100 hover:cursor-pointer">log out</button>
                                </li>
                            </ul>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default NavbarHeaderDesktop;