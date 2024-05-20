export interface MenuBase {
  id: number
  name: string
  path: string
  component: string
  parentId: number
  sort: number
  meta: {
    icon: string
    title: string
    isLink: string
    isHide: number
    isFull: number
    isAffix: number
    isKeepAlive: number
  }
  createdAt: string
  updatedAt: string
}

export interface Menu extends MenuBase {
  children?: Menu[]
}
