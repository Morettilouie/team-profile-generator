const Employee = require('../lib/Employee');

test('Creates new employee', () => {
    const employee = new Employee('Test Name', 1234, 'test@email.com');

    expect(employee.name).toBe("Test Name");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('Checks all methods for Employee class', () => {
    const employee = new Employee('Test Name', 1234, 'test@email.com');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
})