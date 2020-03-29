<template>
  <div>
    <h1 style="margin-top:20px">Blockchain Sandbox</h1>
    <b-container class="top-gap">
      <b-row>
        <b-col>
          <div>
            <b-form
              @submit.prevent="onSubmit"
              @reset.prevent="onReset"
              v-if="show"
            >
              <b-form-group
                id="input-group-1"
                label="Node:"
                label-for="input-1"
              >
                <b-form-select
                  id="input-1"
                  v-model="form.vm"
                  :options="vms"
                  required
                ></b-form-select>
              </b-form-group>
              <b-form-group
                id="input-group-2"
                label="Endpoint:"
                label-for="input-2"
              >
                <b-form-select
                  id="input-2"
                  v-model="form.endpoint"
                  :options="endpoints"
                  required
                ></b-form-select>
              </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </div>
        </b-col>
        <b-col>
          <b-card header="Form Data Result">
            <pre class="m-0">{{ response }}</pre>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.top-gap {
  margin-top: 20px;
  text-align: left;
}
.btn {
  margin-right: 5px;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      show: true,
      form: {
        endpoint: null,
        vm: null,
        postJson: null
      },
      vms: [
        { text: "Select One", value: null },
        "vm1-team27-finspire.japaneast.cloudapp.azure.com",
        "vm2-team27-finspire.japaneast.cloudapp.azure.com",
        "vm3-team27-finspire.japaneast.cloudapp.azure.com",
        "127.0.0.1"
      ],
      endpoints: [
        { text: "Select One", value: null },
        "get_nodes",
        "get_transactions",
        "fullchain",
        "gen_trans"
      ],
      response: null
    };
  },
  methods: {
    onSubmit() {
      var url = "https://" + this.form.vm + ":5000/" + this.form.endpoint;
      // console.log(url)
      axios
        .get(url)
        .then(
          response => (this.response = JSON.stringify(response, undefined, 4))
        )
        .catch(error => this.response = error);
    },
    onReset() {
      // Reset our form values
      this.form.endpoint = null;
      this.form.vm = null;
      this.form.postJson = null;
      this.response = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
