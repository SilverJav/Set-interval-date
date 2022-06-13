function mostrarFecha() {
  const d = new Date();

  let dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  let nomSemana = dias[d.getDay()];
  let dia = d.getDate();
  let mes = meses[d.getMonth()];
  let año = d.getFullYear();
  let hora = d.getHours();
  let minutos = d.getMinutes();
  let segundos = d.getSeconds();

  let mensaje = `Hoy es ${nomSemana} ${dia} de ${mes} del año ${año}, y son las ${hora} horas con ${minutos} minutos y ${segundos} segundos.`
  alert(mensaje)
}
mostrarFecha();







