function Header(){
    return(
        <div>
            <header className="header" >
                <nav>
                    <a href="#" className="nav__logo">Dnyanesh Bachhav</a>
                    <div className="nav__menu" >
                        <ul className="nav__list grid">
                            <li>
                                <a href="#home">
                                    <i class="uil uil-estate"></i>
                                </a>
                                Home
                            </li>
                            <li>
                                <a href="#About">
                                    <i class="uil uil-user"></i>
                                </a>
                                About
                            </li>
                            <li>
                                <a href="#skills">
                                    <i class="uil uil-file-alt"></i>
                                </a>
                                Skills
                            </li>
                            <li>
                                <a href="#portfolio">
                                    <i class="uil uil-scenery"></i>
                                </a>
                                Portfolio
                            </li>
                            <li>
                                <a href="#contact">
                                    <i class="uil uil-message"></i>
                                </a>
                                Contact
                            </li>
                        </ul>
                        <i class="uil uil-times" id="nav-close"></i>
                    </div>
                    <div className="nav__btns">
                        <div className="nav__toggle" id="nav-toggle">
                            <i class="uil uil-apps"></i>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
export default Header;