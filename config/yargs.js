const { describe } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        demandOption:false,
        default:false,
        describe: 'Muestra la tabla de multiplicar en la consola'
    })
    .option('h',{
        alias: 'hasta',
        type:'number',
        demandOption:false,
        default: 10,
        describe:'Hasta donde va la tabla de multipllicar'
    })
    .argv;

module.exports = argv;