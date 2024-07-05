import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static classes = [ "show", "hide", "open" ] 
  static targets = [ "menuIcon", "closeBtn", "sidebar", "primaryOptions", "secondaryOptions" ]
  
  open() {
    this.menuIconTarget.classList.add(this.hideClass)
    this.closeBtnTarget.classList.remove(this.hideClass)
    this.closeBtnTarget.classList.add(this.showClasses[0])
    this.sidebarTarget.classList.add(this.openClass)
  }
  
  close(){
    this.closeBtnTarget.classList.add(this.hideClass)
    this.menuIconTarget.classList.add(this.showClasses[0])
    this.menuIconTarget.classList.remove(this.hideClass)
    this.sidebarTarget.classList.remove(this.openClass)
  }

  newEntry(){
    this.sidebarTarget.classList.add('align-start')
    this.primaryOptionsTarget.classList.remove(this.showClasses[0])
    this.primaryOptionsTarget.classList.add(this.hideClass)
    this.secondaryOptionsTarget.classList.add(this.showClasses[1])
    this.secondaryOptionsTarget.classList.remove(this.hideClass)
  }

  closeNewEntry(){
    this.sidebarTarget.classList.remove('align-start')
    this.primaryOptionsTarget.classList.add(this.showClasses[1])
    this.primaryOptionsTarget.classList.remove(this.hideClass)
    this.secondaryOptionsTarget.classList.remove(this.showClasses[1])
    this.secondaryOptionsTarget.classList.add(this.hideClass)
  }
}