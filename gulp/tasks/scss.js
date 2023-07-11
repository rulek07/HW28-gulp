// import concat from "gulp-concat";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename"
import cleanCss from "gulp-clean-css";
import autoprefixer from "gulp-autoprefixer";
import groupCssMadiaQueries from "gulp-group-css-media-queries";

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss)
    .pipe(sass({outputStyle: "expanded" }))
    .pipe(groupCssMadiaQueries())
    .pipe(autoprefixer({
        grid: true,
        overideBrowserslist:["last 3 version"],
        cascade: true
    }))
    // .pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCss())
    .pipe(rename({extname: ".min.css"}))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream());
};