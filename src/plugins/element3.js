// import element3 from 'element3'
// import 'element3/lib/theme-chalk/index.css'
import 'element3/lib/theme-chalk/display.css'
import 'element3/lib/theme-chalk/icon.css'
import { ElButton, ElMenu, ElMenuItem, ElSubmenu, ElRow, ElCol } from 'element3'
import 'element3/lib/theme-chalk/button.css'
import 'element3/lib/theme-chalk/menu.css'
import 'element3/lib/theme-chalk/menu-item.css'
import 'element3/lib/theme-chalk/submenu.css'
import 'element3/lib/theme-chalk/row.css'
import 'element3/lib/theme-chalk/col.css'

export default function (app) {
  app.use(ElButton)
  app.use(ElMenu)
  app.use(ElMenuItem)
  app.use(ElSubmenu)
  app.use(ElRow)
  app.use(ElCol)
}
