<script>
export default {
  name: "TableComponent",
  props: {
    RowCount: Number,
    ColumnCount: Number,
    Title: String,
    Text: String
  },
  data() {
    return {
      rows: []
    };
  },
  created() {
    // Split Text into an array and limit it to RowCount items
    this.rows = this.Text.split(";").slice(0, this.RowCount);
  }
};
</script>

<template>
  <div class="table">
    <h1>{{ Title }}</h1>
    <table>
      <tr v-for="(rowText, rowIndex) in rows" :key="rowIndex">
        <td>{{ rowText }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.table {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  left: 0;
  color: white;
  border: #384046 3px solid;
  border-radius: 10px;
  width: 60vw;
  min-width: 400px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.table h1 {
  background-color: #262A2D;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-left: 10px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-right: 10px;
  margin: 0;
  font-size: 26px;
  border-bottom: #384046 3px solid;
}

.table table {
  width: 100%;
  border-collapse: collapse;
}

.table td {
  padding: 10px;
}

.table tr {
  font-size: 18px;
}

.table tr:nth-child(even) {
  border-top: #384046 3px solid;
  border-bottom: #384046 3px solid;
}
</style>
