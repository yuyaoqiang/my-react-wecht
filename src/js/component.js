import docUtils from "../util/docUtils.js";
import template from "../lib/template-web"
class Component {
  constructor(parent) {
    this.parent = document.querySelector(parent);
    this.pre = null;
    this.state =null;
    setTimeout(() => {
     this.pre = this.state;
     this.compile();
    },0)
  }

  compile() {
    this.componentWillMount();
    const tempateHTML = this.render();
    const rendered = template.compile(tempateHTML)(this.state);
    this.append('in',rendered);
    this.componentDidMount();
  }

  componentDidMount() {

  }
  
  componentWillMount() {

  }
  
  componentWillUpdate(pre,next) {}

  componentDidUpdate(pre,next) {}

  setState(state) {
   this.pre = this.state;
   this.state = state;
   this.update();
  }

  render() {}

  update() {
    if(this.pre === this.state) return
    this.componentWillUpdate && this.componentWillUpdate(this.pre,this.state);
    const tempateHTML = this.render();
    const rendered = template.compile(tempateHTML)(this.state);
    this.append(null,rendered);
    this.componentDidUpdate && this.componentDidUpdate(this.pre,this.state);
  }

  destory(animationOut) {
    let node = docUtils.queryLastChild(this.parent)
    if (animationOut) {
      node.addEventListener("animationend", () => {
        this.parent.removeChild(node);
      });
      const classas = node.getAttribute("class");
      node.setAttribute("class", `${classas} out-animation`);
    } else {
      this.parent.removeChild(node);
    }
  }

  append(animation,template) {
    let node = docUtils.createDom(template);
    if (animation) {
      const classas = node.getAttribute("class");
      node.setAttribute("class", `${classas} in-animation`);
      this.parent.appendChild(node);
    } else {
      this.parent.appendChild(node);
    }
  }
}

export default Component;