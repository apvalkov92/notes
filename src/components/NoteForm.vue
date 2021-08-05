<template>
  <div class="row justify-content-center">
    <div class="col-sm-6">
      <form @submit.prevent="submit">
        <div class="input-group">
          <input v-model="note" type="text" class="form-control">
          <div class="input-group-append">
            <button class="btn btn-outline-info" type="submit">Add</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { EVENT_SUBMIT } from '../enums/events';

export default {
  name: "NoteForm",
  data() {
    return {
      note: null
    }
  },
  methods: {
    submit() {
      this.$emit(EVENT_SUBMIT, this.note)

      this.note = null
    }
  }
}
</script>
