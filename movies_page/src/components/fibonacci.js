export function fibonacci(n) {
    const fibo = [0, 1];
  
    for(let i = 0; fibo.length < n; i++) {
    fibo.push(fibo[i] + fibo[i + 1]);
    }

    return fibo;
}