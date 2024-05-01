<template>
    <div>
        <!-- Barra de navegación -->

        <img src="@/assets/img/carolina/letrero-carolina.jpg" class="d-block w-100" alt="">
        <barra-nav></barra-nav>
        <!-- Imagen del mapa con áreas clicables -->
        <img ref="mapaImagen" :src="imagenSrc" @load="imagenCargada" usemap="#mapa" alt="Mapa de imagen"
            class="mapa-imagen">

        <!-- Definición de las áreas del mapa -->
        <map name="mapa">
            <area v-for="(area, index) in areas" :key="index" :shape="area.shape" :coords="area.coords"
                :title="area.title" @mouseover="mostrarTexto(area.title, $event)" @mouseleave="ocultarTexto"
                @click="mostrarSeccion(area.num)">
        </map>
        <hr>
        <h5>El Parque La Carolina es un extenso parque con diversas actividades para todos los gustos, puedes pasar todo
            un día en él y nunca te aburrirías.</h5>
        <ul id="info">
            <li><strong>Costo:</strong> El ingreso no tiene costo.</li>
            <li><strong>Ubicación:</strong> Está ubicado en la zona bancaria y de negocios de Quito, entre las avenidas
                Naciones Unidas, Shyris, Amazonas, Eloy Alfaro y República.</li>
            <li>La estación Iñaquito del Metro de Quito se encuentra en el extremo norte del parque.</li>
            <li>Mientras que la estación La Carolina se encuentra en su extremo sur.</li>
        </ul>

        <hr>
        <div>
            <h3>Ubicación</h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.18896030822!2d-78.49533872451161!3d-0.18625129697807313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a7ce9ba8755%3A0x755f2bd0d36e70a7!2sLa%20Carolina%2C%20Quito!5e0!3m2!1ses!2sec!4v1713318396250!5m2!1ses!2sec"
                width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <hr>
        <h3>¿Cómo llegar?</h3>
        <div id="ubi">

            <div class="op">
                <h5>Opción 1: Metro de Quito</h5>
                <div>
                    <p>El Metro de Quito realiza un recorrido de 15 estaciones desde Quitumbe hasta El Labrador pero hay
                        dos opciones principales a las cual llegar al parque La Carolina resulta extremadamente
                        sencillo,
                        estas son:</p>
                    <p> - Estación La Carolina, ubicada al extremo sur del parque.</p>
                    <p> - Estación Iñaquito, ubicada al extremo norte del parque.</p>

                    <p>Con este recorrido establecido es practicamente imposible perderse,
                        encontraremos el parque en cuestion de segundos.</p>
                </div>

            </div>
            <div class="op">
                <h5>Opción 2: Corredor Sur Occidental</h5>
                <div>


                    <div>
                        <p>Desde la parada La Santiago hay solo una opcion de autobus a la cual subirnos para llegar al
                            parque La Carolina:</p>
                        <p> - R1: Nos dejara en la Av. Naciones Unidas y la Av. Los Shyris, nos dejara practicamente
                            en una de las esquinas del parque.</p>
                    </div>
                    <div>
                        <p>Desde la parada El Pintado existen dos opciones:</p>
                        <p> - R1 y R2, ambas
                            nos dejaran exactamente en las mismas calles.</p>
                    </div>
                </div>
            </div>


        </div>

        <hr>
        <h2>Explorando el Parque: Deporte, Entretenimiento y Naturaleza</h2>

        <div v-for="(seccion, index) in secciones" :key="index" ref="secciones" class="seccion">
            <h2>{{ seccion.titulo }}</h2>
            <!-- Carrusel de imágenes -->
            <div class="carrusel-container">
                <div :id="'carousel' + index" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <!-- Renderizar las imágenes del carrusel -->
                        <div v-for="(imagen, imagenIndex) in seccion.imagenes" :key="imagenIndex"
                            :class="{ 'carousel-item': true, 'active': imagenIndex === 0 }">
                            <div class="carrusel-imagen-container">
                                <img :src="imagen" class="carrusel-imagen" alt="">
                            </div>
                        </div>
                    </div>
                    <!-- Botón anterior -->
                    <button class="carousel-control-prev" type="button" :data-bs-target="'#carousel' + index"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Anterior</span>
                    </button>
                    <!-- Botón siguiente -->
                    <button class="carousel-control-next" type="button" :data-bs-target="'#carousel' + index"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Siguiente</span>
                    </button>
                </div>
            </div>
            <p>{{ seccion.contenido }}</p>
        </div>
    </div>
</template>

<script>
import BarraNav from '@/components/BarraNav.vue'

export default {
    components: {
        BarraNav,
    },
    data() {
        return {
            imagenSrc: require('@/assets/img/carolina/mapa-carolina.jpg'),
            areas: [
                { shape: 'circle', coords: '450,1100,50', title: 'LAGO', num: 0 },
                { shape: 'circle', coords: '1050,700,40', title: 'Canchas de fútbol', num: 1 },
                { shape: 'circle', coords: '1400,1200,40', title: 'Canchas de fútbol', num: 1 },
                { shape: 'circle', coords: '1200,1400,40', title: 'Canchas de basquetbol', num: 2 },
                { shape: 'circle', coords: '1200,1200,40', title: 'Canchas de voleybol', num: 3 },
                { shape: 'circle', coords: '1200,600,50', title: 'Canchas de voleybol', num: 3 },
                { shape: 'circle', coords: '1100,780,50', title: 'Canchas de tenis', num: 4 },
                { shape: 'circle', coords: '450,1400,50', title: 'Pista de Skateboarding y Ciclismo', num: 5 },
                { shape: 'circle', coords: '900,1200,50', title: 'Pista de Atletismo', num: 6 },
                { shape: 'circle', coords: '950,950,50', title: 'Área Abierta', num: 7 },
                { shape: 'circle', coords: '1250,1000,50', title: 'Juegos Infantiles', num: 8 },
                { shape: 'circle', coords: '450,800,50', title: 'Juegos Infantiles', num: 8 },
                { shape: 'circle', coords: '1150,1000,50', title: 'Avión', num: 9 },
                { shape: 'circle', coords: '400,900,50', title: 'Zona Canina', num: 10 },

                { shape: 'circle', coords: '1300,1400,50', title: 'Pista de Ciclismo', num: 11 },
                { shape: 'circle', coords: '800,1300,50', title: 'Pista de Ciclismo', num: 11 },
                { shape: 'circle', coords: '700,1400,50', title: 'Pista de Ciclismo', num: 11 },
                { shape: 'circle', coords: '300,1000,50', title: 'Pista de Ciclismo', num: 11 },
                { shape: 'circle', coords: '600,700,50', title: 'Pista de Ciclismo', num: 11 },
                { shape: 'circle', coords: '1000,650,50', title: 'Pista de Ciclismo', num: 11 },

                { shape: 'circle', coords: '800,1000,50', title: 'Área de CrossFit', num: 12 },


                // Agrega más áreas según las necesidades
            ],
            secciones: [
                {
                    titulo: 'Lago',
                    contenido: 'Hermoso lago artificial rodeado de áreas verdes, ideal para un paseo en bote.',
                    imagenes: [
                        require('@/assets/img/carolina/lago/1.jpeg'),
                        require('@/assets/img/carolina/lago/2.jpeg'),
                        require('@/assets/img/carolina/lago/3.jpeg'),
                        require('@/assets/img/carolina/lago/4.jpeg')
                        // Agrega más imágenes según las necesidades
                    ]
                },

                {
                    titulo: 'Canchas de Fútbol',
                    contenido: 'Espacios equipados con porterías para el disfrute de uno de los deportes más populares.',
                    imagenes: [
                        require('@/assets/img/carolina/canchaFutbol/1.jpeg'),
                        require('@/assets/img/carolina/canchaFutbol/2.jpeg'),
                        // Agrega más imágenes según las necesidades
                    ]
                },
                {
                    titulo: 'Canchas de Basquetbol',
                    contenido: 'Superficies acondicionadas y bien equipadas para el disfrute de los amantes de este conocido deporte.',
                    imagenes: [
                        require('@/assets/img/carolina/canchaBasquet/1.jpeg'),
                        // Agrega más imágenes según las necesidades
                    ]
                },
                {
                    titulo: 'Canchas de Voleybol',
                    contenido: 'Áreas equipadas con redes y marcadores para practicar y disfrutar este maravilloso deporte.',
                    imagenes: [
                        require('@/assets/img/carolina/canchaVoley/1.jpeg'),
                        require('@/assets/img/carolina/canchaVoley/2.jpeg'),

                        // Agrega más imágenes según las necesidades
                    ]
                },

                {
                    titulo: 'Canchas de Tenis',
                    contenido: 'Espacios adecuados y equipados con redes y líneas demarcatorias para la práctica del Tenis.',
                    imagenes: [
                        require('@/assets/img/carolina/tenis/1.jpeg'),
                        require('@/assets/img/carolina/tenis/2.jpeg'),
                        require('@/assets/img/carolina/tenis/3.jpeg'),
                        // Agrega más imágenes según las necesidades
                    ]
                },

                {
                    titulo: 'Pista de Skateboarding y Ciclismo',
                    contenido: 'Área dedicada a los amantes de estas disciplinas, equipada con rampas, barandas, obstáculos, etc.',
                    imagenes: [
                        require('@/assets/img/carolina/skate/1.jpeg'),
                        require('@/assets/img/carolina/skate/2.jpeg'),
                        require('@/assets/img/carolina/skate/3.jpeg'),
                        require('@/assets/img/carolina/skate/4.jpeg'),
                        require('@/assets/img/carolina/skate/5.jpeg'),
                        // Agrega más imágenes según las necesidades
                    ]
                },

                {
                    titulo: 'Pista de Atletismo',
                    contenido: 'Diseñada para diversas disciplinas atléticas como carreras de velocidad, de medio tiempo, etc.',
                    imagenes: [
                        require('@/assets/img/carolina/atletismo/1.jpeg'),
                        require('@/assets/img/carolina/atletismo/2.jpeg'),
                        require('@/assets/img/carolina/atletismo/3.jpeg'),
                        require('@/assets/img/carolina/atletismo/4.jpeg'),
                        // Agrega más imágenes según las necesidades
                    ]
                },

                {
                    titulo: 'Área Abierta',
                    contenido: 'Destinada para diversas actividades al aire libre como yoga, deportes, picnics, etc.',
                    imagenes: [
                        require('@/assets/img/carolina/abierta/1.jpeg'),
                        require('@/assets/img/carolina/abierta/2.jpeg'),

                        // Agrega más imágenes según las necesidades
                    ]
                },

                {
                    titulo: 'Juegos Infantiles',
                    contenido: 'Diseñados específicamente para nuestros niños, con estructuras y juegos que promueven el entretenimiento.',
                    imagenes: [
                        require('@/assets/img/carolina/juegos/1.jpeg'),
                        require('@/assets/img/carolina/juegos/2.jpeg'),
                        require('@/assets/img/carolina/juegos/3.jpeg'),
                        require('@/assets/img/carolina/juegos/4.jpeg'),
                        require('@/assets/img/carolina/juegos/5.jpeg'),
                        require('@/assets/img/carolina/juegos/6.jpeg'),

                        // Agrega más imágenes según las necesidades
                    ]
                },
                {
                    titulo: 'Avión',
                    contenido: 'Área destinada a la exposición de la estructura real de un avión, funcionando también como un importante punto de referencia.',
                    imagenes: [
                        require('@/assets/img/carolina/avion/1.jpeg'),
                        require('@/assets/img/carolina/avion/2.jpeg'),

                        // Agrega más imágenes según las necesidades
                    ]
                },

                {
                    titulo: 'Zona Canina',
                    contenido: 'Área destinada para llevar a nuestras mascotas y que ejerciten junto con nosotros.',
                    imagenes: [
                        require('@/assets/img/carolina/canina/1.jpeg'),
                        require('@/assets/img/carolina/canina/2.jpeg'),

                        // Agrega más imágenes según las necesidades
                    ]
                },
                {
                    titulo: 'Pista de Ciclismo',
                    contenido: 'Circuito diseñado para la práctica recreativa o competitiva del Ciclismo.',
                    imagenes: [
                        require('@/assets/img/carolina/cicli/1.jpeg'),
                        require('@/assets/img/carolina/cicli/2.jpeg'),

                        // Agrega más imágenes según las necesidades
                    ]
                },
                {
                    titulo: 'Área de CrossFit',
                    contenido: 'Equipada con barras, pesas, cuerdas y otros equipos específicos para la práctica de este tipo de entrenamiento de alta intensidad.',
                    imagenes: [
                        require('@/assets/img/carolina/cross/1.jpeg'),
                        require('@/assets/img/carolina/cross/2.jpeg'),

                        // Agrega más imágenes según las necesidades
                    ]
                },
            ],
        };
    },

    created() {
        // Agregar un escuchador de eventos para el cambio de tamaño de la ventana
        window.addEventListener('resize', this.actualizarCoordenadas);
    },
    mounted() {
        window.addEventListener('resize', this.actualizarCoordenadas);
    },

    unmounted() {
        // Remover el escuchador de eventos cuando el componente se destruye para evitar fugas de memoria
        window.removeEventListener('resize', this.actualizarCoordenadas);
    },
    methods: {
        imagenCargada() {
            const imagenOriginalWidth = 1920; // Ancho original de la imagen
            //const imagenOriginalHeight = 960; // Alto original de la imagen (la mitad del ancho)

            const actualizarCoordenadas = () => {
                const screenWidth = window.innerWidth;
                const scale = screenWidth / imagenOriginalWidth;

                this.areas.forEach(area => {
                    const coords = area.coords.split(',').map(coord => parseFloat(coord));
                    const coordsPorcentaje = coords.map((coord, index) => {
                        if (index % 2 === 0) {
                            return (coord * scale);
                        } else {
                            return (coord * scale * 0.5); // Se reduce a la mitad del alto
                        }
                    });
                    area.coords = coordsPorcentaje.join(',');
                });
            };

            // Llamar a la función después de que el componente esté completamente montado
            this.$nextTick(() => {
                actualizarCoordenadas();
                window.addEventListener('resize', actualizarCoordenadas);
            });
        },





        mostrarTexto(texto, event) {
            const tooltip = document.createElement('div');
            tooltip.textContent = texto;
            tooltip.style.position = 'absolute';
            tooltip.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
            tooltip.style.padding = '2px';
            tooltip.style.borderRadius = '5px';
            tooltip.style.left = `${event.clientX}px`;
            tooltip.style.top = `${event.clientY}px`;
            document.body.appendChild(tooltip);
            this.tooltip = tooltip;
        },
        ocultarTexto() {
            if (this.tooltip) {
                document.body.removeChild(this.tooltip);
                this.tooltip = null;
            }
        },
        mostrarSeccion(index) {
            const seccion = this.$refs.secciones[index];
            if (seccion) {
                seccion.scrollIntoView({ behavior: 'smooth' });
            }
        },
    },
};
</script>

<style scoped>
#ubi {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
}

.op {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    margin: 0 3%;
    font-size: 14px;
    width: 150%;
}

.op h5 {
    margin-top: 0;
}

#ubi::after {
    content: '';
    border-left: 1px solid #000;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 0 20px;
}

h3 {
    color: #276E56;
}

#info {
    text-align: left;
}

.mapa-imagen {
    max-width: 100%;
    height: auto;
}

.seccion {
    border-bottom: 1px solid #ccc;
    padding: 20px 0;
    border-radius: 5%;
    background-color: #4EB893;
    width: 85%;
    margin: 10px auto;
}

.seccion h2 {
    margin-top: 10px;
    color: #D96C23;

}

.seccion p {
    margin-top: 10px;
    font-size: large;
    color: black;

}

.seccion img {
    max-width: 100%;
    height: auto;
}

.carrusel-container {
    display: flex;
    justify-content: center;
    width: 60%;
    text-align: center;
    margin: 15px auto;
    border-radius: 5%;
    /* Fondo verde */
}

.carrusel-imagen-container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 60vw;
    border-radius: 5%;
    /* Mitad del ancho de la pantalla */
}

.carrusel-imagen {
    text-align: center;
    max-width: 100%;
    max-height: 100%;
}
</style>