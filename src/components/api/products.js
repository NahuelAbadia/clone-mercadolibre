import tv1 from '../../assets/tv1.png'
import tv2 from '../../assets/tv2.png'
import tv3 from '../../assets/tv3.png'
import tv4 from '../../assets/tv4.png'
import xbox1 from '../../assets/xbox1.png'
import xbox2 from '../../assets/xbox2.png'
import xbox3 from '../../assets/xbox3.png'
import xbox4 from '../../assets/xbox4.png'
import notebook1 from '../../assets/notebook1.png'
import notebook2 from '../../assets/notebook2.png'
import notebook3 from '../../assets/notebook3.png'
import notebook4 from '../../assets/notebook4.png'
import ssd1 from '../../assets/ssd1.png'
import ssd2 from '../../assets/ssd2.png'
import ssd3 from '../../assets/ssd3.png'
import hyperx1 from '../../assets/hyperx1.png'
import hyperx2 from '../../assets/hyperx2.png'
import hyperx3 from '../../assets/hyperx3.png'
import hyperx4 from '../../assets/hyperx4.png'


export const products = [
  {
    id: 1,
    nombre: "Smart Tv Noblex Dk43x5100 Led Full Hd 43",
    precio: "$48.499",
    cuotas: "12x $4.041 sin interés",
    opiniones: 170,
    vendidos: 3288,
    vendedor: "Tienda Oficial Noblex",
    info: [
      "Su resolución es Full HD.",
      "Con Netflix.",
      "Sistema operativo Linux.",
      "Conectá tus dispositivos mediante sus 2 puertos HDMI y sus 2 puertos USB.",
      "Dimensiones: 95.5cm de ancho, 55.8cm de alto, 8.3cm de profundidad.",
      "Entretenimiento y conectividad en un mismo lugar",
    ],
    image: {
      1: tv1,
      2: tv2,
      3: tv3,
      4: tv4,
    }
  },
  {
    id: 2,
    nombre: "Microsoft Xbox Series S 512GB Standard color blanco",
    precio: "$89.999",
    cuotas: "6x $14.999 sin interés",
    opiniones: 369,
    vendidos: 3679,
    vendedor: "Tienda Oficial Mercado Libre Gaming",
    info: [
      "Incluye control.",
      "Resolución de 2560px x 1440px.",
      "Memoria RAM de 10GB.",
      "Horas de diversión garantizada.",
      "Cuenta con: 1 cable hdmi, 1 cable de alimentación ca",
    ],
    image: {
      1: xbox1,
      2: xbox2,
      3: xbox3,
      4: xbox4,
    }
  },
  {
    id: 3,
    nombre: 'Notebook Noblex 14.1" Pantalla HD Intel Celeron 4GB/128GB SSD',
    precio: "$58.299",
    cuotas: "9x $6.655 sin interés",
    opiniones: 18,
    vendidos: 4642,
    vendedor: "Tienda Oficial Mall 360",
    info: [
      "Procesador Intel Celeron.",
      "Memoria RAM de 4GB.",
      'Pantalla LED de 14.1".',
      "Resolución de 1366x768 px.",
      "Conexión wifi y bluetooth.",
      "Cuenta con 2 puertos USB y puerto HDMI.",
      "Incluye lector de tarjeta de memoria.",
    ],
    image: {
      1: notebook1,
      2: notebook2,
      3: notebook3,
      4: notebook4,
    }
  },
  {
    id: 4,
    nombre: 'Disco sólido interno Western Digital WD Black WDS500G1B0E 500GB',
    precio: "$10.378",
    cuotas: "12x $1.471",
    opiniones: 23,
    vendidos: 620,
    vendedor: "MALL WEB",
    info: [
      "Útil para guardar programas y documentos con su capacidad de 500 GB.",
      "Más espacio en tu PC con su factor de forma M.2 2280.",
      "Es compatible con Windows 10, Windows 8.1.",
      "Interfaces de conexión: NVMe y PCIe Gen 4.0.",
      "Apto para PC.",
      "Incrementa el rendimiento de tu equipo.",
      "Las imágenes pueden ser ilustrativas.",
    ],
    image: {
      1: ssd1,
      2: ssd2,
      3: ssd3,
    }
  },
  {
    id: 5,
    nombre: 'Auriculares gamer inalámbricos HyperX Cloud Flight negro con luz rojo LED',
    precio: "$15.799",
    cuotas: "12x $2.240",
    opiniones: 1380,
    vendidos: 18579,
    vendedor: "DIAMONDSYSTEMSANJUSTOML",
    info: [
      "Alcance inalámbrico de 20 m.",
      "La batería dura 30 h.",
      "Modo manos libres incluido.",
      "Con cancelación de ruido.",
      "Micrófono flexible incorporado.",
      "Tipo de conector: Jack 3.5 mm.",
      "El largo del cable es de 1.3 m.",
      "Uso apto para estudio, oficina.",
      "Sonido superior y sin límites.",
      "Cómodos y prácticos.",
    ],
    image: {
      1: hyperx1,
      2: hyperx2,
      3: hyperx3,
      4: hyperx4,
    }
  }
]