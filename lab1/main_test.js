const test = require("node:test");
const assert = require("assert");
const { MyClass, Student } = require("./main");

test("Test MyClass's addStudent", () => {
    // TODO
    const myClass = new MyClass();
    
    // Test adding a non-Student object
    assert.strictEqual(myClass.addStudent(1), -1);

    // Test adding a valid Student object
    const student = new Student();
    student.setName('Judy');
    assert.strictEqual(myClass.addStudent(student), 0);
    
    // Test retrieving the added student by ID
    assert.strictEqual(myClass.getStudentById(0), student);
});

test("Test MyClass's getStudentById", () => {
    // TODO
    const myClass = new MyClass();
    const student = new Student();
    student.setName('Judy');
    myClass.addStudent(student);
    
    // Test retrieving an existing student by valid ID
    assert.strictEqual(myClass.getStudentById(0), student);
    
    // Test retrieving a student with an out-of-range ID
    assert.strictEqual(myClass.getStudentById(myClass.students.length), null);
    
    // Test retrieving a student with a negative ID
    assert.strictEqual(myClass.getStudentById(-1), null);
});

test("Test Student's setName", () => {
    // TODO
    const student = new Student();
    
    // Test setting a non-string name
    assert.strictEqual(student.setName(123), undefined);
    
    // Test retrieving the name after setting it to a non-string value
    assert.strictEqual(student.getName(), '');
    
    // Test setting and retrieving a valid name
    student.setName('Judy');
    assert.strictEqual(student.getName(), "Judy");
});

test("Test Student's getName", () => {
    // TODO
    const student = new Student();
    
    // Test retrieving the name before setting it
    assert.strictEqual(student.getName(), '');
    
    // Test setting and retrieving a valid name
    student.setName('Judy');
    assert.strictEqual(student.getName(), "Judy");
});
