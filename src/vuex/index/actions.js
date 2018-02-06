// import mutations from './mutations'
// import { ADDEVENT } from './mutation_types'
// import mutations from './mutations'
import { ADDEVENT, SETDONE, NOTTODO, CLEAR } from './mutation_types'
// export const addEvent = ({ commit }, params) => commit(ADDEVENT, params)

export default {
  ADDEVENT: ({ commit }, params) => commit(ADDEVENT, params),
  SETDONE: ({commit}, id) => commit(SETDONE, id),
  NOTTODO: ({commit}, id) => commit(NOTTODO, id),
  CLEAR: ({commit}) => commit(CLEAR)
}
