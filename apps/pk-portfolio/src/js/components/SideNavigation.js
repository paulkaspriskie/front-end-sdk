import { NavLink } from 'react-router-dom';
import appData from '../api/data-app.json';
import Icon from './Icon.js';


const SideNavigation = ({ROUTES}) => {
  return (
    <>
      <button><Icon name={'menu-icon'} /></button>
      <nav>
        <ul>
          {ROUTES.map((route, index) => (
            <li key={route.path}>
              <NavLink
                to={route.path}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                end>
                {
                  index === 0 ? <Icon name={`pk-crane-icon`} /> :
                  <Icon name={`${route.name.toLowerCase()}-icon`} />
                }
                {
                  index === 0 ? <h3>{route.name}<span>Frontend / UI Developer</span></h3> : <span>{route.name}</span>
                }
              </NavLink>
            </li>
          ))}
        </ul>
        <ul>
          {
            appData.navSocial.map((item, i) => {
              return <li key={i}><a href={item.url} target="_blank"><Icon name={item.fileName} /></a></li>
            })
          }
        </ul>
      </nav>
    </>
  )
}


export default SideNavigation;
