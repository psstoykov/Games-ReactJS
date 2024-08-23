export default function Search({ update }) {
    const [isActive, setIsActive] = update;
    const closeSearchHandler = () => {
        setIsActive(false);
    };

    return (
        <div
            className="search-model"
            style={isActive ? { display: "block" } : { display: "none" }}
        >
            <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="search-close-switch">
                    <i className="icon_close" onClick={closeSearchHandler} />
                </div>
                <form className="search-model-form">
                    <input
                        type="text"
                        id="search-input"
                        placeholder="Search here....."
                    />
                </form>
            </div>
        </div>
    );
}
