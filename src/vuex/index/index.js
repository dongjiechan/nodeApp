import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// type: 1 代表未完成，2 代表完成，3代表取消

const state = {
  event: [],
  count: 0
}

export default {
  state,
  mutations,
  actions,
  getters
}
