import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dialog"
export default class extends Controller {
  static targets = ["content"]
  static values = {
    open: {
      type: Boolean,
      default: false
    },
  }

  open(e) {
    e.preventDefault()
    document.body.insertAdjacentHTML('beforeend', this.contentTarget.innerHTML)
    // prevent scroll on body
    document.body.classList.add('overflow-hidden')
  }
}
