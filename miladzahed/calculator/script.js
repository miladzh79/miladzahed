var vari = '';
var sum = [];
function Func(x) {

    switch (x) {
        case 0:
            document.getElementById("LCD").innerHTML += '0';
            vari += '0';
            break;
        case 1:
            document.getElementById("LCD").innerHTML += '1';
            vari += '1';
            break;

        case 2:
            document.getElementById("LCD").innerHTML += '2';
            vari += '2';
            break;

        case 3:
            document.getElementById("LCD").innerHTML += '3';
            vari += '3';
            break;

        case 4:
            document.getElementById("LCD").innerHTML += '4';
            vari += '4';
            break;

        case 5:
            document.getElementById("LCD").innerHTML += '5';
            vari += '5';
            break;

        case 6:
            document.getElementById("LCD").innerHTML += '6';
            vari += '6';
            break;
        case 7:
            document.getElementById("LCD").innerHTML += '7';
            vari += '7';
            break;
        case 8:
            document.getElementById("LCD").innerHTML += '8';
            vari += '8';
            break;
        case 9:
            document.getElementById("LCD").innerHTML += '9';
            vari += '9';
            break;
        case '.':
            document.getElementById("LCD").innerHTML += '.';
            vari += '.';
            break;    
        case '+':
            document.getElementById("LCD").innerHTML += '+';
            sum.push(vari);
            sum.push('+');
            vari = '';
            break;
        case '*':
            document.getElementById("LCD").innerHTML += '*';
            sum.push(vari);
            sum.push('*');
            vari = '';
            break;
        case '-':
            document.getElementById("LCD").innerHTML += '-';
            sum.push(vari);
            sum.push('-');
            vari = '';
            break;
        case '/':
            document.getElementById("LCD").innerHTML += '/';
            sum.push(vari);
            sum.push('/');
            vari = '';
            break;
        case 'c':
            document.getElementById("LCD").innerHTML = '';
            sum = [];
            vari = '';
            break;
        case '=':
            sum.push(vari);
            while (sum.length != 1) {
                for (let i = 1; i < sum.length; i += 2) {
                    if (sum[i] == '*') {
                        a = parseFloat(parseFloat(sum[i - 1]) * parseFloat(sum[i + 1]));
                        sum[i] = a;
                        sum.splice((i - 1), 1);
                        sum.splice(i, 1);
                    }
                }
                for (let i = 1; i < sum.length; i += 2) {
                    if (sum[i] == '/') {
                        a = parseFloat(parseFloat(sum[i - 1]) / parseFloat(sum[i + 1]));
                        sum[i] = a;
                        sum.splice((i - 1), 1);
                        sum.splice(i, 1);
                    }
                }

                for (let i = 1; i <= sum.length; i = i + 2) {

                    if (sum[i] == '+') {
                        a = parseFloat(parseFloat(sum[i - 1]) + parseFloat(sum[i + 1]));
                        sum[i] = a;
                        sum.splice((i - 1), 1);
                        sum.splice(i, 1);
                    }
                }
                for (let i = 1; i < sum.length; i += 2) {
                    if (sum[i] == '-') {
                        a = parseFloat(parseFloat(sum[i - 1]) - parseFloat(sum[i + 1]));
                        sum[i] = a;
                        sum.splice((i - 1), 2);
                        sum.splice(i, 1);
                    }
                }
            }
            document.getElementById("LCD").innerHTML = sum;
            break;
    }

}


