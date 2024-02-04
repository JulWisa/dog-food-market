import React, { useEffect, useState } from 'react'
import './UserPage.css'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import BackLink from '../../back-link/BackLink'
import { useAppDispath, useAppSelector } from '../../services/hooks'
import { selectUser } from '../../services/user/selectors'
import { fetchEditedUser } from '../../services/user/userSlice'
import { UserEditBodyDto } from '../../api'

const UserPage = () => {
	const dispatch = useAppDispath()
	const user = useAppSelector(selectUser)

	const [userState, setUserState] = useState<Partial<User>>(user || {})

	useEffect(() => {
		setUserState(user as User)
	}, [user])

	const handleSaveUserBtnClick = (e: any) => {
		e.preventDefault()
		dispatch(fetchEditedUser(userState as UserEditBodyDto))
	}

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
									value={userState?.name}
									onChange={(e) =>
										setUserState({ ...userState, name: e.target.value })
									}
								/>
							</label>
							<label className='form__label'>
								<input
									className='input'
									name='about'
									id='about'
									type='text'
									placeholder='Описание профессии'
									value={userState?.about}
									onChange={(e) =>
										setUserState({ ...userState, about: e.target.value })
									}
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
									value={user?.avatar}
									readOnly
									onChange={() => 1}
								/>
							</label>
							<label className='form__label'>
								<input
									className='input'
									name='email'
									id='email'
									type='text'
									placeholder='email'
									value={user?.email}
									readOnly
									onChange={() => 1}
								/>
							</label>
						</div>
						<button
							className='form__btn secondary maxContent'
							onClick={handleSaveUserBtnClick}
						>
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
