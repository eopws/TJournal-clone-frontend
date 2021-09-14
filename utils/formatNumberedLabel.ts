export default function formatNumberedLabel(number: number, text_forms: string[]) {  
    let n = Math.abs(number) % 100;

    let n1 = n % 10;

    if (n > 10 && n < 20) { return number + ' ' + text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return number + ' ' + text_forms[1]; }
    if (n1 == 1)          { return number + ' ' + text_forms[0]; }

    return number + ' ' + text_forms[2];
}
