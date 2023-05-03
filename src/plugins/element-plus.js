import { 
  ElButton, ElMenu, ElMenuItem, ElSubMenu, ElRow, ElCol,
  ElTable, ElTableColumn, ElIcon
 } from 'element-plus'
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/menu/style/css'
import 'element-plus/es/components/menu-item/style/css'
import 'element-plus/es/components/sub-menu/style/css'
import 'element-plus/es/components/row/style/css'
import 'element-plus/es/components/col/style/css'
import 'element-plus/es/components/table/style/css'
import 'element-plus/es/components/table-column/style/css'
import 'element-plus/es/components/icon/style/css'

export default function (app) {
  app.use(ElButton)
  app.use(ElMenu)
  app.use(ElMenuItem)
  app.use(ElSubMenu)
  app.use(ElRow)
  app.use(ElCol)
  app.use(ElTable)
  app.use(ElTableColumn)
  app.use(ElIcon)
}
