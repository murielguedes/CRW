const { faker } = require('@faker-js/faker');

export const generateUserData = () => {
    return {
        
            firstName:faker.name.firstName(),
            lastName: faker.name.lastName(),
            userName: faker.internet.userName(),
            password: faker.internet.password(4)
    
        };
        
    };

    export const accountData = () => {
        return {
            
                firstName:faker.name.firstName(),
                lastName: faker.name.lastName(),
                userName: '@naflor01',
                password: faker.internet.password(4)
        
            };

    
            
        };

 