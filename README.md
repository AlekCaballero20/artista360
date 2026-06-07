# Artista 360

**Artista 360** es un aplicativo web local para hacer seguimiento integral de un proyecto artístico o musical.

Funciona sin servidor, sin base de datos externa y sin instalación: abre `index.html` en el navegador y listo. Toda la información queda guardada en **localStorage** del navegador.

## Qué incluye

- Dashboard de salud artística del proyecto.
- Personalización de nombre, descripción, logo y colores.
- Metas mensuales configurables.
- Módulo de canciones propias.
- Módulo de lanzamientos.
- Bóveda de ideas.
- Calendario/seguimiento de contenido para redes.
- Eventos y booking.
- Contactos tipo CRM artístico.
- Checklist recurrente.
- Finanzas básicas del proyecto.
- Brand Kit con bios, identidad visual, público, mensaje y requerimientos técnicos.
- Campos personalizados por módulo.
- Exportación e importación de backup JSON.
- Exportación CSV por módulo.
- Carga de datos demo editables.

## Cómo usar

1. Descomprime el ZIP.
2. Abre `index.html` en Google Chrome, Edge o Firefox.
3. Entra a **Ajustes** y cambia:
   - Nombre del proyecto.
   - Nombre artístico.
   - Colores.
   - Logo.
   - Metas mensuales.
   - Redes.
4. Empieza a registrar canciones, ideas, contenido, eventos y contactos.
5. Exporta backup JSON periódicamente desde el botón **Exportar backup**.

## Importante sobre localStorage

La app guarda todo en el navegador donde se usa. Eso significa:

- Si abres la app en otro computador, no verás los datos anteriores hasta importar un backup.
- Si borras caché/datos del navegador, puedes perder la información.
- Si quieres conservar todo, usa **Exportar backup** con frecuencia.

## Cómo migrarlo después a Firebase

Esta versión está pensada como MVP local. Para convertirla en app con login y nube, los módulos ya están organizados como colecciones naturales:

- `projects`
- `songs`
- `releases`
- `ideas`
- `content`
- `events`
- `contacts`
- `goals`
- `tasks`
- `finances`

Se puede adaptar a Firebase Auth + Firestore manteniendo casi la misma estructura de datos.

## Archivos

- `index.html`: estructura principal.
- `styles.css`: diseño visual.
- `app.js`: lógica de la aplicación, localStorage, CRUD, importación/exportación y estadísticas.
- `README.md`: esta guía.

## Versión

1.0.0
