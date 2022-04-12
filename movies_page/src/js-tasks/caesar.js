const alphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";

function ceasar(str, shift) {
    let result = '';

    for(let i = 0; i < str.length; i++) {
        let letterIndex = alphabetLowerCase.indexOf(str[i]);
        let sum = letterIndex + shift;
        if(sum >= 25) sum = parseInt(sum % 26);
        while (sum < 0) sum += 26;

        if(alphabetLowerCase.includes(str[i])) {
            if(letterIndex >= 0 && letterIndex < 25 && shift >= 0) {
                result += alphabetLowerCase[sum];
            }else if(letterIndex >= 0 && shift < 0) {
                result += alphabetLowerCase[(sum)%26];
            }
        }else if(alphabetUpperCase.includes(str[i])) {
            letterIndex = alphabetUpperCase.indexOf(str[i]);
            sum = letterIndex + shift;
            if(sum >= 25) sum = parseInt(sum % 26);
            while (sum < 0) sum += 26;

            if(letterIndex >= 0 && letterIndex < 25 && shift >= 0) {
                result += alphabetUpperCase[sum];
            }else if(letterIndex >= 0 && shift < 0) {
                result += alphabetUpperCase[(sum)%26];
            }
        }else {
            result += str[i];
        }
    }

    return result;
}

console.log(ceasar('How are you doing?', -110));