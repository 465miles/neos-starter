
// http://www.browsersync.io/docs/options/

module.exports = {
    files: [
        "DistributionPackages/*/Public/**/*.js",
        "DistributionPackages/*/Public/**/*.css",
        "DistributionPackages/*/Private/**/*.fusion",
        "DistributionPackages/*/NodeTypes/**/*.fusion",
    ],
    proxy: "http://127.0.0.1:8081/",
};
