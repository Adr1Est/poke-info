# Instrucciones para Agentes - poke-info

## Descripcion del Proyecto

- **Framework:** Next.js 16 con App Router
- **Lenguaje:** TypeScript (modo estricto habilitado)
- **Gestor de Paquetes:** pnpm
- **Estilos:** Tailwind CSS v4 + shadcn/ui v4
- **Pruebas:** Jest 30 + Testing Library
- **Linting:** ESLint 9+ (formato flat config)
- **Estado:** TanStack Query (servidor) + Zustand (cliente)

## Comandos de Desarrollo

```bash
# Instalar dependencias
pnpm install

# Desarrollo
pnpm dev              # Iniciar servidor de desarrollo en http://localhost:3000
pnpm build            # Construccion para produccion
pnpm start            # Iniciar servidor de produccion

# Calidad de Codigo
pnpm lint             # Ejecutar ESLint
pnpm lint:fix         # Auto-corregir problemas de ESLint

# Pruebas
pnpm test             # Ejecutar todas las pruebas
pnpm test:watch       # Ejecutar pruebas en modo observacion
pnpm test -- <archivo> # Ejecutar archivo de prueba individual
pnpm test -- --coverage  # Ejecutar pruebas con reporte de cobertura
```

## Guias de Estilo de Codigo

### TypeScript

- Usar tipos explicitos para parametros de funciones y valores de retorno
- Preferir `interface` para formas de objetos, `type` para uniones/intersecciones
- Usar `cn()` de `@/lib/utils` para combinar clases de Tailwind
- Habilitar modo estricto - evitar tipo `any`

### Imports

Ordenar imports por especificidad (de arriba hacia abajo):

```typescript
// 1. Imports de React/Next.js integrados
import type { Metadata } from "next";
import Link from "next/link";

// 2. Librerias de terceros (alfabetico)
import { useQuery } from "@tanstack/react-query";
import { cva, type VariantProps } from "class-variance-authority";

// 3. Componentes UI (@/components/ui)
import { Button } from "@/components/ui/button";

// 4. Componentes compartidos (@/components/shared)
import { NavBar } from "@/components/shared/NavBar";

// 5. Codigo interno de la app (services, lib, store, types)
import { getPokeList } from "@/services/getPokemonList";
import { cn } from "@/lib/utils";
```

Usar alias de ruta `@/` para imports absolutos desde la raiz del proyecto.

### Nomenclatura de Archivos

| Tipo | Convencion | Ejemplo |
|------|------------|---------|
| Componentes | PascalCase | `PokeGrid.tsx`, `NavBar.tsx` |
| Utilidades/Hooks/Store | camelCase | `usePokemonFilter.ts`, `utils.ts` |
| Tipos | PascalCase | `pokeTypes.ts` |
| Pruebas | Igual que fuente + `.test` | `capitalize.test.ts` |

### Patrones de Componentes

**Archivos de Pagina/Layout:** Usar exports por defecto
```typescript
export default function DashboardPage() {
  // ...
}
```

**Componentes reutilizables:** Usar exports nombrados
```typescript
export function NavBar() {
  // ...
}
```

**Componentes de Cliente:** Agregar directiva `'use client'` al inicio
```typescript
'use client';

import { useState } from 'react';
// ...
```

### Manejo de Errores

- Usar try/catch para operaciones asincronas
- Proporcionar mensajes de error significativos
- Manejar estados de carga y error en componentes usando TanStack Query

### Tailwind CSS

- Usar kebab-case para nombres de clases
- Usar variantes responsivas (`md:`, `lg:`)
- Usar helper `cn()` para aplicar clases condicionalmente
- Seguir esquema de colores de shadcn/ui usando propiedades CSS personalizadas

## Guias de Pruebas

### Ubicacion de Archivos de Prueba

Colocar pruebas en directorio `__tests__/`, reflejando la estructura del codigo:
```
__tests__/
├── app/          # Pruebas de paginas/layouts
├── lib/          # Pruebas de utilidades
├── services/     # Pruebas de servicios
└── components/   # Pruebas de componentes
```

### Estructura de Pruebas

```typescript
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";  // o jest
import { capitalize } from "@/lib/capitalize";

describe("capitalize", () => {
  it("should capitalize first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("should handle empty strings", () => {
    expect(capitalize("")).toBe("");
  });
});
```

### Mejores Practicas de Pruebas

- Una asercion logica por prueba
- Usar nombres de prueba descriptivos: `"should do X when Y"`
- Simular llamadas a APIs externas en pruebas de servicios
- Usar consultas `screen` de Testing Library

## Flujo de Git

### Nomenclatura de Ramas

- Caracteristica: `feature/<ticket>-descripcion`
- Correccion: `fix/<ticket>-descripcion`
- Correccion urgente: `hotfix/<ticket>-descripcion`

### Mensajes de Commits

Seguir conventional commits:
```
feat: agregar vista de detalle de Pokemon
fix: resolver problema de filtro de busqueda
docs: actualizar README
refactor: extraer capa de servicio de API
test: agregar pruebas para utilidad capitalize
```

### Pull Requests

- Crear ramas de caracteristicas desde `main`
- Mantener PRs enfocados y pequenos
- Incluir cobertura de pruebas para nuevas caracteristicas
- Ejecutar lint y pruebas antes de solicitar revision

## Notas de Arquitectura

### Estructura de Directorios

```
app/              # Paginas de Next.js App Router
components/
  ├── dashboard/  # Componentes especificos de funcionalidad
  ├── shared/     # Componentes UI compartidos
  └── ui/         # Componentes shadcn/ui
lib/              # Funciones utilitarias
services/         # Capa de servicio de API
store/            # Stores de Zustand
types/            # Definiciones de tipos TypeScript
__tests__/        # Archivos de prueba
```

### Dependencias Externas

- **PokeAPI:** `https://pokeapi.co/api/v2/` para datos de Pokemon
- **TanStack Query:** Maneja cache y estado de API
- **Zustand:** Estado ligero del lado del cliente

## Solucion de Problemas

```bash
# Reiniciar node_modules y reinstallar
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Limpiar cache de Next.js
rm -rf .next
pnpm build

# Ejecutar verificacion de tipos sin construir
pnpm tsc --noEmit
```
