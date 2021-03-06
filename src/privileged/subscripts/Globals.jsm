/* eslint-disable no-unused-vars */

ChromeUtils.defineModuleGetter(this, "Preferences",
                               "resource://gre/modules/Preferences.jsm");
ChromeUtils.defineModuleGetter(this, "PluralForm",
                               "resource://gre/modules/PluralForm.jsm");
const {setTimeout, clearTimeout} = ChromeUtils.import("resource://gre/modules/Timer.jsm", {});
Cu.importGlobalProperties(["fetch", "btoa"]);

const XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
