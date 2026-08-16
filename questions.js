const option = (text, primary, secondary) => ({ text, scores: { [primary]: 2, [secondary]: 1 } });
const question = (kicker, title, answers) => ({ kicker, title, answers });

export const questions = [
  question("PARA EMPEZAR", "Cuando aprendes algo nuevo, ¿qué te produce más satisfacción?", [
    option("Ver cómo otra persona lo entiende gracias a tu explicación", "teaching", "support"), option("Descubrir cómo funciona por dentro", "backend", "data"), option("Encontrar patrones que otros no ven", "data", "backend"), option("Hacer que una herramienta sea más fácil de usar", "ux", "frontend")
  ]),
  question("PARA EMPEZAR", "Al entrar a una herramienta desconocida, ¿qué haces primero?", [
    option("Busco una guía y luego pienso cómo explicársela a alguien", "teaching", "support"), option("Exploro los menús y pruebo qué pasa al cambiar algo", "frontend", "backend"), option("Reviso qué información muestra y cómo está organizada", "data", "ux"), option("Me fijo en qué parte podría confundir a una persona", "ux", "teaching")
  ]),
  question("TU ENERGÍA", "En un proyecto, ¿qué papel sueles asumir naturalmente?", [
    option("Acompañar, organizar y mantener al equipo enfocado", "teaching", "support"), option("Resolver el problema difícil que nadie quiere tocar", "backend", "frontend"), option("Poner orden en la información y tomar decisiones", "data", "backend"), option("Escuchar a las personas y mejorar su experiencia", "ux", "support")
  ]),
  question("TU ENERGÍA", "¿Qué tipo de tarea te hace perder la noción del tiempo?", [
    option("Preparar una explicación con ejemplos sencillos", "teaching", "ux"), option("Construir una interacción y verla funcionar", "frontend", "ux"), option("Conectar procesos para que algo ocurra automáticamente", "backend", "data"), option("Ayudar a alguien a salir de un bloqueo", "support", "teaching")
  ]),
  question("TU CURIOSIDAD", "¿Qué te gustaría poder crear o mejorar?", [
    option("Clases y recursos para que otros ganen confianza", "teaching", "ux"), option("Una interfaz web que otras personas puedan usar", "frontend", "ux"), option("Un reporte que ayude a entender qué está pasando", "data", "frontend"), option("La forma en que una persona interactúa con un producto", "ux", "frontend")
  ]),
  question("TU CURIOSIDAD", "¿Qué pregunta te daría más ganas de investigar?", [
    option("¿Cómo puedo explicar este tema de otra manera?", "teaching", "support"), option("¿Qué sucede detrás de este botón?", "backend", "frontend"), option("¿Qué historia cuentan estos números?", "data", "ux"), option("¿Por qué esta experiencia se siente complicada?", "ux", "support")
  ]),
  question("EN LA PRÁCTICA", "Algo deja de funcionar. ¿Qué haces primero?", [
    option("Pregunto qué estaba intentando hacer la persona", "support", "teaching"), option("Investigo, pruebo hipótesis y busco la causa", "backend", "data"), option("Reviso los datos para confirmar cuándo y cómo ocurre", "data", "backend"), option("Observo el recorrido para detectar dónde se confunde", "frontend", "ux")
  ]),
  question("EN LA PRÁCTICA", "Tienes que mejorar un proceso repetitivo. ¿Qué enfoque te atrae más?", [
    option("Crear una guía para que todos puedan hacerlo bien", "teaching", "support"), option("Convertirlo en una interfaz rápida y clara", "frontend", "ux"), option("Automatizar los pasos que ocurren detrás", "backend", "data"), option("Medir el proceso para encontrar dónde se pierde tiempo", "data", "support")
  ]),
  question("LO QUE VALORAS", "¿Qué tipo de impacto te gustaría dejar con tu trabajo?", [
    option("Que alguien diga: ‘ahora sí lo puedo hacer’", "teaching", "support"), option("Construir algo útil que antes no existía", "backend", "frontend"), option("Convertir información en decisiones más inteligentes", "data", "backend"), option("Hacer que el día a día de otros sea más simple", "support", "ux")
  ]),
  question("LO QUE VALORAS", "¿Qué resultado te haría sentir que un proyecto valió la pena?", [
    option("Que más personas ganen autonomía", "teaching", "ux"), option("Que el producto responda rápido y sin errores", "backend", "support"), option("Que una pantalla se entienda sin instrucciones", "ux", "frontend"), option("Que una decisión esté respaldada por evidencia", "data", "support")
  ]),
  question("TU ESTILO", "¿Qué frase te representa mejor?", [
    option("Tengo paciencia para explicar las cosas de varias maneras", "teaching", "ux"), option("Me gusta experimentar hasta que algo funciona", "frontend", "backend"), option("Los detalles y la lógica me ayudan a ver el panorama", "data", "backend"), option("Siempre encuentro una forma más clara de organizarlo", "ux", "teaching")
  ]),
  question("TU ESTILO", "Cuando recibes comentarios sobre tu trabajo, ¿qué te resulta más útil?", [
    option("Una conversación que me permita acompañar mejor", "teaching", "support"), option("Un caso concreto para reproducir y corregir", "backend", "frontend"), option("Datos que me ayuden a medir el cambio", "data", "backend"), option("Observar cómo una persona usa lo que hice", "ux", "frontend")
  ]),
  question("TU ENTORNO IDEAL", "¿En qué situación te sentirías más útil?", [
    option("Guiando un taller de ofimática o programación", "teaching", "support"), option("Creando soluciones con código y herramientas digitales", "backend", "frontend"), option("Analizando resultados para proponer el siguiente paso", "data", "ux"), option("Ayudando a alguien a resolver un reto técnico", "support", "teaching")
  ]),
  question("TU ENTORNO IDEAL", "¿Qué ambiente de trabajo te ayudaría a dar lo mejor?", [
    option("Un espacio donde pueda explicar, preguntar y acompañar", "teaching", "support"), option("Un equipo que construya y lance productos con frecuencia", "frontend", "backend"), option("Un contexto con información para explorar con calma", "data", "backend"), option("Un equipo que observe y mejore la experiencia de sus usuarios", "ux", "frontend")
  ]),
  question("TU IMPACTO", "Si pudieras resolver una sola necesidad, ¿cuál elegirías?", [
    option("Hacer accesible una habilidad digital", "teaching", "support"), option("Reducir trabajo manual con una herramienta", "backend", "data"), option("Ayudar a entender una situación con un tablero", "data", "ux"), option("Diseñar un camino más amable para completar una tarea", "ux", "frontend")
  ]),
  question("TU IMPACTO", "¿Qué te gustaría que otras personas dijeran después de usar tu trabajo?", [
    option("‘Por fin pude aprenderlo’", "teaching", "ux"), option("‘Esto funciona justo como esperaba’", "frontend", "ux"), option("‘Ahora el proceso es mucho más rápido’", "backend", "support"), option("‘Ahora entiendo qué decisión tomar’", "data", "teaching")
  ]),
  question("TU RITMO", "¿Qué tipo de progreso te motiva más?", [
    option("Ver que alguien avanza paso a paso", "teaching", "support"), option("Ver una idea convertirse en una interfaz", "frontend", "backend"), option("Ver que un sistema hace más con menos esfuerzo", "backend", "data"), option("Ver una tendencia aparecer en la información", "data", "ux")
  ]),
  question("TU RITMO", "Cuando tienes muchas horas para una tarea, ¿en qué las invertirías?", [
    option("Pulir ejemplos y anticipar dudas", "teaching", "ux"), option("Probar distintas formas de resolverlo", "frontend", "ux"), option("Ordenar la lógica para que sea mantenible", "backend", "data"), option("Comparar alternativas antes de decidir", "data", "support")
  ]),
  question("TU EQUIPO", "¿Qué aportas con más naturalidad cuando trabajas con otras personas?", [
    option("Claridad para explicar y unir puntos de vista", "teaching", "ux"), option("Ideas para convertir conceptos en algo visible", "frontend", "ux"), option("Una solución sólida cuando aparecen restricciones", "backend", "frontend"), option("Preguntas que ayudan a descubrir patrones", "data", "teaching")
  ]),
  question("TU EQUIPO", "¿Qué tipo de colaboración te resulta más estimulante?", [
    option("Diseñar una actividad para que otros aprendan", "teaching", "ux"), option("Trabajar con diseño para convertirlo en una interfaz", "frontend", "ux"), option("Coordinar servicios, reglas y automatizaciones", "backend", "support"), option("Traducir necesidades de usuarios en mejoras concretas", "support", "ux")
  ]),
  question("TU CRECIMIENTO", "¿Qué habilidad te gustaría desarrollar durante el próximo año?", [
    option("Facilitación y creación de cursos digitales", "teaching", "ux"), option("HTML, CSS, JavaScript y componentes", "frontend", "ux"), option("APIs, bases de datos y automatizaciones", "backend", "data"), option("Visualización, métricas y toma de decisiones", "data", "backend")
  ]),
  question("TU CRECIMIENTO", "¿Qué pequeño proyecto empezarías este fin de semana?", [
    option("Una guía o taller de ofimática para alguien cercano", "teaching", "support"), option("Una página personal con una interacción", "frontend", "ux"), option("Un script que ahorre tiempo en una tarea", "backend", "data"), option("Una maqueta de una app más clara y accesible", "ux", "frontend")
  ]),
  question("PARA CERRAR", "Si tuvieras una tarde libre para explorar TI, ¿qué elegirías?", [
    option("Preparar una mini clase para compartirla", "teaching", "support"), option("Seguir un tutorial y construir un proyecto", "frontend", "backend"), option("Jugar con una hoja de cálculo y sacar conclusiones", "data", "ux"), option("Rediseñar una pantalla para que se entienda mejor", "ux", "frontend")
  ]),
  question("PARA CERRAR", "¿Cuál de estas frases te gustaría que guiara tu siguiente paso?", [
    option("Puedo ayudar a otros a sentirse capaces con la tecnología", "teaching", "support"), option("Puedo construir productos que las personas disfruten usar", "frontend", "ux"), option("Puedo hacer que los sistemas trabajen mejor", "backend", "data"), option("Puedo encontrar sentido y compartirlo con claridad", "data", "teaching")
  ])
];
