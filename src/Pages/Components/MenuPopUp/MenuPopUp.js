import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import './MenuPopUp.css'

export default function MenuPopUp({children,cates,dad}) {
  return (
    <div>
      <Menu menuButton={<MenuButton>{children}</MenuButton>}  menuStyle={{ marginTop: "15px" }}>
        {
          Object.entries(cates).map(([key, value]) => (
            <MenuItem href={`/${dad}/all/id/${value}`} key={key}>{value.replaceAll("_", " ")}</MenuItem>
          ))
        }
      </Menu>
    </div>
  )
}
