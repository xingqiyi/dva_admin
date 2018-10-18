import key from 'keymaster';

export default {
  namespace: 'my_products',
  state: [],
  reducers: {
    querySuccess(state, { payload: id }) {

      return [
        { name: 'dva', id: 1 },
        { name: 'antd', id: 2 },
      ];
    },
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },


  effects: {
    *deleteAfter1s({ payload: id }, { call, put }, ) {
      yield call(delay, 1000);
      yield put({ type: 'delete', payload: id, })
    }
  },


  // 订阅一个数据源
  // 数据源可以是当前的时间、服务器的 websocket 连接、
  // keyboard 输入、geolocation 变化、history 路由变化等等
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/products') {
          dispatch({
            type: 'querySuccess',
            payload: {}
          });
        }
      });
    },
    keyEvent({ dispatch }) {
      key('⌘+up, ctrl+up', () => {

        alert('up');
        dispatch({
          type: 'delete',
          payload: 1,
        });

      });
    },
  }



};


export function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
