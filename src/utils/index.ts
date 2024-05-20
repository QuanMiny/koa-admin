import { Menu } from '@/types/menu'
import bcrypt from 'bcrypt'

/**
 * @description: 密码加密
 * @param {string} password
 * @return {*}
 */
export const PasswordToHash = (password: string) => {
  const saltRounds = 10
  const hashedPassword = bcrypt.hashSync(password, saltRounds)
  return hashedPassword
}

export const formatMenus = (menus: any[]) => {
  const menuList: Menu[] = []
  menus.forEach((item) => {
    const menu = item.dataValues
    if (menu.parent_id === 0) {
      menuList.push({
        id: menu.id,
        name: menu.name,
        path: menu.path,
        component: menu.component,
        parentId: menu.parent_id, // 驼峰命名转换
        sort: menu.sort,
        icon: menu.icon,
        meta: {
          title: menu.title,
          isLink: menu.isLink,
          isHide: menu.isHide,
          isFull: menu.isFull,
          isAffix: menu.isAffix,
          isKeepAlive: menu.isKeepAlive,
        },
        createdAt: menu.createdAt,
        updatedAt: menu.updatedAt,
      })
    } else {
      const parentMenu = menuList.find((item) => item.id === menu.parent_id)
      if (parentMenu) {
        parentMenu.children = parentMenu.children || []
        parentMenu.children.push({
          id: menu.id,
          name: menu.name,
          path: menu.path,
          component: menu.component,
          parentId: menu.parent_id,
          sort: menu.sort,
          icon: menu.icon,
          meta: {
            title: menu.title,
            isLink: menu.isLink,
            isHide: menu.isHide,
            isFull: menu.isFull,
            isAffix: menu.isAffix,
            isKeepAlive: menu.isKeepAlive,
          },
          createdAt: menu.createdAt,
          updatedAt: menu.updatedAt,
        })
      }
    }
  })
  return menuList
}
