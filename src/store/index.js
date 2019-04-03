import Vue from 'vue'
import Vuex from 'vuex'
import calendars from './calendars.js'
import editingEvent from './editingEvent.js'
import settings from './settings.js'
import principals from './principals.js'

Vue.use(Vuex)

const mutations = {}

export default new Vuex.Store({
	modules: {
		calendars,
		principals,
		editingEvent,
		settings
	},

	mutations
})