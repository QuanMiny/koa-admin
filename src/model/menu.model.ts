import { DataTypes } from 'sequelize';

import sequelize from '@/config/mysql';

const model = sequelize.define(
  'menu',
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    // 菜单名称
    page_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    // 页面地址
    page_url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    // 控件地址
    control_url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    // 上一级菜单id
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    // 排序
    sort: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    // 图标
    icon: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    // 是否显示：0否 1是*/
    is_show: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
    },
    remark: {
      type: DataTypes.STRING(200),
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
    },
  },
  {
    freezeTableName: true,
  }
);

export default model;
