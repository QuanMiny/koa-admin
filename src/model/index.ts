import menuModel from './menu.model';
import roleModel from './role.model';
import roleMenuModel from './roleMenu.model';
import userModel from './user.model';
import userRoleModel from './userRole.model';

// import sequelize from '@/config/mysql';

userModel.belongsToMany(roleModel, {
  through: userRoleModel,
  foreignKey: 'user_id',
});

roleModel.belongsToMany(userModel, {
  through: userRoleModel,
  foreignKey: 'role_id',
});

roleModel.hasMany(roleMenuModel, { foreignKey: 'role_id' });
roleMenuModel.hasOne(menuModel, { foreignKey: 'id' });

// (async () => {
//   await sequelize.sync({ force: true }); // 同步
// })();

export { menuModel, roleModel, userModel, roleMenuModel, userRoleModel };
