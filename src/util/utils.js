// 当前Path
export const getPath = () => {
  return window.location.hash.slice(1) || 'home';
}

// 改变path
export const changePage=(path)=>{
  window.location.hash = path;
}