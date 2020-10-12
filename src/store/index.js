import fakeApi from "@/lib/fakeApi";
import Vue from 'vue'

const store = {
  state: {
    activities: {},
    categories: {}
  },
  generateUid() {
    return Math.floor(new Date() * Math.random())
  },

  fetchActivities() {
    return fakeApi.get('activities', {force: 1}).then(activities => {
      const key = Object.keys(activities)
      Object.keys(activities).forEach((key) => {
        this.setItem('activities', key,  activities[key])
      })
      return activities
    })
  },
  fetchCategories() {
    return fakeApi.get('categories', {force: 1}).then(categories => {
      const key = Object.keys(categories)
      Object.keys(categories).forEach((key) => {
        this.setItem('categories', key,  categories[key])
      })
      return categories
    })
  },
  fetchUser() {
    return {
      name: 'Filip Jerga',
      id: '-Aj34jknvncx98812',
    }
  },
  createActivity(activity) {
    activity.id = this.generateUid()
    activity.progress = 0
    activity.createdAt = new Date()
    activity.updatedAt = new Date()

    return fakeApi.post('activities', activity).then(createActivity => {
      this.setItem('activities', createActivity.id,  createActivity)
      return createActivity
    })
  },

  updateActivity(activity) {
    activity.updatedAt = new Date()

    return fakeApi.post('activities', activity).then(updateActivity => {
      this.setItem('activities', updateActivity.id,  updateActivity)
      return updateActivity
    })
  },

  deleteActivity(activity) {
    return fakeApi.delete('activities', activity).then( deletedActivity => {
      Vue.delete(this.state.activities, activity.id)
      return deletedActivity
    })
  },

  setItem(resource, id, item) {
    Vue.set(this.state[resource], id, item)
  },

}

export default store
