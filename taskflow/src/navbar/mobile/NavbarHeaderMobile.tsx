import { useState } from "react";
import { MenuMobileIcon, NotificationIcon, SearchIcon } from "../../components/icon/icon";
import { PrimaryButton } from "../../components/button";
// import SearchBoards from "./SearchBoards";


function NavbarHeaderMobile() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleCreate = (): void => {
        console.log("Create is Clicked!!!")
    }

    return (
        <>
            <div className="relative flex md:hidden justify-between p-3 w-screen h-12 border-b border-b-gray-300 shadow-xs ">
                {/* icon application */}
                <div className="flex gap-0.5 items-center w-1/6">
                    <img src="icon.png" alt="app-icon" className="w-9 h-9" />
                </div>
                {/* Middle Section */}
                <div className="flex justify-center gap-2 items-center w-3/6">
                    <div className="block">
                        <SearchIcon classStyle="size-6 text-gray-400" />
                    </div>
                    <PrimaryButton
                        textButton="Create"
                        handleClick={handleCreate}
                    />
                </div>
                {/* auth menu section*/}
                <div className="flex justify-end w-1/6">
                    <button type="button" onClick={() => setIsMenuOpen((prevState) => !prevState)}>
                        <MenuMobileIcon classStyle={`size-6 rounded-md font-bold ${isMenuOpen ? 'text-blue-500  bg-blue-200 ' : 'text-gray-500  bg-gray-200'
                            }`} />
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="absolute w-full right-0 top-12 py-2 bg-white rounded-md border border-gray-300 z-50">
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

                            <li className="m-2">
                                <div className="w-full h-px bg-gray-300"></div>
                            </li>

                            <li>
                                <div className="w-full flex items-center justify-start gap-2 px-4 py-2">
                                    <NotificationIcon classStyle="size-5 text-gray-800" />
                                    Notification
                                </div>
                            </li>

                            {/* Logout section */}
                            <li className="m-2">
                                <div className="w-full h-0.5 bg-gray-300"></div>
                            </li>

                            <li className="w-full">
                                <button type="button" className="w-full text-left px-4 py-2  first-letter:uppercase hover:bg-gray-100 hover:cursor-pointer">log out</button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

        </>

    );
};

export default NavbarHeaderMobile;