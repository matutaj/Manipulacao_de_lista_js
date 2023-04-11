const service = require("./service")

async function main() {
    try {
        const result = await service.obterPessoa('2')
        const nomes = [];


        console.time('for')
        for (let i = 0; i <= result.results.length - 1; i++) {
            const pessoa = result.results[i]
            nomes.push(pessoa.name)
        }
        console.timeEnd('for')

        console.time('forin')
        for (let i in result.results) {
            const pessoa = result.results[i]
            nomes.push(pessoa.name)
        }
        console.timeEnd('forin')

        console.time('forOf')
        for (pessoa of result.results) {
            nomes.push(pessoa.name);
        }
        console.timeEnd('forOf')


        console.log("nomes", nomes)

    } catch (error) {
        console.error(`error interno`.error)
    }
}

main()