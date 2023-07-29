<template>
  <div>
    <div class="hero-text my-14 lg:my-10">
      <h1 class="select-none relative text-center text-7xl lg:text-[10rem] py-10 font-bold uppercase">
        Studio Legends
      </h1>
    </div>

    <div class="content flex flex-col lg:flex-row gap-10 w-11/12 lg:h-[500px] justify-evenly lg:text-left">

      <div class="content-text__container h-36 w-96 lg:h-auto flex">
        <div class="content-about overflow-y-auto">
          <h1 class="absolute top-0 left-0 translate-x-8 -translate-y-10">About</h1>
          <div class="content-text">
            <p>
            <h2 class="font-bold text-xl leading-10 uppercase">The Start</h2>
            This is where it begins.
            <br>
            <h2 class="font-bold text-xl leading-10 uppercase">Dream on</h2>
            This is where we can be proud of ourselves.
            <br>
            <h2 class="font-bold text-xl leading-10 uppercase">No Fear</h2>
            Keep on going.
            <br>
            <h2 class="font-bold text-xl leading-10 uppercase">Be True</h2>
            Be yourself. Everyone else is already taken.
            <br>
            <h2 class="font-bold text-xl leading-10 uppercase">Balance</h2>
            Stars can't shine without darkness.
            <br>
            <h2 class="font-bold text-xl leading-10 uppercase">Journey</h2>
            Life is a journey, not a race.
            <br>
            <h2 class="font-bold text-xl leading-10 uppercase">Believe</h2>
            Believe you can, and you're halfway there.
            <br>
            <h2 class="font-bold text-xl leading-10 uppercase">Limit</h2>
            The only limit is the one you set in your mind.
            <br>
            <h2 class="font-bold text-xl leading-10 uppercase">Love</h2>
            Do what you love, love what you do.
            <br>
            <h2 class="font-bold text-xl leading-10 uppercase">Tough</h2>
            Life is tough, but so are you.
            <br>
            <h2 class="font-bold text-xl leading-10 uppercase">Awesome</h2>
            Do awesome things!
            <br>
            </p>
          </div>
        </div>
      </div>

      <div class="divider" />

      <div class="content-text__container h-36 lg:h-auto flex w-72">
        <div class="content-team overflow-y-auto">
          <h1 class="absolute top-0 left-0 translate-x-8 -translate-y-10">Team Members</h1>
          <div class="content-text">
            <ul class="name-list list-none p-0 m-0 flex flex-col bg-transparent items-left" ref="nameListRef">
              <li v-for="name in names" :key="name" @click="changeActiveName(name)">{{ name }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="divider" />

      <div v-if="imagesLoaded" class="content-img__container flex relative max-w-[800px]">
        <div class="content-img overflow-y-auto py-3">
          <h1 class="absolute top-0 left-0 translate-x-1 -translate-y-10">Images</h1>
          <div class="content-image flex flex-col gap-3">
            <img v-for="image in currentImages" :key="image" :src="image" alt="content-image">
          </div>
        </div>
      </div>
    </div>

    <svg
      class="z-[-100] scale-100 lg:scale-150 absolute top-1/2 -translate-y-1/4 lg:-translate-y-1/2 left-1/2 -translate-x-1/4 lg:-translate-x-1/2"
      id="visual" viewBox="0 0 900 600" width="750" height="600" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
      <g transform="translate(455.9762067861571 300.79233735587997)">
        <path id="blob1"
          d="M153.6 -144C199.8 -107.5 238.4 -53.7 238.1 -0.4C237.7 53 198.4 106.1 152.2 136.1C106.1 166.1 53 173 -8.8 181.9C-70.7 190.7 -141.4 201.4 -189.3 171.4C-237.1 141.4 -262 70.7 -244.4 17.7C-226.7 -35.4 -166.4 -70.7 -118.5 -107.2C-70.7 -143.7 -35.4 -181.4 9.2 -190.5C53.7 -199.7 107.5 -180.5 153.6 -144"
          fill="#BB004B"></path>
      </g>
      <g transform="translate(474.53597005376474 322.65115813055365)" style="visibility: hidden">
        <path id="blob2"
          d="M162.2 -171.5C198 -126.3 206.5 -63.2 205.2 -1.3C203.9 60.6 192.8 121.2 157 158C121.2 194.8 60.6 207.9 12.6 195.3C-35.4 182.7 -70.7 144.4 -120.7 107.5C-170.7 70.7 -235.4 35.4 -250.7 -15.3C-266 -66 -232 -132 -182 -177.2C-132 -222.3 -66 -246.7 -1.4 -245.2C63.2 -243.8 126.3 -216.7 162.2 -171.5"
          fill="#BB004B"></path>
      </g>
    </svg>

    <svg class="hidden lg:block z-[-100] absolute top-0 -translate-y-1/2 left-0 -translate-x-1/2" id="visual"
      viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
      <g transform="translate(455.9762067861571 300.79233735587997)">
        <path id="blob3"
          d="M153.6 -144C199.8 -107.5 238.4 -53.7 238.1 -0.4C237.7 53 198.4 106.1 152.2 136.1C106.1 166.1 53 173 -8.8 181.9C-70.7 190.7 -141.4 201.4 -189.3 171.4C-237.1 141.4 -262 70.7 -244.4 17.7C-226.7 -35.4 -166.4 -70.7 -118.5 -107.2C-70.7 -143.7 -35.4 -181.4 9.2 -190.5C53.7 -199.7 107.5 -180.5 153.6 -144"
          fill="#10e064"></path>
      </g>
      <g transform="translate(474.53597005376474 322.65115813055365)" style="visibility: hidden">
        <path id="blob4"
          d="M162.2 -171.5C198 -126.3 206.5 -63.2 205.2 -1.3C203.9 60.6 192.8 121.2 157 158C121.2 194.8 60.6 207.9 12.6 195.3C-35.4 182.7 -70.7 144.4 -120.7 107.5C-170.7 70.7 -235.4 35.4 -250.7 -15.3C-266 -66 -232 -132 -182 -177.2C-132 -222.3 -66 -246.7 -1.4 -245.2C63.2 -243.8 126.3 -216.7 162.2 -171.5"
          fill="#10e064"></path>
      </g>
    </svg>

    <svg class="hidden lg:block z-[-100] absolute bottom-0 translate-y-1/2 right-0 translate-x-1/2" id="visual"
      viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
      <g transform="translate(555.9762067861571 202.79233735587997)">
        <path id="blob5"
          d="M153.6 -144C199.8 -107.5 238.4 -53.7 238.1 -0.4C237.7 53 198.4 106.1 152.2 136.1C106.1 166.1 53 173 -8.8 181.9C-70.7 190.7 -141.4 201.4 -189.3 171.4C-237.1 141.4 -262 70.7 -244.4 17.7C-226.7 -35.4 -166.4 -70.7 -118.5 -107.2C-70.7 -143.7 -35.4 -181.4 9.2 -190.5C53.7 -199.7 107.5 -180.5 153.6 -144"
          fill="#10e064"></path>
      </g>
      <g transform="translate(474.53597005376474 322.65115813055365)" style="visibility: hidden">
        <path id="blob6"
          d="M162.2 -171.5C198 -126.3 206.5 -63.2 205.2 -1.3C203.9 60.6 192.8 121.2 157 158C121.2 194.8 60.6 207.9 12.6 195.3C-35.4 182.7 -70.7 144.4 -120.7 107.5C-170.7 70.7 -235.4 35.4 -250.7 -15.3C-266 -66 -232 -132 -182 -177.2C-132 -222.3 -66 -246.7 -1.4 -245.2C63.2 -243.8 126.3 -216.7 162.2 -171.5"
          fill="#10e064"></path>
      </g>
    </svg>

  </div>
</template>

<script setup lang="ts">
import KUTE from 'kute.js'
import { ref, onMounted, computed } from 'vue'

const nameListRef = ref<HTMLUListElement | null>(null);

const names = ['Po', 'Rose', 'Lee', 'Jack', 'Bobby', 'Gilbert', 'Tony', 'Bill', 'Lux', 'William', 'Cho'];

type ImagesByNames = {
  [key: string]: string[];
};

const imagesByNames: ImagesByNames = {
  Po: [
    'https://www.placeholder.com/900x500',
    'https://www.placeholder.com/800x400',
    'https://www.placeholder.com/700x300',
  ],
  Rose: [
    'https://www.placeholder.com/800x500',
    'https://www.placeholder.com/700x400',
  ],
  Lee: [
    'https://www.placeholder.com/900x500',
    'https://www.placeholder.com/800x400',
  ],
  Jack: [
    'https://www.placeholder.com/800x500',
    'https://www.placeholder.com/700x400',
  ],
  Bobby: [
    'https://www.placeholder.com/800x500',
    'https://www.placeholder.com/700x400',
  ],
  Gilbert: [
    'https://www.placeholder.com/900x500',
    'https://www.placeholder.com/800x400',
  ],
  Tony: [
    'https://www.placeholder.com/800x500',
    'https://www.placeholder.com/700x400',
  ],
  Bill: [
    'https://www.placeholder.com/900x500',
    'https://www.placeholder.com/800x400',
  ],
  Lux: [
    'https://www.placeholder.com/800x500',
    'https://www.placeholder.com/700x400',
  ],
  William: [
    'https://www.placeholder.com/800x500',
    'https://www.placeholder.com/700x400',
  ],
  Cho: [
    'https://www.placeholder.com/900x500',
    'https://www.placeholder.com/800x400',
  ],
  // Add other names and their image sets as needed
};

// Reactive property to store the currently clicked name
const activeName = ref(names[0]);

// Computed property to get the currently displayed images based on the clicked name
const currentImages = computed(() => imagesByNames[activeName.value]);

// Reactive property to track if the images are loaded and ready to be displayed
const imagesLoaded = ref(false);

// Function to add the "active" class to the clicked name
const changeActiveName = (name: string) => {
  const nameItems = nameListRef.value?.querySelectorAll('li');
  for (const itemName of nameItems!) {
    itemName.classList.remove('active');
    if (itemName.textContent === name) {
      itemName.classList.add('active');
      activeName.value = name; // Update the activeName when a name is clicked
    }
  }
};

// Check if all images are loaded and set imagesLoaded to true
const checkImageLoad = () => {
  const images = currentImages.value;
  const promises = images.map((src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = resolve;
      img.src = src;
    });
  });

  Promise.all(promises).then(() => {
    imagesLoaded.value = true;
  });
};

// Listen for the component to be mounted and check if all images are loaded
onMounted(checkImageLoad);

onMounted(() => {
  KUTE.fromTo(
    '#blob1',
    { path: '#blob1' },
    { path: '#blob2' },
    { repeat: 999, duration: 30000, yoyo: true },
  ).start()
  KUTE.fromTo(
    '#blob3',
    { path: '#blob3' },
    { path: '#blob4' },
    { repeat: 999, duration: 10000, yoyo: true }
  ).start()
  KUTE.fromTo(
    '#blob5',
    { path: '#blob5' },
    { path: '#blob6' },
    { repeat: 999, duration: 10000, yoyo: true }
  ).start()

})
</script>

<style scoped>
.hero-text h1::before,
.hero-text h1::after {
  content: '';
  height: 1px;
  display: inline-block;
  width: 50%;
  background-color: white;
}

.hero-text h1::before {
  position: absolute;
  top: 50%;
  transform: translateY(-8000%);
  left: 0;
}

.hero-text h1::after {
  position: absolute;
  bottom: 50%;
  transform: translateY(8000%);
  right: 0;
}

.content h1 {
  font-weight: 700;
  font-size: 1.5rem;
  text-transform: uppercase;
}

.content-text {
  position: relative;
  padding: 1rem 2rem;
  overflow-y: scroll;
  max-width: 30rem;
}

.content-text__container {
  position: relative;
}

.content-text br {
  content: "";
  margin: 1.5rem;
  display: block;
}

.content-image img {
  border-radius: 15px;
}

.name-list li {
  font-size: 1.5rem;
  font-weight: 800;
  display: inline-block;
  margin: px;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  user-select: none;
  transition: all .3s;
}

.name-list li.active {
  padding: 10px 30px;
  color: #10e064;
  transition: all .3s;
}

.name-list li::before {
  content: '';
  display: none;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #10e064;
  transition: all .8s;
}

.name-list li.active::before {
  display: block;
  transition: all .8s;
}

.divider {
  content: '';
  z-index: 10;
  width: 1px;
  background-color: white;
  height: 105%;
  transform: translateY(-40px);
  top: 0;
  right: 0;
}

@media (min-width: 1024px) {

  .content-text__container::after,
  .content-img__container::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2vh;
    background: linear-gradient(360deg, rgba(36, 36, 36, .8) 0%, rgba(36, 36, 36, 0) 100%);
    z-index: 10;
    pointer-events: none;
  }
}
</style>