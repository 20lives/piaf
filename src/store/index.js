import Vue from "vue";
import Vuex from "vuex";

import app from '../main'
import menu from "./modules/menu";
import user from "./modules/user";
import chat from "./modules/chat";
import todo from "./modules/todo";
import survey from "./modules/survey";

Vue.use(Vuex);

import {defaultLocale,localeOptions} from 'constants/config'
export const store = new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
    changeLang(state, payload) {
      app.$i18n.locale = payload.locale
      localStorage.setItem('currentLanguage', payload.locale) 
      localStorage.setItem('direction', payload.dir) 
    }
  },
  actions:{
    setLang({commit}, payload) {
      commit("changeLang", payload)
    }
  },
  modules: {
    menu,
    user,
    chat,
    todo,
    survey,
  }
});
