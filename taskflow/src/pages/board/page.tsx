import type { BoardItem } from "../../types/boardItem";

function Dashboard(){
    const boards:Array<BoardItem> = [
        { boardName : "SA Project"},
        { boardName: "Project Mobile Application"},
        { boardName: "Project Java Web Application"},
        { boardName: "RM 1"}
    ];


    return (
        <div className="w-full h-full">
            <h2 className="text-xl text-gray-700 font-bold uppercase">Your boards</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-2">
                { boards.map((board, index) => (
                    <div key={index} className="shadow-xl rounded-lg hover:cursor-pointer group/item">
                        <div className="bg-blue-300 h-24 rounded-t-lg group-hover/item:bg-blue-400"></div>
                        <p className="text-sm px-2 py-1 pb-8">{board.boardName}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Dashboard;

