import { Outlet } from 'react-router'
import { Footer } from '@/shared/ui'
import { Icon } from '@/shared/ui/Icon/Icon'

export function Layout() {
    return (
        <div>
            <div>Шапка</div>
            <Icon.ReactIcon />
            <Outlet />
            <Footer />
        </div>
    )
}
