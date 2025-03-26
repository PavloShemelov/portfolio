import "./style.css";

import vk from './../../img/icons/vk.svg';
import instagram from './../../img/icons/instagram.svg';
import twitter from './../../img/icons/twitter.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
    return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
					<li className="social__item">
  <a href="https://vk.com/id529692361" target="_blank">
    <img src={vk} alt="https://vk.com/id529692361" />
  </a>
</li>
<li className="social__item">
  <a href="https://www.instagram.com/pasha_dragon999/" target="_blank">
    <img src={instagram} alt="https://www.instagram.com/pasha_dragon999/" />
  </a>
</li>
<li className="social__item">
  <a href="https://twitter.com/cryptPa1?s=09" target="_blank">
    <img src={twitter} alt="https://twitter.com/cryptPa1?s=09" />
  </a>
</li>
<li className="social__item">
  <a href="https://github.com/" target="_blank">
    <img src={gitHub} alt="https://github.com/" />
  </a>
</li>
<li className="social__item">
  <a href="https://www.linkedin.com/in/pavlo-shemelov-110a6324b" target="_blank">
    <img src={linkedIn} alt="https://www.linkedin.com/in/pavlo-shemelov-110a6324b" />
  </a>
</li>

					</ul>
					<div className="copyright">
						<p>© 2023 frontend-dev.com</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;