<template>
<div class="distpicker-address-wrapper">
  <select v-model="province" placeholder="请选择" @change="getCities(province)">
    <option v-for="(key,val) in provinces" :key="val" :label="key" :value="key">
    </option>
  </select>
  <select v-model="city" placeholder="请选择" @change="getAreas(city)">
    <option v-for="(key,val) in cities" :key="val" :label="key" :value="key">
    </option>
  </select>
  <select v-model="area" placeholder="请选择">
    <option v-for="(key,val) in areas" :key="val" :label="key" :value="key">
    </option>
  </select>
</div>
</template>

<script>
import DISTRICTS from './dist.js';
const DEFAULT_CODE = 100000

export default {
  model: {
    prop: 'defaultAddress',
    event: 'change'
  },
  props: {
    defaultAddress: String
  },
  data() {
    return {
      province: '',
      city: '',
      area: '',
      provinces: [],
      cities: [],
      areas: []
    }
  },
  created() {
    this.getProvinces();
    this.initData();

    this.$watch('newAddressVal', function(n, o) {
      this.$emit('change', n);
    });
  },
  computed: {
    newAddressVal: function() {
      return this.province + ' ' + this.city + ' ' + this.area;
    }
  },
  methods: {
    initData() {
      var temp = this.defaultAddress.split(' ');
      console.log(temp);
      temp = this.handleErrorAddress(temp);
      console.log(temp);

      this.province = temp[0];
      this.city = temp[1];
      this.area = temp[2];

      this.cities = this.province ? DISTRICTS[this.getDistrictCode(this.province)] : [];
      this.areas = this.city ? DISTRICTS[this.getDistrictCode(this.city)] : [];
    },
    getProvinces() {
      this.provinces = DISTRICTS[DEFAULT_CODE];
    },
    getCities(val) { // 切换省份
      var code = this.getDistrictCode(val);
      if (DISTRICTS[code]) {
        this.cities = DISTRICTS[code];
        this.city = this.getObjVal(this.cities);

        this.areas = DISTRICTS[this.getDistrictCode(this.city)];
        this.area = this.getObjVal(this.areas);
      } else { // 台湾省
        this.cities = [];
        this.city = '';
        this.areas = [];
        this.area = '';
      }
    },
    getAreas(val) { // 切换城市
      this.areas = DISTRICTS[this.getDistrictCode(val)];
      this.area = this.getObjVal(this.areas);
    },
    getDistrictCode(val) { // 获取地区code
      for (var i in DISTRICTS) {
        for (var j in DISTRICTS[i]) {
          if (DISTRICTS[i][j] == val) {
            return j;
          }
        }
      }
    },
    getObjVal(obj) { //读取对象第一个 值
      var keys = Object.keys(obj);
      return obj[keys[0]];
    },
    handleErrorAddress([province, city, area]) {
      if (province) {
        province = this.correctName(province);
      }
      if (!province) {
        return ['', '', ''];
      }
      if (province && city) {
        city = this.correctName(city, this.getDistrictCode(province));
      }
      if (!city) {
        return [province, '', ''];
      }
      if (city && area) {
        area = this.correctName(area, this.getDistrictCode(city));
      }
      return [province, city, area];
    },
    correctName(name, parentCode = DEFAULT_CODE) {
      if (name.length < 2) {
        return '';
      }
      var obj = DISTRICTS[parentCode];
      var keys = Object.keys(obj);
      for (var i in obj) {
        if (obj[i].indexOf(name) != -1) {
          return obj[i];
        }
      }
      return '';
    }
  }
}
</script>
