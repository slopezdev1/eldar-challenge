import { EPermission } from "./permission.interface"
import { ERole } from "./rol.interface"

export interface IUser {
    id: string,
    name: string,
    password: string
    role: ERole,
    permission: Array<EPermission>
}