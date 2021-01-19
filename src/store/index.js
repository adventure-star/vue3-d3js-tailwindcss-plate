import { createStore } from 'vuex'

const store = createStore({
  state: {
    config: {
      margin: { top: 100, right: 100, bottom: 100, left: 100 },
      lineStyle: {
        width: 10,
        color: '#ff0000'
      },
      fillRect: false,
      axis: { top: false, right: false, bottom: true, left: true }
    }
  },
  mutations: {
    handleMargin(state, margin) {
      state.config.margin = margin;
    },
    handleLineStyle(state, style) {
      state.config.lineStyle = { ...state.config.lineStyle, ...style };
    },
    handleAxis(state, axis) {
      state.config.axis = { ...state.config.axis, ...axis };
    },
    handleFillRect(state, fill) {
      state.config.fillRect = fill;
    }
  },
  actions: {
    handleChangeMargin(context, margin) {
      context.commit('handleMargin', margin)
    },
    handleChangeLineStyle(context, style) {
      context.commit('handleLineStyle', style);
    },
    handleChangeAxis(context, axis) {
      context.commit('handleAxis', axis);
    },
    handleChangeFillRect(context, fill) {
      context.commit('handleFillRect', fill);
    }
  }
});

export default store;