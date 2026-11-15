# Political World Simulator

Simulador político (Ecuador). Es un sitio estático: `index.html` + `firebase-config.js`.

Mapa: límites de provincias de simplemaps.com (ya incluidos en el código; no hay que añadir ningún GeoJSON).

## Publicar (GitHub Pages)
1. Sube `index.html`, `firebase-config.js` y este README a un repositorio público.
2. Settings → Pages → Branch `main`, carpeta `/ (root)`.

## Activar el multijugador (Firebase, plan gratuito)
1. console.firebase.google.com → Crear proyecto.
2. Compilación → **Realtime Database** → Crear base de datos (modo bloqueado).
3. Pestaña **Reglas** → pega esto y publica:
```
{ "rules": { "rooms": { "$code": { ".read": true, ".write": true } } } }
```
4. Configuración del proyecto (engranaje) → Tus apps → `</>` Web → registra la app → copia el objeto `firebaseConfig`.
5. Edita `firebase-config.js` y reemplaza `null` por ese objeto (con `databaseURL`).
6. Sube el cambio. Abre el juego → "Crear sala" → "Copiar enlace" y compártelo.

Nota: las reglas anteriores permiten que cualquiera con el código lea y escriba esa sala. Sirve para jugar con amigos; no para algo público a gran escala.
