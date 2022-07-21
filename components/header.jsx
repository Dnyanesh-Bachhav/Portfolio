function Header(){
    return(
        <div id="navbar">
        <h1>Header...</h1>
        <ul className="text-xl bg-red-400" style={{display: 'flex',flexDirection : 'row'}}>
            <li>Home</li>
            <li>Projects</li>
            <li>About me</li>
            <li>Contact</li>
        </ul>
        </div>
    );
}
export default Header;