# Prueba Técnica: Laberinto de Escape

Este proyecto implementa una solución para determinar si un jugador puede escapar de un laberinto mientras evita obstáculos y guardias que patrullan el área.

## Descripción

El laberinto es una matriz bidimensional representada por caracteres. Cada celda del laberinto puede contener:
- `X`: Obstáculo
- `>`: Guardias que patrullan hacia la derecha
- `<`: Guardias que patrullan hacia la izquierda
- `^`: Guardias que patrullan hacia arriba
- `v`: Guardias que patrullan hacia abajo
- `A`: La posición inicial del jugador

El objetivo del jugador es alcanzar la esquina inferior derecha del laberinto sin ser capturado por los guardias.

## Funcionalidades

### Conversión del Laberinto a Matriz

La función `convertirLaberintoAMatriz` convierte el laberinto original en una matriz de 0, 1, y 2:
- `0`: Espacio libre
- `1`: Obstáculo o área patrullada por guardias
- `2`: Rango de movimiento de los guardias

### Movimiento de Guardias

La función `moverGuardias` desplaza a los guardias según su dirección (derecha, izquierda, arriba, abajo) y marca su rango de movimiento en la matriz.

### Verificación de Escape

La función `puedeEscapar` verifica si el jugador puede llegar a la esquina inferior derecha del laberinto sin ser capturado. Utiliza un algoritmo de búsqueda en profundidad (DFS) para explorar posibles caminos.

## Uso

### Ejemplo de Laberinto

```javascript
const laberinto = [
    "X.....>",
    "..v..X.",
    ".>..X..",
    "A......",
];
```
### Ejecución
Para verificar si el jugador puede escapar del laberinto:

```javascript
const resultado = puedeEscapar(laberinto);
console.log(resultado); // true o false
```
## Resultado Esperado
Para el ejemplo proporcionado, el resultado esperado es  `true `, lo que indica que el jugador puede escapar.

