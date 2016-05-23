var gulp = require('gulp');
var bs = require('browser-sync');
var middlewareCreate  = require('connect-gzip-static');
var config = require('../../gulp.config')();
var gzip = require('gulp-gzip');
var runSequence = require('run-sequence');

function startBrowsersync(config, cb) {
    bsIns = bs.create();
    bsIns.init(config, cb);
    bsIns.reload();
}

gulp.task('gzip', function(done) {
    gulp.src(config.build.path + '**/*.{js,css,html}')
        .pipe(gzip())
        .pipe(gulp.dest(config.build.path))
        .on('finish', done);
});

gulp.task('serve-build-gzip', function() {
    runSequence('build', 'gzip', serve);

    function serve() {
        startBrowsersync(config.browserSync.prod, function(err, bsync) {
            middleware = middlewareCreate('./' + config.build.path);
            bsync.addMiddleware("*", middleware, {
                override: true
            });
        });
    }
});
