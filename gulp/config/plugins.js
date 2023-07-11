import plumber from "gulp-plumber";
import concat from "gulp-concat";
import notify from "gulp-notify";
import browserSync from "browser-sync";
import ifPlugin from "gulp-if"

export const plugins = {
    plumber: plumber,
    concat: concat,
    notify: notify,
    browserSync: browserSync,
    if: ifPlugin
  };