import { createStore } from 'vuex';
import { State } from '@/interfaces/store.interfaces';
import localStorage from '@/helpers/localStorage';
import { SET_TRACE_HISTORY } from '@/store/actions';
import { CodeSearchItem } from '@/interfaces/code.interfaces';

const initialState: State = {
  codeSearchHistory: localStorage.getItem<CodeSearchItem[]>('history', []),
};

export default createStore({
  state: initialState,
  getters: {
    searchHistory(state: State): CodeSearchItem[] | null {
      return state.codeSearchHistory;
    },
  },
  mutations: {
    [SET_TRACE_HISTORY](state: State, value: CodeSearchItem) {
      state.codeSearchHistory = state.codeSearchHistory ? [
        value,
        ...state.codeSearchHistory,
      ] : [value];

      localStorage.setItem<CodeSearchItem[]>('history', state.codeSearchHistory);
    },
  },
  actions: {
    addCodeSearchHistory({ commit }, code) {
      commit(SET_TRACE_HISTORY, code);
    },
  },
  modules: {
  },
});
