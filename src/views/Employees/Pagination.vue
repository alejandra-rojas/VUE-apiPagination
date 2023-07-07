<template>
  <section>
    <div class="pagination-container">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        @click="changePage(pageNumber)"
        :class="{
          pagination: true,
          activePagination: this.currentPage === pageNumber,
        }"
        class="pagination"
      >
        {{ pageNumber }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["totalPages", "currentPage"],

  methods: {
    changePage(pageNumber) {
      this.$emit("pagechanged", pageNumber);
    },
  },
};
</script>

<style>
.pagination-container {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.pagination {
  cursor: pointer;
}
</style>
