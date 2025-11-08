import reactLogo from './assets/react.svg';

function Navbar() {
    return (
        <header className='header'>
            <nav className='nav'>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}

export default Navbar;