[尾递归调用优化](http://www.ruanyifeng.com/blog/2015/04/tail-call.html)
function factorial(n) {
  if (n==1) {
    return 1;
  }
  return n * factorial(n - 1);
}

factorial(5);

// begin to use tail recursive optimization

function factorial_tail(n,total){
  if (n == 1) {
    return total;
  }
  return factorial_tail(n - 1,n * total);
}

factorial_tail(5, 1);

// tranform args

function tailFactorial(n, total) {
  if (n === 1) {
    return total;
  }
  return tailFactorial(n - 1, n * totale);
}

function tailFactorial_caller(n) {
  return tailFactorial(n, 1);
}

tailFactorial_caller(5);

// tranform args by using currying

function currying(fn,n) {
  return function (m) {
    return fn.call(this,m,n);
  }
}

function tailFactorial(n, total) {
  if (n === 1) {
    return total;
  }
  return tailFactorial(n - 1, n * total);
}

const factorial = currying(tailFactorial_currying, 1);
factorial(5);

// use es6 default value

function factorial(n, total = 1  ) {
  if (n === 1) {
    return 1;
  }
 return factorial(n - 1, n * total) ;
}
