window.addEventListener("load", function() {
  const form = document.getElementById("AddressBook");
  form.addEventListener("submit",AddressBook);
})

// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contact[contact.id] = contact;
};

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  console.log(Contact);
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

/// Not in code

function AddressBook(event) {
  this.contacts = {};
  this.currentId = 0;
  event.preventDefault();
};

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};