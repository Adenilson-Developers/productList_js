function cadProdutos(nomeProduto, qtdProduto, precoProduto){
    console.log('Chamou a função')
    let tb = document.getElementById("tabProdutos")
    let qtdRows = tb.rows.length;
    let row = tb.insertRow(qtdRows)

    let cellulaCodigo = row.insertCell(0)
    let celulaNome = row.insertCell(1)
    let celulaQtdProtudo = row.insertCell(2)
    let celularPreco = row.insertCell(3)

    cellulaCodigo.innerHTML = qtdRows;
    celulaNome.innerHTML = nomeProduto;
    celulaQtdProtudo.innerHTML = qtdProduto;
    celularPreco.innerHTML = precoProduto;

}