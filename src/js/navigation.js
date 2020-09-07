import Stack from "./stack.js"
import navObserver from "./navigatorObserver.js"
import {getPath} from "../util/utils.js"
class Navigation {
  constructor(config) {
  this.stack = new Stack();
  this.config = config;
 }
  
  init(){
    this.initListenerEventer();
    const path = getPath();
    this.go(path);
  }

  go(path){
    const { component } = this.config[path];
    const page = new component('#container');
    this.stack.push(page);
    window.history.pushState('','',path)
  }

  back(){
    this.stack.pop().destory('out');
    window.history.back();
  }

  isHas(path){
    let has = false;
    this.stack.hasEqual((stack) => {
      const index = Object.keys(stack).findIndex(s => stack[s].path === path);
      has = index === -1 ? false : true;
    })
    return has;
  }

  // 路由变化 事件发布
  historyPulishEventer(){
    return ()=>{
      return (key)=>{
        if(key==='pulishPush'){
          return function (...args) {
            const [state,title,path] = args
            navObserver.publish('listenerPush',path);
            window.history.pushState(state,title,path);
          }
        }
        if(key==='pulishPop'){
          return function (...args) {
            window.history.back(...args);
            navObserver.publish('listenerPop');
          }
        }
      }
    }
  }

  // 订阅事件
  historyListenerEventer(){
    return ()=>{
      return (key)=>{
        if(key==='listenerPush'){
          return (callback)=>{
            navObserver.addListener('listenerPush',callback);
          }
        }
        if(key==='listenerPop'){
          return (callback)=>{
            navObserver.addListener('listenerPop',callback);
          }
        }
      }
    }
  }
  
  initListenerEventer(){
    window.addGoEventListener = this.historyListenerEventer('listenerPush');
    window.addBackEventListener = this.historyListenerEventer('listenerPop');
    window.addGoEventListener((path)=>{
      this.navigator.go(path);
    })
    window.addBackEventListener(()=>{
      this.navigator.back();
    })
    window.history.push = this.historyPulishEventer('pulishPush')();
    window.history.pop = this.historyPulishEventer('pulishPop')();
  }
}

export default Navigation;