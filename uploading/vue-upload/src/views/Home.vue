<template>
  <main>
     <h2>VueJS File Upload</h2>
    <form @submit="sendFile($event)" id="upload_form" enctype="multipart/form-data" method="post">
        <input ref="inputFile" type="file" name="file1" id="file1"><br>
        <progress ref="progressBar" id="progressBar" value="0" max="100" style="width:300px;"></progress>
        <h3 id="status">{{ status }}</h3>
        <p id="loaded_n_total">{{ progressText }}</p>
        <hr />
        <button type="submit">Enviar arquivo</button>
    </form>

  </main>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',

  methods: {
    sendFile(e) {
      e.preventDefault();
      let file = this.$refs.inputFile?.files[0];
      if(file) {
        let fd = new FormData();
        fd.append("file", file, "video.mov");
        this.$http.post('http://localhost:5000/profile/upload', fd, {
          onUploadProgress: event => {
            let percent = Math.round((event.loaded / event.total) * 100);
            this.$refs.progressBar.value = percent;
            this.$data.progressText = percent + "% uploaded... please wait";
          }
        })
          .then(result => {
            this.$data.status = result.data;
            this.$data.progressText = 'Uploaded';
          });
      }
    }
  },

  data() {
    return {
      status: '',
      progressText: '',
    };
  },

 


}
</script>
