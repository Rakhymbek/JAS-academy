export function factorial(num) {

    if(num < 0) return;
    else if ( num === 0) return 1;

    return num * factorial(num - 1);
}
