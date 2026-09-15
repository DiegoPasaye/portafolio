# Auditoría SEO y GEO — diegopasaye.dev

**Fecha:** 15 de septiembre de 2026  
**Alcance:** producción pública y build local de Next.js.  
**Objetivo:** mejorar indexabilidad, claridad semántica y citabilidad del portfolio para buscadores tradicionales y asistentes de IA, sin inventar credenciales, métricas ni resultados de proyectos.

## Resumen ejecutivo

La base técnica publicada ya era saludable: HTTPS, cabeceras de seguridad, `robots.txt`, `sitemap.xml`, `llms.txt` y una imagen social funcional. Sin embargo, producción aún mostraba contenido profesional desactualizado y no exponía las cuatro páginas de caso de estudio. La implementación local corrige los problemas de descubrimiento y describe cada proyecto con metadata y datos estructurados propios.

El cambio no estará verificable en `https://diegopasaye.dev` hasta que se despliegue. Ninguna modificación local fuerza el rastreo, la indexación o una respuesta de herramientas de IA.

## Evidencia de auditoría

| Área | Estado en producción | Acción aplicada localmente |
| --- | --- | --- |
| HTTPS y cabeceras | Correctas: respuesta HTML, HSTS, CSP y protección de tipo de contenido | Sin cambio necesario |
| `robots.txt` | Accesible y permite rastreadores generales y de IA, incluidos GPTBot, OAI-SearchBot, ClaudeBot y PerplexityBot | Se conserva la política existente |
| Sitemap | Solo exponía la portada y una fecha de modificación antigua | Incluye portada y cuatro rutas canónicas reales, sin fechas ficticias |
| Páginas de proyecto | `/licita`, `/barberdeck`, `/nakawe` y `/pladiermo` devolvían 404 al auditar producción | Se generan estáticamente como páginas indexables |
| Metadata social | La portada tenía imagen válida de 1200×630, pero texto profesional obsoleto | Metadata específica por caso, canonical, Open Graph y Twitter Card |
| Datos estructurados | La portada ya publicaba `Person`, `WebSite`, `ProfilePage` y `FAQPage` | Cada caso incorpora `WebPage` y `CreativeWork` enlazados a la identidad profesional |
| GEO y contenido | La entidad, experiencia y proyectos publicados no estaban sincronizados con el perfil profesional actual | Copy factual, FAQs, `llms.txt` actualizado y casos individuales citables |

## Implementación realizada

1. Se centralizó la URL canónica del sitio para evitar discrepancias entre `metadataBase`, schema y sitemap.
2. Se emitió un sitemap con exactamente estas cinco URLs: la portada y los cuatro casos de estudio publicados.
3. Se añadieron canonical, Open Graph, Twitter Card y descripciones únicas a cada ruta de proyecto.
4. Se añadieron esquemas `WebPage` y `CreativeWork` por proyecto; sus nombres, descripciones, imágenes y URLs coinciden con contenido visible.
5. Se serializa JSON-LD de manera segura, escapando `<` antes de insertarlo en HTML.
6. Se mantuvieron los rastreadores de IA permitidos y el contenido indexable únicamente en español; no se añadieron `hreflang` para idiomas no publicados.
7. Se amplió la política de acceso a agentes de OpenAI, Anthropic, Perplexity, Google/Gemini, Apple, Amazon, Meta y Common Crawl, permitiendo búsqueda, recuperación y entrenamiento.
8. Se publicó `llms-full.txt` con experiencia, proyectos, límites de atribución y URLs canónicas; `llms.txt` ahora funciona como índice breve de esas rutas.

## Verificación local

El build de producción finalizó correctamente y generó 13 páginas estáticas. Los artefactos emitidos confirman:

- sitemap con `https://diegopasaye.dev`, `/licita`, `/barberdeck`, `/nakawe` y `/pladiermo`;
- canonical absoluto e imagen Open Graph en la portada y en cada caso;
- `Person`, `WebSite`, `ProfilePage`, `FAQPage`, `WebPage` y `CreativeWork` en los documentos correspondientes.
- los enlaces de proyecto dentro del schema principal apuntan a los casos de estudio canónicos de `diegopasaye.dev`.

## Cobertura por proyecto

Las páginas de proyecto ahora tienen una estrategia individual de SEO y GEO:

- título y descripción que responden a su intención de búsqueda, sin repetir la metadata de la portada;
- términos temáticos visibles, explicación de la participación de Diego y preguntas frecuentes visibles;
- `WebPage`, `CreativeWork`, `BreadcrumbList` y `FAQPage` que coinciden con el contenido del HTML;
- enlaces canónicos internos usados desde `llms.txt`, `llms-full.txt`, sitemap y schema principal.

Durante la auditoría pública, Google no devolvió resultados para las cuatro rutas de caso de estudio. Esto no mide su calidad: las rutas deben desplegarse, devolver `200` y solicitarse para indexación antes de que puedan competir por consultas como "automatización de licitaciones".

## Pasos posteriores al despliegue

1. Publicar esta versión y volver a comprobar las cinco URLs con respuesta `200`.
2. Enviar `https://diegopasaye.dev/sitemap.xml` a Google Search Console y Bing Webmaster Tools e inspeccionar las páginas prioritarias.
3. Validar la portada y los cuatro casos con Schema Markup Validator y Rich Results Test; corregir solo errores reales de implementación.
4. Verificar previews con LinkedIn Post Inspector y los depuradores de redes sociales; las cachés pueden tardar en renovarse.
5. Mantener coherentes el nombre, la URL del portfolio y las descripciones en LinkedIn, GitHub y perfiles públicos. La autoridad y las menciones externas requieren acciones fuera del repositorio.

## Límites y mantenimiento

- SEO y GEO mejoran la comprensión, rastreabilidad y citabilidad; no garantizan rankings, indexación ni menciones en respuestas de IA.
- No se agregaron porcentajes, usuarios, tiempos ahorrados ni tecnologías no confirmadas.
- Ante cada cambio de experiencia, proyecto o URL pública, actualizar en conjunto el contenido visible, metadata, schema, sitemap y `llms.txt`.
