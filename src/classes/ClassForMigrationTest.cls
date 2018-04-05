/**
 * Created by ctuser on 05.04.2018.
 */
@isTest
public class ClassForMigrationTest {

//    @TestSetup
//    static void testSetup() {
//        Account acc = new Account(Name = 'TestAccount');
//        insert acc;
//    }

    @isTest
    static void insertAccount() {
        Account acc1 = ClassForMigration.insertAccount('TestAccount');
        Account acc2 = [SELECT Id, Name FROM Account LIMIT 1];
        System.assertEquals(acc1, acc2);
    }

    @isTest
    static void getContactNamesOfAccount() {
        Account acc1 = ClassForMigration.insertAccount('TestAccount');
        Contact c1 = ClassForMigration.createNewContact(acc1, 'Contact1');
        Contact c2 = ClassForMigration.createNewContact(acc1, 'Contact2');
        Contact c3 = ClassForMigration.createNewContact(acc1, 'Contact3');
        String testNames = ClassForMigration.getContactNamesOfAccount(acc1);
        String assertNames;
        for (Integer i =1; i<4; i++) {
            assertNames += 'Contact' + i + '; ';
        }
        System.assertEquals(testNames, assertNames);
    }

    @isTest
    static void getEmptyContactNamesOfAccount() {
        Account acc1 = ClassForMigration.insertAccount('TestAccount');
        String testNames = ClassForMigration.getContactNamesOfAccount(acc1);
        System.assertEquals(testNames, null);
    }
}