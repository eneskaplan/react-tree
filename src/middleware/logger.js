const logger = store => next => action => {
  console.group(action.type);
  console.info('%cAction', ' color: #02af31', action);
  console.log('%cPrev State', 'color: #02af31', store.getState());
  let result = next(action);
  console.log('%cNext State', 'color: #02af31', store.getState());
  console.groupEnd();
  return result;
};

export default logger;
