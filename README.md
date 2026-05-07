# 🏆 Láminas Mundial 2026 S.A.S

E-commerce completo para la venta de láminas del álbum oficial Copa Mundial FIFA 2026, construido con arquitectura híbrida usando Astro + Cloudflare + Supabase.

## 🌐 Demo en producción

**[https://ecommerce-astro.semucas27.workers.dev](https://ecommerce-astro.semucas27.workers.dev)**

---

## 📋 Descripción del proyecto

Este proyecto es un e-commerce funcional que aprovecha la **arquitectura híbrida de Cloudflare**, combinando renderizado estático (SSG) y dinámico (SSR) en el mismo proyecto.

---

## 🏗️ Arquitectura híbrida

| Parte | Modo | Tecnología | Descripción |
|---|---|---|---|
| Tienda pública | **SSR** | Cloudflare Workers | Renderizado en el servidor por request |
| Portal admin | **SSG** | Cloudflare Pages | Pre-renderizado en build time |

### ¿Por qué híbrida?
- **SSR** para el catálogo: los productos cambian constantemente, necesitan datos frescos de Supabase en cada request.
- **SSG** para el admin: la estructura es fija, la lógica (auth, CRUD) corre desde el cliente directamente contra Supabase.

---

## ✅ Funcionalidades

### Tienda pública (SSR)
- 🛍️ Catálogo de láminas con imagen, nombre, categoría y precio
- 🔍 Buscador en tiempo real (busca en toda la base de datos)
- 🗂️ Filtrado por categoría (Colombia, Argentina, Brasil, Francia, Portugal, Especiales, Álbum)
- 📄 Paginación del catálogo
- 📦 Página de detalle de producto con información completa
- 🛒 Formulario de compra con notificación por email (EmailJS)
- ⏳ Countdown animado al Mundial 2026
- 🎠 Carrusel animado de productos destacados

### Portal Admin (SSG)
- 🔐 Autenticación con Supabase Auth (login / logout)
- ➕ Crear productos con imagen
- ✏️ Editar productos existentes
- 🗑️ Eliminar productos
- 🖼️ Gestión de imágenes con Supabase Storage
- 🛡️ Rutas protegidas: redirige al login si no hay sesión activa

---

## 🛠️ Stack tecnológico

| Tecnología | Rol |
|---|---|
| **Astro** | Framework híbrido principal |
| **Cloudflare Workers** | Ejecuta el SSR (tienda pública) |
| **Supabase** | Base de datos PostgreSQL + Auth + Storage |
| **Bootstrap 5** | Diseño responsivo |
| **EmailJS** | Notificaciones de pedidos por correo |

---

## 🗄️ Base de datos

### Tabla `productos`
| Campo | Tipo | Descripción |
|---|---|---|
| `id` | UUID | Identificador único |
| `nombre` | TEXT | Nombre del producto |
| `descripcion` | TEXT | Descripción |
| `precio` | DECIMAL | Precio en COP |
| `categoria` | TEXT | Categoría (selección o tipo) |
| `imagen_url` | TEXT | URL de la imagen |
| `created_at` | TIMESTAMP | Fecha de creación |

### Seguridad (RLS)
- Lectura pública para el catálogo
- Escritura solo para usuarios autenticados (admin)
- Principio de mínimo privilegio aplicado

---
