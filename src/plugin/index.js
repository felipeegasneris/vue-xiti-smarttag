//
// vue PlugIn
//
import SmarttagPlugin from 'xiti-smarttag-plugin'

const plugin = {
  install (vm, options) {
    const st = new SmarttagPlugin(options.id);

    vm.prototype.$xitiSendPage = (info) => {
      try {
        return st.sendPage(info);
      } catch (e) {
        return console.error('plugin not loaded');
      }

    }

    vm.prototype.$xitiSendClick = (info) => {
      try {
        return st.sendClick(info);
      } catch (e) {
        return console.error('plugin not loaded');
      }

    }
  }
}

export default plugin

