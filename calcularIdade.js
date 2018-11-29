/*
* A idéia é gerar de forma simples a idade, porém colocando a data no padrão Brasileiro, pois em Inglês tinha que particionar a data para Ano-Mês-Dia.
* Sendo assim fiz algumas modificações e segue o código abaixo.
* Utilização: calcularIdade('dia/mes/ano') // document.write("Idade: " + calcularIdade('02/01/1978'));
*/
function calcularIdade(data) {
    var d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),
        split = data.split('/'),
        novadata = split[1] + "/" +split[0]+"/"+split[2],
        data_americana = new Date(novadata),
        vAno = data_americana.getFullYear(),
        vMes = data_americana.getMonth() + 1,
        vDia = data_americana.getDate(),
        ano_aniversario = +vAno,
        mes_aniversario = +vMes,
        dia_aniversario = +vDia,
        quantos_anos = ano_atual - ano_aniversario;
    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }
    return quantos_anos < 0 ? 0 : quantos_anos;
}
document.write("Idade: " + calcularIdade('02/01/1978'));
