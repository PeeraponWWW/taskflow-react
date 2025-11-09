import { SearchIcon } from "../../components/icon/icon";

function SearchBoards() {
    return (
        <div
            className="relative w-full"
        >
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <SearchIcon classStyle="size-6"/>
            </div>
             <input
                className={`w-full pl-10 px-4 h-8 border border-gray-300 rounded-lg focus:outline-blue-400 focus:border-transparent`}
                placeholder="Search"
                name="searchBoard"
            />
        </div>
    )
}

export default SearchBoards;