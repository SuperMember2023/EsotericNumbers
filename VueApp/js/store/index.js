import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//用户状态
const USERSTATUS = uni.getStorageSync('userStatus') || false;
const USERLOGINTYPE= uni.getStorageSync('userLoginType') || 0;
const GLOBALCONFIG = uni.getStorageSync('globalConfig') || {};

const store = new Vuex.Store({
	state: {
		// 用户状态
		userStatus: USERSTATUS,
		//用户登录类型
		userLoginType: USERLOGINTYPE,
		networkState: 'unknown',
		globalConfig: GLOBALCONFIG,
		
	},
	getters: {
		// 全局配置
		globalConfig: state => {
			return state.globalConfig;
		},
		// 获取网络状态
		networkStatus: state => {
			return state.networkState;
		},
		// 判断用户是否登录
		hasLogin: state => {
			return state.userStatus;
		}
	},
	mutations: {
		login(state,isLogin, loginType) {
			state.userStatus = isLogin
			state.userLoginType = loginType
			uni.setStorageSync('userStatus', isLogin);
			uni.setStorageSync('userLoginType', loginType);
		},
		logout(state) {
			state.userStatus = isLogin
			state.userLoginType = loginType
			uni.removeStorageSync('loginType');
			uni.removeStorageSync('isLogin');
		},
		setNetworkState(state, provider) {
			state.networkState = provider;
		},
		
		// setLocale(state, val) {
		// 	state.locale = val;
		// 	uni.setStorageSync('locale', val);
		// }
	},
	actions: {
		globalConfigChange({ commit }, info) {
			commit('setGlobalConfig', info);
		},
		networkStateChange({ commit }, info) {
			commit('setNetworkState', info);
		},
		logout({ commit }) {
			commit('logout');
		}
	}
});

export default store;
