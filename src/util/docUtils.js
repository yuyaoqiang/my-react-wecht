class docUtils {
  // 创建DOM
  static createDom(templateStr) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(templateStr, "text/html");
    let dom = doc.querySelector(".page");
    return dom;
		}
		
  // 获取子元素中最后一个DOM
  static queryLastChild(parent){
    return parent.lastElementChild;
		}
		
  // 查询DOM
  static query(id) {
    return document.getElementById(id) || false;
  }

  // 删除DOM
  static delete(template) {
    if (!template) return;
    var parent = document.getElementById("container");
    setTimeout(() => {
      if (template != null) parent.removeChild(template);
    }, 700);
  }

  // 添加DOM
  static appendChild(template) {
    let DOM = this.query("container");
    if (DOM) DOM.appendChild(template);
  }
}

export default docUtils;