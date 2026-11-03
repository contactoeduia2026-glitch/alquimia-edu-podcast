// podcast-data.js
const PODCAST_DATA = {
  brand: "AlquimiaEdu",
  showName: "Operaciones que Sostienen",
  season: 1,
  episode: 1,
  title: "El costo invisible de un dato mal ingresado",
  sector: "Banca y Seguros",
  description: "Un análisis operativo sobre cómo un error en la captura de datos afecta la trazabilidad, el riesgo y la auditoría en el sector financiero.",
  // Voces: 1 = Valentina (Especialista), 2 = Mateo (Supervisor)
  hosts: {
    1: { name: "Valentina Ríos", role: "Especialista en Riesgo Operativo", gender: "f" },
    2: { name: "Mateo Cárdenas", role: "Supervisor de Operaciones", gender: "m" }
  },
  script: [
    { sp: 2, t: "Bienvenidos a 'Operaciones que Sostienen', el podcast de AlquimiaEdu. Soy Mateo Cárdenas, supervisor de operaciones, y hoy tenemos un tema que parece pequeño pero que nos quita el sueño en el día a día." },
    { sp: 1, t: "Hola, Mateo. Soy Valentina Ríos, especialista en riesgo operativo, y estoy totalmente de acuerdo. Hoy vamos a hablar de la trazabilidad y la calidad del dato, pero desde un enfoque muy práctico: desde el momento en que alguien digita un formulario hasta que ese dato llega a la auditoría." },
    { sp: 2, t: "Exacto. Y para empezar, pongámonos en contexto. En banca y seguros, el dato no es solo un número. Es la base de una decisión de crédito, es la razón por la que se paga o no un siniestro, y es la evidencia que un regulador va a revisar mañana. Sin embargo, en la operación diaria, a veces se ve como un simple trámite." },
    { sp: 1, t: "Y ahí está el primer error. En un banco, un operario que digita mal un número de identificación o un ingreso estimado, no está cometiendo un error administrativo menor. Está sembrando un riesgo. Si ese dato entra mal al core bancario, el sistema de scoring puede aprobar un crédito que no debía, o peor, rechazar a un cliente bueno." },
    { sp: 2, t: "Y en seguros pasa igual. Imagínate una póliza de salud. Si el asesor no registra correctamente las preexistencias o el tipo de cobertura, cuando el cliente llega con una reclamación, el área de siniestros se encuentra con una pared. El cliente reclama, con razón, y el proceso se demora semanas, no por falta de dinero, sino por falta de información confiable." },
    { sp: 1, t: "Y aquí es donde quiero traer un punto clave para nuestros oyentes que están en la operación: el costo de la no calidad. Muchas veces se mide el tiempo de atención al cliente, pero no se mide el tiempo que se pierde corrigiendo errores. Un dato mal ingresado en la apertura de una cuenta puede tomar segundos, pero corregirlo en el back office puede tomar días y requiere la intervención de tres o cuatro áreas." },
    { sp: 2, t: "Totalmente. Y eso sin contar el riesgo de cumplimiento. Estamos en un entorno donde la regulación es cada vez más estricta. Por ejemplo, con la implementación de las Finanzas Abiertas, el intercambio de datos es constante y estandarizado. Si nuestro dato interno no es limpio, el intercambio con terceros va a fallar, y eso nos puede costar sanciones o la pérdida de confianza del usuario." },
    { sp: 1, t: "Hablemos de las tres áreas donde más se rompe la cadena. Primero, la captura en el front. Segundo, la validación en el back. Y tercero, el registro para auditoría. Para los operarios y auxiliares, el mensaje es claro: no se trata de digitar rápido para cumplir la meta, se trata de digitar bien para no generar reprocesos." },
    { sp: 2, t: "Para los técnicos y especialistas, el reto es otro. Ustedes son los que reciben ese dato y lo procesan. A veces, el sistema no tiene las validaciones suficientes. ¿Qué hacen cuando detectan una inconsistencia? ¿La corrigen y siguen, o la reportan para que se arregle la causa raíz? Esa decisión es la diferencia entre un parche y una mejora real." },
    { sp: 1, t: "Y para los supervisores y jefes de turno, el llamado es a mirar los indicadores de calidad del dato. No solo el volumen de transacciones. Si un equipo procesa mil solicitudes al día, pero el veinte por ciento tienen errores que regresan al día siguiente, ese equipo no está siendo productivo, está generando caos." },
    { sp: 2, t: "Y aquí es donde entra un concepto que en AlquimiaEdu nos gusta mucho: la estandarización. En lugar de que cada uno tenga su propio método para validar un dato, se debe documentar el proceso. ¿Qué campos son obligatorios? ¿Qué formatos se validan? ¿Quién aprueba una excepción? Eso es lo que hace que una operación sea robusta, incluso cuando el volumen se dispara." },
    { sp: 1, t: "Y hablando de volumen, pensemos en la temporada de renovaciones de seguros o en los picos de solicitudes de crédito. Es justo ahí cuando la presión hace que se salten los controles. La calidad del dato no debe ser un lujo de los días tranquilos; debe ser una regla que se mantiene bajo presión. Si el proceso está bien diseñado, el operario no tiene que elegir entre ser rápido o ser correcto." },
    { sp: 2, t: "Para cerrar, me gustaría dejar tres ideas. Primera: el dato es la materia prima de la operación financiera. Si la materia prima está contaminada, el producto final va a fallar. Segunda: la trazabilidad no es un requisito de auditoría, es una herramienta para trabajar con tranquilidad. Y tercera: la calidad se construye en el front, pero se protege en el back." },
    { sp: 1, t: "Perfecto. Y en el próximo episodio de 'Operaciones que Sostienen', vamos a hablar de un tema que está en boca de todos: la automatización y la inteligencia artificial en los procesos de siniestros y cobranza. ¿Reemplazan al humano o lo potencian? Eso lo veremos la próxima semana." },
    { sp: 2, t: "Gracias por escucharnos en AlquimiaEdu. Recuerda que puedes encontrar más contenidos operativos para los sectores de salud, construcción, agroindustria y retail en nuestra plataforma. ¡Hasta la próxima!" }
  ]
};