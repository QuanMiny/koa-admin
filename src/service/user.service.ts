import { userModel, roleModel } from '@/models'

class UserService {
  async getUserByName(name: string) {
    const result = await userModel.findOne({
      where: {
        login_name: name,
      },
    })
    return result
  }
}

export default new UserService()
