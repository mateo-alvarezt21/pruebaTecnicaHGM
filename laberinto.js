const laberinto = [

    "X.....>",
  
    "..v..X.",
  
    ".>..X..",
  
    "A......",
  
  ];
  
  // Función para convertir el laberinto a una matriz de 0, 1, 2
  function convertirLaberintoAMatriz(laberinto) {
    const matriz = [];
    
    for (let i = 0; i < laberinto.length; i++) {
      const fila = [];
      
      for (let j = 0; j < laberinto[i].length; j++) {
        if (laberinto[i][j] === 'X' || laberinto[i][j] === '>' || laberinto[i][j] === '<' || laberinto[i][j] === '^' || laberinto[i][j] === 'v') {
          fila.push(1); // Obstáculo o área patrullada por guardia se reemplaza con un 1
        } else {
          fila.push(0); // Espacio libre se reemplaza con un 0
        }
      }
      
      matriz.push(fila);
    }
    
    return matriz;
   
  }
  // Para este punto la matriz debe quedar solo de 0 y 1 
  
  
  // Mover los guardias y marcar su rango de movimiento
  function moverGuardias(matriz) {
    const direcciones = ['>', '<', '^', 'v'];
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {  //Recorremos toda la matriz comenzando desde la primera fila
        if (direcciones.includes(laberinto[i][j])) {
          const direccion = direcciones.indexOf(laberinto[i][j]);
          let x = j;
          let y = i;
  
          // Moverse en la dirección indicada
          while (true) {
            switch (direccion) {
              case 0: // Derecha
                x++;
                break;
              case 1: // Izquierda
                x--;
                break;
              case 2: // Arriba
                y--;
                break;
              case 3: // Abajo
                y++;
                break;
            }
  
            // Verificar límites del laberinto
            if (x < 0 || x >= matriz[i].length || y < 0 || y >= matriz.length) {
              break;
            }
  
            // Marcar rango de movimiento hasta encontrar un obstáculo o otro guardia (excepto el jugador)
            if (matriz[y][x] === 1 || laberinto[y][x] === 'A') {
              break;
            }
  
            matriz[y][x] = 2; // El rango de movimiento se marca con 2   
            console.log("La matriz representada por 0, 1 y 2, quedaria asi:")
            console.log(matriz)  //Comentario personal: se marca 2 el movimiento y no 1 para evitar errores al momento de trazar el recorrido para no identificarlo como objetos 
          }
        }
      }
    }
  }
  
  // Función para verificar si el jugador puede ganar el juego
  function puedeEscapar(laberinto) {
    const matrizLaberinto = convertirLaberintoAMatriz(laberinto);
  
    // Mover los guardias y actualizar la matriz
    moverGuardias(matrizLaberinto);
  
    const filas = matrizLaberinto.length;
    const columnas = matrizLaberinto[0].length;
  
    // Función para verificar si una posición está dentro del laberinto
    const dentroDelLaberinto = (x, y) => x >= 0 && x < columnas && y >= 0 && y < filas;
  
    // Coordenadas iniciales del jugador
    let jugadorX = laberinto[filas - 1].indexOf('A');
    let jugadorY = filas - 1;
  
    // Verifica si el jugador puede llegar a la esquina inferior derecha sin ser capturado
    const dfs = (x, y) => {
      if (x === columnas - 1 && y === filas - 1) {
        return true; // El jugador llegó a la esquina inferior derecha
      }
  
      matrizLaberinto[y][x] = 1; // Marcar la posición actual como visitada
  
      const movimientos = [
        { dx: 0, dy: -1 }, // Arriba
        { dx: 0, dy: 1 },  // Abajo
        { dx: -1, dy: 0 }, // Izquierda
        { dx: 1, dy: 0 }   // Derecha
      ];
  
      for (const movimiento of movimientos) {
        const nuevoX = x + movimiento.dx;
        const nuevoY = y + movimiento.dy;
  
        // Verificar límites del laberinto y si la posición no es un obstáculo o área patrullada
        if (dentroDelLaberinto(nuevoX, nuevoY) && matrizLaberinto[nuevoY][nuevoX] === 0) {
          if (dfs(nuevoX, nuevoY)) {
            return true; // Se encontró un camino válido
          }
        }
      }
  
      return false;
    };
  
    return dfs(jugadorX, jugadorY);
  }
  
  // Verificar si el jugador puede escapar
  const resultado = puedeEscapar(laberinto);
  
  // Imprimir el resultado
  console.log(resultado);
  