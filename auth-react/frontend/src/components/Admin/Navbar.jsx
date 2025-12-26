export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-black">
                <div className="container-fluid">
                    <span className="navbar-brand">Admin Panel</span>
                    <a href="login.html" className="btn btn-outline-light btn-sm">
                        Logout
                    </a>
                </div>
            </nav>
        </>
    );
};
