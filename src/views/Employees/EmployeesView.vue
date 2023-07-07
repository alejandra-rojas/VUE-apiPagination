<template>
  <div v-if="employees.length">
    <div>
      Showing employees page {{ currentPage }} of {{ data.total_pages }}
    </div>

    <div class="employee-grid">
      <div
        v-for="employee in employees"
        :key="employee.id"
        class="employee-card"
      >
        <img
          :alt="`Picture of ${employee.first_name}`"
          :src="employee.avatar"
        />
        <h3>{{ employee.first_name + " " + employee.last_name }}</h3>

        <a :href="`mailto:${employee.email}`">Contact</a>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading employees, please wait..</p>
  </div>

  <Pagination
    :totalPages="data.total_pages"
    :currentPage="currentPage"
    @pagechanged="onPageChange"
  />
</template>

<script>
import Pagination from "./Pagination.vue";

export default {
  data() {
    return {
      data: {},
      employees: [],
      currentPage: 1,
    };
  },
  components: {
    Pagination,
  },
  methods: {
    onPageChange(pageNumber) {
      this.currentPage = pageNumber;
    },
    fetchData() {
      const url = `https://reqres.in/api/users?page=${this.currentPage}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.data = data;
          this.employees = data.data;
        })
        .catch((err) => console.log(err.message));
    },
  },
  mounted() {
    this.fetchData();
  },
  watch: {
    currentPage(newVal) {
      this.fetchData();
    },
  },
};
</script>

<style>
.employee-grid {
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.employee-card {
  width: 165px;
  background: var(--lightGray);
  border-radius: 10px;
  padding: 20px;
}

.employee-card img {
  border-radius: 50%;
  max-width: 126px;
  min-height: 126px;
}

.employee-card h3 {
  border-radius: 10px;
  color: var(--black);
  pointer-events: none;
}

.employee-card a {
  text-decoration: none;
  color: var(--black);
}

.employee-card a:hover {
  text-decoration: underline;
}

.activePagination {
  text-decoration: underline;
  color: var(--blue);
}
</style>
