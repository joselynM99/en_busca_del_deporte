<template>
    <!-- Pie de página -->
    <footer class="text-center fixed-bottom"
        style="background-color: #D96C23 ; color: #edf3f5; display: flex; justify-content: space-around; padding: 0.5%;">
        <div id="titulo">
            <h6>TURISMO DEPORTIVO EN EL DISTRITO METROPOLITANO DE QUITO</h6>
            <img src="@/assets/img/Slides/logobanner.jpg" class="logo">
        </div>

        <div id="inst">
            <h6>Institución Educativa Andrés F. Cordova</h6>
            <img src="@/assets/img/escudo.png" class="esc">
            <p>EDUCACIÓN FÍSICA</p>
        </div>


        <!--        <div id="integ">
            <h6>Integrantes</h6>
            <div class="row">
             
                <div class="col-md-6">
                    <ul class="list-unstyled">
                        <li><i class="bi bi-person"></i> Nombre del integrante 1</li>
                        <li><i class="bi bi-person"></i> Nombre del integrante 2</li>
                        <li><i class="bi bi-person"></i> Nombre del integrante 3</li>
                    </ul>
                </div>
¿                <div class="col-md-6">
                    <ul class="list-unstyled">
                        <li><i class="bi bi-person"></i> Nombre del integrante 4</li>
                        <li><i class="bi bi-person"></i> Nombre del integrante 5</li>
                        <li><i class="bi bi-person"></i> Nombre del integrante 6</li>
                    </ul>
                </div>
            </div>
        </div>-->

    </footer>
</template>

<style scoped>
@media (min-width: 768px) {
    footer {
        width: 100%;
    }
}

@media (min-width) and (max-width: 767px) {
    footer {
        width: 40%;
    }
}

.esc {
    width: 50px;
    height: 50px;
    margin-top: 2px;
}

.logo {
    width: 150px;
    height: 50px;
}

#titulo,
#inst {
    margin-top: 1%;
}

.list-unstyled {
    font-family: 'Roboto Condensed';
    color: black;
}
</style>
