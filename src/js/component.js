import docUtils from "../util/docUtils.js";
import template from "../lib/template-web"
class Component {
  constructor(parent) {
    this.parent = document.querySelector(parent);
    this.pre = null;
    this.next = null;
    this.state =null;
    setTimeout(() => {
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
  
  componentWillUpdate(pre,next) {
  
  }

  componentDidUpdate(pre,next) {

  }

  setState() {

  }

  render() {}

  update() {
    this.componentWillUpdate && this.componentWillUpdate(this.pre,this.next);
    const tempateHTML = this.render();
    const rendered = template.compile(tempateHTML)(this.state);
    this.append('in',rendered);
    this.componentDidUpdate && this.componentDidUpdate(this.pre,this.next);
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