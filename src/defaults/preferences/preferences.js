pref("extensions.https_everywhere.LogLevel", 2); //verbose for debugging 
pref("extensions.https_everywhere.globalEnabled",true);

// report_disabled_rules must be true for any prompts to be displayed
// if report_disabled_rules_tor_only is true, only show prompts
// when tor is enabled
pref("extensions.https_everywhere.report_disabled_rules", false);
pref("extensions.https_everywhere.report_disabled_rules_tor_only", false);
pref("extensions.https_everywhere.report_host", "zyan.scripts.mit.edu"); // change to httpse1.eff.org

// optional system info to send along with the name of disabled rule
pref("extensions.https_everywhere.report_os_and_browser", true); // used to be separate
pref("extensions.https_everywhere.report_extensions", false);
pref("extensions.https_everywhere.report_domain", true);
pref("extensions.https_everywhere.report_full_url", false);

// always show a popup asking for comments with bug reports?
pref("extensions.https_everywhere.report_comments", true);

// have we shown a popup asking for bug report prefs the first time a user disables a rule?
pref("extensions.https_everywhere.report_popup_shown", false);

// this is the HTTPS Everywhere preferences version (for migrations)
pref("extensions.https_everywhere.prefs_version", 0);

// this is a popup asking whether the user really meant to be on the dev branch
pref("extensions.https_everywhere.dev_popup_shown", false);

// SSl Observatory preferences
pref("extensions.https_everywhere._observatory.enabled",false);

// "testing" currently means send unecessary fingerprints and other test-suite
// type stuff
pref("extensions.https_everywhere._observatory.testing",false);

pref("extensions.https_everywhere._observatory.server_host","observatory.eff.org");
pref("extensions.https_everywhere._observatory.use_tor_proxy",true);
pref("extensions.https_everywhere._observatory.submit_during_tor",true);
pref("extensions.https_everywhere._observatory.submit_during_nontor",true);

pref("extensions.https_everywhere._observatory.cache_submitted",true);

pref("extensions.https_everywhere._observatory.use_custom_proxy",false);
pref("extensions.https_everywhere._observatory.popup_shown",false);
pref("extensions.https_everywhere._observatory.proxy_host","");
pref("extensions.https_everywhere._observatory.proxy_port",0);
pref("extensions.https_everywhere._observatory.proxy_type","direct");
pref("extensions.https_everywhere._observatory.use_tor_proxy",true);
pref("extensions.https_everywhere._observatory.alt_roots",false);
pref("extensions.https_everywhere._observatory.self_signed",true);
pref("extensions.https_everywhere._observatory.priv_dns",false);
pref("extensions.https_everywhere._observatory.send_asn",true);
pref("extensions.https_everywhere._observatory.use_whitelist",true);
