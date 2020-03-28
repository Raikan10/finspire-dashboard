<template>
  <div>
  <b-container class="top-gap">
  <b-row>
    <b-col cols ="2">
      <VueSvgGauge
        :start-angle="0"
        :end-angle="360"
        :value="g1Val"
        :separator-step="0"
        :min="0"
        :max="100"
        gauge-color="#8CDFAD"
        :scale-interval="1"
      >
      <div class="inner-text">
        <span>Financial Risk</span> 
        <br>
        <span>{{g1Val}}%</span>
      </div>
      </VueSvgGauge>
    </b-col>
    <b-col cols ="2">
      <VueSvgGauge
        :start-angle="0"
        :end-angle="360"
        :value="g1Val"
        :separator-step="0"
        :min="0"
        :max="100"
        gauge-color="#8CDFAD"
        :scale-interval="1"
      >
      <div class="inner-text">
        <span>Credit Score</span> 
        <br>
        <span>{{g1Val}}%</span>
      </div>
      </VueSvgGauge>
    </b-col>
    <b-col cols ="2">
      <VueSvgGauge
        :start-angle="0"
        :end-angle="360"
        :value="g1Val"
        :separator-step="0"
        :min="0"
        :max="100"
        gauge-color="#8CDFAD"
        :scale-interval="1"
      >
      <div class="inner-text">
        <span>Data Correlation</span> 
        <br>
        <span>{{g1Val}}%</span>
      </div>
      </VueSvgGauge>
    </b-col>
    <b-col>
      <h3>Social Data</h3>
      <b-container class = "top-gap">
        <b-row>
          <b-col v-for="(score,index) in socialScores" :key="index">{{score.score}}
            <br>
            {{score.media}}
          </b-col>
        </b-row>
      </b-container>
    </b-col>
  </b-row>
</b-container>
  </div>
</template>

<style scoped>
.inner-text {
  height: 100%;
  width: 100%;
  margin-top: 80px;
}
.top-gap {
  margin-top: 20px;
}
</style>
<script>
// @ is an alias to /src


export default {
  name: "Home",
  data() {
    return {
      g1Val: 5,
      socialScores: [
        {media:"Facebook",score:34},
        {media:"LinkedIn",score:53},
        {media:"Instagram",score:76},
        {media:"Phone",score:43},
      ]
    }
  }
};
</script>
