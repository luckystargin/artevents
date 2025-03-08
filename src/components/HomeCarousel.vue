<template>
  <!-- s02輪播 -->
  <section id="s02">
    <!-- <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false"> -->
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>

      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      ></div>
      <div class="carousel-inner" style="width: auto">
        <!-- bg-cover + vh-100 -->
        <!-- active保留第一個段落，其他段落拿掉-->
        <div
          class="carousel-item bg-cover active"
          style="background-image: url(image/ni03.jpeg); background-attachment: fixed"
        >
          <div
            class="carousel-caption d-none d-md-block p-3 rounded-4 shadow-lg"
            style="max-width: 200px; margin: 0 auto"
          ></div>
        </div>
        <div
          class="carousel-item bg-cover"
          style="background-image: url(image/hp02.jpg); background-attachment: fixed"
        >
          <div
            class="carousel-caption d-none d-md-block p-3 rounded-4 shadow-lg"
            style="max-width: 200px; margin: 0 auto"
          ></div>
        </div>
        <div
          class="carousel-item bg-cover"
          style="background-image: url(image/di03.jpg); background-attachment: fixed"
        >
          <div
            class="carousel-caption d-none d-md-block p-3 rounded-4 shadow-lg"
            style="max-width: 200px; margin: 0 auto"
          ></div>
        </div>
        <div
          class="carousel-item bg-cover"
          style="background-image: url(image/la02.jpg); background-attachment: fixed"
        >
          <div
            class="carousel-caption d-none d-md-block p-3 rounded-4 shadow-lg"
            style="max-width: 200px; margin: 0 auto"
          ></div>
        </div>
      </div>
      <button
        class="carousel-control-prev tx-006"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">上一頁</span>
      </button>
      <button
        class="carousel-control-next tx-006"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">下一頁</span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.carousel-item.bg-cover {
  position: relative;
  height: 80vh;
  background-size: cover;
  background-position: center;
}

.carousel-item.bg-cover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  /* 半透明白色 */
}
</style>
