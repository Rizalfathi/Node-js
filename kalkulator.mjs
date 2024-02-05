import readline from 'readline';

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function kalkulator() {
    input.question("Masukan Angka Pertama: ", angka1 => {
        console.info(angka1);
        input.question("Masukan Angka Kedua: ", angka2 => {
            console.info(angka2);
            input.question('Masukkan Operator (+,-,*,/): ', operator => {
                console.info(operator);
                if (operator === '+') {
                    console.info(`hasil penjumlahan adalah ${parseFloat(angka1) + parseFloat(angka2)}`);
                } else if (operator === '-') {
                    console.info(`hasil pengurangan adalah ${parseFloat(angka1) - parseFloat(angka2)}`);
                } else if (operator === '*') {
                    console.info(`hasil perkalian adalah ${parseFloat(angka1) * parseFloat(angka2)}`);
                } else if (operator === '/') {
                    if (parseFloat(angka2) === 0) {
                        console.info("Error: Gak Bisa Pake Angka Nol bjirrr");
                    } else {
                        console.info(`hasil pembagian adalah ${parseFloat(angka1) / parseFloat(angka2)}`);
                    }
                } else {
                    console.info("Error: Operator Enggak Bener!");
                }
                input.close();
            })
        })
    })
}

kalkulator();
