export const Loading = () => {
    return (
        <>
            {/* Full screen loading */}
            <div
                className="position-fixed top-0 start-0 w-100 h-100 
        d-flex flex-column justify-content-center align-items-center 
        bg-dark text-light"
            >
                <div className="spinner-border" role="status" style={{width: "4rem", height: "4rem"}}>
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="mt-3 fs-5">Memuat data...</div>
            </div>
        </>
    );
};
