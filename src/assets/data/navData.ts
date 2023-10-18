import { v4 as uuidv4 } from 'uuid';
import { NavIcons, NavLinks } from '../../types/nav.model';

export const navData: NavLinks[]  = [
  {
    id: uuidv4(),
    name: 'Home',
    url:'/'
  },
  {
    id: uuidv4(),
    name: 'Shop',
    url:'/products'
  },
  {
    id: uuidv4(),
    name: 'Blog',
    url:'/blog'
  },
  {
    id: uuidv4(),
    name: 'Contact',
    url:'/contacts'
  }
]

// export const navIcons: NavIcons[]  = [
//   {
//     icon: uuidv4(),
//     name: 'Home'
//   },
//   {
//     icon: uuiconv4(),
//     name: 'Shop'
//   },
//   {
//     icon: uuidv4(),
//     name: 'Blog'
//   },
//   {
//     icon: uuidv4(),
//     name: 'Contact'
//   }
// ]