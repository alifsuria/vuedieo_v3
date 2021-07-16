<template>
  <div>
    <MiniSidebar />
    <div class="home-content">
      <!-- Filter Genre -->
      <div id="filter-container">
        <div id="filter-box">
          <!-- Left Arrow Box -->
          <div
            v-if="state.scroll_value !== 0"
            id="left-arrow"
            class="text-light"
            @click="left_scroll()"
          >
            <font-awesome-icon :icon="['fas', 'caret-left']" size="lg" />
          </div>
          <div
            id="filter-group"
            ref="filter_group_ref"
            @scroll="scroll_data_processing"
          >
            <span
              v-for="(category, index) in state.filter"
              :key="index"
              class="btn rounded-pill btn-outline-secondary text-light"
              :class="category.active === true ? 'active' : ''"
            >
              {{ category.title }}
            </span>
          </div>
          <!-- Right Arrow Box -->
          <div
            v-if="state.scroll_value !== state.max_scroll_left"
            id="right-arrow"
            class="text-light"
            @click="right_scroll()"
          >
            <font-awesome-icon :icon="['fas', 'caret-right']" size="lg" />
          </div>
        </div>
      </div>
      <div class="row w-100">
        <div class="col-3">
          <div class="card" style="width: 18rem">
            <img src="../assets/carousel3.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-3"></div>
        <div class="col-3"></div>
        <div class="col-3"></div>
      </div>
      <!-- <section>
        <p class="text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          ea officia, ipsum iste optio delectus, eos pariatur dolorum hic animi
          minus eveniet doloremque, enim ullam fugiat quos repellat! Tenetur,
          dolor? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tempore impedit fugiat consequuntur officia vitae quo quidem ipsam
          voluptatem officiis sunt? Illo numquam porro saepe aliquam laudantium
          repellat facilis earum cupiditate!lorem Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Similique accusamus ab illum facere
          atque praesentium et dolorum, natus quidem recusandae voluptates
          tempora harum laborum necessitatibus iure corrupti molestiae commodi.
          Consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa tenetur, illum dolore corporis beatae nisi distinctio. Commodi
          architecto, nihil qui molestias rerum similique ea. Ex eos ducimus
          nemo possimus accusamus.
        </p>
        <p class="text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          ea officia, ipsum iste optio delectus, eos pariatur dolorum hic animi
          minus eveniet doloremque, enim ullam fugiat quos repellat! Tenetur,
          dolor? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tempore impedit fugiat consequuntur officia vitae quo quidem ipsam
          voluptatem officiis sunt? Illo numquam porro saepe aliquam laudantium
          repellat facilis earum cupiditate!lorem Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Similique accusamus ab illum facere
          atque praesentium et dolorum, natus quidem recusandae voluptates
          tempora harum laborum necessitatibus iure corrupti molestiae commodi.
          Consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa tenetur, illum dolore corporis beatae nisi distinctio. Commodi
          architecto, nihil qui molestias rerum similique ea. Ex eos ducimus
          nemo possimus accusamus.
        </p>
        <p class="text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          ea officia, ipsum iste optio delectus, eos pariatur dolorum hic animi
          minus eveniet doloremque, enim ullam fugiat quos repellat! Tenetur,
          dolor? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tempore impedit fugiat consequuntur officia vitae quo quidem ipsam
          voluptatem officiis sunt? Illo numquam porro saepe aliquam laudantium
          repellat facilis earum cupiditate!lorem Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Similique accusamus ab illum facere
          atque praesentium et dolorum, natus quidem recusandae voluptates
          tempora harum laborum necessitatibus iure corrupti molestiae commodi.
          Consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa tenetur, illum dolore corporis beatae nisi distinctio. Commodi
          architecto, nihil qui molestias rerum similique ea. Ex eos ducimus
          nemo possimus accusamus.
        </p>
        <p class="text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          ea officia, ipsum iste optio delectus, eos pariatur dolorum hic animi
          minus eveniet doloremque, enim ullam fugiat quos repellat! Tenetur,
          dolor? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tempore impedit fugiat consequuntur officia vitae quo quidem ipsam
          voluptatem officiis sunt? Illo numquam porro saepe aliquam laudantium
          repellat facilis earum cupiditate!lorem Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Similique accusamus ab illum facere
          atque praesentium et dolorum, natus quidem recusandae voluptates
          tempora harum laborum necessitatibus iure corrupti molestiae commodi.
          Consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa tenetur, illum dolore corporis beatae nisi distinctio. Commodi
          architecto, nihil qui molestias rerum similique ea. Ex eos ducimus
          nemo possimus accusamus.
        </p>
        <p class="text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          ea officia, ipsum iste optio delectus, eos pariatur dolorum hic animi
          minus eveniet doloremque, enim ullam fugiat quos repellat! Tenetur,
          dolor? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tempore impedit fugiat consequuntur officia vitae quo quidem ipsam
          voluptatem officiis sunt? Illo numquam porro saepe aliquam laudantium
          repellat facilis earum cupiditate!lorem Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Similique accusamus ab illum facere
          atque praesentium et dolorum, natus quidem recusandae voluptates
          tempora harum laborum necessitatibus iure corrupti molestiae commodi.
          Consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa tenetur, illum dolore corporis beatae nisi distinctio. Commodi
          architecto, nihil qui molestias rerum similique ea. Ex eos ducimus
          nemo possimus accusamus.
        </p>
        <p class="text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          ea officia, ipsum iste optio delectus, eos pariatur dolorum hic animi
          minus eveniet doloremque, enim ullam fugiat quos repellat! Tenetur,
          dolor? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tempore impedit fugiat consequuntur officia vitae quo quidem ipsam
          voluptatem officiis sunt? Illo numquam porro saepe aliquam laudantium
          repellat facilis earum cupiditate!lorem Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Similique accusamus ab illum facere
          atque praesentium et dolorum, natus quidem recusandae voluptates
          tempora harum laborum necessitatibus iure corrupti molestiae commodi.
          Consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa tenetur, illum dolore corporis beatae nisi distinctio. Commodi
          architecto, nihil qui molestias rerum similique ea. Ex eos ducimus
          nemo possimus accusamus.
        </p>
        <p class="text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          ea officia, ipsum iste optio delectus, eos pariatur dolorum hic animi
          minus eveniet doloremque, enim ullam fugiat quos repellat! Tenetur,
          dolor? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tempore impedit fugiat consequuntur officia vitae quo quidem ipsam
          voluptatem officiis sunt? Illo numquam porro saepe aliquam laudantium
          repellat facilis earum cupiditate!lorem Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Similique accusamus ab illum facere
          atque praesentium et dolorum, natus quidem recusandae voluptates
          tempora harum laborum necessitatibus iure corrupti molestiae commodi.
          Consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa tenetur, illum dolore corporis beatae nisi distinctio. Commodi
          architecto, nihil qui molestias rerum similique ea. Ex eos ducimus
          nemo possimus accusamus.
        </p>
        <p class="text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          ea officia, ipsum iste optio delectus, eos pariatur dolorum hic animi
          minus eveniet doloremque, enim ullam fugiat quos repellat! Tenetur,
          dolor? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tempore impedit fugiat consequuntur officia vitae quo quidem ipsam
          voluptatem officiis sunt? Illo numquam porro saepe aliquam laudantium
          repellat facilis earum cupiditate!lorem Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Similique accusamus ab illum facere
          atque praesentium et dolorum, natus quidem recusandae voluptates
          tempora harum laborum necessitatibus iure corrupti molestiae commodi.
          Consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa tenetur, illum dolore corporis beatae nisi distinctio. Commodi
          architecto, nihil qui molestias rerum similique ea. Ex eos ducimus
          nemo possimus accusamus.
        </p>
        <p class="text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          ea officia, ipsum iste optio delectus, eos pariatur dolorum hic animi
          minus eveniet doloremque, enim ullam fugiat quos repellat! Tenetur,
          dolor? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tempore impedit fugiat consequuntur officia vitae quo quidem ipsam
          voluptatem officiis sunt? Illo numquam porro saepe aliquam laudantium
          repellat facilis earum cupiditate!lorem Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Similique accusamus ab illum facere
          atque praesentium et dolorum, natus quidem recusandae voluptates
          tempora harum laborum necessitatibus iure corrupti molestiae commodi.
          Consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa tenetur, illum dolore corporis beatae nisi distinctio. Commodi
          architecto, nihil qui molestias rerum similique ea. Ex eos ducimus
          nemo possimus accusamus.
        </p>
        <p class="text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          ea officia, ipsum iste optio delectus, eos pariatur dolorum hic animi
          minus eveniet doloremque, enim ullam fugiat quos repellat! Tenetur,
          dolor? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tempore impedit fugiat consequuntur officia vitae quo quidem ipsam
          voluptatem officiis sunt? Illo numquam porro saepe aliquam laudantium
          repellat facilis earum cupiditate!lorem Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Similique accusamus ab illum facere
          atque praesentium et dolorum, natus quidem recusandae voluptates
          tempora harum laborum necessitatibus iure corrupti molestiae commodi.
          Consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa tenetur, illum dolore corporis beatae nisi distinctio. Commodi
          architecto, nihil qui molestias rerum similique ea. Ex eos ducimus
          nemo possimus accusamus.
        </p>
        <p class="text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          ea officia, ipsum iste optio delectus, eos pariatur dolorum hic animi
          minus eveniet doloremque, enim ullam fugiat quos repellat! Tenetur,
          dolor? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tempore impedit fugiat consequuntur officia vitae quo quidem ipsam
          voluptatem officiis sunt? Illo numquam porro saepe aliquam laudantium
          repellat facilis earum cupiditate!lorem Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Similique accusamus ab illum facere
          atque praesentium et dolorum, natus quidem recusandae voluptates
          tempora harum laborum necessitatibus iure corrupti molestiae commodi.
          Consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa tenetur, illum dolore corporis beatae nisi distinctio. Commodi
          architecto, nihil qui molestias rerum similique ea. Ex eos ducimus
          nemo possimus accusamus.
        </p>
        <p class="text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          ea officia, ipsum iste optio delectus, eos pariatur dolorum hic animi
          minus eveniet doloremque, enim ullam fugiat quos repellat! Tenetur,
          dolor? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tempore impedit fugiat consequuntur officia vitae quo quidem ipsam
          voluptatem officiis sunt? Illo numquam porro saepe aliquam laudantium
          repellat facilis earum cupiditate!lorem Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Similique accusamus ab illum facere
          atque praesentium et dolorum, natus quidem recusandae voluptates
          tempora harum laborum necessitatibus iure corrupti molestiae commodi.
          Consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa tenetur, illum dolore corporis beatae nisi distinctio. Commodi
          architecto, nihil qui molestias rerum similique ea. Ex eos ducimus
          nemo possimus accusamus.
        </p>
        <p class="text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          ea officia, ipsum iste optio delectus, eos pariatur dolorum hic animi
          minus eveniet doloremque, enim ullam fugiat quos repellat! Tenetur,
          dolor? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tempore impedit fugiat consequuntur officia vitae quo quidem ipsam
          voluptatem officiis sunt? Illo numquam porro saepe aliquam laudantium
          repellat facilis earum cupiditate!lorem Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Similique accusamus ab illum facere
          atque praesentium et dolorum, natus quidem recusandae voluptates
          tempora harum laborum necessitatibus iure corrupti molestiae commodi.
          Consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa tenetur, illum dolore corporis beatae nisi distinctio. Commodi
          architecto, nihil qui molestias rerum similique ea. Ex eos ducimus
          nemo possimus accusamus.
        </p>
        <p class="text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          ea officia, ipsum iste optio delectus, eos pariatur dolorum hic animi
          minus eveniet doloremque, enim ullam fugiat quos repellat! Tenetur,
          dolor? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tempore impedit fugiat consequuntur officia vitae quo quidem ipsam
          voluptatem officiis sunt? Illo numquam porro saepe aliquam laudantium
          repellat facilis earum cupiditate!lorem Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Similique accusamus ab illum facere
          atque praesentium et dolorum, natus quidem recusandae voluptates
          tempora harum laborum necessitatibus iure corrupti molestiae commodi.
          Consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa tenetur, illum dolore corporis beatae nisi distinctio. Commodi
          architecto, nihil qui molestias rerum similique ea. Ex eos ducimus
          nemo possimus accusamus.
        </p>
        <p class="text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          ea officia, ipsum iste optio delectus, eos pariatur dolorum hic animi
          minus eveniet doloremque, enim ullam fugiat quos repellat! Tenetur,
          dolor? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tempore impedit fugiat consequuntur officia vitae quo quidem ipsam
          voluptatem officiis sunt? Illo numquam porro saepe aliquam laudantium
          repellat facilis earum cupiditate!lorem Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Similique accusamus ab illum facere
          atque praesentium et dolorum, natus quidem recusandae voluptates
          tempora harum laborum necessitatibus iure corrupti molestiae commodi.
          Consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa tenetur, illum dolore corporis beatae nisi distinctio. Commodi
          architecto, nihil qui molestias rerum similique ea. Ex eos ducimus
          nemo possimus accusamus.
        </p>
        <p class="text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          ea officia, ipsum iste optio delectus, eos pariatur dolorum hic animi
          minus eveniet doloremque, enim ullam fugiat quos repellat! Tenetur,
          dolor? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tempore impedit fugiat consequuntur officia vitae quo quidem ipsam
          voluptatem officiis sunt? Illo numquam porro saepe aliquam laudantium
          repellat facilis earum cupiditate!lorem Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Similique accusamus ab illum facere
          atque praesentium et dolorum, natus quidem recusandae voluptates
          tempora harum laborum necessitatibus iure corrupti molestiae commodi.
          Consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa tenetur, illum dolore corporis beatae nisi distinctio. Commodi
          architecto, nihil qui molestias rerum similique ea. Ex eos ducimus
          nemo possimus accusamus.
        </p>
        <p class="text-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          ea officia, ipsum iste optio delectus, eos pariatur dolorum hic animi
          minus eveniet doloremque, enim ullam fugiat quos repellat! Tenetur,
          dolor? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Tempore impedit fugiat consequuntur officia vitae quo quidem ipsam
          voluptatem officiis sunt? Illo numquam porro saepe aliquam laudantium
          repellat facilis earum cupiditate!lorem Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Similique accusamus ab illum facere
          atque praesentium et dolorum, natus quidem recusandae voluptates
          tempora harum laborum necessitatibus iure corrupti molestiae commodi.
          Consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa tenetur, illum dolore corporis beatae nisi distinctio. Commodi
          architecto, nihil qui molestias rerum similique ea. Ex eos ducimus
          nemo possimus accusamus.
        </p>
      </section> -->
    </div>
  </div>
</template>
<script>
import { reactive, ref } from "@vue/reactivity";
// @ is an alias to /src
import MiniSidebar from "../components/MiniSidebar.vue";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "Home",
  components: {
    MiniSidebar,
  },
  setup() {
    const filter_group_ref = ref(null);
    const state = reactive({
      filter: [
        { title: "All", active: true },
        { title: "Mixes", active: false },
        { title: "Music", active: false },
        { title: "Dota 2", active: false },
        { title: "Comedies", active: false },
        { title: "Anime", active: false },
        { title: "Javascript", active: false },
        { title: "CSS", active: false },
        { title: "Cats", active: false },
        { title: "Nature Documentaries", active: false },
        { title: "Vue", active: false },
        { title: "Adobe Illustrator", active: false },
        { title: "Recently Uploaded", active: false },
        { title: "Watched", active: false },
      ],
      scroll_value: 0,
      max_scroll_left: 0,
    });

    onMounted(() => {
      var maxScrollLeft =
        filter_group_ref.value.scrollWidth - filter_group_ref.value.clientWidth;
      state.max_scroll_left = maxScrollLeft;
      console.log(maxScrollLeft, " - maxScrollLeft");
      console.log(filter_group_ref.value.scrollWidth, " - scrollWidth");
      console.log(filter_group_ref.value.clientWidth, " - clientWidth");
    });

    function right_scroll() {
      // console.log(right_scroll_ref.value)
      filter_group_ref.value.scrollLeft += 100;
    }
    function left_scroll() {
      // console.log(right_scroll_ref.value)
      filter_group_ref.value.scrollLeft -= 100;
    }

    const scroll_data_processing = () =>
      (state.scroll_value = filter_group_ref.value.scrollLeft);
    return {
      state,
      right_scroll,
      left_scroll,
      filter_group_ref,
      scroll_data_processing,
    };
  },
};
</script>

<style scoped>
.home-content {
  margin-left: 79px;
  background-color: #363c42;
  /* overflow: hidden; */
}

#filter-container {
  position: sticky;
  top: 3.9rem;
  background-color: #212529;
  z-index: 9;
  border-bottom: 1px solid rgba(128, 124, 124, 0.267);
  border-top: 1px solid rgba(128, 124, 124, 0.267);
}

#filter-box {
  position: relative;
  height: 64px;
}

#filter-group {
  display: inline-block;
  padding: 0.85rem 2rem;
  width: 100%;
  text-align: start;
  overflow-x: hidden;
  scroll-behavior: smooth;
  white-space: nowrap;
}
#filter-group span {
  font-size: 0.9rem;
  margin: 0rem 0.4rem;
}

#right-arrow::before {
  content: "";
  width: 55px;
  background: linear-gradient(
    to right,
    rgba(83, 81, 81, 0),
    rgba(90, 89, 89, 0.377),
    rgba(90, 89, 89, 0.89),
    rgb(90, 89, 89)
  );
  position: absolute;
  height: 100%;
  /* right: 55px; */
  transform: translateX(-55px);
}
#right-arrow {
  background: linear-gradient(
    to right,
    rgb(90, 89, 89),
    rgb(90, 89, 89),
    rgb(90, 89, 89),
    rgb(90, 89, 89)
  );
  width: 55px;
  height: 100%;
  display: inline-block;
  position: absolute;
  right: 0;
  transform: translateX();
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  cursor: pointer;
}

#left-arrow {
  background: linear-gradient(
    to left,
    rgb(90, 89, 89),
    rgb(90, 89, 89),
    rgb(90, 89, 89),
    rgb(90, 89, 89)
  );

  width: 55px;
  height: 100%;
  display: inline-block;
  position: absolute;
  left: 0;
  transform: translateX();
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  cursor: pointer;
}

#left-arrow::after {
  content: "";
  width: 55px;
  background: linear-gradient(
    to left,
    rgba(83, 81, 81, 0),
    rgba(90, 89, 89, 0.377),
    rgba(90, 89, 89, 0.89),
    rgb(90, 89, 89)
  );
  position: absolute;
  height: 100%;
  /* left: 55px; */
  transform: translateX(55px);
}
</style>
