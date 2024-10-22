import { EPermission } from "./permission.interface"
import { ERol } from "./rol.interface"

export interface IUser {
    name: string,
    password: string
    rol: ERol,
    permission: Array<EPermission>
}