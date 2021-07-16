import { createStore } from "vuex";

export default createStore({
  state: {
    sidebar_show: false,
    sidebar_tab: {
      sidebar_playlist: [
        { link: "/playlist/dummy-playlist-1", title: "Dummy PLaylist 1" },
        { link: "/playlist/dummy-playlist-2", title: "Dummy PLaylist 2" },
        { link: "/playlist/dummy-playlist-3", title: "Dummy PLaylist 3" },
        { link: "/playlist/dummy-playlist-4", title: "Dummy PLaylist 4" },
      ],
      subscribe_channel: [
        {
          title: "Vue Channel 1",
          img: require("../assets/logo.png"),
          link: "/liked-video",
        },
        {
          title: "Vue Channel 2",
          img: require("../assets/logo.png"),
          link: "/liked-video",
        },
        {
          title: "Vue Channel 3",
          img: require("../assets/logo.png"),
          link: "/liked-video",
        },
        {
          title: "Vue Channel 4",
          img: require("../assets/logo.png"),
          link: "/liked-video",
        },
      ],
      first_section: [
        { link: "/", icon: ["fas", "home"], title: "Home", active: true },
        {
          link: "/explore",
          icon: ["fas", "compass"],
          title: "Explore",
          active: false,
        },
        {
          link: "/subscription",
          icon: ["fas", "wallet"],
          title: "Subscription",
          active: false,
        },
      ],
      second_section: [
        {
          link: "/library",
          icon: ["fas", "window-restore"],
          title: "Library",
          active: false,
        },
        {
          link: "/history",
          icon: ["fas", "history"],
          title: "History",
          active: false,
        },
        {
          link: "/your-videos",
          icon: ["fa", "caret-square-right"],
          title: "Your videos",
          active: false,
        },
        {
          link: "/watch-later",
          icon: ["fas", "clock"],
          title: "Watch later",
          active: false,
        },
        {
          link: "/liked-video",
          icon: ["fas", "thumbs-up"],
          title: "Liked videos",
          active: false,
        },
      ],
      third_section: [
        {
          link: "/premium",
          icon: ["fas", "crown"],
          title: "Premium",
          active: false,
        },
        {
          link: "/gaming",
          icon: ["fas", "gamepad"],
          title: "Gaming",
          active: false,
        },
        {
          link: "/live",
          icon: ["fas", "broadcast-tower"],
          title: "Live",
          active: false,
        },
        {
          link: "/sports",
          icon: ["fas", "trophy"],
          title: "Sports",
          active: false,
        },
      ],
      fourth_section: [
        {
          link: "/settings",
          icon: ["fas", "cog"],
          title: "Settings",
          active: false,
        },
        {
          link: "/report-history",
          icon: ["fas", "flag"],
          title: "Report history",
          active: false,
        },
        {
          link: "/help",
          icon: ["fas", "question-circle"],
          title: "Library",
          active: false,
        },
        {
          link: "/feedback",
          icon: ["fas", "exclamation-circle"],
          title: "Feedback",
          active: false,
        },
      ],
    },
  },
  mutations: {
    sidebar_trigger(state, payload) {
      state.sidebar_show = payload;
    },
  },
  actions: {},
  modules: {},
});
