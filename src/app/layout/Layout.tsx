import { Outlet } from 'react-router'
import { Footer } from '@/shared/ui'
import { Icon } from '@/shared/ui/Icon/Icon'
import { useUserStore } from '@/entities/user'

export function Layout() {
    const { profile } = useUserStore()

    return (
        <div>
            <div>Шапка</div>
            {profile?.name}
            <Icon.ReactIcon />
            <Outlet />
            <Footer />
        </div>
    )
}
