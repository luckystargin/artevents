<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref, watch, type Ref } from 'vue';

type CityData = {
  CityEngName: string;
  CityName: string;
  AreaList: AreaData[];
};

type AreaData = {
  ZipCode: string;
  AreaEngName: string;
  AreaName: string;
};

type Allart = {
  UID: string;
  title: string;
  startDate: string;
  showInfo: {
    location: string;
    locationName: string;
  }[];
  diffDays: number;
};

const allarts: Ref<Allart[]> = ref([]);
const allCityData_arts: Ref<CityData[]> = ref([]);
const areas: Ref<AreaData[]> = ref([]);
const selectedCity = ref('');
const selectedArea = ref('');
const showAllarts: Ref<Allart[]> = ref([]);

function countDown(date: string) {
  const now = new Date();
  const end = new Date(date);
  const diff = end.getTime() - now.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

onMounted(async () => {
  allCityData_arts.value = await axios.get('/json/CityCountyData.json').then((res) => res.data);
  allarts.value = (
    await axios.get<Allart[]>('/json/artEventsShowData.json').then((res) => res.data)
  ).map((item) => {
    const diffDays = countDown(item.startDate);
    return { ...item, diffDays };
  });

  console.log(allCityData_arts.value);
});

watch(selectedCity, (newCity) => {
  selectedArea.value = '';
  const cityData = allCityData_arts.value.find((item) => item.CityName === newCity);

  areas.value = cityData ? cityData.AreaList : [];
});

watch(selectedArea, (newArea) => {
  console.log(newArea);
  showAllarts.value = [];

  if (!newArea) return;
  const findAllarts = allarts.value
    .filter(
      (item) =>
        item.showInfo[0].location.startsWith(selectedCity.value + selectedArea.value) &&
        item.diffDays > 0,
    )
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  console.log(findAllarts);
  showAllarts.value = findAllarts;
});
</script>
<template>
  <section id="s03">
    <div class="mt-3 container-fluid">
      <div class="display-4 fw-900 text-center my-3 tx-004">查詢藝文活動</div>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <select
            name="selectCity_arts"
            id="selectCity_arts"
            class="form-select form-select-lg mt-4"
            v-model="selectedCity"
          >
            <option value="" class="text-center" selected disabled>---選擇縣市名稱---</option>
            <option v-for="city in allCityData_arts" :key="city.CityName" :value="city.CityName">
              {{ city.CityName }}
            </option>
          </select>
          <select
            name="selectArea"
            id="selectArea"
            class="form-select form-select-lg mt-3"
            v-model="selectedArea"
          >
            <option value="" class="text-center" selected disabled>---選擇鄉鎮區名稱---</option>
            <option v-for="area in areas" :key="area.AreaName" :value="area.AreaName">
              {{ area.AreaName }}
            </option>
          </select>
        </div>
      </div>

      <div class="row my-3 mx-5 justify-content-evenly" id="artslist">
        <div v-for="allart in showAllarts" :key="allart.UID" class="card mb-3 shadow col-md-5">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="/image/exh02.png"
                class="img-fluid rounded-start mt-2"
                style="max-width: 100%"
                alt="展覽圖片"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title text-danger fw-bold">展覽: {{ allart.title }}</h5>
                <h6 class="fw-bold">地點: {{ allart.showInfo[0].locationName }}</h6>
                <p class="fw-bold">地址: {{ allart.showInfo[0].location }}</p>
                <p>
                  <small
                    class="badge bg-003 wow animate__heartBeat"
                    data-wow-duration="1s"
                    data-wow-delay="0s"
                    data-wow-iteration="infinite"
                    >限時優惠</small
                  >
                  <span class="h3 fw-900"
                    >倒數: <span class="text-danger">{{ allart.diffDays }}</span> 天</span
                  >
                </p>
                <div class="d-flex justify-content-end">
                  <button class="btn btn-outline-info btn-sm">查看更多</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
