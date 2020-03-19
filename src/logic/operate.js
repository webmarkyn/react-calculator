import Big from 'big-js';

const operate = (first, second, operation) => {
  const [f, s] = [Big(first), Big(second)];
  switch (operation) {
    case '+':
      return f.plus(s).toString();
    case '-':
      return f.plus(s).toString();
    case '/':
      if (s === '0') return '0';
      return f.div(s).toString();
    case 'X':
      return f.times(s).toString();
    default:
      return '0';
  }
};

export default operate;
