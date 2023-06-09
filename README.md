# _Address Book_

#### By _**Jessica Hattig & Trent Dietzel**_

#### _An address book application using constructors and prototypes_

## Technologies Used

* _JavaScript_
* _CSS_
* _HTML_
* _Visual Studio Code_
* _GitHub_

## Description

_This application practices using constructors and prototypes to create a address book._

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the top level of the directory._
* _Open scripts.js_

## TESTS

# Describe: Contact()

# First Test:
" It should output all three inputs (first name, last name and phone number) after they are entered."
# Code:
let userName = new Contact("Bob", "SR.", 9817263648);
userName;
# Expected Output:
firstName: "Bob"
lastName: "SR."
phoneNumber: 9817263648

# Second Test:
" It should return the first name and last name concatenated together."
# Code:
let userName = new Contact("Bob", "SR.", 9817263648);
userName.fullName();
# Expected Output:
Bob SR.

# Describe: AddressBook()

# Third Test:
"It should create an empty contacts constructor."
# Code:
AddressBook
# Expected Output:
this.contacts = {};

# Fourth Test:
"It should return both contacts in the addressBook"
# Code:
let contact = new Contact("Trent", "Dietzel", "971-503-4210");
let contact2 = new Contact("Jessica", "Hattig", "503-971-1286");
addressBook.addContact(contact);
addressBook.addContact(contact2);
addressBook.contacts;
# Expected Output:
{Trent: Contact, Jessica: Contact}

## Known Bugs

* _None found currently_

## License

MIT License

Copyright (c) [2023] [Jessica Hattig & Trent Dietzel]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) _2023_ _Jessica Hattig & Trent Dietzel_