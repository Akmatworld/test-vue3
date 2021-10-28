<template>
  <div class="tabs-wrapper">
    <div class="tabs-wrapper__header">
      <div v-for="tab in tabs" :key="tab.id"
      @click="changeTab(tab)"
      :class="{[tab.activeClass]: tab.isActive}"
      class="tabs-wrapper__button">
        {{tab.tabName}}
      </div>
    </div>
    <div class="tabs-wrapper__content">
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script>
import Red from "@/components/Red.vue";
import Blue from "@/components/Blue.vue";
import Green from "@/components/Green.vue";

export default {
  name: 'Tabs',
  components: {
    Red,
    Blue,
    Green
  },
  data () {
    return {
      tabs: [
        {id: 1, tabName: 'Red', isActive: true, activeClass: 'red'}, 
        {id: 2, tabName: 'Green', isActive: false, activeClass: 'green'}, 
        {id: 3, tabName: 'Blue', isActive: false, activeClass: 'blue'},
        {id: 4, tabName: 'Black', isActive: false, activeClass: 'black'},
        {id: 5, tabName: 'Orange', isActive: false, activeClass: 'orange'}
      ],
      currentComponent: 'red'
    }
  },
  methods: {
    changeTab (tab) {
      this.currentComponent = tab.tabName
      this.tabs = this.tabs.map((t) => {
        if (t.tabName === tab.tabName) {
          t.isActive = true
        } else {
          t.isActive = false
        }
        return t
      })
    }
  }
}
</script>

<style scoped>
.tabs-wrapper__header {
  display: flex;
}
.tabs-wrapper__button {
  border: 1px solid #888;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 10px 10px;
  color: black;
  font-weight: 600;
}
.tabs-wrapper__button:hover {
  cursor: pointer;
}
.tabs-wrapper__content {
  height: 400px;
  width: 100%;
  border: 1px solid #ccc;
}
.red {
  background: red;
  color: white;
}
.green {
  background: green;
  color: white;
}
.blue {
  background: blue;
  color: white;
}
</style>
