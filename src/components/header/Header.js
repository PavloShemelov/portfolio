import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hi, my name is <em>Pavlo</em>
					</strong>
					<br />a Full Stack developer
				</h1>
				<div className="header__text">
					<p>Welcome to my website</p>
				</div>
				<a href="About" className="btn active">
					About
				</a>
			</div>
		</header>
	);
}

export default Header;