function fn() {
    var env = karate.env;

    karate.log(karate);

    karate.log('karate.env system property was:', env);
    karate.configure('report', { showLog: true, showAllSteps: true });

    var config = {};

    if (!env) {
        env = 'local';
    }

    // sample code to switch environment
    if (env == 'dev') {
        config.baseUrl = 'http://localhost:8080';
    } else if (env == 'qa') {
        config.baseUrl = 'http://localhost:8080';
    } else if (env == 'local') {
        config.baseUrl = 'http://localhost:8080';
    }

    // objects added in config can be access globally

    return config;
}