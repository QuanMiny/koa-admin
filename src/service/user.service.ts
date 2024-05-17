import { menuModel, roleModel, userModel } from '@/models'

export default class UserService {
  public static async getUserById(id: number) {
    const result = await userModel.findOne({
      where: {
        id,
      },
      include: [roleModel],
    })

    console.log(result?.dataValues)

    if (result) {
      const menus = await roleModel.findOne({
        where: {
          id: result.dataValues.role_id,
        },
        include: [menuModel],
      })

      return menus
    }

    return {}
  }
}
