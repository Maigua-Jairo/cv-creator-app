# Instrucciones del proyecto

## Proyecto

- Aplicación móvil para crear y previsualizar un CV, desarrollada con Expo, React Native y TypeScript.
- Stack actual: Expo SDK 57, React Native 0.86, React 19 y TypeScript 6. Comprueba `package.json` antes de asumir que estas versiones siguen vigentes.
- Prioriza interfaces mobile-first, accesibles y compatibles con iOS, Android y web.
- La interfaz y los textos existentes están principalmente en español; conserva ese idioma.

## Estructura

- `app/`: pantallas del creador de CV (`index`, `personal-info`, `experience`, `education`, `preview`) y su layout de Stack.
- `src/app/`: pantallas y layout del template de Expo, con navegación por tabs.
- `components/`: componentes reutilizables del creador de CV.
- `context/CVContext.tsx`: estado compartido del CV y operaciones para actualizar información, experiencia y educación.
- `types/cv.types.ts`: tipos de los datos del CV.
- `src/components/`, `src/hooks/`, `src/constants/`: componentes, hooks y tema del template.
- `assets/`: imágenes, iconos y otros recursos visuales.
- `skills/`: skills locales de diseño para agentes; cada skill debe vivir en `skills/<nombre>/SKILL.md`.

## Navegación: verificar antes de modificar

El proyecto contiene simultáneamente `app/` y `src/app/`. Expo Router da prioridad a `src/app/` cuando ambas carpetas existen, mientras que las pantallas del creador de CV están en `app/`. Los tipos de rutas se generan según la raíz efectiva del Router.

- Antes de añadir o cambiar rutas, confirma qué árbol de rutas está activo y qué pantallas debe abrir la app.
- No uses conversiones de tipo (`as Href` u otras) para ocultar que una ruta no está registrada.
- No muevas, combines ni elimines ninguno de los dos árboles sin confirmar el alcance; el cambio puede afectar la navegación y el layout.
- Usa Expo Router para navegación. Mantén los nombres y destinos de rutas consistentes con los archivos que estén registrados en la configuración activa.

## Datos y componentes

- Conserva `CVData`, `PersonalInfo`, `Experience` y `Education` como fuente de tipos compartidos en `types/cv.types.ts`.
- Usa `useCVContext()` para leer o modificar el estado global del CV; las pantallas no deben duplicar ese estado global.
- Reutiliza los componentes existentes en `components/` antes de crear equivalentes. `InputField` extiende las propiedades nativas de `TextInput`.
- Mantén el tipado estricto. Prefiere tipos, validaciones y APIs existentes a `any` o conversiones de tipo que silencien errores.
- Evita cambios no relacionados y conserva la experiencia de usuario existente, salvo que la solicitud indique lo contrario.

## Expo y dependencias

- Antes de usar o cambiar APIs de Expo, lee la versión de `expo` en `package.json` y consulta la documentación correspondiente en `https://docs.expo.dev/versions/v<major>.0.0/`. Para temas de Expo Router, consulta además la documentación específica de Router.
- Si necesitas añadir una dependencia, comprueba primero si ya existe una solución en el proyecto y usa `npx expo install <paquete>` para seleccionar una versión compatible con el SDK.
- No edites ni generes manualmente `ios/` o `android/`; no son la fuente de configuración del proyecto. Configura el comportamiento nativo mediante `app.json` y plugins.

## Comprobaciones

- Ejecuta `npx tsc --noEmit` después de cambios TypeScript.
- Ejecuta `npx expo lint` cuando la configuración de ESLint esté disponible y revisa si los errores son preexistentes o están relacionados con el cambio.
- Ejecuta las comprobaciones más acotadas que cubran el cambio; informa claramente cualquier fallo que no se haya podido resolver.

## Skills de diseño

- Guarda cada skill local en `skills/<nombre-de-skill>/SKILL.md`.
- Incluye en cada skill instrucciones concretas sobre su objetivo, cuándo aplicarla y cómo respetar la interfaz nativa y multiplataforma.
- Mantén referencias o recursos de una skill junto a ella, dentro de su propia carpeta. No añadas dependencias de la app únicamente para documentar una skill.
