<template>
  <div class="form-check">
    <label class="form-check-label">
      <input @change="change" type="checkbox" class="form-check-input">
      {{ noteName }}
    </label>
  </div>
</template>

<script>
import { EVENT_DELETE } from '../enums/events';

export default {
  name: "Note",
  props: {
    noteName: {
      type: String,
      required: true
    }
  },
  methods: {
    change (value) {
      if (value) {
        this.$emit(EVENT_DELETE)
      }
    }
  }
}
</script>
