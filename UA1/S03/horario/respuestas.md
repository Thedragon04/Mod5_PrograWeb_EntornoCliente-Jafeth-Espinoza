cacería de errores
| # | Mensaje de la consola | Archivo:línea | Corrección |
|---|---|---|---|
| 1 |El recurso de “http://127.0.0.1:5500/UA1/S03/horario/js/horario.js” se bloqueó debido a la falta de coincidencia del tipo MIME (“text/html”) (X-Content-Type-Options: nosniff).|index.html 10| src="js/horarios.js"|
| 2 |Uncaught SyntaxError: "" string literal contains an unescaped line break|horarios.js 3|Comillas dobles antes del cierre de )|
| 3 |Uncaught ReferenceError: Console is not defined|horarios.js 4| Quitar la mayuscula de Consola y dejar consola|
