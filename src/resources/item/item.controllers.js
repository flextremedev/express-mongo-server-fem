import { crudControllers } from '../../utils/crud'
import { Item } from './item.model'

export const itemControllers = crudControllers(Item)
