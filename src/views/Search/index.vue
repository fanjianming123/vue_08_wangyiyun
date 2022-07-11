<template>
  <div>
    <van-search shape="round" placeholder="请输入搜索关键词" v-model="value" />
    <!-- 热门搜索 -->
    <template v-if="searchList.length == 0">
      <van-cell title="热门搜索" />
      <div style="padding: 10px 16px">
        <van-tag
          color="#ccc"
          text-color="#000"
          size="large"
          plain
          round
          type="primary"
          v-for="(item, index) in tags"
          :key="index"
          style="margin-right: 6px"
          @click="clickFn(item.first)"
        >
          {{ item.first }}
        </van-tag>
      </div>
    </template>

    <template v-else>
      <van-cell title="最佳匹配" />
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="item in searchList"
          :key="item.id"
          :title="item.name"
          :label="`${item.ar[0].name}-${item.name}`"
        />
      </van-list>
    </template>
  </div>
</template>
<script>
import { getSearchTagApi, getSearchListApi } from '@/apis'
export default {
  data() {
    return {
      tags: [],
      value: '',
      searchList: [],
      loading: false,
      finished: true,
    }
  },
  created() {
    this.getTagList()
  },
  methods: {
    async getTagList() {
      try {
        const res = await getSearchTagApi()
        this.tags = res.data.result.hots
      } catch (e) {}
    },
    async clickFn(val) {
      this.value = val
      try {
        const res = await getSearchListApi({
          keywords: this.value,
        })
        this.searchList = res.data.result.songs
        this.$toast.success('成功获取')
      } catch (e) {
        this.$toast.fail('获取失败')
      }
    },
    onLoad() {},
  },
}
</script>
