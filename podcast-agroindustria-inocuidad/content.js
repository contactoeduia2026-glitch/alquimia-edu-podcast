// Guion del podcast. Si lo editas y haces commit, GitHub regenera solo las frases que cambiaron.
const PODCAST = {
  brand: "AlquimiaEdu",
  show: "Operación al Día",
  sector: "Agroindustria",
  h1: ["Inocuidad", "de campo a mesa"],
  title: "Buenas prácticas, HACCP y trazabilidad para que cada lote sea seguro",
  speakers: {
    v1: { name: "Tatiana Ospina", role: "Conductora · formadora en calidad de alimentos" },
    v2: { name: "Mauricio Gaitán", role: "Ingeniero agroindustrial, jefe de calidad en planta" },
    v3: { name: "Ximena Rojas", role: "Agrónoma, responsable de buenas prácticas y poscosecha" }
  },
  chapters: [
    { title: "Por qué importa", lines: [
      ["v1", "Hola, bienvenidos a Operación al Día, el podcast de AlquimiaEdu para quienes hacen funcionar la operación de cada sector. Soy Tatiana Ospina, y hoy hablamos de agroindustria con un tema que decide si un producto se vende o se retira: la inocuidad y la trazabilidad."],
      ["v1", "Me acompañan Mauricio Gaitán, ingeniero agroindustrial y jefe de calidad en una planta, y Ximena Rojas, agrónoma y responsable de buenas prácticas y poscosecha. Bienvenidos."],
      ["v2", "Gracias, Tatiana. Inocuidad significa que el alimento no hace daño a quien lo consume. Un producto puede verse perfecto, tener buen sabor y aun así estar contaminado. Por eso no se confía en los ojos, se confía en el sistema."],
      ["v3", "Y empieza en el campo, no en la planta. Un cultivo regado con agua contaminada, cosechado con manos sin higiene o empacado en cajas sucias ya trae el problema, y la planta no lo puede arreglar al final."],
      ["v1", "Hoy recorremos cuatro bloques: lo esencial para operarios y auxiliares, lo que manejan los técnicos de calidad y mantenimiento, lo que decide un supervisor o jefe de turno, y un caso práctico de un retiro de producto. Mauricio, empecemos con lo básico: ¿qué peligros hay?"],
      ["v2", "Se clasifican en tres. Biológicos, como bacterias, virus y parásitos, por ejemplo salmonela o E. coli. Químicos, como residuos de plaguicidas, productos de limpieza mal enjuagados, o alérgenos no declarados. Y físicos: pedazos de vidrio, metal, plástico, madera o piedras. Todo el sistema de inocuidad existe para prevenir esos tres."]
    ]},
    { title: "Primera línea: higiene y buenas prácticas", lines: [
      ["v1", "Vamos con los operarios y auxiliares, en campo o en planta. Ximena, ¿qué hábitos son innegociables?"],
      ["v3", "Empiezo por las manos. Se lavan con agua y jabón antes de empezar, después de ir al baño, tras tocar basura, tras comer o fumar y cada vez que cambies de tarea. Uñas cortas, sin joyas, cabello recogido, uniforme limpio y exclusivo para el área. Si alguien tiene diarrea, vómito, heridas infectadas o fiebre, no manipula alimentos y avisa a su jefe."],
      ["v2", "Y las zonas se respetan. Lo sucio no cruza a lo limpio: las botas se desinfectan en el pediluvio, las herramientas de la zona cruda no pasan a la zona de producto terminado, y los residuos tienen su ruta propia. Esa es la contaminación cruzada, y es de las causas más comunes de problemas."],
      ["v1", "¿Qué pasa con el agua y la limpieza?"],
      ["v3", "El agua en contacto con el cultivo o el producto debe ser de calidad verificada, con análisis periódicos. Y la limpieza se hace en dos pasos: limpiar, para retirar la suciedad visible, y desinfectar, para eliminar los microorganismos. Con las concentraciones, el tiempo de contacto y el enjuague que indica el procedimiento, ni más ni menos."],
      ["v2", "Una advertencia: mezclar productos químicos por cuenta propia es peligroso. Hay productos que al combinarse generan gases tóxicos. Se usan solo los autorizados, rotulados, y almacenados lejos de los alimentos."],
      ["v3", "Y las plagas. Roedores, aves e insectos son portadores de contaminantes. Se mantiene todo cerrado, ordenado, sin residuos acumulados, y se reporta cualquier señal: heces, mordeduras, nidos o insectos. El control de plagas lo hace una persona autorizada, no se improvisa."],
      ["v2", "Y la regla de oro: si algo se cae al piso, ya no es producto apto. Se aparta y se registra. No se recoge y se sigue como si nada."]
    ]},
    { title: "Técnicos: HACCP, puntos críticos y registros", lines: [
      ["v1", "Pasemos al nivel técnico. Mauricio, hablemos del famoso HACCP."],
      ["v2", "Son las siglas en inglés de análisis de peligros y puntos críticos de control. Es un método con siete principios. Primero, identificar los peligros del proceso. Segundo, determinar los puntos críticos de control, los pasos donde un control puede prevenir o eliminar el peligro. Tercero, fijar límites críticos, por ejemplo una temperatura y un tiempo mínimos de cocción o pasteurización."],
      ["v2", "Cuarto, establecer cómo se vigila. Quinto, definir qué hacer cuando se pasa del límite. Sexto, verificar que el sistema funciona. Y séptimo, llevar documentación y registros."],
      ["v3", "Un ejemplo de punto crítico en agroindustria: el tratamiento térmico de un jugo o un pulpa. Si no llega a la temperatura por el tiempo definido, hay riesgo biológico. El técnico mide, registra y, si hay desviación, retiene el lote."],
      ["v1", "Hablando de registros, ¿cuáles son los clave?"],
      ["v2", "Temperatura y tiempos de proceso, calibración de termómetros y balanzas, concentración de desinfectantes, limpieza y desinfección de equipos, control de plagas, análisis de laboratorio y recepción de materias primas con sus lotes. Un registro sin llenar equivale a un control que no se hizo."],
      ["v3", "Y en el campo, el registro de aplicaciones de agroquímicos: qué producto, dosis, fecha y el período de carencia, que es el tiempo mínimo entre la última aplicación y la cosecha para que no queden residuos por encima de lo permitido."],
      ["v2", "Para mantenimiento, un detalle esencial: evitar que las intervenciones contaminen. Las herramientas se cuentan antes y después de una reparación, se usan lubricantes aptos para uso alimentario donde corresponda, y se limpia y verifica el equipo antes de volver a producir."],
      ["v1", "Y los alérgenos, que se mencionan cada vez más."],
      ["v2", "Se identifican en cada producto, como maní, leche, soya, gluten o huevo, se separan en almacenamiento y producción, se limpian a fondo las líneas al cambiar de producto y se declaran bien en la etiqueta. Un alérgeno no declarado puede ser mortal para alguien."]
    ]},
    { title: "Supervisores: trazabilidad, desviaciones y retiro", lines: [
      ["v1", "Cuarto bloque: supervisores y jefes de turno. Ximena, hablemos de trazabilidad."],
      ["v3", "Es poder seguir un producto hacia atrás y hacia adelante. Hacia atrás: de qué finca, parcela y proveedor vino cada materia prima. Hacia adelante: a qué clientes llegó cada lote terminado. Se logra con códigos de lote en cada etapa y registros que conecten una etapa con la siguiente."],
      ["v2", "Y se practica. Se hacen simulacros de retiro: se elige un lote y se mide cuánto tiempo toma identificar su origen y dónde está. Si toma días, hay que mejorar. En un problema real, esas horas pueden ser la diferencia entre un incidente y una crisis."],
      ["v1", "¿Qué debe hacer un supervisor cuando hay una desviación?"],
      ["v2", "Detener o retener el producto afectado, aislarlo, identificarlo, avisar a calidad y documentar. No se decide solo si se vende o se descarta; la decisión es de calidad, con evidencia. Y se investiga la causa, para corregirla de fondo."],
      ["v3", "Los indicadores útiles son el número de no conformidades, los reclamos de clientes, los resultados de análisis microbiológicos, el cumplimiento de limpieza programada, el tiempo de respuesta a desviaciones y el resultado de auditorías."],
      ["v1", "¿Y las auditorías?"],
      ["v2", "Son una oportunidad. Los clientes grandes y los mercados de exportación exigen esquemas reconocidos de inocuidad, y una auditoría bien preparada facilita las ventas. Pero lo mejor es trabajar como si hubiera auditoría todos los días, no solo la semana anterior."],
      ["v3", "Y la cultura de inocuidad: que todos entiendan que un descuido individual afecta a miles de consumidores. Cuando el operario puede decir que algo no está bien sin temor, el sistema funciona."]
    ]},
    { title: "Errores frecuentes y cómo evitarlos", lines: [
      ["v1", "Antes del caso práctico, hablemos de errores comunes. Ximena, empecemos por el campo."],
      ["v3", "El primero es usar agua de riego o de lavado sin analizar, suponiendo que si viene del pozo o del río está bien. El agua puede cambiar con las lluvias o por actividades aguas arriba, y debe analizarse con la frecuencia definida. El segundo, aplicar abonos orgánicos sin compostar bien o demasiado cerca de la cosecha, lo que puede introducir microorganismos peligrosos."],
      ["v2", "En planta, uno clásico es registrar de memoria. Al final del turno alguien llena todas las planillas de golpe, con valores bonitos que nadie midió. Eso destruye la confianza en el sistema, y en una auditoría o un reclamo, es un problema serio, porque se vuelve evidencia falsa."],
      ["v3", "También pasa en la poscosecha: dejar el producto cosechado al sol durante horas, sin enfriar, acelera el crecimiento de microorganismos y el deterioro. Y reutilizar cajas o canastillas sin lavarlas y desinfectarlas es llevar la contaminación de un lote al siguiente."],
      ["v1", "¿Y en limpieza y desinfección?"],
      ["v2", "Dos errores recurrentes. Uno, usar la dosis de desinfectante a ojo: demasiado poca no mata los microorganismos, y demasiada deja residuos y daña los equipos. Dos, no enjuagar o no verificar. Se recomienda comprobar la limpieza con pruebas rápidas o inspección visual, y no dar por limpia una superficie solo porque se ve limpia."],
      ["v3", "Otro es el mantenimiento mal coordinado. Una reparación con producto abierto en la línea, sin tapar ni retirar, puede dejar tornillos o fragmentos. Y la humedad y las goteras sobre el producto, que también son fuente de contaminación."],
      ["v1", "¿Qué hay de los proveedores?"],
      ["v2", "Se confía demasiado en ellos. Un proveedor aprobado un día no tiene aprobación permanente. Se evalúa con auditorías, certificados vigentes y análisis de las entregas. Y al recibir, se verifica la temperatura, el estado del transporte, el empaque y el lote antes de aceptarlo."],
      ["v1", "¿Mitos que desmentir?"],
      ["v3", "Que lo orgánico o lo natural es siempre más seguro. Un producto orgánico también puede contaminarse con bacterias, y requiere los mismos controles de higiene. Y que si lo vamos a cocinar, ya se mata todo: no siempre. Las toxinas y algunas esporas resisten el calor, y el producto listo para consumir crudo, como ensaladas y frutas, no tendrá esa segunda oportunidad."],
      ["v2", "Y que la inocuidad es un tema solo del área de calidad. Es de todos: de quien cosecha, de quien transporta, de quien empaca, de quien mantiene. Calidad coordina, pero no puede estar en cada manos al mismo tiempo."]
    ]},
    { title: "Caso práctico: un lote bajo sospecha", lines: [
      ["v1", "Cerremos con una historia. Un cliente reporta que una caja de pulpa de fruta tiene un olor extraño. Mauricio, ¿qué se hace?"],
      ["v2", "Se toma el reclamo en serio desde el primer minuto. Se pide el código de lote, se busca en los registros qué día se produjo, qué materia prima se usó, qué temperaturas tuvo el tratamiento, qué personal intervino y qué otros clientes recibieron ese lote."],
      ["v3", "En campo, se mira de qué finca vino la fruta y las condiciones de cosecha y transporte. Se retienen las muestras del lote y se envían a laboratorio."],
      ["v2", "Mientras se esperan los resultados, el producto del mismo lote que aún está en bodega se retiene y se informa a los clientes sobre la situación. Si el análisis confirma el problema, se hace el retiro del mercado, se comunica a las autoridades si corresponde y se investiga la causa raíz."],
      ["v3", "Y se aprende. Quizás el registro de temperatura estaba incompleto ese día, o un proveedor cambió sin aviso. Se corrige y se refuerza. Un buen sistema no es el que nunca falla, sino el que responde rápido y mejora."]
    ]},
    { title: "Cierre: tres acciones para mañana", lines: [
      ["v1", "Vamos cerrando, con una acción concreta de cada uno. Ximena."],
      ["v3", "Para el personal de campo y planta: lávense las manos correctamente en cada cambio de tarea y no trabajen enfermos, avisen siempre."],
      ["v2", "Para técnicos: revisen sus puntos críticos de control, confirmen que los instrumentos estén calibrados y que cada registro esté completo y firmado."],
      ["v1", "Y para supervisores: elijan un lote de la semana y háganle un mini simulacro de trazabilidad: ¿qué tan rápido pueden decir de dónde vino y a dónde fue?"],
      ["v1", "Resumiendo: higiene constante, control de puntos críticos, registros confiables y trazabilidad ágil. Esto fue Operación al Día, de AlquimiaEdu. Gracias, Mauricio. Gracias, Ximena."],
      ["v2", "Gracias a ustedes. Que cada lote llegue seguro a la mesa."],
      ["v3", "Hasta pronto, y buena cosecha."]
    ]}
  ]
};
if (typeof module !== "undefined") module.exports = PODCAST;
