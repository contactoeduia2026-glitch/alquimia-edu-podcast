// Guion completo del podcast. Si lo editas y haces commit, GitHub regenera solo las frases que cambiaron.
const PODCAST = {
  brand: "AlquimiaEdu",
  show: "Operación al Día",
  sector: "Banca y seguros",
  title: "Que nada se caiga en la operación: fraude, cumplimiento y siniestros bien manejados",
  lead: "Un recorrido práctico por la operación de bancos y aseguradoras, para auxiliares, técnicos y supervisores.",
  speakers: {
    camila: { name: "Camila Torres", role: "Conductora · formadora en operaciones financieras", color: "#0e7c86" },
    andres: { name: "Andrés Mejía", role: "Analista de riesgo operativo y fraude", color: "#c2410c" },
    marcela: { name: "Marcela Quintero", role: "Jefa de siniestros en una aseguradora", color: "#6d4c9f" }
  },
  chapters: [
    { title: "Bienvenida y mapa de la operación", lines: [
      ["camila", "Hola, bienvenidos a Operación al Día, el podcast de AlquimiaEdu para quienes hacen que la banca y los seguros funcionen todos los días. Soy Camila Torres, y hoy hablamos del sector financiero y asegurador desde donde de verdad se sostiene: la operación."],
      ["camila", "Me acompañan dos invitados. Andrés Mejía, analista de riesgo operativo y fraude. Y Marcela Quintero, jefa de siniestros en una aseguradora. Andrés, Marcela, bienvenidos."],
      ["andres", "Gracias, Camila. Un gusto estar aquí, sobre todo para hablar de lo que casi nunca sale en las noticias: lo que pasa entre que el cliente pide algo y el sistema lo cumple."],
      ["marcela", "Igual para mí. En seguros el cliente nos conoce en su peor día, cuando tiene un siniestro. Y ahí la calidad de la operación se nota inmediatamente."],
      ["camila", "Vamos a organizar la conversación en cuatro bloques: primero, un mapa de dónde se juega el riesgo; segundo, lo que le toca al personal de primera línea; tercero, lo que ven los técnicos y analistas; y cuarto, lo que decide un supervisor o jefe de turno. Al final, tres acciones para llevarse mañana."],
      ["camila", "Andrés, empecemos por el mapa. ¿Dónde se pierde dinero o confianza en una operación bancaria?"],
      ["andres", "En los traspasos. Casi todo incidente nace cuando una tarea pasa de una persona a otra, o de un sistema a otro, y nadie verifica lo que recibió. Una solicitud mal digitada en la sucursal, un documento sin firma, una conciliación que nadie revisó, una alerta que quedó en una bandeja."],
      ["marcela", "En seguros es idéntico. El expediente de un siniestro pasa por el call center, por el ajustador, por el área técnica y por pagos. Si en cualquiera de esos pasos falta un documento, el cliente espera semanas y nos termina costando el doble."],
      ["andres", "Por eso en riesgo operativo hablamos de causas, no de culpables. Las personas, los procesos, la tecnología y los eventos externos. Si solo buscas a quién regañar, el error vuelve a ocurrir con otra persona."]
    ]},
    { title: "Primera línea: conocer al cliente y frenar el fraude", lines: [
      ["camila", "Pasemos a la primera línea: cajeros, asesores de sucursal, personal de contact center, auxiliares de vinculación. Andrés, ¿qué es lo más importante que debe dominar esa persona?"],
      ["andres", "Conocer bien al cliente. Se llama debida diligencia, o KYC por sus siglas en inglés. Es verificar quién es la persona, a qué se dedica, de dónde viene su dinero y para qué usa el producto. No es un trámite para estorbar; es la primera barrera contra el lavado de activos."],
      ["camila", "Y en Colombia, como en buena parte de la región, esto se enmarca en sistemas de administración del riesgo de lavado, como el SARLAFT en las entidades vigiladas por la Superintendencia Financiera."],
      ["andres", "Exacto. Y lo práctico para el auxiliar es esto: ante una operación inusual, no se investiga ni se acusa al cliente. Se documenta lo que se observó y se reporta por el canal interno, con rapidez y con reserva. Decidir si hay un reporte a la autoridad le corresponde al oficial de cumplimiento, no a la ventanilla."],
      ["marcela", "Y algo que enseñamos mucho: jamás avisarle al cliente que su operación fue reportada. Eso se llama alertar, y puede acarrear sanciones."],
      ["camila", "Hablemos de fraude, que es lo que más preocupa. ¿Cuáles son hoy los casos más frecuentes?"],
      ["andres", "La ingeniería social domina. Alguien llama o escribe haciéndose pasar por el banco, por la aseguradora o incluso por un compañero, y convence al cliente de entregar una clave o un código de un solo uso, lo que llamamos OTP. También crece el cambio de SIM, o SIM swap: el delincuente consigue una copia de la línea del cliente y recibe sus códigos."],
      ["camila", "¿Y cómo lo detecta alguien de primera línea?"],
      ["andres", "Con señales. Un cliente nervioso que dice que le están pidiendo mover dinero ya mismo. Una persona mayor acompañada de alguien que responde por ella. Un cambio de celular o de correo seguido, a las pocas horas, de un retiro grande. La regla de oro: ningún funcionario legítimo pide claves ni códigos, y eso se lo debemos repetir al cliente en cada contacto."],
      ["marcela", "En seguros vemos el fraude documental: facturas alteradas, siniestros inflados, incluso pólizas contratadas después del hecho. El auxiliar debe mirar fechas, firmas y coherencia, y escalar cuando algo no cuadra, sin hacer juicios."],
      ["camila", "Una cosa más para este bloque: el manejo de datos personales. Un auxiliar maneja cédulas, saldos, historiales médicos en seguros de salud. ¿Cuál es el hábito clave?"],
      ["andres", "Pedir y compartir solo lo necesario. Nada de fotos de documentos por chat personal, nada de pantallas con datos a la vista, y confirmar la identidad antes de dar cualquier información. La ley de protección de datos exige consentimiento y finalidad, y una filtración daña la reputación de toda la entidad."]
    ]},
    { title: "Técnicos y analistas: pagos, conciliación y siniestros", lines: [
      ["camila", "Subimos un nivel. Los técnicos y analistas: operaciones, conciliación, soporte de canales, tramitadores y liquidadores de siniestros. Andrés, el mundo de los pagos cambió mucho."],
      ["andres", "Muchísimo. Los pagos inmediatos entre cuentas, como Bre-B en Colombia, hacen que el dinero llegue en segundos. Eso es excelente para el cliente, pero reduce a casi cero el tiempo para detectar un error o un fraude. Antes tenías horas para revertir; hoy tienes minutos, o ninguno."],
      ["camila", "Entonces, ¿qué cambia para quien opera?"],
      ["andres", "Los controles tienen que ir antes de la transacción, no después. Reglas de monitoreo en línea, límites por cliente, validación del destinatario y alertas que lleguen a una persona con autoridad para actuar. Y la conciliación diaria, tan poco glamorosa, se vuelve vital: comparar lo que dice el sistema contra lo que dicen los extractos, y cerrar cada diferencia."],
      ["marcela", "En seguros, el equivalente es el expediente completo desde el primer día. Si un tramitador recibe el reclamo con aviso, documentos, fotos y peritaje bien clasificados, el pago puede salir rápido. Si no, empieza el ir y venir."],
      ["camila", "Marcela, cuéntanos cómo se ve un siniestro bien manejado de principio a fin."],
      ["marcela", "Primero, el aviso: registrarlo con fecha y hora exactas, porque ahí corren los plazos. Segundo, verificar cobertura: que la póliza estuviera vigente, que el riesgo esté amparado, qué exclusiones aplican. Tercero, la documentación: lo mínimo necesario, pedido una sola vez y por escrito."],
      ["marcela", "Cuarto, la inspección o el peritaje. Quinto, la liquidación, donde se calcula el valor con base en las condiciones de la póliza: deducibles, límites, depreciación si corresponde. Y sexto, el pago o la objeción. Si se objeta, debe ser una decisión motivada, clara, que el cliente pueda entender y, si quiere, reclamar."],
      ["andres", "Y eso conecta con algo importante: el trato justo al consumidor financiero. Plazos de respuesta, información clara, atención de quejas. Un siniestro mal explicado termina en una queja ante la superintendencia, y eso es costoso para todos."],
      ["camila", "Un tema que no podemos dejar por fuera: la inteligencia artificial. Está llegando a la operación, ¿cómo la ven?"],
      ["marcela", "Como una ayuda, no como un juez. Nos sirve para leer documentos, clasificar reclamos, detectar patrones sospechosos y priorizar casos. Pero la decisión de negar un siniestro o de bloquear a un cliente la debe revisar una persona, con criterio y con trazabilidad."],
      ["andres", "Coincido. Un modelo puede equivocarse o tener sesgos. Por eso pedimos que cada alerta automática tenga una explicación, un responsable y un registro. Si no sabes por qué el sistema tomó una decisión, no puedes defenderla ante el cliente ni ante el supervisor."],
      ["camila", "También se habla mucho de finanzas abiertas, que el cliente pueda compartir sus datos con otras entidades."],
      ["andres", "Sí, y lo que cambia en la práctica es el consentimiento. El cliente autoriza qué datos se comparten, con quién y por cuánto tiempo, y la entidad debe poder demostrarlo y respetar la revocatoria. Para el técnico, significa registros ordenados y permisos bien configurados."]
    ]},
    { title: "Supervisores y jefes de turno: indicadores y continuidad", lines: [
      ["camila", "Cuarto bloque: supervisores y jefes de turno. Ustedes coordinan equipos, cumplen metas y apagan incendios. Marcela, ¿qué indicadores miran primero?"],
      ["marcela", "Pocos y claros. Tiempo promedio de respuesta, casos pendientes por antigüedad, porcentaje de casos resueltos sin devolver, y errores por mil operaciones. En siniestros, además, el tiempo desde el aviso hasta el pago, y cuántos expedientes se devuelven por documentos incompletos."],
      ["andres", "Yo agregaría los acuerdos de nivel de servicio, los SLA: cuánto nos comprometimos a tardar y cuánto tardamos de verdad. Y el seguimiento de incidentes: cuántos hubo, de qué tipo y si la causa raíz quedó cerrada o solo la tapamos."],
      ["camila", "¿Cómo se gestiona un turno para que esos números mejoren?"],
      ["marcela", "Empieza con una reunión corta de arranque: qué quedó pendiente del turno anterior, qué volumen se espera, quién está ausente. Se reparte el trabajo por prioridad, no por quién grita más. Y se cierra el turno con un traspaso escrito, para que el siguiente no tenga que adivinar."],
      ["andres", "Y hay que proteger los controles cuando hay presión. Fin de mes, cierre de campaña, temporada de reclamos por lluvias. Es justo cuando alguien propone saltarse una validación para ir más rápido. Un buen supervisor dice que no, y consigue refuerzo en lugar de recortar el control."],
      ["camila", "Hablemos de continuidad. ¿Qué pasa si se cae un sistema o una sede?"],
      ["andres", "Debe existir un plan de continuidad del negocio probado, no solo escrito. Saber qué procesos son críticos, qué se hace a mano mientras tanto, a quién se llama y en cuánto tiempo hay que recuperar. Y practicarlo con simulacros, porque en la crisis nadie improvisa bien."],
      ["marcela", "Y la comunicación al cliente: decirle a tiempo qué pasó, qué se está haciendo y cuándo se normaliza. La transparencia protege la confianza."],
      ["camila", "Y mejora continua, ¿cómo la aplican?"],
      ["marcela", "Con ciclos pequeños. Cada semana tomamos el error más repetido, buscamos la causa con la técnica de los cinco porqués, y cambiamos algo concreto: un campo obligatorio, una lista de verificación, una capacitación de diez minutos. Si no se cambia el proceso, el error vuelve."],
      ["andres", "Y que el personal de primera línea pueda proponer. Ellos ven el problema antes que cualquier tablero. Una cultura donde reportar un error no se castiga es la mejor herramienta de riesgo que existe."]
    ]},
    { title: "Caso práctico: un fin de mes con presión", lines: [
      ["camila", "Antes de cerrar, quiero que pongamos todo esto en una historia. Imaginemos un último viernes del mes, con filas largas, campañas activas y el sistema lento. Andrés, empecemos."],
      ["andres", "A las diez de la mañana, una auxiliar de sucursal atiende a un cliente que quiere subir su límite de transferencias y cambiar su número de celular, todo en la misma visita. Dice que viaja y tiene afán. Además, llegó con una persona que contesta por él."],
      ["camila", "Tres señales juntas. ¿Qué debería hacer la auxiliar?"],
      ["andres", "Frenar con amabilidad. Validar la identidad con los controles establecidos, hablar directamente con el cliente, y explicarle que por su seguridad el cambio de celular y el aumento de límite se hacen con una verificación adicional. Si algo no le cuadra, consulta a su supervisor antes de ejecutar. Esa pausa de cinco minutos puede evitar una pérdida enorme."],
      ["marcela", "Mientras tanto, en la aseguradora, llega un reclamo por daños en un local comercial tras una inundación. El cliente exige pago inmediato porque necesita reabrir. Hay presión comercial y emocional, y el expediente tiene solo cuatro fotos."],
      ["camila", "Marcela, ¿cómo se equilibra la empatía con el rigor?"],
      ["marcela", "Con comunicación clara. Le decimos al cliente exactamente qué documentos faltan, cuándo viene el perito y en qué plazo recibirá una respuesta. A veces se puede hacer un pago anticipado parcial cuando la cobertura es evidente. Lo que no se hace es saltarse la verificación para quedar bien; eso nos expone a pagar algo que no está amparado, o a un fraude."],
      ["andres", "Y en el área técnica, ese mismo viernes, la conciliación de la tarde arroja una diferencia con un banco corresponsal. Un analista novato la deja para el lunes porque el equipo está saturado."],
      ["camila", "Y ahí entra el supervisor."],
      ["marcela", "Exacto. El buen supervisor revisa el tablero a mediodía, ve que hay una diferencia abierta, y la prioriza. Una diferencia sin cerrar en un fin de mes puede esconder un pago duplicado o una operación no autorizada, y el fin de semana alguien puede aprovecharlo."],
      ["andres", "Lo que une las tres escenas es lo mismo: señales pequeñas, atendidas a tiempo, con un responsable claro. Cuando la operación está bajo presión, las listas de verificación y el escalamiento oportuno son lo que separa un viernes tranquilo de un lunes de crisis."],
      ["camila", "Y después del viernes, lo que más valor tiene es revisar qué pasó. Marcela, ¿cómo se hace esa revisión sin que se vuelva un tribunal?"],
      ["marcela", "Con una reunión corta de aprendizaje, sin culpas. Qué pasó, qué señales hubo, qué decidimos y qué cambiamos. Dejamos por escrito una sola mejora, con nombre y fecha, y la revisamos la semana siguiente."]
    ]},
    { title: "Cierre: tres acciones para mañana", lines: [
      ["camila", "Vamos cerrando. Les pido a cada uno una acción concreta, la que más valor dé al que nos escucha. Marcela, empieza tú."],
      ["marcela", "Para el personal de primera línea y los tramitadores: revisen hoy su lista de documentos mínimos y pídanlos completos desde el primer contacto. Un expediente completo al inicio ahorra semanas al final."],
      ["andres", "Para técnicos y analistas: elijan un control que hoy ocurra después del hecho y pregúntense si puede moverse antes. Y para todos: nunca compartan ni pidan claves, jamás, bajo ninguna presión."],
      ["camila", "Y mi acción para supervisores: implementen el traspaso escrito de turno esta misma semana. Es gratis, es rápido y evita muchísimos errores."],
      ["camila", "Resumiendo: conocer al cliente, controlar antes de que ocurra el problema, decidir con personas y no solo con algoritmos, y medir lo que importa. Esto fue Operación al Día, de AlquimiaEdu. Gracias, Andrés. Gracias, Marcela."],
      ["andres", "Gracias a ustedes por escuchar. Cuídense y cuiden a sus clientes."],
      ["marcela", "Hasta pronto. Que tengan una operación sin sobresaltos."]
    ]}
  ]
};
if (typeof module !== "undefined") module.exports = PODCAST;
