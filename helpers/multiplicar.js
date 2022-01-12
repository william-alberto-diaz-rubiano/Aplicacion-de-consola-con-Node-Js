const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar,hasta) => {

    try {
        let salida,consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${colors.green('x')} ${i} = ${colors.blue(base * i)}\n`;

        }
        
        if(listar){
            console.log(colors.green("======================"));
            console.log(`TABLA DEL ${base}`);
            console.log(colors.green("======================"));
            console.log(consola);
        }
        

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}`;
    } catch (error) {
        throw error;
    }


}

module.exports = {
    crearArchivo
}