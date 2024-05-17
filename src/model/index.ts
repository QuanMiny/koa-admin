import menuModel from './menu.model'
import roleModel from './role.model'
import roleMenuModel from './roleMenu.model'
import userModel from './user.model'

// import sequelize from '@/config/mysql';

userModel.belongsTo(roleModel, { foreignKey: 'role_id' })

roleModel.belongsToMany(menuModel, {
  through: roleMenuModel,
  foreignKey: 'role_id',
})

menuModel.belongsToMany(roleModel, {
  through: roleMenuModel,
  foreignKey: 'menu_id',
})

// (async () => {
//   await sequelize.sync({ force: true }); // 同步
// })();

export { menuModel, roleModel, userModel, roleMenuModel }
