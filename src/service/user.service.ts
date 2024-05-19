import { userModel, roleModel } from '@/models'

class UserService {
  async getUserByName(name: string) {
    try {
      const result = await userModel.findOne({
        where: {
          login_name: name,
        },
      })
      return result?.dataValues
    } catch (error) {
      console.log(error)
    }
  }

  async registerUser({ name, password }: { name: string; password: string }) {
    try {
      const result = await userModel.create({
        login_name: name,
        login_password: password,
        role_id: 2, // 默认普通用户
      })
      return result?.dataValues
    } catch (error) {
      console.log(error)
    }
  }
}

export default new UserService()
