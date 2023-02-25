<template>
  <div
    ref="drpcontainer"
    class="dropdown-container dropdown-solid"
    :class="containerClass ?? {}"
  >
    <div class="dropdown-togggle" @click="showMenu = !showMenu">
      <slot />
    </div>
    <div
      class="dropdown-menu"
      :class="{ 'dropdown-active': showMenu }"
      v-on:mouseleave="showMenu = false"
    >
      <ul>
        <li>
          <nuxt-link :to="localePath('/')" class="d-flex align-content-center">
            <span
              class="material-symbols-outlined"
              style="font-weight: 200; font-size: 1.5rem; margin-right: 1rem"
              >drive_file_rename_outline</span
            >
            <div style="line-height: 1.3rem">Rename</div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/table-test')" class="d-flex align-content-center">
            <span
              class="material-symbols-outlined"
              style="font-weight: 200; font-size: 1.5rem; margin-right: 1rem"
              >edit_square</span
            >
            <div style="line-height: 1.3rem">Edit</div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/dropdown')" class="d-flex align-content-center">
            <span
              class="material-symbols-outlined"
              style="font-weight: 200; font-size: 1.5rem; margin-right: 1rem"
              >delete</span
            >
            <div style="line-height: 1.3rem">Delete</div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { v4 } from "uuid";
const { $listen } = useNuxtApp();

const showMenu = ref(false);
const _uid = v4().replace(/-/g, "");
const containerClass = computed(() => {
  const classes = {
    "dropdown-open": showMenu.value,
  };
  classes[_uid] = true;
  return classes;
});

$listen("window_click", (e) => {
  try {
    if (showMenu.value && !hasSomeParentTheClass(e.target, _uid)) {
      showMenu.value = false;
    }
  } catch (e) {
    console.error(e);
  }
});

function hasSomeParentTheClass(element, classname) {
  if (element?.className?.split(" ")?.indexOf(classname) >= 0) return true;
  return (
    element?.parentNode && hasSomeParentTheClass(element?.parentNode, classname)
  );
}
</script>

<style scoped>
/* Dropdown menu css */
.dropdown-container {
  display: inline;
  position: relative;
  max-width: 240px;
}
.dropdown-container .dropdown-togggle {
  display: inline;
  color: #000000;
  padding: 0px;
  cursor: pointer;
  position: relative;
  transition: all ease-in-out 0.2s;
}
.dropdown-container .dropdown-togggle label {
  cursor: pointer;
  width: 100%;
}
.dropdown-container .dropdown-togggle:hover,
.dropdown-container .dropdown-togggle:active,
.dropdown-container .dropdown-togggle:focus {
  /* background-color: #0979ce;
  color: #ffffff; */
}
.dropdown-container .dropdown-menu {
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.5);
  margin-top: 10px;
  position: absolute;
  padding: 0;
  right: -13px;
  top: 100%;
  display: none;
  background-color: #ffffff;
  z-index: 10;
}
.dropdown-container .dropdown-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
  border-radius: 5px;
  z-index: 10;
}
.dropdown-container .dropdown-menu a {
  text-decoration: none;
  display: block;
  color: #000000;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 400;
  transition: all ease-in-out 0.3s;
  border-bottom: 1px solid #00000015;
}
.dropdown-container .dropdown-menu a:hover,
.dropdown-container .dropdown-menu a:active,
.dropdown-container .dropdown-menu a:focus {
  background-color: #ffffff;
  color: #33377c;
}

.dropdown-menu,
.dropdown-togggle {
  position: relative;
}
.dropdown-menu::before,
.ddropdown-togggle::before {
  content: "";
  position: absolute;
  right: 20px;
  transform: translateY(-50%) rotate(45deg);
  border: 10px solid;
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  margin-top: -2.5px;
  background-color: rgba(0, 0, 0, 0);
  transition: all ease-in-out 0.2s;
}

.dropdown-menu {
  z-index: 10;
  position: relative;
}
.dropdown-menu::before {
  z-index: -1;
  transform: rotate(-135deg);
  top: -4px;
  border-color: #ffffff;
  box-shadow: 1px 1px 4px -2px rgba(0, 0, 0, 0.4);
}

.dropdown-open .dropdown-menu.dropdown-active {
  display: block;
}

.dropdown-container.dropdown-open .dropdown-togggle {
  /* background-color: #0979ce; */
  color: #ffffff;
}
.dropdown-container.dropdown-open .dropdown-togggle:before {
  transform: rotate(-135deg);
}
.dropdown-solid .dropdown-togggle,
.dropdown-solid .dropdown-menu {
  color: #333;
}
.dropdown-solid .dropdown-menu a {
  color: #333;
}
.dropdown-solid .dropdown-menu a:hover {
  background-color: #ddd;
  color: #555;
}
.dropdown-solid .dropdown-menu a:active {
  background-color: #ddd;
  color: #555;
}
.dropdown-solid .dropdown-menu a:focus {
  background-color: #ddd;
  color: #555;
}
.dropdown-solid .dropdown-menu::before {
  border-color: #fff;
}
</style>
