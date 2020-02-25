<template>
  <section>
    <h1>Hello World!</h1>
    <h2>Change me</h2>
    <p>{{ message }}</p>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      message: '...loading'
    }
  },
  methods:  {
    getData: async function () {
      let api = `${process.env.apiUrl}/api`
      try {
        let data = await (await fetch(api)).json()
        this.message = data.msg
      } catch (err) {
        this.message = err.message
      }
    }
  },
  mounted: function () {
    this.getData()
  }
}
</script>
