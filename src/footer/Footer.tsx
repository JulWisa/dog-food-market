import React from 'react'
import Logo from '../logo/Logo'
import './Footer.css'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__wrapper'>
					<div className='footer__col'>
						<span
							className='logo footer__logo logo'
							title='Логотип'
							aria-hidden='true'
						>
							<Logo />
						</span>
						<p className='footer__copyright'>
							© «Интернет-магазин DogFood.ru»
						</p>
					</div>
					<div className='footer__col'>
						<nav className='menu-bottom'>
							<a href='/catalogue' className='menu-bottom__item'>
								Каталог
							</a>
							<a href='/catalogue' className='menu-bottom__item'>
								Акции
							</a>
							<a href='/catalogue' className='menu-bottom__item'>
								Новости
							</a>
							<a href='/catalogue' className='menu-bottom__item'>
								Отзывы
							</a>
						</nav>
					</div>
					<div className='footer__col'>
						<nav className='menu-bottom'>
							<a href='/catalogue' className='menu-bottom__item'>
								Оплата и доставка
							</a>
							<a href='/catalogue' className='menu-bottom__item'>
								Часто спрашивают
							</a>
							<a href='/catalogue' className='menu-bottom__item'>
								Обратная связь
							</a>
							<a href='/catalogue' className='menu-bottom__item'>
								Контакты
							</a>
						</nav>
					</div>
					<div className='footer__col'>
						<div className='contacts'>
							<p className='contacts__title'>Мы на связи</p>
							<a
								className='contacts__tel contacts__link'
								href='tel:89177172179'
							>
								8 (999) 00-00-00
							</a>
							<a
								className='contacts__mail contacts__link'
								href='mailto:hordog.ru@gmail.com'
							>
								dogfood.ru@gmail.com
							</a>
							<ul className='socials contacts__socials'>
								<li className='socials__item'>
									<a className='socials__link' href='/#'>
										<img
											src='/images/telegram.95a5ca8a1ae0a13c18da2bca3f249bf5.svg'
											alt='telegram'
											className='socials__icon'
										/>
									</a>
								</li>
								<li className='socials__item'>
									<a className='socials__link' href='/#'>
										<img
											src='/images/whatsapp.51cbd71440eaa90946070b8848c12129.svg'
											alt='whatsapp'
											className='socials__icon'
										/>
									</a>
								</li>
								<li className='socials__item'>
									<a className='socials__link' href='/#'>
										<img
											src='/images/viber.b4234cd18a8ffefb8ebb172506996cea.svg'
											alt='viber'
											className='socials__icon'
										/>
									</a>
								</li>
								<li className='socials__item'>
									<a className='socials__link' href='/#'>
										<img
											src='/images/instagram.54cbf40d1b69370b6a2ec029eefc269c.svg'
											alt='instagram'
											className='socials__icon'
										/>
									</a>
								</li>
								<li className='socials__item'>
									<a className='socials__link' href='/#'>
										<img
											src='/images/vk.5a6b12bf142f67e2138c1e6c69952975.svg'
											alt='vk'
											className='socials__icon'
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
