/* 
* Permite comparar se uma hora é maior ou menor que a outra
*/
function compararHora(hora1, hora2){
    var sthora1='',sthora2 = '';
    sthora1 = hora1.split(":");
    sthora2 = hora2.split(":");
    var d = new Date();
    var stdata1 = new Date(d.getFullYear(), d.getMonth(), d.getDate(), sthora1[0], sthora1[1]);
    var stdata2 = new Date(d.getFullYear(), d.getMonth(), d.getDate(), sthora2[0], sthora2[1]);

    return stdata1 > stdata2;
}
var hora1 = "23:15", hora2 =  "23:14";
document.write('Exemplo: '+ compararHora(hora1, hora2) );
// Saída - Exemplo: true
