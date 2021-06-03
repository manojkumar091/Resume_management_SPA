<template>
  <div class="resume-details">
    <b-container>
      <b-row>
        <div class="ml-4 title-details">
          Resume Management Tool
        </div>
      </b-row>
      <b-row>
        <b-col>
          <hr class="new5" />
        </b-col>
      </b-row>
      <b-row>
        <div class="ml-4 heading-details">
          User CV's
        </div>
      </b-row>
      <b-row class="mt-4 ml-2">
        <b-col>
          <!-- Trigger the modal with a button -->
          <b-card
            title="Vincent"
            img-src="/img/maleicon1.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              <b>Software Engineer</b><br />
              <b> Texas</b>
            </b-card-text>
            <b-btn v-b-modal.stethescope class="mt-4 devicebtn"
              >View Resume</b-btn
            >
          </b-card>
        </b-col>
        <b-col>
          <!-- Trigger the modal with a button -->
          <b-card
            title="Harry"
            img-src="/img/maleicon1.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              <b>Business Analyst</b><br />
              <b> Florida</b>
            </b-card-text>
            <b-btn
              variant="primary"
              v-b-modal.stethescope
              class="mt-4 devicebtn"
              >View Resume</b-btn
            >
          </b-card>
          <!-- Modal -->
        </b-col>
        <b-col>
          <!-- Trigger the modal with a button -->
          <b-card
            title="Livingston"
            img-src="/img/maleicon1.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              <b>Civil Engineer</b><br />
              <b> Chicago</b>
            </b-card-text>
            <b-btn
              variant="primary"
              v-b-modal.stethescope
              class="mt-4 devicebtn"
              >View Resume</b-btn
            >
          </b-card>
          <!-- Modal -->
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <div class="ml-4 heading-details">
          Upload CV
        </div>
      </b-row>
      <b-row class="mr-2 ml-2 mt-4 mb-4">
        <b-col lg="12">
          <vue-dropzone
            ref="dropzone"
            id="drop1"
            :options="dropOptions"
          ></vue-dropzone>
          <b-button class="mt-2" variant="primary" @click="removeAllFiles"
            >Add File</b-button
          >
        </b-col>
      </b-row>
      <b-modal
        id="stethescope"
        size="lg"
        ref="stethescope"
        title="RESUME"
        :hide-footer="true"
      >
        <div style="text-align:center ; cursor:pointer ; height:250px">
          <img style="height:150px" alt="Vue pdf" src="@/assets/pdf.png" />
        </div>
        <div style="float:right">
          <b-btn @click="editResume">
            Edit Resume ?
          </b-btn>
        </div>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      dropOptions: {
        url: "https://httpbin.org/post", // sample URL
        maxFilesize: 2, // MB
        maxFiles: 4,
        chunking: true,
        chunkSize: 500, // Bytes
        thumbnailWidth: 150, // px
        thumbnailHeight: 150,
        addRemoveLinks: true,
        acceptedFiles: "image/png,image/jpeg,application/pdf", // files that can be added
      },
    };
  },
  methods: {
    
    // alert function 
    removeAllFiles() {
      this.$alert("File added successfully");
    },
    // alert function
    editResume() {
      this.$alert("Cannot edit file at the moment");
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
.heading-details {
  font-size: 24px;
  font-weight: 600;
  color: grey;
}
.title-details {
  font-size: 25px;
  font-weight: 600;
  color: grey;
}
.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
  color: white;
  background-color: #90b09e;
  border-color: grey;
  border-radius: 14px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
hr.new5 {
  border: 8px solid #90b09e;
  border-radius: 5px;
}
a {
  color: #42b983;
}
</style>
