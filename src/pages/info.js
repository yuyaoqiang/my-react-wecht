import Component from "../js/component.js";
import navigator from "../js/navigator.js";
class Info extends Component {
  constructor(parent) {
    super(parent);
    this.state = {
      title: "聊天信息(345)",
      list:[
        {userName:'不知非攻'},
        {userName:'不知非攻'},
        {userName:'不知非攻'},
        {userName:'不知非攻'},
        {userName:'不知非攻'},
        {userName:'不知非攻'},
        {userName:'不知非攻'},
        {userName:'不知非攻'},
        {userName:'不知非攻'},
        {userName:'不知非攻'},
        {userName:'不知非攻'},
        {userName:'不知非攻'},
        {userName:'不知非攻'},
        {userName:'不知非攻'},
      ]
    };
    this.templateHTML = `
      <div class="page chat-page" id="info">
        <header>
          <ul class="info-header">
            <li class="before" id="info-back">
              <span class="icon iconfont icon-zuo"></span>
            </li>
            <li>{{title}}</li>
            <li></li>
          </ul>
        </header>
        <main class="chat-main-wrap group-imgs-wrap" id="chat-main-wrap">
          <ul>
            {{each list  item i}}
              {{if i < 10}}
              <li>
              <span class="user-icon"><img src="${require('../icon/WechatIMG7.jpeg')}" alt="" /> </span>
              <span class="user-name">{{item.userName}}</span>
              </li>
              {{/if}}
            {{/each}}
            <p class="more-member">查看更多群成员</p>
          </ul>
          <section class="group-info">
            <article>
              <p>群聊名称</p>
              <p>
                <span>我的群名字</span>
                <span class="icon iconfont icon-zuo"></span>
              </p>
            </article>
            <article>
              <p>群二维码</p>
              <p>
                <span></span>
                <span class="icon iconfont icon-zuo"></span>
              </p>
            </article>
            <article>
              <p>群公告</p>
              <p>
                <span>我的群公告</span>
                <span class="icon iconfont icon-zuo"></span>
              </p>
            </article>
            <article>
              <p>备注</p>
              <p>
                <span></span>
                <span class="icon iconfont icon-zuo"></span>
              </p>
            </article>
          </section>
          <section class="group-info">
            <article>
              <p>查找聊天内容</p>
              <p>
                <span></span>
                <span class="icon iconfont icon-zuo"></span>
              </p>
            </article>
          </section>
          <section class="group-info">
            <article>
              <p>我在本群的昵称</p>
              <p>
                <span>这波能反杀</span>
                <span class="icon iconfont icon-zuo"></span>
              </p>
            </article>
          </section>
          <section class="group-info">
            <article>
              <p>设置当前聊天背景</p>
              <p>
                <span></span>
                <span class="icon iconfont icon-zuo"></span>
              </p>
            </article>
            <article>
              <p>投诉</p>
              <p>
                <span></span>
                <span class="icon iconfont icon-zuo"></span>
              </p>
            </article>
          </section>

          <section class="group-info">
            <article class="exit-clear">清空聊天记录</article>
            <article  class="exit-clear">删除并推出</article>
          </section>
        </main>
      </div>				
      `
  }
 
  componentDidMount() {
    console.log('info - componentDidMount');
    document.getElementById('info-back').addEventListener("click",(e) => navigator.back())
  }
  
  componentWillMount() {
    console.log('info - componentWillCount');
  }

  render() {
    return this.templateHTML
  }
}
export default Info