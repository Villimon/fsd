import { createBrowserRouter } from 'react-router'
import { CategoryPage, MainPage } from '../../pages'
import { Layout } from '../layout/Layout'

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            { index: true, Component: MainPage },
            { path: 'community', element: <div>comm</div> },
            { path: ':category', Component: CategoryPage },
            {
                path: 'article',
                children: [{ path: ':alias', element: <div>article</div> }],
            },
            {
                path: 'profile',
                children: [
                    { index: true, element: <div>Profile</div> },
                    { path: 'edit', element: <div>EditProfile</div> },
                ],
            },
        ],
    },
])
