// import Login from './Login'
import {StackNavigator} from 'react-navigation'
import RootTabs from './RootTabs'
import Login from './login/index'
const Entry = StackNavigator({
  Login: {
    screen: Login,
  },

  Tabs: {
    screen: RootTabs,
  },
},{
  headerMode: 'none',
})

export default Entry