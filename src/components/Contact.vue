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
      >
        <span
          class="title text"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >Contact</span
        >
      </div>

      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />
      <br />
      <div class="grid">
        <div class="text-center">
          <div
            class="mb-3s"
          >
            <input
              type="text"
              name="user_name"
              v-model="name"
              placeholder="Name"
              class="pinput"
              :class="{
                pgray: !nightMode,
                'pgray-dark': nightMode,
                'text-light': nightMode,
              }"
              style="transition-delay: 0.2s"
            />
          </div>

          <div
            class="my-3"
          >
            <input
              type="email"
              name="user_email"
              v-model="email"
              placeholder="Email"
              class="pinput"
              :class="{
                pgray: !nightMode,
                'pgray-dark': nightMode,
                'text-light': nightMode,
              }"
              style="transition-delay: 0.4s"
            />
          </div>

          <div
            class="my-3"
          >
            <textarea
              name="message"
              v-model="text"
              placeholder="Message"
              class="pinput"
              rows="4"
              :class="{
                pgray: !nightMode,
                'pgray-dark': nightMode,
                'text-light': nightMode,
              }"
              style="transition-delay: 0.6s"
            ></textarea>
          </div>

          <button
            @click.prevent="sendEmail"
            class="mt-1 btn mb-3"
          >
            Send
          </button>
        </div>

        <div class="text-center">
          <div
            class="mb-3"
          >
          <span
            class="title"
            :class="{ pgray: !nightMode, 'text-light': nightMode }"
            >Vanessa Nguyen</span>
            <br />
          <span
          class="title2"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >Software Engineer</span>
          </div>

          <div
            class="my-3"
          >
          <span
          class="title0"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >Phone</span>
          <br />
          <span
          class="title2 "
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >+46 769 33 18 60</span>
          </div>

          <div
            class="my-3"
          >
          <span
          class="title0"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >Email</span>
          <br />
          <span
          class="title2"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >vanessavy.nguyen@outlook.com</span>
          </div>
        </div>
      </div>
    </div>

      <Snackbar
        :showSnackbar="showSnackbar"
        @close="closeSnackbar"
        :snackbarMessage="snackbarMessage"
        :snackbarColor="snackbarColor"
      />
  </div>
</template>

<script>
import config from "../../config";
import emailjs from "emailjs-com";

import Snackbar from "./helpers/Snackbar";

export default {
  name: "Contact",
  components: {
    Snackbar,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      email: "",
      name: "",
      text: "",
      showSnackbar: false,
      snackbarMessage: "",
      snackbarColor: "",
    };
  },
  methods: {
    closeSnackbar(val) {
      if (!val) {
        setTimeout(() => {
          this.showSnackbar = val;
        }, 1000);
      }
    },
    sendEmail() {
      if (!this.email || !this.name || !this.text) {
        this.showSnackbar = true;
        this.snackbarMessage = "Please all the fields";
        this.snackbarColor = "rgb(212, 149, 97)";
      } else {
        var obj = {
          user_email: this.email,
          from_name: this.name,
          message_html: this.text,
          to_name: "Vanessa Nguyen",
        };

        emailjs
          .send(
            config.emailjs.serviceID,
            config.emailjs.templateID,
            obj,
            config.emailjs.userID
          )
          .then(
            (result) => {
              this.showSnackbar = true;
              this.snackbarMessage = "Thanks! Message recieved.";
              this.snackbarColor = "#1aa260";

              this.email = "";
              this.text = "";
              this.name = "";
            },
            (error) => {
              this.showSnackbar = true;
              this.snackbarMessage = "Oops! Something went wrong.";
              this.snackbarColor = "rgb(212, 149, 97)";
            }
          );
      }
    },
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.title {
  font-size: 30px;
  font-weight: 500;
}
.title0 {
  font-size: 24px;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 20px;
  font-weight: 400;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.pinput {
  font-size: 18px;
  outline: none;
  border: none;
  border-radius: 7px;
  padding: 10px;
  width: 100%;
  transition: all 1s;
}

.btn {
  border-color: #669db3ff;
  color: #669db3ff;
  width: 100%;
}

.btn:hover {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}

.btn:focus {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}

.pgray-dark {
  background-color: #3c4148 !important;
}

@media screen and (max-width: 1000px) {
  .pinput {
    width: 90%;
  }
  .pinput {
    width: 90%;
  }

  .btn {
    width: 90%;
  }
}
@media only screen and (max-width: 580px) {
.grid {
  display: grid;
  grid-template-columns: 1fr;
}
}
</style>
