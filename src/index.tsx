import * as React from 'react'
import {
	createBrowserRouter,
	RouteObject,
	RouterProvider,
} from 'react-router-dom'
import './index.css'
import { createRoot } from 'react-dom/client'
import ProductListPage from './pages/product-list-page/ProductListPage'
import ProductPage from './pages/product-page/ProductPage'
import { PATH_NAME } from './consts'
import NotFoundPage from './pages/not-found-page/NotFoundPage'
import UserPage from './pages/user-page/UserPage'
import FavoritesPage from './pages/favorites-page/FavoritesPage'
import store from './services/store'
import { Provider } from 'react-redux'
import CartPage from './pages/cart-page/CartPage'

const routes: RouteObject[] = [
	{
		// path: PATH_NAME.BASE,
		// element: <ProductListPage />,
		children: [
			{ index: true, element: <ProductListPage /> },
			{ path: PATH_NAME.PRODUCT, element: <ProductPage /> },
			{ path: PATH_NAME.USER, element: <UserPage /> },
			{ path: PATH_NAME.FAVORITES, element: <FavoritesPage /> },
			{ path: PATH_NAME.CART, element: <CartPage /> },
			{
				path: PATH_NAME.NOT_FOUND,
				element: <NotFoundPage />,
			},
		],
	},
]

const router = createBrowserRouter(routes, { basename: PATH_NAME.BASE })

const domNode = document.getElementById('root') as HTMLDivElement
const root = createRoot(domNode)
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
)
