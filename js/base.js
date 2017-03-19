const Store = require("./js/store.js");
const store = new Store({
  configName: 'user-preferences',
  defaults: {
    windowBounds: {
      width: 1000,
      height: 600,
      x: 100,
      y: 100
    },
    userInfo: {
      fname: '',
      lname: ''
    }
  }
});

console.log(store.get('windowBounds'))

console.log(store.get('userInfo'))

if(typeof store === "undefined") {
  console.log("rip")
}
