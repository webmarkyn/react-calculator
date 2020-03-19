import operate from './operate';

const calculate = (calcObj, buttonName) => {
  let { total, next, operation } = calcObj;
  const operations = ['+', 'X', '-', '/'];
  if (buttonName === '=') {
    if (total !== null && next !== null) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }
  if (buttonName === '+/-') {
    total *= (-1);
    next *= (-1);
  }
  if (buttonName === 'A/C') {
    total = null;
    next = null;
    operation = null;
  }
  if (buttonName === '%') {
    next = 0.01 * total;
  }
  if (operations.includes(buttonName)) {
    operation = buttonName;
  } else if (operation) {
    total += buttonName;
  } else {
    next += buttonName;
  }
  return {
    total,
    next,
    operation,
  };
};

export default calculate;
