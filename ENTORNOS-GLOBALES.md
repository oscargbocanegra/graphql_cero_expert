# 🌐 Configuración Global de Entornos Virtuales

## 📋 Resumen

Este sistema proporciona activación **automática y global** de entornos virtuales tanto para Python como para Node.js en cualquier directorio del sistema. No necesitas recordar activar manualmente los entornos - se activan automáticamente cuando entras a un directorio que los contiene.

## ⚡ Funcionalidades Principales

### 🔄 Activación y Desactivación Automática

**Activación automática:**
- **Python**: Detecta y activa automáticamente entornos virtuales en directorios que contienen:
  - `venv/`
  - `env/`
  - `.venv/`
  - `.env/`
  - `virtualenv/`
  - `env-platzi/`

- **Node.js**: Detecta y cambia automáticamente la versión de Node.js basada en archivos `.nvmrc`

**Desactivación automática:**
- **Python**: Se desactiva automáticamente cuando sales de un directorio que no tiene entornos virtuales
- **Node.js**: Regresa automáticamente a la versión por defecto del sistema cuando no encuentra archivos `.nvmrc`
- **Ambos**: Pueden coexistir en el mismo proyecto y se desactivan juntos al salir

### 🎯 Funciona Globalmente

El sistema funciona en **cualquier directorio** del sistema, no solo en proyectos específicos:

- Al hacer `cd` a cualquier directorio
- Al usar `pushd` y `popd`
- Al abrir una nueva terminal
- Busca recursivamente en directorios padre hasta encontrar configuración

## 🛠️ Comandos Disponibles

### 📊 Información y Estado

```bash
# Ver estado completo de entornos
env-status

# Detectar entornos disponibles en el directorio actual
env-detect
detect-envs

# Recargar/reactivar entornos
env-reload
reload-envs

# Configurar entorno por defecto global
env-setup
setup-default-env
```

### 🐍 Gestión de Python

```bash
# Crear entorno virtual Python
env-create-python [nombre]    # por defecto: venv
create-python-env [nombre]
py-env [nombre]

# Activar manualmente entorno Python
py-activate
```

### ⚡ Gestión de Node.js

```bash
# Crear archivo .nvmrc con versión actual
env-create-node [version]
create-node-env [version]
nvm-env [version]

# Ver versión actual de Node.js
node-env
nvm current

# Listar versiones instaladas
node-list
nvm list

# Cambiar versión manualmente
node-use <version>
nvm use <version>

# Instalar nueva versión
node-install <version>
nvm install <version>
```

## 📁 Ejemplos de Uso

### Escenario 1: Proyecto Python

```bash
cd ~/mi-proyecto-python
create-python-env                    # Crea venv/
# Al hacer cd, se activa automáticamente

cd ..                               # Sale del proyecto
# Se desactiva automáticamente

cd mi-proyecto-python               # Regresa al proyecto
# Se reactiva automáticamente
```

### Escenario 2: Proyecto Node.js

```bash
cd ~/mi-proyecto-node
create-node-env 18.19.1             # Crea .nvmrc con version 18.19.1
# Se cambia automáticamente a Node.js 18.19.1

cd ..                               # Sale del proyecto
# Regresa a la versión por defecto

cd mi-proyecto-node                 # Regresa al proyecto
# Se reactiva Node.js 18.19.1 automáticamente
```

### Escenario 3: Proyecto Mixto (Python + Node.js)

```bash
cd ~/mi-proyecto-fullstack
create-python-env                   # Crea venv/
create-node-env 18.19.1             # Crea .nvmrc
# Se activan AMBOS entornos automáticamente

env-status                          # Ver estado de ambos entornos
```

```bash
# Proyecto con ambos entornos activos
cd ~/mi-proyecto-fullstack
# 🐍 Python y ⚡ Node.js activos

cd /tmp                             # Sale a directorio sin configuración
# 🐍 Python se desactiva automáticamente
# ⚡ Node.js regresa a versión por defecto

cd ~/mi-proyecto-fullstack          # Regresa al proyecto
# 🐍 Python y ⚡ Node.js se reactivan automáticamente
```

### Escenario 5: Configuración de Entorno Por Defecto

```bash
env-setup                           # Configurar versión por defecto de Node.js
# Muestra versiones disponibles y sugiere LTS
# Permite configurar la versión por defecto global
```

## 🎨 Indicadores Visuales

### Prompt Personalizado

El prompt muestra los entornos activos:

```bash
🐍 venv ⚡ node-18.19.1 usuario@host:directorio (rama-git)$ 
```

- `🐍 venv`: Entorno Python activo
- `⚡ node-18.19.1`: Entorno Node.js activo
- `(rama-git)`: Rama actual de Git

### Mensajes de Activación

```bash
🐍 Activando entorno Python: venv
⚡ Cambiando a Node.js v18.19.1...
✓ Node.js v18.19.1 activado
```

## 🔧 Configuración Avanzada

### Búsqueda Recursiva

El sistema busca configuración de entornos no solo en el directorio actual, sino también en directorios padre:

```
/home/usuario/proyectos/
├── .nvmrc                          # Node.js 18.19.1
└── frontend/
    ├── venv/                       # Entorno Python
    └── components/
        └── aquí/                   # Hereda ambos entornos
```

### Personalización de Nombres

Puedes usar nombres personalizados para entornos Python:

```bash
create-python-env mi-entorno-especial
create-python-env proyecto-django
create-python-env env-testing
```

## 🚀 Instalación Automática

El sistema ya está configurado en tu `.bashrc`. Para aplicar los cambios:

```bash
source ~/.bashrc
```

O abre una nueva terminal.

## 📝 Archivos de Configuración

### Python
- Busca directorios: `venv/`, `env/`, `.venv/`, `.env/`, `virtualenv/`, `env-platzi/`
- Verifica que exista: `bin/activate`

### Node.js
- Busca archivos: `.nvmrc`
- Contenido: versión de Node.js (ejemplo: `18.19.1`)

## 🔍 Troubleshooting

### Entorno Python no se activa

```bash
# Verificar que el entorno existe y es válido
detect-envs

# Verificar permisos
ls -la venv/bin/activate

# Recrear el entorno si es necesario
rm -rf venv
create-python-env
```

### Node.js no cambia de versión

```bash
# Verificar que nvm está instalado
nvm --version

# Verificar que la versión existe
nvm list

# Instalar versión si no existe
nvm install 18.19.1
```

### Forzar reactivación

```bash
# Recargar toda la configuración
source ~/.bashrc

# Reactivar entornos en directorio actual
reload-envs
```

## 💡 Tips y Trucos

1. **Usa `env-status`** regularmente para verificar qué entornos están activos
2. **`detect-envs`** te ayuda a descubrir entornos disponibles
3. **Los entornos se heredan** de directorios padre si no existen en el actual
4. **Combina Python y Node.js** en el mismo proyecto sin problemas
5. **El sistema es no invasivo** - no afecta el funcionamiento normal del shell

## 🌟 Beneficios

- ✅ **Automático**: No necesitas recordar activar entornos
- ✅ **Global**: Funciona en cualquier directorio del sistema
- ✅ **Multi-lenguaje**: Soporta Python y Node.js simultáneamente
- ✅ **Inteligente**: Busca recursivamente en directorios padre
- ✅ **Visual**: Indicadores claros en el prompt
- ✅ **Seguro**: No interfiere con el funcionamiento normal del sistema
- ✅ **Desactivación automática**: Se desactivan al salir de directorios sin configuración
- ✅ **Coexistencia**: Python y Node.js pueden estar activos al mismo tiempo
- ✅ **Configuración por defecto**: Gestión inteligente de versiones por defecto

## ✨ Resumen de Comportamiento

| Acción | Python | Node.js | Resultado |
|--------|---------|---------|-----------|
| Entrar a proyecto con `venv/` | ✅ Activa | ➖ Sin cambio | 🐍 Python activo |
| Entrar a proyecto con `.nvmrc` | ➖ Sin cambio | ✅ Cambia versión | ⚡ Node.js específico |
| Entrar a proyecto mixto | ✅ Activa | ✅ Cambia versión | 🐍⚡ Ambos activos |
| Salir a directorio sin config | ❌ Desactiva | ↩️ Versión por defecto | ➖ Sin entornos |
| Cambiar entre proyectos | 🔄 Cambia automáticamente | 🔄 Cambia automáticamente | 🚀 Transición fluida |
