/**
 * Created by ctuser on 05.04.2018.
 */
//Hello from Trigger
public with sharing class ClassForMigration {

    public static Account insertAccount(String name) {
        Account acc = new Account(Name = name);
        insert acc;
        return acc;
    }

    public static String getContactNamesOfAccount(Account acc) {
        List<Contact> contacts = [SELECT Id, Name FROM Contact WHERE AccountId =: acc.Id];
        String names;
        if (!contacts.isEmpty()) {
            for (Contact c: contacts) {
                names += c.Name + '; ';
            }
            return names;
        }
        return null;
    }

    public static Contact createNewContact(Account acc, String name) {
        Contact c = new Contact(LastName = name, AccountId = acc.Id);
        insert c;
        return c;
    }

}
