import Vue from 'vue'
import Vuex from 'vuex'
import createStoreConfig from '@/store/create-store-config'

Vue.use(Vuex)

const storeConfig = createStoreConfig()
export const store = new Vuex.Store(storeConfig)
