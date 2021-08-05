export class NotesRepository {
  storageKey = 'notes'
  
  get () {
    return JSON.parse(localStorage.getItem(this.storageKey)) || []
  }
  put (notes) {
    localStorage.setItem(this.storageKey, JSON.stringify(notes) || [])
  }
}
