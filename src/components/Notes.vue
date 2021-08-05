<template>
  <div>
    <note-form @submit="createNote" />

    <note
        v-for="(note, index) in notes"
        @delete="deleteNote(index)"
        :note-name="note"
        :key="noteKey(note, index)"
    />
  </div>
</template>

<script>
import Note from './Note'
import NoteForm from './NoteForm'
import { NotesRepository } from "../helpers/NotesRepository"

export default {
  name: "Notes",
  components: {
    Note,
    NoteForm
  },
  data() {
    return {
      notesRepository: null,
      notes: []
    }
  },
  created() {
    this.notesRepository = new NotesRepository()
    this.notes = this.notesRepository.get()
  },
  methods: {
    createNote (note) {
      this.notes.push(note)
    },
    deleteNote(index) {
      this.notes.splice(index, 1)
    },
    noteKey (note, index) {
      return note + (index + new Date().getTime())
    }
  },
  watch: {
    notes(newValue) {
      this.notesRepository.put(newValue)
    }
  }
}
</script>
