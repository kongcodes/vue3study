import { ElButton, ElMenu, ElMenuItem, ElSubMenu, ElRow, ElCol } from 'element-plus'
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/menu/style/css'
import 'element-plus/es/components/menu-item/style/css'
import 'element-plus/es/components/sub-menu/style/css'
import 'element-plus/es/components/row/style/css'
import 'element-plus/es/components/col/style/css'

export default function (app) {
  app.use(ElButton)
  app.use(ElMenu)
  app.use(ElMenuItem)
  app.use(ElSubMenu)
  app.use(ElRow)
  app.use(ElCol)
}
