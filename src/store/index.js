import Vue from 'vue';
import Vuex from 'vuex'; 
import todoList from './modules/todo_list';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
    modules: {
        todoList,
    },
    strict: debug,
})