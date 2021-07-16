<template>
  <section class="overlay-background"></section>
  <div id="sidebar">
    <section id="sidebar-header">
      <div class="row w-100 align-items-center">
        <div class="col-4">
          <div class="sidebar-icon" @click="close_sidebar">
            <span class=""
              ><font-awesome-icon :icon="['fas', 'bars']" size="lg"
            /></span>
          </div>
        </div>
        <div class="col-8">
          <div class="nav-brand">
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
      </div>
    </section>
    <section id="sidebar-body">
      <!-- First Section -->
      <ul class="list-group my-3">
        <router-link
          v-for="(tab, index) in sidebar_tab.first_section"
          :key="index"
          :to="tab.link"
          custom
          v-slot="{ href, navigate }"
        >
          <li
            @click="navigate"
            :href="href"
            class="list-group-item"
            :class="tab.active === true ? 'active' : ''"
          >
            <div class="row w-100 align-items-center">
              <div class="col-4">
                <div class="sidebar-tab-icon">
                  <span class="">
                    <font-awesome-icon :icon="tab.icon" size="lg" />
                  </span>
                </div>
              </div>
              <div class="col-8 text-start">
                <p class="sidebar-link-text">{{ tab.title }}</p>
              </div>
            </div>
          </li>
        </router-link>
      </ul>
      <hr class="text-secondary" />
      <!-- Second Section -->
      <ul class="list-group">
        <router-link
          v-for="(tab, index) in sidebar_tab.second_section"
          :key="index"
          :to="tab.link"
          custom
          v-slot="{ href, navigate }"
        >
          <li
            @click="navigate"
            :href="href"
            class="list-group-item"
            :class="tab.active === true ? 'active' : ''"
          >
            <div class="row w-100 align-items-center">
              <div class="col-4">
                <div class="sidebar-tab-icon">
                  <span class="">
                    <font-awesome-icon :icon="tab.icon" size="lg" />
                  </span>
                </div>
              </div>
              <div class="col-8 text-start">
                <p class="sidebar-link-text">{{ tab.title }}</p>
              </div>
            </div>
          </li>
        </router-link>
        <!-- Sidebar Playlist -->
        <div class="collapse" id="show_more">
          <router-link
            v-for="tab in sidebar_tab.sidebar_playlist"
            :key="tab.title"
            :to="tab.link"
            custom
            v-slot="{ href, navigate }"
          >
            <li @click="navigate" :href="href" class="list-group-item">
              <div class="row w-100 align-items-center">
                <div class="col-4">
                  <div class="sidebar-tab-icon">
                    <span class="">
                      <font-awesome-layers class="">
                        <font-awesome-icon :icon="['fas', 'bars']" size="lg" />
                        <font-awesome-icon
                          :icon="['fas', 'caret-right']"
                          transform="down-5 right-9"
                          size="lg"
                        />
                      </font-awesome-layers>
                    </span>
                  </div>
                </div>
                <div class="col-8 text-start">
                  <p class="sidebar-link-text">{{ tab.title }}</p>
                </div>
              </div>
            </li>
          </router-link>
        </div>
        <li
          class="list-group-item"
          data-bs-toggle="collapse"
          data-bs-target="#show_more"
          aria-expanded="false"
          aria-controls="show_more"
        >
          <div class="row w-100 align-items-center">
            <div class="col-4">
              <div class="sidebar-tab-icon">
                <span class="">
                  <font-awesome-icon :icon="['fas', 'caret-down']" size="lg"
                /></span>
              </div>
            </div>
            <div class="col-8 text-start">
              <p class="sidebar-link-text">Show more</p>
            </div>
          </div>
        </li>
      </ul>
      <hr class="text-secondary" />
      <!-- Subscribe Channel -->
      <h3 class="guide-section">SUBSCRIPTIONS</h3>
      <ul class="list-group">
        <router-link
          v-for="(tab, index) in sidebar_tab.subscribe_channel"
          :key="index"
          :to="tab.link"
          custom
          v-slot="{ href, navigate }"
        >
          <li @click="navigate" :href="href" class="list-group-item">
            <div class="row w-100 align-items-center">
              <div class="col-4">
                <div class="sidebar-tab-icon">
                  <img :src="tab.img" width="20" height="20" alt="" />
                </div>
              </div>
              <div class="col-8 text-start">
                <p class="sidebar-link-text">{{ tab.title }}</p>
              </div>
            </div>
          </li>
        </router-link>
        <!-- more of channel -->
        <div class="collapse" id="show_more_subscribe">
          <router-link
            v-for="tabs in sidebar_tab.subscribe_channel"
            :key="tabs"
            :to="tabs.link"
            custom
            v-slot="{ href, navigate }"
          >
            <li @click="navigate" :href="href" class="list-group-item">
              <div class="row w-100 align-items-center">
                <div class="col-4">
                  <div class="sidebar-tab-icon">
                    <img :src="tabs.img" width="20" height="20" alt="" />
                  </div>
                </div>
                <div class="col-8 text-start">
                  <p class="sidebar-link-text">{{ tabs.title }}</p>
                </div>
              </div>
            </li>
          </router-link>
        </div>
        <li
          class="list-group-item"
          data-bs-toggle="collapse"
          data-bs-target="#show_more_subscribe"
          aria-expanded="false"
          aria-controls="show_more_subscribe"
        >
          <div class="row w-100 align-items-center">
            <div class="col-4">
              <div class="sidebar-tab-icon">
                <span class="">
                  <font-awesome-icon :icon="['fas', 'caret-down']" size="lg"
                /></span>
              </div>
            </div>
            <div class="col-8 text-start">
              <p class="sidebar-link-text">Show more</p>
            </div>
          </div>
        </li>
      </ul>
      <hr class="text-secondary" />
      <!-- Third Section -->
      <h3 class="guide-section">MORE FROM VUEDIEO</h3>
      <ul class="list-group">
        <router-link
          v-for="tab in sidebar_tab.third_section"
          :key="tab.title"
          :to="tab.link"
          custom
          v-slot="{ href, navigate }"
        >
          <li
            @click="navigate"
            :href="href"
            :class="tab.active === true ? 'active' : ''"
            class="list-group-item"
          >
            <div class="row w-100 align-items-center">
              <div class="col-4">
                <div class="sidebar-tab-icon">
                  <span class="">
                    <font-awesome-icon :icon="tab.icon" size="lg"
                  /></span>
                </div>
              </div>
              <div class="col-8 text-start">
                <p class="sidebar-link-text">{{ tab.title }}</p>
              </div>
            </div>
          </li>
        </router-link>
      </ul>
      <hr class="text-secondary" />
      <!-- Fourth Section -->
      <ul class="list-group">
        <router-link
          v-for="tab in sidebar_tab.fourth_section"
          :key="tab.link"
          :to="tab.link"
          custom
          v-slot="{ href, navigate }"
        >
          <li
            @click="navigate"
            :href="href"
            :class="tab.active === true ? 'active' : ''"
            class="list-group-item"
          >
            <div class="row w-100 align-items-center">
              <div class="col-4">
                <div class="sidebar-tab-icon">
                  <span class="">
                    <font-awesome-icon :icon="tab.icon" size="lg"
                  /></span>
                </div>
              </div>
              <div class="col-8 text-start">
                <p class="sidebar-link-text">{{ tab.title }}</p>
              </div>
            </div>
          </li>
        </router-link>
      </ul>
    </section>
    <hr class="text-secondary" />
    <section id="sidebar-footer">
      <span>About</span> <span>Press</span> <span>Copyright</span>
      <span>Contact us</span> <span>Creators</span> <span>Advertise</span>
      <span>Developers</span>
      <br /><br />
      <span>Terms</span> <span>Privacy</span> <span>Policy & Safety</span>
      <span>How VueDieo works</span>
      <span>Test new features</span>
    </section>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { reactive } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
export default {
  name: "HelloWorld",
  setup() {
    const state = reactive({});
    const store = useStore();

    const sidebar_tab = computed(() => store.state.sidebar_tab);
    // const sidebar = computed(() => store.state.sidebar_show);
    onMounted(() => {
      // console.log(sidebar_tab);
      // sidebar;
    });

    const close_sidebar = () => {
      const body = document.querySelector("body")
      body.classList.remove("scrollbar-lock");
      store.commit("sidebar_trigger", false)
    };
    return { state, sidebar_tab, close_sidebar };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.overlay-background {
  /* height: 100vh; */
  /* width: 100vw; */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(240, 128, 128, 0.5);
  z-index: 15;
}
#sidebar {
  width: 265px;
  background-color: rgb(41, 39, 39);
  position: fixed;
  top: 0;
  bottom: 0;
  height: 100vh;
  z-index: 16;
  overflow-y: scroll;
}

#sidebar-header {
  padding: 1rem 0rem;
  border-bottom: 1px solid rgb(80, 79, 79);
}

.list-group-item {
  padding: 0.75rem 0rem;
  cursor: pointer;
  background-color: #292727;
  border: transparent;
}
.list-group-item:hover {
  background-color: #3f3e3e;
}
.list-group-item.active {
  background-color: #3f3e3e;
  border-radius: 0;
  border-color: transparent;
}

.list-group-item.active .sidebar-tab-icon {
  color: white;
}

.sidebar-link-text {
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.011rem;
  color: white;
}

.sidebar-tab-icon {
  width: 4.9rem;
  cursor: pointer;
  color: #817c7c;
}

.guide-section {
  text-align: start;
  color: rgb(139, 129, 129);
  padding: 0rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.07rem;
}

/* #sidebar-body, */
#sidebar-footer {
  padding: 0.85rem 1rem;
  text-align: start;
}

#sidebar-footer > span {
  color: #666262;
  display: inline-block;
  margin: 0rem 0.3rem;
  font-size: 0.9rem;
  font-weight: 600;
}
</style>
