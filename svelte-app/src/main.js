import App from './App.svelte';
 
var app = new App({
  // target: document.body
  // Bootstrap の JavaScript 発動を body 下部で行うために修正
  target: document.getElementById("app_svelte")
});
 
export default app;