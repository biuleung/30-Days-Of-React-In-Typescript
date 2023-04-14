import Style from './Header.module.scss';

function Header() {
    return (
        <header className="header">
            <p className={Style.title}>World Countries Data</p>
            <p className={Style.subtitle}>Currently, we have 250 countries</p>
        </header>
    );
}

export default Header;
