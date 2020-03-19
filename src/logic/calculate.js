import operate from './operate';

const calculate = (calcObj, buttonName) => {
  let { total, next, operation } = calcObj;
  const operations = ['+', 'X', '-', '/'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  if (buttonName === '=') {
    if (total !== null && next !== null) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }
  if (buttonName === '+/-') {
    total = (total * (-1)).toString();
    next = (next * (-1)).toString();
  }
  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }
  if (buttonName === '%') {
    next = (0.01 * total).toString();
    operation = '%';
  }
  if (operations.includes(buttonName)) {
    operation = buttonName;
  } else if (operation && numbers.includes(buttonName)) {
    next = next ? next + buttonName : buttonName;
  } else if (numbers.includes(buttonName)) {
    total = total ? total + buttonName : buttonName;
  }
  return {
    total,
    next,
    operation,
  };
};

export default calculate;
