/* 
* Permite verificar se a hora é verdadeira ou falsa no padrão de horas 24h
*/
function validaHora(hr){
    var vt = hr.split(":");
    if( vt[0] >= 0 && vt[0] <= 23 && vt[1] >= 0 && vt[1] <= 59 ){ return true;}	else{ return false;}
}
var hrs = "23:15"
document.write('Exemplo: '+ validaHora(hrs) );
// Saída - Exemplo: true
