function reverseString(str: string)
{
    let newString: string = "";

    for (let index: number = str.length; index >= 0; index--)
    {
        newString += str.charAt(index);
    }

    return newString;
}

function countVowels(str: string)
{
    const VOWELS: string[] = ["a", "e", "i", "o", "u", "y"];
    let vowelCount: number = 0;

    for (let index: number = 0; index < str.length; index++)
    {
        if (VOWELS.includes(str.charAt(index)))
        {
            vowelCount++;
        }
    }

    return vowelCount;
}

function primeCheck(num: number)
{
    if (num <= 1)
    {
        return false;
    }
    if (num == 2)
    {
        return true;
    }

    for (let num2: number = 2; num2 <= Math.sqrt(num); num2++)
    {
        if (num % num2 == 0)
        {
            return false;
        }
    }

    return true;
}
