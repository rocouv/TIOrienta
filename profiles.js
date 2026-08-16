export const profileOrder = ["teaching", "frontend", "backend", "data", "ux", "support"];

export const profiles = {
  teaching: { title: "Docencia tecnológica", icon: "✦", description: "Tu fortaleza está en traducir lo complejo a algo cercano y acompañar a otros mientras aprenden.", fit: "La paciencia, la comunicación y el gusto por ayudar son habilidades centrales para enseñar ofimática, herramientas digitales o programación.", step: "Crea una mini clase de 15 minutos sobre una herramienta que ya domines.", label: "Docencia tecnológica" },
  frontend: { title: "Desarrollo frontend", icon: "</>", description: "Te atrae construir la parte visible de los productos digitales: aquello con lo que las personas interactúan.", fit: "Tu mezcla de curiosidad, lógica y sensibilidad por la experiencia encaja con HTML, CSS, JavaScript y desarrollo de interfaces.", step: "Construye una landing sencilla con HTML y CSS, y después agrega una interacción con JavaScript.", label: "Frontend" },
  backend: { title: "Backend y automatización", icon: "{ }", description: "Te interesa la lógica que hace que una aplicación funcione detrás de escena.", fit: "Tu gusto por investigar causas y resolver problemas puede llevarte a APIs, bases de datos, scripts y automatizaciones.", step: "Automatiza una tarea repetitiva con un script guiado y documenta cómo funciona.", label: "Backend" },
  data: { title: "Datos y análisis", icon: "∿", description: "Tienes una mirada analítica: disfrutas encontrar sentido, orden y patrones en la información.", fit: "Tu atención al detalle puede ayudarte a trabajar con hojas de cálculo, reportes y visualización de datos.", step: "Elige una hoja de cálculo cotidiana y crea un gráfico que cuente su historia.", label: "Datos y análisis" },
  ux: { title: "UI/UX y experiencia digital", icon: "◌", description: "Te importa cómo se sienten las herramientas y buscas que las personas puedan usarlas sin esfuerzo.", fit: "La empatía y tu ojo para la claridad son una base sólida para investigación UX, arquitectura de información y diseño UI.", step: "Observa una app que uses a diario y rediseña una pantalla en Figma o en papel.", label: "UI/UX" },
  support: { title: "Soporte y soluciones", icon: "↗", description: "Eres de las personas que dan calma: escuchas, ordenas el problema y encuentras una salida práctica.", fit: "La escucha, el método y la orientación al servicio son esenciales en soporte técnico y operaciones digitales.", step: "Ayuda a alguien con un reto digital y escribe los pasos para resolverlo.", label: "Soporte IT" }
};

const hybridDetails = {
  "backend|data": ["Ingeniería de datos y automatización", "Puedes unir sistemas, scripts y análisis para convertir información en decisiones útiles."],
  "backend|frontend": ["Desarrollo full-stack", "Tu combinación apunta a construir productos completos, desde la interfaz hasta la lógica que los sostiene."],
  "backend|support": ["Operaciones técnicas y DevOps", "Te puede encajar mantener sistemas confiables y resolver problemas técnicos de principio a fin."],
  "backend|ux": ["Product design técnico", "Puedes conectar la lógica de un producto con una experiencia clara, accesible y fácil de usar."],
  "data|teaching": ["Formación en Excel, Power BI y análisis", "Puedes convertir datos y herramientas de oficina en aprendizajes claros para otras personas."],
  "data|ux": ["Visualización de datos y BI", "Tu perfil puede destacar al transformar información compleja en historias visuales fáciles de entender."],
  "frontend|support": ["Implementación y soporte web", "Puedes crear interfaces y acompañar a las personas cuando necesitan hacerlas funcionar."],
  "frontend|teaching": ["Instructor de desarrollo web", "Tu capacidad para crear interfaces se combina con una vocación natural para explicar."],
  "frontend|ux": ["UI Developer", "Tu punto fuerte puede estar en convertir decisiones de diseño en interfaces accesibles y funcionales."],
  "support|teaching": ["Formación en ofimática y alfabetización digital", "Puedes enseñar herramientas prácticas desde la empatía y la resolución de problemas reales."],
  "support|ux": ["Investigación UX y diseño de servicios", "Escuchar problemas reales y mejorar experiencias puede ser tu combinación diferencial."],
  "data|support": ["Soporte analítico y operaciones", "Tu orden y orientación al servicio pueden ayudarte a resolver incidencias con evidencia."],
  "data|frontend": ["Frontend orientado a visualización", "Puedes combinar interfaces con gráficos, dashboards y productos que cuentan historias con datos."],
  "teaching|ux": ["Diseño instruccional digital", "Tu empatía puede ayudarte a crear experiencias de aprendizaje claras y agradables."],
  "backend|teaching": ["Instructor de programación", "Puedes enseñar programación desde la lógica, la práctica y la paciencia."]
};

export function getHybridDetails(first, second) {
  const key = [first, second].sort().join("|");
  return hybridDetails[key] ?? [profiles[first].title, profiles[first].description];
}
