<template>
    <div>
        <div v-for="(matchup,index) in matchups" :key="index">
            <div v-bind:id="matchup.name" class="my-3 p-3 bg- rounded shadow-sm bg-gradient-light">
                <div class="container">
                    <div class="text-center" id="deporte">
                        <h5>{{matchup.deporte}}</h5>
                    </div>
                    <div id="league" class="text-center">
                        <h6>{{matchup.liga}}</h6>
                    </div>
                    <div class="row justify-content-center">
                        <div id="hora" class="col-1 col-xs-1 align-self-center">
                            <span>{{matchup.time}}</span>
                        </div>
                        <div id="equipos" class="col-11 col-xs-11 align-self-center">
                            <ul style="list-style-type: none;">
                                <li id="leyenda">
                                    <div class="row">
                                        <div class="col-3">
                                            <span>Team</span>
                                        </div>
                                        <div class="col-3">
                                            <span>ML</span>
                                        </div>
                                        <div class="col-3">
                                            <span>RL</span>
                                        </div>
                                        <div class="col-3">
                                            <span>Total</span>
                                        </div>                           
                                    </div>
                                </li>
                                <li id="visitante">
                                    <div class="row">
                                        <div class="col-3">
                                            <span>{{matchup.visitante}}</span>
                                        </div>
                                        <div class="col-3">
                                            <span>{{matchup.vlogroml}}</span>
                                        </div>
                                        <div class="col-3">
                                            <span>{{matchup.vlogrorl}}</span>
                                        </div>
                                        <div class="col-3">
                                            <span>{{matchup.alta}}</span>
                                        </div>       
                                    </div>
                                </li>
                                <li id="local">
                                    <div class="row">
                                        <div class="col-3">
                                            <span>{{matchup.local}}</span>
                                        </div>
                                        <div class="col-3">
                                            <span>{{matchup.hlogroml}}</span>
                                        </div>
                                        <div class="col-3">
                                            <span>{{matchup.hlogrorl}}</span>
                                        </div>
                                        <div class="col-3">
                                            <span>{{matchup.baja}}</span>
                                        </div>       
                                    </div>
                                </li>
                                <li id="empate">
                                    <div class="row" v-if="matchup.empateml">
                                        <div class="col-3">
                                            <span>empate</span>
                                        </div>
                                        <div class="col-3">
                                            <span>{{matchup.empateml}}</span>
                                        </div>     
                                        <div class="col-3">
                                            <span></span>
                                        </div>     
                                        <div class="col-3">
                                            <span></span>
                                        </div>     
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
      