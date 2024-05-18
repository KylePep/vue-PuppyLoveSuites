import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /** @type {{name, details, description, id}} active Item Info*/
  activeItem: null
})