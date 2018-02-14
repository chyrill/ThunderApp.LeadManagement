const devConfig = {
    MONGO_URL: 'mongodb://localhost/LeadManagement-dev',
};

const testConfig = {
    MONGO_URL: 'mongodb://localhost/LeadManagement-test',
};

const prodConfig = {
    MONGO_URL: 'mongodb://localhost/LeadManagement',
};

const defaultConfig = {
    PORT: process.env.PORT || 3003,
};

function envConfig(env) {
    switch (env) {
        case 'development':
            return devConfig;
        case 'test':
            return testConfig;
        default:
            return prodConfig;
    }
}

export default {
    ...defaultConfig,
    ...envConfig(process.env.NODE_ENV),
};