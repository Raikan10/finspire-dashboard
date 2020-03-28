<template>
  <div>
    <b-container class="top-gap">
      <b-row>
        <b-col>
          <b-icon
            v-if="!isDecrypt"
            icon="people-circle"
            font-scale="12"
          ></b-icon>
          <img src="@/assets/profilePhoto1.jpg" alt="actual" v-else />
          <br />
          <span>{{ username }}</span>
        </b-col>

        <b-col v-for="(data, index) in gaugeValues" cols="2" :key="index">
          <VueSvgGauge
            :start-angle="0"
            :end-angle="360"
            :value="data.score"
            :separator-step="0"
            :min="0"
            :max="100"
            gauge-color="#8CDFAD"
            :scale-interval="1"
          >
            <div class="inner-text">
              <span>{{ data.name }}</span>
              <br />
              <span>{{ data.score }}%</span>
            </div>
          </VueSvgGauge>
        </b-col>

        <b-col>
          <h3>Social Data</h3>
          <b-container class="top-gap">
            <b-row>
              <b-col v-for="(score, index) in socialScores" :key="index"
                >{{ score.score }}
                <br />
                {{ score.media }}
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
      <b-row class="top-gap">
        <b-col cols="7">
          <div>
            <b-card no-body>
              <b-tabs card>
                <b-tab title="Type 1" active>
                  <b-card-text
                    ><div>
                      <b-table
                        striped
                        hover
                        :items="type1DataEncrypted"
                        small
                        responsive
                      ></b-table></div
                  ></b-card-text>
                </b-tab>
                <b-tab title="Type 2">
                  <b-card-text
                    ><div>
                      <b-table
                        striped
                        hover
                        :items="type2Data"
                        small
                        responsive
                      ></b-table></div
                  ></b-card-text>
                </b-tab>
              </b-tabs>
            </b-card>
          </div>
        </b-col>
        <b-col cols="5">
          <b-jumbotron>
            <h3>Digital Footprint Analysis</h3>
            <b-row>
              <b-col cols="4" offset="4">
                <VueSvgGauge
                  :start-angle="0"
                  :end-angle="360"
                  :value="dfScore"
                  :separator-step="0"
                  :min="0"
                  :max="100"
                  gauge-color="#8CDFAD"
                  :scale-interval="1"
                >
                  <div class="inner-text">
                    <span>Score</span>
                    <br />
                    <span>{{ dfScore }}%</span>
                  </div>
                </VueSvgGauge>
              </b-col></b-row
            >
            <b-row class="top-gap">
              <b-col>
                <b>User Data Similairity</b>
                <br />
                {{ usdata }}
              </b-col>
              <b-col>
                <b>Default Rate</b>
                <br />
                {{ drate }}%
              </b-col>
            </b-row>
            <b-button class="top-gap" @click="decryptData()"
              >View Detailed Analysis</b-button
            >
          </b-jumbotron>
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
img {
  width: 60%;
  border-radius: 10%;
}
.gauge-jumbo {
  width: 30%;
}
</style>
<script>
// @ is an alias to /src
import SimpleCrypto from "simple-crypto-js";

export default {
  name: "Home",
  data() {
    return {
      username: "mark420",
      dfScore: 78,
      usdata: 4355,
      drate: 2,
      gaugeValues: [
        { name: "Financial Risk", score: 34 },
        { name: "Credit Score", score: 45 },
        { name: "Data Correlation", score: 97 }
      ],
      socialScores: [
        { media: "Facebook", score: 34 },
        { media: "LinkedIn", score: 53 },
        { media: "Instagram", score: 76 },
        { media: "Phone", score: 43 }
      ],
      type1Data: [
        { item: "Name", value: "Mark Wahlberg" },
        { item: "HK ID", value: "HI88F0" },
        { item: "Address", value: "22 Cornwall Street" },
        { item: "Bank Account No:", value: "09-4384959-349" },
        { item: "Email Address", value: "mark.w@gmail.com" }
      ],
      type1DataEncrypted: [
        {
          item: "Name",
          value:
            "b00b83b6af0d1e4eb7588b3a9638b7b09393dfa92df2d9d0527f5ae3b1f8c52bcLHYu7KZ2MKNF3HuMDFH3A=="
        },
        {
          item: "HK ID",
          value:
            "5eb79bf4cb33e15dc896f1e64acff34fa232474b5b4e36d0d077febc63566b07LYi25aHV6fsh+ocw6d+y5w=="
        },
        {
          item: "Address",
          value:
            "55676a643b0aff0ba035d3a35fa855c8c388cc5b416d20ffd04802195f8dcd35v8eEuI6ejj4I6foIKSJuygpGreEbe5rbxb59CiJxzhA="
        },
        {
          item: "Bank Account No:",
          value:
            "39ada795356cc3c2a4282ea06afc9659666d295bca50613154f2cb665e24234ddegO6+2D0b1r7l8+JG2G8w=="
        },
        {
          item: "Email Address",
          value:
            "4c2006a54f52dde15183a66dcbcf80d0d09b3d9e46e4c09237d3f97130221a6cSXtfUjAyPQ+do4unJThJfs1dUgoej8cQcQ9ocRvA+Zo="
        }
      ],
      type2Data: [
        {
          item: "Facebook Object",
          value:
            "6e5ac7644874a48c44b9194d43070297b49cead3c78c7ce2c3ea4f3ec31869cd31hYOCAEYnXZrZzfozXtWg=="
        },
        {
          item: "Instagram Object",
          value:
            "caf618c14370d7275dddd27ab9f1b8d8cce635965cd086fe4acda6714d4348a10NqBYMGxn1cq4KuZFtDx/A=="
        },
        {
          item: "Google Object",
          value:
            "c79a115e95944cde4684aeb69e4268083f14571c3d5523234a451ed070919447Mk0a8JdMYYZZZH2x6dNgWR0wPKX8aYuq4KQBApzOraQ="
        },
        {
          item: "LinkedIn Object",
          value:
            "90f409a195a7ce04576b4f0bc45a9a58bfadf8f865a36761a20fb0e3948c62ccEVngb"
        },
        {
          item: "Mobile Object",
          value:
            "54d80ebdaf422f2dd0eaf83591f70857ad73c9e842d43f6ab56d9151610eea0b4zDiePzbpn0JGIue7PYwOc8AbawpeeEB1"
        }
      ]
    };
  },
  computed: {
    isDecrypt() {
      return this.$store.getters.getDecrypt;
    }
  },
  watch: {
    isDecrypt: function() {
      var privateKey = this.$store.getters.getKey;
      var sc = new SimpleCrypto(privateKey);
      var i;
      for (i in this.type1DataEncrypted) {
        if (this.isDecrypt) {
          this.type1DataEncrypted[i].value = sc.decrypt(
            this.type1DataEncrypted[i].value
          );
        } else {
          this.type1DataEncrypted[i].value = sc.encrypt(
            this.type1DataEncrypted[i].value
          );
        }
        if (this.type1DataEncrypted[i].value === "") {
          alert("Wrong Key");
        }
      }
    }
  }
};
</script>
