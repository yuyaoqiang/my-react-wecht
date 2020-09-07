import Home from "../pages/home.js"
import Chat from "../pages/chat.js"
import Info from "../pages/info.js"
import Navigation from "./navigation.js"
const navigator = {
  home: {
    path: 'home',
    title: '微信',
    component: Home,

  },
  chat: {
    path: 'chat',
    title: '闲聊群',
    component: Chat,
  },
  info: {
    path: 'info',
    title: '闲聊群',
    component: Info,
  }
}
export default new Navigation(navigator);