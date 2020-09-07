var Stack = (function () {
// 属性私有
const stack = Symbol('stack')
const len = Symbol('len')

// 栈管理
class Stack {
  constructor() {
    this[len] = 0; // 栈长度
    this[stack] = {}; // 栈
  }

  static getStackInstance() {
    if (!this.instance) {
      this.instance = new Stack();
    }
    return this.instance;
  }

   // 栈顶
  getStackTop() {
    const size = this.size();
    return this[stack][size];
  }

  // 是否存在某个元素
  hasEqual(cb){
    cb(this[stack]);
  }

  // 获取栈中所有数据
  getStacks() {
     let result = [];
     if (this[len] === 0) return [];
     console.log(this[stack])
     Object.keys(this[stack]).forEach((s) => result.push(this[stack][s]));
     return result;
   }

  size() {
    return this[len];
  }
  // 进栈
  push(page) {
    const size = this.size() + 1;
    this[stack][size] = page;
    this[len] = size;
    return this.getStackTop();
  }

  // 出栈
  pop() {
    const stackTop = this.getStackTop();
    const size = this.size();
    delete this[stack][size];
    this[len] = size - 1;
    return stackTop;
  }

  //销毁
  clean() {
      this[len] = 0;
      this[stack] = {};
   }
}
  return Stack;
})()
export default Stack;