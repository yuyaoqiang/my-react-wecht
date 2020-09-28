import Component from "../js/component.js"
import navigator from "../js/navigator.js";
class Home extends Component {
  constructor(args){
    super(args)
    this.state = {
      title: "微信",
      list:[
        '这波能反杀',
        '这波能反杀',
        '这波能反杀',
        '这波能反杀',
        '这波能反杀',
        '这波能反杀',
        '这波能反杀',
        '这波能反杀',
        '这波能反杀',
        '这波能反杀',
        '这波能反杀',
        '这波能反杀',
        '这波能反杀',
        '这波能反杀',
        '这波能反杀',
      ]
    };
    this.templateHTML = `
      <div class="page chat-page" id="home">
        <header>
          <ul class="info-header">
            <li></li>
            <li>{{ title }}</li>
            <li><span class="icon iconfont icon-icon-"></span></li>
          </ul>
        </header>
        <main class="chat-main-wrap" id="chat-main-wrap">
          <ul id="list">
            {{each list  value i}}
              <li class="row"">
                <span class="user-icon"> <img src="${require('../icon/icon.jpeg')}" alt="" /> </span>
                <span class="user-name">{{value}}{{i}}</span>
              </li>
            {{/each}}
          </ul>
        </main>
        <footer>
          <ul class="chat-footer">
            <li>
              <span class="iconfont chat icon-cebianlan_liaotianliebiao"></span>
              <span class="zh-name chat" id="click-change">微信</span>
            </li>
            <li>
              <span class="icon iconfont icon-tongxunlu-copy"></span>
              <span class="zh-name">通讯录</span>
            </li>
            <li>
              <span class="icon iconfont icon-faxian"></span>
              <span class="zh-name">发现</span>
            </li>
            <li>
              <span class="iconfont icon-wo"></span>
              <span class="zh-name">我</span>
            </li>
          </ul>
        </footer>
      </div>
    `;
  }

  componentDidMount() {
   let _this = this;
   console.log(this.pre)
    console.log('home - componentDidMount');
    document.getElementById('list').addEventListener("click",(e)=>{
      let event = e || window.event;
      let target = event.target || event.srcElement;
      if(['li','span'].includes(target.nodeName.toLocaleLowerCase())){
        navigator.go('chat')
      }
    })

    document.getElementById('click-change').addEventListener("click",(e)=>{
     _this.setState({..._this.state,title:'微信2'})
   })
  }
  
  componentWillMount() {
    console.log('home - componentWillCount');
  }
  
  render() {
    return this.templateHTML;
  }
}
export default Home;