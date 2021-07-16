<template>
  <div class="navbar1 bg-dark">
    <div class="row w-100 justify-content-between" no-gutters>
      <div class="col-2 d-flex align-items-center">
        <span class="sidebar-icon" @click="show_sidebar">
          <font-awesome-icon :icon="['fas', 'bars']" size="lg" />
        </span>
        <div class="d-flex align-items-center nav-brand">
          <router-link to="/">
            <img
              src="../assets/logo.png"
              class=""
              width="30"
              height="30"
              alt=""
            />
            <span class=""><strong>VueTube</strong></span>
          </router-link>
        </div>
      </div>
      <div class="col-6 ml-5">
        <form>
          <div class="input-group">
            <input
              class="bg-dark border-secondary text-light form-control"
              placeholder="Search"
              id="search-input"
            />
            <button
              type="button"
              class="btn btn-outline-secondary"
              id="search-button"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Search"
            >
              <span>
                <font-awesome-icon :icon="['fas', 'search']" />
              </span>
            </button>
            <div
              class="d-flex align-items-center"
              id="mic-button"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Search with your voice"
            >
              <span class="text-light ml-2">
                <font-awesome-icon :icon="['fas', 'microphone']" size="lg" />
              </span>
            </div>
          </div>
        </form>
      </div>
      <!-- Right aligned nav items -->
      <div class="col-3 d-flex justify-content-end mr-4">
        <ul class="nav right-icon">
          <li
            class="nav-item"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Create"
          >
            <span class="nav-link">
              <font-awesome-layers class="">
                <font-awesome-icon
                  :icon="['fas', 'video']"
                  style="font-size: 20px" />
                <font-awesome-icon
                  style="text-align: center"
                  :icon="['fas', 'plus']"
                  transform="shrink-7"
                  :style="{ color: 'black' }"
              /></font-awesome-layers>
            </span>
          </li>
          <li
            class="nav-item"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Youtube apps"
          >
            <span class="nav-link"
              ><font-awesome-icon
                :icon="['fas', 'th']"
                style="font-size: 1.1rem"
            /></span>
          </li>
          <li
            class="nav-item"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Notifications"
          >
            <span class="nav-link position-relative">
              <font-awesome-icon :icon="['fas', 'bell']" size="lg" />
              <span
                class="
                  position-absolute
                  top-0
                  badge
                  bg-danger
                "
                id="bell-badge"
              >
                9+
                <span class="visually-hidden">unread messages</span>
              </span>
            </span>
          </li>
          <li class="nav-item mx-1 sign-in-button">
            <button class="btn btn-outline-primary">Sign In</button>
          </li>
        </ul>
      </div>
    </div>
    <Sidebar v-if="sidebar" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { reactive } from "@vue/reactivity";
import Sidebar from "../components/Sidebar.vue";
import { Tooltip } from "bootstrap/dist/js/bootstrap.esm.min.js";
import { computed, onMounted } from "@vue/runtime-core";
export default {
  components: { Sidebar },
  setup() {
    const store = useStore();
    const state = reactive({
      // sidebar_show: false,
    });
    const sidebar = computed(() => store.state.sidebar_show);

    onMounted(() => {
      //inti tooltip
      Array.from(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      ).forEach(
        (tooltipNode) =>
          new Tooltip(tooltipNode, {
            template:
              '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></></div>',
            customClass: "customizer",
          })
      );
    });

    const show_sidebar = () => {
      const body = document.querySelector("body");
      body.classList.add("scrollbar-lock");
      store.commit("sidebar_trigger", true);
    };
    return { state, show_sidebar, sidebar };
  },
};
</script>

<style>
.customizer > .tooltip-inner {
  background-color: grey;
  padding: 0.5rem 0.7rem;
}
.nav-brand a {
  color: white;
  text-decoration: none;
}
.navbar1 {
  padding: 0.7rem 0rem !important;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
  /* border-bottom: solid 1px grey; */
}
.sidebar-icon {
  width: 4.9rem;
  cursor: pointer;
  color: white;
}
.sign-in-button > a {
  padding: 0;
}
.right-icon .nav-item span {
  color: white !important;
}
.right-icon .nav-item {
  display: flex;
  align-items: center;
  margin: 0rem 0.5rem;
  cursor: pointer;
}
.right-icon .nav-item .nav-link {
  padding: 0.5rem 0.5rem;
  /* padding: 0; */
}

#bell-badge{
position: absolute;
top: 0;
transform: translate(-12px,-3px);
font-size: 0.7rem;
border-radius: 50%;
}

#search-button {
  width: 4.6rem;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}

#mic-button {
  cursor: pointer;
  /* padding: 0.4rem 0rem; */
  margin: 0rem 1rem;
}
</style>