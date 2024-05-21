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

/**
 * @description: 格式化菜单
 * @param {any[]} menus
 * @return {*}
 */
export const formatMenus = (menus: any[]) => {
  const menuList: Menu[] = []
  menus.forEach((item) => {
    const menu = item.dataValues // 取值
    menuList.push({
      id: menu.id,
      name: menu.name,
      path: menu.path,
      component: menu.component,
      parentId: menu.parent_id, // 驼峰命名转换
      sort: menu.sort,
      meta: {
        // 以下数据转为meta对象的值
        icon: menu.icon,
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
  })
  // 将格式化的所有菜单根据 parentId 构建嵌套菜单
  return buildNestedMenus(menuList)
}

/**
 * @description: 构建嵌套菜单
 * @param {Menu[]} menus
 * @param {number} parentId 顶层父级菜单 parentId 为 0
 * @return {*}
 */
function buildNestedMenus(menus: Menu[], parentId = 0): Menu[] {
  return menus
    .filter((menu) => menu.parentId === parentId) // 选中 parrentId 为 0 的菜单
    .map((menu) => ({
      ...menu, // 放入父级菜单
      children: buildNestedMenus(menus, menu.id), // 识别parentId 为 menu.id 的子菜单
    }))
}
