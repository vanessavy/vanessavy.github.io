<template>
    <div
      class="py-4 p-st"
      :class="{
        'bg-light': !nightMode,
        'bg-dark2': nightMode,
        'text-light': nightMode,
      }"
    >
      <div class="container">
        <div
          class="text-center"
          data-aos="fade"
          data-aos-once="true"
          data-aos-duration="1000"
        >
          <span
            class="title text-center"
            :class="{ pgray: !nightMode, 'text-light': nightMode }"
            >Projects</span
          >
        </div>
        <hr
          width="50%"
          :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
        />
        <div class="row" >
          <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
            <ProjectsTimeline :data="SoftwareDevelopment" :nightMode="nightMode" />
          </div>
          <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12">
            <ProjectsTimeline :data="VRDevelopment" :nightMode="nightMode" />
          </div>
        </div>
      </div>
    </div>
  </template>
    
    <script>
    import ProjectsTimeline from "./helpers/ProjectsTimeline.vue"
    import info from "../../info";
    
    export default {
      name: "Projects",
      components: {
        ProjectsTimeline,
      },
      props: {
        nightMode: {
          type: Boolean,
        },
      },
      data() {
        return {
        SoftwareDevelopment: {
          title: "Software Development",
          data: info.SoftwareDevelopment,
        },
        VRDevelopment: {
          title: "Virtual Reality",
          data: info.VRDevelopment,
        }
      };
      },
    };
    </script>
    
    <style scoped>
    .grid{
      align-items: center;
      display: grid;
      grid-template-columns: 1fr;
  
    }
    .title {
      font-size: 30px;
      font-weight: 500;
    }
    </style>
    