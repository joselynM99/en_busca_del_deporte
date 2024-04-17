<template>
    <!--Carrusel-->
    <div id="carousel1" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item">
                <img src="@/assets/img/Slides/slide1.jpg" class="d-block w-100" alt="">

            </div>
            
            <div class="carousel-item">
                <img src="@/assets/img/Slides/slide2.jpg" class="d-block w-100" alt="">

            </div>
            
            <div class="carousel-item">
                <img src="@/assets/img/Slides/slide3.jpg" class="d-block w-100" alt="">

            </div>
            
            <div class="carousel-item active">
                <img src="@/assets/img/Slides/logobanner.jpg" class="d-block w-100" alt="">
            </div>
            
            <div class="carousel-item">
                <img src="@/assets/img/Slides/slide4.jpg" class="d-block w-100" alt="">

            </div>
            <div class="carousel-item">
                <img src="@/assets/img/Slides/slide5.jpg" class="d-block w-100" alt="">

            </div>
            <div class="carousel-item ">
                <img src="@/assets/img/Slides/slide6.jpeg" class="d-block w-100" alt="">

            </div>
            
        </div>
        <!--botón anterior-->
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
        </button>
        <!--botón siguiente-->
        <button class="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
        </button>
    </div>
</template>

<script>

</script>

<style scoped>
.carousel-item {
    max-height: 370px;
    /* Ajusta la altura */
}

.carousel-item img {
    width: auto;
    height: auto;
}

.img-carousel {
    object-fit: cover; /* Ajusta la imagen para que cubra todo el contenedor */
    max-height: 100%; /* Ajusta la altura máxima de la imagen */
}
</style>