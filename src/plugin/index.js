//
// vue PlugIn
//
import SmarttagPlugin from 'xiti-smarttag-plugin'

const plugin = {
  install (vm, options) {
    const st = new SmarttagPlugin(options.id);

    vm.prototype.$xitiSendPage = (info) => {
      return st.sendPage(info);
    }

    vm.prototype.$xitiSendClick = (info) => {
      return st.sendClick(info);
    }
  }
}

export default plugin

