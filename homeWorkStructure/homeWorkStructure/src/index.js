// У результаті я хочу, щоб ви написали функцію, яка повертатиме об'єкт, ' +
// 'де буде властивість result - і це буде паліндром, і властивість steps - це число викликів до знаходження паліндрома.
// Для того, щоб перевірити себе використовуйте число 196.
function isPalindrome(numb) {
    const numStr = numb.toString();
    const reversedNumStr = numStr.split('').reverse().join('');
    return numStr === reversedNumStr;
}

function findPalindrome(number) {
    let steps = 0;
    let currentNumber = BigInt(number);

    while (true) {
        if (isPalindrome(currentNumber)) {
            return { result: currentNumber, steps };
        }

        const reversedNum = BigInt(currentNumber.toString().split('').reverse().join(''));
        currentNumber += reversedNum;
        steps++;

        if (steps > 1000) {
            return { result: null, steps: -1 };
        }
    }
}

const number = 196;
const result = findPalindrome(number);

console.log(`Для числа ${number}, результат буде: ${result.result}, кількість кроків: ${result.steps}`);