import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="select"
export default class extends Controller {
  static outlets = ["input"]

  selectItem(event) {
    event.preventDefault()
    const selectedValue = event.currentTarget.dataset.value
    this.inputOutlets.forEach((input) => {
      const inputElem = input.element
      inputElem.value = selectedValue
    })
  }
}
