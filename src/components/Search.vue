<template>
  <section>
    <b-field label="Search CV's">
      <b-autocomplete
        rounded
        v-model="name"
        :data="filteredDataArray"
        placeholder="e.g. Harry"
        icon="magnify"
        clearable
        @select="(option) => (selected = option)"
      >
        <template #empty>No results found</template>
      </b-autocomplete>
    </b-field>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: [
        "Manoj",
        "Shiva",
        "Varun",
        "Harry",
        "Vincent",
        "Tharun",
        "Livingston",
        'Python',
        "java",
        'javascript',
        'SQL',
        'Python',
        'RDBS'
      ],
      name: "",
      selected: null,
    };
  },
  computed: {
    filteredDataArray() {
      return this.data.filter((option) => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        );
      });
    },
  },
};
</script>
