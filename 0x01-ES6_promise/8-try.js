export default function divideFunction(numerator, denominator) {
    if(denominator === 0) {
        return Promise.reject(Error('cannot divide by 0'));
    }else{
        return Promise.resolve(numerator/denominator);
    }
}
