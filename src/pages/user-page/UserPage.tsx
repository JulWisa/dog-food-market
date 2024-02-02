import React, { useEffect } from 'react'
import './UserPage.css'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import BackLink from '../../back-link/BackLink'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../storage/actions/userActions'

const UserPage = () => {
	const dispatch = useDispatch()
	const storage = useSelector((state) => state)
	console.log(storage)

	useEffect(() => {
		dispatch(getUser('1'))
	}, [])

	return (
		<div>
			<Header />
			<main className='main'>
				<div className='content container'>
					<BackLink />
					<h1 className='header-title'>Мои данные</h1>
					<form className='form form'>
						<div className='form__row'>
							<label className='form__label'>
								<input
									className='input'
									name='name'
									id='name'
									type='text'
									placeholder='Введите ваше имя'
								/>
							</label>
							<label className='form__label'>
								<input
									className='input'
									name='about'
									id='about'
									type='text'
									placeholder='Описание профессии'
								/>
							</label>
						</div>
						<div className='form__row'>
							<label className='form__label'>
								<input
									className='input'
									name='avatar'
									id='avatar'
									type='url'
									placeholder='Введите ссылку на аватарку'
								/>
							</label>
							<label className='form__label'>
								<input
									className='input'
									name='email'
									id='email'
									type='text'
									placeholder='email'
								/>
							</label>
						</div>
						<button type='submit' className='form__btn secondary maxContent'>
							Сохранить
						</button>
					</form>
					<form className='form form'>
						<h2 className='form__title'>Изменить пароль</h2>
						<div className='form__row form__row_min'>
							<label className='form__label'>
								<input
									className='input'
									name='password'
									id='password'
									type='password'
									placeholder='Пароль'
								/>
							</label>
						</div>
						<button type='submit' className='form__btn secondary maxContent'>
							Сохранить
						</button>
					</form>
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default UserPage
