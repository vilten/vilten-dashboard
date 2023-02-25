<template>
  <div class="table100">
    <div class="table100-head sticky">
      <table>
        <thead>
          <tr class="row100 head">
            <td class="cell100 column0">
              <input type="checkbox" />
            </td>
            <th class="cell100 column1">
              <div class="head-column-title">Class name</div>
              <div class="head-column-subtitle">Performed by</div>
            </th>
            <th class="cell100 column2">
              <div class="head-column-title">Type</div>
            </th>
            <th class="cell100 column3">
              <div class="head-column-title">Hours</div>
            </th>
            <th class="cell100 column4">
              <div class="head-column-title">Trainer</div>
              <div class="head-column-subtitle">Age, gender</div>
            </th>
            <th class="cell100 column5">
              <div class="head-column-title">Spots</div>
            </th>
            <td class="cell100 column6">
              <vv-dropdown style="height: 1.25rem; margin-right: 5px">
                <span style="font-size: 1rem; font-weight: 900">...</span>
              </vv-dropdown>
            </td>
          </tr>
        </thead>
      </table>
    </div>
    <div class="table100-body">
      <table>
        <tbody>
          <template v-for="index in 20" :key="`table-body-a${index}`">
            <tr class="row100 body">
              <td class="cell100 column0">
                <input type="checkbox" />
              </td>
              <td class="cell100 column1">
                <div class="column-title">Pilates Reformer</div>
                <div class="column-subtitle">Viliam Tencer</div>
              </td>
              <td class="cell100 column2">
                <div class="column-title">Gym</div>
              </td>
              <td class="cell100 column3">
                <div class="column-title">8:00 AM - 9:00 AM</div>
              </td>
              <td class="cell100 column4">
                <div class="column-title">Randy Porter</div>
                <div class="column-subtitle">43, male</div>
              </td>
              <td class="cell100 column5">
                <div class="column-title">10</div>
              </td>
              <td class="cell100 column6">
                <div class="d-flex align-items-center">
                  <vv-dropdown>
                    <span
                    class="material-symbols-outlined"
                    style="
                      font-size: 1.5rem;
                      font-weight: 300;
                      margin-right: 5px;
                    "
                    >more_vert</span
                  >
                  </vv-dropdown>
                  <span
                    class="material-symbols-outlined"
                    style="
                      font-size: 1.5rem;
                      font-weight: 200;
                      margin-right: 5px;
                    "
                    >delete</span
                  >
                  <span
                    class="material-symbols-outlined"
                    style="
                      font-size: 1.5rem;
                      font-weight: 200;
                      margin-top: -4px;
                      margin-right: 5px;
                    "
                    >edit_square</span
                  >
                </div>
              </td>
            </tr>
            <tr class="spacer">
              <td colspan="100"></td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div class="table100-head sticky">
      <table>
        <thead>
          <tr class="row100 head">
            <td class="cell100 column0">
              <input type="checkbox" />
            </td>
            <th class="cell100 column1">
              <div class="head-column-title">Class name</div>
              <div class="head-column-subtitle">Performed by</div>
            </th>
            <th class="cell100 column2">
              <div class="head-column-title">Type</div>
            </th>
            <th class="cell100 column3">
              <div class="head-column-title">Hours</div>
            </th>
            <th class="cell100 column4">
              <div class="head-column-title">Trainer</div>
              <div class="head-column-subtitle">Age, gender</div>
            </th>
            <th class="cell100 column5">
              <div class="head-column-title">Spots</div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="table100-body js-pscroll ps ps--active-y">
      <table>
        <tbody>
          <template v-for="index in 20" :key="`table-body-a${index}`">
            <tr class="row100 body">
              <td class="cell100 column0">
                <input type="checkbox" />
              </td>
              <td class="cell100 column1">
                <div class="column-title">Pilates Reformer</div>
                <div class="column-subtitle">Viliam Tencer</div>
              </td>
              <td class="cell100 column2">
                <div class="column-title">Gym</div>
              </td>
              <td class="cell100 column3">
                <div class="column-title">8:00 AM - 9:00 AM</div>
              </td>
              <td class="cell100 column4">
                <div class="column-title">Randy Porter</div>
                <div class="column-subtitle">43, male</div>
              </td>
              <td class="cell100 column5">
                <div class="column-title">10</div>
              </td>
            </tr>
            <tr class="spacer">
              <td colspan="100"></td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const showDrpDwn1 = ref(false);
</script>

<style scoped>
.table100 {
  background-color: transparent;
  position: relative;
  width: 100%;
  color: #000000;
}
.table100-head {
  width: 100%;
  height: 3.5rem;
  background-color: white;
  padding: 1rem 5px;
  line-height: 0.8rem;
  box-shadow: 0 5px 5px 0px #00000005;
}
.table100-body {
  padding: 0 5px;
}
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
.table100-body,
.table100-body table,
.table100-head table,
.row100 {
  width: 100%;
}
.table100-body .row100 td {
  transition: 0.4s;
  padding: 1rem 0;
  background-color: #f1f1f1;
  color: #00000080;
  line-height: 0.8rem !important;
}
.table100-body .row100:hover td {
  cursor: pointer;
  background-color: #00000020;
  color: #000;
}
.table100-body .row100:active td {
  background-color: #00000050;
  color: #000;
}
.table100-body td:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.table100-body td:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.table100-head td {
  opacity: 1;
  background-color: #fff;
}
.column0 {
  width: 1rem;
  padding-left: 0.5rem !important;
}
.column1 {
  width: calc(33% - 2rem);
  padding-left: 1rem !important;
}
.column2 {
  width: 13%;
}
.column3 {
  width: 22%;
}
.column4 {
  width: 19%;
}
.column5 {
  width: 13%;
}
.column6 {
  width: 5rem;
}
.head-column-title,
.column-title {
  font-size: 1rem;
  font-weight: 400;
}
.head-column-subtitle,
.column-subtitle {
  margin-top: 5px;
  font-size: 0.8rem;
  font-weight: 400;
  color: #00000060;
}
.table100-body .spacer td {
  padding: 0 !important;
  height: 3px;
  background: transparent !important;
}
</style>
