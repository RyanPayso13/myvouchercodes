import state from '@/store/state'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import actions from '@/store/actions'

export default function createStoreConfig() {
  return {
    state,
    getters,
    mutations,
    actions
  }
}
