export interface Article {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: "diseno-sistemas-escalables",
    title: "Diseño de sistemas escalables para startups",
    date: "Febrero 2026",
    readTime: "6 min",
    summary: "Cómo diseñar arquitecturas que crezcan con tu producto sin sobreingeniería innecesaria.",
    content: `Cuando una startup está en sus primeras etapas, es tentador construir la arquitectura "perfecta" desde el día uno. Sin embargo, la realidad es que la mayoría de las decisiones técnicas deben optimizarse para la velocidad de iteración, no para la escala.\n\nEl primer principio es **empezar simple**. Un monolito bien estructurado supera a una arquitectura de microservicios prematura en casi todos los casos. La complejidad operacional de manejar múltiples servicios, bases de datos y pipelines de despliegue consume tiempo que debería invertirse en entender al usuario.\n\nEl segundo principio es **identificar los cuellos de botella reales**. Antes de optimizar, mide. Herramientas como APM, logs estructurados y métricas de negocio te dirán exactamente dónde están los problemas. La intuición técnica es valiosa, pero los datos son indispensables.\n\nFinalmente, **diseña para el cambio**. Las abstracciones correctas no son las más elegantes, sino las que permiten reemplazar componentes sin reescribir todo el sistema. Interfaces claras, contratos bien definidos y tests de integración son tu mejor inversión a largo plazo.`,
  },
  {
    slug: "product-thinking-ingenieros",
    title: "Product thinking para ingenieros",
    date: "Enero 2026",
    readTime: "5 min",
    summary: "Por qué los mejores ingenieros piensan como product managers y cómo desarrollar esa mentalidad.",
    content: `La línea entre ingeniería y producto se difumina cada vez más. Los ingenieros que entienden el "por qué" detrás de cada feature construyen soluciones fundamentalmente mejores.\n\n**Empieza por el problema, no por la solución.** Antes de escribir código, pregúntate: ¿qué problema del usuario estamos resolviendo? ¿Cómo sabremos que lo resolvimos? Esta simple pregunta evita semanas de trabajo en features que nadie necesita.\n\n**Habla con usuarios.** No necesitas ser un researcher profesional. Sentarte 30 minutos con un usuario mientras usa tu producto te enseñará más que semanas de análisis de datos. Observa dónde se frustra, dónde duda, dónde sonríe.\n\n**Mide el impacto, no el output.** Líneas de código, pull requests mergeados, features entregadas — nada de esto importa si no mueve las métricas que importan al negocio. Aprende a conectar tu trabajo técnico con resultados de negocio.\n\nEsta mentalidad no reemplaza la excelencia técnica — la complementa. Un ingeniero con product thinking es exponencialmente más valioso que uno que solo ejecuta especificaciones.`,
  },
  {
    slug: "automatizacion-flujos-trabajo",
    title: "Automatización inteligente de flujos de trabajo",
    date: "Diciembre 2025",
    readTime: "7 min",
    summary: "Un enfoque práctico para identificar y automatizar los procesos que realmente importan.",
    content: `No toda automatización vale la pena. El costo de construir y mantener un sistema automatizado debe justificarse con el valor que genera. Aquí presento un framework para decidir qué automatizar y cómo hacerlo bien.\n\n**El framework de priorización** se basa en tres variables: frecuencia (¿cuántas veces se ejecuta el proceso?), tiempo (¿cuánto tarda cada ejecución?) y error (¿qué tan propenso a errores humanos es?). Si un proceso es frecuente, lento y propenso a errores, es candidato ideal.\n\n**Empieza con scripts, no con plataformas.** Un script de Python o un workflow de GitHub Actions resuelve el 80% de los casos de automatización. No necesitas una plataforma enterprise de $50k/año para enviar un reporte semanal por email.\n\n**Documenta antes de automatizar.** Si no puedes describir el proceso paso a paso en un documento, no estás listo para automatizarlo. La documentación fuerza claridad y revela edge cases que de otra forma aparecerían en producción.\n\n**Monitorea y evoluciona.** Una automatización sin monitoreo es una bomba de tiempo. Configura alertas para fallos, revisa periódicamente los resultados y adapta el sistema a medida que cambian los requisitos del negocio.`,
  },
];
