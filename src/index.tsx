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

const routes: RouteObject[] = [
	{
		// path: PATH_NAME.BASE,
		// element: <ProductListPage />,
		children: [
			{ index: true, element: <ProductListPage /> },
			{ path: PATH_NAME.PRODUCT, element: <ProductPage /> },
			{ path: PATH_NAME.USER, element: <UserPage /> },
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
		<RouterProvider router={router} />
	</React.StrictMode>
)
