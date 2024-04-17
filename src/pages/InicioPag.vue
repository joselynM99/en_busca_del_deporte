<template>
    <div>
        <images-portada></images-portada>
        <barra-nav></barra-nav>

        <div class="images-container">

            <div id="integ">
                <h2>Integrantes</h2>
                <div class="row">

                    <div class="col-md-6">
                        <ul class="list-unstyled">
                            <li><i class="bi bi-person"></i> CHILIQUINGA SCARLETH</li>
                            <li><i class="bi bi-person"></i> MONCAYO PAMELA</li>
                            
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <ul class="list-unstyled">
                            <li><i class="bi bi-person"></i> PALOMINO DANIEL</li>
                            <li><i class="bi bi-person"></i> PAREDES PAULA</li>
                            <li><i class="bi bi-person"></i> SALAZAR DARLA</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Imágenes -->
            <img src="@/assets/img/Slides/slide10.jpeg" class="d-block w-70" alt="">
            <hr>
            <p>Dentro de Distrito Metropolitano de Quito tenemos espacios públicos como los parques metropolitanos, los
                cuales son muy diversos en cuanto actividades deportivas se refiere. Cuentan con hermosas áreas verdes,
                canchas y áreas específicas para diferentes deportes como fútbol, basquetbol, voleybol, entre otros;
                también cuentan con áreas recreativas destinadas para los niños. Son lugares en los que nunca podremos
                aburrirnos.</p>
            <hr>
            <img src="@/assets/img/Slides/slide8.jpeg" class="d-block w-70" alt="">

        </div>

        <pie-pagina></pie-pagina>
    </div>
</template>

<script>
import BarraNav from '@/components/BarraNav.vue'
import ImagesPortada from '@/components/ImagesPortada.vue'
import PiePagina from '@/components/PiePagina.vue';

export default {
    name: 'InicioPag',
    components: {
        BarraNav,
        ImagesPortada,
        PiePagina
    },
}
</script>

<style scoped>
.images-container {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    margin: 15px auto;
}

img {
    width: 70%;
}

.images-container img {
    margin-bottom: 15px;
    /* Espacio entre imágenes */
}

/* Estilos adicionales si es necesario */
</style>