<template>
  <div>
    <ActivityItemUpdate
      v-if="isUpdateActivity"
      :activity="activity"
      :categories="categories"
      @toggleUpdate="changeUpdateStage" />

    <ActivityItemDetail
      v-else
      :activity="activity"
      :categories="categories"
      @toggleUpdate="changeUpdateStage" />
  </div>

</template>

<script>
import ActivityItemDetail from "@/components/ActivityItemDetail";
import ActivityItemUpdate from "@/components/ActivityItemUpdate";

export default {
  components: {
    ActivityItemDetail,
    ActivityItemUpdate
  },
  props: {
    categories: {
      type: Object,
      required: true
    },
    activity: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      isUpdateActivity: false
    }
  },
  methods: {
    changeUpdateStage(isUpdate){
      this.isUpdateActivity = isUpdate
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
