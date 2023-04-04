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

function AddressBook(event) {
  this.contacts = {};
  this.currentId = 0;
  event.preventDefault();
};

/// Not in code

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

-------------
// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
};

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] !== undefined) {
    return this.contacts[id];
  }
  return false;
};

AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
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