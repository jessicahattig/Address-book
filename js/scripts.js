window.addEventListener("load", function() {
  const form = document.getElementById("AddressBook");
  form.addEventListener("click",AddressBook);
})

// Business Logic for AddressBook ---------
function AddressBook(event) {
  this.contacts = {};
  this.currentId = 0;
  event.preventDefault()
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
};

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

//UI Logic