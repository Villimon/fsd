import { USER_API } from '@/entities/user/api/routes'
import type { User } from '@/entities/user/model'
import { http } from '@/shared/api'

export async function getProfile() {
    const res = await http.get<User>(USER_API.profile)
    return res.data
}
