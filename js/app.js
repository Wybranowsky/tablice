class Produkt{
    constructor(nazwa, cena){
        this.nazwa = nazwa
        this.cena = cena
    }
}

const koszyk = [
    new Produkt("Żarówka", 6.5),
    new Produkt("Kisiel", 1.5),
    new Produkt("Chipsy", 5),
    new Produkt("Czekolada", 8),
    new Produkt("Popcorn", 1.89),
    new Produkt("Masło", 7.8),
    new Produkt("Śliwki", 5.5),
    new Produkt("Ser", 3),
    new Produkt("Łosoś", 10),
    new Produkt("Arbuz", 12.9)
]

let tabela = document.getElementById("koszyk")

koszyk.forEach((index) => {
    let row = tabela.insertRow()
    let cell0 = row.insertCell(0)
    let cell1 = row.insertCell(1)
    cell0.innerHTML = index.nazwa
    cell1.innerHTML = index.cena + "zł"
})

const selectChange = () => {
    let value = document.getElementById("sort").value
    switch(value){
        case "1":
            koszyk.sort((a, b) => a.nazwa.localeCompare(b.nazwa), 'pl')
            updateTable()
            break
        case "2":
            koszyk.sort((a, b) => b.nazwa.localeCompare(a.nazwa), 'pl')
            updateTable()
            break
        case "3":
            koszyk.sort((a, b) => a.cena - b.cena)
            updateTable()
            break
        case "4":
            koszyk.sort((a, b) => b.cena - a.cena)
            updateTable()
            break
    }
}

const updateTable = () => {
    for(let i=1; i<tabela.rows.length;){
        tabela.deleteRow(i)
    }
    koszyk.forEach((index) => {
        let row = tabela.getElementsByTagName('tbody')[0].insertRow()
        let cell0 = row.insertCell(0)
        let cell1 = row.insertCell(1)
        cell0.innerHTML = index.nazwa
        cell1.innerHTML = index.cena + "zł"
    })
}