import serchIcon from "../../../assets/serchIcon.png"
const SerchBar = () => {
    return (
        <div className="max-w-[1200px] mx-auto px-2">
            <div
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, rgba(217, 217, 217, 0.03) 0%, rgba(115, 115, 115, 0.03)",
                }}
                className="w-64 md:w-[721px] h-14 rounded-lg flex items-center pl-3 pr-2"
            >
                <img src={serchIcon} alt="searchIcon" className="mr-2" />
                <input
                    id="serch"
                    name="serch"
                    type="text"
                    className="text-white focus:outline-none rounded-lg bg-transparent flex-1 shadow-2xl"
                    placeholder="Search..."
                />
            </div>
        </div>
    );
};

export default SerchBar;
