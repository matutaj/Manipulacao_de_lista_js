const service = require('./service')

async function main() {
    try {
        const result = await service.obterPessoa("2");

        // const nomes = [];
        // result.results.forEach(element => {
        //     nomes.push(element.name)
        // });

        const nomes = result.results.map(item => item.name)


        console.log("nomes", nomes)

    } catch (error) {
        console.error("Deu Ruim", error)
    }
}
main()