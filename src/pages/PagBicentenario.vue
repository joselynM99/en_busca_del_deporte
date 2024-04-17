<template>
    <div>
        <!-- Barra de navegación -->

        <img src="@/assets/img/bicentenario/letrero-bicentenario.jpeg" class="d-block w-100" alt="">
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
        <h5>El Parque Bicentenario es un parque muy amplio, con grandes pistas para ir en bicicletas, trotar o caminar;
            también cuenta con áreas inclusivas para discapacitados. El aire es siempre limpio y posee una buena
            conservación de su vegetación.</h5>
        <ul id="info">
            <li><strong>Costo:</strong> El ingreso no tiene costo.</li>
            <li><strong>Ubicación:</strong> Está ubicado al norte de la urbe, en los predios que pertenecieron al
                antiguo aeropuerto de la ciudad, entre las avenidas Amazonas al occidente, Galo Plaza y Real Audiencia
                al oriente, y del Maestro al norte.</li>
            <li>La estación de El Labrador del Metro de Quito brinda acceso a este lugar turístico de Quito. Recuerda
                que esta estación es multimodal, por lo que conecta a los usuarios del metro con el resto de servicios
                de transporte público de la capital: Trolebús, Ecovía y Bici Quito.</li>
        </ul>

        <hr>
        <h3>Ubicación</h3>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63836.76912677647!2d-78.53070297659522!3d-0.18254624574971004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59012c10c3417%3A0x6fa6f445d9a711a3!2sParque%20Bicentenario!5e0!3m2!1ses!2sec!4v1713319460463!5m2!1ses!2sec"
            width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
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
            imagenSrc: require('@/assets/img/bicentenario/mapa-bicentenario.jpg'),
            areas: [
                { shape: 'circle', coords: '560,1100,30', title: 'Juegos Infantiles', num: 0 },
                { shape: 'circle', coords: '800,1080,30', title: 'Juegos Infantiles', num: 0 },

                { shape: 'circle', coords: '450,1100,40', title: 'Área de CrossFit', num: 1 },

                { shape: 'circle', coords: '550,900,40', title: 'Pista Paralímpica', num: 2 },

                { shape: 'circle', coords: '650,1200,30', title: 'Área de Ejercicio', num: 3 },

                { shape: 'circle', coords: '1100,1100,60', title: 'Pista de Ciclismo', num: 4 },

                { shape: 'circle', coords: '730,1200,20', title: 'Cruz del Papa', num: 5 },

                { shape: 'circle', coords: '500,1100,20', title: 'Zona de Siembra', num: 6 },

                { shape: 'circle', coords: '750,1200,50', title: 'Lago', num: 7 },


                // Agrega más áreas según las necesidades
            ],
            secciones: [
                {
                    titulo: 'Juegos Infantiles',
                    contenido: 'Espacio recreativo con juegos seguros y divertidos para los niños incluyendo a los que sufren de alguna discapacidad física.',
                    imagenes: [
                        require('@/assets/img/bicentenario/juegos/1.jpeg'),
                        require('@/assets/img/bicentenario/juegos/2.jpeg'),
                        require('@/assets/img/bicentenario/juegos/3.jpeg'),
                        require('@/assets/img/bicentenario/juegos/4.jpeg'),
                        require('@/assets/img/bicentenario/juegos/4.jpeg')

                        // Agrega más imágenes según las necesidades
                    ]
                },
                {
                    titulo: 'Área de CrossFit',
                    contenido: 'Equipada con barras, pesas, cuerdas y otros equipos específicos para la práctica de este tipo de entrenamiento de alta intensidad.',
                    imagenes: [
                        require('@/assets/img/bicentenario/cross/1.jpeg'),
                       
                        // Agrega más imágenes según las necesidades
                    ]
                },

                {
                    titulo: 'Pista Paralímpica',
                    contenido: 'Espacio diseñado y adaptado para atletas con alguna discapacidad física.',
                    imagenes: [
                        require('@/assets/img/bicentenario/paralim/1.jpeg'),
                        require('@/assets/img/bicentenario/paralim/2.jpeg'),
                        // Agrega más imágenes según las necesidades
                    ]
                },
                {
                    titulo: 'Área de máquinas de ejercicio',
                    contenido: 'Esta área cuenta con una buena variedad de equipos de entrenamiento físico.',
                    imagenes: [
                        require('@/assets/img/bicentenario/ejerc/1.jpeg'),
                        require('@/assets/img/bicentenario/ejerc/2.jpeg'),

                        // Agrega más imágenes según las necesidades
                    ]
                },
                {
                    titulo: 'Pista de Ciclismo',
                    contenido: 'Lugar donde con anterioridad despegaban aviones, ahora es utilizado para la práctica del ciclismo.',
                    imagenes: [
                        require('@/assets/img/bicentenario/ciclis/1.jpeg'),
                        require('@/assets/img/bicentenario/ciclis/2.jpeg'),

                        // Agrega más imágenes según las necesidades
                    ]
                },

                {
                    titulo: 'Cruz del Papa',
                    contenido: 'Estructura metálica en forma de cruz, es un punto de referencia importante en el parque.',
                    imagenes: [
                        require('@/assets/img/bicentenario/papa/1.jpeg'),
                        require('@/assets/img/bicentenario/papa/2.jpeg'),
                        // Agrega más imágenes según las necesidades
                    ]
                },

                {
                    titulo: 'Zona de siembra',
                    contenido: 'Área dedicada al cultivo de vegetación, esta práctica promueve la educación ambiental.',
                    imagenes: [
                        require('@/assets/img/bicentenario/siembra/2.jpeg'),
                        require('@/assets/img/bicentenario/siembra/3.jpeg'),
                    
                    ]
                },

                {
                    titulo: 'Lago',
                    contenido: 'Hermoso cuerpo de agua rodeado de áreas verdes, donde puedes pasar un buen rato alimentando a los peces que habitan allí.',
                    imagenes: [
                        require('@/assets/img/bicentenario/lago/1.jpeg'),
                        require('@/assets/img/bicentenario/lago/2.jpeg'),
                        require('@/assets/img/bicentenario/lago/3.jpeg'),
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
    mounted(){
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