import { c as getLocale } from "./ssr.mjs";
import { n as __exportAll } from "./schema-_Dk5pXhf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/messages-DKBWZPg0.js
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Metadata_TitleInputs */
var en_common_metadata_title = () => {
	return `WoW Forever Wiki — Races, Classes, Talents & Dungeons (Pre-Beta)`;
};
var zh_common_metadata_title = () => {
	return `WoW Forever Wiki — 种族、职业、天赋与地下城（预Beta）`;
};
var zh_tw2_common_metadata_title = () => {
	return `WoW Forever Wiki — 種族、職業、天賦與地城（Beta 前）`;
};
/**
* | output |
* | --- |
* | "WoW Forever Wiki — Races, Classes, Talents & Dungeons (Pre-Beta)" |
*
* @param {Common_Metadata_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_metadata_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_metadata_title(inputs);
	if (locale === "zh") return zh_common_metadata_title(inputs);
	return zh_tw2_common_metadata_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Metadata_DescriptionInputs */
var en_common_metadata_description = () => {
	return `Unofficial pre-Beta encyclopedia for World of Warcraft: Forever — races, racials, classes, talent calculators, dungeons, and Forever vs Classic diffs.`;
};
var zh_common_metadata_description = () => {
	return `《魔兽世界：Forever》非官方预Beta百科——种族/特长、职业、天赋计算器、地下城，以及 Forever 与经典旧世天赋对比。`;
};
var zh_tw2_common_metadata_description = () => {
	return `《World of Warcraft: Forever》非官方 Beta 前百科——種族、職業、天賦計算器、地城，以及 Forever 與 Classic 差異。`;
};
/**
* | output |
* | --- |
* | "Unofficial pre-Beta encyclopedia for World of Warcraft: Forever — races, racials, classes, talent calculators, dungeons, and Forever vs Classic diffs." |
*
* @param {Common_Metadata_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_metadata_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_metadata_description(inputs);
	if (locale === "zh") return zh_common_metadata_description(inputs);
	return zh_tw2_common_metadata_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Sign_In_TitleInputs */
var en_common_sign_sign_in_title = () => {
	return `Sign In`;
};
var zh_common_sign_sign_in_title = () => {
	return `登录`;
};
/** @type {(inputs: Common_Sign_Sign_In_TitleInputs) => LocalizedString} */
var zh_tw2_common_sign_sign_in_title = zh_common_sign_sign_in_title;
/**
* | output |
* | --- |
* | "Sign In" |
*
* @param {Common_Sign_Sign_In_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_sign_in_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_sign_in_title(inputs);
	if (locale === "zh") return zh_common_sign_sign_in_title(inputs);
	return zh_tw2_common_sign_sign_in_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Auth_Callback_RedirectingInputs */
var en_common_auth_callback_redirecting = () => {
	return `Signing you in…`;
};
var zh_common_auth_callback_redirecting = () => {
	return `正在跳转…`;
};
/** @type {(inputs: Common_Auth_Callback_RedirectingInputs) => LocalizedString} */
var zh_tw2_common_auth_callback_redirecting = zh_common_auth_callback_redirecting;
/**
* | output |
* | --- |
* | "Signing you in…" |
*
* @param {Common_Auth_Callback_RedirectingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_auth_callback_redirecting = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_auth_callback_redirecting(inputs);
	if (locale === "zh") return zh_common_auth_callback_redirecting(inputs);
	return zh_tw2_common_auth_callback_redirecting(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Auth_Callback_ErrorInputs */
var en_common_auth_callback_error = () => {
	return `Could not complete sign-in. Please try again.`;
};
var zh_common_auth_callback_error = () => {
	return `登录未能完成，请重试。`;
};
/** @type {(inputs: Common_Auth_Callback_ErrorInputs) => LocalizedString} */
var zh_tw2_common_auth_callback_error = zh_common_auth_callback_error;
/**
* | output |
* | --- |
* | "Could not complete sign-in. Please try again." |
*
* @param {Common_Auth_Callback_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_auth_callback_error = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_auth_callback_error(inputs);
	if (locale === "zh") return zh_common_auth_callback_error(inputs);
	return zh_tw2_common_auth_callback_error(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Sign_In_DescriptionInputs */
var en_common_sign_sign_in_description = () => {
	return `Welcome back`;
};
var zh_common_sign_sign_in_description = () => {
	return `欢迎回来`;
};
/** @type {(inputs: Common_Sign_Sign_In_DescriptionInputs) => LocalizedString} */
var zh_tw2_common_sign_sign_in_description = zh_common_sign_sign_in_description;
/**
* | output |
* | --- |
* | "Welcome back" |
*
* @param {Common_Sign_Sign_In_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_sign_in_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_sign_in_description(inputs);
	if (locale === "zh") return zh_common_sign_sign_in_description(inputs);
	return zh_tw2_common_sign_sign_in_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Sign_Up_TitleInputs */
var en_common_sign_sign_up_title = () => {
	return `Sign Up`;
};
var zh_common_sign_sign_up_title = () => {
	return `注册`;
};
/** @type {(inputs: Common_Sign_Sign_Up_TitleInputs) => LocalizedString} */
var zh_tw2_common_sign_sign_up_title = zh_common_sign_sign_up_title;
/**
* | output |
* | --- |
* | "Sign Up" |
*
* @param {Common_Sign_Sign_Up_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_sign_up_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_sign_up_title(inputs);
	if (locale === "zh") return zh_common_sign_sign_up_title(inputs);
	return zh_tw2_common_sign_sign_up_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Sign_Up_DescriptionInputs */
var en_common_sign_sign_up_description = () => {
	return `Get started for free`;
};
var zh_common_sign_sign_up_description = () => {
	return `免费开始使用`;
};
/** @type {(inputs: Common_Sign_Sign_Up_DescriptionInputs) => LocalizedString} */
var zh_tw2_common_sign_sign_up_description = zh_common_sign_sign_up_description;
/**
* | output |
* | --- |
* | "Get started for free" |
*
* @param {Common_Sign_Sign_Up_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_sign_up_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_sign_up_description(inputs);
	if (locale === "zh") return zh_common_sign_sign_up_description(inputs);
	return zh_tw2_common_sign_sign_up_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Email_TitleInputs */
var en_common_sign_email_title = () => {
	return `Email`;
};
var zh_common_sign_email_title = () => {
	return `邮箱`;
};
/** @type {(inputs: Common_Sign_Email_TitleInputs) => LocalizedString} */
var zh_tw2_common_sign_email_title = zh_common_sign_email_title;
/**
* | output |
* | --- |
* | "Email" |
*
* @param {Common_Sign_Email_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_email_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_email_title(inputs);
	if (locale === "zh") return zh_common_sign_email_title(inputs);
	return zh_tw2_common_sign_email_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Email_PlaceholderInputs */
var en_common_sign_email_placeholder = () => {
	return `Enter your email`;
};
var zh_common_sign_email_placeholder = () => {
	return `输入邮箱地址`;
};
/** @type {(inputs: Common_Sign_Email_PlaceholderInputs) => LocalizedString} */
var zh_tw2_common_sign_email_placeholder = zh_common_sign_email_placeholder;
/**
* | output |
* | --- |
* | "Enter your email" |
*
* @param {Common_Sign_Email_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_email_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_email_placeholder(inputs);
	if (locale === "zh") return zh_common_sign_email_placeholder(inputs);
	return zh_tw2_common_sign_email_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Password_TitleInputs */
var en_common_sign_password_title = () => {
	return `Password`;
};
var zh_common_sign_password_title = () => {
	return `密码`;
};
/** @type {(inputs: Common_Sign_Password_TitleInputs) => LocalizedString} */
var zh_tw2_common_sign_password_title = zh_common_sign_password_title;
/**
* | output |
* | --- |
* | "Password" |
*
* @param {Common_Sign_Password_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_password_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_password_title(inputs);
	if (locale === "zh") return zh_common_sign_password_title(inputs);
	return zh_tw2_common_sign_password_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Password_PlaceholderInputs */
var en_common_sign_password_placeholder = () => {
	return `Enter your password`;
};
var zh_common_sign_password_placeholder = () => {
	return `输入密码`;
};
/** @type {(inputs: Common_Sign_Password_PlaceholderInputs) => LocalizedString} */
var zh_tw2_common_sign_password_placeholder = zh_common_sign_password_placeholder;
/**
* | output |
* | --- |
* | "Enter your password" |
*
* @param {Common_Sign_Password_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_password_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_password_placeholder(inputs);
	if (locale === "zh") return zh_common_sign_password_placeholder(inputs);
	return zh_tw2_common_sign_password_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Confirm_Password_TitleInputs */
var en_common_sign_confirm_password_title = () => {
	return `Confirm Password`;
};
var zh_common_sign_confirm_password_title = () => {
	return `确认密码`;
};
/** @type {(inputs: Common_Sign_Confirm_Password_TitleInputs) => LocalizedString} */
var zh_tw2_common_sign_confirm_password_title = zh_common_sign_confirm_password_title;
/**
* | output |
* | --- |
* | "Confirm Password" |
*
* @param {Common_Sign_Confirm_Password_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_confirm_password_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_confirm_password_title(inputs);
	if (locale === "zh") return zh_common_sign_confirm_password_title(inputs);
	return zh_tw2_common_sign_confirm_password_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Confirm_Password_PlaceholderInputs */
var en_common_sign_confirm_password_placeholder = () => {
	return `Re-enter your password`;
};
var zh_common_sign_confirm_password_placeholder = () => {
	return `再次输入密码`;
};
/** @type {(inputs: Common_Sign_Confirm_Password_PlaceholderInputs) => LocalizedString} */
var zh_tw2_common_sign_confirm_password_placeholder = zh_common_sign_confirm_password_placeholder;
/**
* | output |
* | --- |
* | "Re-enter your password" |
*
* @param {Common_Sign_Confirm_Password_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_confirm_password_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_confirm_password_placeholder(inputs);
	if (locale === "zh") return zh_common_sign_confirm_password_placeholder(inputs);
	return zh_tw2_common_sign_confirm_password_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Password_MismatchInputs */
var en_common_sign_password_mismatch = () => {
	return `Passwords do not match`;
};
var zh_common_sign_password_mismatch = () => {
	return `两次输入的密码不一致`;
};
/** @type {(inputs: Common_Sign_Password_MismatchInputs) => LocalizedString} */
var zh_tw2_common_sign_password_mismatch = zh_common_sign_password_mismatch;
/**
* | output |
* | --- |
* | "Passwords do not match" |
*
* @param {Common_Sign_Password_MismatchInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_password_mismatch = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_password_mismatch(inputs);
	if (locale === "zh") return zh_common_sign_password_mismatch(inputs);
	return zh_tw2_common_sign_password_mismatch(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Name_TitleInputs */
var en_common_sign_name_title = () => {
	return `Name`;
};
var zh_common_sign_name_title = () => {
	return `姓名`;
};
/** @type {(inputs: Common_Sign_Name_TitleInputs) => LocalizedString} */
var zh_tw2_common_sign_name_title = zh_common_sign_name_title;
/**
* | output |
* | --- |
* | "Name" |
*
* @param {Common_Sign_Name_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_name_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_name_title(inputs);
	if (locale === "zh") return zh_common_sign_name_title(inputs);
	return zh_tw2_common_sign_name_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Name_PlaceholderInputs */
var en_common_sign_name_placeholder = () => {
	return `Enter your name`;
};
var zh_common_sign_name_placeholder = () => {
	return `输入姓名`;
};
/** @type {(inputs: Common_Sign_Name_PlaceholderInputs) => LocalizedString} */
var zh_tw2_common_sign_name_placeholder = zh_common_sign_name_placeholder;
/**
* | output |
* | --- |
* | "Enter your name" |
*
* @param {Common_Sign_Name_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_name_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_name_placeholder(inputs);
	if (locale === "zh") return zh_common_sign_name_placeholder(inputs);
	return zh_tw2_common_sign_name_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_No_AccountInputs */
var en_common_sign_no_account = () => {
	return `Don't have an account?`;
};
var zh_common_sign_no_account = () => {
	return `还没有账号？`;
};
/** @type {(inputs: Common_Sign_No_AccountInputs) => LocalizedString} */
var zh_tw2_common_sign_no_account = zh_common_sign_no_account;
/**
* | output |
* | --- |
* | "Don't have an account?" |
*
* @param {Common_Sign_No_AccountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_no_account = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_no_account(inputs);
	if (locale === "zh") return zh_common_sign_no_account(inputs);
	return zh_tw2_common_sign_no_account(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Already_Have_AccountInputs */
var en_common_sign_already_have_account = () => {
	return `Already have an account?`;
};
var zh_common_sign_already_have_account = () => {
	return `已有账号？`;
};
/** @type {(inputs: Common_Sign_Already_Have_AccountInputs) => LocalizedString} */
var zh_tw2_common_sign_already_have_account = zh_common_sign_already_have_account;
/**
* | output |
* | --- |
* | "Already have an account?" |
*
* @param {Common_Sign_Already_Have_AccountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_already_have_account = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_already_have_account(inputs);
	if (locale === "zh") return zh_common_sign_already_have_account(inputs);
	return zh_tw2_common_sign_already_have_account(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_OrInputs */
var en_common_sign_or = () => {
	return `Or continue with`;
};
var zh_common_sign_or = () => {
	return `或者继续使用`;
};
/** @type {(inputs: Common_Sign_OrInputs) => LocalizedString} */
var zh_tw2_common_sign_or = zh_common_sign_or;
/**
* | output |
* | --- |
* | "Or continue with" |
*
* @param {Common_Sign_OrInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_or = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_or(inputs);
	if (locale === "zh") return zh_common_sign_or(inputs);
	return zh_tw2_common_sign_or(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Sign_Out_TitleInputs */
var en_common_sign_sign_out_title = () => {
	return `Sign Out`;
};
var zh_common_sign_sign_out_title = () => {
	return `退出登录`;
};
/** @type {(inputs: Common_Sign_Sign_Out_TitleInputs) => LocalizedString} */
var zh_tw2_common_sign_sign_out_title = zh_common_sign_sign_out_title;
/**
* | output |
* | --- |
* | "Sign Out" |
*
* @param {Common_Sign_Sign_Out_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_sign_out_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_sign_out_title(inputs);
	if (locale === "zh") return zh_common_sign_sign_out_title(inputs);
	return zh_tw2_common_sign_sign_out_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Google_Sign_InInputs */
var en_common_sign_google_sign_in = () => {
	return `Sign in with Google`;
};
var zh_common_sign_google_sign_in = () => {
	return `使用 Google 登录`;
};
/** @type {(inputs: Common_Sign_Google_Sign_InInputs) => LocalizedString} */
var zh_tw2_common_sign_google_sign_in = zh_common_sign_google_sign_in;
/**
* | output |
* | --- |
* | "Sign in with Google" |
*
* @param {Common_Sign_Google_Sign_InInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_google_sign_in = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_google_sign_in(inputs);
	if (locale === "zh") return zh_common_sign_google_sign_in(inputs);
	return zh_tw2_common_sign_google_sign_in(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Github_Sign_InInputs */
var en_common_sign_github_sign_in = () => {
	return `Sign in with GitHub`;
};
var zh_common_sign_github_sign_in = () => {
	return `使用 GitHub 登录`;
};
/** @type {(inputs: Common_Sign_Github_Sign_InInputs) => LocalizedString} */
var zh_tw2_common_sign_github_sign_in = zh_common_sign_github_sign_in;
/**
* | output |
* | --- |
* | "Sign in with GitHub" |
*
* @param {Common_Sign_Github_Sign_InInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_github_sign_in = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_github_sign_in(inputs);
	if (locale === "zh") return zh_common_sign_github_sign_in(inputs);
	return zh_tw2_common_sign_github_sign_in(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_No_Methods_TitleInputs */
var en_common_sign_no_methods_title = () => {
	return `No sign-in methods available`;
};
var zh_common_sign_no_methods_title = () => {
	return `暂无可用的登录方式`;
};
/** @type {(inputs: Common_Sign_No_Methods_TitleInputs) => LocalizedString} */
var zh_tw2_common_sign_no_methods_title = zh_common_sign_no_methods_title;
/**
* | output |
* | --- |
* | "No sign-in methods available" |
*
* @param {Common_Sign_No_Methods_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_no_methods_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_no_methods_title(inputs);
	if (locale === "zh") return zh_common_sign_no_methods_title(inputs);
	return zh_tw2_common_sign_no_methods_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_No_Methods_DescriptionInputs */
var en_common_sign_no_methods_description = () => {
	return `The administrator hasn't enabled any sign-in methods yet. Please check back later.`;
};
var zh_common_sign_no_methods_description = () => {
	return `管理员尚未启用任何登录方式，请稍后再试。`;
};
/** @type {(inputs: Common_Sign_No_Methods_DescriptionInputs) => LocalizedString} */
var zh_tw2_common_sign_no_methods_description = zh_common_sign_no_methods_description;
/**
* | output |
* | --- |
* | "The administrator hasn't enabled any sign-in methods yet. Please check back later." |
*
* @param {Common_Sign_No_Methods_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_no_methods_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_no_methods_description(inputs);
	if (locale === "zh") return zh_common_sign_no_methods_description(inputs);
	return zh_tw2_common_sign_no_methods_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Forgot_PasswordInputs */
var en_common_sign_forgot_password = () => {
	return `Forgot your password?`;
};
var zh_common_sign_forgot_password = () => {
	return `忘记密码？`;
};
/** @type {(inputs: Common_Sign_Forgot_PasswordInputs) => LocalizedString} */
var zh_tw2_common_sign_forgot_password = zh_common_sign_forgot_password;
/**
* | output |
* | --- |
* | "Forgot your password?" |
*
* @param {Common_Sign_Forgot_PasswordInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_forgot_password = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_forgot_password(inputs);
	if (locale === "zh") return zh_common_sign_forgot_password(inputs);
	return zh_tw2_common_sign_forgot_password(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Forgot_Password_TitleInputs */
var en_common_sign_forgot_password_title = () => {
	return `Forgot password`;
};
var zh_common_sign_forgot_password_title = () => {
	return `找回密码`;
};
/** @type {(inputs: Common_Sign_Forgot_Password_TitleInputs) => LocalizedString} */
var zh_tw2_common_sign_forgot_password_title = zh_common_sign_forgot_password_title;
/**
* | output |
* | --- |
* | "Forgot password" |
*
* @param {Common_Sign_Forgot_Password_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_forgot_password_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_forgot_password_title(inputs);
	if (locale === "zh") return zh_common_sign_forgot_password_title(inputs);
	return zh_tw2_common_sign_forgot_password_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Forgot_Password_DescriptionInputs */
var en_common_sign_forgot_password_description = () => {
	return `Enter your email and we'll send you a link to reset your password.`;
};
var zh_common_sign_forgot_password_description = () => {
	return `输入你的邮箱，我们将发送密码重置链接。`;
};
/** @type {(inputs: Common_Sign_Forgot_Password_DescriptionInputs) => LocalizedString} */
var zh_tw2_common_sign_forgot_password_description = zh_common_sign_forgot_password_description;
/**
* | output |
* | --- |
* | "Enter your email and we'll send you a link to reset your password." |
*
* @param {Common_Sign_Forgot_Password_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_forgot_password_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_forgot_password_description(inputs);
	if (locale === "zh") return zh_common_sign_forgot_password_description(inputs);
	return zh_tw2_common_sign_forgot_password_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Send_Reset_LinkInputs */
var en_common_sign_send_reset_link = () => {
	return `Send reset link`;
};
var zh_common_sign_send_reset_link = () => {
	return `发送重置链接`;
};
/** @type {(inputs: Common_Sign_Send_Reset_LinkInputs) => LocalizedString} */
var zh_tw2_common_sign_send_reset_link = zh_common_sign_send_reset_link;
/**
* | output |
* | --- |
* | "Send reset link" |
*
* @param {Common_Sign_Send_Reset_LinkInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_send_reset_link = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_send_reset_link(inputs);
	if (locale === "zh") return zh_common_sign_send_reset_link(inputs);
	return zh_tw2_common_sign_send_reset_link(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Reset_Link_Sent_TitleInputs */
var en_common_sign_reset_link_sent_title = () => {
	return `Check your email`;
};
var zh_common_sign_reset_link_sent_title = () => {
	return `请查收邮件`;
};
/** @type {(inputs: Common_Sign_Reset_Link_Sent_TitleInputs) => LocalizedString} */
var zh_tw2_common_sign_reset_link_sent_title = zh_common_sign_reset_link_sent_title;
/**
* | output |
* | --- |
* | "Check your email" |
*
* @param {Common_Sign_Reset_Link_Sent_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_reset_link_sent_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_reset_link_sent_title(inputs);
	if (locale === "zh") return zh_common_sign_reset_link_sent_title(inputs);
	return zh_tw2_common_sign_reset_link_sent_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ email: NonNullable<unknown> }} Common_Sign_Reset_Link_Sent_DescriptionInputs */
var en_common_sign_reset_link_sent_description = (i) => {
	return `If an account exists for ${i?.email}, we've sent a link to reset your password. The link will expire in 1 hour.`;
};
var zh_common_sign_reset_link_sent_description = (i) => {
	return `如果 ${i?.email} 已注册账号，我们已发送密码重置链接，请在 1 小时内完成重置。`;
};
/** @type {(inputs: Common_Sign_Reset_Link_Sent_DescriptionInputs) => LocalizedString} */
var zh_tw2_common_sign_reset_link_sent_description = zh_common_sign_reset_link_sent_description;
/**
* | output |
* | --- |
* | "If an account exists for {email}, we've sent a link to reset your password. The link will expire in 1 hour." |
*
* @param {Common_Sign_Reset_Link_Sent_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_reset_link_sent_description = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_reset_link_sent_description(inputs);
	if (locale === "zh") return zh_common_sign_reset_link_sent_description(inputs);
	return zh_tw2_common_sign_reset_link_sent_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Back_To_Sign_InInputs */
var en_common_sign_back_to_sign_in = () => {
	return `Back to sign in`;
};
var zh_common_sign_back_to_sign_in = () => {
	return `返回登录`;
};
/** @type {(inputs: Common_Sign_Back_To_Sign_InInputs) => LocalizedString} */
var zh_tw2_common_sign_back_to_sign_in = zh_common_sign_back_to_sign_in;
/**
* | output |
* | --- |
* | "Back to sign in" |
*
* @param {Common_Sign_Back_To_Sign_InInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_back_to_sign_in = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_back_to_sign_in(inputs);
	if (locale === "zh") return zh_common_sign_back_to_sign_in(inputs);
	return zh_tw2_common_sign_back_to_sign_in(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Reset_Password_TitleInputs */
var en_common_sign_reset_password_title = () => {
	return `Reset password`;
};
var zh_common_sign_reset_password_title = () => {
	return `重置密码`;
};
/** @type {(inputs: Common_Sign_Reset_Password_TitleInputs) => LocalizedString} */
var zh_tw2_common_sign_reset_password_title = zh_common_sign_reset_password_title;
/**
* | output |
* | --- |
* | "Reset password" |
*
* @param {Common_Sign_Reset_Password_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_reset_password_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_reset_password_title(inputs);
	if (locale === "zh") return zh_common_sign_reset_password_title(inputs);
	return zh_tw2_common_sign_reset_password_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Reset_Password_DescriptionInputs */
var en_common_sign_reset_password_description = () => {
	return `Choose a new password for your account.`;
};
var zh_common_sign_reset_password_description = () => {
	return `为你的账号设置新密码。`;
};
/** @type {(inputs: Common_Sign_Reset_Password_DescriptionInputs) => LocalizedString} */
var zh_tw2_common_sign_reset_password_description = zh_common_sign_reset_password_description;
/**
* | output |
* | --- |
* | "Choose a new password for your account." |
*
* @param {Common_Sign_Reset_Password_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_reset_password_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_reset_password_description(inputs);
	if (locale === "zh") return zh_common_sign_reset_password_description(inputs);
	return zh_tw2_common_sign_reset_password_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_New_Password_TitleInputs */
var en_common_sign_new_password_title = () => {
	return `New password`;
};
var zh_common_sign_new_password_title = () => {
	return `新密码`;
};
/** @type {(inputs: Common_Sign_New_Password_TitleInputs) => LocalizedString} */
var zh_tw2_common_sign_new_password_title = zh_common_sign_new_password_title;
/**
* | output |
* | --- |
* | "New password" |
*
* @param {Common_Sign_New_Password_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_new_password_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_new_password_title(inputs);
	if (locale === "zh") return zh_common_sign_new_password_title(inputs);
	return zh_tw2_common_sign_new_password_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_New_Password_PlaceholderInputs */
var en_common_sign_new_password_placeholder = () => {
	return `Enter your new password`;
};
var zh_common_sign_new_password_placeholder = () => {
	return `输入新密码`;
};
/** @type {(inputs: Common_Sign_New_Password_PlaceholderInputs) => LocalizedString} */
var zh_tw2_common_sign_new_password_placeholder = zh_common_sign_new_password_placeholder;
/**
* | output |
* | --- |
* | "Enter your new password" |
*
* @param {Common_Sign_New_Password_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_new_password_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_new_password_placeholder(inputs);
	if (locale === "zh") return zh_common_sign_new_password_placeholder(inputs);
	return zh_tw2_common_sign_new_password_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Confirm_New_Password_PlaceholderInputs */
var en_common_sign_confirm_new_password_placeholder = () => {
	return `Re-enter your new password`;
};
var zh_common_sign_confirm_new_password_placeholder = () => {
	return `再次输入新密码`;
};
/** @type {(inputs: Common_Sign_Confirm_New_Password_PlaceholderInputs) => LocalizedString} */
var zh_tw2_common_sign_confirm_new_password_placeholder = zh_common_sign_confirm_new_password_placeholder;
/**
* | output |
* | --- |
* | "Re-enter your new password" |
*
* @param {Common_Sign_Confirm_New_Password_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_confirm_new_password_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_confirm_new_password_placeholder(inputs);
	if (locale === "zh") return zh_common_sign_confirm_new_password_placeholder(inputs);
	return zh_tw2_common_sign_confirm_new_password_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Reset_Password_SubmitInputs */
var en_common_sign_reset_password_submit = () => {
	return `Reset password`;
};
var zh_common_sign_reset_password_submit = () => {
	return `重置密码`;
};
/** @type {(inputs: Common_Sign_Reset_Password_SubmitInputs) => LocalizedString} */
var zh_tw2_common_sign_reset_password_submit = zh_common_sign_reset_password_submit;
/**
* | output |
* | --- |
* | "Reset password" |
*
* @param {Common_Sign_Reset_Password_SubmitInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_reset_password_submit = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_reset_password_submit(inputs);
	if (locale === "zh") return zh_common_sign_reset_password_submit(inputs);
	return zh_tw2_common_sign_reset_password_submit(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Reset_Password_SuccessInputs */
var en_common_sign_reset_password_success = () => {
	return `Your password has been reset. You can now sign in.`;
};
var zh_common_sign_reset_password_success = () => {
	return `密码已重置，请使用新密码登录。`;
};
/** @type {(inputs: Common_Sign_Reset_Password_SuccessInputs) => LocalizedString} */
var zh_tw2_common_sign_reset_password_success = zh_common_sign_reset_password_success;
/**
* | output |
* | --- |
* | "Your password has been reset. You can now sign in." |
*
* @param {Common_Sign_Reset_Password_SuccessInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_reset_password_success = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_reset_password_success(inputs);
	if (locale === "zh") return zh_common_sign_reset_password_success(inputs);
	return zh_tw2_common_sign_reset_password_success(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Reset_Password_Invalid_TokenInputs */
var en_common_sign_reset_password_invalid_token = () => {
	return `This reset link is invalid or has expired. Please request a new one.`;
};
var zh_common_sign_reset_password_invalid_token = () => {
	return `重置链接无效或已过期，请重新申请。`;
};
/** @type {(inputs: Common_Sign_Reset_Password_Invalid_TokenInputs) => LocalizedString} */
var zh_tw2_common_sign_reset_password_invalid_token = zh_common_sign_reset_password_invalid_token;
/**
* | output |
* | --- |
* | "This reset link is invalid or has expired. Please request a new one." |
*
* @param {Common_Sign_Reset_Password_Invalid_TokenInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_reset_password_invalid_token = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_reset_password_invalid_token(inputs);
	if (locale === "zh") return zh_common_sign_reset_password_invalid_token(inputs);
	return zh_tw2_common_sign_reset_password_invalid_token(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Reset_Password_Missing_TokenInputs */
var en_common_sign_reset_password_missing_token = () => {
	return `Missing reset token. Please open the link from your email.`;
};
var zh_common_sign_reset_password_missing_token = () => {
	return `缺少重置令牌，请从邮件中打开链接。`;
};
/** @type {(inputs: Common_Sign_Reset_Password_Missing_TokenInputs) => LocalizedString} */
var zh_tw2_common_sign_reset_password_missing_token = zh_common_sign_reset_password_missing_token;
/**
* | output |
* | --- |
* | "Missing reset token. Please open the link from your email." |
*
* @param {Common_Sign_Reset_Password_Missing_TokenInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_reset_password_missing_token = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_reset_password_missing_token(inputs);
	if (locale === "zh") return zh_common_sign_reset_password_missing_token(inputs);
	return zh_tw2_common_sign_reset_password_missing_token(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Password_Reset_Unavailable_TitleInputs */
var en_common_sign_password_reset_unavailable_title = () => {
	return `Password reset is not available`;
};
var zh_common_sign_password_reset_unavailable_title = () => {
	return `暂无法找回密码`;
};
/** @type {(inputs: Common_Sign_Password_Reset_Unavailable_TitleInputs) => LocalizedString} */
var zh_tw2_common_sign_password_reset_unavailable_title = zh_common_sign_password_reset_unavailable_title;
/**
* | output |
* | --- |
* | "Password reset is not available" |
*
* @param {Common_Sign_Password_Reset_Unavailable_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_password_reset_unavailable_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_password_reset_unavailable_title(inputs);
	if (locale === "zh") return zh_common_sign_password_reset_unavailable_title(inputs);
	return zh_tw2_common_sign_password_reset_unavailable_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Password_Reset_Unavailable_DescriptionInputs */
var en_common_sign_password_reset_unavailable_description = () => {
	return `The administrator hasn't configured an email service yet, so reset links can't be sent. Please contact support.`;
};
var zh_common_sign_password_reset_unavailable_description = () => {
	return `管理员尚未配置邮件服务，无法发送重置链接，请联系客服。`;
};
/** @type {(inputs: Common_Sign_Password_Reset_Unavailable_DescriptionInputs) => LocalizedString} */
var zh_tw2_common_sign_password_reset_unavailable_description = zh_common_sign_password_reset_unavailable_description;
/**
* | output |
* | --- |
* | "The administrator hasn't configured an email service yet, so reset links can't be sent. Please contact support." |
*
* @param {Common_Sign_Password_Reset_Unavailable_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_password_reset_unavailable_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_password_reset_unavailable_description(inputs);
	if (locale === "zh") return zh_common_sign_password_reset_unavailable_description(inputs);
	return zh_tw2_common_sign_password_reset_unavailable_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Verify_Email_Page_TitleInputs */
var en_common_sign_verify_email_page_title = () => {
	return `Check your email`;
};
var zh_common_sign_verify_email_page_title = () => {
	return `请查收邮件`;
};
/** @type {(inputs: Common_Sign_Verify_Email_Page_TitleInputs) => LocalizedString} */
var zh_tw2_common_sign_verify_email_page_title = zh_common_sign_verify_email_page_title;
/**
* | output |
* | --- |
* | "Check your email" |
*
* @param {Common_Sign_Verify_Email_Page_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_verify_email_page_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_verify_email_page_title(inputs);
	if (locale === "zh") return zh_common_sign_verify_email_page_title(inputs);
	return zh_tw2_common_sign_verify_email_page_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Verify_Email_Page_DescriptionInputs */
var en_common_sign_verify_email_page_description = () => {
	return `To continue, click the link sent to`;
};
var zh_common_sign_verify_email_page_description = () => {
	return `继续操作前，请点击发送到以下邮箱的验证链接：`;
};
/** @type {(inputs: Common_Sign_Verify_Email_Page_DescriptionInputs) => LocalizedString} */
var zh_tw2_common_sign_verify_email_page_description = zh_common_sign_verify_email_page_description;
/**
* | output |
* | --- |
* | "To continue, click the link sent to" |
*
* @param {Common_Sign_Verify_Email_Page_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_verify_email_page_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_verify_email_page_description(inputs);
	if (locale === "zh") return zh_common_sign_verify_email_page_description(inputs);
	return zh_tw2_common_sign_verify_email_page_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Verify_Email_ContinueInputs */
var en_common_sign_verify_email_continue = () => {
	return `Continue`;
};
var zh_common_sign_verify_email_continue = () => {
	return `继续`;
};
/** @type {(inputs: Common_Sign_Verify_Email_ContinueInputs) => LocalizedString} */
var zh_tw2_common_sign_verify_email_continue = zh_common_sign_verify_email_continue;
/**
* | output |
* | --- |
* | "Continue" |
*
* @param {Common_Sign_Verify_Email_ContinueInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_verify_email_continue = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_verify_email_continue(inputs);
	if (locale === "zh") return zh_common_sign_verify_email_continue(inputs);
	return zh_tw2_common_sign_verify_email_continue(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Verify_Email_TipInputs */
var en_common_sign_verify_email_tip = () => {
	return `After verifying, click "Continue".`;
};
var zh_common_sign_verify_email_tip = () => {
	return `完成验证后，请点击「继续」按钮。`;
};
/** @type {(inputs: Common_Sign_Verify_Email_TipInputs) => LocalizedString} */
var zh_tw2_common_sign_verify_email_tip = zh_common_sign_verify_email_tip;
/**
* | output |
* | --- |
* | "After verifying, click \"Continue\"." |
*
* @param {Common_Sign_Verify_Email_TipInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_verify_email_tip = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_verify_email_tip(inputs);
	if (locale === "zh") return zh_common_sign_verify_email_tip(inputs);
	return zh_tw2_common_sign_verify_email_tip(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Verify_Email_Not_Verified_YetInputs */
var en_common_sign_verify_email_not_verified_yet = () => {
	return `Not verified yet. Please click the link in your email first.`;
};
var zh_common_sign_verify_email_not_verified_yet = () => {
	return `尚未完成验证，请先前往邮箱点击验证链接。`;
};
/** @type {(inputs: Common_Sign_Verify_Email_Not_Verified_YetInputs) => LocalizedString} */
var zh_tw2_common_sign_verify_email_not_verified_yet = zh_common_sign_verify_email_not_verified_yet;
/**
* | output |
* | --- |
* | "Not verified yet. Please click the link in your email first." |
*
* @param {Common_Sign_Verify_Email_Not_Verified_YetInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_verify_email_not_verified_yet = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_verify_email_not_verified_yet(inputs);
	if (locale === "zh") return zh_common_sign_verify_email_not_verified_yet(inputs);
	return zh_tw2_common_sign_verify_email_not_verified_yet(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Verify_Email_Send_FailedInputs */
var en_common_sign_verify_email_send_failed = () => {
	return `Failed to send verification email`;
};
var zh_common_sign_verify_email_send_failed = () => {
	return `发送验证邮件失败`;
};
/** @type {(inputs: Common_Sign_Verify_Email_Send_FailedInputs) => LocalizedString} */
var zh_tw2_common_sign_verify_email_send_failed = zh_common_sign_verify_email_send_failed;
/**
* | output |
* | --- |
* | "Failed to send verification email" |
*
* @param {Common_Sign_Verify_Email_Send_FailedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_verify_email_send_failed = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_verify_email_send_failed(inputs);
	if (locale === "zh") return zh_common_sign_verify_email_send_failed(inputs);
	return zh_tw2_common_sign_verify_email_send_failed(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Verify_Email_Email_RequiredInputs */
var en_common_sign_verify_email_email_required = () => {
	return `Email is required`;
};
var zh_common_sign_verify_email_email_required = () => {
	return `邮箱不能为空`;
};
/** @type {(inputs: Common_Sign_Verify_Email_Email_RequiredInputs) => LocalizedString} */
var zh_tw2_common_sign_verify_email_email_required = zh_common_sign_verify_email_email_required;
/**
* | output |
* | --- |
* | "Email is required" |
*
* @param {Common_Sign_Verify_Email_Email_RequiredInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_verify_email_email_required = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_verify_email_email_required(inputs);
	if (locale === "zh") return zh_common_sign_verify_email_email_required(inputs);
	return zh_tw2_common_sign_verify_email_email_required(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Resend_VerificationInputs */
var en_common_sign_resend_verification = () => {
	return `Resend verification email`;
};
var zh_common_sign_resend_verification = () => {
	return `重新发送验证邮件`;
};
/** @type {(inputs: Common_Sign_Resend_VerificationInputs) => LocalizedString} */
var zh_tw2_common_sign_resend_verification = zh_common_sign_resend_verification;
/**
* | output |
* | --- |
* | "Resend verification email" |
*
* @param {Common_Sign_Resend_VerificationInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_resend_verification = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_resend_verification(inputs);
	if (locale === "zh") return zh_common_sign_resend_verification(inputs);
	return zh_tw2_common_sign_resend_verification(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ seconds: NonNullable<unknown> }} Common_Sign_Resend_Verification_CountdownInputs */
var en_common_sign_resend_verification_countdown = (i) => {
	return `Resend in ${i?.seconds}s`;
};
var zh_common_sign_resend_verification_countdown = (i) => {
	return `${i?.seconds} 秒后可重新发送`;
};
/** @type {(inputs: Common_Sign_Resend_Verification_CountdownInputs) => LocalizedString} */
var zh_tw2_common_sign_resend_verification_countdown = zh_common_sign_resend_verification_countdown;
/**
* | output |
* | --- |
* | "Resend in {seconds}s" |
*
* @param {Common_Sign_Resend_Verification_CountdownInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_resend_verification_countdown = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_resend_verification_countdown(inputs);
	if (locale === "zh") return zh_common_sign_resend_verification_countdown(inputs);
	return zh_tw2_common_sign_resend_verification_countdown(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Invite_Code_TitleInputs */
var en_common_sign_invite_code_title = () => {
	return `Invite code`;
};
var zh_common_sign_invite_code_title = () => {
	return `邀请码`;
};
/** @type {(inputs: Common_Sign_Invite_Code_TitleInputs) => LocalizedString} */
var zh_tw2_common_sign_invite_code_title = zh_common_sign_invite_code_title;
/**
* | output |
* | --- |
* | "Invite code" |
*
* @param {Common_Sign_Invite_Code_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_invite_code_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_invite_code_title(inputs);
	if (locale === "zh") return zh_common_sign_invite_code_title(inputs);
	return zh_tw2_common_sign_invite_code_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Invite_Code_PlaceholderInputs */
var en_common_sign_invite_code_placeholder = () => {
	return `Enter your invite code`;
};
var zh_common_sign_invite_code_placeholder = () => {
	return `请输入邀请码`;
};
/** @type {(inputs: Common_Sign_Invite_Code_PlaceholderInputs) => LocalizedString} */
var zh_tw2_common_sign_invite_code_placeholder = zh_common_sign_invite_code_placeholder;
/**
* | output |
* | --- |
* | "Enter your invite code" |
*
* @param {Common_Sign_Invite_Code_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_invite_code_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_invite_code_placeholder(inputs);
	if (locale === "zh") return zh_common_sign_invite_code_placeholder(inputs);
	return zh_tw2_common_sign_invite_code_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Invite_Code_RequiredInputs */
var en_common_sign_invite_code_required = () => {
	return `Invite code is required`;
};
var zh_common_sign_invite_code_required = () => {
	return `请输入邀请码`;
};
/** @type {(inputs: Common_Sign_Invite_Code_RequiredInputs) => LocalizedString} */
var zh_tw2_common_sign_invite_code_required = zh_common_sign_invite_code_required;
/**
* | output |
* | --- |
* | "Invite code is required" |
*
* @param {Common_Sign_Invite_Code_RequiredInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_invite_code_required = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_invite_code_required(inputs);
	if (locale === "zh") return zh_common_sign_invite_code_required(inputs);
	return zh_tw2_common_sign_invite_code_required(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Invite_Code_InvalidInputs */
var en_common_sign_invite_code_invalid = () => {
	return `Invalid invite code`;
};
var zh_common_sign_invite_code_invalid = () => {
	return `邀请码无效`;
};
/** @type {(inputs: Common_Sign_Invite_Code_InvalidInputs) => LocalizedString} */
var zh_tw2_common_sign_invite_code_invalid = zh_common_sign_invite_code_invalid;
/**
* | output |
* | --- |
* | "Invalid invite code" |
*
* @param {Common_Sign_Invite_Code_InvalidInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_invite_code_invalid = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_invite_code_invalid(inputs);
	if (locale === "zh") return zh_common_sign_invite_code_invalid(inputs);
	return zh_tw2_common_sign_invite_code_invalid(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Redeem_TitleInputs */
var en_common_sign_redeem_title = () => {
	return `Enter your invite code`;
};
var zh_common_sign_redeem_title = () => {
	return `输入邀请码`;
};
/** @type {(inputs: Common_Sign_Redeem_TitleInputs) => LocalizedString} */
var zh_tw2_common_sign_redeem_title = zh_common_sign_redeem_title;
/**
* | output |
* | --- |
* | "Enter your invite code" |
*
* @param {Common_Sign_Redeem_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_redeem_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_redeem_title(inputs);
	if (locale === "zh") return zh_common_sign_redeem_title(inputs);
	return zh_tw2_common_sign_redeem_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Redeem_DescriptionInputs */
var en_common_sign_redeem_description = () => {
	return `This app is invite-only. Enter a valid invite code to continue.`;
};
var zh_common_sign_redeem_description = () => {
	return `本应用为邀请制,请输入有效的邀请码以继续。`;
};
/** @type {(inputs: Common_Sign_Redeem_DescriptionInputs) => LocalizedString} */
var zh_tw2_common_sign_redeem_description = zh_common_sign_redeem_description;
/**
* | output |
* | --- |
* | "This app is invite-only. Enter a valid invite code to continue." |
*
* @param {Common_Sign_Redeem_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_redeem_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_redeem_description(inputs);
	if (locale === "zh") return zh_common_sign_redeem_description(inputs);
	return zh_tw2_common_sign_redeem_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Sign_Redeem_SubmitInputs */
var en_common_sign_redeem_submit = () => {
	return `Continue`;
};
var zh_common_sign_redeem_submit = () => {
	return `继续`;
};
/** @type {(inputs: Common_Sign_Redeem_SubmitInputs) => LocalizedString} */
var zh_tw2_common_sign_redeem_submit = zh_common_sign_redeem_submit;
/**
* | output |
* | --- |
* | "Continue" |
*
* @param {Common_Sign_Redeem_SubmitInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_sign_redeem_submit = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_sign_redeem_submit(inputs);
	if (locale === "zh") return zh_common_sign_redeem_submit(inputs);
	return zh_tw2_common_sign_redeem_submit(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Not_Found_MessageInputs */
var en_common_not_found_message = () => {
	return `Page not found`;
};
var zh_common_not_found_message = () => {
	return `页面不存在`;
};
var zh_tw2_common_not_found_message = () => {
	return `找不到頁面`;
};
/**
* | output |
* | --- |
* | "Page not found" |
*
* @param {Common_Not_Found_MessageInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_not_found_message = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_not_found_message(inputs);
	if (locale === "zh") return zh_common_not_found_message(inputs);
	return zh_tw2_common_not_found_message(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Not_Found_Back_HomeInputs */
var en_common_not_found_back_home = () => {
	return `Back to home`;
};
var zh_common_not_found_back_home = () => {
	return `返回首页`;
};
var zh_tw2_common_not_found_back_home = () => {
	return `返回首頁`;
};
/**
* | output |
* | --- |
* | "Back to home" |
*
* @param {Common_Not_Found_Back_HomeInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_not_found_back_home = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_not_found_back_home(inputs);
	if (locale === "zh") return zh_common_not_found_back_home(inputs);
	return zh_tw2_common_not_found_back_home(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Error_TitleInputs */
var en_common_error_title = () => {
	return `Oops`;
};
var zh_common_error_title = () => {
	return `出错了`;
};
var zh_tw2_common_error_title = () => {
	return `發生錯誤`;
};
/**
* | output |
* | --- |
* | "Oops" |
*
* @param {Common_Error_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_error_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_error_title(inputs);
	if (locale === "zh") return zh_common_error_title(inputs);
	return zh_tw2_common_error_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Error_MessageInputs */
var en_common_error_message = () => {
	return `Something went wrong. Please try again.`;
};
var zh_common_error_message = () => {
	return `页面出现了一些问题，请重试。`;
};
var zh_tw2_common_error_message = () => {
	return `發生問題，請稍後再試。`;
};
/**
* | output |
* | --- |
* | "Something went wrong. Please try again." |
*
* @param {Common_Error_MessageInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_error_message = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_error_message(inputs);
	if (locale === "zh") return zh_common_error_message(inputs);
	return zh_tw2_common_error_message(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Error_RetryInputs */
var en_common_error_retry = () => {
	return `Try again`;
};
var zh_common_error_retry = () => {
	return `重试`;
};
var zh_tw2_common_error_retry = () => {
	return `重試`;
};
/**
* | output |
* | --- |
* | "Try again" |
*
* @param {Common_Error_RetryInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_error_retry = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_error_retry(inputs);
	if (locale === "zh") return zh_common_error_retry(inputs);
	return zh_tw2_common_error_retry(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Pricing_Get_StartedInputs */
var en_common_pricing_get_started = () => {
	return `Get Started`;
};
var zh_common_pricing_get_started = () => {
	return `立即开始`;
};
/** @type {(inputs: Common_Pricing_Get_StartedInputs) => LocalizedString} */
var zh_tw2_common_pricing_get_started = zh_common_pricing_get_started;
/**
* | output |
* | --- |
* | "Get Started" |
*
* @param {Common_Pricing_Get_StartedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_pricing_get_started = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_pricing_get_started(inputs);
	if (locale === "zh") return zh_common_pricing_get_started(inputs);
	return zh_tw2_common_pricing_get_started(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Pricing_ProcessingInputs */
var en_common_pricing_processing = () => {
	return `Processing...`;
};
var zh_common_pricing_processing = () => {
	return `处理中...`;
};
/** @type {(inputs: Common_Pricing_ProcessingInputs) => LocalizedString} */
var zh_tw2_common_pricing_processing = zh_common_pricing_processing;
/**
* | output |
* | --- |
* | "Processing..." |
*
* @param {Common_Pricing_ProcessingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_pricing_processing = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_pricing_processing(inputs);
	if (locale === "zh") return zh_common_pricing_processing(inputs);
	return zh_tw2_common_pricing_processing(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Pricing_Choose_PaymentInputs */
var en_common_pricing_choose_payment = () => {
	return `Choose payment method`;
};
var zh_common_pricing_choose_payment = () => {
	return `选择支付方式`;
};
/** @type {(inputs: Common_Pricing_Choose_PaymentInputs) => LocalizedString} */
var zh_tw2_common_pricing_choose_payment = zh_common_pricing_choose_payment;
/**
* | output |
* | --- |
* | "Choose payment method" |
*
* @param {Common_Pricing_Choose_PaymentInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_pricing_choose_payment = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_pricing_choose_payment(inputs);
	if (locale === "zh") return zh_common_pricing_choose_payment(inputs);
	return zh_tw2_common_pricing_choose_payment(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Pricing_Choose_Payment_DescInputs */
var en_common_pricing_choose_payment_desc = () => {
	return `Pick how you'd like to pay.`;
};
var zh_common_pricing_choose_payment_desc = () => {
	return `选择你想使用的支付渠道。`;
};
/** @type {(inputs: Common_Pricing_Choose_Payment_DescInputs) => LocalizedString} */
var zh_tw2_common_pricing_choose_payment_desc = zh_common_pricing_choose_payment_desc;
/**
* | output |
* | --- |
* | "Pick how you'd like to pay." |
*
* @param {Common_Pricing_Choose_Payment_DescInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_pricing_choose_payment_desc = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_pricing_choose_payment_desc(inputs);
	if (locale === "zh") return zh_common_pricing_choose_payment_desc(inputs);
	return zh_tw2_common_pricing_choose_payment_desc(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ plan: NonNullable<unknown>, price: NonNullable<unknown> }} Common_Pricing_Payment_ForInputs */
var en_common_pricing_payment_for = (i) => {
	return `${i?.plan} — ${i?.price}`;
};
var zh_common_pricing_payment_for = (i) => {
	return `${i?.plan} — ${i?.price}`;
};
/** @type {(inputs: Common_Pricing_Payment_ForInputs) => LocalizedString} */
var zh_tw2_common_pricing_payment_for = zh_common_pricing_payment_for;
/**
* | output |
* | --- |
* | "{plan} — {price}" |
*
* @param {Common_Pricing_Payment_ForInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_pricing_payment_for = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_pricing_payment_for(inputs);
	if (locale === "zh") return zh_common_pricing_payment_for(inputs);
	return zh_tw2_common_pricing_payment_for(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ plan: NonNullable<unknown> }} Common_Pricing_Payment_For_PlanInputs */
var en_common_pricing_payment_for_plan = (i) => {
	return `${i?.plan}`;
};
var zh_common_pricing_payment_for_plan = (i) => {
	return `${i?.plan}`;
};
/** @type {(inputs: Common_Pricing_Payment_For_PlanInputs) => LocalizedString} */
var zh_tw2_common_pricing_payment_for_plan = zh_common_pricing_payment_for_plan;
/**
* | output |
* | --- |
* | "{plan}" |
*
* @param {Common_Pricing_Payment_For_PlanInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_pricing_payment_for_plan = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_pricing_payment_for_plan(inputs);
	if (locale === "zh") return zh_common_pricing_payment_for_plan(inputs);
	return zh_tw2_common_pricing_payment_for_plan(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Systems_LabelInputs */
var en_common_systems_label = () => {
	return `Switch System`;
};
var zh_common_systems_label = () => {
	return `切换系统`;
};
/** @type {(inputs: Common_Systems_LabelInputs) => LocalizedString} */
var zh_tw2_common_systems_label = zh_common_systems_label;
/**
* | output |
* | --- |
* | "Switch System" |
*
* @param {Common_Systems_LabelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_systems_label = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_systems_label(inputs);
	if (locale === "zh") return zh_common_systems_label(inputs);
	return zh_tw2_common_systems_label(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Systems_AdminInputs */
var en_common_systems_admin = () => {
	return `Admin`;
};
var zh_common_systems_admin = () => {
	return `管理后台`;
};
/** @type {(inputs: Common_Systems_AdminInputs) => LocalizedString} */
var zh_tw2_common_systems_admin = zh_common_systems_admin;
/**
* | output |
* | --- |
* | "Admin" |
*
* @param {Common_Systems_AdminInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_systems_admin = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_systems_admin(inputs);
	if (locale === "zh") return zh_common_systems_admin(inputs);
	return zh_tw2_common_systems_admin(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Systems_SettingsInputs */
var en_common_systems_settings = () => {
	return `Settings`;
};
var zh_common_systems_settings = () => {
	return `设置`;
};
/** @type {(inputs: Common_Systems_SettingsInputs) => LocalizedString} */
var zh_tw2_common_systems_settings = zh_common_systems_settings;
/**
* | output |
* | --- |
* | "Settings" |
*
* @param {Common_Systems_SettingsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_systems_settings = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_systems_settings(inputs);
	if (locale === "zh") return zh_common_systems_settings(inputs);
	return zh_tw2_common_systems_settings(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Systems_HomeInputs */
var en_common_systems_home = () => {
	return `Home`;
};
var zh_common_systems_home = () => {
	return `首页`;
};
/** @type {(inputs: Common_Systems_HomeInputs) => LocalizedString} */
var zh_tw2_common_systems_home = zh_common_systems_home;
/**
* | output |
* | --- |
* | "Home" |
*
* @param {Common_Systems_HomeInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_systems_home = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_systems_home(inputs);
	if (locale === "zh") return zh_common_systems_home(inputs);
	return zh_tw2_common_systems_home(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Search_PlaceholderInputs */
var en_common_search_placeholder = () => {
	return `Search wiki…`;
};
var zh_common_search_placeholder = () => {
	return `搜索百科…`;
};
var zh_tw2_common_search_placeholder = () => {
	return `搜尋 Wiki…`;
};
/**
* | output |
* | --- |
* | "Search wiki…" |
*
* @param {Common_Search_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_search_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_search_placeholder(inputs);
	if (locale === "zh") return zh_common_search_placeholder(inputs);
	return zh_tw2_common_search_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Table_No_DataInputs */
var en_common_table_no_data = () => {
	return `No data`;
};
var zh_common_table_no_data = () => {
	return `暂无数据`;
};
/** @type {(inputs: Common_Table_No_DataInputs) => LocalizedString} */
var zh_tw2_common_table_no_data = zh_common_table_no_data;
/**
* | output |
* | --- |
* | "No data" |
*
* @param {Common_Table_No_DataInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_table_no_data = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_table_no_data(inputs);
	if (locale === "zh") return zh_common_table_no_data(inputs);
	return zh_tw2_common_table_no_data(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ count: NonNullable<unknown> }} Common_Table_TotalInputs */
var en_common_table_total = (i) => {
	return `${i?.count} records`;
};
var zh_common_table_total = (i) => {
	return `共 ${i?.count} 条记录`;
};
/** @type {(inputs: Common_Table_TotalInputs) => LocalizedString} */
var zh_tw2_common_table_total = zh_common_table_total;
/**
* | output |
* | --- |
* | "{count} records" |
*
* @param {Common_Table_TotalInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_table_total = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_table_total(inputs);
	if (locale === "zh") return zh_common_table_total(inputs);
	return zh_tw2_common_table_total(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ current: NonNullable<unknown>, total: NonNullable<unknown> }} Common_Table_Page_InfoInputs */
var en_common_table_page_info = (i) => {
	return `Page ${i?.current} of ${i?.total}`;
};
var zh_common_table_page_info = (i) => {
	return `第 ${i?.current} 页，共 ${i?.total} 页`;
};
/** @type {(inputs: Common_Table_Page_InfoInputs) => LocalizedString} */
var zh_tw2_common_table_page_info = zh_common_table_page_info;
/**
* | output |
* | --- |
* | "Page {current} of {total}" |
*
* @param {Common_Table_Page_InfoInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_table_page_info = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_table_page_info(inputs);
	if (locale === "zh") return zh_common_table_page_info(inputs);
	return zh_tw2_common_table_page_info(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Table_PreviousInputs */
var en_common_table_previous = () => {
	return `Previous`;
};
var zh_common_table_previous = () => {
	return `上一页`;
};
/** @type {(inputs: Common_Table_PreviousInputs) => LocalizedString} */
var zh_tw2_common_table_previous = zh_common_table_previous;
/**
* | output |
* | --- |
* | "Previous" |
*
* @param {Common_Table_PreviousInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_table_previous = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_table_previous(inputs);
	if (locale === "zh") return zh_common_table_previous(inputs);
	return zh_tw2_common_table_previous(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Table_NextInputs */
var en_common_table_next = () => {
	return `Next`;
};
var zh_common_table_next = () => {
	return `下一页`;
};
/** @type {(inputs: Common_Table_NextInputs) => LocalizedString} */
var zh_tw2_common_table_next = zh_common_table_next;
/**
* | output |
* | --- |
* | "Next" |
*
* @param {Common_Table_NextInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_table_next = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_table_next(inputs);
	if (locale === "zh") return zh_common_table_next(inputs);
	return zh_tw2_common_table_next(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Table_RefreshInputs */
var en_common_table_refresh = () => {
	return `Refresh`;
};
var zh_common_table_refresh = () => {
	return `刷新`;
};
/** @type {(inputs: Common_Table_RefreshInputs) => LocalizedString} */
var zh_tw2_common_table_refresh = zh_common_table_refresh;
/**
* | output |
* | --- |
* | "Refresh" |
*
* @param {Common_Table_RefreshInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_table_refresh = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_table_refresh(inputs);
	if (locale === "zh") return zh_common_table_refresh(inputs);
	return zh_tw2_common_table_refresh(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Nav_SettingsInputs */
var en_common_nav_settings = () => {
	return `Settings`;
};
var zh_common_nav_settings = () => {
	return `设置`;
};
/** @type {(inputs: Common_Nav_SettingsInputs) => LocalizedString} */
var zh_tw2_common_nav_settings = zh_common_nav_settings;
/**
* | output |
* | --- |
* | "Settings" |
*
* @param {Common_Nav_SettingsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_nav_settings = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_nav_settings(inputs);
	if (locale === "zh") return zh_common_nav_settings(inputs);
	return zh_tw2_common_nav_settings(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Nav_BillingInputs */
var en_common_nav_billing = () => {
	return `Billing`;
};
var zh_common_nav_billing = () => {
	return `账单`;
};
/** @type {(inputs: Common_Nav_BillingInputs) => LocalizedString} */
var zh_tw2_common_nav_billing = zh_common_nav_billing;
/**
* | output |
* | --- |
* | "Billing" |
*
* @param {Common_Nav_BillingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_nav_billing = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_nav_billing(inputs);
	if (locale === "zh") return zh_common_nav_billing(inputs);
	return zh_tw2_common_nav_billing(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Nav_ApikeysInputs */
var en_common_nav_apikeys = () => {
	return `API Keys`;
};
var zh_common_nav_apikeys = () => {
	return `API 密钥`;
};
/** @type {(inputs: Common_Nav_ApikeysInputs) => LocalizedString} */
var zh_tw2_common_nav_apikeys = zh_common_nav_apikeys;
/**
* | output |
* | --- |
* | "API Keys" |
*
* @param {Common_Nav_ApikeysInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_nav_apikeys = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_nav_apikeys(inputs);
	if (locale === "zh") return zh_common_nav_apikeys(inputs);
	return zh_tw2_common_nav_apikeys(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Nav_ProfileInputs */
var en_common_nav_profile = () => {
	return `Profile`;
};
var zh_common_nav_profile = () => {
	return `个人资料`;
};
/** @type {(inputs: Common_Nav_ProfileInputs) => LocalizedString} */
var zh_tw2_common_nav_profile = zh_common_nav_profile;
/**
* | output |
* | --- |
* | "Profile" |
*
* @param {Common_Nav_ProfileInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_nav_profile = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_nav_profile(inputs);
	if (locale === "zh") return zh_common_nav_profile(inputs);
	return zh_tw2_common_nav_profile(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Nav_Sign_InInputs */
var en_common_nav_sign_in = () => {
	return `Sign In`;
};
var zh_common_nav_sign_in = () => {
	return `登录`;
};
/** @type {(inputs: Common_Nav_Sign_InInputs) => LocalizedString} */
var zh_tw2_common_nav_sign_in = zh_common_nav_sign_in;
/**
* | output |
* | --- |
* | "Sign In" |
*
* @param {Common_Nav_Sign_InInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_nav_sign_in = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_nav_sign_in(inputs);
	if (locale === "zh") return zh_common_nav_sign_in(inputs);
	return zh_tw2_common_nav_sign_in(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Nav_Get_StartedInputs */
var en_common_nav_get_started = () => {
	return `Get Started`;
};
var zh_common_nav_get_started = () => {
	return `开始使用`;
};
/** @type {(inputs: Common_Nav_Get_StartedInputs) => LocalizedString} */
var zh_tw2_common_nav_get_started = zh_common_nav_get_started;
/**
* | output |
* | --- |
* | "Get Started" |
*
* @param {Common_Nav_Get_StartedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_nav_get_started = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_nav_get_started(inputs);
	if (locale === "zh") return zh_common_nav_get_started(inputs);
	return zh_tw2_common_nav_get_started(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Nav_Theme_LightInputs */
var en_common_nav_theme_light = () => {
	return `Light`;
};
var zh_common_nav_theme_light = () => {
	return `浅色模式`;
};
/** @type {(inputs: Common_Nav_Theme_LightInputs) => LocalizedString} */
var zh_tw2_common_nav_theme_light = zh_common_nav_theme_light;
/**
* | output |
* | --- |
* | "Light" |
*
* @param {Common_Nav_Theme_LightInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_nav_theme_light = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_nav_theme_light(inputs);
	if (locale === "zh") return zh_common_nav_theme_light(inputs);
	return zh_tw2_common_nav_theme_light(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Nav_Theme_DarkInputs */
var en_common_nav_theme_dark = () => {
	return `Dark`;
};
var zh_common_nav_theme_dark = () => {
	return `深色模式`;
};
/** @type {(inputs: Common_Nav_Theme_DarkInputs) => LocalizedString} */
var zh_tw2_common_nav_theme_dark = zh_common_nav_theme_dark;
/**
* | output |
* | --- |
* | "Dark" |
*
* @param {Common_Nav_Theme_DarkInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_nav_theme_dark = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_nav_theme_dark(inputs);
	if (locale === "zh") return zh_common_nav_theme_dark(inputs);
	return zh_tw2_common_nav_theme_dark(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Nav_Theme_SystemInputs */
var en_common_nav_theme_system = () => {
	return `System`;
};
var zh_common_nav_theme_system = () => {
	return `跟随系统`;
};
/** @type {(inputs: Common_Nav_Theme_SystemInputs) => LocalizedString} */
var zh_tw2_common_nav_theme_system = zh_common_nav_theme_system;
/**
* | output |
* | --- |
* | "System" |
*
* @param {Common_Nav_Theme_SystemInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_nav_theme_system = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_nav_theme_system(inputs);
	if (locale === "zh") return zh_common_nav_theme_system(inputs);
	return zh_tw2_common_nav_theme_system(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Pages_Back_To_HomeInputs */
var en_common_pages_back_to_home = () => {
	return `Back to home`;
};
var zh_common_pages_back_to_home = () => {
	return `返回首页`;
};
/** @type {(inputs: Common_Pages_Back_To_HomeInputs) => LocalizedString} */
var zh_tw2_common_pages_back_to_home = zh_common_pages_back_to_home;
/**
* | output |
* | --- |
* | "Back to home" |
*
* @param {Common_Pages_Back_To_HomeInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_pages_back_to_home = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_pages_back_to_home(inputs);
	if (locale === "zh") return zh_common_pages_back_to_home(inputs);
	return zh_tw2_common_pages_back_to_home(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Pages_Last_UpdatedInputs */
var en_common_pages_last_updated = () => {
	return `Last updated`;
};
var zh_common_pages_last_updated = () => {
	return `最近更新`;
};
/** @type {(inputs: Common_Pages_Last_UpdatedInputs) => LocalizedString} */
var zh_tw2_common_pages_last_updated = zh_common_pages_last_updated;
/**
* | output |
* | --- |
* | "Last updated" |
*
* @param {Common_Pages_Last_UpdatedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_pages_last_updated = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_pages_last_updated(inputs);
	if (locale === "zh") return zh_common_pages_last_updated(inputs);
	return zh_tw2_common_pages_last_updated(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_Open_LabelInputs */
var en_common_support_open_label = () => {
	return `Contact support`;
};
var zh_common_support_open_label = () => {
	return `联系客服`;
};
/** @type {(inputs: Common_Support_Open_LabelInputs) => LocalizedString} */
var zh_tw2_common_support_open_label = zh_common_support_open_label;
/**
* | output |
* | --- |
* | "Contact support" |
*
* @param {Common_Support_Open_LabelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_support_open_label = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_support_open_label(inputs);
	if (locale === "zh") return zh_common_support_open_label(inputs);
	return zh_tw2_common_support_open_label(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_TitleInputs */
var en_common_support_title = () => {
	return `Contact Support`;
};
var zh_common_support_title = () => {
	return `联系客服`;
};
/** @type {(inputs: Common_Support_TitleInputs) => LocalizedString} */
var zh_tw2_common_support_title = zh_common_support_title;
/**
* | output |
* | --- |
* | "Contact Support" |
*
* @param {Common_Support_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_support_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_support_title(inputs);
	if (locale === "zh") return zh_common_support_title(inputs);
	return zh_tw2_common_support_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_DescriptionInputs */
var en_common_support_description = () => {
	return `Submit a ticket and our team will get back to you`;
};
var zh_common_support_description = () => {
	return `提交工单反馈问题,我们会尽快回复你`;
};
/** @type {(inputs: Common_Support_DescriptionInputs) => LocalizedString} */
var zh_tw2_common_support_description = zh_common_support_description;
/**
* | output |
* | --- |
* | "Submit a ticket and our team will get back to you" |
*
* @param {Common_Support_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_support_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_support_description(inputs);
	if (locale === "zh") return zh_common_support_description(inputs);
	return zh_tw2_common_support_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_Sign_In_NoticeInputs */
var en_common_support_sign_in_notice = () => {
	return `Please sign in to submit a support ticket.`;
};
var zh_common_support_sign_in_notice = () => {
	return `请先登录后再提交工单。`;
};
/** @type {(inputs: Common_Support_Sign_In_NoticeInputs) => LocalizedString} */
var zh_tw2_common_support_sign_in_notice = zh_common_support_sign_in_notice;
/**
* | output |
* | --- |
* | "Please sign in to submit a support ticket." |
*
* @param {Common_Support_Sign_In_NoticeInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_support_sign_in_notice = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_support_sign_in_notice(inputs);
	if (locale === "zh") return zh_common_support_sign_in_notice(inputs);
	return zh_tw2_common_support_sign_in_notice(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_Sign_InInputs */
var en_common_support_sign_in = () => {
	return `Sign In`;
};
var zh_common_support_sign_in = () => {
	return `去登录`;
};
/** @type {(inputs: Common_Support_Sign_InInputs) => LocalizedString} */
var zh_tw2_common_support_sign_in = zh_common_support_sign_in;
/**
* | output |
* | --- |
* | "Sign In" |
*
* @param {Common_Support_Sign_InInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_support_sign_in = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_support_sign_in(inputs);
	if (locale === "zh") return zh_common_support_sign_in(inputs);
	return zh_tw2_common_support_sign_in(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_Title_LabelInputs */
var en_common_support_title_label = () => {
	return `Subject`;
};
var zh_common_support_title_label = () => {
	return `标题`;
};
/** @type {(inputs: Common_Support_Title_LabelInputs) => LocalizedString} */
var zh_tw2_common_support_title_label = zh_common_support_title_label;
/**
* | output |
* | --- |
* | "Subject" |
*
* @param {Common_Support_Title_LabelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_support_title_label = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_support_title_label(inputs);
	if (locale === "zh") return zh_common_support_title_label(inputs);
	return zh_tw2_common_support_title_label(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_Title_PlaceholderInputs */
var en_common_support_title_placeholder = () => {
	return `Brief summary of your issue`;
};
var zh_common_support_title_placeholder = () => {
	return `简要描述你的问题`;
};
/** @type {(inputs: Common_Support_Title_PlaceholderInputs) => LocalizedString} */
var zh_tw2_common_support_title_placeholder = zh_common_support_title_placeholder;
/**
* | output |
* | --- |
* | "Brief summary of your issue" |
*
* @param {Common_Support_Title_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_support_title_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_support_title_placeholder(inputs);
	if (locale === "zh") return zh_common_support_title_placeholder(inputs);
	return zh_tw2_common_support_title_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_Content_LabelInputs */
var en_common_support_content_label = () => {
	return `Description`;
};
var zh_common_support_content_label = () => {
	return `问题描述`;
};
/** @type {(inputs: Common_Support_Content_LabelInputs) => LocalizedString} */
var zh_tw2_common_support_content_label = zh_common_support_content_label;
/**
* | output |
* | --- |
* | "Description" |
*
* @param {Common_Support_Content_LabelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_support_content_label = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_support_content_label(inputs);
	if (locale === "zh") return zh_common_support_content_label(inputs);
	return zh_tw2_common_support_content_label(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_Content_PlaceholderInputs */
var en_common_support_content_placeholder = () => {
	return `Describe your issue in detail...`;
};
var zh_common_support_content_placeholder = () => {
	return `详细描述你遇到的问题…`;
};
/** @type {(inputs: Common_Support_Content_PlaceholderInputs) => LocalizedString} */
var zh_tw2_common_support_content_placeholder = zh_common_support_content_placeholder;
/**
* | output |
* | --- |
* | "Describe your issue in detail..." |
*
* @param {Common_Support_Content_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_support_content_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_support_content_placeholder(inputs);
	if (locale === "zh") return zh_common_support_content_placeholder(inputs);
	return zh_tw2_common_support_content_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_Track_Hint_PrefixInputs */
var en_common_support_track_hint_prefix = () => {
	return `You can track replies in`;
};
var zh_common_support_track_hint_prefix = () => {
	return `提交后可前往`;
};
/** @type {(inputs: Common_Support_Track_Hint_PrefixInputs) => LocalizedString} */
var zh_tw2_common_support_track_hint_prefix = zh_common_support_track_hint_prefix;
/**
* | output |
* | --- |
* | "You can track replies in" |
*
* @param {Common_Support_Track_Hint_PrefixInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_support_track_hint_prefix = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_support_track_hint_prefix(inputs);
	if (locale === "zh") return zh_common_support_track_hint_prefix(inputs);
	return zh_tw2_common_support_track_hint_prefix(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_Track_Hint_LinkInputs */
var en_common_support_track_hint_link = () => {
	return `Support Tickets`;
};
var zh_common_support_track_hint_link = () => {
	return `工单支持页面查看回复`;
};
/** @type {(inputs: Common_Support_Track_Hint_LinkInputs) => LocalizedString} */
var zh_tw2_common_support_track_hint_link = zh_common_support_track_hint_link;
/**
* | output |
* | --- |
* | "Support Tickets" |
*
* @param {Common_Support_Track_Hint_LinkInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_support_track_hint_link = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_support_track_hint_link(inputs);
	if (locale === "zh") return zh_common_support_track_hint_link(inputs);
	return zh_tw2_common_support_track_hint_link(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_RequiredInputs */
var en_common_support_required = () => {
	return `Subject and description are required`;
};
var zh_common_support_required = () => {
	return `请填写标题和问题描述`;
};
/** @type {(inputs: Common_Support_RequiredInputs) => LocalizedString} */
var zh_tw2_common_support_required = zh_common_support_required;
/**
* | output |
* | --- |
* | "Subject and description are required" |
*
* @param {Common_Support_RequiredInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_support_required = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_support_required(inputs);
	if (locale === "zh") return zh_common_support_required(inputs);
	return zh_tw2_common_support_required(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_SuccessInputs */
var en_common_support_success = () => {
	return `Ticket submitted — we'll get back to you soon`;
};
var zh_common_support_success = () => {
	return `工单已提交,我们会尽快回复`;
};
/** @type {(inputs: Common_Support_SuccessInputs) => LocalizedString} */
var zh_tw2_common_support_success = zh_common_support_success;
/**
* | output |
* | --- |
* | "Ticket submitted — we'll get back to you soon" |
*
* @param {Common_Support_SuccessInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_support_success = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_support_success(inputs);
	if (locale === "zh") return zh_common_support_success(inputs);
	return zh_tw2_common_support_success(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_CancelInputs */
var en_common_support_cancel = () => {
	return `Cancel`;
};
var zh_common_support_cancel = () => {
	return `取消`;
};
/** @type {(inputs: Common_Support_CancelInputs) => LocalizedString} */
var zh_tw2_common_support_cancel = zh_common_support_cancel;
/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Common_Support_CancelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_support_cancel = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_support_cancel(inputs);
	if (locale === "zh") return zh_common_support_cancel(inputs);
	return zh_tw2_common_support_cancel(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_SubmitInputs */
var en_common_support_submit = () => {
	return `Submit`;
};
var zh_common_support_submit = () => {
	return `提交`;
};
/** @type {(inputs: Common_Support_SubmitInputs) => LocalizedString} */
var zh_tw2_common_support_submit = zh_common_support_submit;
/**
* | output |
* | --- |
* | "Submit" |
*
* @param {Common_Support_SubmitInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_support_submit = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_support_submit(inputs);
	if (locale === "zh") return zh_common_support_submit(inputs);
	return zh_tw2_common_support_submit(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_SubmittingInputs */
var en_common_support_submitting = () => {
	return `Submitting...`;
};
var zh_common_support_submitting = () => {
	return `提交中…`;
};
/** @type {(inputs: Common_Support_SubmittingInputs) => LocalizedString} */
var zh_tw2_common_support_submitting = zh_common_support_submitting;
/**
* | output |
* | --- |
* | "Submitting..." |
*
* @param {Common_Support_SubmittingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_support_submitting = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_support_submitting(inputs);
	if (locale === "zh") return zh_common_support_submitting(inputs);
	return zh_tw2_common_support_submitting(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Common_Support_Attachments_LabelInputs */
var en_common_support_attachments_label = () => {
	return `Images (optional)`;
};
var zh_common_support_attachments_label = () => {
	return `图片附件(可选)`;
};
/** @type {(inputs: Common_Support_Attachments_LabelInputs) => LocalizedString} */
var zh_tw2_common_support_attachments_label = zh_common_support_attachments_label;
/**
* | output |
* | --- |
* | "Images (optional)" |
*
* @param {Common_Support_Attachments_LabelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var common_support_attachments_label = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_common_support_attachments_label(inputs);
	if (locale === "zh") return zh_common_support_attachments_label(inputs);
	return zh_tw2_common_support_attachments_label(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_TitleInputs */
var en_settings_title = () => {
	return `Settings`;
};
var zh_settings_title = () => {
	return `设置`;
};
/** @type {(inputs: Settings_TitleInputs) => LocalizedString} */
var zh_tw2_settings_title = zh_settings_title;
/**
* | output |
* | --- |
* | "Settings" |
*
* @param {Settings_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_title(inputs);
	if (locale === "zh") return zh_settings_title(inputs);
	return zh_tw2_settings_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ name: NonNullable<unknown> }} Settings_WelcomeInputs */
var en_settings_welcome = (i) => {
	return `Welcome back, ${i?.name}`;
};
var zh_settings_welcome = (i) => {
	return `欢迎回来，${i?.name}`;
};
/** @type {(inputs: Settings_WelcomeInputs) => LocalizedString} */
var zh_tw2_settings_welcome = zh_settings_welcome;
/**
* | output |
* | --- |
* | "Welcome back, {name}" |
*
* @param {Settings_WelcomeInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_welcome = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_welcome(inputs);
	if (locale === "zh") return zh_settings_welcome(inputs);
	return zh_tw2_settings_welcome(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_PlaceholderInputs */
var en_settings_placeholder = () => {
	return `Your app content goes here.`;
};
var zh_settings_placeholder = () => {
	return `你的应用内容在这里。`;
};
/** @type {(inputs: Settings_PlaceholderInputs) => LocalizedString} */
var zh_tw2_settings_placeholder = zh_settings_placeholder;
/**
* | output |
* | --- |
* | "Your app content goes here." |
*
* @param {Settings_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_placeholder(inputs);
	if (locale === "zh") return zh_settings_placeholder(inputs);
	return zh_tw2_settings_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Nav_OverviewInputs */
var en_settings_nav_overview = () => {
	return `Overview`;
};
var zh_settings_nav_overview = () => {
	return `概览`;
};
/** @type {(inputs: Settings_Nav_OverviewInputs) => LocalizedString} */
var zh_tw2_settings_nav_overview = zh_settings_nav_overview;
/**
* | output |
* | --- |
* | "Overview" |
*
* @param {Settings_Nav_OverviewInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_nav_overview = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_nav_overview(inputs);
	if (locale === "zh") return zh_settings_nav_overview(inputs);
	return zh_tw2_settings_nav_overview(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Nav_ProfileInputs */
var en_settings_nav_profile = () => {
	return `Profile`;
};
var zh_settings_nav_profile = () => {
	return `个人资料`;
};
/** @type {(inputs: Settings_Nav_ProfileInputs) => LocalizedString} */
var zh_tw2_settings_nav_profile = zh_settings_nav_profile;
/**
* | output |
* | --- |
* | "Profile" |
*
* @param {Settings_Nav_ProfileInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_nav_profile = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_nav_profile(inputs);
	if (locale === "zh") return zh_settings_nav_profile(inputs);
	return zh_tw2_settings_nav_profile(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Nav_BillingInputs */
var en_settings_nav_billing = () => {
	return `Billing`;
};
var zh_settings_nav_billing = () => {
	return `账单`;
};
/** @type {(inputs: Settings_Nav_BillingInputs) => LocalizedString} */
var zh_tw2_settings_nav_billing = zh_settings_nav_billing;
/**
* | output |
* | --- |
* | "Billing" |
*
* @param {Settings_Nav_BillingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_nav_billing = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_nav_billing(inputs);
	if (locale === "zh") return zh_settings_nav_billing(inputs);
	return zh_tw2_settings_nav_billing(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Nav_PaymentsInputs */
var en_settings_nav_payments = () => {
	return `Payments`;
};
var zh_settings_nav_payments = () => {
	return `付款记录`;
};
/** @type {(inputs: Settings_Nav_PaymentsInputs) => LocalizedString} */
var zh_tw2_settings_nav_payments = zh_settings_nav_payments;
/**
* | output |
* | --- |
* | "Payments" |
*
* @param {Settings_Nav_PaymentsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_nav_payments = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_nav_payments(inputs);
	if (locale === "zh") return zh_settings_nav_payments(inputs);
	return zh_tw2_settings_nav_payments(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Nav_CreditsInputs */
var en_settings_nav_credits = () => {
	return `Credits`;
};
var zh_settings_nav_credits = () => {
	return `额度明细`;
};
/** @type {(inputs: Settings_Nav_CreditsInputs) => LocalizedString} */
var zh_tw2_settings_nav_credits = zh_settings_nav_credits;
/**
* | output |
* | --- |
* | "Credits" |
*
* @param {Settings_Nav_CreditsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_nav_credits = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_nav_credits(inputs);
	if (locale === "zh") return zh_settings_nav_credits(inputs);
	return zh_tw2_settings_nav_credits(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Nav_ApikeysInputs */
var en_settings_nav_apikeys = () => {
	return `API Keys`;
};
var zh_settings_nav_apikeys = () => {
	return `API 密钥`;
};
/** @type {(inputs: Settings_Nav_ApikeysInputs) => LocalizedString} */
var zh_tw2_settings_nav_apikeys = zh_settings_nav_apikeys;
/**
* | output |
* | --- |
* | "API Keys" |
*
* @param {Settings_Nav_ApikeysInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_nav_apikeys = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_nav_apikeys(inputs);
	if (locale === "zh") return zh_settings_nav_apikeys(inputs);
	return zh_tw2_settings_nav_apikeys(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Nav_TicketsInputs */
var en_settings_nav_tickets = () => {
	return `Support Tickets`;
};
var zh_settings_nav_tickets = () => {
	return `工单支持`;
};
/** @type {(inputs: Settings_Nav_TicketsInputs) => LocalizedString} */
var zh_tw2_settings_nav_tickets = zh_settings_nav_tickets;
/**
* | output |
* | --- |
* | "Support Tickets" |
*
* @param {Settings_Nav_TicketsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_nav_tickets = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_nav_tickets(inputs);
	if (locale === "zh") return zh_settings_nav_tickets(inputs);
	return zh_tw2_settings_nav_tickets(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Overview_PlanInputs */
var en_settings_overview_plan = () => {
	return `Plan`;
};
var zh_settings_overview_plan = () => {
	return `套餐`;
};
/** @type {(inputs: Settings_Overview_PlanInputs) => LocalizedString} */
var zh_tw2_settings_overview_plan = zh_settings_overview_plan;
/**
* | output |
* | --- |
* | "Plan" |
*
* @param {Settings_Overview_PlanInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_overview_plan = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_overview_plan(inputs);
	if (locale === "zh") return zh_settings_overview_plan(inputs);
	return zh_tw2_settings_overview_plan(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Overview_Plan_FreeInputs */
var en_settings_overview_plan_free = () => {
	return `Free`;
};
var zh_settings_overview_plan_free = () => {
	return `免费版`;
};
/** @type {(inputs: Settings_Overview_Plan_FreeInputs) => LocalizedString} */
var zh_tw2_settings_overview_plan_free = zh_settings_overview_plan_free;
/**
* | output |
* | --- |
* | "Free" |
*
* @param {Settings_Overview_Plan_FreeInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_overview_plan_free = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_overview_plan_free(inputs);
	if (locale === "zh") return zh_settings_overview_plan_free(inputs);
	return zh_tw2_settings_overview_plan_free(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Overview_Plan_DescriptionInputs */
var en_settings_overview_plan_description = () => {
	return `Current subscription`;
};
var zh_settings_overview_plan_description = () => {
	return `当前订阅`;
};
/** @type {(inputs: Settings_Overview_Plan_DescriptionInputs) => LocalizedString} */
var zh_tw2_settings_overview_plan_description = zh_settings_overview_plan_description;
/**
* | output |
* | --- |
* | "Current subscription" |
*
* @param {Settings_Overview_Plan_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_overview_plan_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_overview_plan_description(inputs);
	if (locale === "zh") return zh_settings_overview_plan_description(inputs);
	return zh_tw2_settings_overview_plan_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Overview_UsageInputs */
var en_settings_overview_usage = () => {
	return `Usage`;
};
var zh_settings_overview_usage = () => {
	return `用量`;
};
/** @type {(inputs: Settings_Overview_UsageInputs) => LocalizedString} */
var zh_tw2_settings_overview_usage = zh_settings_overview_usage;
/**
* | output |
* | --- |
* | "Usage" |
*
* @param {Settings_Overview_UsageInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_overview_usage = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_overview_usage(inputs);
	if (locale === "zh") return zh_settings_overview_usage(inputs);
	return zh_tw2_settings_overview_usage(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Overview_Usage_DescriptionInputs */
var en_settings_overview_usage_description = () => {
	return `API calls this month`;
};
var zh_settings_overview_usage_description = () => {
	return `本月 API 调用次数`;
};
/** @type {(inputs: Settings_Overview_Usage_DescriptionInputs) => LocalizedString} */
var zh_tw2_settings_overview_usage_description = zh_settings_overview_usage_description;
/**
* | output |
* | --- |
* | "API calls this month" |
*
* @param {Settings_Overview_Usage_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_overview_usage_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_overview_usage_description(inputs);
	if (locale === "zh") return zh_settings_overview_usage_description(inputs);
	return zh_tw2_settings_overview_usage_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Overview_Apikeys_DescriptionInputs */
var en_settings_overview_apikeys_description = () => {
	return `Active keys`;
};
var zh_settings_overview_apikeys_description = () => {
	return `活跃密钥`;
};
/** @type {(inputs: Settings_Overview_Apikeys_DescriptionInputs) => LocalizedString} */
var zh_tw2_settings_overview_apikeys_description = zh_settings_overview_apikeys_description;
/**
* | output |
* | --- |
* | "Active keys" |
*
* @param {Settings_Overview_Apikeys_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_overview_apikeys_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_overview_apikeys_description(inputs);
	if (locale === "zh") return zh_settings_overview_apikeys_description(inputs);
	return zh_tw2_settings_overview_apikeys_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Overview_Getting_StartedInputs */
var en_settings_overview_getting_started = () => {
	return `Getting Started`;
};
var zh_settings_overview_getting_started = () => {
	return `开始使用`;
};
/** @type {(inputs: Settings_Overview_Getting_StartedInputs) => LocalizedString} */
var zh_tw2_settings_overview_getting_started = zh_settings_overview_getting_started;
/**
* | output |
* | --- |
* | "Getting Started" |
*
* @param {Settings_Overview_Getting_StartedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_overview_getting_started = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_overview_getting_started(inputs);
	if (locale === "zh") return zh_settings_overview_getting_started(inputs);
	return zh_tw2_settings_overview_getting_started(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Overview_Getting_Started_DescriptionInputs */
var en_settings_overview_getting_started_description = () => {
	return `Build your product on top of this engine`;
};
var zh_settings_overview_getting_started_description = () => {
	return `在这个引擎之上构建你的产品`;
};
/** @type {(inputs: Settings_Overview_Getting_Started_DescriptionInputs) => LocalizedString} */
var zh_tw2_settings_overview_getting_started_description = zh_settings_overview_getting_started_description;
/**
* | output |
* | --- |
* | "Build your product on top of this engine" |
*
* @param {Settings_Overview_Getting_Started_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_overview_getting_started_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_overview_getting_started_description(inputs);
	if (locale === "zh") return zh_settings_overview_getting_started_description(inputs);
	return zh_tw2_settings_overview_getting_started_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Profile_TitleInputs */
var en_settings_profile_title = () => {
	return `Profile`;
};
var zh_settings_profile_title = () => {
	return `个人资料`;
};
/** @type {(inputs: Settings_Profile_TitleInputs) => LocalizedString} */
var zh_tw2_settings_profile_title = zh_settings_profile_title;
/**
* | output |
* | --- |
* | "Profile" |
*
* @param {Settings_Profile_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_profile_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_profile_title(inputs);
	if (locale === "zh") return zh_settings_profile_title(inputs);
	return zh_tw2_settings_profile_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Profile_DescriptionInputs */
var en_settings_profile_description = () => {
	return `Manage your account`;
};
var zh_settings_profile_description = () => {
	return `管理你的账户`;
};
/** @type {(inputs: Settings_Profile_DescriptionInputs) => LocalizedString} */
var zh_tw2_settings_profile_description = zh_settings_profile_description;
/**
* | output |
* | --- |
* | "Manage your account" |
*
* @param {Settings_Profile_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_profile_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_profile_description(inputs);
	if (locale === "zh") return zh_settings_profile_description(inputs);
	return zh_tw2_settings_profile_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Profile_ProfileInputs */
var en_settings_profile_profile = () => {
	return `Profile`;
};
var zh_settings_profile_profile = () => {
	return `个人资料`;
};
/** @type {(inputs: Settings_Profile_ProfileInputs) => LocalizedString} */
var zh_tw2_settings_profile_profile = zh_settings_profile_profile;
/**
* | output |
* | --- |
* | "Profile" |
*
* @param {Settings_Profile_ProfileInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_profile_profile = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_profile_profile(inputs);
	if (locale === "zh") return zh_settings_profile_profile(inputs);
	return zh_tw2_settings_profile_profile(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Profile_NameInputs */
var en_settings_profile_name = () => {
	return `Name`;
};
var zh_settings_profile_name = () => {
	return `姓名`;
};
/** @type {(inputs: Settings_Profile_NameInputs) => LocalizedString} */
var zh_tw2_settings_profile_name = zh_settings_profile_name;
/**
* | output |
* | --- |
* | "Name" |
*
* @param {Settings_Profile_NameInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_profile_name = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_profile_name(inputs);
	if (locale === "zh") return zh_settings_profile_name(inputs);
	return zh_tw2_settings_profile_name(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Profile_EmailInputs */
var en_settings_profile_email = () => {
	return `Email`;
};
var zh_settings_profile_email = () => {
	return `邮箱`;
};
/** @type {(inputs: Settings_Profile_EmailInputs) => LocalizedString} */
var zh_tw2_settings_profile_email = zh_settings_profile_email;
/**
* | output |
* | --- |
* | "Email" |
*
* @param {Settings_Profile_EmailInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_profile_email = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_profile_email(inputs);
	if (locale === "zh") return zh_settings_profile_email(inputs);
	return zh_tw2_settings_profile_email(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Profile_AvatarInputs */
var en_settings_profile_avatar = () => {
	return `Avatar`;
};
var zh_settings_profile_avatar = () => {
	return `头像`;
};
/** @type {(inputs: Settings_Profile_AvatarInputs) => LocalizedString} */
var zh_tw2_settings_profile_avatar = zh_settings_profile_avatar;
/**
* | output |
* | --- |
* | "Avatar" |
*
* @param {Settings_Profile_AvatarInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_profile_avatar = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_profile_avatar(inputs);
	if (locale === "zh") return zh_settings_profile_avatar(inputs);
	return zh_tw2_settings_profile_avatar(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Profile_Avatar_HintInputs */
var en_settings_profile_avatar_hint = () => {
	return `Drop an image, click to upload, or paste from clipboard`;
};
var zh_settings_profile_avatar_hint = () => {
	return `拖拽图片、点击上传，或从剪贴板粘贴`;
};
/** @type {(inputs: Settings_Profile_Avatar_HintInputs) => LocalizedString} */
var zh_tw2_settings_profile_avatar_hint = zh_settings_profile_avatar_hint;
/**
* | output |
* | --- |
* | "Drop an image, click to upload, or paste from clipboard" |
*
* @param {Settings_Profile_Avatar_HintInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_profile_avatar_hint = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_profile_avatar_hint(inputs);
	if (locale === "zh") return zh_settings_profile_avatar_hint(inputs);
	return zh_tw2_settings_profile_avatar_hint(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Profile_SaveInputs */
var en_settings_profile_save = () => {
	return `Save`;
};
var zh_settings_profile_save = () => {
	return `保存`;
};
/** @type {(inputs: Settings_Profile_SaveInputs) => LocalizedString} */
var zh_tw2_settings_profile_save = zh_settings_profile_save;
/**
* | output |
* | --- |
* | "Save" |
*
* @param {Settings_Profile_SaveInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_profile_save = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_profile_save(inputs);
	if (locale === "zh") return zh_settings_profile_save(inputs);
	return zh_tw2_settings_profile_save(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Profile_SavingInputs */
var en_settings_profile_saving = () => {
	return `Saving...`;
};
var zh_settings_profile_saving = () => {
	return `保存中...`;
};
/** @type {(inputs: Settings_Profile_SavingInputs) => LocalizedString} */
var zh_tw2_settings_profile_saving = zh_settings_profile_saving;
/**
* | output |
* | --- |
* | "Saving..." |
*
* @param {Settings_Profile_SavingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_profile_saving = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_profile_saving(inputs);
	if (locale === "zh") return zh_settings_profile_saving(inputs);
	return zh_tw2_settings_profile_saving(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Profile_SavedInputs */
var en_settings_profile_saved = () => {
	return `Settings saved`;
};
var zh_settings_profile_saved = () => {
	return `设置已保存`;
};
/** @type {(inputs: Settings_Profile_SavedInputs) => LocalizedString} */
var zh_tw2_settings_profile_saved = zh_settings_profile_saved;
/**
* | output |
* | --- |
* | "Settings saved" |
*
* @param {Settings_Profile_SavedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_profile_saved = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_profile_saved(inputs);
	if (locale === "zh") return zh_settings_profile_saved(inputs);
	return zh_tw2_settings_profile_saved(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Profile_Save_FailedInputs */
var en_settings_profile_save_failed = () => {
	return `Failed to save`;
};
var zh_settings_profile_save_failed = () => {
	return `保存失败`;
};
/** @type {(inputs: Settings_Profile_Save_FailedInputs) => LocalizedString} */
var zh_tw2_settings_profile_save_failed = zh_settings_profile_save_failed;
/**
* | output |
* | --- |
* | "Failed to save" |
*
* @param {Settings_Profile_Save_FailedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_profile_save_failed = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_profile_save_failed(inputs);
	if (locale === "zh") return zh_settings_profile_save_failed(inputs);
	return zh_tw2_settings_profile_save_failed(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Profile_LoadingInputs */
var en_settings_profile_loading = () => {
	return `Loading...`;
};
var zh_settings_profile_loading = () => {
	return `加载中...`;
};
/** @type {(inputs: Settings_Profile_LoadingInputs) => LocalizedString} */
var zh_tw2_settings_profile_loading = zh_settings_profile_loading;
/**
* | output |
* | --- |
* | "Loading..." |
*
* @param {Settings_Profile_LoadingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_profile_loading = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_profile_loading(inputs);
	if (locale === "zh") return zh_settings_profile_loading(inputs);
	return zh_tw2_settings_profile_loading(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_TitleInputs */
var en_settings_billing_title = () => {
	return `Billing`;
};
var zh_settings_billing_title = () => {
	return `账单`;
};
/** @type {(inputs: Settings_Billing_TitleInputs) => LocalizedString} */
var zh_tw2_settings_billing_title = zh_settings_billing_title;
/**
* | output |
* | --- |
* | "Billing" |
*
* @param {Settings_Billing_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_title(inputs);
	if (locale === "zh") return zh_settings_billing_title(inputs);
	return zh_tw2_settings_billing_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_DescriptionInputs */
var en_settings_billing_description = () => {
	return `Manage your subscriptions`;
};
var zh_settings_billing_description = () => {
	return `管理你的订阅`;
};
/** @type {(inputs: Settings_Billing_DescriptionInputs) => LocalizedString} */
var zh_tw2_settings_billing_description = zh_settings_billing_description;
/**
* | output |
* | --- |
* | "Manage your subscriptions" |
*
* @param {Settings_Billing_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_description(inputs);
	if (locale === "zh") return zh_settings_billing_description(inputs);
	return zh_tw2_settings_billing_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_CreditsInputs */
var en_settings_billing_credits = () => {
	return `Credits`;
};
var zh_settings_billing_credits = () => {
	return `额度`;
};
/** @type {(inputs: Settings_Billing_CreditsInputs) => LocalizedString} */
var zh_tw2_settings_billing_credits = zh_settings_billing_credits;
/**
* | output |
* | --- |
* | "Credits" |
*
* @param {Settings_Billing_CreditsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_credits = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_credits(inputs);
	if (locale === "zh") return zh_settings_billing_credits(inputs);
	return zh_tw2_settings_billing_credits(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Credits_DescriptionInputs */
var en_settings_billing_credits_description = () => {
	return `Your available credit balance`;
};
var zh_settings_billing_credits_description = () => {
	return `你的可用额度余额`;
};
/** @type {(inputs: Settings_Billing_Credits_DescriptionInputs) => LocalizedString} */
var zh_tw2_settings_billing_credits_description = zh_settings_billing_credits_description;
/**
* | output |
* | --- |
* | "Your available credit balance" |
*
* @param {Settings_Billing_Credits_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_credits_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_credits_description(inputs);
	if (locale === "zh") return zh_settings_billing_credits_description(inputs);
	return zh_tw2_settings_billing_credits_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_SubscriptionInputs */
var en_settings_billing_subscription = () => {
	return `Current Subscription`;
};
var zh_settings_billing_subscription = () => {
	return `当前订阅`;
};
/** @type {(inputs: Settings_Billing_SubscriptionInputs) => LocalizedString} */
var zh_tw2_settings_billing_subscription = zh_settings_billing_subscription;
/**
* | output |
* | --- |
* | "Current Subscription" |
*
* @param {Settings_Billing_SubscriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_subscription = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_subscription(inputs);
	if (locale === "zh") return zh_settings_billing_subscription(inputs);
	return zh_tw2_settings_billing_subscription(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_SubscriptionsInputs */
var en_settings_billing_subscriptions = () => {
	return `Subscriptions`;
};
var zh_settings_billing_subscriptions = () => {
	return `订阅列表`;
};
/** @type {(inputs: Settings_Billing_SubscriptionsInputs) => LocalizedString} */
var zh_tw2_settings_billing_subscriptions = zh_settings_billing_subscriptions;
/**
* | output |
* | --- |
* | "Subscriptions" |
*
* @param {Settings_Billing_SubscriptionsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_subscriptions = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_subscriptions(inputs);
	if (locale === "zh") return zh_settings_billing_subscriptions(inputs);
	return zh_tw2_settings_billing_subscriptions(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Subscription_DetailsInputs */
var en_settings_billing_subscription_details = () => {
	return `Subscription Details`;
};
var zh_settings_billing_subscription_details = () => {
	return `订阅详情`;
};
/** @type {(inputs: Settings_Billing_Subscription_DetailsInputs) => LocalizedString} */
var zh_tw2_settings_billing_subscription_details = zh_settings_billing_subscription_details;
/**
* | output |
* | --- |
* | "Subscription Details" |
*
* @param {Settings_Billing_Subscription_DetailsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_subscription_details = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_subscription_details(inputs);
	if (locale === "zh") return zh_settings_billing_subscription_details(inputs);
	return zh_tw2_settings_billing_subscription_details(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_No_SubscriptionInputs */
var en_settings_billing_no_subscription = () => {
	return `No active subscription`;
};
var zh_settings_billing_no_subscription = () => {
	return `暂无活跃订阅`;
};
/** @type {(inputs: Settings_Billing_No_SubscriptionInputs) => LocalizedString} */
var zh_tw2_settings_billing_no_subscription = zh_settings_billing_no_subscription;
/**
* | output |
* | --- |
* | "No active subscription" |
*
* @param {Settings_Billing_No_SubscriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_no_subscription = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_no_subscription(inputs);
	if (locale === "zh") return zh_settings_billing_no_subscription(inputs);
	return zh_tw2_settings_billing_no_subscription(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_SubscribeInputs */
var en_settings_billing_subscribe = () => {
	return `Subscribe`;
};
var zh_settings_billing_subscribe = () => {
	return `立即订阅`;
};
/** @type {(inputs: Settings_Billing_SubscribeInputs) => LocalizedString} */
var zh_tw2_settings_billing_subscribe = zh_settings_billing_subscribe;
/**
* | output |
* | --- |
* | "Subscribe" |
*
* @param {Settings_Billing_SubscribeInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_subscribe = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_subscribe(inputs);
	if (locale === "zh") return zh_settings_billing_subscribe(inputs);
	return zh_tw2_settings_billing_subscribe(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_AdjustInputs */
var en_settings_billing_adjust = () => {
	return `Change plan`;
};
var zh_settings_billing_adjust = () => {
	return `调整套餐`;
};
/** @type {(inputs: Settings_Billing_AdjustInputs) => LocalizedString} */
var zh_tw2_settings_billing_adjust = zh_settings_billing_adjust;
/**
* | output |
* | --- |
* | "Change plan" |
*
* @param {Settings_Billing_AdjustInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_adjust = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_adjust(inputs);
	if (locale === "zh") return zh_settings_billing_adjust(inputs);
	return zh_tw2_settings_billing_adjust(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_PlanInputs */
var en_settings_billing_plan = () => {
	return `Plan`;
};
var zh_settings_billing_plan = () => {
	return `套餐`;
};
/** @type {(inputs: Settings_Billing_PlanInputs) => LocalizedString} */
var zh_tw2_settings_billing_plan = zh_settings_billing_plan;
/**
* | output |
* | --- |
* | "Plan" |
*
* @param {Settings_Billing_PlanInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_plan = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_plan(inputs);
	if (locale === "zh") return zh_settings_billing_plan(inputs);
	return zh_tw2_settings_billing_plan(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_StatusInputs */
var en_settings_billing_status = () => {
	return `Status`;
};
var zh_settings_billing_status = () => {
	return `状态`;
};
/** @type {(inputs: Settings_Billing_StatusInputs) => LocalizedString} */
var zh_tw2_settings_billing_status = zh_settings_billing_status;
/**
* | output |
* | --- |
* | "Status" |
*
* @param {Settings_Billing_StatusInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_status = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_status(inputs);
	if (locale === "zh") return zh_settings_billing_status(inputs);
	return zh_tw2_settings_billing_status(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_IntervalInputs */
var en_settings_billing_interval = () => {
	return `Interval`;
};
var zh_settings_billing_interval = () => {
	return `周期`;
};
/** @type {(inputs: Settings_Billing_IntervalInputs) => LocalizedString} */
var zh_tw2_settings_billing_interval = zh_settings_billing_interval;
/**
* | output |
* | --- |
* | "Interval" |
*
* @param {Settings_Billing_IntervalInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_interval = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_interval(inputs);
	if (locale === "zh") return zh_settings_billing_interval(inputs);
	return zh_tw2_settings_billing_interval(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Subscription_NoInputs */
var en_settings_billing_subscription_no = () => {
	return `No.`;
};
var zh_settings_billing_subscription_no = () => {
	return `订阅号`;
};
/** @type {(inputs: Settings_Billing_Subscription_NoInputs) => LocalizedString} */
var zh_tw2_settings_billing_subscription_no = zh_settings_billing_subscription_no;
/**
* | output |
* | --- |
* | "No." |
*
* @param {Settings_Billing_Subscription_NoInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_subscription_no = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_subscription_no(inputs);
	if (locale === "zh") return zh_settings_billing_subscription_no(inputs);
	return zh_tw2_settings_billing_subscription_no(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Current_PeriodInputs */
var en_settings_billing_current_period = () => {
	return `Current period`;
};
var zh_settings_billing_current_period = () => {
	return `当前周期`;
};
/** @type {(inputs: Settings_Billing_Current_PeriodInputs) => LocalizedString} */
var zh_tw2_settings_billing_current_period = zh_settings_billing_current_period;
/**
* | output |
* | --- |
* | "Current period" |
*
* @param {Settings_Billing_Current_PeriodInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_current_period = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_current_period(inputs);
	if (locale === "zh") return zh_settings_billing_current_period(inputs);
	return zh_tw2_settings_billing_current_period(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_End_TimeInputs */
var en_settings_billing_end_time = () => {
	return `Ends at`;
};
var zh_settings_billing_end_time = () => {
	return `结束时间`;
};
/** @type {(inputs: Settings_Billing_End_TimeInputs) => LocalizedString} */
var zh_tw2_settings_billing_end_time = zh_settings_billing_end_time;
/**
* | output |
* | --- |
* | "Ends at" |
*
* @param {Settings_Billing_End_TimeInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_end_time = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_end_time(inputs);
	if (locale === "zh") return zh_settings_billing_end_time(inputs);
	return zh_tw2_settings_billing_end_time(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ date: NonNullable<unknown> }} Settings_Billing_Renews_OnInputs */
var en_settings_billing_renews_on = (i) => {
	return `Renews on ${i?.date}`;
};
var zh_settings_billing_renews_on = (i) => {
	return `${i?.date} 续订`;
};
/** @type {(inputs: Settings_Billing_Renews_OnInputs) => LocalizedString} */
var zh_tw2_settings_billing_renews_on = zh_settings_billing_renews_on;
/**
* | output |
* | --- |
* | "Renews on {date}" |
*
* @param {Settings_Billing_Renews_OnInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_renews_on = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_renews_on(inputs);
	if (locale === "zh") return zh_settings_billing_renews_on(inputs);
	return zh_tw2_settings_billing_renews_on(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ date: NonNullable<unknown> }} Settings_Billing_Ends_OnInputs */
var en_settings_billing_ends_on = (i) => {
	return `Ends on ${i?.date}`;
};
var zh_settings_billing_ends_on = (i) => {
	return `${i?.date} 到期`;
};
/** @type {(inputs: Settings_Billing_Ends_OnInputs) => LocalizedString} */
var zh_tw2_settings_billing_ends_on = zh_settings_billing_ends_on;
/**
* | output |
* | --- |
* | "Ends on {date}" |
*
* @param {Settings_Billing_Ends_OnInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_ends_on = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_ends_on(inputs);
	if (locale === "zh") return zh_settings_billing_ends_on(inputs);
	return zh_tw2_settings_billing_ends_on(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Period_StartInputs */
var en_settings_billing_period_start = () => {
	return `Period start`;
};
var zh_settings_billing_period_start = () => {
	return `本期开始`;
};
/** @type {(inputs: Settings_Billing_Period_StartInputs) => LocalizedString} */
var zh_tw2_settings_billing_period_start = zh_settings_billing_period_start;
/**
* | output |
* | --- |
* | "Period start" |
*
* @param {Settings_Billing_Period_StartInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_period_start = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_period_start(inputs);
	if (locale === "zh") return zh_settings_billing_period_start(inputs);
	return zh_tw2_settings_billing_period_start(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Period_EndInputs */
var en_settings_billing_period_end = () => {
	return `Period end`;
};
var zh_settings_billing_period_end = () => {
	return `本期结束`;
};
/** @type {(inputs: Settings_Billing_Period_EndInputs) => LocalizedString} */
var zh_tw2_settings_billing_period_end = zh_settings_billing_period_end;
/**
* | output |
* | --- |
* | "Period end" |
*
* @param {Settings_Billing_Period_EndInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_period_end = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_period_end(inputs);
	if (locale === "zh") return zh_settings_billing_period_end(inputs);
	return zh_tw2_settings_billing_period_end(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Canceled_AtInputs */
var en_settings_billing_canceled_at = () => {
	return `Canceled at`;
};
var zh_settings_billing_canceled_at = () => {
	return `取消时间`;
};
/** @type {(inputs: Settings_Billing_Canceled_AtInputs) => LocalizedString} */
var zh_tw2_settings_billing_canceled_at = zh_settings_billing_canceled_at;
/**
* | output |
* | --- |
* | "Canceled at" |
*
* @param {Settings_Billing_Canceled_AtInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_canceled_at = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_canceled_at(inputs);
	if (locale === "zh") return zh_settings_billing_canceled_at(inputs);
	return zh_tw2_settings_billing_canceled_at(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Canceled_End_AtInputs */
var en_settings_billing_canceled_end_at = () => {
	return `Ends at`;
};
var zh_settings_billing_canceled_end_at = () => {
	return `结束时间`;
};
/** @type {(inputs: Settings_Billing_Canceled_End_AtInputs) => LocalizedString} */
var zh_tw2_settings_billing_canceled_end_at = zh_settings_billing_canceled_end_at;
/**
* | output |
* | --- |
* | "Ends at" |
*
* @param {Settings_Billing_Canceled_End_AtInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_canceled_end_at = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_canceled_end_at(inputs);
	if (locale === "zh") return zh_settings_billing_canceled_end_at(inputs);
	return zh_tw2_settings_billing_canceled_end_at(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Canceled_ReasonInputs */
var en_settings_billing_canceled_reason = () => {
	return `Reason`;
};
var zh_settings_billing_canceled_reason = () => {
	return `取消原因`;
};
/** @type {(inputs: Settings_Billing_Canceled_ReasonInputs) => LocalizedString} */
var zh_tw2_settings_billing_canceled_reason = zh_settings_billing_canceled_reason;
/**
* | output |
* | --- |
* | "Reason" |
*
* @param {Settings_Billing_Canceled_ReasonInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_canceled_reason = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_canceled_reason(inputs);
	if (locale === "zh") return zh_settings_billing_canceled_reason(inputs);
	return zh_tw2_settings_billing_canceled_reason(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_ViewInputs */
var en_settings_billing_view = () => {
	return `View`;
};
var zh_settings_billing_view = () => {
	return `查看订阅`;
};
/** @type {(inputs: Settings_Billing_ViewInputs) => LocalizedString} */
var zh_tw2_settings_billing_view = zh_settings_billing_view;
/**
* | output |
* | --- |
* | "View" |
*
* @param {Settings_Billing_ViewInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_view = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_view(inputs);
	if (locale === "zh") return zh_settings_billing_view(inputs);
	return zh_tw2_settings_billing_view(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_CancelInputs */
var en_settings_billing_cancel = () => {
	return `Cancel subscription`;
};
var zh_settings_billing_cancel = () => {
	return `取消订阅`;
};
/** @type {(inputs: Settings_Billing_CancelInputs) => LocalizedString} */
var zh_tw2_settings_billing_cancel = zh_settings_billing_cancel;
/**
* | output |
* | --- |
* | "Cancel subscription" |
*
* @param {Settings_Billing_CancelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_cancel = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_cancel(inputs);
	if (locale === "zh") return zh_settings_billing_cancel(inputs);
	return zh_tw2_settings_billing_cancel(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Cancel_TitleInputs */
var en_settings_billing_cancel_title = () => {
	return `Cancel subscription`;
};
var zh_settings_billing_cancel_title = () => {
	return `取消订阅`;
};
/** @type {(inputs: Settings_Billing_Cancel_TitleInputs) => LocalizedString} */
var zh_tw2_settings_billing_cancel_title = zh_settings_billing_cancel_title;
/**
* | output |
* | --- |
* | "Cancel subscription" |
*
* @param {Settings_Billing_Cancel_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_cancel_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_cancel_title(inputs);
	if (locale === "zh") return zh_settings_billing_cancel_title(inputs);
	return zh_tw2_settings_billing_cancel_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ plan: NonNullable<unknown> }} Settings_Billing_Cancel_DescriptionInputs */
var en_settings_billing_cancel_description = (i) => {
	return `Are you sure you want to cancel your ${i?.plan} subscription? You'll keep access until the end of the current billing period.`;
};
var zh_settings_billing_cancel_description = (i) => {
	return `确定要取消「${i?.plan}」订阅吗？你可以使用到当前计费周期结束。`;
};
/** @type {(inputs: Settings_Billing_Cancel_DescriptionInputs) => LocalizedString} */
var zh_tw2_settings_billing_cancel_description = zh_settings_billing_cancel_description;
/**
* | output |
* | --- |
* | "Are you sure you want to cancel your {plan} subscription? You'll keep access until the end of the current billing period." |
*
* @param {Settings_Billing_Cancel_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_cancel_description = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_cancel_description(inputs);
	if (locale === "zh") return zh_settings_billing_cancel_description(inputs);
	return zh_tw2_settings_billing_cancel_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Cancel_ConfirmInputs */
var en_settings_billing_cancel_confirm = () => {
	return `Cancel subscription`;
};
var zh_settings_billing_cancel_confirm = () => {
	return `确认取消`;
};
/** @type {(inputs: Settings_Billing_Cancel_ConfirmInputs) => LocalizedString} */
var zh_tw2_settings_billing_cancel_confirm = zh_settings_billing_cancel_confirm;
/**
* | output |
* | --- |
* | "Cancel subscription" |
*
* @param {Settings_Billing_Cancel_ConfirmInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_cancel_confirm = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_cancel_confirm(inputs);
	if (locale === "zh") return zh_settings_billing_cancel_confirm(inputs);
	return zh_tw2_settings_billing_cancel_confirm(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Cancel_BackInputs */
var en_settings_billing_cancel_back = () => {
	return `Keep subscription`;
};
var zh_settings_billing_cancel_back = () => {
	return `保留订阅`;
};
/** @type {(inputs: Settings_Billing_Cancel_BackInputs) => LocalizedString} */
var zh_tw2_settings_billing_cancel_back = zh_settings_billing_cancel_back;
/**
* | output |
* | --- |
* | "Keep subscription" |
*
* @param {Settings_Billing_Cancel_BackInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_cancel_back = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_cancel_back(inputs);
	if (locale === "zh") return zh_settings_billing_cancel_back(inputs);
	return zh_tw2_settings_billing_cancel_back(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_CancelingInputs */
var en_settings_billing_canceling = () => {
	return `Canceling...`;
};
var zh_settings_billing_canceling = () => {
	return `取消中...`;
};
/** @type {(inputs: Settings_Billing_CancelingInputs) => LocalizedString} */
var zh_tw2_settings_billing_canceling = zh_settings_billing_canceling;
/**
* | output |
* | --- |
* | "Canceling..." |
*
* @param {Settings_Billing_CancelingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_canceling = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_canceling(inputs);
	if (locale === "zh") return zh_settings_billing_canceling(inputs);
	return zh_tw2_settings_billing_canceling(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Cancel_SuccessInputs */
var en_settings_billing_cancel_success = () => {
	return `Subscription canceled`;
};
var zh_settings_billing_cancel_success = () => {
	return `订阅已取消`;
};
/** @type {(inputs: Settings_Billing_Cancel_SuccessInputs) => LocalizedString} */
var zh_tw2_settings_billing_cancel_success = zh_settings_billing_cancel_success;
/**
* | output |
* | --- |
* | "Subscription canceled" |
*
* @param {Settings_Billing_Cancel_SuccessInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_cancel_success = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_cancel_success(inputs);
	if (locale === "zh") return zh_settings_billing_cancel_success(inputs);
	return zh_tw2_settings_billing_cancel_success(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Cancel_FailedInputs */
var en_settings_billing_cancel_failed = () => {
	return `Failed to cancel subscription`;
};
var zh_settings_billing_cancel_failed = () => {
	return `取消订阅失败`;
};
/** @type {(inputs: Settings_Billing_Cancel_FailedInputs) => LocalizedString} */
var zh_tw2_settings_billing_cancel_failed = zh_settings_billing_cancel_failed;
/**
* | output |
* | --- |
* | "Failed to cancel subscription" |
*
* @param {Settings_Billing_Cancel_FailedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_cancel_failed = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_cancel_failed(inputs);
	if (locale === "zh") return zh_settings_billing_cancel_failed(inputs);
	return zh_tw2_settings_billing_cancel_failed(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_CloseInputs */
var en_settings_billing_close = () => {
	return `Close`;
};
var zh_settings_billing_close = () => {
	return `关闭`;
};
/** @type {(inputs: Settings_Billing_CloseInputs) => LocalizedString} */
var zh_tw2_settings_billing_close = zh_settings_billing_close;
/**
* | output |
* | --- |
* | "Close" |
*
* @param {Settings_Billing_CloseInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_close = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_close(inputs);
	if (locale === "zh") return zh_settings_billing_close(inputs);
	return zh_tw2_settings_billing_close(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Actions_ColInputs */
var en_settings_billing_actions_col = () => {
	return `Actions`;
};
var zh_settings_billing_actions_col = () => {
	return `操作`;
};
/** @type {(inputs: Settings_Billing_Actions_ColInputs) => LocalizedString} */
var zh_tw2_settings_billing_actions_col = zh_settings_billing_actions_col;
/**
* | output |
* | --- |
* | "Actions" |
*
* @param {Settings_Billing_Actions_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_actions_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_actions_col(inputs);
	if (locale === "zh") return zh_settings_billing_actions_col(inputs);
	return zh_tw2_settings_billing_actions_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Tab_AllInputs */
var en_settings_billing_tab_all = () => {
	return `All`;
};
var zh_settings_billing_tab_all = () => {
	return `全部`;
};
/** @type {(inputs: Settings_Billing_Tab_AllInputs) => LocalizedString} */
var zh_tw2_settings_billing_tab_all = zh_settings_billing_tab_all;
/**
* | output |
* | --- |
* | "All" |
*
* @param {Settings_Billing_Tab_AllInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_tab_all = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_tab_all(inputs);
	if (locale === "zh") return zh_settings_billing_tab_all(inputs);
	return zh_tw2_settings_billing_tab_all(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Tab_ActiveInputs */
var en_settings_billing_tab_active = () => {
	return `Active`;
};
var zh_settings_billing_tab_active = () => {
	return `活跃`;
};
/** @type {(inputs: Settings_Billing_Tab_ActiveInputs) => LocalizedString} */
var zh_tw2_settings_billing_tab_active = zh_settings_billing_tab_active;
/**
* | output |
* | --- |
* | "Active" |
*
* @param {Settings_Billing_Tab_ActiveInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_tab_active = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_tab_active(inputs);
	if (locale === "zh") return zh_settings_billing_tab_active(inputs);
	return zh_tw2_settings_billing_tab_active(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Tab_TrialingInputs */
var en_settings_billing_tab_trialing = () => {
	return `Trialing`;
};
var zh_settings_billing_tab_trialing = () => {
	return `试用中`;
};
/** @type {(inputs: Settings_Billing_Tab_TrialingInputs) => LocalizedString} */
var zh_tw2_settings_billing_tab_trialing = zh_settings_billing_tab_trialing;
/**
* | output |
* | --- |
* | "Trialing" |
*
* @param {Settings_Billing_Tab_TrialingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_tab_trialing = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_tab_trialing(inputs);
	if (locale === "zh") return zh_settings_billing_tab_trialing(inputs);
	return zh_tw2_settings_billing_tab_trialing(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Tab_PausedInputs */
var en_settings_billing_tab_paused = () => {
	return `Paused`;
};
var zh_settings_billing_tab_paused = () => {
	return `已暂停`;
};
/** @type {(inputs: Settings_Billing_Tab_PausedInputs) => LocalizedString} */
var zh_tw2_settings_billing_tab_paused = zh_settings_billing_tab_paused;
/**
* | output |
* | --- |
* | "Paused" |
*
* @param {Settings_Billing_Tab_PausedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_tab_paused = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_tab_paused(inputs);
	if (locale === "zh") return zh_settings_billing_tab_paused(inputs);
	return zh_tw2_settings_billing_tab_paused(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Tab_ExpiredInputs */
var en_settings_billing_tab_expired = () => {
	return `Expired`;
};
var zh_settings_billing_tab_expired = () => {
	return `已过期`;
};
/** @type {(inputs: Settings_Billing_Tab_ExpiredInputs) => LocalizedString} */
var zh_tw2_settings_billing_tab_expired = zh_settings_billing_tab_expired;
/**
* | output |
* | --- |
* | "Expired" |
*
* @param {Settings_Billing_Tab_ExpiredInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_tab_expired = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_tab_expired(inputs);
	if (locale === "zh") return zh_settings_billing_tab_expired(inputs);
	return zh_tw2_settings_billing_tab_expired(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Tab_Pending_CancelInputs */
var en_settings_billing_tab_pending_cancel = () => {
	return `Pending Cancel`;
};
var zh_settings_billing_tab_pending_cancel = () => {
	return `待取消`;
};
/** @type {(inputs: Settings_Billing_Tab_Pending_CancelInputs) => LocalizedString} */
var zh_tw2_settings_billing_tab_pending_cancel = zh_settings_billing_tab_pending_cancel;
/**
* | output |
* | --- |
* | "Pending Cancel" |
*
* @param {Settings_Billing_Tab_Pending_CancelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_tab_pending_cancel = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_tab_pending_cancel(inputs);
	if (locale === "zh") return zh_settings_billing_tab_pending_cancel(inputs);
	return zh_tw2_settings_billing_tab_pending_cancel(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Tab_CanceledInputs */
var en_settings_billing_tab_canceled = () => {
	return `Canceled`;
};
var zh_settings_billing_tab_canceled = () => {
	return `已取消`;
};
/** @type {(inputs: Settings_Billing_Tab_CanceledInputs) => LocalizedString} */
var zh_tw2_settings_billing_tab_canceled = zh_settings_billing_tab_canceled;
/**
* | output |
* | --- |
* | "Canceled" |
*
* @param {Settings_Billing_Tab_CanceledInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_tab_canceled = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_tab_canceled(inputs);
	if (locale === "zh") return zh_settings_billing_tab_canceled(inputs);
	return zh_tw2_settings_billing_tab_canceled(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_PaymentsInputs */
var en_settings_billing_payments = () => {
	return `Payments`;
};
var zh_settings_billing_payments = () => {
	return `付款记录`;
};
/** @type {(inputs: Settings_Billing_PaymentsInputs) => LocalizedString} */
var zh_tw2_settings_billing_payments = zh_settings_billing_payments;
/**
* | output |
* | --- |
* | "Payments" |
*
* @param {Settings_Billing_PaymentsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_payments = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_payments(inputs);
	if (locale === "zh") return zh_settings_billing_payments(inputs);
	return zh_tw2_settings_billing_payments(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_No_PaymentsInputs */
var en_settings_billing_no_payments = () => {
	return `No payments yet`;
};
var zh_settings_billing_no_payments = () => {
	return `暂无付款记录`;
};
/** @type {(inputs: Settings_Billing_No_PaymentsInputs) => LocalizedString} */
var zh_tw2_settings_billing_no_payments = zh_settings_billing_no_payments;
/**
* | output |
* | --- |
* | "No payments yet" |
*
* @param {Settings_Billing_No_PaymentsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_no_payments = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_no_payments(inputs);
	if (locale === "zh") return zh_settings_billing_no_payments(inputs);
	return zh_tw2_settings_billing_no_payments(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_Order_NoInputs */
var en_settings_billing_order_no = () => {
	return `Order`;
};
var zh_settings_billing_order_no = () => {
	return `订单号`;
};
/** @type {(inputs: Settings_Billing_Order_NoInputs) => LocalizedString} */
var zh_tw2_settings_billing_order_no = zh_settings_billing_order_no;
/**
* | output |
* | --- |
* | "Order" |
*
* @param {Settings_Billing_Order_NoInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_order_no = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_order_no(inputs);
	if (locale === "zh") return zh_settings_billing_order_no(inputs);
	return zh_tw2_settings_billing_order_no(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_AmountInputs */
var en_settings_billing_amount = () => {
	return `Amount`;
};
var zh_settings_billing_amount = () => {
	return `金额`;
};
/** @type {(inputs: Settings_Billing_AmountInputs) => LocalizedString} */
var zh_tw2_settings_billing_amount = zh_settings_billing_amount;
/**
* | output |
* | --- |
* | "Amount" |
*
* @param {Settings_Billing_AmountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_amount = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_amount(inputs);
	if (locale === "zh") return zh_settings_billing_amount(inputs);
	return zh_tw2_settings_billing_amount(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_ProviderInputs */
var en_settings_billing_provider = () => {
	return `Provider`;
};
var zh_settings_billing_provider = () => {
	return `支付方式`;
};
/** @type {(inputs: Settings_Billing_ProviderInputs) => LocalizedString} */
var zh_tw2_settings_billing_provider = zh_settings_billing_provider;
/**
* | output |
* | --- |
* | "Provider" |
*
* @param {Settings_Billing_ProviderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_provider = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_provider(inputs);
	if (locale === "zh") return zh_settings_billing_provider(inputs);
	return zh_tw2_settings_billing_provider(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Billing_DateInputs */
var en_settings_billing_date = () => {
	return `Date`;
};
var zh_settings_billing_date = () => {
	return `日期`;
};
/** @type {(inputs: Settings_Billing_DateInputs) => LocalizedString} */
var zh_tw2_settings_billing_date = zh_settings_billing_date;
/**
* | output |
* | --- |
* | "Date" |
*
* @param {Settings_Billing_DateInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_billing_date = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_billing_date(inputs);
	if (locale === "zh") return zh_settings_billing_date(inputs);
	return zh_tw2_settings_billing_date(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_TitleInputs */
var en_settings_payments_title = () => {
	return `Payments`;
};
var zh_settings_payments_title = () => {
	return `付款记录`;
};
/** @type {(inputs: Settings_Payments_TitleInputs) => LocalizedString} */
var zh_tw2_settings_payments_title = zh_settings_payments_title;
/**
* | output |
* | --- |
* | "Payments" |
*
* @param {Settings_Payments_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_payments_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_payments_title(inputs);
	if (locale === "zh") return zh_settings_payments_title(inputs);
	return zh_tw2_settings_payments_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_DescriptionInputs */
var en_settings_payments_description = () => {
	return `Your payment history`;
};
var zh_settings_payments_description = () => {
	return `你的付款历史`;
};
/** @type {(inputs: Settings_Payments_DescriptionInputs) => LocalizedString} */
var zh_tw2_settings_payments_description = zh_settings_payments_description;
/**
* | output |
* | --- |
* | "Your payment history" |
*
* @param {Settings_Payments_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_payments_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_payments_description(inputs);
	if (locale === "zh") return zh_settings_payments_description(inputs);
	return zh_tw2_settings_payments_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_Tab_AllInputs */
var en_settings_payments_tab_all = () => {
	return `All`;
};
var zh_settings_payments_tab_all = () => {
	return `全部`;
};
/** @type {(inputs: Settings_Payments_Tab_AllInputs) => LocalizedString} */
var zh_tw2_settings_payments_tab_all = zh_settings_payments_tab_all;
/**
* | output |
* | --- |
* | "All" |
*
* @param {Settings_Payments_Tab_AllInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_payments_tab_all = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_payments_tab_all(inputs);
	if (locale === "zh") return zh_settings_payments_tab_all(inputs);
	return zh_tw2_settings_payments_tab_all(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_Tab_One_TimeInputs */
var en_settings_payments_tab_one_time = () => {
	return `One-time`;
};
var zh_settings_payments_tab_one_time = () => {
	return `单次购买`;
};
/** @type {(inputs: Settings_Payments_Tab_One_TimeInputs) => LocalizedString} */
var zh_tw2_settings_payments_tab_one_time = zh_settings_payments_tab_one_time;
/**
* | output |
* | --- |
* | "One-time" |
*
* @param {Settings_Payments_Tab_One_TimeInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_payments_tab_one_time = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_payments_tab_one_time(inputs);
	if (locale === "zh") return zh_settings_payments_tab_one_time(inputs);
	return zh_tw2_settings_payments_tab_one_time(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_Tab_SubscriptionInputs */
var en_settings_payments_tab_subscription = () => {
	return `Subscription`;
};
var zh_settings_payments_tab_subscription = () => {
	return `订阅`;
};
/** @type {(inputs: Settings_Payments_Tab_SubscriptionInputs) => LocalizedString} */
var zh_tw2_settings_payments_tab_subscription = zh_settings_payments_tab_subscription;
/**
* | output |
* | --- |
* | "Subscription" |
*
* @param {Settings_Payments_Tab_SubscriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_payments_tab_subscription = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_payments_tab_subscription(inputs);
	if (locale === "zh") return zh_settings_payments_tab_subscription(inputs);
	return zh_tw2_settings_payments_tab_subscription(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_Tab_RenewInputs */
var en_settings_payments_tab_renew = () => {
	return `Renewal`;
};
var zh_settings_payments_tab_renew = () => {
	return `续订`;
};
/** @type {(inputs: Settings_Payments_Tab_RenewInputs) => LocalizedString} */
var zh_tw2_settings_payments_tab_renew = zh_settings_payments_tab_renew;
/**
* | output |
* | --- |
* | "Renewal" |
*
* @param {Settings_Payments_Tab_RenewInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_payments_tab_renew = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_payments_tab_renew(inputs);
	if (locale === "zh") return zh_settings_payments_tab_renew(inputs);
	return zh_tw2_settings_payments_tab_renew(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_No_PaymentsInputs */
var en_settings_payments_no_payments = () => {
	return `No payments yet`;
};
var zh_settings_payments_no_payments = () => {
	return `暂无付款记录`;
};
/** @type {(inputs: Settings_Payments_No_PaymentsInputs) => LocalizedString} */
var zh_tw2_settings_payments_no_payments = zh_settings_payments_no_payments;
/**
* | output |
* | --- |
* | "No payments yet" |
*
* @param {Settings_Payments_No_PaymentsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_payments_no_payments = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_payments_no_payments(inputs);
	if (locale === "zh") return zh_settings_payments_no_payments(inputs);
	return zh_tw2_settings_payments_no_payments(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_Order_NoInputs */
var en_settings_payments_order_no = () => {
	return `Order`;
};
var zh_settings_payments_order_no = () => {
	return `订单号`;
};
/** @type {(inputs: Settings_Payments_Order_NoInputs) => LocalizedString} */
var zh_tw2_settings_payments_order_no = zh_settings_payments_order_no;
/**
* | output |
* | --- |
* | "Order" |
*
* @param {Settings_Payments_Order_NoInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_payments_order_no = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_payments_order_no(inputs);
	if (locale === "zh") return zh_settings_payments_order_no(inputs);
	return zh_tw2_settings_payments_order_no(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_ProductInputs */
var en_settings_payments_product = () => {
	return `Product`;
};
var zh_settings_payments_product = () => {
	return `商品`;
};
/** @type {(inputs: Settings_Payments_ProductInputs) => LocalizedString} */
var zh_tw2_settings_payments_product = zh_settings_payments_product;
/**
* | output |
* | --- |
* | "Product" |
*
* @param {Settings_Payments_ProductInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_payments_product = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_payments_product(inputs);
	if (locale === "zh") return zh_settings_payments_product(inputs);
	return zh_tw2_settings_payments_product(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_AmountInputs */
var en_settings_payments_amount = () => {
	return `Amount`;
};
var zh_settings_payments_amount = () => {
	return `金额`;
};
/** @type {(inputs: Settings_Payments_AmountInputs) => LocalizedString} */
var zh_tw2_settings_payments_amount = zh_settings_payments_amount;
/**
* | output |
* | --- |
* | "Amount" |
*
* @param {Settings_Payments_AmountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_payments_amount = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_payments_amount(inputs);
	if (locale === "zh") return zh_settings_payments_amount(inputs);
	return zh_tw2_settings_payments_amount(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_StatusInputs */
var en_settings_payments_status = () => {
	return `Status`;
};
var zh_settings_payments_status = () => {
	return `状态`;
};
/** @type {(inputs: Settings_Payments_StatusInputs) => LocalizedString} */
var zh_tw2_settings_payments_status = zh_settings_payments_status;
/**
* | output |
* | --- |
* | "Status" |
*
* @param {Settings_Payments_StatusInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_payments_status = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_payments_status(inputs);
	if (locale === "zh") return zh_settings_payments_status(inputs);
	return zh_tw2_settings_payments_status(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_TypeInputs */
var en_settings_payments_type = () => {
	return `Type`;
};
var zh_settings_payments_type = () => {
	return `类型`;
};
/** @type {(inputs: Settings_Payments_TypeInputs) => LocalizedString} */
var zh_tw2_settings_payments_type = zh_settings_payments_type;
/**
* | output |
* | --- |
* | "Type" |
*
* @param {Settings_Payments_TypeInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_payments_type = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_payments_type(inputs);
	if (locale === "zh") return zh_settings_payments_type(inputs);
	return zh_tw2_settings_payments_type(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_ProviderInputs */
var en_settings_payments_provider = () => {
	return `Provider`;
};
var zh_settings_payments_provider = () => {
	return `支付方式`;
};
/** @type {(inputs: Settings_Payments_ProviderInputs) => LocalizedString} */
var zh_tw2_settings_payments_provider = zh_settings_payments_provider;
/**
* | output |
* | --- |
* | "Provider" |
*
* @param {Settings_Payments_ProviderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_payments_provider = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_payments_provider(inputs);
	if (locale === "zh") return zh_settings_payments_provider(inputs);
	return zh_tw2_settings_payments_provider(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_DateInputs */
var en_settings_payments_date = () => {
	return `Date`;
};
var zh_settings_payments_date = () => {
	return `日期`;
};
/** @type {(inputs: Settings_Payments_DateInputs) => LocalizedString} */
var zh_tw2_settings_payments_date = zh_settings_payments_date;
/**
* | output |
* | --- |
* | "Date" |
*
* @param {Settings_Payments_DateInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_payments_date = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_payments_date(inputs);
	if (locale === "zh") return zh_settings_payments_date(inputs);
	return zh_tw2_settings_payments_date(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Payments_InvoiceInputs */
var en_settings_payments_invoice = () => {
	return `Invoice`;
};
var zh_settings_payments_invoice = () => {
	return `发票`;
};
/** @type {(inputs: Settings_Payments_InvoiceInputs) => LocalizedString} */
var zh_tw2_settings_payments_invoice = zh_settings_payments_invoice;
/**
* | output |
* | --- |
* | "Invoice" |
*
* @param {Settings_Payments_InvoiceInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_payments_invoice = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_payments_invoice(inputs);
	if (locale === "zh") return zh_settings_payments_invoice(inputs);
	return zh_tw2_settings_payments_invoice(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_TitleInputs */
var en_settings_credits_title = () => {
	return `Credits`;
};
var zh_settings_credits_title = () => {
	return `额度明细`;
};
/** @type {(inputs: Settings_Credits_TitleInputs) => LocalizedString} */
var zh_tw2_settings_credits_title = zh_settings_credits_title;
/**
* | output |
* | --- |
* | "Credits" |
*
* @param {Settings_Credits_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_credits_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_credits_title(inputs);
	if (locale === "zh") return zh_settings_credits_title(inputs);
	return zh_tw2_settings_credits_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_DescriptionInputs */
var en_settings_credits_description = () => {
	return `Your credits balance and history`;
};
var zh_settings_credits_description = () => {
	return `你的额度余额和变动记录`;
};
/** @type {(inputs: Settings_Credits_DescriptionInputs) => LocalizedString} */
var zh_tw2_settings_credits_description = zh_settings_credits_description;
/**
* | output |
* | --- |
* | "Your credits balance and history" |
*
* @param {Settings_Credits_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_credits_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_credits_description(inputs);
	if (locale === "zh") return zh_settings_credits_description(inputs);
	return zh_tw2_settings_credits_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_BalanceInputs */
var en_settings_credits_balance = () => {
	return `Balance`;
};
var zh_settings_credits_balance = () => {
	return `余额`;
};
/** @type {(inputs: Settings_Credits_BalanceInputs) => LocalizedString} */
var zh_tw2_settings_credits_balance = zh_settings_credits_balance;
/**
* | output |
* | --- |
* | "Balance" |
*
* @param {Settings_Credits_BalanceInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_credits_balance = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_credits_balance(inputs);
	if (locale === "zh") return zh_settings_credits_balance(inputs);
	return zh_tw2_settings_credits_balance(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_PurchaseInputs */
var en_settings_credits_purchase = () => {
	return `Purchase Credits`;
};
var zh_settings_credits_purchase = () => {
	return `购买额度`;
};
/** @type {(inputs: Settings_Credits_PurchaseInputs) => LocalizedString} */
var zh_tw2_settings_credits_purchase = zh_settings_credits_purchase;
/**
* | output |
* | --- |
* | "Purchase Credits" |
*
* @param {Settings_Credits_PurchaseInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_credits_purchase = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_credits_purchase(inputs);
	if (locale === "zh") return zh_settings_credits_purchase(inputs);
	return zh_tw2_settings_credits_purchase(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_Tab_AllInputs */
var en_settings_credits_tab_all = () => {
	return `All`;
};
var zh_settings_credits_tab_all = () => {
	return `全部`;
};
/** @type {(inputs: Settings_Credits_Tab_AllInputs) => LocalizedString} */
var zh_tw2_settings_credits_tab_all = zh_settings_credits_tab_all;
/**
* | output |
* | --- |
* | "All" |
*
* @param {Settings_Credits_Tab_AllInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_credits_tab_all = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_credits_tab_all(inputs);
	if (locale === "zh") return zh_settings_credits_tab_all(inputs);
	return zh_tw2_settings_credits_tab_all(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_Tab_GrantInputs */
var en_settings_credits_tab_grant = () => {
	return `Grant`;
};
var zh_settings_credits_tab_grant = () => {
	return `获得`;
};
/** @type {(inputs: Settings_Credits_Tab_GrantInputs) => LocalizedString} */
var zh_tw2_settings_credits_tab_grant = zh_settings_credits_tab_grant;
/**
* | output |
* | --- |
* | "Grant" |
*
* @param {Settings_Credits_Tab_GrantInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_credits_tab_grant = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_credits_tab_grant(inputs);
	if (locale === "zh") return zh_settings_credits_tab_grant(inputs);
	return zh_tw2_settings_credits_tab_grant(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_Tab_ConsumeInputs */
var en_settings_credits_tab_consume = () => {
	return `Consume`;
};
var zh_settings_credits_tab_consume = () => {
	return `消耗`;
};
/** @type {(inputs: Settings_Credits_Tab_ConsumeInputs) => LocalizedString} */
var zh_tw2_settings_credits_tab_consume = zh_settings_credits_tab_consume;
/**
* | output |
* | --- |
* | "Consume" |
*
* @param {Settings_Credits_Tab_ConsumeInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_credits_tab_consume = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_credits_tab_consume(inputs);
	if (locale === "zh") return zh_settings_credits_tab_consume(inputs);
	return zh_tw2_settings_credits_tab_consume(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_No_RecordsInputs */
var en_settings_credits_no_records = () => {
	return `No credit records yet`;
};
var zh_settings_credits_no_records = () => {
	return `暂无额度记录`;
};
/** @type {(inputs: Settings_Credits_No_RecordsInputs) => LocalizedString} */
var zh_tw2_settings_credits_no_records = zh_settings_credits_no_records;
/**
* | output |
* | --- |
* | "No credit records yet" |
*
* @param {Settings_Credits_No_RecordsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_credits_no_records = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_credits_no_records(inputs);
	if (locale === "zh") return zh_settings_credits_no_records(inputs);
	return zh_tw2_settings_credits_no_records(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_Transaction_NoInputs */
var en_settings_credits_transaction_no = () => {
	return `Transaction`;
};
var zh_settings_credits_transaction_no = () => {
	return `流水号`;
};
/** @type {(inputs: Settings_Credits_Transaction_NoInputs) => LocalizedString} */
var zh_tw2_settings_credits_transaction_no = zh_settings_credits_transaction_no;
/**
* | output |
* | --- |
* | "Transaction" |
*
* @param {Settings_Credits_Transaction_NoInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_credits_transaction_no = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_credits_transaction_no(inputs);
	if (locale === "zh") return zh_settings_credits_transaction_no(inputs);
	return zh_tw2_settings_credits_transaction_no(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_TypeInputs */
var en_settings_credits_type = () => {
	return `Type`;
};
var zh_settings_credits_type = () => {
	return `类型`;
};
/** @type {(inputs: Settings_Credits_TypeInputs) => LocalizedString} */
var zh_tw2_settings_credits_type = zh_settings_credits_type;
/**
* | output |
* | --- |
* | "Type" |
*
* @param {Settings_Credits_TypeInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_credits_type = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_credits_type(inputs);
	if (locale === "zh") return zh_settings_credits_type(inputs);
	return zh_tw2_settings_credits_type(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_SceneInputs */
var en_settings_credits_scene = () => {
	return `Scene`;
};
var zh_settings_credits_scene = () => {
	return `场景`;
};
/** @type {(inputs: Settings_Credits_SceneInputs) => LocalizedString} */
var zh_tw2_settings_credits_scene = zh_settings_credits_scene;
/**
* | output |
* | --- |
* | "Scene" |
*
* @param {Settings_Credits_SceneInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_credits_scene = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_credits_scene(inputs);
	if (locale === "zh") return zh_settings_credits_scene(inputs);
	return zh_tw2_settings_credits_scene(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_CreditsInputs */
var en_settings_credits_credits = () => {
	return `Credits`;
};
var zh_settings_credits_credits = () => {
	return `额度`;
};
/** @type {(inputs: Settings_Credits_CreditsInputs) => LocalizedString} */
var zh_tw2_settings_credits_credits = zh_settings_credits_credits;
/**
* | output |
* | --- |
* | "Credits" |
*
* @param {Settings_Credits_CreditsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_credits_credits = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_credits_credits(inputs);
	if (locale === "zh") return zh_settings_credits_credits(inputs);
	return zh_tw2_settings_credits_credits(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_RemainingInputs */
var en_settings_credits_remaining = () => {
	return `Remaining`;
};
var zh_settings_credits_remaining = () => {
	return `剩余`;
};
/** @type {(inputs: Settings_Credits_RemainingInputs) => LocalizedString} */
var zh_tw2_settings_credits_remaining = zh_settings_credits_remaining;
/**
* | output |
* | --- |
* | "Remaining" |
*
* @param {Settings_Credits_RemainingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_credits_remaining = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_credits_remaining(inputs);
	if (locale === "zh") return zh_settings_credits_remaining(inputs);
	return zh_tw2_settings_credits_remaining(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_Description_ColInputs */
var en_settings_credits_description_col = () => {
	return `Description`;
};
var zh_settings_credits_description_col = () => {
	return `说明`;
};
/** @type {(inputs: Settings_Credits_Description_ColInputs) => LocalizedString} */
var zh_tw2_settings_credits_description_col = zh_settings_credits_description_col;
/**
* | output |
* | --- |
* | "Description" |
*
* @param {Settings_Credits_Description_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_credits_description_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_credits_description_col(inputs);
	if (locale === "zh") return zh_settings_credits_description_col(inputs);
	return zh_tw2_settings_credits_description_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_Expires_AtInputs */
var en_settings_credits_expires_at = () => {
	return `Expires`;
};
var zh_settings_credits_expires_at = () => {
	return `过期时间`;
};
/** @type {(inputs: Settings_Credits_Expires_AtInputs) => LocalizedString} */
var zh_tw2_settings_credits_expires_at = zh_settings_credits_expires_at;
/**
* | output |
* | --- |
* | "Expires" |
*
* @param {Settings_Credits_Expires_AtInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_credits_expires_at = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_credits_expires_at(inputs);
	if (locale === "zh") return zh_settings_credits_expires_at(inputs);
	return zh_tw2_settings_credits_expires_at(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Credits_DateInputs */
var en_settings_credits_date = () => {
	return `Date`;
};
var zh_settings_credits_date = () => {
	return `日期`;
};
/** @type {(inputs: Settings_Credits_DateInputs) => LocalizedString} */
var zh_tw2_settings_credits_date = zh_settings_credits_date;
/**
* | output |
* | --- |
* | "Date" |
*
* @param {Settings_Credits_DateInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_credits_date = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_credits_date(inputs);
	if (locale === "zh") return zh_settings_credits_date(inputs);
	return zh_tw2_settings_credits_date(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_TitleInputs */
var en_settings_apikeys_title = () => {
	return `API Keys`;
};
var zh_settings_apikeys_title = () => {
	return `API 密钥`;
};
/** @type {(inputs: Settings_Apikeys_TitleInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_title = zh_settings_apikeys_title;
/**
* | output |
* | --- |
* | "API Keys" |
*
* @param {Settings_Apikeys_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_title(inputs);
	if (locale === "zh") return zh_settings_apikeys_title(inputs);
	return zh_tw2_settings_apikeys_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_DescriptionInputs */
var en_settings_apikeys_description = () => {
	return `Manage your API keys for programmatic access`;
};
var zh_settings_apikeys_description = () => {
	return `管理你的 API 密钥`;
};
/** @type {(inputs: Settings_Apikeys_DescriptionInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_description = zh_settings_apikeys_description;
/**
* | output |
* | --- |
* | "Manage your API keys for programmatic access" |
*
* @param {Settings_Apikeys_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_description(inputs);
	if (locale === "zh") return zh_settings_apikeys_description(inputs);
	return zh_tw2_settings_apikeys_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Your_KeysInputs */
var en_settings_apikeys_your_keys = () => {
	return `Your Keys`;
};
var zh_settings_apikeys_your_keys = () => {
	return `你的密钥`;
};
/** @type {(inputs: Settings_Apikeys_Your_KeysInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_your_keys = zh_settings_apikeys_your_keys;
/**
* | output |
* | --- |
* | "Your Keys" |
*
* @param {Settings_Apikeys_Your_KeysInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_your_keys = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_your_keys(inputs);
	if (locale === "zh") return zh_settings_apikeys_your_keys(inputs);
	return zh_tw2_settings_apikeys_your_keys(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Your_Keys_DescriptionInputs */
var en_settings_apikeys_your_keys_description = () => {
	return `Use these keys to authenticate API requests`;
};
var zh_settings_apikeys_your_keys_description = () => {
	return `使用这些密钥来认证 API 请求`;
};
/** @type {(inputs: Settings_Apikeys_Your_Keys_DescriptionInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_your_keys_description = zh_settings_apikeys_your_keys_description;
/**
* | output |
* | --- |
* | "Use these keys to authenticate API requests" |
*
* @param {Settings_Apikeys_Your_Keys_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_your_keys_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_your_keys_description(inputs);
	if (locale === "zh") return zh_settings_apikeys_your_keys_description(inputs);
	return zh_tw2_settings_apikeys_your_keys_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Create_KeyInputs */
var en_settings_apikeys_create_key = () => {
	return `Create Key`;
};
var zh_settings_apikeys_create_key = () => {
	return `创建密钥`;
};
/** @type {(inputs: Settings_Apikeys_Create_KeyInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_create_key = zh_settings_apikeys_create_key;
/**
* | output |
* | --- |
* | "Create Key" |
*
* @param {Settings_Apikeys_Create_KeyInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_create_key = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_create_key(inputs);
	if (locale === "zh") return zh_settings_apikeys_create_key(inputs);
	return zh_tw2_settings_apikeys_create_key(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Create_TitleInputs */
var en_settings_apikeys_create_title = () => {
	return `Create API Key`;
};
var zh_settings_apikeys_create_title = () => {
	return `创建 API 密钥`;
};
/** @type {(inputs: Settings_Apikeys_Create_TitleInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_create_title = zh_settings_apikeys_create_title;
/**
* | output |
* | --- |
* | "Create API Key" |
*
* @param {Settings_Apikeys_Create_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_create_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_create_title(inputs);
	if (locale === "zh") return zh_settings_apikeys_create_title(inputs);
	return zh_tw2_settings_apikeys_create_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Create_DescriptionInputs */
var en_settings_apikeys_create_description = () => {
	return `Give your key a name to identify it later`;
};
var zh_settings_apikeys_create_description = () => {
	return `给密钥起个名字以便识别`;
};
/** @type {(inputs: Settings_Apikeys_Create_DescriptionInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_create_description = zh_settings_apikeys_create_description;
/**
* | output |
* | --- |
* | "Give your key a name to identify it later" |
*
* @param {Settings_Apikeys_Create_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_create_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_create_description(inputs);
	if (locale === "zh") return zh_settings_apikeys_create_description(inputs);
	return zh_tw2_settings_apikeys_create_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Key_NameInputs */
var en_settings_apikeys_key_name = () => {
	return `Key Name`;
};
var zh_settings_apikeys_key_name = () => {
	return `密钥名称`;
};
/** @type {(inputs: Settings_Apikeys_Key_NameInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_key_name = zh_settings_apikeys_key_name;
/**
* | output |
* | --- |
* | "Key Name" |
*
* @param {Settings_Apikeys_Key_NameInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_key_name = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_key_name(inputs);
	if (locale === "zh") return zh_settings_apikeys_key_name(inputs);
	return zh_tw2_settings_apikeys_key_name(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Key_Name_PlaceholderInputs */
var en_settings_apikeys_key_name_placeholder = () => {
	return `e.g. Production, Development`;
};
var zh_settings_apikeys_key_name_placeholder = () => {
	return `例如：生产环境、开发环境`;
};
/** @type {(inputs: Settings_Apikeys_Key_Name_PlaceholderInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_key_name_placeholder = zh_settings_apikeys_key_name_placeholder;
/**
* | output |
* | --- |
* | "e.g. Production, Development" |
*
* @param {Settings_Apikeys_Key_Name_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_key_name_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_key_name_placeholder(inputs);
	if (locale === "zh") return zh_settings_apikeys_key_name_placeholder(inputs);
	return zh_tw2_settings_apikeys_key_name_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_CancelInputs */
var en_settings_apikeys_cancel = () => {
	return `Cancel`;
};
var zh_settings_apikeys_cancel = () => {
	return `取消`;
};
/** @type {(inputs: Settings_Apikeys_CancelInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_cancel = zh_settings_apikeys_cancel;
/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Settings_Apikeys_CancelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_cancel = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_cancel(inputs);
	if (locale === "zh") return zh_settings_apikeys_cancel(inputs);
	return zh_tw2_settings_apikeys_cancel(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_CreateInputs */
var en_settings_apikeys_create = () => {
	return `Create`;
};
var zh_settings_apikeys_create = () => {
	return `创建`;
};
/** @type {(inputs: Settings_Apikeys_CreateInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_create = zh_settings_apikeys_create;
/**
* | output |
* | --- |
* | "Create" |
*
* @param {Settings_Apikeys_CreateInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_create = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_create(inputs);
	if (locale === "zh") return zh_settings_apikeys_create(inputs);
	return zh_tw2_settings_apikeys_create(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_CreatingInputs */
var en_settings_apikeys_creating = () => {
	return `Creating...`;
};
var zh_settings_apikeys_creating = () => {
	return `创建中...`;
};
/** @type {(inputs: Settings_Apikeys_CreatingInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_creating = zh_settings_apikeys_creating;
/**
* | output |
* | --- |
* | "Creating..." |
*
* @param {Settings_Apikeys_CreatingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_creating = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_creating(inputs);
	if (locale === "zh") return zh_settings_apikeys_creating(inputs);
	return zh_tw2_settings_apikeys_creating(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_CreatedInputs */
var en_settings_apikeys_created = () => {
	return `API key created`;
};
var zh_settings_apikeys_created = () => {
	return `API 密钥已创建`;
};
/** @type {(inputs: Settings_Apikeys_CreatedInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_created = zh_settings_apikeys_created;
/**
* | output |
* | --- |
* | "API key created" |
*
* @param {Settings_Apikeys_CreatedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_created = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_created(inputs);
	if (locale === "zh") return zh_settings_apikeys_created(inputs);
	return zh_tw2_settings_apikeys_created(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_CopiedInputs */
var en_settings_apikeys_copied = () => {
	return `Copied to clipboard`;
};
var zh_settings_apikeys_copied = () => {
	return `已复制到剪贴板`;
};
/** @type {(inputs: Settings_Apikeys_CopiedInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_copied = zh_settings_apikeys_copied;
/**
* | output |
* | --- |
* | "Copied to clipboard" |
*
* @param {Settings_Apikeys_CopiedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_copied = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_copied(inputs);
	if (locale === "zh") return zh_settings_apikeys_copied(inputs);
	return zh_tw2_settings_apikeys_copied(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Key_CopiedInputs */
var en_settings_apikeys_key_copied = () => {
	return `Key copied to clipboard`;
};
var zh_settings_apikeys_key_copied = () => {
	return `密钥已复制到剪贴板`;
};
/** @type {(inputs: Settings_Apikeys_Key_CopiedInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_key_copied = zh_settings_apikeys_key_copied;
/**
* | output |
* | --- |
* | "Key copied to clipboard" |
*
* @param {Settings_Apikeys_Key_CopiedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_key_copied = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_key_copied(inputs);
	if (locale === "zh") return zh_settings_apikeys_key_copied(inputs);
	return zh_tw2_settings_apikeys_key_copied(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Copy_FailedInputs */
var en_settings_apikeys_copy_failed = () => {
	return `Failed to copy, please copy manually`;
};
var zh_settings_apikeys_copy_failed = () => {
	return `复制失败，请手动复制`;
};
/** @type {(inputs: Settings_Apikeys_Copy_FailedInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_copy_failed = zh_settings_apikeys_copy_failed;
/**
* | output |
* | --- |
* | "Failed to copy, please copy manually" |
*
* @param {Settings_Apikeys_Copy_FailedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_copy_failed = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_copy_failed(inputs);
	if (locale === "zh") return zh_settings_apikeys_copy_failed(inputs);
	return zh_tw2_settings_apikeys_copy_failed(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Created_TitleInputs */
var en_settings_apikeys_created_title = () => {
	return `API Key Created`;
};
var zh_settings_apikeys_created_title = () => {
	return `API 密钥已创建`;
};
/** @type {(inputs: Settings_Apikeys_Created_TitleInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_created_title = zh_settings_apikeys_created_title;
/**
* | output |
* | --- |
* | "API Key Created" |
*
* @param {Settings_Apikeys_Created_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_created_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_created_title(inputs);
	if (locale === "zh") return zh_settings_apikeys_created_title(inputs);
	return zh_tw2_settings_apikeys_created_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Created_WarningInputs */
var en_settings_apikeys_created_warning = () => {
	return `Copy your key now — it won't be shown again.`;
};
var zh_settings_apikeys_created_warning = () => {
	return `请立即复制你的密钥，关闭后将无法再次查看。`;
};
/** @type {(inputs: Settings_Apikeys_Created_WarningInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_created_warning = zh_settings_apikeys_created_warning;
/**
* | output |
* | --- |
* | "Copy your key now — it won't be shown again." |
*
* @param {Settings_Apikeys_Created_WarningInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_created_warning = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_created_warning(inputs);
	if (locale === "zh") return zh_settings_apikeys_created_warning(inputs);
	return zh_tw2_settings_apikeys_created_warning(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_DoneInputs */
var en_settings_apikeys_done = () => {
	return `Done`;
};
var zh_settings_apikeys_done = () => {
	return `完成`;
};
/** @type {(inputs: Settings_Apikeys_DoneInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_done = zh_settings_apikeys_done;
/**
* | output |
* | --- |
* | "Done" |
*
* @param {Settings_Apikeys_DoneInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_done = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_done(inputs);
	if (locale === "zh") return zh_settings_apikeys_done(inputs);
	return zh_tw2_settings_apikeys_done(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_DeletedInputs */
var en_settings_apikeys_deleted = () => {
	return `Key deleted`;
};
var zh_settings_apikeys_deleted = () => {
	return `密钥已删除`;
};
/** @type {(inputs: Settings_Apikeys_DeletedInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_deleted = zh_settings_apikeys_deleted;
/**
* | output |
* | --- |
* | "Key deleted" |
*
* @param {Settings_Apikeys_DeletedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_deleted = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_deleted(inputs);
	if (locale === "zh") return zh_settings_apikeys_deleted(inputs);
	return zh_tw2_settings_apikeys_deleted(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Delete_TitleInputs */
var en_settings_apikeys_delete_title = () => {
	return `Delete API key?`;
};
var zh_settings_apikeys_delete_title = () => {
	return `删除 API 密钥？`;
};
/** @type {(inputs: Settings_Apikeys_Delete_TitleInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_delete_title = zh_settings_apikeys_delete_title;
/**
* | output |
* | --- |
* | "Delete API key?" |
*
* @param {Settings_Apikeys_Delete_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_delete_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_delete_title(inputs);
	if (locale === "zh") return zh_settings_apikeys_delete_title(inputs);
	return zh_tw2_settings_apikeys_delete_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ name: NonNullable<unknown> }} Settings_Apikeys_Delete_DescriptionInputs */
var en_settings_apikeys_delete_description = (i) => {
	return `Are you sure you want to delete ${i?.name}? This action cannot be undone.`;
};
var zh_settings_apikeys_delete_description = (i) => {
	return `确定要删除 ${i?.name} 吗？此操作无法撤销。`;
};
/** @type {(inputs: Settings_Apikeys_Delete_DescriptionInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_delete_description = zh_settings_apikeys_delete_description;
/**
* | output |
* | --- |
* | "Are you sure you want to delete {name}? This action cannot be undone." |
*
* @param {Settings_Apikeys_Delete_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_delete_description = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_delete_description(inputs);
	if (locale === "zh") return zh_settings_apikeys_delete_description(inputs);
	return zh_tw2_settings_apikeys_delete_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Confirm_DeleteInputs */
var en_settings_apikeys_confirm_delete = () => {
	return `Delete`;
};
var zh_settings_apikeys_confirm_delete = () => {
	return `删除`;
};
/** @type {(inputs: Settings_Apikeys_Confirm_DeleteInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_confirm_delete = zh_settings_apikeys_confirm_delete;
/**
* | output |
* | --- |
* | "Delete" |
*
* @param {Settings_Apikeys_Confirm_DeleteInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_confirm_delete = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_confirm_delete(inputs);
	if (locale === "zh") return zh_settings_apikeys_confirm_delete(inputs);
	return zh_tw2_settings_apikeys_confirm_delete(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_DeletingInputs */
var en_settings_apikeys_deleting = () => {
	return `Deleting...`;
};
var zh_settings_apikeys_deleting = () => {
	return `删除中...`;
};
/** @type {(inputs: Settings_Apikeys_DeletingInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_deleting = zh_settings_apikeys_deleting;
/**
* | output |
* | --- |
* | "Deleting..." |
*
* @param {Settings_Apikeys_DeletingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_deleting = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_deleting(inputs);
	if (locale === "zh") return zh_settings_apikeys_deleting(inputs);
	return zh_tw2_settings_apikeys_deleting(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Delete_FailedInputs */
var en_settings_apikeys_delete_failed = () => {
	return `Failed to delete API key`;
};
var zh_settings_apikeys_delete_failed = () => {
	return `API 密钥删除失败`;
};
/** @type {(inputs: Settings_Apikeys_Delete_FailedInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_delete_failed = zh_settings_apikeys_delete_failed;
/**
* | output |
* | --- |
* | "Failed to delete API key" |
*
* @param {Settings_Apikeys_Delete_FailedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_delete_failed = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_delete_failed(inputs);
	if (locale === "zh") return zh_settings_apikeys_delete_failed(inputs);
	return zh_tw2_settings_apikeys_delete_failed(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_FailedInputs */
var en_settings_apikeys_failed = () => {
	return `Failed to create key`;
};
var zh_settings_apikeys_failed = () => {
	return `创建密钥失败`;
};
/** @type {(inputs: Settings_Apikeys_FailedInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_failed = zh_settings_apikeys_failed;
/**
* | output |
* | --- |
* | "Failed to create key" |
*
* @param {Settings_Apikeys_FailedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_failed = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_failed(inputs);
	if (locale === "zh") return zh_settings_apikeys_failed(inputs);
	return zh_tw2_settings_apikeys_failed(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_No_KeysInputs */
var en_settings_apikeys_no_keys = () => {
	return `No API keys yet. Create one to get started.`;
};
var zh_settings_apikeys_no_keys = () => {
	return `还没有 API 密钥，创建一个开始使用。`;
};
/** @type {(inputs: Settings_Apikeys_No_KeysInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_no_keys = zh_settings_apikeys_no_keys;
/**
* | output |
* | --- |
* | "No API keys yet. Create one to get started." |
*
* @param {Settings_Apikeys_No_KeysInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_no_keys = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_no_keys(inputs);
	if (locale === "zh") return zh_settings_apikeys_no_keys(inputs);
	return zh_tw2_settings_apikeys_no_keys(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Name_ColInputs */
var en_settings_apikeys_name_col = () => {
	return `Name`;
};
var zh_settings_apikeys_name_col = () => {
	return `名称`;
};
/** @type {(inputs: Settings_Apikeys_Name_ColInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_name_col = zh_settings_apikeys_name_col;
/**
* | output |
* | --- |
* | "Name" |
*
* @param {Settings_Apikeys_Name_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_name_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_name_col(inputs);
	if (locale === "zh") return zh_settings_apikeys_name_col(inputs);
	return zh_tw2_settings_apikeys_name_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Key_ColInputs */
var en_settings_apikeys_key_col = () => {
	return `Key`;
};
var zh_settings_apikeys_key_col = () => {
	return `密钥`;
};
/** @type {(inputs: Settings_Apikeys_Key_ColInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_key_col = zh_settings_apikeys_key_col;
/**
* | output |
* | --- |
* | "Key" |
*
* @param {Settings_Apikeys_Key_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_key_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_key_col(inputs);
	if (locale === "zh") return zh_settings_apikeys_key_col(inputs);
	return zh_tw2_settings_apikeys_key_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Created_ColInputs */
var en_settings_apikeys_created_col = () => {
	return `Created`;
};
var zh_settings_apikeys_created_col = () => {
	return `创建时间`;
};
/** @type {(inputs: Settings_Apikeys_Created_ColInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_created_col = zh_settings_apikeys_created_col;
/**
* | output |
* | --- |
* | "Created" |
*
* @param {Settings_Apikeys_Created_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_created_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_created_col(inputs);
	if (locale === "zh") return zh_settings_apikeys_created_col(inputs);
	return zh_tw2_settings_apikeys_created_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Last_Used_ColInputs */
var en_settings_apikeys_last_used_col = () => {
	return `Last Used`;
};
var zh_settings_apikeys_last_used_col = () => {
	return `最近使用`;
};
/** @type {(inputs: Settings_Apikeys_Last_Used_ColInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_last_used_col = zh_settings_apikeys_last_used_col;
/**
* | output |
* | --- |
* | "Last Used" |
*
* @param {Settings_Apikeys_Last_Used_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_last_used_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_last_used_col(inputs);
	if (locale === "zh") return zh_settings_apikeys_last_used_col(inputs);
	return zh_tw2_settings_apikeys_last_used_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Never_UsedInputs */
var en_settings_apikeys_never_used = () => {
	return `Never`;
};
var zh_settings_apikeys_never_used = () => {
	return `从未使用`;
};
/** @type {(inputs: Settings_Apikeys_Never_UsedInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_never_used = zh_settings_apikeys_never_used;
/**
* | output |
* | --- |
* | "Never" |
*
* @param {Settings_Apikeys_Never_UsedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_never_used = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_never_used(inputs);
	if (locale === "zh") return zh_settings_apikeys_never_used(inputs);
	return zh_tw2_settings_apikeys_never_used(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Apikeys_Actions_ColInputs */
var en_settings_apikeys_actions_col = () => {
	return `Actions`;
};
var zh_settings_apikeys_actions_col = () => {
	return `操作`;
};
/** @type {(inputs: Settings_Apikeys_Actions_ColInputs) => LocalizedString} */
var zh_tw2_settings_apikeys_actions_col = zh_settings_apikeys_actions_col;
/**
* | output |
* | --- |
* | "Actions" |
*
* @param {Settings_Apikeys_Actions_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_apikeys_actions_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_apikeys_actions_col(inputs);
	if (locale === "zh") return zh_settings_apikeys_actions_col(inputs);
	return zh_tw2_settings_apikeys_actions_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_TitleInputs */
var en_settings_tickets_title = () => {
	return `Support Tickets`;
};
var zh_settings_tickets_title = () => {
	return `工单支持`;
};
/** @type {(inputs: Settings_Tickets_TitleInputs) => LocalizedString} */
var zh_tw2_settings_tickets_title = zh_settings_tickets_title;
/**
* | output |
* | --- |
* | "Support Tickets" |
*
* @param {Settings_Tickets_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_title(inputs);
	if (locale === "zh") return zh_settings_tickets_title(inputs);
	return zh_tw2_settings_tickets_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_DescriptionInputs */
var en_settings_tickets_description = () => {
	return `Submit a ticket and our team will get back to you`;
};
var zh_settings_tickets_description = () => {
	return `提交工单反馈问题,我们会尽快回复你`;
};
/** @type {(inputs: Settings_Tickets_DescriptionInputs) => LocalizedString} */
var zh_tw2_settings_tickets_description = zh_settings_tickets_description;
/**
* | output |
* | --- |
* | "Submit a ticket and our team will get back to you" |
*
* @param {Settings_Tickets_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_description(inputs);
	if (locale === "zh") return zh_settings_tickets_description(inputs);
	return zh_tw2_settings_tickets_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Create_ButtonInputs */
var en_settings_tickets_create_button = () => {
	return `New Ticket`;
};
var zh_settings_tickets_create_button = () => {
	return `提交工单`;
};
/** @type {(inputs: Settings_Tickets_Create_ButtonInputs) => LocalizedString} */
var zh_tw2_settings_tickets_create_button = zh_settings_tickets_create_button;
/**
* | output |
* | --- |
* | "New Ticket" |
*
* @param {Settings_Tickets_Create_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_create_button = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_create_button(inputs);
	if (locale === "zh") return zh_settings_tickets_create_button(inputs);
	return zh_tw2_settings_tickets_create_button(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Create_TitleInputs */
var en_settings_tickets_create_title = () => {
	return `Submit a Ticket`;
};
var zh_settings_tickets_create_title = () => {
	return `提交工单`;
};
/** @type {(inputs: Settings_Tickets_Create_TitleInputs) => LocalizedString} */
var zh_tw2_settings_tickets_create_title = zh_settings_tickets_create_title;
/**
* | output |
* | --- |
* | "Submit a Ticket" |
*
* @param {Settings_Tickets_Create_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_create_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_create_title(inputs);
	if (locale === "zh") return zh_settings_tickets_create_title(inputs);
	return zh_tw2_settings_tickets_create_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Create_DescriptionInputs */
var en_settings_tickets_create_description = () => {
	return `Describe your issue and we'll respond as soon as possible`;
};
var zh_settings_tickets_create_description = () => {
	return `描述你遇到的问题,我们会尽快回复`;
};
/** @type {(inputs: Settings_Tickets_Create_DescriptionInputs) => LocalizedString} */
var zh_tw2_settings_tickets_create_description = zh_settings_tickets_create_description;
/**
* | output |
* | --- |
* | "Describe your issue and we'll respond as soon as possible" |
*
* @param {Settings_Tickets_Create_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_create_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_create_description(inputs);
	if (locale === "zh") return zh_settings_tickets_create_description(inputs);
	return zh_tw2_settings_tickets_create_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Title_LabelInputs */
var en_settings_tickets_title_label = () => {
	return `Subject`;
};
var zh_settings_tickets_title_label = () => {
	return `标题`;
};
/** @type {(inputs: Settings_Tickets_Title_LabelInputs) => LocalizedString} */
var zh_tw2_settings_tickets_title_label = zh_settings_tickets_title_label;
/**
* | output |
* | --- |
* | "Subject" |
*
* @param {Settings_Tickets_Title_LabelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_title_label = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_title_label(inputs);
	if (locale === "zh") return zh_settings_tickets_title_label(inputs);
	return zh_tw2_settings_tickets_title_label(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Title_PlaceholderInputs */
var en_settings_tickets_title_placeholder = () => {
	return `Brief summary of your issue`;
};
var zh_settings_tickets_title_placeholder = () => {
	return `简要描述你的问题`;
};
/** @type {(inputs: Settings_Tickets_Title_PlaceholderInputs) => LocalizedString} */
var zh_tw2_settings_tickets_title_placeholder = zh_settings_tickets_title_placeholder;
/**
* | output |
* | --- |
* | "Brief summary of your issue" |
*
* @param {Settings_Tickets_Title_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_title_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_title_placeholder(inputs);
	if (locale === "zh") return zh_settings_tickets_title_placeholder(inputs);
	return zh_tw2_settings_tickets_title_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Content_LabelInputs */
var en_settings_tickets_content_label = () => {
	return `Description`;
};
var zh_settings_tickets_content_label = () => {
	return `问题描述`;
};
/** @type {(inputs: Settings_Tickets_Content_LabelInputs) => LocalizedString} */
var zh_tw2_settings_tickets_content_label = zh_settings_tickets_content_label;
/**
* | output |
* | --- |
* | "Description" |
*
* @param {Settings_Tickets_Content_LabelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_content_label = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_content_label(inputs);
	if (locale === "zh") return zh_settings_tickets_content_label(inputs);
	return zh_tw2_settings_tickets_content_label(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Content_PlaceholderInputs */
var en_settings_tickets_content_placeholder = () => {
	return `Describe your issue in detail...`;
};
var zh_settings_tickets_content_placeholder = () => {
	return `详细描述你遇到的问题…`;
};
/** @type {(inputs: Settings_Tickets_Content_PlaceholderInputs) => LocalizedString} */
var zh_tw2_settings_tickets_content_placeholder = zh_settings_tickets_content_placeholder;
/**
* | output |
* | --- |
* | "Describe your issue in detail..." |
*
* @param {Settings_Tickets_Content_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_content_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_content_placeholder(inputs);
	if (locale === "zh") return zh_settings_tickets_content_placeholder(inputs);
	return zh_tw2_settings_tickets_content_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Title_ColInputs */
var en_settings_tickets_title_col = () => {
	return `Subject`;
};
var zh_settings_tickets_title_col = () => {
	return `标题`;
};
/** @type {(inputs: Settings_Tickets_Title_ColInputs) => LocalizedString} */
var zh_tw2_settings_tickets_title_col = zh_settings_tickets_title_col;
/**
* | output |
* | --- |
* | "Subject" |
*
* @param {Settings_Tickets_Title_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_title_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_title_col(inputs);
	if (locale === "zh") return zh_settings_tickets_title_col(inputs);
	return zh_tw2_settings_tickets_title_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Status_ColInputs */
var en_settings_tickets_status_col = () => {
	return `Status`;
};
var zh_settings_tickets_status_col = () => {
	return `状态`;
};
/** @type {(inputs: Settings_Tickets_Status_ColInputs) => LocalizedString} */
var zh_tw2_settings_tickets_status_col = zh_settings_tickets_status_col;
/**
* | output |
* | --- |
* | "Status" |
*
* @param {Settings_Tickets_Status_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_status_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_status_col(inputs);
	if (locale === "zh") return zh_settings_tickets_status_col(inputs);
	return zh_tw2_settings_tickets_status_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Updated_ColInputs */
var en_settings_tickets_updated_col = () => {
	return `Last Updated`;
};
var zh_settings_tickets_updated_col = () => {
	return `更新时间`;
};
/** @type {(inputs: Settings_Tickets_Updated_ColInputs) => LocalizedString} */
var zh_tw2_settings_tickets_updated_col = zh_settings_tickets_updated_col;
/**
* | output |
* | --- |
* | "Last Updated" |
*
* @param {Settings_Tickets_Updated_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_updated_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_updated_col(inputs);
	if (locale === "zh") return zh_settings_tickets_updated_col(inputs);
	return zh_tw2_settings_tickets_updated_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Actions_ColInputs */
var en_settings_tickets_actions_col = () => {
	return `Actions`;
};
var zh_settings_tickets_actions_col = () => {
	return `操作`;
};
/** @type {(inputs: Settings_Tickets_Actions_ColInputs) => LocalizedString} */
var zh_tw2_settings_tickets_actions_col = zh_settings_tickets_actions_col;
/**
* | output |
* | --- |
* | "Actions" |
*
* @param {Settings_Tickets_Actions_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_actions_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_actions_col(inputs);
	if (locale === "zh") return zh_settings_tickets_actions_col(inputs);
	return zh_tw2_settings_tickets_actions_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Status_OpenInputs */
var en_settings_tickets_status_open = () => {
	return `Open`;
};
var zh_settings_tickets_status_open = () => {
	return `待处理`;
};
/** @type {(inputs: Settings_Tickets_Status_OpenInputs) => LocalizedString} */
var zh_tw2_settings_tickets_status_open = zh_settings_tickets_status_open;
/**
* | output |
* | --- |
* | "Open" |
*
* @param {Settings_Tickets_Status_OpenInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_status_open = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_status_open(inputs);
	if (locale === "zh") return zh_settings_tickets_status_open(inputs);
	return zh_tw2_settings_tickets_status_open(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Status_RepliedInputs */
var en_settings_tickets_status_replied = () => {
	return `In Progress`;
};
var zh_settings_tickets_status_replied = () => {
	return `处理中`;
};
/** @type {(inputs: Settings_Tickets_Status_RepliedInputs) => LocalizedString} */
var zh_tw2_settings_tickets_status_replied = zh_settings_tickets_status_replied;
/**
* | output |
* | --- |
* | "In Progress" |
*
* @param {Settings_Tickets_Status_RepliedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_status_replied = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_status_replied(inputs);
	if (locale === "zh") return zh_settings_tickets_status_replied(inputs);
	return zh_tw2_settings_tickets_status_replied(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Status_ClosedInputs */
var en_settings_tickets_status_closed = () => {
	return `Closed`;
};
var zh_settings_tickets_status_closed = () => {
	return `已关闭`;
};
/** @type {(inputs: Settings_Tickets_Status_ClosedInputs) => LocalizedString} */
var zh_tw2_settings_tickets_status_closed = zh_settings_tickets_status_closed;
/**
* | output |
* | --- |
* | "Closed" |
*
* @param {Settings_Tickets_Status_ClosedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_status_closed = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_status_closed(inputs);
	if (locale === "zh") return zh_settings_tickets_status_closed(inputs);
	return zh_tw2_settings_tickets_status_closed(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_EmptyInputs */
var en_settings_tickets_empty = () => {
	return `No tickets yet`;
};
var zh_settings_tickets_empty = () => {
	return `暂无工单`;
};
/** @type {(inputs: Settings_Tickets_EmptyInputs) => LocalizedString} */
var zh_tw2_settings_tickets_empty = zh_settings_tickets_empty;
/**
* | output |
* | --- |
* | "No tickets yet" |
*
* @param {Settings_Tickets_EmptyInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_empty = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_empty(inputs);
	if (locale === "zh") return zh_settings_tickets_empty(inputs);
	return zh_tw2_settings_tickets_empty(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_RequiredInputs */
var en_settings_tickets_required = () => {
	return `Subject and description are required`;
};
var zh_settings_tickets_required = () => {
	return `请填写标题和问题描述`;
};
/** @type {(inputs: Settings_Tickets_RequiredInputs) => LocalizedString} */
var zh_tw2_settings_tickets_required = zh_settings_tickets_required;
/**
* | output |
* | --- |
* | "Subject and description are required" |
*
* @param {Settings_Tickets_RequiredInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_required = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_required(inputs);
	if (locale === "zh") return zh_settings_tickets_required(inputs);
	return zh_tw2_settings_tickets_required(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Create_SuccessInputs */
var en_settings_tickets_create_success = () => {
	return `Ticket submitted`;
};
var zh_settings_tickets_create_success = () => {
	return `工单已提交`;
};
/** @type {(inputs: Settings_Tickets_Create_SuccessInputs) => LocalizedString} */
var zh_tw2_settings_tickets_create_success = zh_settings_tickets_create_success;
/**
* | output |
* | --- |
* | "Ticket submitted" |
*
* @param {Settings_Tickets_Create_SuccessInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_create_success = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_create_success(inputs);
	if (locale === "zh") return zh_settings_tickets_create_success(inputs);
	return zh_tw2_settings_tickets_create_success(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Close_SuccessInputs */
var en_settings_tickets_close_success = () => {
	return `Ticket closed`;
};
var zh_settings_tickets_close_success = () => {
	return `工单已关闭`;
};
/** @type {(inputs: Settings_Tickets_Close_SuccessInputs) => LocalizedString} */
var zh_tw2_settings_tickets_close_success = zh_settings_tickets_close_success;
/**
* | output |
* | --- |
* | "Ticket closed" |
*
* @param {Settings_Tickets_Close_SuccessInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_close_success = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_close_success(inputs);
	if (locale === "zh") return zh_settings_tickets_close_success(inputs);
	return zh_tw2_settings_tickets_close_success(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Close_TicketInputs */
var en_settings_tickets_close_ticket = () => {
	return `Close Ticket`;
};
var zh_settings_tickets_close_ticket = () => {
	return `关闭工单`;
};
/** @type {(inputs: Settings_Tickets_Close_TicketInputs) => LocalizedString} */
var zh_tw2_settings_tickets_close_ticket = zh_settings_tickets_close_ticket;
/**
* | output |
* | --- |
* | "Close Ticket" |
*
* @param {Settings_Tickets_Close_TicketInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_close_ticket = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_close_ticket(inputs);
	if (locale === "zh") return zh_settings_tickets_close_ticket(inputs);
	return zh_tw2_settings_tickets_close_ticket(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Closed_NoticeInputs */
var en_settings_tickets_closed_notice = () => {
	return `This ticket is closed. Create a new ticket if you need further help.`;
};
var zh_settings_tickets_closed_notice = () => {
	return `该工单已关闭,如需进一步帮助请提交新工单。`;
};
/** @type {(inputs: Settings_Tickets_Closed_NoticeInputs) => LocalizedString} */
var zh_tw2_settings_tickets_closed_notice = zh_settings_tickets_closed_notice;
/**
* | output |
* | --- |
* | "This ticket is closed. Create a new ticket if you need further help." |
*
* @param {Settings_Tickets_Closed_NoticeInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_closed_notice = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_closed_notice(inputs);
	if (locale === "zh") return zh_settings_tickets_closed_notice(inputs);
	return zh_tw2_settings_tickets_closed_notice(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Reply_PlaceholderInputs */
var en_settings_tickets_reply_placeholder = () => {
	return `Write a reply...`;
};
var zh_settings_tickets_reply_placeholder = () => {
	return `输入回复内容…`;
};
/** @type {(inputs: Settings_Tickets_Reply_PlaceholderInputs) => LocalizedString} */
var zh_tw2_settings_tickets_reply_placeholder = zh_settings_tickets_reply_placeholder;
/**
* | output |
* | --- |
* | "Write a reply..." |
*
* @param {Settings_Tickets_Reply_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_reply_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_reply_placeholder(inputs);
	if (locale === "zh") return zh_settings_tickets_reply_placeholder(inputs);
	return zh_tw2_settings_tickets_reply_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Reply_SubmitInputs */
var en_settings_tickets_reply_submit = () => {
	return `Send Reply`;
};
var zh_settings_tickets_reply_submit = () => {
	return `发送回复`;
};
/** @type {(inputs: Settings_Tickets_Reply_SubmitInputs) => LocalizedString} */
var zh_tw2_settings_tickets_reply_submit = zh_settings_tickets_reply_submit;
/**
* | output |
* | --- |
* | "Send Reply" |
*
* @param {Settings_Tickets_Reply_SubmitInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_reply_submit = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_reply_submit(inputs);
	if (locale === "zh") return zh_settings_tickets_reply_submit(inputs);
	return zh_tw2_settings_tickets_reply_submit(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_ReplyingInputs */
var en_settings_tickets_replying = () => {
	return `Sending...`;
};
var zh_settings_tickets_replying = () => {
	return `发送中…`;
};
/** @type {(inputs: Settings_Tickets_ReplyingInputs) => LocalizedString} */
var zh_tw2_settings_tickets_replying = zh_settings_tickets_replying;
/**
* | output |
* | --- |
* | "Sending..." |
*
* @param {Settings_Tickets_ReplyingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_replying = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_replying(inputs);
	if (locale === "zh") return zh_settings_tickets_replying(inputs);
	return zh_tw2_settings_tickets_replying(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Support_TeamInputs */
var en_settings_tickets_support_team = () => {
	return `Support Team`;
};
var zh_settings_tickets_support_team = () => {
	return `客服团队`;
};
/** @type {(inputs: Settings_Tickets_Support_TeamInputs) => LocalizedString} */
var zh_tw2_settings_tickets_support_team = zh_settings_tickets_support_team;
/**
* | output |
* | --- |
* | "Support Team" |
*
* @param {Settings_Tickets_Support_TeamInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_support_team = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_support_team(inputs);
	if (locale === "zh") return zh_settings_tickets_support_team(inputs);
	return zh_tw2_settings_tickets_support_team(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_YouInputs */
var en_settings_tickets_you = () => {
	return `You`;
};
var zh_settings_tickets_you = () => {
	return `我`;
};
/** @type {(inputs: Settings_Tickets_YouInputs) => LocalizedString} */
var zh_tw2_settings_tickets_you = zh_settings_tickets_you;
/**
* | output |
* | --- |
* | "You" |
*
* @param {Settings_Tickets_YouInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_you = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_you(inputs);
	if (locale === "zh") return zh_settings_tickets_you(inputs);
	return zh_tw2_settings_tickets_you(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_CancelInputs */
var en_settings_tickets_cancel = () => {
	return `Cancel`;
};
var zh_settings_tickets_cancel = () => {
	return `取消`;
};
/** @type {(inputs: Settings_Tickets_CancelInputs) => LocalizedString} */
var zh_tw2_settings_tickets_cancel = zh_settings_tickets_cancel;
/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Settings_Tickets_CancelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_cancel = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_cancel(inputs);
	if (locale === "zh") return zh_settings_tickets_cancel(inputs);
	return zh_tw2_settings_tickets_cancel(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Create_SubmitInputs */
var en_settings_tickets_create_submit = () => {
	return `Submit`;
};
var zh_settings_tickets_create_submit = () => {
	return `提交`;
};
/** @type {(inputs: Settings_Tickets_Create_SubmitInputs) => LocalizedString} */
var zh_tw2_settings_tickets_create_submit = zh_settings_tickets_create_submit;
/**
* | output |
* | --- |
* | "Submit" |
*
* @param {Settings_Tickets_Create_SubmitInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_create_submit = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_create_submit(inputs);
	if (locale === "zh") return zh_settings_tickets_create_submit(inputs);
	return zh_tw2_settings_tickets_create_submit(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_CreatingInputs */
var en_settings_tickets_creating = () => {
	return `Submitting...`;
};
var zh_settings_tickets_creating = () => {
	return `提交中…`;
};
/** @type {(inputs: Settings_Tickets_CreatingInputs) => LocalizedString} */
var zh_tw2_settings_tickets_creating = zh_settings_tickets_creating;
/**
* | output |
* | --- |
* | "Submitting..." |
*
* @param {Settings_Tickets_CreatingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_creating = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_creating(inputs);
	if (locale === "zh") return zh_settings_tickets_creating(inputs);
	return zh_tw2_settings_tickets_creating(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Attachments_LabelInputs */
var en_settings_tickets_attachments_label = () => {
	return `Images (optional)`;
};
var zh_settings_tickets_attachments_label = () => {
	return `图片附件(可选)`;
};
/** @type {(inputs: Settings_Tickets_Attachments_LabelInputs) => LocalizedString} */
var zh_tw2_settings_tickets_attachments_label = zh_settings_tickets_attachments_label;
/**
* | output |
* | --- |
* | "Images (optional)" |
*
* @param {Settings_Tickets_Attachments_LabelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_attachments_label = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_attachments_label(inputs);
	if (locale === "zh") return zh_settings_tickets_attachments_label(inputs);
	return zh_tw2_settings_tickets_attachments_label(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Latest_Reply_ColInputs */
var en_settings_tickets_latest_reply_col = () => {
	return `Latest Reply`;
};
var zh_settings_tickets_latest_reply_col = () => {
	return `最新回复`;
};
/** @type {(inputs: Settings_Tickets_Latest_Reply_ColInputs) => LocalizedString} */
var zh_tw2_settings_tickets_latest_reply_col = zh_settings_tickets_latest_reply_col;
/**
* | output |
* | --- |
* | "Latest Reply" |
*
* @param {Settings_Tickets_Latest_Reply_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_latest_reply_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_latest_reply_col(inputs);
	if (locale === "zh") return zh_settings_tickets_latest_reply_col(inputs);
	return zh_tw2_settings_tickets_latest_reply_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Settings_Tickets_Created_ColInputs */
var en_settings_tickets_created_col = () => {
	return `Created At`;
};
var zh_settings_tickets_created_col = () => {
	return `创建时间`;
};
/** @type {(inputs: Settings_Tickets_Created_ColInputs) => LocalizedString} */
var zh_tw2_settings_tickets_created_col = zh_settings_tickets_created_col;
/**
* | output |
* | --- |
* | "Created At" |
*
* @param {Settings_Tickets_Created_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var settings_tickets_created_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_settings_tickets_created_col(inputs);
	if (locale === "zh") return zh_settings_tickets_created_col(inputs);
	return zh_tw2_settings_tickets_created_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_TitleInputs */
var en_admin_title = () => {
	return `Admin`;
};
var zh_admin_title = () => {
	return `管理后台`;
};
/** @type {(inputs: Admin_TitleInputs) => LocalizedString} */
var zh_tw2_admin_title = zh_admin_title;
/**
* | output |
* | --- |
* | "Admin" |
*
* @param {Admin_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_title(inputs);
	if (locale === "zh") return zh_admin_title(inputs);
	return zh_tw2_admin_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_DescriptionInputs */
var en_admin_description = () => {
	return `System overview`;
};
var zh_admin_description = () => {
	return `系统概览`;
};
/** @type {(inputs: Admin_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_description = zh_admin_description;
/**
* | output |
* | --- |
* | "System overview" |
*
* @param {Admin_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_description(inputs);
	if (locale === "zh") return zh_admin_description(inputs);
	return zh_tw2_admin_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_LoadingInputs */
var en_admin_loading = () => {
	return `Loading...`;
};
var zh_admin_loading = () => {
	return `加载中...`;
};
/** @type {(inputs: Admin_LoadingInputs) => LocalizedString} */
var zh_tw2_admin_loading = zh_admin_loading;
/**
* | output |
* | --- |
* | "Loading..." |
*
* @param {Admin_LoadingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_loading = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_loading(inputs);
	if (locale === "zh") return zh_admin_loading(inputs);
	return zh_tw2_admin_loading(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Back_To_DashboardInputs */
var en_admin_back_to_dashboard = () => {
	return `Dashboard`;
};
var zh_admin_back_to_dashboard = () => {
	return `控制台`;
};
/** @type {(inputs: Admin_Back_To_DashboardInputs) => LocalizedString} */
var zh_tw2_admin_back_to_dashboard = zh_admin_back_to_dashboard;
/**
* | output |
* | --- |
* | "Dashboard" |
*
* @param {Admin_Back_To_DashboardInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_back_to_dashboard = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_back_to_dashboard(inputs);
	if (locale === "zh") return zh_admin_back_to_dashboard(inputs);
	return zh_tw2_admin_back_to_dashboard(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_OverviewInputs */
var en_admin_nav_overview = () => {
	return `Overview`;
};
var zh_admin_nav_overview = () => {
	return `概览`;
};
/** @type {(inputs: Admin_Nav_OverviewInputs) => LocalizedString} */
var zh_tw2_admin_nav_overview = zh_admin_nav_overview;
/**
* | output |
* | --- |
* | "Overview" |
*
* @param {Admin_Nav_OverviewInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_nav_overview = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_nav_overview(inputs);
	if (locale === "zh") return zh_admin_nav_overview(inputs);
	return zh_tw2_admin_nav_overview(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_SettingsInputs */
var en_admin_nav_settings = () => {
	return `Settings`;
};
var zh_admin_nav_settings = () => {
	return `设置`;
};
/** @type {(inputs: Admin_Nav_SettingsInputs) => LocalizedString} */
var zh_tw2_admin_nav_settings = zh_admin_nav_settings;
/**
* | output |
* | --- |
* | "Settings" |
*
* @param {Admin_Nav_SettingsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_nav_settings = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_nav_settings(inputs);
	if (locale === "zh") return zh_admin_nav_settings(inputs);
	return zh_tw2_admin_nav_settings(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_RbacInputs */
var en_admin_nav_rbac = () => {
	return `RBAC`;
};
var zh_admin_nav_rbac = () => {
	return `权限管理`;
};
/** @type {(inputs: Admin_Nav_RbacInputs) => LocalizedString} */
var zh_tw2_admin_nav_rbac = zh_admin_nav_rbac;
/**
* | output |
* | --- |
* | "RBAC" |
*
* @param {Admin_Nav_RbacInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_nav_rbac = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_nav_rbac(inputs);
	if (locale === "zh") return zh_admin_nav_rbac(inputs);
	return zh_tw2_admin_nav_rbac(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_UsersInputs */
var en_admin_nav_users = () => {
	return `Users`;
};
var zh_admin_nav_users = () => {
	return `用户`;
};
/** @type {(inputs: Admin_Nav_UsersInputs) => LocalizedString} */
var zh_tw2_admin_nav_users = zh_admin_nav_users;
/**
* | output |
* | --- |
* | "Users" |
*
* @param {Admin_Nav_UsersInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_nav_users = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_nav_users(inputs);
	if (locale === "zh") return zh_admin_nav_users(inputs);
	return zh_tw2_admin_nav_users(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_RolesInputs */
var en_admin_nav_roles = () => {
	return `Roles`;
};
var zh_admin_nav_roles = () => {
	return `角色`;
};
/** @type {(inputs: Admin_Nav_RolesInputs) => LocalizedString} */
var zh_tw2_admin_nav_roles = zh_admin_nav_roles;
/**
* | output |
* | --- |
* | "Roles" |
*
* @param {Admin_Nav_RolesInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_nav_roles = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_nav_roles(inputs);
	if (locale === "zh") return zh_admin_nav_roles(inputs);
	return zh_tw2_admin_nav_roles(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_PermissionsInputs */
var en_admin_nav_permissions = () => {
	return `Permissions`;
};
var zh_admin_nav_permissions = () => {
	return `权限`;
};
/** @type {(inputs: Admin_Nav_PermissionsInputs) => LocalizedString} */
var zh_tw2_admin_nav_permissions = zh_admin_nav_permissions;
/**
* | output |
* | --- |
* | "Permissions" |
*
* @param {Admin_Nav_PermissionsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_nav_permissions = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_nav_permissions(inputs);
	if (locale === "zh") return zh_admin_nav_permissions(inputs);
	return zh_tw2_admin_nav_permissions(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_ContentInputs */
var en_admin_nav_content = () => {
	return `Content`;
};
var zh_admin_nav_content = () => {
	return `内容管理`;
};
/** @type {(inputs: Admin_Nav_ContentInputs) => LocalizedString} */
var zh_tw2_admin_nav_content = zh_admin_nav_content;
/**
* | output |
* | --- |
* | "Content" |
*
* @param {Admin_Nav_ContentInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_nav_content = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_nav_content(inputs);
	if (locale === "zh") return zh_admin_nav_content(inputs);
	return zh_tw2_admin_nav_content(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_CategoriesInputs */
var en_admin_nav_categories = () => {
	return `Categories`;
};
var zh_admin_nav_categories = () => {
	return `分类`;
};
/** @type {(inputs: Admin_Nav_CategoriesInputs) => LocalizedString} */
var zh_tw2_admin_nav_categories = zh_admin_nav_categories;
/**
* | output |
* | --- |
* | "Categories" |
*
* @param {Admin_Nav_CategoriesInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_nav_categories = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_nav_categories(inputs);
	if (locale === "zh") return zh_admin_nav_categories(inputs);
	return zh_tw2_admin_nav_categories(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_PostsInputs */
var en_admin_nav_posts = () => {
	return `Posts`;
};
var zh_admin_nav_posts = () => {
	return `文章`;
};
/** @type {(inputs: Admin_Nav_PostsInputs) => LocalizedString} */
var zh_tw2_admin_nav_posts = zh_admin_nav_posts;
/**
* | output |
* | --- |
* | "Posts" |
*
* @param {Admin_Nav_PostsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_nav_posts = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_nav_posts(inputs);
	if (locale === "zh") return zh_admin_nav_posts(inputs);
	return zh_tw2_admin_nav_posts(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_BillingInputs */
var en_admin_nav_billing = () => {
	return `Payments & Credits`;
};
var zh_admin_nav_billing = () => {
	return `支付与积分`;
};
/** @type {(inputs: Admin_Nav_BillingInputs) => LocalizedString} */
var zh_tw2_admin_nav_billing = zh_admin_nav_billing;
/**
* | output |
* | --- |
* | "Payments & Credits" |
*
* @param {Admin_Nav_BillingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_nav_billing = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_nav_billing(inputs);
	if (locale === "zh") return zh_admin_nav_billing(inputs);
	return zh_tw2_admin_nav_billing(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_PaymentsInputs */
var en_admin_nav_payments = () => {
	return `Payments`;
};
var zh_admin_nav_payments = () => {
	return `支付`;
};
/** @type {(inputs: Admin_Nav_PaymentsInputs) => LocalizedString} */
var zh_tw2_admin_nav_payments = zh_admin_nav_payments;
/**
* | output |
* | --- |
* | "Payments" |
*
* @param {Admin_Nav_PaymentsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_nav_payments = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_nav_payments(inputs);
	if (locale === "zh") return zh_admin_nav_payments(inputs);
	return zh_tw2_admin_nav_payments(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_SubscriptionsInputs */
var en_admin_nav_subscriptions = () => {
	return `Subscriptions`;
};
var zh_admin_nav_subscriptions = () => {
	return `订阅`;
};
/** @type {(inputs: Admin_Nav_SubscriptionsInputs) => LocalizedString} */
var zh_tw2_admin_nav_subscriptions = zh_admin_nav_subscriptions;
/**
* | output |
* | --- |
* | "Subscriptions" |
*
* @param {Admin_Nav_SubscriptionsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_nav_subscriptions = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_nav_subscriptions(inputs);
	if (locale === "zh") return zh_admin_nav_subscriptions(inputs);
	return zh_tw2_admin_nav_subscriptions(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_CreditsInputs */
var en_admin_nav_credits = () => {
	return `Credits`;
};
var zh_admin_nav_credits = () => {
	return `积分`;
};
/** @type {(inputs: Admin_Nav_CreditsInputs) => LocalizedString} */
var zh_tw2_admin_nav_credits = zh_admin_nav_credits;
/**
* | output |
* | --- |
* | "Credits" |
*
* @param {Admin_Nav_CreditsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_nav_credits = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_nav_credits(inputs);
	if (locale === "zh") return zh_admin_nav_credits(inputs);
	return zh_tw2_admin_nav_credits(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_Invite_CodesInputs */
var en_admin_nav_invite_codes = () => {
	return `Invite Codes`;
};
var zh_admin_nav_invite_codes = () => {
	return `邀请码`;
};
/** @type {(inputs: Admin_Nav_Invite_CodesInputs) => LocalizedString} */
var zh_tw2_admin_nav_invite_codes = zh_admin_nav_invite_codes;
/**
* | output |
* | --- |
* | "Invite Codes" |
*
* @param {Admin_Nav_Invite_CodesInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_nav_invite_codes = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_nav_invite_codes(inputs);
	if (locale === "zh") return zh_admin_nav_invite_codes(inputs);
	return zh_tw2_admin_nav_invite_codes(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_TicketsInputs */
var en_admin_nav_tickets = () => {
	return `Tickets`;
};
var zh_admin_nav_tickets = () => {
	return `工单管理`;
};
/** @type {(inputs: Admin_Nav_TicketsInputs) => LocalizedString} */
var zh_tw2_admin_nav_tickets = zh_admin_nav_tickets;
/**
* | output |
* | --- |
* | "Tickets" |
*
* @param {Admin_Nav_TicketsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_nav_tickets = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_nav_tickets(inputs);
	if (locale === "zh") return zh_admin_nav_tickets(inputs);
	return zh_tw2_admin_nav_tickets(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Nav_SupportInputs */
var en_admin_nav_support = () => {
	return `Support`;
};
var zh_admin_nav_support = () => {
	return `客户支持`;
};
/** @type {(inputs: Admin_Nav_SupportInputs) => LocalizedString} */
var zh_tw2_admin_nav_support = zh_admin_nav_support;
/**
* | output |
* | --- |
* | "Support" |
*
* @param {Admin_Nav_SupportInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_nav_support = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_nav_support(inputs);
	if (locale === "zh") return zh_admin_nav_support(inputs);
	return zh_tw2_admin_nav_support(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Stats_Total_UsersInputs */
var en_admin_stats_total_users = () => {
	return `Total Users`;
};
var zh_admin_stats_total_users = () => {
	return `总用户数`;
};
/** @type {(inputs: Admin_Stats_Total_UsersInputs) => LocalizedString} */
var zh_tw2_admin_stats_total_users = zh_admin_stats_total_users;
/**
* | output |
* | --- |
* | "Total Users" |
*
* @param {Admin_Stats_Total_UsersInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_stats_total_users = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_stats_total_users(inputs);
	if (locale === "zh") return zh_admin_stats_total_users(inputs);
	return zh_tw2_admin_stats_total_users(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Stats_RolesInputs */
var en_admin_stats_roles = () => {
	return `Roles`;
};
var zh_admin_stats_roles = () => {
	return `角色数`;
};
/** @type {(inputs: Admin_Stats_RolesInputs) => LocalizedString} */
var zh_tw2_admin_stats_roles = zh_admin_stats_roles;
/**
* | output |
* | --- |
* | "Roles" |
*
* @param {Admin_Stats_RolesInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_stats_roles = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_stats_roles(inputs);
	if (locale === "zh") return zh_admin_stats_roles(inputs);
	return zh_tw2_admin_stats_roles(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_TitleInputs */
var en_admin_users_title = () => {
	return `Users`;
};
var zh_admin_users_title = () => {
	return `用户管理`;
};
/** @type {(inputs: Admin_Users_TitleInputs) => LocalizedString} */
var zh_tw2_admin_users_title = zh_admin_users_title;
/**
* | output |
* | --- |
* | "Users" |
*
* @param {Admin_Users_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_title(inputs);
	if (locale === "zh") return zh_admin_users_title(inputs);
	return zh_tw2_admin_users_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_DescriptionInputs */
var en_admin_users_description = () => {
	return `Manage all registered users`;
};
var zh_admin_users_description = () => {
	return `管理所有注册用户`;
};
/** @type {(inputs: Admin_Users_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_users_description = zh_admin_users_description;
/**
* | output |
* | --- |
* | "Manage all registered users" |
*
* @param {Admin_Users_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_description(inputs);
	if (locale === "zh") return zh_admin_users_description(inputs);
	return zh_tw2_admin_users_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_All_UsersInputs */
var en_admin_users_all_users = () => {
	return `All Users`;
};
var zh_admin_users_all_users = () => {
	return `所有用户`;
};
/** @type {(inputs: Admin_Users_All_UsersInputs) => LocalizedString} */
var zh_tw2_admin_users_all_users = zh_admin_users_all_users;
/**
* | output |
* | --- |
* | "All Users" |
*
* @param {Admin_Users_All_UsersInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_all_users = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_all_users(inputs);
	if (locale === "zh") return zh_admin_users_all_users(inputs);
	return zh_tw2_admin_users_all_users(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ count: NonNullable<unknown> }} Admin_Users_CountInputs */
var en_admin_users_count = (i) => {
	return `${i?.count} users registered`;
};
var zh_admin_users_count = (i) => {
	return `共 ${i?.count} 个注册用户`;
};
/** @type {(inputs: Admin_Users_CountInputs) => LocalizedString} */
var zh_tw2_admin_users_count = zh_admin_users_count;
/**
* | output |
* | --- |
* | "{count} users registered" |
*
* @param {Admin_Users_CountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_count = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_count(inputs);
	if (locale === "zh") return zh_admin_users_count(inputs);
	return zh_tw2_admin_users_count(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_No_UsersInputs */
var en_admin_users_no_users = () => {
	return `No users yet`;
};
var zh_admin_users_no_users = () => {
	return `暂无用户`;
};
/** @type {(inputs: Admin_Users_No_UsersInputs) => LocalizedString} */
var zh_tw2_admin_users_no_users = zh_admin_users_no_users;
/**
* | output |
* | --- |
* | "No users yet" |
*
* @param {Admin_Users_No_UsersInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_no_users = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_no_users(inputs);
	if (locale === "zh") return zh_admin_users_no_users(inputs);
	return zh_tw2_admin_users_no_users(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_User_ColInputs */
var en_admin_users_user_col = () => {
	return `User`;
};
var zh_admin_users_user_col = () => {
	return `用户`;
};
/** @type {(inputs: Admin_Users_User_ColInputs) => LocalizedString} */
var zh_tw2_admin_users_user_col = zh_admin_users_user_col;
/**
* | output |
* | --- |
* | "User" |
*
* @param {Admin_Users_User_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_user_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_user_col(inputs);
	if (locale === "zh") return zh_admin_users_user_col(inputs);
	return zh_tw2_admin_users_user_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Email_ColInputs */
var en_admin_users_email_col = () => {
	return `Email`;
};
var zh_admin_users_email_col = () => {
	return `邮箱`;
};
/** @type {(inputs: Admin_Users_Email_ColInputs) => LocalizedString} */
var zh_tw2_admin_users_email_col = zh_admin_users_email_col;
/**
* | output |
* | --- |
* | "Email" |
*
* @param {Admin_Users_Email_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_email_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_email_col(inputs);
	if (locale === "zh") return zh_admin_users_email_col(inputs);
	return zh_tw2_admin_users_email_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Source_ColInputs */
var en_admin_users_source_col = () => {
	return `Source`;
};
var zh_admin_users_source_col = () => {
	return `来源`;
};
/** @type {(inputs: Admin_Users_Source_ColInputs) => LocalizedString} */
var zh_tw2_admin_users_source_col = zh_admin_users_source_col;
/**
* | output |
* | --- |
* | "Source" |
*
* @param {Admin_Users_Source_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_source_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_source_col(inputs);
	if (locale === "zh") return zh_admin_users_source_col(inputs);
	return zh_tw2_admin_users_source_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Ip_ColInputs */
var en_admin_users_ip_col = () => {
	return `Sign-up IP`;
};
var zh_admin_users_ip_col = () => {
	return `注册 IP`;
};
/** @type {(inputs: Admin_Users_Ip_ColInputs) => LocalizedString} */
var zh_tw2_admin_users_ip_col = zh_admin_users_ip_col;
/**
* | output |
* | --- |
* | "Sign-up IP" |
*
* @param {Admin_Users_Ip_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_ip_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_ip_col(inputs);
	if (locale === "zh") return zh_admin_users_ip_col(inputs);
	return zh_tw2_admin_users_ip_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Credits_ColInputs */
var en_admin_users_credits_col = () => {
	return `Credits`;
};
var zh_admin_users_credits_col = () => {
	return `积分`;
};
/** @type {(inputs: Admin_Users_Credits_ColInputs) => LocalizedString} */
var zh_tw2_admin_users_credits_col = zh_admin_users_credits_col;
/**
* | output |
* | --- |
* | "Credits" |
*
* @param {Admin_Users_Credits_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_credits_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_credits_col(inputs);
	if (locale === "zh") return zh_admin_users_credits_col(inputs);
	return zh_tw2_admin_users_credits_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Joined_ColInputs */
var en_admin_users_joined_col = () => {
	return `Joined`;
};
var zh_admin_users_joined_col = () => {
	return `注册时间`;
};
/** @type {(inputs: Admin_Users_Joined_ColInputs) => LocalizedString} */
var zh_tw2_admin_users_joined_col = zh_admin_users_joined_col;
/**
* | output |
* | --- |
* | "Joined" |
*
* @param {Admin_Users_Joined_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_joined_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_joined_col(inputs);
	if (locale === "zh") return zh_admin_users_joined_col(inputs);
	return zh_tw2_admin_users_joined_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Actions_ColInputs */
var en_admin_users_actions_col = () => {
	return `Actions`;
};
var zh_admin_users_actions_col = () => {
	return `操作`;
};
/** @type {(inputs: Admin_Users_Actions_ColInputs) => LocalizedString} */
var zh_tw2_admin_users_actions_col = zh_admin_users_actions_col;
/**
* | output |
* | --- |
* | "Actions" |
*
* @param {Admin_Users_Actions_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_actions_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_actions_col(inputs);
	if (locale === "zh") return zh_admin_users_actions_col(inputs);
	return zh_tw2_admin_users_actions_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Manage_RolesInputs */
var en_admin_users_manage_roles = () => {
	return `Manage Roles`;
};
var zh_admin_users_manage_roles = () => {
	return `管理角色`;
};
/** @type {(inputs: Admin_Users_Manage_RolesInputs) => LocalizedString} */
var zh_tw2_admin_users_manage_roles = zh_admin_users_manage_roles;
/**
* | output |
* | --- |
* | "Manage Roles" |
*
* @param {Admin_Users_Manage_RolesInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_manage_roles = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_manage_roles(inputs);
	if (locale === "zh") return zh_admin_users_manage_roles(inputs);
	return zh_tw2_admin_users_manage_roles(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Manage_Roles_TitleInputs */
var en_admin_users_manage_roles_title = () => {
	return `Manage User Roles`;
};
var zh_admin_users_manage_roles_title = () => {
	return `管理用户角色`;
};
/** @type {(inputs: Admin_Users_Manage_Roles_TitleInputs) => LocalizedString} */
var zh_tw2_admin_users_manage_roles_title = zh_admin_users_manage_roles_title;
/**
* | output |
* | --- |
* | "Manage User Roles" |
*
* @param {Admin_Users_Manage_Roles_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_manage_roles_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_manage_roles_title(inputs);
	if (locale === "zh") return zh_admin_users_manage_roles_title(inputs);
	return zh_tw2_admin_users_manage_roles_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Manage_Roles_DescriptionInputs */
var en_admin_users_manage_roles_description = () => {
	return `Assign or remove roles for this user`;
};
var zh_admin_users_manage_roles_description = () => {
	return `为此用户分配或移除角色`;
};
/** @type {(inputs: Admin_Users_Manage_Roles_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_users_manage_roles_description = zh_admin_users_manage_roles_description;
/**
* | output |
* | --- |
* | "Assign or remove roles for this user" |
*
* @param {Admin_Users_Manage_Roles_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_manage_roles_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_manage_roles_description(inputs);
	if (locale === "zh") return zh_admin_users_manage_roles_description(inputs);
	return zh_tw2_admin_users_manage_roles_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Role_AssignedInputs */
var en_admin_users_role_assigned = () => {
	return `Role assigned`;
};
var zh_admin_users_role_assigned = () => {
	return `角色已分配`;
};
/** @type {(inputs: Admin_Users_Role_AssignedInputs) => LocalizedString} */
var zh_tw2_admin_users_role_assigned = zh_admin_users_role_assigned;
/**
* | output |
* | --- |
* | "Role assigned" |
*
* @param {Admin_Users_Role_AssignedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_role_assigned = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_role_assigned(inputs);
	if (locale === "zh") return zh_admin_users_role_assigned(inputs);
	return zh_tw2_admin_users_role_assigned(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Role_RemovedInputs */
var en_admin_users_role_removed = () => {
	return `Role removed`;
};
var zh_admin_users_role_removed = () => {
	return `角色已移除`;
};
/** @type {(inputs: Admin_Users_Role_RemovedInputs) => LocalizedString} */
var zh_tw2_admin_users_role_removed = zh_admin_users_role_removed;
/**
* | output |
* | --- |
* | "Role removed" |
*
* @param {Admin_Users_Role_RemovedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_role_removed = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_role_removed(inputs);
	if (locale === "zh") return zh_admin_users_role_removed(inputs);
	return zh_tw2_admin_users_role_removed(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Manage_Credits_TitleInputs */
var en_admin_users_manage_credits_title = () => {
	return `Manage Credits`;
};
var zh_admin_users_manage_credits_title = () => {
	return `管理积分`;
};
/** @type {(inputs: Admin_Users_Manage_Credits_TitleInputs) => LocalizedString} */
var zh_tw2_admin_users_manage_credits_title = zh_admin_users_manage_credits_title;
/**
* | output |
* | --- |
* | "Manage Credits" |
*
* @param {Admin_Users_Manage_Credits_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_manage_credits_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_manage_credits_title(inputs);
	if (locale === "zh") return zh_admin_users_manage_credits_title(inputs);
	return zh_tw2_admin_users_manage_credits_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ name: NonNullable<unknown>, balance: NonNullable<unknown> }} Admin_Users_Manage_Credits_ForInputs */
var en_admin_users_manage_credits_for = (i) => {
	return `${i?.name} — current balance: ${i?.balance}`;
};
var zh_admin_users_manage_credits_for = (i) => {
	return `${i?.name} — 当前余额：${i?.balance}`;
};
/** @type {(inputs: Admin_Users_Manage_Credits_ForInputs) => LocalizedString} */
var zh_tw2_admin_users_manage_credits_for = zh_admin_users_manage_credits_for;
/**
* | output |
* | --- |
* | "{name} — current balance: {balance}" |
*
* @param {Admin_Users_Manage_Credits_ForInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_manage_credits_for = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_manage_credits_for(inputs);
	if (locale === "zh") return zh_admin_users_manage_credits_for(inputs);
	return zh_tw2_admin_users_manage_credits_for(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Credits_Action_GrantInputs */
var en_admin_users_credits_action_grant = () => {
	return `Grant`;
};
var zh_admin_users_credits_action_grant = () => {
	return `授予`;
};
/** @type {(inputs: Admin_Users_Credits_Action_GrantInputs) => LocalizedString} */
var zh_tw2_admin_users_credits_action_grant = zh_admin_users_credits_action_grant;
/**
* | output |
* | --- |
* | "Grant" |
*
* @param {Admin_Users_Credits_Action_GrantInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_credits_action_grant = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_credits_action_grant(inputs);
	if (locale === "zh") return zh_admin_users_credits_action_grant(inputs);
	return zh_tw2_admin_users_credits_action_grant(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Credits_Action_DeductInputs */
var en_admin_users_credits_action_deduct = () => {
	return `Deduct`;
};
var zh_admin_users_credits_action_deduct = () => {
	return `扣除`;
};
/** @type {(inputs: Admin_Users_Credits_Action_DeductInputs) => LocalizedString} */
var zh_tw2_admin_users_credits_action_deduct = zh_admin_users_credits_action_deduct;
/**
* | output |
* | --- |
* | "Deduct" |
*
* @param {Admin_Users_Credits_Action_DeductInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_credits_action_deduct = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_credits_action_deduct(inputs);
	if (locale === "zh") return zh_admin_users_credits_action_deduct(inputs);
	return zh_tw2_admin_users_credits_action_deduct(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Credits_Amount_LabelInputs */
var en_admin_users_credits_amount_label = () => {
	return `Amount`;
};
var zh_admin_users_credits_amount_label = () => {
	return `数量`;
};
/** @type {(inputs: Admin_Users_Credits_Amount_LabelInputs) => LocalizedString} */
var zh_tw2_admin_users_credits_amount_label = zh_admin_users_credits_amount_label;
/**
* | output |
* | --- |
* | "Amount" |
*
* @param {Admin_Users_Credits_Amount_LabelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_credits_amount_label = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_credits_amount_label(inputs);
	if (locale === "zh") return zh_admin_users_credits_amount_label(inputs);
	return zh_tw2_admin_users_credits_amount_label(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Credits_Desc_LabelInputs */
var en_admin_users_credits_desc_label = () => {
	return `Description`;
};
var zh_admin_users_credits_desc_label = () => {
	return `备注`;
};
/** @type {(inputs: Admin_Users_Credits_Desc_LabelInputs) => LocalizedString} */
var zh_tw2_admin_users_credits_desc_label = zh_admin_users_credits_desc_label;
/**
* | output |
* | --- |
* | "Description" |
*
* @param {Admin_Users_Credits_Desc_LabelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_credits_desc_label = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_credits_desc_label(inputs);
	if (locale === "zh") return zh_admin_users_credits_desc_label(inputs);
	return zh_tw2_admin_users_credits_desc_label(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Credits_Desc_PlaceholderInputs */
var en_admin_users_credits_desc_placeholder = () => {
	return `Optional reason`;
};
var zh_admin_users_credits_desc_placeholder = () => {
	return `操作原因（可选）`;
};
/** @type {(inputs: Admin_Users_Credits_Desc_PlaceholderInputs) => LocalizedString} */
var zh_tw2_admin_users_credits_desc_placeholder = zh_admin_users_credits_desc_placeholder;
/**
* | output |
* | --- |
* | "Optional reason" |
*
* @param {Admin_Users_Credits_Desc_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_credits_desc_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_credits_desc_placeholder(inputs);
	if (locale === "zh") return zh_admin_users_credits_desc_placeholder(inputs);
	return zh_tw2_admin_users_credits_desc_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Credits_SubmitInputs */
var en_admin_users_credits_submit = () => {
	return `Confirm`;
};
var zh_admin_users_credits_submit = () => {
	return `确认`;
};
/** @type {(inputs: Admin_Users_Credits_SubmitInputs) => LocalizedString} */
var zh_tw2_admin_users_credits_submit = zh_admin_users_credits_submit;
/**
* | output |
* | --- |
* | "Confirm" |
*
* @param {Admin_Users_Credits_SubmitInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_credits_submit = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_credits_submit(inputs);
	if (locale === "zh") return zh_admin_users_credits_submit(inputs);
	return zh_tw2_admin_users_credits_submit(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Credits_SubmittingInputs */
var en_admin_users_credits_submitting = () => {
	return `Submitting...`;
};
var zh_admin_users_credits_submitting = () => {
	return `提交中...`;
};
/** @type {(inputs: Admin_Users_Credits_SubmittingInputs) => LocalizedString} */
var zh_tw2_admin_users_credits_submitting = zh_admin_users_credits_submitting;
/**
* | output |
* | --- |
* | "Submitting..." |
*
* @param {Admin_Users_Credits_SubmittingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_credits_submitting = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_credits_submitting(inputs);
	if (locale === "zh") return zh_admin_users_credits_submitting(inputs);
	return zh_tw2_admin_users_credits_submitting(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Credits_Invalid_AmountInputs */
var en_admin_users_credits_invalid_amount = () => {
	return `Enter a positive amount`;
};
var zh_admin_users_credits_invalid_amount = () => {
	return `请输入正数`;
};
/** @type {(inputs: Admin_Users_Credits_Invalid_AmountInputs) => LocalizedString} */
var zh_tw2_admin_users_credits_invalid_amount = zh_admin_users_credits_invalid_amount;
/**
* | output |
* | --- |
* | "Enter a positive amount" |
*
* @param {Admin_Users_Credits_Invalid_AmountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_credits_invalid_amount = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_credits_invalid_amount(inputs);
	if (locale === "zh") return zh_admin_users_credits_invalid_amount(inputs);
	return zh_tw2_admin_users_credits_invalid_amount(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Credits_GrantedInputs */
var en_admin_users_credits_granted = () => {
	return `Credits granted`;
};
var zh_admin_users_credits_granted = () => {
	return `积分已授予`;
};
/** @type {(inputs: Admin_Users_Credits_GrantedInputs) => LocalizedString} */
var zh_tw2_admin_users_credits_granted = zh_admin_users_credits_granted;
/**
* | output |
* | --- |
* | "Credits granted" |
*
* @param {Admin_Users_Credits_GrantedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_credits_granted = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_credits_granted(inputs);
	if (locale === "zh") return zh_admin_users_credits_granted(inputs);
	return zh_tw2_admin_users_credits_granted(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Users_Credits_DeductedInputs */
var en_admin_users_credits_deducted = () => {
	return `Credits deducted`;
};
var zh_admin_users_credits_deducted = () => {
	return `积分已扣除`;
};
/** @type {(inputs: Admin_Users_Credits_DeductedInputs) => LocalizedString} */
var zh_tw2_admin_users_credits_deducted = zh_admin_users_credits_deducted;
/**
* | output |
* | --- |
* | "Credits deducted" |
*
* @param {Admin_Users_Credits_DeductedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_users_credits_deducted = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_users_credits_deducted(inputs);
	if (locale === "zh") return zh_admin_users_credits_deducted(inputs);
	return zh_tw2_admin_users_credits_deducted(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_TitleInputs */
var en_admin_roles_title = () => {
	return `Roles`;
};
var zh_admin_roles_title = () => {
	return `角色管理`;
};
/** @type {(inputs: Admin_Roles_TitleInputs) => LocalizedString} */
var zh_tw2_admin_roles_title = zh_admin_roles_title;
/**
* | output |
* | --- |
* | "Roles" |
*
* @param {Admin_Roles_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_title(inputs);
	if (locale === "zh") return zh_admin_roles_title(inputs);
	return zh_tw2_admin_roles_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_DescriptionInputs */
var en_admin_roles_description = () => {
	return `Manage system roles and permissions`;
};
var zh_admin_roles_description = () => {
	return `管理系统角色和权限`;
};
/** @type {(inputs: Admin_Roles_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_roles_description = zh_admin_roles_description;
/**
* | output |
* | --- |
* | "Manage system roles and permissions" |
*
* @param {Admin_Roles_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_description(inputs);
	if (locale === "zh") return zh_admin_roles_description(inputs);
	return zh_tw2_admin_roles_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_All_RolesInputs */
var en_admin_roles_all_roles = () => {
	return `All Roles`;
};
var zh_admin_roles_all_roles = () => {
	return `所有角色`;
};
/** @type {(inputs: Admin_Roles_All_RolesInputs) => LocalizedString} */
var zh_tw2_admin_roles_all_roles = zh_admin_roles_all_roles;
/**
* | output |
* | --- |
* | "All Roles" |
*
* @param {Admin_Roles_All_RolesInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_all_roles = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_all_roles(inputs);
	if (locale === "zh") return zh_admin_roles_all_roles(inputs);
	return zh_tw2_admin_roles_all_roles(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ count: NonNullable<unknown> }} Admin_Roles_CountInputs */
var en_admin_roles_count = (i) => {
	return `${i?.count} roles defined`;
};
var zh_admin_roles_count = (i) => {
	return `共 ${i?.count} 个角色`;
};
/** @type {(inputs: Admin_Roles_CountInputs) => LocalizedString} */
var zh_tw2_admin_roles_count = zh_admin_roles_count;
/**
* | output |
* | --- |
* | "{count} roles defined" |
*
* @param {Admin_Roles_CountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_count = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_count(inputs);
	if (locale === "zh") return zh_admin_roles_count(inputs);
	return zh_tw2_admin_roles_count(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_No_RolesInputs */
var en_admin_roles_no_roles = () => {
	return `No roles defined yet`;
};
var zh_admin_roles_no_roles = () => {
	return `暂未定义角色`;
};
/** @type {(inputs: Admin_Roles_No_RolesInputs) => LocalizedString} */
var zh_tw2_admin_roles_no_roles = zh_admin_roles_no_roles;
/**
* | output |
* | --- |
* | "No roles defined yet" |
*
* @param {Admin_Roles_No_RolesInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_no_roles = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_no_roles(inputs);
	if (locale === "zh") return zh_admin_roles_no_roles(inputs);
	return zh_tw2_admin_roles_no_roles(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Name_ColInputs */
var en_admin_roles_name_col = () => {
	return `Name`;
};
var zh_admin_roles_name_col = () => {
	return `名称`;
};
/** @type {(inputs: Admin_Roles_Name_ColInputs) => LocalizedString} */
var zh_tw2_admin_roles_name_col = zh_admin_roles_name_col;
/**
* | output |
* | --- |
* | "Name" |
*
* @param {Admin_Roles_Name_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_name_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_name_col(inputs);
	if (locale === "zh") return zh_admin_roles_name_col(inputs);
	return zh_tw2_admin_roles_name_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Title_ColInputs */
var en_admin_roles_title_col = () => {
	return `Title`;
};
var zh_admin_roles_title_col = () => {
	return `标题`;
};
/** @type {(inputs: Admin_Roles_Title_ColInputs) => LocalizedString} */
var zh_tw2_admin_roles_title_col = zh_admin_roles_title_col;
/**
* | output |
* | --- |
* | "Title" |
*
* @param {Admin_Roles_Title_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_title_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_title_col(inputs);
	if (locale === "zh") return zh_admin_roles_title_col(inputs);
	return zh_tw2_admin_roles_title_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Status_ColInputs */
var en_admin_roles_status_col = () => {
	return `Status`;
};
var zh_admin_roles_status_col = () => {
	return `状态`;
};
/** @type {(inputs: Admin_Roles_Status_ColInputs) => LocalizedString} */
var zh_tw2_admin_roles_status_col = zh_admin_roles_status_col;
/**
* | output |
* | --- |
* | "Status" |
*
* @param {Admin_Roles_Status_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_status_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_status_col(inputs);
	if (locale === "zh") return zh_admin_roles_status_col(inputs);
	return zh_tw2_admin_roles_status_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Description_ColInputs */
var en_admin_roles_description_col = () => {
	return `Description`;
};
var zh_admin_roles_description_col = () => {
	return `描述`;
};
/** @type {(inputs: Admin_Roles_Description_ColInputs) => LocalizedString} */
var zh_tw2_admin_roles_description_col = zh_admin_roles_description_col;
/**
* | output |
* | --- |
* | "Description" |
*
* @param {Admin_Roles_Description_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_description_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_description_col(inputs);
	if (locale === "zh") return zh_admin_roles_description_col(inputs);
	return zh_tw2_admin_roles_description_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Actions_ColInputs */
var en_admin_roles_actions_col = () => {
	return `Actions`;
};
var zh_admin_roles_actions_col = () => {
	return `操作`;
};
/** @type {(inputs: Admin_Roles_Actions_ColInputs) => LocalizedString} */
var zh_tw2_admin_roles_actions_col = zh_admin_roles_actions_col;
/**
* | output |
* | --- |
* | "Actions" |
*
* @param {Admin_Roles_Actions_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_actions_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_actions_col(inputs);
	if (locale === "zh") return zh_admin_roles_actions_col(inputs);
	return zh_tw2_admin_roles_actions_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Create_RoleInputs */
var en_admin_roles_create_role = () => {
	return `Create Role`;
};
var zh_admin_roles_create_role = () => {
	return `创建角色`;
};
/** @type {(inputs: Admin_Roles_Create_RoleInputs) => LocalizedString} */
var zh_tw2_admin_roles_create_role = zh_admin_roles_create_role;
/**
* | output |
* | --- |
* | "Create Role" |
*
* @param {Admin_Roles_Create_RoleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_create_role = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_create_role(inputs);
	if (locale === "zh") return zh_admin_roles_create_role(inputs);
	return zh_tw2_admin_roles_create_role(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Create_TitleInputs */
var en_admin_roles_create_title = () => {
	return `Create New Role`;
};
var zh_admin_roles_create_title = () => {
	return `创建新角色`;
};
/** @type {(inputs: Admin_Roles_Create_TitleInputs) => LocalizedString} */
var zh_tw2_admin_roles_create_title = zh_admin_roles_create_title;
/**
* | output |
* | --- |
* | "Create New Role" |
*
* @param {Admin_Roles_Create_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_create_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_create_title(inputs);
	if (locale === "zh") return zh_admin_roles_create_title(inputs);
	return zh_tw2_admin_roles_create_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Create_DescriptionInputs */
var en_admin_roles_create_description = () => {
	return `Define a new system role`;
};
var zh_admin_roles_create_description = () => {
	return `定义一个新的系统角色`;
};
/** @type {(inputs: Admin_Roles_Create_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_roles_create_description = zh_admin_roles_create_description;
/**
* | output |
* | --- |
* | "Define a new system role" |
*
* @param {Admin_Roles_Create_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_create_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_create_description(inputs);
	if (locale === "zh") return zh_admin_roles_create_description(inputs);
	return zh_tw2_admin_roles_create_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Edit_TitleInputs */
var en_admin_roles_edit_title = () => {
	return `Edit Role`;
};
var zh_admin_roles_edit_title = () => {
	return `编辑角色`;
};
/** @type {(inputs: Admin_Roles_Edit_TitleInputs) => LocalizedString} */
var zh_tw2_admin_roles_edit_title = zh_admin_roles_edit_title;
/**
* | output |
* | --- |
* | "Edit Role" |
*
* @param {Admin_Roles_Edit_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_edit_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_edit_title(inputs);
	if (locale === "zh") return zh_admin_roles_edit_title(inputs);
	return zh_tw2_admin_roles_edit_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Edit_DescriptionInputs */
var en_admin_roles_edit_description = () => {
	return `Update role details`;
};
var zh_admin_roles_edit_description = () => {
	return `更新角色信息`;
};
/** @type {(inputs: Admin_Roles_Edit_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_roles_edit_description = zh_admin_roles_edit_description;
/**
* | output |
* | --- |
* | "Update role details" |
*
* @param {Admin_Roles_Edit_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_edit_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_edit_description(inputs);
	if (locale === "zh") return zh_admin_roles_edit_description(inputs);
	return zh_tw2_admin_roles_edit_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Delete_TitleInputs */
var en_admin_roles_delete_title = () => {
	return `Delete Role`;
};
var zh_admin_roles_delete_title = () => {
	return `删除角色`;
};
/** @type {(inputs: Admin_Roles_Delete_TitleInputs) => LocalizedString} */
var zh_tw2_admin_roles_delete_title = zh_admin_roles_delete_title;
/**
* | output |
* | --- |
* | "Delete Role" |
*
* @param {Admin_Roles_Delete_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_delete_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_delete_title(inputs);
	if (locale === "zh") return zh_admin_roles_delete_title(inputs);
	return zh_tw2_admin_roles_delete_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Delete_ConfirmInputs */
var en_admin_roles_delete_confirm = () => {
	return `Are you sure you want to delete this role? This will deactivate it.`;
};
var zh_admin_roles_delete_confirm = () => {
	return `确定要删除此角色吗？该角色将被停用。`;
};
/** @type {(inputs: Admin_Roles_Delete_ConfirmInputs) => LocalizedString} */
var zh_tw2_admin_roles_delete_confirm = zh_admin_roles_delete_confirm;
/**
* | output |
* | --- |
* | "Are you sure you want to delete this role? This will deactivate it." |
*
* @param {Admin_Roles_Delete_ConfirmInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_delete_confirm = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_delete_confirm(inputs);
	if (locale === "zh") return zh_admin_roles_delete_confirm(inputs);
	return zh_tw2_admin_roles_delete_confirm(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Name_FieldInputs */
var en_admin_roles_name_field = () => {
	return `Name`;
};
var zh_admin_roles_name_field = () => {
	return `名称`;
};
/** @type {(inputs: Admin_Roles_Name_FieldInputs) => LocalizedString} */
var zh_tw2_admin_roles_name_field = zh_admin_roles_name_field;
/**
* | output |
* | --- |
* | "Name" |
*
* @param {Admin_Roles_Name_FieldInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_name_field = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_name_field(inputs);
	if (locale === "zh") return zh_admin_roles_name_field(inputs);
	return zh_tw2_admin_roles_name_field(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Name_PlaceholderInputs */
var en_admin_roles_name_placeholder = () => {
	return `e.g. editor`;
};
var zh_admin_roles_name_placeholder = () => {
	return `例如 editor`;
};
/** @type {(inputs: Admin_Roles_Name_PlaceholderInputs) => LocalizedString} */
var zh_tw2_admin_roles_name_placeholder = zh_admin_roles_name_placeholder;
/**
* | output |
* | --- |
* | "e.g. editor" |
*
* @param {Admin_Roles_Name_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_name_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_name_placeholder(inputs);
	if (locale === "zh") return zh_admin_roles_name_placeholder(inputs);
	return zh_tw2_admin_roles_name_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Title_FieldInputs */
var en_admin_roles_title_field = () => {
	return `Title`;
};
var zh_admin_roles_title_field = () => {
	return `标题`;
};
/** @type {(inputs: Admin_Roles_Title_FieldInputs) => LocalizedString} */
var zh_tw2_admin_roles_title_field = zh_admin_roles_title_field;
/**
* | output |
* | --- |
* | "Title" |
*
* @param {Admin_Roles_Title_FieldInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_title_field = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_title_field(inputs);
	if (locale === "zh") return zh_admin_roles_title_field(inputs);
	return zh_tw2_admin_roles_title_field(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Title_PlaceholderInputs */
var en_admin_roles_title_placeholder = () => {
	return `e.g. Content Editor`;
};
var zh_admin_roles_title_placeholder = () => {
	return `例如 内容编辑`;
};
/** @type {(inputs: Admin_Roles_Title_PlaceholderInputs) => LocalizedString} */
var zh_tw2_admin_roles_title_placeholder = zh_admin_roles_title_placeholder;
/**
* | output |
* | --- |
* | "e.g. Content Editor" |
*
* @param {Admin_Roles_Title_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_title_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_title_placeholder(inputs);
	if (locale === "zh") return zh_admin_roles_title_placeholder(inputs);
	return zh_tw2_admin_roles_title_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Description_FieldInputs */
var en_admin_roles_description_field = () => {
	return `Description`;
};
var zh_admin_roles_description_field = () => {
	return `描述`;
};
/** @type {(inputs: Admin_Roles_Description_FieldInputs) => LocalizedString} */
var zh_tw2_admin_roles_description_field = zh_admin_roles_description_field;
/**
* | output |
* | --- |
* | "Description" |
*
* @param {Admin_Roles_Description_FieldInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_description_field = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_description_field(inputs);
	if (locale === "zh") return zh_admin_roles_description_field(inputs);
	return zh_tw2_admin_roles_description_field(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Description_PlaceholderInputs */
var en_admin_roles_description_placeholder = () => {
	return `Optional description`;
};
var zh_admin_roles_description_placeholder = () => {
	return `可选描述`;
};
/** @type {(inputs: Admin_Roles_Description_PlaceholderInputs) => LocalizedString} */
var zh_tw2_admin_roles_description_placeholder = zh_admin_roles_description_placeholder;
/**
* | output |
* | --- |
* | "Optional description" |
*
* @param {Admin_Roles_Description_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_description_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_description_placeholder(inputs);
	if (locale === "zh") return zh_admin_roles_description_placeholder(inputs);
	return zh_tw2_admin_roles_description_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_SaveInputs */
var en_admin_roles_save = () => {
	return `Save`;
};
var zh_admin_roles_save = () => {
	return `保存`;
};
/** @type {(inputs: Admin_Roles_SaveInputs) => LocalizedString} */
var zh_tw2_admin_roles_save = zh_admin_roles_save;
/**
* | output |
* | --- |
* | "Save" |
*
* @param {Admin_Roles_SaveInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_save = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_save(inputs);
	if (locale === "zh") return zh_admin_roles_save(inputs);
	return zh_tw2_admin_roles_save(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_CancelInputs */
var en_admin_roles_cancel = () => {
	return `Cancel`;
};
var zh_admin_roles_cancel = () => {
	return `取消`;
};
/** @type {(inputs: Admin_Roles_CancelInputs) => LocalizedString} */
var zh_tw2_admin_roles_cancel = zh_admin_roles_cancel;
/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Admin_Roles_CancelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_cancel = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_cancel(inputs);
	if (locale === "zh") return zh_admin_roles_cancel(inputs);
	return zh_tw2_admin_roles_cancel(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Confirm_DeleteInputs */
var en_admin_roles_confirm_delete = () => {
	return `Delete`;
};
var zh_admin_roles_confirm_delete = () => {
	return `删除`;
};
/** @type {(inputs: Admin_Roles_Confirm_DeleteInputs) => LocalizedString} */
var zh_tw2_admin_roles_confirm_delete = zh_admin_roles_confirm_delete;
/**
* | output |
* | --- |
* | "Delete" |
*
* @param {Admin_Roles_Confirm_DeleteInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_confirm_delete = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_confirm_delete(inputs);
	if (locale === "zh") return zh_admin_roles_confirm_delete(inputs);
	return zh_tw2_admin_roles_confirm_delete(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_CreatedInputs */
var en_admin_roles_created = () => {
	return `Role created`;
};
var zh_admin_roles_created = () => {
	return `角色已创建`;
};
/** @type {(inputs: Admin_Roles_CreatedInputs) => LocalizedString} */
var zh_tw2_admin_roles_created = zh_admin_roles_created;
/**
* | output |
* | --- |
* | "Role created" |
*
* @param {Admin_Roles_CreatedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_created = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_created(inputs);
	if (locale === "zh") return zh_admin_roles_created(inputs);
	return zh_tw2_admin_roles_created(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_UpdatedInputs */
var en_admin_roles_updated = () => {
	return `Role updated`;
};
var zh_admin_roles_updated = () => {
	return `角色已更新`;
};
/** @type {(inputs: Admin_Roles_UpdatedInputs) => LocalizedString} */
var zh_tw2_admin_roles_updated = zh_admin_roles_updated;
/**
* | output |
* | --- |
* | "Role updated" |
*
* @param {Admin_Roles_UpdatedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_updated = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_updated(inputs);
	if (locale === "zh") return zh_admin_roles_updated(inputs);
	return zh_tw2_admin_roles_updated(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_DeletedInputs */
var en_admin_roles_deleted = () => {
	return `Role deleted`;
};
var zh_admin_roles_deleted = () => {
	return `角色已删除`;
};
/** @type {(inputs: Admin_Roles_DeletedInputs) => LocalizedString} */
var zh_tw2_admin_roles_deleted = zh_admin_roles_deleted;
/**
* | output |
* | --- |
* | "Role deleted" |
*
* @param {Admin_Roles_DeletedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_deleted = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_deleted(inputs);
	if (locale === "zh") return zh_admin_roles_deleted(inputs);
	return zh_tw2_admin_roles_deleted(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Manage_PermissionsInputs */
var en_admin_roles_manage_permissions = () => {
	return `Permissions`;
};
var zh_admin_roles_manage_permissions = () => {
	return `权限`;
};
/** @type {(inputs: Admin_Roles_Manage_PermissionsInputs) => LocalizedString} */
var zh_tw2_admin_roles_manage_permissions = zh_admin_roles_manage_permissions;
/**
* | output |
* | --- |
* | "Permissions" |
*
* @param {Admin_Roles_Manage_PermissionsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_manage_permissions = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_manage_permissions(inputs);
	if (locale === "zh") return zh_admin_roles_manage_permissions(inputs);
	return zh_tw2_admin_roles_manage_permissions(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Manage_Permissions_TitleInputs */
var en_admin_roles_manage_permissions_title = () => {
	return `Manage Role Permissions`;
};
var zh_admin_roles_manage_permissions_title = () => {
	return `管理角色权限`;
};
/** @type {(inputs: Admin_Roles_Manage_Permissions_TitleInputs) => LocalizedString} */
var zh_tw2_admin_roles_manage_permissions_title = zh_admin_roles_manage_permissions_title;
/**
* | output |
* | --- |
* | "Manage Role Permissions" |
*
* @param {Admin_Roles_Manage_Permissions_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_manage_permissions_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_manage_permissions_title(inputs);
	if (locale === "zh") return zh_admin_roles_manage_permissions_title(inputs);
	return zh_tw2_admin_roles_manage_permissions_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Manage_Permissions_DescriptionInputs */
var en_admin_roles_manage_permissions_description = () => {
	return `Select permissions for this role`;
};
var zh_admin_roles_manage_permissions_description = () => {
	return `选择此角色的权限`;
};
/** @type {(inputs: Admin_Roles_Manage_Permissions_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_roles_manage_permissions_description = zh_admin_roles_manage_permissions_description;
/**
* | output |
* | --- |
* | "Select permissions for this role" |
*
* @param {Admin_Roles_Manage_Permissions_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_manage_permissions_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_manage_permissions_description(inputs);
	if (locale === "zh") return zh_admin_roles_manage_permissions_description(inputs);
	return zh_tw2_admin_roles_manage_permissions_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Roles_Permissions_SavedInputs */
var en_admin_roles_permissions_saved = () => {
	return `Permissions updated`;
};
var zh_admin_roles_permissions_saved = () => {
	return `权限已更新`;
};
/** @type {(inputs: Admin_Roles_Permissions_SavedInputs) => LocalizedString} */
var zh_tw2_admin_roles_permissions_saved = zh_admin_roles_permissions_saved;
/**
* | output |
* | --- |
* | "Permissions updated" |
*
* @param {Admin_Roles_Permissions_SavedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_roles_permissions_saved = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_roles_permissions_saved(inputs);
	if (locale === "zh") return zh_admin_roles_permissions_saved(inputs);
	return zh_tw2_admin_roles_permissions_saved(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_TitleInputs */
var en_admin_permissions_title = () => {
	return `Permissions`;
};
var zh_admin_permissions_title = () => {
	return `权限管理`;
};
/** @type {(inputs: Admin_Permissions_TitleInputs) => LocalizedString} */
var zh_tw2_admin_permissions_title = zh_admin_permissions_title;
/**
* | output |
* | --- |
* | "Permissions" |
*
* @param {Admin_Permissions_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_title(inputs);
	if (locale === "zh") return zh_admin_permissions_title(inputs);
	return zh_tw2_admin_permissions_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_DescriptionInputs */
var en_admin_permissions_description = () => {
	return `Manage system permissions`;
};
var zh_admin_permissions_description = () => {
	return `管理系统权限`;
};
/** @type {(inputs: Admin_Permissions_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_permissions_description = zh_admin_permissions_description;
/**
* | output |
* | --- |
* | "Manage system permissions" |
*
* @param {Admin_Permissions_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_description(inputs);
	if (locale === "zh") return zh_admin_permissions_description(inputs);
	return zh_tw2_admin_permissions_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_All_PermissionsInputs */
var en_admin_permissions_all_permissions = () => {
	return `All Permissions`;
};
var zh_admin_permissions_all_permissions = () => {
	return `所有权限`;
};
/** @type {(inputs: Admin_Permissions_All_PermissionsInputs) => LocalizedString} */
var zh_tw2_admin_permissions_all_permissions = zh_admin_permissions_all_permissions;
/**
* | output |
* | --- |
* | "All Permissions" |
*
* @param {Admin_Permissions_All_PermissionsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_all_permissions = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_all_permissions(inputs);
	if (locale === "zh") return zh_admin_permissions_all_permissions(inputs);
	return zh_tw2_admin_permissions_all_permissions(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ count: NonNullable<unknown> }} Admin_Permissions_CountInputs */
var en_admin_permissions_count = (i) => {
	return `${i?.count} permissions defined`;
};
var zh_admin_permissions_count = (i) => {
	return `共 ${i?.count} 个权限`;
};
/** @type {(inputs: Admin_Permissions_CountInputs) => LocalizedString} */
var zh_tw2_admin_permissions_count = zh_admin_permissions_count;
/**
* | output |
* | --- |
* | "{count} permissions defined" |
*
* @param {Admin_Permissions_CountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_count = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_count(inputs);
	if (locale === "zh") return zh_admin_permissions_count(inputs);
	return zh_tw2_admin_permissions_count(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_No_PermissionsInputs */
var en_admin_permissions_no_permissions = () => {
	return `No permissions defined yet`;
};
var zh_admin_permissions_no_permissions = () => {
	return `暂未定义权限`;
};
/** @type {(inputs: Admin_Permissions_No_PermissionsInputs) => LocalizedString} */
var zh_tw2_admin_permissions_no_permissions = zh_admin_permissions_no_permissions;
/**
* | output |
* | --- |
* | "No permissions defined yet" |
*
* @param {Admin_Permissions_No_PermissionsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_no_permissions = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_no_permissions(inputs);
	if (locale === "zh") return zh_admin_permissions_no_permissions(inputs);
	return zh_tw2_admin_permissions_no_permissions(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Code_ColInputs */
var en_admin_permissions_code_col = () => {
	return `Code`;
};
var zh_admin_permissions_code_col = () => {
	return `权限代码`;
};
/** @type {(inputs: Admin_Permissions_Code_ColInputs) => LocalizedString} */
var zh_tw2_admin_permissions_code_col = zh_admin_permissions_code_col;
/**
* | output |
* | --- |
* | "Code" |
*
* @param {Admin_Permissions_Code_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_code_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_code_col(inputs);
	if (locale === "zh") return zh_admin_permissions_code_col(inputs);
	return zh_tw2_admin_permissions_code_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Resource_ColInputs */
var en_admin_permissions_resource_col = () => {
	return `Resource`;
};
var zh_admin_permissions_resource_col = () => {
	return `资源`;
};
/** @type {(inputs: Admin_Permissions_Resource_ColInputs) => LocalizedString} */
var zh_tw2_admin_permissions_resource_col = zh_admin_permissions_resource_col;
/**
* | output |
* | --- |
* | "Resource" |
*
* @param {Admin_Permissions_Resource_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_resource_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_resource_col(inputs);
	if (locale === "zh") return zh_admin_permissions_resource_col(inputs);
	return zh_tw2_admin_permissions_resource_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Action_ColInputs */
var en_admin_permissions_action_col = () => {
	return `Action`;
};
var zh_admin_permissions_action_col = () => {
	return `操作`;
};
/** @type {(inputs: Admin_Permissions_Action_ColInputs) => LocalizedString} */
var zh_tw2_admin_permissions_action_col = zh_admin_permissions_action_col;
/**
* | output |
* | --- |
* | "Action" |
*
* @param {Admin_Permissions_Action_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_action_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_action_col(inputs);
	if (locale === "zh") return zh_admin_permissions_action_col(inputs);
	return zh_tw2_admin_permissions_action_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Title_ColInputs */
var en_admin_permissions_title_col = () => {
	return `Title`;
};
var zh_admin_permissions_title_col = () => {
	return `标题`;
};
/** @type {(inputs: Admin_Permissions_Title_ColInputs) => LocalizedString} */
var zh_tw2_admin_permissions_title_col = zh_admin_permissions_title_col;
/**
* | output |
* | --- |
* | "Title" |
*
* @param {Admin_Permissions_Title_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_title_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_title_col(inputs);
	if (locale === "zh") return zh_admin_permissions_title_col(inputs);
	return zh_tw2_admin_permissions_title_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Actions_ColInputs */
var en_admin_permissions_actions_col = () => {
	return `Actions`;
};
var zh_admin_permissions_actions_col = () => {
	return `操作`;
};
/** @type {(inputs: Admin_Permissions_Actions_ColInputs) => LocalizedString} */
var zh_tw2_admin_permissions_actions_col = zh_admin_permissions_actions_col;
/**
* | output |
* | --- |
* | "Actions" |
*
* @param {Admin_Permissions_Actions_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_actions_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_actions_col(inputs);
	if (locale === "zh") return zh_admin_permissions_actions_col(inputs);
	return zh_tw2_admin_permissions_actions_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Create_PermissionInputs */
var en_admin_permissions_create_permission = () => {
	return `Create Permission`;
};
var zh_admin_permissions_create_permission = () => {
	return `创建权限`;
};
/** @type {(inputs: Admin_Permissions_Create_PermissionInputs) => LocalizedString} */
var zh_tw2_admin_permissions_create_permission = zh_admin_permissions_create_permission;
/**
* | output |
* | --- |
* | "Create Permission" |
*
* @param {Admin_Permissions_Create_PermissionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_create_permission = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_create_permission(inputs);
	if (locale === "zh") return zh_admin_permissions_create_permission(inputs);
	return zh_tw2_admin_permissions_create_permission(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Create_TitleInputs */
var en_admin_permissions_create_title = () => {
	return `Create New Permission`;
};
var zh_admin_permissions_create_title = () => {
	return `创建新权限`;
};
/** @type {(inputs: Admin_Permissions_Create_TitleInputs) => LocalizedString} */
var zh_tw2_admin_permissions_create_title = zh_admin_permissions_create_title;
/**
* | output |
* | --- |
* | "Create New Permission" |
*
* @param {Admin_Permissions_Create_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_create_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_create_title(inputs);
	if (locale === "zh") return zh_admin_permissions_create_title(inputs);
	return zh_tw2_admin_permissions_create_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Create_DescriptionInputs */
var en_admin_permissions_create_description = () => {
	return `Define a new system permission`;
};
var zh_admin_permissions_create_description = () => {
	return `定义一个新的系统权限`;
};
/** @type {(inputs: Admin_Permissions_Create_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_permissions_create_description = zh_admin_permissions_create_description;
/**
* | output |
* | --- |
* | "Define a new system permission" |
*
* @param {Admin_Permissions_Create_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_create_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_create_description(inputs);
	if (locale === "zh") return zh_admin_permissions_create_description(inputs);
	return zh_tw2_admin_permissions_create_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Edit_TitleInputs */
var en_admin_permissions_edit_title = () => {
	return `Edit Permission`;
};
var zh_admin_permissions_edit_title = () => {
	return `编辑权限`;
};
/** @type {(inputs: Admin_Permissions_Edit_TitleInputs) => LocalizedString} */
var zh_tw2_admin_permissions_edit_title = zh_admin_permissions_edit_title;
/**
* | output |
* | --- |
* | "Edit Permission" |
*
* @param {Admin_Permissions_Edit_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_edit_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_edit_title(inputs);
	if (locale === "zh") return zh_admin_permissions_edit_title(inputs);
	return zh_tw2_admin_permissions_edit_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Edit_DescriptionInputs */
var en_admin_permissions_edit_description = () => {
	return `Update permission details`;
};
var zh_admin_permissions_edit_description = () => {
	return `更新权限信息`;
};
/** @type {(inputs: Admin_Permissions_Edit_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_permissions_edit_description = zh_admin_permissions_edit_description;
/**
* | output |
* | --- |
* | "Update permission details" |
*
* @param {Admin_Permissions_Edit_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_edit_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_edit_description(inputs);
	if (locale === "zh") return zh_admin_permissions_edit_description(inputs);
	return zh_tw2_admin_permissions_edit_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Delete_TitleInputs */
var en_admin_permissions_delete_title = () => {
	return `Delete Permission`;
};
var zh_admin_permissions_delete_title = () => {
	return `删除权限`;
};
/** @type {(inputs: Admin_Permissions_Delete_TitleInputs) => LocalizedString} */
var zh_tw2_admin_permissions_delete_title = zh_admin_permissions_delete_title;
/**
* | output |
* | --- |
* | "Delete Permission" |
*
* @param {Admin_Permissions_Delete_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_delete_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_delete_title(inputs);
	if (locale === "zh") return zh_admin_permissions_delete_title(inputs);
	return zh_tw2_admin_permissions_delete_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Delete_ConfirmInputs */
var en_admin_permissions_delete_confirm = () => {
	return `Are you sure you want to delete this permission? It will be removed from all roles.`;
};
var zh_admin_permissions_delete_confirm = () => {
	return `确定要删除此权限吗？它将从所有角色中移除。`;
};
/** @type {(inputs: Admin_Permissions_Delete_ConfirmInputs) => LocalizedString} */
var zh_tw2_admin_permissions_delete_confirm = zh_admin_permissions_delete_confirm;
/**
* | output |
* | --- |
* | "Are you sure you want to delete this permission? It will be removed from all roles." |
*
* @param {Admin_Permissions_Delete_ConfirmInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_delete_confirm = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_delete_confirm(inputs);
	if (locale === "zh") return zh_admin_permissions_delete_confirm(inputs);
	return zh_tw2_admin_permissions_delete_confirm(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Code_FieldInputs */
var en_admin_permissions_code_field = () => {
	return `Code`;
};
var zh_admin_permissions_code_field = () => {
	return `权限代码`;
};
/** @type {(inputs: Admin_Permissions_Code_FieldInputs) => LocalizedString} */
var zh_tw2_admin_permissions_code_field = zh_admin_permissions_code_field;
/**
* | output |
* | --- |
* | "Code" |
*
* @param {Admin_Permissions_Code_FieldInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_code_field = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_code_field(inputs);
	if (locale === "zh") return zh_admin_permissions_code_field(inputs);
	return zh_tw2_admin_permissions_code_field(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Code_PlaceholderInputs */
var en_admin_permissions_code_placeholder = () => {
	return `e.g. posts.create`;
};
var zh_admin_permissions_code_placeholder = () => {
	return `例如 posts.create`;
};
/** @type {(inputs: Admin_Permissions_Code_PlaceholderInputs) => LocalizedString} */
var zh_tw2_admin_permissions_code_placeholder = zh_admin_permissions_code_placeholder;
/**
* | output |
* | --- |
* | "e.g. posts.create" |
*
* @param {Admin_Permissions_Code_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_code_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_code_placeholder(inputs);
	if (locale === "zh") return zh_admin_permissions_code_placeholder(inputs);
	return zh_tw2_admin_permissions_code_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Resource_FieldInputs */
var en_admin_permissions_resource_field = () => {
	return `Resource`;
};
var zh_admin_permissions_resource_field = () => {
	return `资源`;
};
/** @type {(inputs: Admin_Permissions_Resource_FieldInputs) => LocalizedString} */
var zh_tw2_admin_permissions_resource_field = zh_admin_permissions_resource_field;
/**
* | output |
* | --- |
* | "Resource" |
*
* @param {Admin_Permissions_Resource_FieldInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_resource_field = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_resource_field(inputs);
	if (locale === "zh") return zh_admin_permissions_resource_field(inputs);
	return zh_tw2_admin_permissions_resource_field(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Resource_PlaceholderInputs */
var en_admin_permissions_resource_placeholder = () => {
	return `e.g. posts`;
};
var zh_admin_permissions_resource_placeholder = () => {
	return `例如 posts`;
};
/** @type {(inputs: Admin_Permissions_Resource_PlaceholderInputs) => LocalizedString} */
var zh_tw2_admin_permissions_resource_placeholder = zh_admin_permissions_resource_placeholder;
/**
* | output |
* | --- |
* | "e.g. posts" |
*
* @param {Admin_Permissions_Resource_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_resource_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_resource_placeholder(inputs);
	if (locale === "zh") return zh_admin_permissions_resource_placeholder(inputs);
	return zh_tw2_admin_permissions_resource_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Action_FieldInputs */
var en_admin_permissions_action_field = () => {
	return `Action`;
};
var zh_admin_permissions_action_field = () => {
	return `操作`;
};
/** @type {(inputs: Admin_Permissions_Action_FieldInputs) => LocalizedString} */
var zh_tw2_admin_permissions_action_field = zh_admin_permissions_action_field;
/**
* | output |
* | --- |
* | "Action" |
*
* @param {Admin_Permissions_Action_FieldInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_action_field = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_action_field(inputs);
	if (locale === "zh") return zh_admin_permissions_action_field(inputs);
	return zh_tw2_admin_permissions_action_field(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Action_PlaceholderInputs */
var en_admin_permissions_action_placeholder = () => {
	return `e.g. create`;
};
var zh_admin_permissions_action_placeholder = () => {
	return `例如 create`;
};
/** @type {(inputs: Admin_Permissions_Action_PlaceholderInputs) => LocalizedString} */
var zh_tw2_admin_permissions_action_placeholder = zh_admin_permissions_action_placeholder;
/**
* | output |
* | --- |
* | "e.g. create" |
*
* @param {Admin_Permissions_Action_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_action_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_action_placeholder(inputs);
	if (locale === "zh") return zh_admin_permissions_action_placeholder(inputs);
	return zh_tw2_admin_permissions_action_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Title_FieldInputs */
var en_admin_permissions_title_field = () => {
	return `Title`;
};
var zh_admin_permissions_title_field = () => {
	return `标题`;
};
/** @type {(inputs: Admin_Permissions_Title_FieldInputs) => LocalizedString} */
var zh_tw2_admin_permissions_title_field = zh_admin_permissions_title_field;
/**
* | output |
* | --- |
* | "Title" |
*
* @param {Admin_Permissions_Title_FieldInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_title_field = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_title_field(inputs);
	if (locale === "zh") return zh_admin_permissions_title_field(inputs);
	return zh_tw2_admin_permissions_title_field(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Title_PlaceholderInputs */
var en_admin_permissions_title_placeholder = () => {
	return `e.g. Create Posts`;
};
var zh_admin_permissions_title_placeholder = () => {
	return `例如 创建文章`;
};
/** @type {(inputs: Admin_Permissions_Title_PlaceholderInputs) => LocalizedString} */
var zh_tw2_admin_permissions_title_placeholder = zh_admin_permissions_title_placeholder;
/**
* | output |
* | --- |
* | "e.g. Create Posts" |
*
* @param {Admin_Permissions_Title_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_title_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_title_placeholder(inputs);
	if (locale === "zh") return zh_admin_permissions_title_placeholder(inputs);
	return zh_tw2_admin_permissions_title_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_SaveInputs */
var en_admin_permissions_save = () => {
	return `Save`;
};
var zh_admin_permissions_save = () => {
	return `保存`;
};
/** @type {(inputs: Admin_Permissions_SaveInputs) => LocalizedString} */
var zh_tw2_admin_permissions_save = zh_admin_permissions_save;
/**
* | output |
* | --- |
* | "Save" |
*
* @param {Admin_Permissions_SaveInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_save = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_save(inputs);
	if (locale === "zh") return zh_admin_permissions_save(inputs);
	return zh_tw2_admin_permissions_save(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_CancelInputs */
var en_admin_permissions_cancel = () => {
	return `Cancel`;
};
var zh_admin_permissions_cancel = () => {
	return `取消`;
};
/** @type {(inputs: Admin_Permissions_CancelInputs) => LocalizedString} */
var zh_tw2_admin_permissions_cancel = zh_admin_permissions_cancel;
/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Admin_Permissions_CancelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_cancel = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_cancel(inputs);
	if (locale === "zh") return zh_admin_permissions_cancel(inputs);
	return zh_tw2_admin_permissions_cancel(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_Confirm_DeleteInputs */
var en_admin_permissions_confirm_delete = () => {
	return `Delete`;
};
var zh_admin_permissions_confirm_delete = () => {
	return `删除`;
};
/** @type {(inputs: Admin_Permissions_Confirm_DeleteInputs) => LocalizedString} */
var zh_tw2_admin_permissions_confirm_delete = zh_admin_permissions_confirm_delete;
/**
* | output |
* | --- |
* | "Delete" |
*
* @param {Admin_Permissions_Confirm_DeleteInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_confirm_delete = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_confirm_delete(inputs);
	if (locale === "zh") return zh_admin_permissions_confirm_delete(inputs);
	return zh_tw2_admin_permissions_confirm_delete(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_CreatedInputs */
var en_admin_permissions_created = () => {
	return `Permission created`;
};
var zh_admin_permissions_created = () => {
	return `权限已创建`;
};
/** @type {(inputs: Admin_Permissions_CreatedInputs) => LocalizedString} */
var zh_tw2_admin_permissions_created = zh_admin_permissions_created;
/**
* | output |
* | --- |
* | "Permission created" |
*
* @param {Admin_Permissions_CreatedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_created = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_created(inputs);
	if (locale === "zh") return zh_admin_permissions_created(inputs);
	return zh_tw2_admin_permissions_created(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_UpdatedInputs */
var en_admin_permissions_updated = () => {
	return `Permission updated`;
};
var zh_admin_permissions_updated = () => {
	return `权限已更新`;
};
/** @type {(inputs: Admin_Permissions_UpdatedInputs) => LocalizedString} */
var zh_tw2_admin_permissions_updated = zh_admin_permissions_updated;
/**
* | output |
* | --- |
* | "Permission updated" |
*
* @param {Admin_Permissions_UpdatedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_updated = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_updated(inputs);
	if (locale === "zh") return zh_admin_permissions_updated(inputs);
	return zh_tw2_admin_permissions_updated(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Permissions_DeletedInputs */
var en_admin_permissions_deleted = () => {
	return `Permission deleted`;
};
var zh_admin_permissions_deleted = () => {
	return `权限已删除`;
};
/** @type {(inputs: Admin_Permissions_DeletedInputs) => LocalizedString} */
var zh_tw2_admin_permissions_deleted = zh_admin_permissions_deleted;
/**
* | output |
* | --- |
* | "Permission deleted" |
*
* @param {Admin_Permissions_DeletedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_permissions_deleted = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_permissions_deleted(inputs);
	if (locale === "zh") return zh_admin_permissions_deleted(inputs);
	return zh_tw2_admin_permissions_deleted(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_TitleInputs */
var en_admin_categories_title = () => {
	return `Categories`;
};
var zh_admin_categories_title = () => {
	return `分类管理`;
};
/** @type {(inputs: Admin_Categories_TitleInputs) => LocalizedString} */
var zh_tw2_admin_categories_title = zh_admin_categories_title;
/**
* | output |
* | --- |
* | "Categories" |
*
* @param {Admin_Categories_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_title(inputs);
	if (locale === "zh") return zh_admin_categories_title(inputs);
	return zh_tw2_admin_categories_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_DescriptionInputs */
var en_admin_categories_description = () => {
	return `Manage content categories`;
};
var zh_admin_categories_description = () => {
	return `管理内容分类`;
};
/** @type {(inputs: Admin_Categories_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_categories_description = zh_admin_categories_description;
/**
* | output |
* | --- |
* | "Manage content categories" |
*
* @param {Admin_Categories_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_description(inputs);
	if (locale === "zh") return zh_admin_categories_description(inputs);
	return zh_tw2_admin_categories_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_AllInputs */
var en_admin_categories_all = () => {
	return `All Categories`;
};
var zh_admin_categories_all = () => {
	return `所有分类`;
};
/** @type {(inputs: Admin_Categories_AllInputs) => LocalizedString} */
var zh_tw2_admin_categories_all = zh_admin_categories_all;
/**
* | output |
* | --- |
* | "All Categories" |
*
* @param {Admin_Categories_AllInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_all = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_all(inputs);
	if (locale === "zh") return zh_admin_categories_all(inputs);
	return zh_tw2_admin_categories_all(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ count: NonNullable<unknown> }} Admin_Categories_CountInputs */
var en_admin_categories_count = (i) => {
	return `${i?.count} categories`;
};
var zh_admin_categories_count = (i) => {
	return `共 ${i?.count} 个分类`;
};
/** @type {(inputs: Admin_Categories_CountInputs) => LocalizedString} */
var zh_tw2_admin_categories_count = zh_admin_categories_count;
/**
* | output |
* | --- |
* | "{count} categories" |
*
* @param {Admin_Categories_CountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_count = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_count(inputs);
	if (locale === "zh") return zh_admin_categories_count(inputs);
	return zh_tw2_admin_categories_count(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_No_DataInputs */
var en_admin_categories_no_data = () => {
	return `No categories yet`;
};
var zh_admin_categories_no_data = () => {
	return `暂无分类`;
};
/** @type {(inputs: Admin_Categories_No_DataInputs) => LocalizedString} */
var zh_tw2_admin_categories_no_data = zh_admin_categories_no_data;
/**
* | output |
* | --- |
* | "No categories yet" |
*
* @param {Admin_Categories_No_DataInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_no_data = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_no_data(inputs);
	if (locale === "zh") return zh_admin_categories_no_data(inputs);
	return zh_tw2_admin_categories_no_data(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Slug_ColInputs */
var en_admin_categories_slug_col = () => {
	return `Slug`;
};
var zh_admin_categories_slug_col = () => {
	return `标识`;
};
/** @type {(inputs: Admin_Categories_Slug_ColInputs) => LocalizedString} */
var zh_tw2_admin_categories_slug_col = zh_admin_categories_slug_col;
/**
* | output |
* | --- |
* | "Slug" |
*
* @param {Admin_Categories_Slug_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_slug_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_slug_col(inputs);
	if (locale === "zh") return zh_admin_categories_slug_col(inputs);
	return zh_tw2_admin_categories_slug_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Title_ColInputs */
var en_admin_categories_title_col = () => {
	return `Title`;
};
var zh_admin_categories_title_col = () => {
	return `标题`;
};
/** @type {(inputs: Admin_Categories_Title_ColInputs) => LocalizedString} */
var zh_tw2_admin_categories_title_col = zh_admin_categories_title_col;
/**
* | output |
* | --- |
* | "Title" |
*
* @param {Admin_Categories_Title_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_title_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_title_col(inputs);
	if (locale === "zh") return zh_admin_categories_title_col(inputs);
	return zh_tw2_admin_categories_title_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Description_ColInputs */
var en_admin_categories_description_col = () => {
	return `Description`;
};
var zh_admin_categories_description_col = () => {
	return `描述`;
};
/** @type {(inputs: Admin_Categories_Description_ColInputs) => LocalizedString} */
var zh_tw2_admin_categories_description_col = zh_admin_categories_description_col;
/**
* | output |
* | --- |
* | "Description" |
*
* @param {Admin_Categories_Description_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_description_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_description_col(inputs);
	if (locale === "zh") return zh_admin_categories_description_col(inputs);
	return zh_tw2_admin_categories_description_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Status_ColInputs */
var en_admin_categories_status_col = () => {
	return `Status`;
};
var zh_admin_categories_status_col = () => {
	return `状态`;
};
/** @type {(inputs: Admin_Categories_Status_ColInputs) => LocalizedString} */
var zh_tw2_admin_categories_status_col = zh_admin_categories_status_col;
/**
* | output |
* | --- |
* | "Status" |
*
* @param {Admin_Categories_Status_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_status_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_status_col(inputs);
	if (locale === "zh") return zh_admin_categories_status_col(inputs);
	return zh_tw2_admin_categories_status_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Created_AtInputs */
var en_admin_categories_created_at = () => {
	return `Created At`;
};
var zh_admin_categories_created_at = () => {
	return `创建时间`;
};
/** @type {(inputs: Admin_Categories_Created_AtInputs) => LocalizedString} */
var zh_tw2_admin_categories_created_at = zh_admin_categories_created_at;
/**
* | output |
* | --- |
* | "Created At" |
*
* @param {Admin_Categories_Created_AtInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_created_at = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_created_at(inputs);
	if (locale === "zh") return zh_admin_categories_created_at(inputs);
	return zh_tw2_admin_categories_created_at(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Actions_ColInputs */
var en_admin_categories_actions_col = () => {
	return `Actions`;
};
var zh_admin_categories_actions_col = () => {
	return `操作`;
};
/** @type {(inputs: Admin_Categories_Actions_ColInputs) => LocalizedString} */
var zh_tw2_admin_categories_actions_col = zh_admin_categories_actions_col;
/**
* | output |
* | --- |
* | "Actions" |
*
* @param {Admin_Categories_Actions_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_actions_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_actions_col(inputs);
	if (locale === "zh") return zh_admin_categories_actions_col(inputs);
	return zh_tw2_admin_categories_actions_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_CreateInputs */
var en_admin_categories_create = () => {
	return `Create Category`;
};
var zh_admin_categories_create = () => {
	return `创建分类`;
};
/** @type {(inputs: Admin_Categories_CreateInputs) => LocalizedString} */
var zh_tw2_admin_categories_create = zh_admin_categories_create;
/**
* | output |
* | --- |
* | "Create Category" |
*
* @param {Admin_Categories_CreateInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_create = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_create(inputs);
	if (locale === "zh") return zh_admin_categories_create(inputs);
	return zh_tw2_admin_categories_create(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Create_TitleInputs */
var en_admin_categories_create_title = () => {
	return `Create New Category`;
};
var zh_admin_categories_create_title = () => {
	return `创建新分类`;
};
/** @type {(inputs: Admin_Categories_Create_TitleInputs) => LocalizedString} */
var zh_tw2_admin_categories_create_title = zh_admin_categories_create_title;
/**
* | output |
* | --- |
* | "Create New Category" |
*
* @param {Admin_Categories_Create_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_create_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_create_title(inputs);
	if (locale === "zh") return zh_admin_categories_create_title(inputs);
	return zh_tw2_admin_categories_create_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Create_DescriptionInputs */
var en_admin_categories_create_description = () => {
	return `Add a new content category`;
};
var zh_admin_categories_create_description = () => {
	return `添加一个新的内容分类`;
};
/** @type {(inputs: Admin_Categories_Create_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_categories_create_description = zh_admin_categories_create_description;
/**
* | output |
* | --- |
* | "Add a new content category" |
*
* @param {Admin_Categories_Create_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_create_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_create_description(inputs);
	if (locale === "zh") return zh_admin_categories_create_description(inputs);
	return zh_tw2_admin_categories_create_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Edit_TitleInputs */
var en_admin_categories_edit_title = () => {
	return `Edit Category`;
};
var zh_admin_categories_edit_title = () => {
	return `编辑分类`;
};
/** @type {(inputs: Admin_Categories_Edit_TitleInputs) => LocalizedString} */
var zh_tw2_admin_categories_edit_title = zh_admin_categories_edit_title;
/**
* | output |
* | --- |
* | "Edit Category" |
*
* @param {Admin_Categories_Edit_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_edit_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_edit_title(inputs);
	if (locale === "zh") return zh_admin_categories_edit_title(inputs);
	return zh_tw2_admin_categories_edit_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Edit_DescriptionInputs */
var en_admin_categories_edit_description = () => {
	return `Update category details`;
};
var zh_admin_categories_edit_description = () => {
	return `更新分类信息`;
};
/** @type {(inputs: Admin_Categories_Edit_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_categories_edit_description = zh_admin_categories_edit_description;
/**
* | output |
* | --- |
* | "Update category details" |
*
* @param {Admin_Categories_Edit_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_edit_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_edit_description(inputs);
	if (locale === "zh") return zh_admin_categories_edit_description(inputs);
	return zh_tw2_admin_categories_edit_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Delete_TitleInputs */
var en_admin_categories_delete_title = () => {
	return `Delete Category`;
};
var zh_admin_categories_delete_title = () => {
	return `删除分类`;
};
/** @type {(inputs: Admin_Categories_Delete_TitleInputs) => LocalizedString} */
var zh_tw2_admin_categories_delete_title = zh_admin_categories_delete_title;
/**
* | output |
* | --- |
* | "Delete Category" |
*
* @param {Admin_Categories_Delete_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_delete_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_delete_title(inputs);
	if (locale === "zh") return zh_admin_categories_delete_title(inputs);
	return zh_tw2_admin_categories_delete_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Delete_ConfirmInputs */
var en_admin_categories_delete_confirm = () => {
	return `Are you sure you want to delete this category?`;
};
var zh_admin_categories_delete_confirm = () => {
	return `确定要删除此分类吗？`;
};
/** @type {(inputs: Admin_Categories_Delete_ConfirmInputs) => LocalizedString} */
var zh_tw2_admin_categories_delete_confirm = zh_admin_categories_delete_confirm;
/**
* | output |
* | --- |
* | "Are you sure you want to delete this category?" |
*
* @param {Admin_Categories_Delete_ConfirmInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_delete_confirm = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_delete_confirm(inputs);
	if (locale === "zh") return zh_admin_categories_delete_confirm(inputs);
	return zh_tw2_admin_categories_delete_confirm(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Slug_FieldInputs */
var en_admin_categories_slug_field = () => {
	return `Slug`;
};
var zh_admin_categories_slug_field = () => {
	return `标识`;
};
/** @type {(inputs: Admin_Categories_Slug_FieldInputs) => LocalizedString} */
var zh_tw2_admin_categories_slug_field = zh_admin_categories_slug_field;
/**
* | output |
* | --- |
* | "Slug" |
*
* @param {Admin_Categories_Slug_FieldInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_slug_field = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_slug_field(inputs);
	if (locale === "zh") return zh_admin_categories_slug_field(inputs);
	return zh_tw2_admin_categories_slug_field(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Slug_PlaceholderInputs */
var en_admin_categories_slug_placeholder = () => {
	return `e.g. tutorials`;
};
var zh_admin_categories_slug_placeholder = () => {
	return `例如 tutorials`;
};
/** @type {(inputs: Admin_Categories_Slug_PlaceholderInputs) => LocalizedString} */
var zh_tw2_admin_categories_slug_placeholder = zh_admin_categories_slug_placeholder;
/**
* | output |
* | --- |
* | "e.g. tutorials" |
*
* @param {Admin_Categories_Slug_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_slug_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_slug_placeholder(inputs);
	if (locale === "zh") return zh_admin_categories_slug_placeholder(inputs);
	return zh_tw2_admin_categories_slug_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Title_FieldInputs */
var en_admin_categories_title_field = () => {
	return `Title`;
};
var zh_admin_categories_title_field = () => {
	return `标题`;
};
/** @type {(inputs: Admin_Categories_Title_FieldInputs) => LocalizedString} */
var zh_tw2_admin_categories_title_field = zh_admin_categories_title_field;
/**
* | output |
* | --- |
* | "Title" |
*
* @param {Admin_Categories_Title_FieldInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_title_field = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_title_field(inputs);
	if (locale === "zh") return zh_admin_categories_title_field(inputs);
	return zh_tw2_admin_categories_title_field(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Title_PlaceholderInputs */
var en_admin_categories_title_placeholder = () => {
	return `e.g. Tutorials`;
};
var zh_admin_categories_title_placeholder = () => {
	return `例如 教程`;
};
/** @type {(inputs: Admin_Categories_Title_PlaceholderInputs) => LocalizedString} */
var zh_tw2_admin_categories_title_placeholder = zh_admin_categories_title_placeholder;
/**
* | output |
* | --- |
* | "e.g. Tutorials" |
*
* @param {Admin_Categories_Title_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_title_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_title_placeholder(inputs);
	if (locale === "zh") return zh_admin_categories_title_placeholder(inputs);
	return zh_tw2_admin_categories_title_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Description_FieldInputs */
var en_admin_categories_description_field = () => {
	return `Description`;
};
var zh_admin_categories_description_field = () => {
	return `描述`;
};
/** @type {(inputs: Admin_Categories_Description_FieldInputs) => LocalizedString} */
var zh_tw2_admin_categories_description_field = zh_admin_categories_description_field;
/**
* | output |
* | --- |
* | "Description" |
*
* @param {Admin_Categories_Description_FieldInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_description_field = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_description_field(inputs);
	if (locale === "zh") return zh_admin_categories_description_field(inputs);
	return zh_tw2_admin_categories_description_field(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Description_PlaceholderInputs */
var en_admin_categories_description_placeholder = () => {
	return `Optional description`;
};
var zh_admin_categories_description_placeholder = () => {
	return `可选描述`;
};
/** @type {(inputs: Admin_Categories_Description_PlaceholderInputs) => LocalizedString} */
var zh_tw2_admin_categories_description_placeholder = zh_admin_categories_description_placeholder;
/**
* | output |
* | --- |
* | "Optional description" |
*
* @param {Admin_Categories_Description_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_description_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_description_placeholder(inputs);
	if (locale === "zh") return zh_admin_categories_description_placeholder(inputs);
	return zh_tw2_admin_categories_description_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_SaveInputs */
var en_admin_categories_save = () => {
	return `Save`;
};
var zh_admin_categories_save = () => {
	return `保存`;
};
/** @type {(inputs: Admin_Categories_SaveInputs) => LocalizedString} */
var zh_tw2_admin_categories_save = zh_admin_categories_save;
/**
* | output |
* | --- |
* | "Save" |
*
* @param {Admin_Categories_SaveInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_save = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_save(inputs);
	if (locale === "zh") return zh_admin_categories_save(inputs);
	return zh_tw2_admin_categories_save(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_CancelInputs */
var en_admin_categories_cancel = () => {
	return `Cancel`;
};
var zh_admin_categories_cancel = () => {
	return `取消`;
};
/** @type {(inputs: Admin_Categories_CancelInputs) => LocalizedString} */
var zh_tw2_admin_categories_cancel = zh_admin_categories_cancel;
/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Admin_Categories_CancelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_cancel = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_cancel(inputs);
	if (locale === "zh") return zh_admin_categories_cancel(inputs);
	return zh_tw2_admin_categories_cancel(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_Confirm_DeleteInputs */
var en_admin_categories_confirm_delete = () => {
	return `Delete`;
};
var zh_admin_categories_confirm_delete = () => {
	return `删除`;
};
/** @type {(inputs: Admin_Categories_Confirm_DeleteInputs) => LocalizedString} */
var zh_tw2_admin_categories_confirm_delete = zh_admin_categories_confirm_delete;
/**
* | output |
* | --- |
* | "Delete" |
*
* @param {Admin_Categories_Confirm_DeleteInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_confirm_delete = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_confirm_delete(inputs);
	if (locale === "zh") return zh_admin_categories_confirm_delete(inputs);
	return zh_tw2_admin_categories_confirm_delete(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_CreatedInputs */
var en_admin_categories_created = () => {
	return `Category created`;
};
var zh_admin_categories_created = () => {
	return `分类已创建`;
};
/** @type {(inputs: Admin_Categories_CreatedInputs) => LocalizedString} */
var zh_tw2_admin_categories_created = zh_admin_categories_created;
/**
* | output |
* | --- |
* | "Category created" |
*
* @param {Admin_Categories_CreatedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_created = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_created(inputs);
	if (locale === "zh") return zh_admin_categories_created(inputs);
	return zh_tw2_admin_categories_created(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_UpdatedInputs */
var en_admin_categories_updated = () => {
	return `Category updated`;
};
var zh_admin_categories_updated = () => {
	return `分类已更新`;
};
/** @type {(inputs: Admin_Categories_UpdatedInputs) => LocalizedString} */
var zh_tw2_admin_categories_updated = zh_admin_categories_updated;
/**
* | output |
* | --- |
* | "Category updated" |
*
* @param {Admin_Categories_UpdatedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_updated = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_updated(inputs);
	if (locale === "zh") return zh_admin_categories_updated(inputs);
	return zh_tw2_admin_categories_updated(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Categories_DeletedInputs */
var en_admin_categories_deleted = () => {
	return `Category deleted`;
};
var zh_admin_categories_deleted = () => {
	return `分类已删除`;
};
/** @type {(inputs: Admin_Categories_DeletedInputs) => LocalizedString} */
var zh_tw2_admin_categories_deleted = zh_admin_categories_deleted;
/**
* | output |
* | --- |
* | "Category deleted" |
*
* @param {Admin_Categories_DeletedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_categories_deleted = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_categories_deleted(inputs);
	if (locale === "zh") return zh_admin_categories_deleted(inputs);
	return zh_tw2_admin_categories_deleted(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_TitleInputs */
var en_admin_posts_title = () => {
	return `Posts`;
};
var zh_admin_posts_title = () => {
	return `文章管理`;
};
/** @type {(inputs: Admin_Posts_TitleInputs) => LocalizedString} */
var zh_tw2_admin_posts_title = zh_admin_posts_title;
/**
* | output |
* | --- |
* | "Posts" |
*
* @param {Admin_Posts_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_title(inputs);
	if (locale === "zh") return zh_admin_posts_title(inputs);
	return zh_tw2_admin_posts_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_DescriptionInputs */
var en_admin_posts_description = () => {
	return `Manage blog posts and articles`;
};
var zh_admin_posts_description = () => {
	return `管理博客文章`;
};
/** @type {(inputs: Admin_Posts_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_posts_description = zh_admin_posts_description;
/**
* | output |
* | --- |
* | "Manage blog posts and articles" |
*
* @param {Admin_Posts_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_description(inputs);
	if (locale === "zh") return zh_admin_posts_description(inputs);
	return zh_tw2_admin_posts_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_AllInputs */
var en_admin_posts_all = () => {
	return `All Posts`;
};
var zh_admin_posts_all = () => {
	return `所有文章`;
};
/** @type {(inputs: Admin_Posts_AllInputs) => LocalizedString} */
var zh_tw2_admin_posts_all = zh_admin_posts_all;
/**
* | output |
* | --- |
* | "All Posts" |
*
* @param {Admin_Posts_AllInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_all = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_all(inputs);
	if (locale === "zh") return zh_admin_posts_all(inputs);
	return zh_tw2_admin_posts_all(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ count: NonNullable<unknown> }} Admin_Posts_CountInputs */
var en_admin_posts_count = (i) => {
	return `${i?.count} posts`;
};
var zh_admin_posts_count = (i) => {
	return `共 ${i?.count} 篇`;
};
/** @type {(inputs: Admin_Posts_CountInputs) => LocalizedString} */
var zh_tw2_admin_posts_count = zh_admin_posts_count;
/**
* | output |
* | --- |
* | "{count} posts" |
*
* @param {Admin_Posts_CountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_count = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_count(inputs);
	if (locale === "zh") return zh_admin_posts_count(inputs);
	return zh_tw2_admin_posts_count(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_No_DataInputs */
var en_admin_posts_no_data = () => {
	return `No posts yet`;
};
var zh_admin_posts_no_data = () => {
	return `暂无文章`;
};
/** @type {(inputs: Admin_Posts_No_DataInputs) => LocalizedString} */
var zh_tw2_admin_posts_no_data = zh_admin_posts_no_data;
/**
* | output |
* | --- |
* | "No posts yet" |
*
* @param {Admin_Posts_No_DataInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_no_data = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_no_data(inputs);
	if (locale === "zh") return zh_admin_posts_no_data(inputs);
	return zh_tw2_admin_posts_no_data(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Title_ColInputs */
var en_admin_posts_title_col = () => {
	return `Title`;
};
var zh_admin_posts_title_col = () => {
	return `标题`;
};
/** @type {(inputs: Admin_Posts_Title_ColInputs) => LocalizedString} */
var zh_tw2_admin_posts_title_col = zh_admin_posts_title_col;
/**
* | output |
* | --- |
* | "Title" |
*
* @param {Admin_Posts_Title_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_title_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_title_col(inputs);
	if (locale === "zh") return zh_admin_posts_title_col(inputs);
	return zh_tw2_admin_posts_title_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Slug_ColInputs */
var en_admin_posts_slug_col = () => {
	return `Slug`;
};
var zh_admin_posts_slug_col = () => {
	return `标识`;
};
/** @type {(inputs: Admin_Posts_Slug_ColInputs) => LocalizedString} */
var zh_tw2_admin_posts_slug_col = zh_admin_posts_slug_col;
/**
* | output |
* | --- |
* | "Slug" |
*
* @param {Admin_Posts_Slug_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_slug_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_slug_col(inputs);
	if (locale === "zh") return zh_admin_posts_slug_col(inputs);
	return zh_tw2_admin_posts_slug_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Author_ColInputs */
var en_admin_posts_author_col = () => {
	return `Author`;
};
var zh_admin_posts_author_col = () => {
	return `作者`;
};
/** @type {(inputs: Admin_Posts_Author_ColInputs) => LocalizedString} */
var zh_tw2_admin_posts_author_col = zh_admin_posts_author_col;
/**
* | output |
* | --- |
* | "Author" |
*
* @param {Admin_Posts_Author_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_author_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_author_col(inputs);
	if (locale === "zh") return zh_admin_posts_author_col(inputs);
	return zh_tw2_admin_posts_author_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Status_ColInputs */
var en_admin_posts_status_col = () => {
	return `Status`;
};
var zh_admin_posts_status_col = () => {
	return `状态`;
};
/** @type {(inputs: Admin_Posts_Status_ColInputs) => LocalizedString} */
var zh_tw2_admin_posts_status_col = zh_admin_posts_status_col;
/**
* | output |
* | --- |
* | "Status" |
*
* @param {Admin_Posts_Status_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_status_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_status_col(inputs);
	if (locale === "zh") return zh_admin_posts_status_col(inputs);
	return zh_tw2_admin_posts_status_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Created_AtInputs */
var en_admin_posts_created_at = () => {
	return `Created At`;
};
var zh_admin_posts_created_at = () => {
	return `创建时间`;
};
/** @type {(inputs: Admin_Posts_Created_AtInputs) => LocalizedString} */
var zh_tw2_admin_posts_created_at = zh_admin_posts_created_at;
/**
* | output |
* | --- |
* | "Created At" |
*
* @param {Admin_Posts_Created_AtInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_created_at = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_created_at(inputs);
	if (locale === "zh") return zh_admin_posts_created_at(inputs);
	return zh_tw2_admin_posts_created_at(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Actions_ColInputs */
var en_admin_posts_actions_col = () => {
	return `Actions`;
};
var zh_admin_posts_actions_col = () => {
	return `操作`;
};
/** @type {(inputs: Admin_Posts_Actions_ColInputs) => LocalizedString} */
var zh_tw2_admin_posts_actions_col = zh_admin_posts_actions_col;
/**
* | output |
* | --- |
* | "Actions" |
*
* @param {Admin_Posts_Actions_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_actions_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_actions_col(inputs);
	if (locale === "zh") return zh_admin_posts_actions_col(inputs);
	return zh_tw2_admin_posts_actions_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_CreateInputs */
var en_admin_posts_create = () => {
	return `Create Post`;
};
var zh_admin_posts_create = () => {
	return `创建文章`;
};
/** @type {(inputs: Admin_Posts_CreateInputs) => LocalizedString} */
var zh_tw2_admin_posts_create = zh_admin_posts_create;
/**
* | output |
* | --- |
* | "Create Post" |
*
* @param {Admin_Posts_CreateInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_create = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_create(inputs);
	if (locale === "zh") return zh_admin_posts_create(inputs);
	return zh_tw2_admin_posts_create(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Create_TitleInputs */
var en_admin_posts_create_title = () => {
	return `Create New Post`;
};
var zh_admin_posts_create_title = () => {
	return `创建新文章`;
};
/** @type {(inputs: Admin_Posts_Create_TitleInputs) => LocalizedString} */
var zh_tw2_admin_posts_create_title = zh_admin_posts_create_title;
/**
* | output |
* | --- |
* | "Create New Post" |
*
* @param {Admin_Posts_Create_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_create_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_create_title(inputs);
	if (locale === "zh") return zh_admin_posts_create_title(inputs);
	return zh_tw2_admin_posts_create_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Create_DescriptionInputs */
var en_admin_posts_create_description = () => {
	return `Create a new blog post`;
};
var zh_admin_posts_create_description = () => {
	return `创建一篇新的博客文章`;
};
/** @type {(inputs: Admin_Posts_Create_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_posts_create_description = zh_admin_posts_create_description;
/**
* | output |
* | --- |
* | "Create a new blog post" |
*
* @param {Admin_Posts_Create_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_create_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_create_description(inputs);
	if (locale === "zh") return zh_admin_posts_create_description(inputs);
	return zh_tw2_admin_posts_create_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Edit_TitleInputs */
var en_admin_posts_edit_title = () => {
	return `Edit Post`;
};
var zh_admin_posts_edit_title = () => {
	return `编辑文章`;
};
/** @type {(inputs: Admin_Posts_Edit_TitleInputs) => LocalizedString} */
var zh_tw2_admin_posts_edit_title = zh_admin_posts_edit_title;
/**
* | output |
* | --- |
* | "Edit Post" |
*
* @param {Admin_Posts_Edit_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_edit_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_edit_title(inputs);
	if (locale === "zh") return zh_admin_posts_edit_title(inputs);
	return zh_tw2_admin_posts_edit_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Edit_DescriptionInputs */
var en_admin_posts_edit_description = () => {
	return `Update post details`;
};
var zh_admin_posts_edit_description = () => {
	return `更新文章信息`;
};
/** @type {(inputs: Admin_Posts_Edit_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_posts_edit_description = zh_admin_posts_edit_description;
/**
* | output |
* | --- |
* | "Update post details" |
*
* @param {Admin_Posts_Edit_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_edit_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_edit_description(inputs);
	if (locale === "zh") return zh_admin_posts_edit_description(inputs);
	return zh_tw2_admin_posts_edit_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Delete_TitleInputs */
var en_admin_posts_delete_title = () => {
	return `Delete Post`;
};
var zh_admin_posts_delete_title = () => {
	return `删除文章`;
};
/** @type {(inputs: Admin_Posts_Delete_TitleInputs) => LocalizedString} */
var zh_tw2_admin_posts_delete_title = zh_admin_posts_delete_title;
/**
* | output |
* | --- |
* | "Delete Post" |
*
* @param {Admin_Posts_Delete_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_delete_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_delete_title(inputs);
	if (locale === "zh") return zh_admin_posts_delete_title(inputs);
	return zh_tw2_admin_posts_delete_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Delete_ConfirmInputs */
var en_admin_posts_delete_confirm = () => {
	return `Are you sure you want to delete this post?`;
};
var zh_admin_posts_delete_confirm = () => {
	return `确定要删除此文章吗？`;
};
/** @type {(inputs: Admin_Posts_Delete_ConfirmInputs) => LocalizedString} */
var zh_tw2_admin_posts_delete_confirm = zh_admin_posts_delete_confirm;
/**
* | output |
* | --- |
* | "Are you sure you want to delete this post?" |
*
* @param {Admin_Posts_Delete_ConfirmInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_delete_confirm = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_delete_confirm(inputs);
	if (locale === "zh") return zh_admin_posts_delete_confirm(inputs);
	return zh_tw2_admin_posts_delete_confirm(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Slug_FieldInputs */
var en_admin_posts_slug_field = () => {
	return `Slug`;
};
var zh_admin_posts_slug_field = () => {
	return `标识`;
};
/** @type {(inputs: Admin_Posts_Slug_FieldInputs) => LocalizedString} */
var zh_tw2_admin_posts_slug_field = zh_admin_posts_slug_field;
/**
* | output |
* | --- |
* | "Slug" |
*
* @param {Admin_Posts_Slug_FieldInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_slug_field = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_slug_field(inputs);
	if (locale === "zh") return zh_admin_posts_slug_field(inputs);
	return zh_tw2_admin_posts_slug_field(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Slug_PlaceholderInputs */
var en_admin_posts_slug_placeholder = () => {
	return `e.g. my-first-post`;
};
var zh_admin_posts_slug_placeholder = () => {
	return `例如 my-first-post`;
};
/** @type {(inputs: Admin_Posts_Slug_PlaceholderInputs) => LocalizedString} */
var zh_tw2_admin_posts_slug_placeholder = zh_admin_posts_slug_placeholder;
/**
* | output |
* | --- |
* | "e.g. my-first-post" |
*
* @param {Admin_Posts_Slug_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_slug_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_slug_placeholder(inputs);
	if (locale === "zh") return zh_admin_posts_slug_placeholder(inputs);
	return zh_tw2_admin_posts_slug_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Title_FieldInputs */
var en_admin_posts_title_field = () => {
	return `Title`;
};
var zh_admin_posts_title_field = () => {
	return `标题`;
};
/** @type {(inputs: Admin_Posts_Title_FieldInputs) => LocalizedString} */
var zh_tw2_admin_posts_title_field = zh_admin_posts_title_field;
/**
* | output |
* | --- |
* | "Title" |
*
* @param {Admin_Posts_Title_FieldInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_title_field = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_title_field(inputs);
	if (locale === "zh") return zh_admin_posts_title_field(inputs);
	return zh_tw2_admin_posts_title_field(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Title_PlaceholderInputs */
var en_admin_posts_title_placeholder = () => {
	return `Post title`;
};
var zh_admin_posts_title_placeholder = () => {
	return `文章标题`;
};
/** @type {(inputs: Admin_Posts_Title_PlaceholderInputs) => LocalizedString} */
var zh_tw2_admin_posts_title_placeholder = zh_admin_posts_title_placeholder;
/**
* | output |
* | --- |
* | "Post title" |
*
* @param {Admin_Posts_Title_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_title_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_title_placeholder(inputs);
	if (locale === "zh") return zh_admin_posts_title_placeholder(inputs);
	return zh_tw2_admin_posts_title_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Description_FieldInputs */
var en_admin_posts_description_field = () => {
	return `Description`;
};
var zh_admin_posts_description_field = () => {
	return `描述`;
};
/** @type {(inputs: Admin_Posts_Description_FieldInputs) => LocalizedString} */
var zh_tw2_admin_posts_description_field = zh_admin_posts_description_field;
/**
* | output |
* | --- |
* | "Description" |
*
* @param {Admin_Posts_Description_FieldInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_description_field = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_description_field(inputs);
	if (locale === "zh") return zh_admin_posts_description_field(inputs);
	return zh_tw2_admin_posts_description_field(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Description_PlaceholderInputs */
var en_admin_posts_description_placeholder = () => {
	return `Brief description`;
};
var zh_admin_posts_description_placeholder = () => {
	return `简短描述`;
};
/** @type {(inputs: Admin_Posts_Description_PlaceholderInputs) => LocalizedString} */
var zh_tw2_admin_posts_description_placeholder = zh_admin_posts_description_placeholder;
/**
* | output |
* | --- |
* | "Brief description" |
*
* @param {Admin_Posts_Description_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_description_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_description_placeholder(inputs);
	if (locale === "zh") return zh_admin_posts_description_placeholder(inputs);
	return zh_tw2_admin_posts_description_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Author_FieldInputs */
var en_admin_posts_author_field = () => {
	return `Author`;
};
var zh_admin_posts_author_field = () => {
	return `作者`;
};
/** @type {(inputs: Admin_Posts_Author_FieldInputs) => LocalizedString} */
var zh_tw2_admin_posts_author_field = zh_admin_posts_author_field;
/**
* | output |
* | --- |
* | "Author" |
*
* @param {Admin_Posts_Author_FieldInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_author_field = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_author_field(inputs);
	if (locale === "zh") return zh_admin_posts_author_field(inputs);
	return zh_tw2_admin_posts_author_field(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Author_PlaceholderInputs */
var en_admin_posts_author_placeholder = () => {
	return `Author name`;
};
var zh_admin_posts_author_placeholder = () => {
	return `作者名称`;
};
/** @type {(inputs: Admin_Posts_Author_PlaceholderInputs) => LocalizedString} */
var zh_tw2_admin_posts_author_placeholder = zh_admin_posts_author_placeholder;
/**
* | output |
* | --- |
* | "Author name" |
*
* @param {Admin_Posts_Author_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_author_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_author_placeholder(inputs);
	if (locale === "zh") return zh_admin_posts_author_placeholder(inputs);
	return zh_tw2_admin_posts_author_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Content_FieldInputs */
var en_admin_posts_content_field = () => {
	return `Content`;
};
var zh_admin_posts_content_field = () => {
	return `正文`;
};
/** @type {(inputs: Admin_Posts_Content_FieldInputs) => LocalizedString} */
var zh_tw2_admin_posts_content_field = zh_admin_posts_content_field;
/**
* | output |
* | --- |
* | "Content" |
*
* @param {Admin_Posts_Content_FieldInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_content_field = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_content_field(inputs);
	if (locale === "zh") return zh_admin_posts_content_field(inputs);
	return zh_tw2_admin_posts_content_field(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Content_PlaceholderInputs */
var en_admin_posts_content_placeholder = () => {
	return `Write your post…`;
};
var zh_admin_posts_content_placeholder = () => {
	return `开始撰写文章…`;
};
/** @type {(inputs: Admin_Posts_Content_PlaceholderInputs) => LocalizedString} */
var zh_tw2_admin_posts_content_placeholder = zh_admin_posts_content_placeholder;
/**
* | output |
* | --- |
* | "Write your post…" |
*
* @param {Admin_Posts_Content_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_content_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_content_placeholder(inputs);
	if (locale === "zh") return zh_admin_posts_content_placeholder(inputs);
	return zh_tw2_admin_posts_content_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Category_FieldInputs */
var en_admin_posts_category_field = () => {
	return `Category`;
};
var zh_admin_posts_category_field = () => {
	return `分类`;
};
/** @type {(inputs: Admin_Posts_Category_FieldInputs) => LocalizedString} */
var zh_tw2_admin_posts_category_field = zh_admin_posts_category_field;
/**
* | output |
* | --- |
* | "Category" |
*
* @param {Admin_Posts_Category_FieldInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_category_field = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_category_field(inputs);
	if (locale === "zh") return zh_admin_posts_category_field(inputs);
	return zh_tw2_admin_posts_category_field(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Category_PlaceholderInputs */
var en_admin_posts_category_placeholder = () => {
	return `Select category`;
};
var zh_admin_posts_category_placeholder = () => {
	return `选择分类`;
};
/** @type {(inputs: Admin_Posts_Category_PlaceholderInputs) => LocalizedString} */
var zh_tw2_admin_posts_category_placeholder = zh_admin_posts_category_placeholder;
/**
* | output |
* | --- |
* | "Select category" |
*
* @param {Admin_Posts_Category_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_category_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_category_placeholder(inputs);
	if (locale === "zh") return zh_admin_posts_category_placeholder(inputs);
	return zh_tw2_admin_posts_category_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Status_FieldInputs */
var en_admin_posts_status_field = () => {
	return `Status`;
};
var zh_admin_posts_status_field = () => {
	return `状态`;
};
/** @type {(inputs: Admin_Posts_Status_FieldInputs) => LocalizedString} */
var zh_tw2_admin_posts_status_field = zh_admin_posts_status_field;
/**
* | output |
* | --- |
* | "Status" |
*
* @param {Admin_Posts_Status_FieldInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_status_field = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_status_field(inputs);
	if (locale === "zh") return zh_admin_posts_status_field(inputs);
	return zh_tw2_admin_posts_status_field(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Status_DraftInputs */
var en_admin_posts_status_draft = () => {
	return `Draft`;
};
var zh_admin_posts_status_draft = () => {
	return `草稿`;
};
/** @type {(inputs: Admin_Posts_Status_DraftInputs) => LocalizedString} */
var zh_tw2_admin_posts_status_draft = zh_admin_posts_status_draft;
/**
* | output |
* | --- |
* | "Draft" |
*
* @param {Admin_Posts_Status_DraftInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_status_draft = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_status_draft(inputs);
	if (locale === "zh") return zh_admin_posts_status_draft(inputs);
	return zh_tw2_admin_posts_status_draft(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Status_PublishedInputs */
var en_admin_posts_status_published = () => {
	return `Published`;
};
var zh_admin_posts_status_published = () => {
	return `已发布`;
};
/** @type {(inputs: Admin_Posts_Status_PublishedInputs) => LocalizedString} */
var zh_tw2_admin_posts_status_published = zh_admin_posts_status_published;
/**
* | output |
* | --- |
* | "Published" |
*
* @param {Admin_Posts_Status_PublishedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_status_published = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_status_published(inputs);
	if (locale === "zh") return zh_admin_posts_status_published(inputs);
	return zh_tw2_admin_posts_status_published(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_SaveInputs */
var en_admin_posts_save = () => {
	return `Save`;
};
var zh_admin_posts_save = () => {
	return `保存`;
};
/** @type {(inputs: Admin_Posts_SaveInputs) => LocalizedString} */
var zh_tw2_admin_posts_save = zh_admin_posts_save;
/**
* | output |
* | --- |
* | "Save" |
*
* @param {Admin_Posts_SaveInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_save = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_save(inputs);
	if (locale === "zh") return zh_admin_posts_save(inputs);
	return zh_tw2_admin_posts_save(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_CancelInputs */
var en_admin_posts_cancel = () => {
	return `Cancel`;
};
var zh_admin_posts_cancel = () => {
	return `取消`;
};
/** @type {(inputs: Admin_Posts_CancelInputs) => LocalizedString} */
var zh_tw2_admin_posts_cancel = zh_admin_posts_cancel;
/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Admin_Posts_CancelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_cancel = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_cancel(inputs);
	if (locale === "zh") return zh_admin_posts_cancel(inputs);
	return zh_tw2_admin_posts_cancel(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Confirm_DeleteInputs */
var en_admin_posts_confirm_delete = () => {
	return `Delete`;
};
var zh_admin_posts_confirm_delete = () => {
	return `删除`;
};
/** @type {(inputs: Admin_Posts_Confirm_DeleteInputs) => LocalizedString} */
var zh_tw2_admin_posts_confirm_delete = zh_admin_posts_confirm_delete;
/**
* | output |
* | --- |
* | "Delete" |
*
* @param {Admin_Posts_Confirm_DeleteInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_confirm_delete = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_confirm_delete(inputs);
	if (locale === "zh") return zh_admin_posts_confirm_delete(inputs);
	return zh_tw2_admin_posts_confirm_delete(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_CreatedInputs */
var en_admin_posts_created = () => {
	return `Post created`;
};
var zh_admin_posts_created = () => {
	return `文章已创建`;
};
/** @type {(inputs: Admin_Posts_CreatedInputs) => LocalizedString} */
var zh_tw2_admin_posts_created = zh_admin_posts_created;
/**
* | output |
* | --- |
* | "Post created" |
*
* @param {Admin_Posts_CreatedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_created = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_created(inputs);
	if (locale === "zh") return zh_admin_posts_created(inputs);
	return zh_tw2_admin_posts_created(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_UpdatedInputs */
var en_admin_posts_updated = () => {
	return `Post updated`;
};
var zh_admin_posts_updated = () => {
	return `文章已更新`;
};
/** @type {(inputs: Admin_Posts_UpdatedInputs) => LocalizedString} */
var zh_tw2_admin_posts_updated = zh_admin_posts_updated;
/**
* | output |
* | --- |
* | "Post updated" |
*
* @param {Admin_Posts_UpdatedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_updated = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_updated(inputs);
	if (locale === "zh") return zh_admin_posts_updated(inputs);
	return zh_tw2_admin_posts_updated(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_DeletedInputs */
var en_admin_posts_deleted = () => {
	return `Post deleted`;
};
var zh_admin_posts_deleted = () => {
	return `文章已删除`;
};
/** @type {(inputs: Admin_Posts_DeletedInputs) => LocalizedString} */
var zh_tw2_admin_posts_deleted = zh_admin_posts_deleted;
/**
* | output |
* | --- |
* | "Post deleted" |
*
* @param {Admin_Posts_DeletedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_deleted = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_deleted(inputs);
	if (locale === "zh") return zh_admin_posts_deleted(inputs);
	return zh_tw2_admin_posts_deleted(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Tab_AllInputs */
var en_admin_posts_tab_all = () => {
	return `All`;
};
var zh_admin_posts_tab_all = () => {
	return `全部`;
};
/** @type {(inputs: Admin_Posts_Tab_AllInputs) => LocalizedString} */
var zh_tw2_admin_posts_tab_all = zh_admin_posts_tab_all;
/**
* | output |
* | --- |
* | "All" |
*
* @param {Admin_Posts_Tab_AllInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_tab_all = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_tab_all(inputs);
	if (locale === "zh") return zh_admin_posts_tab_all(inputs);
	return zh_tw2_admin_posts_tab_all(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Tab_PublishedInputs */
var en_admin_posts_tab_published = () => {
	return `Published`;
};
var zh_admin_posts_tab_published = () => {
	return `已发布`;
};
/** @type {(inputs: Admin_Posts_Tab_PublishedInputs) => LocalizedString} */
var zh_tw2_admin_posts_tab_published = zh_admin_posts_tab_published;
/**
* | output |
* | --- |
* | "Published" |
*
* @param {Admin_Posts_Tab_PublishedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_tab_published = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_tab_published(inputs);
	if (locale === "zh") return zh_admin_posts_tab_published(inputs);
	return zh_tw2_admin_posts_tab_published(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Posts_Tab_DraftInputs */
var en_admin_posts_tab_draft = () => {
	return `Draft`;
};
var zh_admin_posts_tab_draft = () => {
	return `草稿`;
};
/** @type {(inputs: Admin_Posts_Tab_DraftInputs) => LocalizedString} */
var zh_tw2_admin_posts_tab_draft = zh_admin_posts_tab_draft;
/**
* | output |
* | --- |
* | "Draft" |
*
* @param {Admin_Posts_Tab_DraftInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_posts_tab_draft = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_posts_tab_draft(inputs);
	if (locale === "zh") return zh_admin_posts_tab_draft(inputs);
	return zh_tw2_admin_posts_tab_draft(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_TitleInputs */
var en_admin_payments_title = () => {
	return `Payments`;
};
var zh_admin_payments_title = () => {
	return `支付管理`;
};
/** @type {(inputs: Admin_Payments_TitleInputs) => LocalizedString} */
var zh_tw2_admin_payments_title = zh_admin_payments_title;
/**
* | output |
* | --- |
* | "Payments" |
*
* @param {Admin_Payments_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_title(inputs);
	if (locale === "zh") return zh_admin_payments_title(inputs);
	return zh_tw2_admin_payments_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_DescriptionInputs */
var en_admin_payments_description = () => {
	return `View all payment orders`;
};
var zh_admin_payments_description = () => {
	return `查看所有支付订单`;
};
/** @type {(inputs: Admin_Payments_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_payments_description = zh_admin_payments_description;
/**
* | output |
* | --- |
* | "View all payment orders" |
*
* @param {Admin_Payments_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_description(inputs);
	if (locale === "zh") return zh_admin_payments_description(inputs);
	return zh_tw2_admin_payments_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_All_PaymentsInputs */
var en_admin_payments_all_payments = () => {
	return `All Payments`;
};
var zh_admin_payments_all_payments = () => {
	return `所有支付`;
};
/** @type {(inputs: Admin_Payments_All_PaymentsInputs) => LocalizedString} */
var zh_tw2_admin_payments_all_payments = zh_admin_payments_all_payments;
/**
* | output |
* | --- |
* | "All Payments" |
*
* @param {Admin_Payments_All_PaymentsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_all_payments = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_all_payments(inputs);
	if (locale === "zh") return zh_admin_payments_all_payments(inputs);
	return zh_tw2_admin_payments_all_payments(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ count: NonNullable<unknown> }} Admin_Payments_CountInputs */
var en_admin_payments_count = (i) => {
	return `${i?.count} payments`;
};
var zh_admin_payments_count = (i) => {
	return `共 ${i?.count} 条`;
};
/** @type {(inputs: Admin_Payments_CountInputs) => LocalizedString} */
var zh_tw2_admin_payments_count = zh_admin_payments_count;
/**
* | output |
* | --- |
* | "{count} payments" |
*
* @param {Admin_Payments_CountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_count = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_count(inputs);
	if (locale === "zh") return zh_admin_payments_count(inputs);
	return zh_tw2_admin_payments_count(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_No_PaymentsInputs */
var en_admin_payments_no_payments = () => {
	return `No payments yet`;
};
var zh_admin_payments_no_payments = () => {
	return `暂无支付记录`;
};
/** @type {(inputs: Admin_Payments_No_PaymentsInputs) => LocalizedString} */
var zh_tw2_admin_payments_no_payments = zh_admin_payments_no_payments;
/**
* | output |
* | --- |
* | "No payments yet" |
*
* @param {Admin_Payments_No_PaymentsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_no_payments = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_no_payments(inputs);
	if (locale === "zh") return zh_admin_payments_no_payments(inputs);
	return zh_tw2_admin_payments_no_payments(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_Order_NoInputs */
var en_admin_payments_order_no = () => {
	return `Order No`;
};
var zh_admin_payments_order_no = () => {
	return `订单号`;
};
/** @type {(inputs: Admin_Payments_Order_NoInputs) => LocalizedString} */
var zh_tw2_admin_payments_order_no = zh_admin_payments_order_no;
/**
* | output |
* | --- |
* | "Order No" |
*
* @param {Admin_Payments_Order_NoInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_order_no = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_order_no(inputs);
	if (locale === "zh") return zh_admin_payments_order_no(inputs);
	return zh_tw2_admin_payments_order_no(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_UserInputs */
var en_admin_payments_user = () => {
	return `User`;
};
var zh_admin_payments_user = () => {
	return `用户`;
};
/** @type {(inputs: Admin_Payments_UserInputs) => LocalizedString} */
var zh_tw2_admin_payments_user = zh_admin_payments_user;
/**
* | output |
* | --- |
* | "User" |
*
* @param {Admin_Payments_UserInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_user = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_user(inputs);
	if (locale === "zh") return zh_admin_payments_user(inputs);
	return zh_tw2_admin_payments_user(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_AmountInputs */
var en_admin_payments_amount = () => {
	return `Amount`;
};
var zh_admin_payments_amount = () => {
	return `金额`;
};
/** @type {(inputs: Admin_Payments_AmountInputs) => LocalizedString} */
var zh_tw2_admin_payments_amount = zh_admin_payments_amount;
/**
* | output |
* | --- |
* | "Amount" |
*
* @param {Admin_Payments_AmountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_amount = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_amount(inputs);
	if (locale === "zh") return zh_admin_payments_amount(inputs);
	return zh_tw2_admin_payments_amount(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_StatusInputs */
var en_admin_payments_status = () => {
	return `Status`;
};
var zh_admin_payments_status = () => {
	return `状态`;
};
/** @type {(inputs: Admin_Payments_StatusInputs) => LocalizedString} */
var zh_tw2_admin_payments_status = zh_admin_payments_status;
/**
* | output |
* | --- |
* | "Status" |
*
* @param {Admin_Payments_StatusInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_status = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_status(inputs);
	if (locale === "zh") return zh_admin_payments_status(inputs);
	return zh_tw2_admin_payments_status(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_TypeInputs */
var en_admin_payments_type = () => {
	return `Type`;
};
var zh_admin_payments_type = () => {
	return `类型`;
};
/** @type {(inputs: Admin_Payments_TypeInputs) => LocalizedString} */
var zh_tw2_admin_payments_type = zh_admin_payments_type;
/**
* | output |
* | --- |
* | "Type" |
*
* @param {Admin_Payments_TypeInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_type = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_type(inputs);
	if (locale === "zh") return zh_admin_payments_type(inputs);
	return zh_tw2_admin_payments_type(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_ProviderInputs */
var en_admin_payments_provider = () => {
	return `Provider`;
};
var zh_admin_payments_provider = () => {
	return `支付方式`;
};
/** @type {(inputs: Admin_Payments_ProviderInputs) => LocalizedString} */
var zh_tw2_admin_payments_provider = zh_admin_payments_provider;
/**
* | output |
* | --- |
* | "Provider" |
*
* @param {Admin_Payments_ProviderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_provider = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_provider(inputs);
	if (locale === "zh") return zh_admin_payments_provider(inputs);
	return zh_tw2_admin_payments_provider(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_Created_AtInputs */
var en_admin_payments_created_at = () => {
	return `Created At`;
};
var zh_admin_payments_created_at = () => {
	return `创建时间`;
};
/** @type {(inputs: Admin_Payments_Created_AtInputs) => LocalizedString} */
var zh_tw2_admin_payments_created_at = zh_admin_payments_created_at;
/**
* | output |
* | --- |
* | "Created At" |
*
* @param {Admin_Payments_Created_AtInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_created_at = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_created_at(inputs);
	if (locale === "zh") return zh_admin_payments_created_at(inputs);
	return zh_tw2_admin_payments_created_at(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_Search_PlaceholderInputs */
var en_admin_payments_search_placeholder = () => {
	return `Search order no or email...`;
};
var zh_admin_payments_search_placeholder = () => {
	return `搜索订单号或邮箱...`;
};
/** @type {(inputs: Admin_Payments_Search_PlaceholderInputs) => LocalizedString} */
var zh_tw2_admin_payments_search_placeholder = zh_admin_payments_search_placeholder;
/**
* | output |
* | --- |
* | "Search order no or email..." |
*
* @param {Admin_Payments_Search_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_search_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_search_placeholder(inputs);
	if (locale === "zh") return zh_admin_payments_search_placeholder(inputs);
	return zh_tw2_admin_payments_search_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_Edit_TitleInputs */
var en_admin_payments_edit_title = () => {
	return `Edit Order`;
};
var zh_admin_payments_edit_title = () => {
	return `编辑订单`;
};
/** @type {(inputs: Admin_Payments_Edit_TitleInputs) => LocalizedString} */
var zh_tw2_admin_payments_edit_title = zh_admin_payments_edit_title;
/**
* | output |
* | --- |
* | "Edit Order" |
*
* @param {Admin_Payments_Edit_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_edit_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_edit_title(inputs);
	if (locale === "zh") return zh_admin_payments_edit_title(inputs);
	return zh_tw2_admin_payments_edit_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_Edit_DescriptionInputs */
var en_admin_payments_edit_description = () => {
	return `Update order status and product information`;
};
var zh_admin_payments_edit_description = () => {
	return `修改订单状态和产品信息`;
};
/** @type {(inputs: Admin_Payments_Edit_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_payments_edit_description = zh_admin_payments_edit_description;
/**
* | output |
* | --- |
* | "Update order status and product information" |
*
* @param {Admin_Payments_Edit_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_edit_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_edit_description(inputs);
	if (locale === "zh") return zh_admin_payments_edit_description(inputs);
	return zh_tw2_admin_payments_edit_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_Status_LabelInputs */
var en_admin_payments_status_label = () => {
	return `Status`;
};
var zh_admin_payments_status_label = () => {
	return `状态`;
};
/** @type {(inputs: Admin_Payments_Status_LabelInputs) => LocalizedString} */
var zh_tw2_admin_payments_status_label = zh_admin_payments_status_label;
/**
* | output |
* | --- |
* | "Status" |
*
* @param {Admin_Payments_Status_LabelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_status_label = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_status_label(inputs);
	if (locale === "zh") return zh_admin_payments_status_label(inputs);
	return zh_tw2_admin_payments_status_label(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_Status_PendingInputs */
var en_admin_payments_status_pending = () => {
	return `Pending`;
};
var zh_admin_payments_status_pending = () => {
	return `待支付`;
};
/** @type {(inputs: Admin_Payments_Status_PendingInputs) => LocalizedString} */
var zh_tw2_admin_payments_status_pending = zh_admin_payments_status_pending;
/**
* | output |
* | --- |
* | "Pending" |
*
* @param {Admin_Payments_Status_PendingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_status_pending = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_status_pending(inputs);
	if (locale === "zh") return zh_admin_payments_status_pending(inputs);
	return zh_tw2_admin_payments_status_pending(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_Status_CreatedInputs */
var en_admin_payments_status_created = () => {
	return `Created`;
};
var zh_admin_payments_status_created = () => {
	return `已创建`;
};
/** @type {(inputs: Admin_Payments_Status_CreatedInputs) => LocalizedString} */
var zh_tw2_admin_payments_status_created = zh_admin_payments_status_created;
/**
* | output |
* | --- |
* | "Created" |
*
* @param {Admin_Payments_Status_CreatedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_status_created = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_status_created(inputs);
	if (locale === "zh") return zh_admin_payments_status_created(inputs);
	return zh_tw2_admin_payments_status_created(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_Status_PaidInputs */
var en_admin_payments_status_paid = () => {
	return `Paid`;
};
var zh_admin_payments_status_paid = () => {
	return `已支付`;
};
/** @type {(inputs: Admin_Payments_Status_PaidInputs) => LocalizedString} */
var zh_tw2_admin_payments_status_paid = zh_admin_payments_status_paid;
/**
* | output |
* | --- |
* | "Paid" |
*
* @param {Admin_Payments_Status_PaidInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_status_paid = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_status_paid(inputs);
	if (locale === "zh") return zh_admin_payments_status_paid(inputs);
	return zh_tw2_admin_payments_status_paid(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_Status_FailedInputs */
var en_admin_payments_status_failed = () => {
	return `Failed`;
};
var zh_admin_payments_status_failed = () => {
	return `失败`;
};
/** @type {(inputs: Admin_Payments_Status_FailedInputs) => LocalizedString} */
var zh_tw2_admin_payments_status_failed = zh_admin_payments_status_failed;
/**
* | output |
* | --- |
* | "Failed" |
*
* @param {Admin_Payments_Status_FailedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_status_failed = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_status_failed(inputs);
	if (locale === "zh") return zh_admin_payments_status_failed(inputs);
	return zh_tw2_admin_payments_status_failed(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_Status_DeletedInputs */
var en_admin_payments_status_deleted = () => {
	return `Deleted`;
};
var zh_admin_payments_status_deleted = () => {
	return `已删除`;
};
/** @type {(inputs: Admin_Payments_Status_DeletedInputs) => LocalizedString} */
var zh_tw2_admin_payments_status_deleted = zh_admin_payments_status_deleted;
/**
* | output |
* | --- |
* | "Deleted" |
*
* @param {Admin_Payments_Status_DeletedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_status_deleted = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_status_deleted(inputs);
	if (locale === "zh") return zh_admin_payments_status_deleted(inputs);
	return zh_tw2_admin_payments_status_deleted(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_Product_Id_LabelInputs */
var en_admin_payments_product_id_label = () => {
	return `Product ID`;
};
var zh_admin_payments_product_id_label = () => {
	return `产品 ID`;
};
/** @type {(inputs: Admin_Payments_Product_Id_LabelInputs) => LocalizedString} */
var zh_tw2_admin_payments_product_id_label = zh_admin_payments_product_id_label;
/**
* | output |
* | --- |
* | "Product ID" |
*
* @param {Admin_Payments_Product_Id_LabelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_product_id_label = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_product_id_label(inputs);
	if (locale === "zh") return zh_admin_payments_product_id_label(inputs);
	return zh_tw2_admin_payments_product_id_label(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_Product_Name_LabelInputs */
var en_admin_payments_product_name_label = () => {
	return `Product Name`;
};
var zh_admin_payments_product_name_label = () => {
	return `产品名称`;
};
/** @type {(inputs: Admin_Payments_Product_Name_LabelInputs) => LocalizedString} */
var zh_tw2_admin_payments_product_name_label = zh_admin_payments_product_name_label;
/**
* | output |
* | --- |
* | "Product Name" |
*
* @param {Admin_Payments_Product_Name_LabelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_product_name_label = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_product_name_label(inputs);
	if (locale === "zh") return zh_admin_payments_product_name_label(inputs);
	return zh_tw2_admin_payments_product_name_label(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_Product_Description_LabelInputs */
var en_admin_payments_product_description_label = () => {
	return `Description`;
};
var zh_admin_payments_product_description_label = () => {
	return `描述`;
};
/** @type {(inputs: Admin_Payments_Product_Description_LabelInputs) => LocalizedString} */
var zh_tw2_admin_payments_product_description_label = zh_admin_payments_product_description_label;
/**
* | output |
* | --- |
* | "Description" |
*
* @param {Admin_Payments_Product_Description_LabelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_product_description_label = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_product_description_label(inputs);
	if (locale === "zh") return zh_admin_payments_product_description_label(inputs);
	return zh_tw2_admin_payments_product_description_label(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_SaveInputs */
var en_admin_payments_save = () => {
	return `Save`;
};
var zh_admin_payments_save = () => {
	return `保存`;
};
/** @type {(inputs: Admin_Payments_SaveInputs) => LocalizedString} */
var zh_tw2_admin_payments_save = zh_admin_payments_save;
/**
* | output |
* | --- |
* | "Save" |
*
* @param {Admin_Payments_SaveInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_save = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_save(inputs);
	if (locale === "zh") return zh_admin_payments_save(inputs);
	return zh_tw2_admin_payments_save(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_SavingInputs */
var en_admin_payments_saving = () => {
	return `Saving...`;
};
var zh_admin_payments_saving = () => {
	return `保存中...`;
};
/** @type {(inputs: Admin_Payments_SavingInputs) => LocalizedString} */
var zh_tw2_admin_payments_saving = zh_admin_payments_saving;
/**
* | output |
* | --- |
* | "Saving..." |
*
* @param {Admin_Payments_SavingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_saving = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_saving(inputs);
	if (locale === "zh") return zh_admin_payments_saving(inputs);
	return zh_tw2_admin_payments_saving(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_CancelInputs */
var en_admin_payments_cancel = () => {
	return `Cancel`;
};
var zh_admin_payments_cancel = () => {
	return `取消`;
};
/** @type {(inputs: Admin_Payments_CancelInputs) => LocalizedString} */
var zh_tw2_admin_payments_cancel = zh_admin_payments_cancel;
/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Admin_Payments_CancelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_cancel = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_cancel(inputs);
	if (locale === "zh") return zh_admin_payments_cancel(inputs);
	return zh_tw2_admin_payments_cancel(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_Update_SuccessInputs */
var en_admin_payments_update_success = () => {
	return `Order updated`;
};
var zh_admin_payments_update_success = () => {
	return `订单已更新`;
};
/** @type {(inputs: Admin_Payments_Update_SuccessInputs) => LocalizedString} */
var zh_tw2_admin_payments_update_success = zh_admin_payments_update_success;
/**
* | output |
* | --- |
* | "Order updated" |
*
* @param {Admin_Payments_Update_SuccessInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_update_success = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_update_success(inputs);
	if (locale === "zh") return zh_admin_payments_update_success(inputs);
	return zh_tw2_admin_payments_update_success(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_Tab_AllInputs */
var en_admin_payments_tab_all = () => {
	return `All`;
};
var zh_admin_payments_tab_all = () => {
	return `全部`;
};
/** @type {(inputs: Admin_Payments_Tab_AllInputs) => LocalizedString} */
var zh_tw2_admin_payments_tab_all = zh_admin_payments_tab_all;
/**
* | output |
* | --- |
* | "All" |
*
* @param {Admin_Payments_Tab_AllInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_tab_all = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_tab_all(inputs);
	if (locale === "zh") return zh_admin_payments_tab_all(inputs);
	return zh_tw2_admin_payments_tab_all(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_Tab_SubscriptionInputs */
var en_admin_payments_tab_subscription = () => {
	return `Subscription`;
};
var zh_admin_payments_tab_subscription = () => {
	return `订阅`;
};
/** @type {(inputs: Admin_Payments_Tab_SubscriptionInputs) => LocalizedString} */
var zh_tw2_admin_payments_tab_subscription = zh_admin_payments_tab_subscription;
/**
* | output |
* | --- |
* | "Subscription" |
*
* @param {Admin_Payments_Tab_SubscriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_tab_subscription = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_tab_subscription(inputs);
	if (locale === "zh") return zh_admin_payments_tab_subscription(inputs);
	return zh_tw2_admin_payments_tab_subscription(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Payments_Tab_One_TimeInputs */
var en_admin_payments_tab_one_time = () => {
	return `One-Time`;
};
var zh_admin_payments_tab_one_time = () => {
	return `一次性`;
};
/** @type {(inputs: Admin_Payments_Tab_One_TimeInputs) => LocalizedString} */
var zh_tw2_admin_payments_tab_one_time = zh_admin_payments_tab_one_time;
/**
* | output |
* | --- |
* | "One-Time" |
*
* @param {Admin_Payments_Tab_One_TimeInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_payments_tab_one_time = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_payments_tab_one_time(inputs);
	if (locale === "zh") return zh_admin_payments_tab_one_time(inputs);
	return zh_tw2_admin_payments_tab_one_time(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_TitleInputs */
var en_admin_subscriptions_title = () => {
	return `Subscriptions`;
};
var zh_admin_subscriptions_title = () => {
	return `订阅管理`;
};
/** @type {(inputs: Admin_Subscriptions_TitleInputs) => LocalizedString} */
var zh_tw2_admin_subscriptions_title = zh_admin_subscriptions_title;
/**
* | output |
* | --- |
* | "Subscriptions" |
*
* @param {Admin_Subscriptions_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_subscriptions_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_subscriptions_title(inputs);
	if (locale === "zh") return zh_admin_subscriptions_title(inputs);
	return zh_tw2_admin_subscriptions_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_DescriptionInputs */
var en_admin_subscriptions_description = () => {
	return `View all subscriptions`;
};
var zh_admin_subscriptions_description = () => {
	return `查看所有订阅`;
};
/** @type {(inputs: Admin_Subscriptions_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_subscriptions_description = zh_admin_subscriptions_description;
/**
* | output |
* | --- |
* | "View all subscriptions" |
*
* @param {Admin_Subscriptions_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_subscriptions_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_subscriptions_description(inputs);
	if (locale === "zh") return zh_admin_subscriptions_description(inputs);
	return zh_tw2_admin_subscriptions_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_All_SubscriptionsInputs */
var en_admin_subscriptions_all_subscriptions = () => {
	return `All Subscriptions`;
};
var zh_admin_subscriptions_all_subscriptions = () => {
	return `所有订阅`;
};
/** @type {(inputs: Admin_Subscriptions_All_SubscriptionsInputs) => LocalizedString} */
var zh_tw2_admin_subscriptions_all_subscriptions = zh_admin_subscriptions_all_subscriptions;
/**
* | output |
* | --- |
* | "All Subscriptions" |
*
* @param {Admin_Subscriptions_All_SubscriptionsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_subscriptions_all_subscriptions = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_subscriptions_all_subscriptions(inputs);
	if (locale === "zh") return zh_admin_subscriptions_all_subscriptions(inputs);
	return zh_tw2_admin_subscriptions_all_subscriptions(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ count: NonNullable<unknown> }} Admin_Subscriptions_CountInputs */
var en_admin_subscriptions_count = (i) => {
	return `${i?.count} subscriptions`;
};
var zh_admin_subscriptions_count = (i) => {
	return `共 ${i?.count} 条`;
};
/** @type {(inputs: Admin_Subscriptions_CountInputs) => LocalizedString} */
var zh_tw2_admin_subscriptions_count = zh_admin_subscriptions_count;
/**
* | output |
* | --- |
* | "{count} subscriptions" |
*
* @param {Admin_Subscriptions_CountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_subscriptions_count = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_subscriptions_count(inputs);
	if (locale === "zh") return zh_admin_subscriptions_count(inputs);
	return zh_tw2_admin_subscriptions_count(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_No_SubscriptionsInputs */
var en_admin_subscriptions_no_subscriptions = () => {
	return `No subscriptions yet`;
};
var zh_admin_subscriptions_no_subscriptions = () => {
	return `暂无订阅记录`;
};
/** @type {(inputs: Admin_Subscriptions_No_SubscriptionsInputs) => LocalizedString} */
var zh_tw2_admin_subscriptions_no_subscriptions = zh_admin_subscriptions_no_subscriptions;
/**
* | output |
* | --- |
* | "No subscriptions yet" |
*
* @param {Admin_Subscriptions_No_SubscriptionsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_subscriptions_no_subscriptions = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_subscriptions_no_subscriptions(inputs);
	if (locale === "zh") return zh_admin_subscriptions_no_subscriptions(inputs);
	return zh_tw2_admin_subscriptions_no_subscriptions(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_Subscription_NoInputs */
var en_admin_subscriptions_subscription_no = () => {
	return `Subscription No`;
};
var zh_admin_subscriptions_subscription_no = () => {
	return `订阅号`;
};
/** @type {(inputs: Admin_Subscriptions_Subscription_NoInputs) => LocalizedString} */
var zh_tw2_admin_subscriptions_subscription_no = zh_admin_subscriptions_subscription_no;
/**
* | output |
* | --- |
* | "Subscription No" |
*
* @param {Admin_Subscriptions_Subscription_NoInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_subscriptions_subscription_no = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_subscriptions_subscription_no(inputs);
	if (locale === "zh") return zh_admin_subscriptions_subscription_no(inputs);
	return zh_tw2_admin_subscriptions_subscription_no(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_UserInputs */
var en_admin_subscriptions_user = () => {
	return `User`;
};
var zh_admin_subscriptions_user = () => {
	return `用户`;
};
/** @type {(inputs: Admin_Subscriptions_UserInputs) => LocalizedString} */
var zh_tw2_admin_subscriptions_user = zh_admin_subscriptions_user;
/**
* | output |
* | --- |
* | "User" |
*
* @param {Admin_Subscriptions_UserInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_subscriptions_user = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_subscriptions_user(inputs);
	if (locale === "zh") return zh_admin_subscriptions_user(inputs);
	return zh_tw2_admin_subscriptions_user(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_AmountInputs */
var en_admin_subscriptions_amount = () => {
	return `Amount`;
};
var zh_admin_subscriptions_amount = () => {
	return `金额`;
};
/** @type {(inputs: Admin_Subscriptions_AmountInputs) => LocalizedString} */
var zh_tw2_admin_subscriptions_amount = zh_admin_subscriptions_amount;
/**
* | output |
* | --- |
* | "Amount" |
*
* @param {Admin_Subscriptions_AmountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_subscriptions_amount = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_subscriptions_amount(inputs);
	if (locale === "zh") return zh_admin_subscriptions_amount(inputs);
	return zh_tw2_admin_subscriptions_amount(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_IntervalInputs */
var en_admin_subscriptions_interval = () => {
	return `Interval`;
};
var zh_admin_subscriptions_interval = () => {
	return `周期`;
};
/** @type {(inputs: Admin_Subscriptions_IntervalInputs) => LocalizedString} */
var zh_tw2_admin_subscriptions_interval = zh_admin_subscriptions_interval;
/**
* | output |
* | --- |
* | "Interval" |
*
* @param {Admin_Subscriptions_IntervalInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_subscriptions_interval = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_subscriptions_interval(inputs);
	if (locale === "zh") return zh_admin_subscriptions_interval(inputs);
	return zh_tw2_admin_subscriptions_interval(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_StatusInputs */
var en_admin_subscriptions_status = () => {
	return `Status`;
};
var zh_admin_subscriptions_status = () => {
	return `状态`;
};
/** @type {(inputs: Admin_Subscriptions_StatusInputs) => LocalizedString} */
var zh_tw2_admin_subscriptions_status = zh_admin_subscriptions_status;
/**
* | output |
* | --- |
* | "Status" |
*
* @param {Admin_Subscriptions_StatusInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_subscriptions_status = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_subscriptions_status(inputs);
	if (locale === "zh") return zh_admin_subscriptions_status(inputs);
	return zh_tw2_admin_subscriptions_status(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_ProviderInputs */
var en_admin_subscriptions_provider = () => {
	return `Provider`;
};
var zh_admin_subscriptions_provider = () => {
	return `支付方式`;
};
/** @type {(inputs: Admin_Subscriptions_ProviderInputs) => LocalizedString} */
var zh_tw2_admin_subscriptions_provider = zh_admin_subscriptions_provider;
/**
* | output |
* | --- |
* | "Provider" |
*
* @param {Admin_Subscriptions_ProviderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_subscriptions_provider = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_subscriptions_provider(inputs);
	if (locale === "zh") return zh_admin_subscriptions_provider(inputs);
	return zh_tw2_admin_subscriptions_provider(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_PeriodInputs */
var en_admin_subscriptions_period = () => {
	return `Period`;
};
var zh_admin_subscriptions_period = () => {
	return `当前周期`;
};
/** @type {(inputs: Admin_Subscriptions_PeriodInputs) => LocalizedString} */
var zh_tw2_admin_subscriptions_period = zh_admin_subscriptions_period;
/**
* | output |
* | --- |
* | "Period" |
*
* @param {Admin_Subscriptions_PeriodInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_subscriptions_period = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_subscriptions_period(inputs);
	if (locale === "zh") return zh_admin_subscriptions_period(inputs);
	return zh_tw2_admin_subscriptions_period(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_Created_AtInputs */
var en_admin_subscriptions_created_at = () => {
	return `Created At`;
};
var zh_admin_subscriptions_created_at = () => {
	return `创建时间`;
};
/** @type {(inputs: Admin_Subscriptions_Created_AtInputs) => LocalizedString} */
var zh_tw2_admin_subscriptions_created_at = zh_admin_subscriptions_created_at;
/**
* | output |
* | --- |
* | "Created At" |
*
* @param {Admin_Subscriptions_Created_AtInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_subscriptions_created_at = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_subscriptions_created_at(inputs);
	if (locale === "zh") return zh_admin_subscriptions_created_at(inputs);
	return zh_tw2_admin_subscriptions_created_at(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_Tab_AllInputs */
var en_admin_subscriptions_tab_all = () => {
	return `All`;
};
var zh_admin_subscriptions_tab_all = () => {
	return `全部`;
};
/** @type {(inputs: Admin_Subscriptions_Tab_AllInputs) => LocalizedString} */
var zh_tw2_admin_subscriptions_tab_all = zh_admin_subscriptions_tab_all;
/**
* | output |
* | --- |
* | "All" |
*
* @param {Admin_Subscriptions_Tab_AllInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_subscriptions_tab_all = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_subscriptions_tab_all(inputs);
	if (locale === "zh") return zh_admin_subscriptions_tab_all(inputs);
	return zh_tw2_admin_subscriptions_tab_all(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_Tab_MonthInputs */
var en_admin_subscriptions_tab_month = () => {
	return `Monthly`;
};
var zh_admin_subscriptions_tab_month = () => {
	return `月付`;
};
/** @type {(inputs: Admin_Subscriptions_Tab_MonthInputs) => LocalizedString} */
var zh_tw2_admin_subscriptions_tab_month = zh_admin_subscriptions_tab_month;
/**
* | output |
* | --- |
* | "Monthly" |
*
* @param {Admin_Subscriptions_Tab_MonthInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_subscriptions_tab_month = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_subscriptions_tab_month(inputs);
	if (locale === "zh") return zh_admin_subscriptions_tab_month(inputs);
	return zh_tw2_admin_subscriptions_tab_month(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Subscriptions_Tab_YearInputs */
var en_admin_subscriptions_tab_year = () => {
	return `Yearly`;
};
var zh_admin_subscriptions_tab_year = () => {
	return `年付`;
};
/** @type {(inputs: Admin_Subscriptions_Tab_YearInputs) => LocalizedString} */
var zh_tw2_admin_subscriptions_tab_year = zh_admin_subscriptions_tab_year;
/**
* | output |
* | --- |
* | "Yearly" |
*
* @param {Admin_Subscriptions_Tab_YearInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_subscriptions_tab_year = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_subscriptions_tab_year(inputs);
	if (locale === "zh") return zh_admin_subscriptions_tab_year(inputs);
	return zh_tw2_admin_subscriptions_tab_year(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_TitleInputs */
var en_admin_credits_title = () => {
	return `Credits`;
};
var zh_admin_credits_title = () => {
	return `积分管理`;
};
/** @type {(inputs: Admin_Credits_TitleInputs) => LocalizedString} */
var zh_tw2_admin_credits_title = zh_admin_credits_title;
/**
* | output |
* | --- |
* | "Credits" |
*
* @param {Admin_Credits_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_credits_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_credits_title(inputs);
	if (locale === "zh") return zh_admin_credits_title(inputs);
	return zh_tw2_admin_credits_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_DescriptionInputs */
var en_admin_credits_description = () => {
	return `Description`;
};
var zh_admin_credits_description = () => {
	return `描述`;
};
/** @type {(inputs: Admin_Credits_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_credits_description = zh_admin_credits_description;
/**
* | output |
* | --- |
* | "Description" |
*
* @param {Admin_Credits_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_credits_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_credits_description(inputs);
	if (locale === "zh") return zh_admin_credits_description(inputs);
	return zh_tw2_admin_credits_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_All_CreditsInputs */
var en_admin_credits_all_credits = () => {
	return `All Credits`;
};
var zh_admin_credits_all_credits = () => {
	return `所有积分`;
};
/** @type {(inputs: Admin_Credits_All_CreditsInputs) => LocalizedString} */
var zh_tw2_admin_credits_all_credits = zh_admin_credits_all_credits;
/**
* | output |
* | --- |
* | "All Credits" |
*
* @param {Admin_Credits_All_CreditsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_credits_all_credits = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_credits_all_credits(inputs);
	if (locale === "zh") return zh_admin_credits_all_credits(inputs);
	return zh_tw2_admin_credits_all_credits(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ count: NonNullable<unknown> }} Admin_Credits_CountInputs */
var en_admin_credits_count = (i) => {
	return `${i?.count} records`;
};
var zh_admin_credits_count = (i) => {
	return `共 ${i?.count} 条`;
};
/** @type {(inputs: Admin_Credits_CountInputs) => LocalizedString} */
var zh_tw2_admin_credits_count = zh_admin_credits_count;
/**
* | output |
* | --- |
* | "{count} records" |
*
* @param {Admin_Credits_CountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_credits_count = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_credits_count(inputs);
	if (locale === "zh") return zh_admin_credits_count(inputs);
	return zh_tw2_admin_credits_count(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_No_CreditsInputs */
var en_admin_credits_no_credits = () => {
	return `No credit records yet`;
};
var zh_admin_credits_no_credits = () => {
	return `暂无积分记录`;
};
/** @type {(inputs: Admin_Credits_No_CreditsInputs) => LocalizedString} */
var zh_tw2_admin_credits_no_credits = zh_admin_credits_no_credits;
/**
* | output |
* | --- |
* | "No credit records yet" |
*
* @param {Admin_Credits_No_CreditsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_credits_no_credits = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_credits_no_credits(inputs);
	if (locale === "zh") return zh_admin_credits_no_credits(inputs);
	return zh_tw2_admin_credits_no_credits(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_Transaction_NoInputs */
var en_admin_credits_transaction_no = () => {
	return `Transaction No`;
};
var zh_admin_credits_transaction_no = () => {
	return `交易单号`;
};
/** @type {(inputs: Admin_Credits_Transaction_NoInputs) => LocalizedString} */
var zh_tw2_admin_credits_transaction_no = zh_admin_credits_transaction_no;
/**
* | output |
* | --- |
* | "Transaction No" |
*
* @param {Admin_Credits_Transaction_NoInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_credits_transaction_no = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_credits_transaction_no(inputs);
	if (locale === "zh") return zh_admin_credits_transaction_no(inputs);
	return zh_tw2_admin_credits_transaction_no(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_UserInputs */
var en_admin_credits_user = () => {
	return `User`;
};
var zh_admin_credits_user = () => {
	return `用户`;
};
/** @type {(inputs: Admin_Credits_UserInputs) => LocalizedString} */
var zh_tw2_admin_credits_user = zh_admin_credits_user;
/**
* | output |
* | --- |
* | "User" |
*
* @param {Admin_Credits_UserInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_credits_user = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_credits_user(inputs);
	if (locale === "zh") return zh_admin_credits_user(inputs);
	return zh_tw2_admin_credits_user(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_AmountInputs */
var en_admin_credits_amount = () => {
	return `Amount`;
};
var zh_admin_credits_amount = () => {
	return `数量`;
};
/** @type {(inputs: Admin_Credits_AmountInputs) => LocalizedString} */
var zh_tw2_admin_credits_amount = zh_admin_credits_amount;
/**
* | output |
* | --- |
* | "Amount" |
*
* @param {Admin_Credits_AmountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_credits_amount = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_credits_amount(inputs);
	if (locale === "zh") return zh_admin_credits_amount(inputs);
	return zh_tw2_admin_credits_amount(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_RemainingInputs */
var en_admin_credits_remaining = () => {
	return `Remaining`;
};
var zh_admin_credits_remaining = () => {
	return `剩余`;
};
/** @type {(inputs: Admin_Credits_RemainingInputs) => LocalizedString} */
var zh_tw2_admin_credits_remaining = zh_admin_credits_remaining;
/**
* | output |
* | --- |
* | "Remaining" |
*
* @param {Admin_Credits_RemainingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_credits_remaining = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_credits_remaining(inputs);
	if (locale === "zh") return zh_admin_credits_remaining(inputs);
	return zh_tw2_admin_credits_remaining(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_TypeInputs */
var en_admin_credits_type = () => {
	return `Type`;
};
var zh_admin_credits_type = () => {
	return `类型`;
};
/** @type {(inputs: Admin_Credits_TypeInputs) => LocalizedString} */
var zh_tw2_admin_credits_type = zh_admin_credits_type;
/**
* | output |
* | --- |
* | "Type" |
*
* @param {Admin_Credits_TypeInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_credits_type = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_credits_type(inputs);
	if (locale === "zh") return zh_admin_credits_type(inputs);
	return zh_tw2_admin_credits_type(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_SceneInputs */
var en_admin_credits_scene = () => {
	return `Scene`;
};
var zh_admin_credits_scene = () => {
	return `场景`;
};
/** @type {(inputs: Admin_Credits_SceneInputs) => LocalizedString} */
var zh_tw2_admin_credits_scene = zh_admin_credits_scene;
/**
* | output |
* | --- |
* | "Scene" |
*
* @param {Admin_Credits_SceneInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_credits_scene = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_credits_scene(inputs);
	if (locale === "zh") return zh_admin_credits_scene(inputs);
	return zh_tw2_admin_credits_scene(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_Expires_AtInputs */
var en_admin_credits_expires_at = () => {
	return `Expires At`;
};
var zh_admin_credits_expires_at = () => {
	return `过期时间`;
};
/** @type {(inputs: Admin_Credits_Expires_AtInputs) => LocalizedString} */
var zh_tw2_admin_credits_expires_at = zh_admin_credits_expires_at;
/**
* | output |
* | --- |
* | "Expires At" |
*
* @param {Admin_Credits_Expires_AtInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_credits_expires_at = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_credits_expires_at(inputs);
	if (locale === "zh") return zh_admin_credits_expires_at(inputs);
	return zh_tw2_admin_credits_expires_at(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_Created_AtInputs */
var en_admin_credits_created_at = () => {
	return `Created At`;
};
var zh_admin_credits_created_at = () => {
	return `创建时间`;
};
/** @type {(inputs: Admin_Credits_Created_AtInputs) => LocalizedString} */
var zh_tw2_admin_credits_created_at = zh_admin_credits_created_at;
/**
* | output |
* | --- |
* | "Created At" |
*
* @param {Admin_Credits_Created_AtInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_credits_created_at = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_credits_created_at(inputs);
	if (locale === "zh") return zh_admin_credits_created_at(inputs);
	return zh_tw2_admin_credits_created_at(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_Tab_AllInputs */
var en_admin_credits_tab_all = () => {
	return `All`;
};
var zh_admin_credits_tab_all = () => {
	return `全部`;
};
/** @type {(inputs: Admin_Credits_Tab_AllInputs) => LocalizedString} */
var zh_tw2_admin_credits_tab_all = zh_admin_credits_tab_all;
/**
* | output |
* | --- |
* | "All" |
*
* @param {Admin_Credits_Tab_AllInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_credits_tab_all = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_credits_tab_all(inputs);
	if (locale === "zh") return zh_admin_credits_tab_all(inputs);
	return zh_tw2_admin_credits_tab_all(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_Tab_GrantInputs */
var en_admin_credits_tab_grant = () => {
	return `Grant`;
};
var zh_admin_credits_tab_grant = () => {
	return `授予`;
};
/** @type {(inputs: Admin_Credits_Tab_GrantInputs) => LocalizedString} */
var zh_tw2_admin_credits_tab_grant = zh_admin_credits_tab_grant;
/**
* | output |
* | --- |
* | "Grant" |
*
* @param {Admin_Credits_Tab_GrantInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_credits_tab_grant = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_credits_tab_grant(inputs);
	if (locale === "zh") return zh_admin_credits_tab_grant(inputs);
	return zh_tw2_admin_credits_tab_grant(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Credits_Tab_ConsumeInputs */
var en_admin_credits_tab_consume = () => {
	return `Consume`;
};
var zh_admin_credits_tab_consume = () => {
	return `消费`;
};
/** @type {(inputs: Admin_Credits_Tab_ConsumeInputs) => LocalizedString} */
var zh_tw2_admin_credits_tab_consume = zh_admin_credits_tab_consume;
/**
* | output |
* | --- |
* | "Consume" |
*
* @param {Admin_Credits_Tab_ConsumeInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_credits_tab_consume = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_credits_tab_consume(inputs);
	if (locale === "zh") return zh_admin_credits_tab_consume(inputs);
	return zh_tw2_admin_credits_tab_consume(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_TitleInputs */
var en_admin_invite_codes_title = () => {
	return `Invite Codes`;
};
var zh_admin_invite_codes_title = () => {
	return `邀请码`;
};
/** @type {(inputs: Admin_Invite_Codes_TitleInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_title = zh_admin_invite_codes_title;
/**
* | output |
* | --- |
* | "Invite Codes" |
*
* @param {Admin_Invite_Codes_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_title(inputs);
	if (locale === "zh") return zh_admin_invite_codes_title(inputs);
	return zh_tw2_admin_invite_codes_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_DescriptionInputs */
var en_admin_invite_codes_description = () => {
	return `Manage invite codes for sign-up`;
};
var zh_admin_invite_codes_description = () => {
	return `管理用于注册的邀请码`;
};
/** @type {(inputs: Admin_Invite_Codes_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_description = zh_admin_invite_codes_description;
/**
* | output |
* | --- |
* | "Manage invite codes for sign-up" |
*
* @param {Admin_Invite_Codes_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_description(inputs);
	if (locale === "zh") return zh_admin_invite_codes_description(inputs);
	return zh_tw2_admin_invite_codes_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Create_ButtonInputs */
var en_admin_invite_codes_create_button = () => {
	return `New Invite Code`;
};
var zh_admin_invite_codes_create_button = () => {
	return `新建邀请码`;
};
/** @type {(inputs: Admin_Invite_Codes_Create_ButtonInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_create_button = zh_admin_invite_codes_create_button;
/**
* | output |
* | --- |
* | "New Invite Code" |
*
* @param {Admin_Invite_Codes_Create_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_create_button = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_create_button(inputs);
	if (locale === "zh") return zh_admin_invite_codes_create_button(inputs);
	return zh_tw2_admin_invite_codes_create_button(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Create_TitleInputs */
var en_admin_invite_codes_create_title = () => {
	return `Create Invite Codes`;
};
var zh_admin_invite_codes_create_title = () => {
	return `创建邀请码`;
};
/** @type {(inputs: Admin_Invite_Codes_Create_TitleInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_create_title = zh_admin_invite_codes_create_title;
/**
* | output |
* | --- |
* | "Create Invite Codes" |
*
* @param {Admin_Invite_Codes_Create_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_create_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_create_title(inputs);
	if (locale === "zh") return zh_admin_invite_codes_create_title(inputs);
	return zh_tw2_admin_invite_codes_create_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Create_DescriptionInputs */
var en_admin_invite_codes_create_description = () => {
	return `Generate one or more invite codes. Random codes are produced automatically.`;
};
var zh_admin_invite_codes_create_description = () => {
	return `可一次生成一个或多个,系统会自动生成随机码。`;
};
/** @type {(inputs: Admin_Invite_Codes_Create_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_create_description = zh_admin_invite_codes_create_description;
/**
* | output |
* | --- |
* | "Generate one or more invite codes. Random codes are produced automatically." |
*
* @param {Admin_Invite_Codes_Create_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_create_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_create_description(inputs);
	if (locale === "zh") return zh_admin_invite_codes_create_description(inputs);
	return zh_tw2_admin_invite_codes_create_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Create_SubmitInputs */
var en_admin_invite_codes_create_submit = () => {
	return `Create`;
};
var zh_admin_invite_codes_create_submit = () => {
	return `创建`;
};
/** @type {(inputs: Admin_Invite_Codes_Create_SubmitInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_create_submit = zh_admin_invite_codes_create_submit;
/**
* | output |
* | --- |
* | "Create" |
*
* @param {Admin_Invite_Codes_Create_SubmitInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_create_submit = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_create_submit(inputs);
	if (locale === "zh") return zh_admin_invite_codes_create_submit(inputs);
	return zh_tw2_admin_invite_codes_create_submit(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_CreatingInputs */
var en_admin_invite_codes_creating = () => {
	return `Creating...`;
};
var zh_admin_invite_codes_creating = () => {
	return `创建中...`;
};
/** @type {(inputs: Admin_Invite_Codes_CreatingInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_creating = zh_admin_invite_codes_creating;
/**
* | output |
* | --- |
* | "Creating..." |
*
* @param {Admin_Invite_Codes_CreatingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_creating = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_creating(inputs);
	if (locale === "zh") return zh_admin_invite_codes_creating(inputs);
	return zh_tw2_admin_invite_codes_creating(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Create_SuccessInputs */
var en_admin_invite_codes_create_success = () => {
	return `Invite code(s) created`;
};
var zh_admin_invite_codes_create_success = () => {
	return `邀请码创建成功`;
};
/** @type {(inputs: Admin_Invite_Codes_Create_SuccessInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_create_success = zh_admin_invite_codes_create_success;
/**
* | output |
* | --- |
* | "Invite code(s) created" |
*
* @param {Admin_Invite_Codes_Create_SuccessInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_create_success = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_create_success(inputs);
	if (locale === "zh") return zh_admin_invite_codes_create_success(inputs);
	return zh_tw2_admin_invite_codes_create_success(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_CancelInputs */
var en_admin_invite_codes_cancel = () => {
	return `Cancel`;
};
var zh_admin_invite_codes_cancel = () => {
	return `取消`;
};
/** @type {(inputs: Admin_Invite_Codes_CancelInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_cancel = zh_admin_invite_codes_cancel;
/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Admin_Invite_Codes_CancelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_cancel = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_cancel(inputs);
	if (locale === "zh") return zh_admin_invite_codes_cancel(inputs);
	return zh_tw2_admin_invite_codes_cancel(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Count_LabelInputs */
var en_admin_invite_codes_count_label = () => {
	return `How many`;
};
var zh_admin_invite_codes_count_label = () => {
	return `数量`;
};
/** @type {(inputs: Admin_Invite_Codes_Count_LabelInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_count_label = zh_admin_invite_codes_count_label;
/**
* | output |
* | --- |
* | "How many" |
*
* @param {Admin_Invite_Codes_Count_LabelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_count_label = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_count_label(inputs);
	if (locale === "zh") return zh_admin_invite_codes_count_label(inputs);
	return zh_tw2_admin_invite_codes_count_label(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Max_Uses_LabelInputs */
var en_admin_invite_codes_max_uses_label = () => {
	return `Max uses (per code)`;
};
var zh_admin_invite_codes_max_uses_label = () => {
	return `最大使用次数(每个码)`;
};
/** @type {(inputs: Admin_Invite_Codes_Max_Uses_LabelInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_max_uses_label = zh_admin_invite_codes_max_uses_label;
/**
* | output |
* | --- |
* | "Max uses (per code)" |
*
* @param {Admin_Invite_Codes_Max_Uses_LabelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_max_uses_label = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_max_uses_label(inputs);
	if (locale === "zh") return zh_admin_invite_codes_max_uses_label(inputs);
	return zh_tw2_admin_invite_codes_max_uses_label(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Trial_Days_LabelInputs */
var en_admin_invite_codes_trial_days_label = () => {
	return `Trial days`;
};
var zh_admin_invite_codes_trial_days_label = () => {
	return `试用天数`;
};
/** @type {(inputs: Admin_Invite_Codes_Trial_Days_LabelInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_trial_days_label = zh_admin_invite_codes_trial_days_label;
/**
* | output |
* | --- |
* | "Trial days" |
*
* @param {Admin_Invite_Codes_Trial_Days_LabelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_trial_days_label = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_trial_days_label(inputs);
	if (locale === "zh") return zh_admin_invite_codes_trial_days_label(inputs);
	return zh_tw2_admin_invite_codes_trial_days_label(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Expires_LabelInputs */
var en_admin_invite_codes_expires_label = () => {
	return `Expires at (optional)`;
};
var zh_admin_invite_codes_expires_label = () => {
	return `过期时间(可选)`;
};
/** @type {(inputs: Admin_Invite_Codes_Expires_LabelInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_expires_label = zh_admin_invite_codes_expires_label;
/**
* | output |
* | --- |
* | "Expires at (optional)" |
*
* @param {Admin_Invite_Codes_Expires_LabelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_expires_label = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_expires_label(inputs);
	if (locale === "zh") return zh_admin_invite_codes_expires_label(inputs);
	return zh_tw2_admin_invite_codes_expires_label(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Note_LabelInputs */
var en_admin_invite_codes_note_label = () => {
	return `Note`;
};
var zh_admin_invite_codes_note_label = () => {
	return `备注`;
};
/** @type {(inputs: Admin_Invite_Codes_Note_LabelInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_note_label = zh_admin_invite_codes_note_label;
/**
* | output |
* | --- |
* | "Note" |
*
* @param {Admin_Invite_Codes_Note_LabelInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_note_label = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_note_label(inputs);
	if (locale === "zh") return zh_admin_invite_codes_note_label(inputs);
	return zh_tw2_admin_invite_codes_note_label(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Note_PlaceholderInputs */
var en_admin_invite_codes_note_placeholder = () => {
	return `Optional note for internal reference`;
};
var zh_admin_invite_codes_note_placeholder = () => {
	return `用于内部参考的备注信息`;
};
/** @type {(inputs: Admin_Invite_Codes_Note_PlaceholderInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_note_placeholder = zh_admin_invite_codes_note_placeholder;
/**
* | output |
* | --- |
* | "Optional note for internal reference" |
*
* @param {Admin_Invite_Codes_Note_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_note_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_note_placeholder(inputs);
	if (locale === "zh") return zh_admin_invite_codes_note_placeholder(inputs);
	return zh_tw2_admin_invite_codes_note_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Invalid_InputInputs */
var en_admin_invite_codes_invalid_input = () => {
	return `Please check your input`;
};
var zh_admin_invite_codes_invalid_input = () => {
	return `请检查输入`;
};
/** @type {(inputs: Admin_Invite_Codes_Invalid_InputInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_invalid_input = zh_admin_invite_codes_invalid_input;
/**
* | output |
* | --- |
* | "Please check your input" |
*
* @param {Admin_Invite_Codes_Invalid_InputInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_invalid_input = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_invalid_input(inputs);
	if (locale === "zh") return zh_admin_invite_codes_invalid_input(inputs);
	return zh_tw2_admin_invite_codes_invalid_input(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Code_ColInputs */
var en_admin_invite_codes_code_col = () => {
	return `Code`;
};
var zh_admin_invite_codes_code_col = () => {
	return `邀请码`;
};
/** @type {(inputs: Admin_Invite_Codes_Code_ColInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_code_col = zh_admin_invite_codes_code_col;
/**
* | output |
* | --- |
* | "Code" |
*
* @param {Admin_Invite_Codes_Code_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_code_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_code_col(inputs);
	if (locale === "zh") return zh_admin_invite_codes_code_col(inputs);
	return zh_tw2_admin_invite_codes_code_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Usage_ColInputs */
var en_admin_invite_codes_usage_col = () => {
	return `Usage`;
};
var zh_admin_invite_codes_usage_col = () => {
	return `已用`;
};
/** @type {(inputs: Admin_Invite_Codes_Usage_ColInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_usage_col = zh_admin_invite_codes_usage_col;
/**
* | output |
* | --- |
* | "Usage" |
*
* @param {Admin_Invite_Codes_Usage_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_usage_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_usage_col(inputs);
	if (locale === "zh") return zh_admin_invite_codes_usage_col(inputs);
	return zh_tw2_admin_invite_codes_usage_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Trial_Days_ColInputs */
var en_admin_invite_codes_trial_days_col = () => {
	return `Trial`;
};
var zh_admin_invite_codes_trial_days_col = () => {
	return `试用`;
};
/** @type {(inputs: Admin_Invite_Codes_Trial_Days_ColInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_trial_days_col = zh_admin_invite_codes_trial_days_col;
/**
* | output |
* | --- |
* | "Trial" |
*
* @param {Admin_Invite_Codes_Trial_Days_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_trial_days_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_trial_days_col(inputs);
	if (locale === "zh") return zh_admin_invite_codes_trial_days_col(inputs);
	return zh_tw2_admin_invite_codes_trial_days_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Note_ColInputs */
var en_admin_invite_codes_note_col = () => {
	return `Note`;
};
var zh_admin_invite_codes_note_col = () => {
	return `备注`;
};
/** @type {(inputs: Admin_Invite_Codes_Note_ColInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_note_col = zh_admin_invite_codes_note_col;
/**
* | output |
* | --- |
* | "Note" |
*
* @param {Admin_Invite_Codes_Note_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_note_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_note_col(inputs);
	if (locale === "zh") return zh_admin_invite_codes_note_col(inputs);
	return zh_tw2_admin_invite_codes_note_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Expires_ColInputs */
var en_admin_invite_codes_expires_col = () => {
	return `Expires`;
};
var zh_admin_invite_codes_expires_col = () => {
	return `过期`;
};
/** @type {(inputs: Admin_Invite_Codes_Expires_ColInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_expires_col = zh_admin_invite_codes_expires_col;
/**
* | output |
* | --- |
* | "Expires" |
*
* @param {Admin_Invite_Codes_Expires_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_expires_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_expires_col(inputs);
	if (locale === "zh") return zh_admin_invite_codes_expires_col(inputs);
	return zh_tw2_admin_invite_codes_expires_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Created_ColInputs */
var en_admin_invite_codes_created_col = () => {
	return `Created`;
};
var zh_admin_invite_codes_created_col = () => {
	return `创建于`;
};
/** @type {(inputs: Admin_Invite_Codes_Created_ColInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_created_col = zh_admin_invite_codes_created_col;
/**
* | output |
* | --- |
* | "Created" |
*
* @param {Admin_Invite_Codes_Created_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_created_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_created_col(inputs);
	if (locale === "zh") return zh_admin_invite_codes_created_col(inputs);
	return zh_tw2_admin_invite_codes_created_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Actions_ColInputs */
var en_admin_invite_codes_actions_col = () => {
	return `Actions`;
};
var zh_admin_invite_codes_actions_col = () => {
	return `操作`;
};
/** @type {(inputs: Admin_Invite_Codes_Actions_ColInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_actions_col = zh_admin_invite_codes_actions_col;
/**
* | output |
* | --- |
* | "Actions" |
*
* @param {Admin_Invite_Codes_Actions_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_actions_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_actions_col(inputs);
	if (locale === "zh") return zh_admin_invite_codes_actions_col(inputs);
	return zh_tw2_admin_invite_codes_actions_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_EmptyInputs */
var en_admin_invite_codes_empty = () => {
	return `No invite codes yet`;
};
var zh_admin_invite_codes_empty = () => {
	return `暂无邀请码`;
};
/** @type {(inputs: Admin_Invite_Codes_EmptyInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_empty = zh_admin_invite_codes_empty;
/**
* | output |
* | --- |
* | "No invite codes yet" |
*
* @param {Admin_Invite_Codes_EmptyInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_empty = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_empty(inputs);
	if (locale === "zh") return zh_admin_invite_codes_empty(inputs);
	return zh_tw2_admin_invite_codes_empty(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_CopiedInputs */
var en_admin_invite_codes_copied = () => {
	return `Copied to clipboard`;
};
var zh_admin_invite_codes_copied = () => {
	return `已复制`;
};
/** @type {(inputs: Admin_Invite_Codes_CopiedInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_copied = zh_admin_invite_codes_copied;
/**
* | output |
* | --- |
* | "Copied to clipboard" |
*
* @param {Admin_Invite_Codes_CopiedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_copied = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_copied(inputs);
	if (locale === "zh") return zh_admin_invite_codes_copied(inputs);
	return zh_tw2_admin_invite_codes_copied(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Delete_TitleInputs */
var en_admin_invite_codes_delete_title = () => {
	return `Delete invite code?`;
};
var zh_admin_invite_codes_delete_title = () => {
	return `确认删除邀请码?`;
};
/** @type {(inputs: Admin_Invite_Codes_Delete_TitleInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_delete_title = zh_admin_invite_codes_delete_title;
/**
* | output |
* | --- |
* | "Delete invite code?" |
*
* @param {Admin_Invite_Codes_Delete_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_delete_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_delete_title(inputs);
	if (locale === "zh") return zh_admin_invite_codes_delete_title(inputs);
	return zh_tw2_admin_invite_codes_delete_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Delete_DescriptionInputs */
var en_admin_invite_codes_delete_description = () => {
	return `This action cannot be undone.`;
};
var zh_admin_invite_codes_delete_description = () => {
	return `此操作不可撤销。`;
};
/** @type {(inputs: Admin_Invite_Codes_Delete_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_delete_description = zh_admin_invite_codes_delete_description;
/**
* | output |
* | --- |
* | "This action cannot be undone." |
*
* @param {Admin_Invite_Codes_Delete_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_delete_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_delete_description(inputs);
	if (locale === "zh") return zh_admin_invite_codes_delete_description(inputs);
	return zh_tw2_admin_invite_codes_delete_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Delete_ConfirmInputs */
var en_admin_invite_codes_delete_confirm = () => {
	return `Delete`;
};
var zh_admin_invite_codes_delete_confirm = () => {
	return `删除`;
};
/** @type {(inputs: Admin_Invite_Codes_Delete_ConfirmInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_delete_confirm = zh_admin_invite_codes_delete_confirm;
/**
* | output |
* | --- |
* | "Delete" |
*
* @param {Admin_Invite_Codes_Delete_ConfirmInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_delete_confirm = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_delete_confirm(inputs);
	if (locale === "zh") return zh_admin_invite_codes_delete_confirm(inputs);
	return zh_tw2_admin_invite_codes_delete_confirm(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Delete_SuccessInputs */
var en_admin_invite_codes_delete_success = () => {
	return `Invite code deleted`;
};
var zh_admin_invite_codes_delete_success = () => {
	return `邀请码已删除`;
};
/** @type {(inputs: Admin_Invite_Codes_Delete_SuccessInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_delete_success = zh_admin_invite_codes_delete_success;
/**
* | output |
* | --- |
* | "Invite code deleted" |
*
* @param {Admin_Invite_Codes_Delete_SuccessInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_delete_success = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_delete_success(inputs);
	if (locale === "zh") return zh_admin_invite_codes_delete_success(inputs);
	return zh_tw2_admin_invite_codes_delete_success(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Tab_AllInputs */
var en_admin_invite_codes_tab_all = () => {
	return `All`;
};
var zh_admin_invite_codes_tab_all = () => {
	return `全部`;
};
/** @type {(inputs: Admin_Invite_Codes_Tab_AllInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_tab_all = zh_admin_invite_codes_tab_all;
/**
* | output |
* | --- |
* | "All" |
*
* @param {Admin_Invite_Codes_Tab_AllInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_tab_all = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_tab_all(inputs);
	if (locale === "zh") return zh_admin_invite_codes_tab_all(inputs);
	return zh_tw2_admin_invite_codes_tab_all(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Tab_AvailableInputs */
var en_admin_invite_codes_tab_available = () => {
	return `Available`;
};
var zh_admin_invite_codes_tab_available = () => {
	return `可用`;
};
/** @type {(inputs: Admin_Invite_Codes_Tab_AvailableInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_tab_available = zh_admin_invite_codes_tab_available;
/**
* | output |
* | --- |
* | "Available" |
*
* @param {Admin_Invite_Codes_Tab_AvailableInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_tab_available = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_tab_available(inputs);
	if (locale === "zh") return zh_admin_invite_codes_tab_available(inputs);
	return zh_tw2_admin_invite_codes_tab_available(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Invite_Codes_Tab_UsedInputs */
var en_admin_invite_codes_tab_used = () => {
	return `Used`;
};
var zh_admin_invite_codes_tab_used = () => {
	return `已使用`;
};
/** @type {(inputs: Admin_Invite_Codes_Tab_UsedInputs) => LocalizedString} */
var zh_tw2_admin_invite_codes_tab_used = zh_admin_invite_codes_tab_used;
/**
* | output |
* | --- |
* | "Used" |
*
* @param {Admin_Invite_Codes_Tab_UsedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_invite_codes_tab_used = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_invite_codes_tab_used(inputs);
	if (locale === "zh") return zh_admin_invite_codes_tab_used(inputs);
	return zh_tw2_admin_invite_codes_tab_used(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_TitleInputs */
var en_admin_settings_title = () => {
	return `System Settings`;
};
var zh_admin_settings_title = () => {
	return `系统设置`;
};
/** @type {(inputs: Admin_Settings_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_title = zh_admin_settings_title;
/**
* | output |
* | --- |
* | "System Settings" |
*
* @param {Admin_Settings_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_title(inputs);
	if (locale === "zh") return zh_admin_settings_title(inputs);
	return zh_tw2_admin_settings_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_DescriptionInputs */
var en_admin_settings_description = () => {
	return `Configure system-wide settings`;
};
var zh_admin_settings_description = () => {
	return `配置系统级设置`;
};
/** @type {(inputs: Admin_Settings_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_description = zh_admin_settings_description;
/**
* | output |
* | --- |
* | "Configure system-wide settings" |
*
* @param {Admin_Settings_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_description(inputs);
	if (locale === "zh") return zh_admin_settings_description(inputs);
	return zh_tw2_admin_settings_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_SaveInputs */
var en_admin_settings_save = () => {
	return `Save`;
};
var zh_admin_settings_save = () => {
	return `保存`;
};
/** @type {(inputs: Admin_Settings_SaveInputs) => LocalizedString} */
var zh_tw2_admin_settings_save = zh_admin_settings_save;
/**
* | output |
* | --- |
* | "Save" |
*
* @param {Admin_Settings_SaveInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_save = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_save(inputs);
	if (locale === "zh") return zh_admin_settings_save(inputs);
	return zh_tw2_admin_settings_save(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_SavingInputs */
var en_admin_settings_saving = () => {
	return `Saving...`;
};
var zh_admin_settings_saving = () => {
	return `保存中...`;
};
/** @type {(inputs: Admin_Settings_SavingInputs) => LocalizedString} */
var zh_tw2_admin_settings_saving = zh_admin_settings_saving;
/**
* | output |
* | --- |
* | "Saving..." |
*
* @param {Admin_Settings_SavingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_saving = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_saving(inputs);
	if (locale === "zh") return zh_admin_settings_saving(inputs);
	return zh_tw2_admin_settings_saving(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Save_SuccessInputs */
var en_admin_settings_save_success = () => {
	return `Settings saved`;
};
var zh_admin_settings_save_success = () => {
	return `设置已保存`;
};
/** @type {(inputs: Admin_Settings_Save_SuccessInputs) => LocalizedString} */
var zh_tw2_admin_settings_save_success = zh_admin_settings_save_success;
/**
* | output |
* | --- |
* | "Settings saved" |
*
* @param {Admin_Settings_Save_SuccessInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_save_success = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_save_success(inputs);
	if (locale === "zh") return zh_admin_settings_save_success(inputs);
	return zh_tw2_admin_settings_save_success(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Save_ErrorInputs */
var en_admin_settings_save_error = () => {
	return `Failed to save`;
};
var zh_admin_settings_save_error = () => {
	return `保存失败`;
};
/** @type {(inputs: Admin_Settings_Save_ErrorInputs) => LocalizedString} */
var zh_tw2_admin_settings_save_error = zh_admin_settings_save_error;
/**
* | output |
* | --- |
* | "Failed to save" |
*
* @param {Admin_Settings_Save_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_save_error = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_save_error(inputs);
	if (locale === "zh") return zh_admin_settings_save_error(inputs);
	return zh_tw2_admin_settings_save_error(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Test_ButtonInputs */
var en_admin_settings_test_button = () => {
	return `Test`;
};
var zh_admin_settings_test_button = () => {
	return `测试`;
};
/** @type {(inputs: Admin_Settings_Test_ButtonInputs) => LocalizedString} */
var zh_tw2_admin_settings_test_button = zh_admin_settings_test_button;
/**
* | output |
* | --- |
* | "Test" |
*
* @param {Admin_Settings_Test_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_test_button = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_test_button(inputs);
	if (locale === "zh") return zh_admin_settings_test_button(inputs);
	return zh_tw2_admin_settings_test_button(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ group: NonNullable<unknown> }} Admin_Settings_Test_TitleInputs */
var en_admin_settings_test_title = (i) => {
	return `Test ${i?.group}`;
};
var zh_admin_settings_test_title = (i) => {
	return `测试 ${i?.group}`;
};
/** @type {(inputs: Admin_Settings_Test_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_test_title = zh_admin_settings_test_title;
/**
* | output |
* | --- |
* | "Test {group}" |
*
* @param {Admin_Settings_Test_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_test_title = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_test_title(inputs);
	if (locale === "zh") return zh_admin_settings_test_title(inputs);
	return zh_tw2_admin_settings_test_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Test_DescriptionInputs */
var en_admin_settings_test_description = () => {
	return `Run a live request with your current saved config. No orders or data are persisted.`;
};
var zh_admin_settings_test_description = () => {
	return `使用当前已保存的配置发起一次真实请求，不会生成订单或写入数据。`;
};
/** @type {(inputs: Admin_Settings_Test_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_test_description = zh_admin_settings_test_description;
/**
* | output |
* | --- |
* | "Run a live request with your current saved config. No orders or data are persisted." |
*
* @param {Admin_Settings_Test_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_test_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_test_description(inputs);
	if (locale === "zh") return zh_admin_settings_test_description(inputs);
	return zh_tw2_admin_settings_test_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Test_RunInputs */
var en_admin_settings_test_run = () => {
	return `Run Test`;
};
var zh_admin_settings_test_run = () => {
	return `开始测试`;
};
/** @type {(inputs: Admin_Settings_Test_RunInputs) => LocalizedString} */
var zh_tw2_admin_settings_test_run = zh_admin_settings_test_run;
/**
* | output |
* | --- |
* | "Run Test" |
*
* @param {Admin_Settings_Test_RunInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_test_run = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_test_run(inputs);
	if (locale === "zh") return zh_admin_settings_test_run(inputs);
	return zh_tw2_admin_settings_test_run(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Test_RunningInputs */
var en_admin_settings_test_running = () => {
	return `Running...`;
};
var zh_admin_settings_test_running = () => {
	return `测试中...`;
};
/** @type {(inputs: Admin_Settings_Test_RunningInputs) => LocalizedString} */
var zh_tw2_admin_settings_test_running = zh_admin_settings_test_running;
/**
* | output |
* | --- |
* | "Running..." |
*
* @param {Admin_Settings_Test_RunningInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_test_running = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_test_running(inputs);
	if (locale === "zh") return zh_admin_settings_test_running(inputs);
	return zh_tw2_admin_settings_test_running(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Test_CloseInputs */
var en_admin_settings_test_close = () => {
	return `Close`;
};
var zh_admin_settings_test_close = () => {
	return `关闭`;
};
/** @type {(inputs: Admin_Settings_Test_CloseInputs) => LocalizedString} */
var zh_tw2_admin_settings_test_close = zh_admin_settings_test_close;
/**
* | output |
* | --- |
* | "Close" |
*
* @param {Admin_Settings_Test_CloseInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_test_close = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_test_close(inputs);
	if (locale === "zh") return zh_admin_settings_test_close(inputs);
	return zh_tw2_admin_settings_test_close(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Test_ErrorInputs */
var en_admin_settings_test_error = () => {
	return `Test failed`;
};
var zh_admin_settings_test_error = () => {
	return `测试失败`;
};
/** @type {(inputs: Admin_Settings_Test_ErrorInputs) => LocalizedString} */
var zh_tw2_admin_settings_test_error = zh_admin_settings_test_error;
/**
* | output |
* | --- |
* | "Test failed" |
*
* @param {Admin_Settings_Test_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_test_error = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_test_error(inputs);
	if (locale === "zh") return zh_admin_settings_test_error(inputs);
	return zh_tw2_admin_settings_test_error(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Tabs_GeneralInputs */
var en_admin_settings_tabs_general = () => {
	return `General`;
};
var zh_admin_settings_tabs_general = () => {
	return `常规`;
};
/** @type {(inputs: Admin_Settings_Tabs_GeneralInputs) => LocalizedString} */
var zh_tw2_admin_settings_tabs_general = zh_admin_settings_tabs_general;
/**
* | output |
* | --- |
* | "General" |
*
* @param {Admin_Settings_Tabs_GeneralInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_tabs_general = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_tabs_general(inputs);
	if (locale === "zh") return zh_admin_settings_tabs_general(inputs);
	return zh_tw2_admin_settings_tabs_general(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Tabs_AuthInputs */
var en_admin_settings_tabs_auth = () => {
	return `Auth`;
};
var zh_admin_settings_tabs_auth = () => {
	return `认证`;
};
/** @type {(inputs: Admin_Settings_Tabs_AuthInputs) => LocalizedString} */
var zh_tw2_admin_settings_tabs_auth = zh_admin_settings_tabs_auth;
/**
* | output |
* | --- |
* | "Auth" |
*
* @param {Admin_Settings_Tabs_AuthInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_tabs_auth = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_tabs_auth(inputs);
	if (locale === "zh") return zh_admin_settings_tabs_auth(inputs);
	return zh_tw2_admin_settings_tabs_auth(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Tabs_PaymentInputs */
var en_admin_settings_tabs_payment = () => {
	return `Payment`;
};
var zh_admin_settings_tabs_payment = () => {
	return `支付`;
};
/** @type {(inputs: Admin_Settings_Tabs_PaymentInputs) => LocalizedString} */
var zh_tw2_admin_settings_tabs_payment = zh_admin_settings_tabs_payment;
/**
* | output |
* | --- |
* | "Payment" |
*
* @param {Admin_Settings_Tabs_PaymentInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_tabs_payment = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_tabs_payment(inputs);
	if (locale === "zh") return zh_admin_settings_tabs_payment(inputs);
	return zh_tw2_admin_settings_tabs_payment(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Tabs_EmailInputs */
var en_admin_settings_tabs_email = () => {
	return `Email`;
};
var zh_admin_settings_tabs_email = () => {
	return `邮件`;
};
/** @type {(inputs: Admin_Settings_Tabs_EmailInputs) => LocalizedString} */
var zh_tw2_admin_settings_tabs_email = zh_admin_settings_tabs_email;
/**
* | output |
* | --- |
* | "Email" |
*
* @param {Admin_Settings_Tabs_EmailInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_tabs_email = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_tabs_email(inputs);
	if (locale === "zh") return zh_admin_settings_tabs_email(inputs);
	return zh_tw2_admin_settings_tabs_email(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Tabs_StorageInputs */
var en_admin_settings_tabs_storage = () => {
	return `Storage`;
};
var zh_admin_settings_tabs_storage = () => {
	return `存储`;
};
/** @type {(inputs: Admin_Settings_Tabs_StorageInputs) => LocalizedString} */
var zh_tw2_admin_settings_tabs_storage = zh_admin_settings_tabs_storage;
/**
* | output |
* | --- |
* | "Storage" |
*
* @param {Admin_Settings_Tabs_StorageInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_tabs_storage = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_tabs_storage(inputs);
	if (locale === "zh") return zh_admin_settings_tabs_storage(inputs);
	return zh_tw2_admin_settings_tabs_storage(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Tabs_AiInputs */
var en_admin_settings_tabs_ai = () => {
	return `AI`;
};
var zh_admin_settings_tabs_ai = () => {
	return `AI`;
};
/** @type {(inputs: Admin_Settings_Tabs_AiInputs) => LocalizedString} */
var zh_tw2_admin_settings_tabs_ai = zh_admin_settings_tabs_ai;
/**
* | output |
* | --- |
* | "AI" |
*
* @param {Admin_Settings_Tabs_AiInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_tabs_ai = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_tabs_ai(inputs);
	if (locale === "zh") return zh_admin_settings_tabs_ai(inputs);
	return zh_tw2_admin_settings_tabs_ai(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Tabs_AnalyticsInputs */
var en_admin_settings_tabs_analytics = () => {
	return `Analytics`;
};
var zh_admin_settings_tabs_analytics = () => {
	return `统计`;
};
/** @type {(inputs: Admin_Settings_Tabs_AnalyticsInputs) => LocalizedString} */
var zh_tw2_admin_settings_tabs_analytics = zh_admin_settings_tabs_analytics;
/**
* | output |
* | --- |
* | "Analytics" |
*
* @param {Admin_Settings_Tabs_AnalyticsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_tabs_analytics = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_tabs_analytics(inputs);
	if (locale === "zh") return zh_admin_settings_tabs_analytics(inputs);
	return zh_tw2_admin_settings_tabs_analytics(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Tabs_AdsInputs */
var en_admin_settings_tabs_ads = () => {
	return `Ads`;
};
var zh_admin_settings_tabs_ads = () => {
	return `广告`;
};
/** @type {(inputs: Admin_Settings_Tabs_AdsInputs) => LocalizedString} */
var zh_tw2_admin_settings_tabs_ads = zh_admin_settings_tabs_ads;
/**
* | output |
* | --- |
* | "Ads" |
*
* @param {Admin_Settings_Tabs_AdsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_tabs_ads = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_tabs_ads(inputs);
	if (locale === "zh") return zh_admin_settings_tabs_ads(inputs);
	return zh_tw2_admin_settings_tabs_ads(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Tabs_Customer_ServiceInputs */
var en_admin_settings_tabs_customer_service = () => {
	return `Customer Service`;
};
var zh_admin_settings_tabs_customer_service = () => {
	return `客服`;
};
/** @type {(inputs: Admin_Settings_Tabs_Customer_ServiceInputs) => LocalizedString} */
var zh_tw2_admin_settings_tabs_customer_service = zh_admin_settings_tabs_customer_service;
/**
* | output |
* | --- |
* | "Customer Service" |
*
* @param {Admin_Settings_Tabs_Customer_ServiceInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_tabs_customer_service = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_tabs_customer_service(inputs);
	if (locale === "zh") return zh_admin_settings_tabs_customer_service(inputs);
	return zh_tw2_admin_settings_tabs_customer_service(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Tabs_CustomInputs */
var en_admin_settings_tabs_custom = () => {
	return `Custom`;
};
var zh_admin_settings_tabs_custom = () => {
	return `自定义`;
};
/** @type {(inputs: Admin_Settings_Tabs_CustomInputs) => LocalizedString} */
var zh_tw2_admin_settings_tabs_custom = zh_admin_settings_tabs_custom;
/**
* | output |
* | --- |
* | "Custom" |
*
* @param {Admin_Settings_Tabs_CustomInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_tabs_custom = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_tabs_custom(inputs);
	if (locale === "zh") return zh_admin_settings_tabs_custom(inputs);
	return zh_tw2_admin_settings_tabs_custom(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Custom_TitleInputs */
var en_admin_settings_custom_title = () => {
	return `Custom Configs`;
};
var zh_admin_settings_custom_title = () => {
	return `自定义配置`;
};
/** @type {(inputs: Admin_Settings_Custom_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_custom_title = zh_admin_settings_custom_title;
/**
* | output |
* | --- |
* | "Custom Configs" |
*
* @param {Admin_Settings_Custom_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_custom_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_custom_title(inputs);
	if (locale === "zh") return zh_admin_settings_custom_title(inputs);
	return zh_tw2_admin_settings_custom_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Custom_DescriptionInputs */
var en_admin_settings_custom_description = () => {
	return `Add your own key/value configs. Keys must be unique and not collide with built-in settings.`;
};
var zh_admin_settings_custom_description = () => {
	return `添加自定义的 key/value 配置。Key 必须唯一，且不能与内置配置项重名。`;
};
/** @type {(inputs: Admin_Settings_Custom_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_custom_description = zh_admin_settings_custom_description;
/**
* | output |
* | --- |
* | "Add your own key/value configs. Keys must be unique and not collide with built-in settings." |
*
* @param {Admin_Settings_Custom_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_custom_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_custom_description(inputs);
	if (locale === "zh") return zh_admin_settings_custom_description(inputs);
	return zh_tw2_admin_settings_custom_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Custom_EmptyInputs */
var en_admin_settings_custom_empty = () => {
	return `No custom configs yet. Click "Add" to create one.`;
};
var zh_admin_settings_custom_empty = () => {
	return `暂无自定义配置，点击「添加」新建一条。`;
};
/** @type {(inputs: Admin_Settings_Custom_EmptyInputs) => LocalizedString} */
var zh_tw2_admin_settings_custom_empty = zh_admin_settings_custom_empty;
/**
* | output |
* | --- |
* | "No custom configs yet. Click \"Add\" to create one." |
*
* @param {Admin_Settings_Custom_EmptyInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_custom_empty = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_custom_empty(inputs);
	if (locale === "zh") return zh_admin_settings_custom_empty(inputs);
	return zh_tw2_admin_settings_custom_empty(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Custom_Key_PlaceholderInputs */
var en_admin_settings_custom_key_placeholder = () => {
	return `config_key`;
};
var zh_admin_settings_custom_key_placeholder = () => {
	return `config_key`;
};
/** @type {(inputs: Admin_Settings_Custom_Key_PlaceholderInputs) => LocalizedString} */
var zh_tw2_admin_settings_custom_key_placeholder = zh_admin_settings_custom_key_placeholder;
/**
* | output |
* | --- |
* | "config_key" |
*
* @param {Admin_Settings_Custom_Key_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_custom_key_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_custom_key_placeholder(inputs);
	if (locale === "zh") return zh_admin_settings_custom_key_placeholder(inputs);
	return zh_tw2_admin_settings_custom_key_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Custom_Value_PlaceholderInputs */
var en_admin_settings_custom_value_placeholder = () => {
	return `value`;
};
var zh_admin_settings_custom_value_placeholder = () => {
	return `配置值`;
};
/** @type {(inputs: Admin_Settings_Custom_Value_PlaceholderInputs) => LocalizedString} */
var zh_tw2_admin_settings_custom_value_placeholder = zh_admin_settings_custom_value_placeholder;
/**
* | output |
* | --- |
* | "value" |
*
* @param {Admin_Settings_Custom_Value_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_custom_value_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_custom_value_placeholder(inputs);
	if (locale === "zh") return zh_admin_settings_custom_value_placeholder(inputs);
	return zh_tw2_admin_settings_custom_value_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Custom_AddInputs */
var en_admin_settings_custom_add = () => {
	return `Add`;
};
var zh_admin_settings_custom_add = () => {
	return `添加`;
};
/** @type {(inputs: Admin_Settings_Custom_AddInputs) => LocalizedString} */
var zh_tw2_admin_settings_custom_add = zh_admin_settings_custom_add;
/**
* | output |
* | --- |
* | "Add" |
*
* @param {Admin_Settings_Custom_AddInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_custom_add = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_custom_add(inputs);
	if (locale === "zh") return zh_admin_settings_custom_add(inputs);
	return zh_tw2_admin_settings_custom_add(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Custom_RemoveInputs */
var en_admin_settings_custom_remove = () => {
	return `Remove`;
};
var zh_admin_settings_custom_remove = () => {
	return `删除`;
};
/** @type {(inputs: Admin_Settings_Custom_RemoveInputs) => LocalizedString} */
var zh_tw2_admin_settings_custom_remove = zh_admin_settings_custom_remove;
/**
* | output |
* | --- |
* | "Remove" |
*
* @param {Admin_Settings_Custom_RemoveInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_custom_remove = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_custom_remove(inputs);
	if (locale === "zh") return zh_admin_settings_custom_remove(inputs);
	return zh_tw2_admin_settings_custom_remove(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Appinfo_TitleInputs */
var en_admin_settings_groups_appinfo_title = () => {
	return `App Info`;
};
var zh_admin_settings_groups_appinfo_title = () => {
	return `应用信息`;
};
/** @type {(inputs: Admin_Settings_Groups_Appinfo_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_appinfo_title = zh_admin_settings_groups_appinfo_title;
/**
* | output |
* | --- |
* | "App Info" |
*
* @param {Admin_Settings_Groups_Appinfo_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_appinfo_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_appinfo_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_appinfo_title(inputs);
	return zh_tw2_admin_settings_groups_appinfo_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Appinfo_DescriptionInputs */
var en_admin_settings_groups_appinfo_description = () => {
	return `Basic application settings`;
};
var zh_admin_settings_groups_appinfo_description = () => {
	return `基本应用设置`;
};
/** @type {(inputs: Admin_Settings_Groups_Appinfo_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_appinfo_description = zh_admin_settings_groups_appinfo_description;
/**
* | output |
* | --- |
* | "Basic application settings" |
*
* @param {Admin_Settings_Groups_Appinfo_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_appinfo_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_appinfo_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_appinfo_description(inputs);
	return zh_tw2_admin_settings_groups_appinfo_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_User_Role_TitleInputs */
var en_admin_settings_groups_user_role_title = () => {
	return `User Roles`;
};
var zh_admin_settings_groups_user_role_title = () => {
	return `用户角色`;
};
/** @type {(inputs: Admin_Settings_Groups_User_Role_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_user_role_title = zh_admin_settings_groups_user_role_title;
/**
* | output |
* | --- |
* | "User Roles" |
*
* @param {Admin_Settings_Groups_User_Role_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_user_role_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_user_role_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_user_role_title(inputs);
	return zh_tw2_admin_settings_groups_user_role_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_User_Role_DescriptionInputs */
var en_admin_settings_groups_user_role_description = () => {
	return `Default role for new users`;
};
var zh_admin_settings_groups_user_role_description = () => {
	return `新用户默认角色`;
};
/** @type {(inputs: Admin_Settings_Groups_User_Role_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_user_role_description = zh_admin_settings_groups_user_role_description;
/**
* | output |
* | --- |
* | "Default role for new users" |
*
* @param {Admin_Settings_Groups_User_Role_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_user_role_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_user_role_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_user_role_description(inputs);
	return zh_tw2_admin_settings_groups_user_role_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Credit_TitleInputs */
var en_admin_settings_groups_credit_title = () => {
	return `Credits`;
};
var zh_admin_settings_groups_credit_title = () => {
	return `积分`;
};
/** @type {(inputs: Admin_Settings_Groups_Credit_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_credit_title = zh_admin_settings_groups_credit_title;
/**
* | output |
* | --- |
* | "Credits" |
*
* @param {Admin_Settings_Groups_Credit_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_credit_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_credit_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_credit_title(inputs);
	return zh_tw2_admin_settings_groups_credit_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Credit_DescriptionInputs */
var en_admin_settings_groups_credit_description = () => {
	return `Initial credits for new users`;
};
var zh_admin_settings_groups_credit_description = () => {
	return `新用户初始积分`;
};
/** @type {(inputs: Admin_Settings_Groups_Credit_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_credit_description = zh_admin_settings_groups_credit_description;
/**
* | output |
* | --- |
* | "Initial credits for new users" |
*
* @param {Admin_Settings_Groups_Credit_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_credit_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_credit_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_credit_description(inputs);
	return zh_tw2_admin_settings_groups_credit_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Email_Auth_TitleInputs */
var en_admin_settings_groups_email_auth_title = () => {
	return `Email Auth`;
};
var zh_admin_settings_groups_email_auth_title = () => {
	return `邮箱认证`;
};
/** @type {(inputs: Admin_Settings_Groups_Email_Auth_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_email_auth_title = zh_admin_settings_groups_email_auth_title;
/**
* | output |
* | --- |
* | "Email Auth" |
*
* @param {Admin_Settings_Groups_Email_Auth_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_email_auth_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_email_auth_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_email_auth_title(inputs);
	return zh_tw2_admin_settings_groups_email_auth_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Email_Auth_DescriptionInputs */
var en_admin_settings_groups_email_auth_description = () => {
	return `Email/password authentication`;
};
var zh_admin_settings_groups_email_auth_description = () => {
	return `邮箱/密码登录`;
};
/** @type {(inputs: Admin_Settings_Groups_Email_Auth_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_email_auth_description = zh_admin_settings_groups_email_auth_description;
/**
* | output |
* | --- |
* | "Email/password authentication" |
*
* @param {Admin_Settings_Groups_Email_Auth_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_email_auth_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_email_auth_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_email_auth_description(inputs);
	return zh_tw2_admin_settings_groups_email_auth_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Google_Auth_TitleInputs */
var en_admin_settings_groups_google_auth_title = () => {
	return `Google Auth`;
};
var zh_admin_settings_groups_google_auth_title = () => {
	return `Google 认证`;
};
/** @type {(inputs: Admin_Settings_Groups_Google_Auth_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_google_auth_title = zh_admin_settings_groups_google_auth_title;
/**
* | output |
* | --- |
* | "Google Auth" |
*
* @param {Admin_Settings_Groups_Google_Auth_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_google_auth_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_google_auth_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_google_auth_title(inputs);
	return zh_tw2_admin_settings_groups_google_auth_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Google_Auth_DescriptionInputs */
var en_admin_settings_groups_google_auth_description = () => {
	return `Google OAuth login`;
};
var zh_admin_settings_groups_google_auth_description = () => {
	return `Google OAuth 登录`;
};
/** @type {(inputs: Admin_Settings_Groups_Google_Auth_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_google_auth_description = zh_admin_settings_groups_google_auth_description;
/**
* | output |
* | --- |
* | "Google OAuth login" |
*
* @param {Admin_Settings_Groups_Google_Auth_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_google_auth_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_google_auth_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_google_auth_description(inputs);
	return zh_tw2_admin_settings_groups_google_auth_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Github_Auth_TitleInputs */
var en_admin_settings_groups_github_auth_title = () => {
	return `GitHub Auth`;
};
var zh_admin_settings_groups_github_auth_title = () => {
	return `GitHub 认证`;
};
/** @type {(inputs: Admin_Settings_Groups_Github_Auth_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_github_auth_title = zh_admin_settings_groups_github_auth_title;
/**
* | output |
* | --- |
* | "GitHub Auth" |
*
* @param {Admin_Settings_Groups_Github_Auth_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_github_auth_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_github_auth_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_github_auth_title(inputs);
	return zh_tw2_admin_settings_groups_github_auth_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Github_Auth_DescriptionInputs */
var en_admin_settings_groups_github_auth_description = () => {
	return `GitHub OAuth login`;
};
var zh_admin_settings_groups_github_auth_description = () => {
	return `GitHub OAuth 登录`;
};
/** @type {(inputs: Admin_Settings_Groups_Github_Auth_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_github_auth_description = zh_admin_settings_groups_github_auth_description;
/**
* | output |
* | --- |
* | "GitHub OAuth login" |
*
* @param {Admin_Settings_Groups_Github_Auth_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_github_auth_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_github_auth_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_github_auth_description(inputs);
	return zh_tw2_admin_settings_groups_github_auth_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Basic_Payment_TitleInputs */
var en_admin_settings_groups_basic_payment_title = () => {
	return `Basic`;
};
var zh_admin_settings_groups_basic_payment_title = () => {
	return `基础设置`;
};
/** @type {(inputs: Admin_Settings_Groups_Basic_Payment_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_basic_payment_title = zh_admin_settings_groups_basic_payment_title;
/**
* | output |
* | --- |
* | "Basic" |
*
* @param {Admin_Settings_Groups_Basic_Payment_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_basic_payment_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_basic_payment_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_basic_payment_title(inputs);
	return zh_tw2_admin_settings_groups_basic_payment_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Basic_Payment_DescriptionInputs */
var en_admin_settings_groups_basic_payment_description = () => {
	return `Payment general settings`;
};
var zh_admin_settings_groups_basic_payment_description = () => {
	return `支付通用设置`;
};
/** @type {(inputs: Admin_Settings_Groups_Basic_Payment_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_basic_payment_description = zh_admin_settings_groups_basic_payment_description;
/**
* | output |
* | --- |
* | "Payment general settings" |
*
* @param {Admin_Settings_Groups_Basic_Payment_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_basic_payment_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_basic_payment_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_basic_payment_description(inputs);
	return zh_tw2_admin_settings_groups_basic_payment_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Stripe_TitleInputs */
var en_admin_settings_groups_stripe_title = () => {
	return `Stripe`;
};
var zh_admin_settings_groups_stripe_title = () => {
	return `Stripe`;
};
/** @type {(inputs: Admin_Settings_Groups_Stripe_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_stripe_title = zh_admin_settings_groups_stripe_title;
/**
* | output |
* | --- |
* | "Stripe" |
*
* @param {Admin_Settings_Groups_Stripe_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_stripe_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_stripe_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_stripe_title(inputs);
	return zh_tw2_admin_settings_groups_stripe_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Stripe_DescriptionInputs */
var en_admin_settings_groups_stripe_description = () => {
	return `Stripe payment gateway`;
};
var zh_admin_settings_groups_stripe_description = () => {
	return `Stripe 支付网关`;
};
/** @type {(inputs: Admin_Settings_Groups_Stripe_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_stripe_description = zh_admin_settings_groups_stripe_description;
/**
* | output |
* | --- |
* | "Stripe payment gateway" |
*
* @param {Admin_Settings_Groups_Stripe_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_stripe_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_stripe_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_stripe_description(inputs);
	return zh_tw2_admin_settings_groups_stripe_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Creem_TitleInputs */
var en_admin_settings_groups_creem_title = () => {
	return `Creem`;
};
var zh_admin_settings_groups_creem_title = () => {
	return `Creem`;
};
/** @type {(inputs: Admin_Settings_Groups_Creem_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_creem_title = zh_admin_settings_groups_creem_title;
/**
* | output |
* | --- |
* | "Creem" |
*
* @param {Admin_Settings_Groups_Creem_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_creem_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_creem_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_creem_title(inputs);
	return zh_tw2_admin_settings_groups_creem_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Creem_DescriptionInputs */
var en_admin_settings_groups_creem_description = () => {
	return `Creem payment gateway`;
};
var zh_admin_settings_groups_creem_description = () => {
	return `Creem 支付网关`;
};
/** @type {(inputs: Admin_Settings_Groups_Creem_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_creem_description = zh_admin_settings_groups_creem_description;
/**
* | output |
* | --- |
* | "Creem payment gateway" |
*
* @param {Admin_Settings_Groups_Creem_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_creem_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_creem_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_creem_description(inputs);
	return zh_tw2_admin_settings_groups_creem_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Paypal_TitleInputs */
var en_admin_settings_groups_paypal_title = () => {
	return `PayPal`;
};
var zh_admin_settings_groups_paypal_title = () => {
	return `PayPal`;
};
/** @type {(inputs: Admin_Settings_Groups_Paypal_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_paypal_title = zh_admin_settings_groups_paypal_title;
/**
* | output |
* | --- |
* | "PayPal" |
*
* @param {Admin_Settings_Groups_Paypal_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_paypal_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_paypal_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_paypal_title(inputs);
	return zh_tw2_admin_settings_groups_paypal_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Paypal_DescriptionInputs */
var en_admin_settings_groups_paypal_description = () => {
	return `PayPal payment gateway`;
};
var zh_admin_settings_groups_paypal_description = () => {
	return `PayPal 支付网关`;
};
/** @type {(inputs: Admin_Settings_Groups_Paypal_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_paypal_description = zh_admin_settings_groups_paypal_description;
/**
* | output |
* | --- |
* | "PayPal payment gateway" |
*
* @param {Admin_Settings_Groups_Paypal_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_paypal_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_paypal_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_paypal_description(inputs);
	return zh_tw2_admin_settings_groups_paypal_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Alipay_TitleInputs */
var en_admin_settings_groups_alipay_title = () => {
	return `Alipay`;
};
var zh_admin_settings_groups_alipay_title = () => {
	return `支付宝`;
};
/** @type {(inputs: Admin_Settings_Groups_Alipay_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_alipay_title = zh_admin_settings_groups_alipay_title;
/**
* | output |
* | --- |
* | "Alipay" |
*
* @param {Admin_Settings_Groups_Alipay_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_alipay_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_alipay_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_alipay_title(inputs);
	return zh_tw2_admin_settings_groups_alipay_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Alipay_DescriptionInputs */
var en_admin_settings_groups_alipay_description = () => {
	return `Alipay payment gateway (native)`;
};
var zh_admin_settings_groups_alipay_description = () => {
	return `支付宝支付（原生）`;
};
/** @type {(inputs: Admin_Settings_Groups_Alipay_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_alipay_description = zh_admin_settings_groups_alipay_description;
/**
* | output |
* | --- |
* | "Alipay payment gateway (native)" |
*
* @param {Admin_Settings_Groups_Alipay_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_alipay_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_alipay_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_alipay_description(inputs);
	return zh_tw2_admin_settings_groups_alipay_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Wechat_TitleInputs */
var en_admin_settings_groups_wechat_title = () => {
	return `WeChat Pay`;
};
var zh_admin_settings_groups_wechat_title = () => {
	return `微信支付`;
};
/** @type {(inputs: Admin_Settings_Groups_Wechat_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_wechat_title = zh_admin_settings_groups_wechat_title;
/**
* | output |
* | --- |
* | "WeChat Pay" |
*
* @param {Admin_Settings_Groups_Wechat_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_wechat_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_wechat_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_wechat_title(inputs);
	return zh_tw2_admin_settings_groups_wechat_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Wechat_DescriptionInputs */
var en_admin_settings_groups_wechat_description = () => {
	return `WeChat Pay gateway (native)`;
};
var zh_admin_settings_groups_wechat_description = () => {
	return `微信支付网关（原生）`;
};
/** @type {(inputs: Admin_Settings_Groups_Wechat_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_wechat_description = zh_admin_settings_groups_wechat_description;
/**
* | output |
* | --- |
* | "WeChat Pay gateway (native)" |
*
* @param {Admin_Settings_Groups_Wechat_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_wechat_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_wechat_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_wechat_description(inputs);
	return zh_tw2_admin_settings_groups_wechat_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Email_General_TitleInputs */
var en_admin_settings_groups_email_general_title = () => {
	return `General`;
};
var zh_admin_settings_groups_email_general_title = () => {
	return `通用`;
};
/** @type {(inputs: Admin_Settings_Groups_Email_General_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_email_general_title = zh_admin_settings_groups_email_general_title;
/**
* | output |
* | --- |
* | "General" |
*
* @param {Admin_Settings_Groups_Email_General_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_email_general_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_email_general_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_email_general_title(inputs);
	return zh_tw2_admin_settings_groups_email_general_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Email_General_DescriptionInputs */
var en_admin_settings_groups_email_general_description = () => {
	return `Email provider selection`;
};
var zh_admin_settings_groups_email_general_description = () => {
	return `邮件服务商选择`;
};
/** @type {(inputs: Admin_Settings_Groups_Email_General_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_email_general_description = zh_admin_settings_groups_email_general_description;
/**
* | output |
* | --- |
* | "Email provider selection" |
*
* @param {Admin_Settings_Groups_Email_General_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_email_general_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_email_general_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_email_general_description(inputs);
	return zh_tw2_admin_settings_groups_email_general_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Resend_TitleInputs */
var en_admin_settings_groups_resend_title = () => {
	return `Resend`;
};
var zh_admin_settings_groups_resend_title = () => {
	return `Resend`;
};
/** @type {(inputs: Admin_Settings_Groups_Resend_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_resend_title = zh_admin_settings_groups_resend_title;
/**
* | output |
* | --- |
* | "Resend" |
*
* @param {Admin_Settings_Groups_Resend_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_resend_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_resend_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_resend_title(inputs);
	return zh_tw2_admin_settings_groups_resend_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Resend_DescriptionInputs */
var en_admin_settings_groups_resend_description = () => {
	return `Resend email service`;
};
var zh_admin_settings_groups_resend_description = () => {
	return `Resend 邮件服务`;
};
/** @type {(inputs: Admin_Settings_Groups_Resend_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_resend_description = zh_admin_settings_groups_resend_description;
/**
* | output |
* | --- |
* | "Resend email service" |
*
* @param {Admin_Settings_Groups_Resend_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_resend_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_resend_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_resend_description(inputs);
	return zh_tw2_admin_settings_groups_resend_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Cloudflare_Email_TitleInputs */
var en_admin_settings_groups_cloudflare_email_title = () => {
	return `Cloudflare Email`;
};
var zh_admin_settings_groups_cloudflare_email_title = () => {
	return `Cloudflare Email`;
};
/** @type {(inputs: Admin_Settings_Groups_Cloudflare_Email_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_cloudflare_email_title = zh_admin_settings_groups_cloudflare_email_title;
/**
* | output |
* | --- |
* | "Cloudflare Email" |
*
* @param {Admin_Settings_Groups_Cloudflare_Email_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_cloudflare_email_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_cloudflare_email_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_cloudflare_email_title(inputs);
	return zh_tw2_admin_settings_groups_cloudflare_email_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Cloudflare_Email_DescriptionInputs */
var en_admin_settings_groups_cloudflare_email_description = () => {
	return `Cloudflare Email Service`;
};
var zh_admin_settings_groups_cloudflare_email_description = () => {
	return `Cloudflare 邮件服务`;
};
/** @type {(inputs: Admin_Settings_Groups_Cloudflare_Email_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_cloudflare_email_description = zh_admin_settings_groups_cloudflare_email_description;
/**
* | output |
* | --- |
* | "Cloudflare Email Service" |
*
* @param {Admin_Settings_Groups_Cloudflare_Email_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_cloudflare_email_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_cloudflare_email_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_cloudflare_email_description(inputs);
	return zh_tw2_admin_settings_groups_cloudflare_email_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_R2_TitleInputs */
var en_admin_settings_groups_r2_title = () => {
	return `Cloudflare R2 / S3`;
};
var zh_admin_settings_groups_r2_title = () => {
	return `Cloudflare R2 / S3`;
};
/** @type {(inputs: Admin_Settings_Groups_R2_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_r2_title = zh_admin_settings_groups_r2_title;
/**
* | output |
* | --- |
* | "Cloudflare R2 / S3" |
*
* @param {Admin_Settings_Groups_R2_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_r2_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_r2_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_r2_title(inputs);
	return zh_tw2_admin_settings_groups_r2_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_R2_DescriptionInputs */
var en_admin_settings_groups_r2_description = () => {
	return `Object storage settings`;
};
var zh_admin_settings_groups_r2_description = () => {
	return `对象存储设置`;
};
/** @type {(inputs: Admin_Settings_Groups_R2_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_r2_description = zh_admin_settings_groups_r2_description;
/**
* | output |
* | --- |
* | "Object storage settings" |
*
* @param {Admin_Settings_Groups_R2_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_r2_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_r2_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_r2_description(inputs);
	return zh_tw2_admin_settings_groups_r2_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Openai_TitleInputs */
var en_admin_settings_groups_openai_title = () => {
	return `OpenAI`;
};
var zh_admin_settings_groups_openai_title = () => {
	return `OpenAI`;
};
/** @type {(inputs: Admin_Settings_Groups_Openai_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_openai_title = zh_admin_settings_groups_openai_title;
/**
* | output |
* | --- |
* | "OpenAI" |
*
* @param {Admin_Settings_Groups_Openai_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_openai_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_openai_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_openai_title(inputs);
	return zh_tw2_admin_settings_groups_openai_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Openai_DescriptionInputs */
var en_admin_settings_groups_openai_description = () => {
	return `OpenAI (or compatible) API`;
};
var zh_admin_settings_groups_openai_description = () => {
	return `OpenAI（或兼容）API`;
};
/** @type {(inputs: Admin_Settings_Groups_Openai_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_openai_description = zh_admin_settings_groups_openai_description;
/**
* | output |
* | --- |
* | "OpenAI (or compatible) API" |
*
* @param {Admin_Settings_Groups_Openai_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_openai_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_openai_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_openai_description(inputs);
	return zh_tw2_admin_settings_groups_openai_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Anthropic_TitleInputs */
var en_admin_settings_groups_anthropic_title = () => {
	return `Anthropic`;
};
var zh_admin_settings_groups_anthropic_title = () => {
	return `Anthropic`;
};
/** @type {(inputs: Admin_Settings_Groups_Anthropic_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_anthropic_title = zh_admin_settings_groups_anthropic_title;
/**
* | output |
* | --- |
* | "Anthropic" |
*
* @param {Admin_Settings_Groups_Anthropic_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_anthropic_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_anthropic_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_anthropic_title(inputs);
	return zh_tw2_admin_settings_groups_anthropic_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Anthropic_DescriptionInputs */
var en_admin_settings_groups_anthropic_description = () => {
	return `Anthropic Claude API`;
};
var zh_admin_settings_groups_anthropic_description = () => {
	return `Anthropic Claude API`;
};
/** @type {(inputs: Admin_Settings_Groups_Anthropic_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_anthropic_description = zh_admin_settings_groups_anthropic_description;
/**
* | output |
* | --- |
* | "Anthropic Claude API" |
*
* @param {Admin_Settings_Groups_Anthropic_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_anthropic_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_anthropic_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_anthropic_description(inputs);
	return zh_tw2_admin_settings_groups_anthropic_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Replicate_TitleInputs */
var en_admin_settings_groups_replicate_title = () => {
	return `Replicate`;
};
var zh_admin_settings_groups_replicate_title = () => {
	return `Replicate`;
};
/** @type {(inputs: Admin_Settings_Groups_Replicate_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_replicate_title = zh_admin_settings_groups_replicate_title;
/**
* | output |
* | --- |
* | "Replicate" |
*
* @param {Admin_Settings_Groups_Replicate_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_replicate_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_replicate_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_replicate_title(inputs);
	return zh_tw2_admin_settings_groups_replicate_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Replicate_DescriptionInputs */
var en_admin_settings_groups_replicate_description = () => {
	return `Replicate AI API`;
};
var zh_admin_settings_groups_replicate_description = () => {
	return `Replicate AI API`;
};
/** @type {(inputs: Admin_Settings_Groups_Replicate_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_replicate_description = zh_admin_settings_groups_replicate_description;
/**
* | output |
* | --- |
* | "Replicate AI API" |
*
* @param {Admin_Settings_Groups_Replicate_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_replicate_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_replicate_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_replicate_description(inputs);
	return zh_tw2_admin_settings_groups_replicate_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Fal_TitleInputs */
var en_admin_settings_groups_fal_title = () => {
	return `Fal`;
};
var zh_admin_settings_groups_fal_title = () => {
	return `Fal`;
};
/** @type {(inputs: Admin_Settings_Groups_Fal_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_fal_title = zh_admin_settings_groups_fal_title;
/**
* | output |
* | --- |
* | "Fal" |
*
* @param {Admin_Settings_Groups_Fal_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_fal_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_fal_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_fal_title(inputs);
	return zh_tw2_admin_settings_groups_fal_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Fal_DescriptionInputs */
var en_admin_settings_groups_fal_description = () => {
	return `Fal AI API`;
};
var zh_admin_settings_groups_fal_description = () => {
	return `Fal AI API`;
};
/** @type {(inputs: Admin_Settings_Groups_Fal_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_fal_description = zh_admin_settings_groups_fal_description;
/**
* | output |
* | --- |
* | "Fal AI API" |
*
* @param {Admin_Settings_Groups_Fal_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_fal_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_fal_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_fal_description(inputs);
	return zh_tw2_admin_settings_groups_fal_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Google_Analytics_TitleInputs */
var en_admin_settings_groups_google_analytics_title = () => {
	return `Google Analytics`;
};
var zh_admin_settings_groups_google_analytics_title = () => {
	return `Google Analytics`;
};
/** @type {(inputs: Admin_Settings_Groups_Google_Analytics_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_google_analytics_title = zh_admin_settings_groups_google_analytics_title;
/**
* | output |
* | --- |
* | "Google Analytics" |
*
* @param {Admin_Settings_Groups_Google_Analytics_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_google_analytics_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_google_analytics_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_google_analytics_title(inputs);
	return zh_tw2_admin_settings_groups_google_analytics_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Google_Analytics_DescriptionInputs */
var en_admin_settings_groups_google_analytics_description = () => {
	return `Inject gtag.js with the configured Measurement ID`;
};
var zh_admin_settings_groups_google_analytics_description = () => {
	return `按配置的 Measurement ID 注入 gtag.js`;
};
/** @type {(inputs: Admin_Settings_Groups_Google_Analytics_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_google_analytics_description = zh_admin_settings_groups_google_analytics_description;
/**
* | output |
* | --- |
* | "Inject gtag.js with the configured Measurement ID" |
*
* @param {Admin_Settings_Groups_Google_Analytics_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_google_analytics_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_google_analytics_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_google_analytics_description(inputs);
	return zh_tw2_admin_settings_groups_google_analytics_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Plausible_TitleInputs */
var en_admin_settings_groups_plausible_title = () => {
	return `Plausible`;
};
var zh_admin_settings_groups_plausible_title = () => {
	return `Plausible`;
};
/** @type {(inputs: Admin_Settings_Groups_Plausible_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_plausible_title = zh_admin_settings_groups_plausible_title;
/**
* | output |
* | --- |
* | "Plausible" |
*
* @param {Admin_Settings_Groups_Plausible_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_plausible_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_plausible_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_plausible_title(inputs);
	return zh_tw2_admin_settings_groups_plausible_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Plausible_DescriptionInputs */
var en_admin_settings_groups_plausible_description = () => {
	return `Supports both site-specific and legacy scripts for self-hosted or cloud Plausible`;
};
var zh_admin_settings_groups_plausible_description = () => {
	return `支持云版或自托管 Plausible 的新版站点专属脚本及旧版脚本`;
};
/** @type {(inputs: Admin_Settings_Groups_Plausible_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_plausible_description = zh_admin_settings_groups_plausible_description;
/**
* | output |
* | --- |
* | "Supports both site-specific and legacy scripts for self-hosted or cloud Plausible" |
*
* @param {Admin_Settings_Groups_Plausible_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_plausible_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_plausible_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_plausible_description(inputs);
	return zh_tw2_admin_settings_groups_plausible_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Adsense_TitleInputs */
var en_admin_settings_groups_adsense_title = () => {
	return `Google AdSense`;
};
var zh_admin_settings_groups_adsense_title = () => {
	return `Google AdSense`;
};
/** @type {(inputs: Admin_Settings_Groups_Adsense_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_adsense_title = zh_admin_settings_groups_adsense_title;
/**
* | output |
* | --- |
* | "Google AdSense" |
*
* @param {Admin_Settings_Groups_Adsense_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_adsense_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_adsense_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_adsense_title(inputs);
	return zh_tw2_admin_settings_groups_adsense_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Adsense_DescriptionInputs */
var en_admin_settings_groups_adsense_description = () => {
	return `Inject the AdSense script sitewide and serve /ads.txt from the configured publisher ID`;
};
var zh_admin_settings_groups_adsense_description = () => {
	return `全站注入 AdSense 脚本，并根据配置的 Publisher ID 生成 /ads.txt`;
};
/** @type {(inputs: Admin_Settings_Groups_Adsense_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_adsense_description = zh_admin_settings_groups_adsense_description;
/**
* | output |
* | --- |
* | "Inject the AdSense script sitewide and serve /ads.txt from the configured publisher ID" |
*
* @param {Admin_Settings_Groups_Adsense_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_adsense_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_adsense_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_adsense_description(inputs);
	return zh_tw2_admin_settings_groups_adsense_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Crisp_TitleInputs */
var en_admin_settings_groups_crisp_title = () => {
	return `Crisp`;
};
var zh_admin_settings_groups_crisp_title = () => {
	return `Crisp`;
};
/** @type {(inputs: Admin_Settings_Groups_Crisp_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_crisp_title = zh_admin_settings_groups_crisp_title;
/**
* | output |
* | --- |
* | "Crisp" |
*
* @param {Admin_Settings_Groups_Crisp_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_crisp_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_crisp_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_crisp_title(inputs);
	return zh_tw2_admin_settings_groups_crisp_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Crisp_DescriptionInputs */
var en_admin_settings_groups_crisp_description = () => {
	return `Crisp live chat widget`;
};
var zh_admin_settings_groups_crisp_description = () => {
	return `Crisp 客服聊天组件`;
};
/** @type {(inputs: Admin_Settings_Groups_Crisp_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_crisp_description = zh_admin_settings_groups_crisp_description;
/**
* | output |
* | --- |
* | "Crisp live chat widget" |
*
* @param {Admin_Settings_Groups_Crisp_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_crisp_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_crisp_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_crisp_description(inputs);
	return zh_tw2_admin_settings_groups_crisp_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Tawk_TitleInputs */
var en_admin_settings_groups_tawk_title = () => {
	return `Tawk.to`;
};
var zh_admin_settings_groups_tawk_title = () => {
	return `Tawk.to`;
};
/** @type {(inputs: Admin_Settings_Groups_Tawk_TitleInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_tawk_title = zh_admin_settings_groups_tawk_title;
/**
* | output |
* | --- |
* | "Tawk.to" |
*
* @param {Admin_Settings_Groups_Tawk_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_tawk_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_tawk_title(inputs);
	if (locale === "zh") return zh_admin_settings_groups_tawk_title(inputs);
	return zh_tw2_admin_settings_groups_tawk_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Groups_Tawk_DescriptionInputs */
var en_admin_settings_groups_tawk_description = () => {
	return `Tawk.to live chat widget`;
};
var zh_admin_settings_groups_tawk_description = () => {
	return `Tawk.to 客服聊天组件`;
};
/** @type {(inputs: Admin_Settings_Groups_Tawk_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_groups_tawk_description = zh_admin_settings_groups_tawk_description;
/**
* | output |
* | --- |
* | "Tawk.to live chat widget" |
*
* @param {Admin_Settings_Groups_Tawk_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_groups_tawk_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_groups_tawk_description(inputs);
	if (locale === "zh") return zh_admin_settings_groups_tawk_description(inputs);
	return zh_tw2_admin_settings_groups_tawk_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_App_NameInputs */
var en_admin_settings_fields_app_name = () => {
	return `App Name`;
};
var zh_admin_settings_fields_app_name = () => {
	return `应用名称`;
};
/** @type {(inputs: Admin_Settings_Fields_App_NameInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_app_name = zh_admin_settings_fields_app_name;
/**
* | output |
* | --- |
* | "App Name" |
*
* @param {Admin_Settings_Fields_App_NameInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_app_name = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_app_name(inputs);
	if (locale === "zh") return zh_admin_settings_fields_app_name(inputs);
	return zh_tw2_admin_settings_fields_app_name(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_App_DescriptionInputs */
var en_admin_settings_fields_app_description = () => {
	return `App Description`;
};
var zh_admin_settings_fields_app_description = () => {
	return `应用描述`;
};
/** @type {(inputs: Admin_Settings_Fields_App_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_app_description = zh_admin_settings_fields_app_description;
/**
* | output |
* | --- |
* | "App Description" |
*
* @param {Admin_Settings_Fields_App_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_app_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_app_description(inputs);
	if (locale === "zh") return zh_admin_settings_fields_app_description(inputs);
	return zh_tw2_admin_settings_fields_app_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_App_UrlInputs */
var en_admin_settings_fields_app_url = () => {
	return `App URL`;
};
var zh_admin_settings_fields_app_url = () => {
	return `应用地址`;
};
/** @type {(inputs: Admin_Settings_Fields_App_UrlInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_app_url = zh_admin_settings_fields_app_url;
/**
* | output |
* | --- |
* | "App URL" |
*
* @param {Admin_Settings_Fields_App_UrlInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_app_url = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_app_url(inputs);
	if (locale === "zh") return zh_admin_settings_fields_app_url(inputs);
	return zh_tw2_admin_settings_fields_app_url(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Initial_Role_EnabledInputs */
var en_admin_settings_fields_initial_role_enabled = () => {
	return `Auto-assign role for new users`;
};
var zh_admin_settings_fields_initial_role_enabled = () => {
	return `新用户自动分配角色`;
};
/** @type {(inputs: Admin_Settings_Fields_Initial_Role_EnabledInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_initial_role_enabled = zh_admin_settings_fields_initial_role_enabled;
/**
* | output |
* | --- |
* | "Auto-assign role for new users" |
*
* @param {Admin_Settings_Fields_Initial_Role_EnabledInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_initial_role_enabled = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_initial_role_enabled(inputs);
	if (locale === "zh") return zh_admin_settings_fields_initial_role_enabled(inputs);
	return zh_tw2_admin_settings_fields_initial_role_enabled(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Initial_Role_NameInputs */
var en_admin_settings_fields_initial_role_name = () => {
	return `Default role name`;
};
var zh_admin_settings_fields_initial_role_name = () => {
	return `默认角色名称`;
};
/** @type {(inputs: Admin_Settings_Fields_Initial_Role_NameInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_initial_role_name = zh_admin_settings_fields_initial_role_name;
/**
* | output |
* | --- |
* | "Default role name" |
*
* @param {Admin_Settings_Fields_Initial_Role_NameInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_initial_role_name = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_initial_role_name(inputs);
	if (locale === "zh") return zh_admin_settings_fields_initial_role_name(inputs);
	return zh_tw2_admin_settings_fields_initial_role_name(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Initial_Credits_EnabledInputs */
var en_admin_settings_fields_initial_credits_enabled = () => {
	return `Grant credits on signup`;
};
var zh_admin_settings_fields_initial_credits_enabled = () => {
	return `注册赠送积分`;
};
/** @type {(inputs: Admin_Settings_Fields_Initial_Credits_EnabledInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_initial_credits_enabled = zh_admin_settings_fields_initial_credits_enabled;
/**
* | output |
* | --- |
* | "Grant credits on signup" |
*
* @param {Admin_Settings_Fields_Initial_Credits_EnabledInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_initial_credits_enabled = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_initial_credits_enabled(inputs);
	if (locale === "zh") return zh_admin_settings_fields_initial_credits_enabled(inputs);
	return zh_tw2_admin_settings_fields_initial_credits_enabled(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Initial_Credits_AmountInputs */
var en_admin_settings_fields_initial_credits_amount = () => {
	return `Credits amount`;
};
var zh_admin_settings_fields_initial_credits_amount = () => {
	return `积分数量`;
};
/** @type {(inputs: Admin_Settings_Fields_Initial_Credits_AmountInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_initial_credits_amount = zh_admin_settings_fields_initial_credits_amount;
/**
* | output |
* | --- |
* | "Credits amount" |
*
* @param {Admin_Settings_Fields_Initial_Credits_AmountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_initial_credits_amount = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_initial_credits_amount(inputs);
	if (locale === "zh") return zh_admin_settings_fields_initial_credits_amount(inputs);
	return zh_tw2_admin_settings_fields_initial_credits_amount(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Initial_Credits_Valid_DaysInputs */
var en_admin_settings_fields_initial_credits_valid_days = () => {
	return `Valid days`;
};
var zh_admin_settings_fields_initial_credits_valid_days = () => {
	return `有效天数`;
};
/** @type {(inputs: Admin_Settings_Fields_Initial_Credits_Valid_DaysInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_initial_credits_valid_days = zh_admin_settings_fields_initial_credits_valid_days;
/**
* | output |
* | --- |
* | "Valid days" |
*
* @param {Admin_Settings_Fields_Initial_Credits_Valid_DaysInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_initial_credits_valid_days = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_initial_credits_valid_days(inputs);
	if (locale === "zh") return zh_admin_settings_fields_initial_credits_valid_days(inputs);
	return zh_tw2_admin_settings_fields_initial_credits_valid_days(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Initial_Credits_DescriptionInputs */
var en_admin_settings_fields_initial_credits_description = () => {
	return `Description`;
};
var zh_admin_settings_fields_initial_credits_description = () => {
	return `描述`;
};
/** @type {(inputs: Admin_Settings_Fields_Initial_Credits_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_initial_credits_description = zh_admin_settings_fields_initial_credits_description;
/**
* | output |
* | --- |
* | "Description" |
*
* @param {Admin_Settings_Fields_Initial_Credits_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_initial_credits_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_initial_credits_description(inputs);
	if (locale === "zh") return zh_admin_settings_fields_initial_credits_description(inputs);
	return zh_tw2_admin_settings_fields_initial_credits_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Email_Auth_EnabledInputs */
var en_admin_settings_fields_email_auth_enabled = () => {
	return `Enable email auth`;
};
var zh_admin_settings_fields_email_auth_enabled = () => {
	return `启用邮箱认证`;
};
/** @type {(inputs: Admin_Settings_Fields_Email_Auth_EnabledInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_email_auth_enabled = zh_admin_settings_fields_email_auth_enabled;
/**
* | output |
* | --- |
* | "Enable email auth" |
*
* @param {Admin_Settings_Fields_Email_Auth_EnabledInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_email_auth_enabled = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_email_auth_enabled(inputs);
	if (locale === "zh") return zh_admin_settings_fields_email_auth_enabled(inputs);
	return zh_tw2_admin_settings_fields_email_auth_enabled(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Email_Verification_EnabledInputs */
var en_admin_settings_fields_email_verification_enabled = () => {
	return `Require email verification on sign up`;
};
var zh_admin_settings_fields_email_verification_enabled = () => {
	return `注册时需要邮箱验证`;
};
/** @type {(inputs: Admin_Settings_Fields_Email_Verification_EnabledInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_email_verification_enabled = zh_admin_settings_fields_email_verification_enabled;
/**
* | output |
* | --- |
* | "Require email verification on sign up" |
*
* @param {Admin_Settings_Fields_Email_Verification_EnabledInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_email_verification_enabled = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_email_verification_enabled(inputs);
	if (locale === "zh") return zh_admin_settings_fields_email_verification_enabled(inputs);
	return zh_tw2_admin_settings_fields_email_verification_enabled(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Google_Auth_EnabledInputs */
var en_admin_settings_fields_google_auth_enabled = () => {
	return `Enable Google auth`;
};
var zh_admin_settings_fields_google_auth_enabled = () => {
	return `启用 Google 认证`;
};
/** @type {(inputs: Admin_Settings_Fields_Google_Auth_EnabledInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_google_auth_enabled = zh_admin_settings_fields_google_auth_enabled;
/**
* | output |
* | --- |
* | "Enable Google auth" |
*
* @param {Admin_Settings_Fields_Google_Auth_EnabledInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_google_auth_enabled = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_google_auth_enabled(inputs);
	if (locale === "zh") return zh_admin_settings_fields_google_auth_enabled(inputs);
	return zh_tw2_admin_settings_fields_google_auth_enabled(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Google_One_Tap_EnabledInputs */
var en_admin_settings_fields_google_one_tap_enabled = () => {
	return `Enable Google One Tap`;
};
var zh_admin_settings_fields_google_one_tap_enabled = () => {
	return `启用 Google One Tap`;
};
/** @type {(inputs: Admin_Settings_Fields_Google_One_Tap_EnabledInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_google_one_tap_enabled = zh_admin_settings_fields_google_one_tap_enabled;
/**
* | output |
* | --- |
* | "Enable Google One Tap" |
*
* @param {Admin_Settings_Fields_Google_One_Tap_EnabledInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_google_one_tap_enabled = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_google_one_tap_enabled(inputs);
	if (locale === "zh") return zh_admin_settings_fields_google_one_tap_enabled(inputs);
	return zh_tw2_admin_settings_fields_google_one_tap_enabled(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Google_Client_IdInputs */
var en_admin_settings_fields_google_client_id = () => {
	return `Client ID`;
};
var zh_admin_settings_fields_google_client_id = () => {
	return `客户端 ID`;
};
/** @type {(inputs: Admin_Settings_Fields_Google_Client_IdInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_google_client_id = zh_admin_settings_fields_google_client_id;
/**
* | output |
* | --- |
* | "Client ID" |
*
* @param {Admin_Settings_Fields_Google_Client_IdInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_google_client_id = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_google_client_id(inputs);
	if (locale === "zh") return zh_admin_settings_fields_google_client_id(inputs);
	return zh_tw2_admin_settings_fields_google_client_id(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Google_Client_SecretInputs */
var en_admin_settings_fields_google_client_secret = () => {
	return `Client Secret`;
};
var zh_admin_settings_fields_google_client_secret = () => {
	return `客户端密钥`;
};
/** @type {(inputs: Admin_Settings_Fields_Google_Client_SecretInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_google_client_secret = zh_admin_settings_fields_google_client_secret;
/**
* | output |
* | --- |
* | "Client Secret" |
*
* @param {Admin_Settings_Fields_Google_Client_SecretInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_google_client_secret = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_google_client_secret(inputs);
	if (locale === "zh") return zh_admin_settings_fields_google_client_secret(inputs);
	return zh_tw2_admin_settings_fields_google_client_secret(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Github_Auth_EnabledInputs */
var en_admin_settings_fields_github_auth_enabled = () => {
	return `Enable GitHub auth`;
};
var zh_admin_settings_fields_github_auth_enabled = () => {
	return `启用 GitHub 认证`;
};
/** @type {(inputs: Admin_Settings_Fields_Github_Auth_EnabledInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_github_auth_enabled = zh_admin_settings_fields_github_auth_enabled;
/**
* | output |
* | --- |
* | "Enable GitHub auth" |
*
* @param {Admin_Settings_Fields_Github_Auth_EnabledInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_github_auth_enabled = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_github_auth_enabled(inputs);
	if (locale === "zh") return zh_admin_settings_fields_github_auth_enabled(inputs);
	return zh_tw2_admin_settings_fields_github_auth_enabled(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Github_Client_IdInputs */
var en_admin_settings_fields_github_client_id = () => {
	return `Client ID`;
};
var zh_admin_settings_fields_github_client_id = () => {
	return `客户端 ID`;
};
/** @type {(inputs: Admin_Settings_Fields_Github_Client_IdInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_github_client_id = zh_admin_settings_fields_github_client_id;
/**
* | output |
* | --- |
* | "Client ID" |
*
* @param {Admin_Settings_Fields_Github_Client_IdInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_github_client_id = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_github_client_id(inputs);
	if (locale === "zh") return zh_admin_settings_fields_github_client_id(inputs);
	return zh_tw2_admin_settings_fields_github_client_id(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Github_Client_SecretInputs */
var en_admin_settings_fields_github_client_secret = () => {
	return `Client Secret`;
};
var zh_admin_settings_fields_github_client_secret = () => {
	return `客户端密钥`;
};
/** @type {(inputs: Admin_Settings_Fields_Github_Client_SecretInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_github_client_secret = zh_admin_settings_fields_github_client_secret;
/**
* | output |
* | --- |
* | "Client Secret" |
*
* @param {Admin_Settings_Fields_Github_Client_SecretInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_github_client_secret = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_github_client_secret(inputs);
	if (locale === "zh") return zh_admin_settings_fields_github_client_secret(inputs);
	return zh_tw2_admin_settings_fields_github_client_secret(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Invite_Code_RequiredInputs */
var en_admin_settings_fields_invite_code_required = () => {
	return `Require invite code on sign up`;
};
var zh_admin_settings_fields_invite_code_required = () => {
	return `注册时需要邀请码`;
};
/** @type {(inputs: Admin_Settings_Fields_Invite_Code_RequiredInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_invite_code_required = zh_admin_settings_fields_invite_code_required;
/**
* | output |
* | --- |
* | "Require invite code on sign up" |
*
* @param {Admin_Settings_Fields_Invite_Code_RequiredInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_invite_code_required = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_invite_code_required(inputs);
	if (locale === "zh") return zh_admin_settings_fields_invite_code_required(inputs);
	return zh_tw2_admin_settings_fields_invite_code_required(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Select_Payment_EnabledInputs */
var en_admin_settings_fields_select_payment_enabled = () => {
	return `Show payment method selector`;
};
var zh_admin_settings_fields_select_payment_enabled = () => {
	return `显示支付方式选择器`;
};
/** @type {(inputs: Admin_Settings_Fields_Select_Payment_EnabledInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_select_payment_enabled = zh_admin_settings_fields_select_payment_enabled;
/**
* | output |
* | --- |
* | "Show payment method selector" |
*
* @param {Admin_Settings_Fields_Select_Payment_EnabledInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_select_payment_enabled = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_select_payment_enabled(inputs);
	if (locale === "zh") return zh_admin_settings_fields_select_payment_enabled(inputs);
	return zh_tw2_admin_settings_fields_select_payment_enabled(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Default_Payment_ProviderInputs */
var en_admin_settings_fields_default_payment_provider = () => {
	return `Default provider`;
};
var zh_admin_settings_fields_default_payment_provider = () => {
	return `默认支付方式`;
};
/** @type {(inputs: Admin_Settings_Fields_Default_Payment_ProviderInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_default_payment_provider = zh_admin_settings_fields_default_payment_provider;
/**
* | output |
* | --- |
* | "Default provider" |
*
* @param {Admin_Settings_Fields_Default_Payment_ProviderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_default_payment_provider = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_default_payment_provider(inputs);
	if (locale === "zh") return zh_admin_settings_fields_default_payment_provider(inputs);
	return zh_tw2_admin_settings_fields_default_payment_provider(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Stripe_EnabledInputs */
var en_admin_settings_fields_stripe_enabled = () => {
	return `Enable Stripe`;
};
var zh_admin_settings_fields_stripe_enabled = () => {
	return `启用 Stripe`;
};
/** @type {(inputs: Admin_Settings_Fields_Stripe_EnabledInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_stripe_enabled = zh_admin_settings_fields_stripe_enabled;
/**
* | output |
* | --- |
* | "Enable Stripe" |
*
* @param {Admin_Settings_Fields_Stripe_EnabledInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_stripe_enabled = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_stripe_enabled(inputs);
	if (locale === "zh") return zh_admin_settings_fields_stripe_enabled(inputs);
	return zh_tw2_admin_settings_fields_stripe_enabled(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Stripe_Secret_KeyInputs */
var en_admin_settings_fields_stripe_secret_key = () => {
	return `Secret Key`;
};
var zh_admin_settings_fields_stripe_secret_key = () => {
	return `密钥`;
};
/** @type {(inputs: Admin_Settings_Fields_Stripe_Secret_KeyInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_stripe_secret_key = zh_admin_settings_fields_stripe_secret_key;
/**
* | output |
* | --- |
* | "Secret Key" |
*
* @param {Admin_Settings_Fields_Stripe_Secret_KeyInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_stripe_secret_key = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_stripe_secret_key(inputs);
	if (locale === "zh") return zh_admin_settings_fields_stripe_secret_key(inputs);
	return zh_tw2_admin_settings_fields_stripe_secret_key(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Stripe_Publishable_KeyInputs */
var en_admin_settings_fields_stripe_publishable_key = () => {
	return `Publishable Key`;
};
var zh_admin_settings_fields_stripe_publishable_key = () => {
	return `公钥`;
};
/** @type {(inputs: Admin_Settings_Fields_Stripe_Publishable_KeyInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_stripe_publishable_key = zh_admin_settings_fields_stripe_publishable_key;
/**
* | output |
* | --- |
* | "Publishable Key" |
*
* @param {Admin_Settings_Fields_Stripe_Publishable_KeyInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_stripe_publishable_key = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_stripe_publishable_key(inputs);
	if (locale === "zh") return zh_admin_settings_fields_stripe_publishable_key(inputs);
	return zh_tw2_admin_settings_fields_stripe_publishable_key(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Stripe_Signing_SecretInputs */
var en_admin_settings_fields_stripe_signing_secret = () => {
	return `Webhook Signing Secret`;
};
var zh_admin_settings_fields_stripe_signing_secret = () => {
	return `Webhook 签名密钥`;
};
/** @type {(inputs: Admin_Settings_Fields_Stripe_Signing_SecretInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_stripe_signing_secret = zh_admin_settings_fields_stripe_signing_secret;
/**
* | output |
* | --- |
* | "Webhook Signing Secret" |
*
* @param {Admin_Settings_Fields_Stripe_Signing_SecretInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_stripe_signing_secret = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_stripe_signing_secret(inputs);
	if (locale === "zh") return zh_admin_settings_fields_stripe_signing_secret(inputs);
	return zh_tw2_admin_settings_fields_stripe_signing_secret(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Creem_EnabledInputs */
var en_admin_settings_fields_creem_enabled = () => {
	return `Enable Creem`;
};
var zh_admin_settings_fields_creem_enabled = () => {
	return `启用 Creem`;
};
/** @type {(inputs: Admin_Settings_Fields_Creem_EnabledInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_creem_enabled = zh_admin_settings_fields_creem_enabled;
/**
* | output |
* | --- |
* | "Enable Creem" |
*
* @param {Admin_Settings_Fields_Creem_EnabledInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_creem_enabled = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_creem_enabled(inputs);
	if (locale === "zh") return zh_admin_settings_fields_creem_enabled(inputs);
	return zh_tw2_admin_settings_fields_creem_enabled(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Creem_EnvironmentInputs */
var en_admin_settings_fields_creem_environment = () => {
	return `Environment`;
};
var zh_admin_settings_fields_creem_environment = () => {
	return `环境`;
};
/** @type {(inputs: Admin_Settings_Fields_Creem_EnvironmentInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_creem_environment = zh_admin_settings_fields_creem_environment;
/**
* | output |
* | --- |
* | "Environment" |
*
* @param {Admin_Settings_Fields_Creem_EnvironmentInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_creem_environment = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_creem_environment(inputs);
	if (locale === "zh") return zh_admin_settings_fields_creem_environment(inputs);
	return zh_tw2_admin_settings_fields_creem_environment(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Creem_Api_KeyInputs */
var en_admin_settings_fields_creem_api_key = () => {
	return `API Key`;
};
var zh_admin_settings_fields_creem_api_key = () => {
	return `API 密钥`;
};
/** @type {(inputs: Admin_Settings_Fields_Creem_Api_KeyInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_creem_api_key = zh_admin_settings_fields_creem_api_key;
/**
* | output |
* | --- |
* | "API Key" |
*
* @param {Admin_Settings_Fields_Creem_Api_KeyInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_creem_api_key = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_creem_api_key(inputs);
	if (locale === "zh") return zh_admin_settings_fields_creem_api_key(inputs);
	return zh_tw2_admin_settings_fields_creem_api_key(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Creem_Signing_SecretInputs */
var en_admin_settings_fields_creem_signing_secret = () => {
	return `Signing Secret`;
};
var zh_admin_settings_fields_creem_signing_secret = () => {
	return `Signing Secret`;
};
/** @type {(inputs: Admin_Settings_Fields_Creem_Signing_SecretInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_creem_signing_secret = zh_admin_settings_fields_creem_signing_secret;
/**
* | output |
* | --- |
* | "Signing Secret" |
*
* @param {Admin_Settings_Fields_Creem_Signing_SecretInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_creem_signing_secret = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_creem_signing_secret(inputs);
	if (locale === "zh") return zh_admin_settings_fields_creem_signing_secret(inputs);
	return zh_tw2_admin_settings_fields_creem_signing_secret(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Creem_Product_Ids_MappingInputs */
var en_admin_settings_fields_creem_product_ids_mapping = () => {
	return `Product IDs Mapping`;
};
var zh_admin_settings_fields_creem_product_ids_mapping = () => {
	return `产品 ID 映射`;
};
/** @type {(inputs: Admin_Settings_Fields_Creem_Product_Ids_MappingInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_creem_product_ids_mapping = zh_admin_settings_fields_creem_product_ids_mapping;
/**
* | output |
* | --- |
* | "Product IDs Mapping" |
*
* @param {Admin_Settings_Fields_Creem_Product_Ids_MappingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_creem_product_ids_mapping = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_creem_product_ids_mapping(inputs);
	if (locale === "zh") return zh_admin_settings_fields_creem_product_ids_mapping(inputs);
	return zh_tw2_admin_settings_fields_creem_product_ids_mapping(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Creem_Test_AmountInputs */
var en_admin_settings_fields_creem_test_amount = () => {
	return `Test amount (cents)`;
};
var zh_admin_settings_fields_creem_test_amount = () => {
	return `测试金额（分）`;
};
/** @type {(inputs: Admin_Settings_Fields_Creem_Test_AmountInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_creem_test_amount = zh_admin_settings_fields_creem_test_amount;
/**
* | output |
* | --- |
* | "Test amount (cents)" |
*
* @param {Admin_Settings_Fields_Creem_Test_AmountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_creem_test_amount = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_creem_test_amount(inputs);
	if (locale === "zh") return zh_admin_settings_fields_creem_test_amount(inputs);
	return zh_tw2_admin_settings_fields_creem_test_amount(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Paypal_EnabledInputs */
var en_admin_settings_fields_paypal_enabled = () => {
	return `Enable PayPal`;
};
var zh_admin_settings_fields_paypal_enabled = () => {
	return `启用 PayPal`;
};
/** @type {(inputs: Admin_Settings_Fields_Paypal_EnabledInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_paypal_enabled = zh_admin_settings_fields_paypal_enabled;
/**
* | output |
* | --- |
* | "Enable PayPal" |
*
* @param {Admin_Settings_Fields_Paypal_EnabledInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_paypal_enabled = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_paypal_enabled(inputs);
	if (locale === "zh") return zh_admin_settings_fields_paypal_enabled(inputs);
	return zh_tw2_admin_settings_fields_paypal_enabled(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Paypal_Client_IdInputs */
var en_admin_settings_fields_paypal_client_id = () => {
	return `Client ID`;
};
var zh_admin_settings_fields_paypal_client_id = () => {
	return `客户端 ID`;
};
/** @type {(inputs: Admin_Settings_Fields_Paypal_Client_IdInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_paypal_client_id = zh_admin_settings_fields_paypal_client_id;
/**
* | output |
* | --- |
* | "Client ID" |
*
* @param {Admin_Settings_Fields_Paypal_Client_IdInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_paypal_client_id = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_paypal_client_id(inputs);
	if (locale === "zh") return zh_admin_settings_fields_paypal_client_id(inputs);
	return zh_tw2_admin_settings_fields_paypal_client_id(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Paypal_Client_SecretInputs */
var en_admin_settings_fields_paypal_client_secret = () => {
	return `Client Secret`;
};
var zh_admin_settings_fields_paypal_client_secret = () => {
	return `客户端密钥`;
};
/** @type {(inputs: Admin_Settings_Fields_Paypal_Client_SecretInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_paypal_client_secret = zh_admin_settings_fields_paypal_client_secret;
/**
* | output |
* | --- |
* | "Client Secret" |
*
* @param {Admin_Settings_Fields_Paypal_Client_SecretInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_paypal_client_secret = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_paypal_client_secret(inputs);
	if (locale === "zh") return zh_admin_settings_fields_paypal_client_secret(inputs);
	return zh_tw2_admin_settings_fields_paypal_client_secret(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Paypal_Webhook_IdInputs */
var en_admin_settings_fields_paypal_webhook_id = () => {
	return `Webhook ID`;
};
var zh_admin_settings_fields_paypal_webhook_id = () => {
	return `Webhook ID`;
};
/** @type {(inputs: Admin_Settings_Fields_Paypal_Webhook_IdInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_paypal_webhook_id = zh_admin_settings_fields_paypal_webhook_id;
/**
* | output |
* | --- |
* | "Webhook ID" |
*
* @param {Admin_Settings_Fields_Paypal_Webhook_IdInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_paypal_webhook_id = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_paypal_webhook_id(inputs);
	if (locale === "zh") return zh_admin_settings_fields_paypal_webhook_id(inputs);
	return zh_tw2_admin_settings_fields_paypal_webhook_id(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Paypal_EnvironmentInputs */
var en_admin_settings_fields_paypal_environment = () => {
	return `Environment`;
};
var zh_admin_settings_fields_paypal_environment = () => {
	return `环境`;
};
/** @type {(inputs: Admin_Settings_Fields_Paypal_EnvironmentInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_paypal_environment = zh_admin_settings_fields_paypal_environment;
/**
* | output |
* | --- |
* | "Environment" |
*
* @param {Admin_Settings_Fields_Paypal_EnvironmentInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_paypal_environment = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_paypal_environment(inputs);
	if (locale === "zh") return zh_admin_settings_fields_paypal_environment(inputs);
	return zh_tw2_admin_settings_fields_paypal_environment(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Paypal_Test_AmountInputs */
var en_admin_settings_fields_paypal_test_amount = () => {
	return `Test amount (cents)`;
};
var zh_admin_settings_fields_paypal_test_amount = () => {
	return `测试金额（分）`;
};
/** @type {(inputs: Admin_Settings_Fields_Paypal_Test_AmountInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_paypal_test_amount = zh_admin_settings_fields_paypal_test_amount;
/**
* | output |
* | --- |
* | "Test amount (cents)" |
*
* @param {Admin_Settings_Fields_Paypal_Test_AmountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_paypal_test_amount = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_paypal_test_amount(inputs);
	if (locale === "zh") return zh_admin_settings_fields_paypal_test_amount(inputs);
	return zh_tw2_admin_settings_fields_paypal_test_amount(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Alipay_EnabledInputs */
var en_admin_settings_fields_alipay_enabled = () => {
	return `Enable Alipay`;
};
var zh_admin_settings_fields_alipay_enabled = () => {
	return `启用支付宝`;
};
/** @type {(inputs: Admin_Settings_Fields_Alipay_EnabledInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_alipay_enabled = zh_admin_settings_fields_alipay_enabled;
/**
* | output |
* | --- |
* | "Enable Alipay" |
*
* @param {Admin_Settings_Fields_Alipay_EnabledInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_alipay_enabled = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_alipay_enabled(inputs);
	if (locale === "zh") return zh_admin_settings_fields_alipay_enabled(inputs);
	return zh_tw2_admin_settings_fields_alipay_enabled(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Alipay_App_IdInputs */
var en_admin_settings_fields_alipay_app_id = () => {
	return `App ID`;
};
var zh_admin_settings_fields_alipay_app_id = () => {
	return `应用 ID`;
};
/** @type {(inputs: Admin_Settings_Fields_Alipay_App_IdInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_alipay_app_id = zh_admin_settings_fields_alipay_app_id;
/**
* | output |
* | --- |
* | "App ID" |
*
* @param {Admin_Settings_Fields_Alipay_App_IdInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_alipay_app_id = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_alipay_app_id(inputs);
	if (locale === "zh") return zh_admin_settings_fields_alipay_app_id(inputs);
	return zh_tw2_admin_settings_fields_alipay_app_id(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Alipay_Private_KeyInputs */
var en_admin_settings_fields_alipay_private_key = () => {
	return `Private Key (RSA2)`;
};
var zh_admin_settings_fields_alipay_private_key = () => {
	return `应用私钥（RSA2）`;
};
/** @type {(inputs: Admin_Settings_Fields_Alipay_Private_KeyInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_alipay_private_key = zh_admin_settings_fields_alipay_private_key;
/**
* | output |
* | --- |
* | "Private Key (RSA2)" |
*
* @param {Admin_Settings_Fields_Alipay_Private_KeyInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_alipay_private_key = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_alipay_private_key(inputs);
	if (locale === "zh") return zh_admin_settings_fields_alipay_private_key(inputs);
	return zh_tw2_admin_settings_fields_alipay_private_key(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Alipay_Public_KeyInputs */
var en_admin_settings_fields_alipay_public_key = () => {
	return `Alipay Public Key`;
};
var zh_admin_settings_fields_alipay_public_key = () => {
	return `支付宝公钥`;
};
/** @type {(inputs: Admin_Settings_Fields_Alipay_Public_KeyInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_alipay_public_key = zh_admin_settings_fields_alipay_public_key;
/**
* | output |
* | --- |
* | "Alipay Public Key" |
*
* @param {Admin_Settings_Fields_Alipay_Public_KeyInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_alipay_public_key = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_alipay_public_key(inputs);
	if (locale === "zh") return zh_admin_settings_fields_alipay_public_key(inputs);
	return zh_tw2_admin_settings_fields_alipay_public_key(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Alipay_Notify_UrlInputs */
var en_admin_settings_fields_alipay_notify_url = () => {
	return `Notify URL (Webhook)`;
};
var zh_admin_settings_fields_alipay_notify_url = () => {
	return `回调地址（Webhook）`;
};
/** @type {(inputs: Admin_Settings_Fields_Alipay_Notify_UrlInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_alipay_notify_url = zh_admin_settings_fields_alipay_notify_url;
/**
* | output |
* | --- |
* | "Notify URL (Webhook)" |
*
* @param {Admin_Settings_Fields_Alipay_Notify_UrlInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_alipay_notify_url = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_alipay_notify_url(inputs);
	if (locale === "zh") return zh_admin_settings_fields_alipay_notify_url(inputs);
	return zh_tw2_admin_settings_fields_alipay_notify_url(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Alipay_Test_AmountInputs */
var en_admin_settings_fields_alipay_test_amount = () => {
	return `Test amount (cents)`;
};
var zh_admin_settings_fields_alipay_test_amount = () => {
	return `测试金额（分）`;
};
/** @type {(inputs: Admin_Settings_Fields_Alipay_Test_AmountInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_alipay_test_amount = zh_admin_settings_fields_alipay_test_amount;
/**
* | output |
* | --- |
* | "Test amount (cents)" |
*
* @param {Admin_Settings_Fields_Alipay_Test_AmountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_alipay_test_amount = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_alipay_test_amount(inputs);
	if (locale === "zh") return zh_admin_settings_fields_alipay_test_amount(inputs);
	return zh_tw2_admin_settings_fields_alipay_test_amount(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Wechat_EnabledInputs */
var en_admin_settings_fields_wechat_enabled = () => {
	return `Enable WeChat Pay`;
};
var zh_admin_settings_fields_wechat_enabled = () => {
	return `启用微信支付`;
};
/** @type {(inputs: Admin_Settings_Fields_Wechat_EnabledInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_wechat_enabled = zh_admin_settings_fields_wechat_enabled;
/**
* | output |
* | --- |
* | "Enable WeChat Pay" |
*
* @param {Admin_Settings_Fields_Wechat_EnabledInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_wechat_enabled = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_wechat_enabled(inputs);
	if (locale === "zh") return zh_admin_settings_fields_wechat_enabled(inputs);
	return zh_tw2_admin_settings_fields_wechat_enabled(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Wechat_App_IdInputs */
var en_admin_settings_fields_wechat_app_id = () => {
	return `AppID`;
};
var zh_admin_settings_fields_wechat_app_id = () => {
	return `AppID`;
};
/** @type {(inputs: Admin_Settings_Fields_Wechat_App_IdInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_wechat_app_id = zh_admin_settings_fields_wechat_app_id;
/**
* | output |
* | --- |
* | "AppID" |
*
* @param {Admin_Settings_Fields_Wechat_App_IdInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_wechat_app_id = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_wechat_app_id(inputs);
	if (locale === "zh") return zh_admin_settings_fields_wechat_app_id(inputs);
	return zh_tw2_admin_settings_fields_wechat_app_id(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Wechat_Mch_IdInputs */
var en_admin_settings_fields_wechat_mch_id = () => {
	return `Merchant ID`;
};
var zh_admin_settings_fields_wechat_mch_id = () => {
	return `商户号`;
};
/** @type {(inputs: Admin_Settings_Fields_Wechat_Mch_IdInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_wechat_mch_id = zh_admin_settings_fields_wechat_mch_id;
/**
* | output |
* | --- |
* | "Merchant ID" |
*
* @param {Admin_Settings_Fields_Wechat_Mch_IdInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_wechat_mch_id = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_wechat_mch_id(inputs);
	if (locale === "zh") return zh_admin_settings_fields_wechat_mch_id(inputs);
	return zh_tw2_admin_settings_fields_wechat_mch_id(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Wechat_Api_V3_KeyInputs */
var en_admin_settings_fields_wechat_api_v3_key = () => {
	return `APIv3 Key`;
};
var zh_admin_settings_fields_wechat_api_v3_key = () => {
	return `APIv3 密钥`;
};
/** @type {(inputs: Admin_Settings_Fields_Wechat_Api_V3_KeyInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_wechat_api_v3_key = zh_admin_settings_fields_wechat_api_v3_key;
/**
* | output |
* | --- |
* | "APIv3 Key" |
*
* @param {Admin_Settings_Fields_Wechat_Api_V3_KeyInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_wechat_api_v3_key = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_wechat_api_v3_key(inputs);
	if (locale === "zh") return zh_admin_settings_fields_wechat_api_v3_key(inputs);
	return zh_tw2_admin_settings_fields_wechat_api_v3_key(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Wechat_Private_KeyInputs */
var en_admin_settings_fields_wechat_private_key = () => {
	return `Merchant Private Key (PEM)`;
};
var zh_admin_settings_fields_wechat_private_key = () => {
	return `商户私钥（PEM）`;
};
/** @type {(inputs: Admin_Settings_Fields_Wechat_Private_KeyInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_wechat_private_key = zh_admin_settings_fields_wechat_private_key;
/**
* | output |
* | --- |
* | "Merchant Private Key (PEM)" |
*
* @param {Admin_Settings_Fields_Wechat_Private_KeyInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_wechat_private_key = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_wechat_private_key(inputs);
	if (locale === "zh") return zh_admin_settings_fields_wechat_private_key(inputs);
	return zh_tw2_admin_settings_fields_wechat_private_key(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Wechat_Serial_NoInputs */
var en_admin_settings_fields_wechat_serial_no = () => {
	return `Certificate Serial No`;
};
var zh_admin_settings_fields_wechat_serial_no = () => {
	return `证书序列号`;
};
/** @type {(inputs: Admin_Settings_Fields_Wechat_Serial_NoInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_wechat_serial_no = zh_admin_settings_fields_wechat_serial_no;
/**
* | output |
* | --- |
* | "Certificate Serial No" |
*
* @param {Admin_Settings_Fields_Wechat_Serial_NoInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_wechat_serial_no = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_wechat_serial_no(inputs);
	if (locale === "zh") return zh_admin_settings_fields_wechat_serial_no(inputs);
	return zh_tw2_admin_settings_fields_wechat_serial_no(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Wechat_Notify_UrlInputs */
var en_admin_settings_fields_wechat_notify_url = () => {
	return `Notify URL (Webhook)`;
};
var zh_admin_settings_fields_wechat_notify_url = () => {
	return `回调地址（Webhook）`;
};
/** @type {(inputs: Admin_Settings_Fields_Wechat_Notify_UrlInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_wechat_notify_url = zh_admin_settings_fields_wechat_notify_url;
/**
* | output |
* | --- |
* | "Notify URL (Webhook)" |
*
* @param {Admin_Settings_Fields_Wechat_Notify_UrlInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_wechat_notify_url = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_wechat_notify_url(inputs);
	if (locale === "zh") return zh_admin_settings_fields_wechat_notify_url(inputs);
	return zh_tw2_admin_settings_fields_wechat_notify_url(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Wechat_Test_AmountInputs */
var en_admin_settings_fields_wechat_test_amount = () => {
	return `Test amount (cents)`;
};
var zh_admin_settings_fields_wechat_test_amount = () => {
	return `测试金额（分）`;
};
/** @type {(inputs: Admin_Settings_Fields_Wechat_Test_AmountInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_wechat_test_amount = zh_admin_settings_fields_wechat_test_amount;
/**
* | output |
* | --- |
* | "Test amount (cents)" |
*
* @param {Admin_Settings_Fields_Wechat_Test_AmountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_wechat_test_amount = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_wechat_test_amount(inputs);
	if (locale === "zh") return zh_admin_settings_fields_wechat_test_amount(inputs);
	return zh_tw2_admin_settings_fields_wechat_test_amount(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Email_ProviderInputs */
var en_admin_settings_fields_email_provider = () => {
	return `Email Provider`;
};
var zh_admin_settings_fields_email_provider = () => {
	return `邮件服务商`;
};
/** @type {(inputs: Admin_Settings_Fields_Email_ProviderInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_email_provider = zh_admin_settings_fields_email_provider;
/**
* | output |
* | --- |
* | "Email Provider" |
*
* @param {Admin_Settings_Fields_Email_ProviderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_email_provider = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_email_provider(inputs);
	if (locale === "zh") return zh_admin_settings_fields_email_provider(inputs);
	return zh_tw2_admin_settings_fields_email_provider(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Resend_Api_KeyInputs */
var en_admin_settings_fields_resend_api_key = () => {
	return `API Key`;
};
var zh_admin_settings_fields_resend_api_key = () => {
	return `API 密钥`;
};
/** @type {(inputs: Admin_Settings_Fields_Resend_Api_KeyInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_resend_api_key = zh_admin_settings_fields_resend_api_key;
/**
* | output |
* | --- |
* | "API Key" |
*
* @param {Admin_Settings_Fields_Resend_Api_KeyInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_resend_api_key = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_resend_api_key(inputs);
	if (locale === "zh") return zh_admin_settings_fields_resend_api_key(inputs);
	return zh_tw2_admin_settings_fields_resend_api_key(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Resend_Sender_EmailInputs */
var en_admin_settings_fields_resend_sender_email = () => {
	return `Sender Email`;
};
var zh_admin_settings_fields_resend_sender_email = () => {
	return `发件地址`;
};
/** @type {(inputs: Admin_Settings_Fields_Resend_Sender_EmailInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_resend_sender_email = zh_admin_settings_fields_resend_sender_email;
/**
* | output |
* | --- |
* | "Sender Email" |
*
* @param {Admin_Settings_Fields_Resend_Sender_EmailInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_resend_sender_email = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_resend_sender_email(inputs);
	if (locale === "zh") return zh_admin_settings_fields_resend_sender_email(inputs);
	return zh_tw2_admin_settings_fields_resend_sender_email(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Cloudflare_Email_Api_TokenInputs */
var en_admin_settings_fields_cloudflare_email_api_token = () => {
	return `API Token`;
};
var zh_admin_settings_fields_cloudflare_email_api_token = () => {
	return `API Token`;
};
/** @type {(inputs: Admin_Settings_Fields_Cloudflare_Email_Api_TokenInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_cloudflare_email_api_token = zh_admin_settings_fields_cloudflare_email_api_token;
/**
* | output |
* | --- |
* | "API Token" |
*
* @param {Admin_Settings_Fields_Cloudflare_Email_Api_TokenInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_cloudflare_email_api_token = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_cloudflare_email_api_token(inputs);
	if (locale === "zh") return zh_admin_settings_fields_cloudflare_email_api_token(inputs);
	return zh_tw2_admin_settings_fields_cloudflare_email_api_token(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Cloudflare_Email_Account_IdInputs */
var en_admin_settings_fields_cloudflare_email_account_id = () => {
	return `Account ID`;
};
var zh_admin_settings_fields_cloudflare_email_account_id = () => {
	return `Account ID`;
};
/** @type {(inputs: Admin_Settings_Fields_Cloudflare_Email_Account_IdInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_cloudflare_email_account_id = zh_admin_settings_fields_cloudflare_email_account_id;
/**
* | output |
* | --- |
* | "Account ID" |
*
* @param {Admin_Settings_Fields_Cloudflare_Email_Account_IdInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_cloudflare_email_account_id = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_cloudflare_email_account_id(inputs);
	if (locale === "zh") return zh_admin_settings_fields_cloudflare_email_account_id(inputs);
	return zh_tw2_admin_settings_fields_cloudflare_email_account_id(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Cloudflare_Email_Sender_EmailInputs */
var en_admin_settings_fields_cloudflare_email_sender_email = () => {
	return `Sender Email`;
};
var zh_admin_settings_fields_cloudflare_email_sender_email = () => {
	return `发件地址`;
};
/** @type {(inputs: Admin_Settings_Fields_Cloudflare_Email_Sender_EmailInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_cloudflare_email_sender_email = zh_admin_settings_fields_cloudflare_email_sender_email;
/**
* | output |
* | --- |
* | "Sender Email" |
*
* @param {Admin_Settings_Fields_Cloudflare_Email_Sender_EmailInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_cloudflare_email_sender_email = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_cloudflare_email_sender_email(inputs);
	if (locale === "zh") return zh_admin_settings_fields_cloudflare_email_sender_email(inputs);
	return zh_tw2_admin_settings_fields_cloudflare_email_sender_email(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_R2_Access_KeyInputs */
var en_admin_settings_fields_r2_access_key = () => {
	return `Cloudflare Access Key`;
};
var zh_admin_settings_fields_r2_access_key = () => {
	return `Cloudflare 访问密钥`;
};
/** @type {(inputs: Admin_Settings_Fields_R2_Access_KeyInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_r2_access_key = zh_admin_settings_fields_r2_access_key;
/**
* | output |
* | --- |
* | "Cloudflare Access Key" |
*
* @param {Admin_Settings_Fields_R2_Access_KeyInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_r2_access_key = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_r2_access_key(inputs);
	if (locale === "zh") return zh_admin_settings_fields_r2_access_key(inputs);
	return zh_tw2_admin_settings_fields_r2_access_key(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_R2_Secret_KeyInputs */
var en_admin_settings_fields_r2_secret_key = () => {
	return `Cloudflare Secret Key`;
};
var zh_admin_settings_fields_r2_secret_key = () => {
	return `Cloudflare 私有密钥`;
};
/** @type {(inputs: Admin_Settings_Fields_R2_Secret_KeyInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_r2_secret_key = zh_admin_settings_fields_r2_secret_key;
/**
* | output |
* | --- |
* | "Cloudflare Secret Key" |
*
* @param {Admin_Settings_Fields_R2_Secret_KeyInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_r2_secret_key = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_r2_secret_key(inputs);
	if (locale === "zh") return zh_admin_settings_fields_r2_secret_key(inputs);
	return zh_tw2_admin_settings_fields_r2_secret_key(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_R2_Bucket_NameInputs */
var en_admin_settings_fields_r2_bucket_name = () => {
	return `Bucket Name`;
};
var zh_admin_settings_fields_r2_bucket_name = () => {
	return `存储桶名称`;
};
/** @type {(inputs: Admin_Settings_Fields_R2_Bucket_NameInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_r2_bucket_name = zh_admin_settings_fields_r2_bucket_name;
/**
* | output |
* | --- |
* | "Bucket Name" |
*
* @param {Admin_Settings_Fields_R2_Bucket_NameInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_r2_bucket_name = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_r2_bucket_name(inputs);
	if (locale === "zh") return zh_admin_settings_fields_r2_bucket_name(inputs);
	return zh_tw2_admin_settings_fields_r2_bucket_name(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_R2_Upload_PathInputs */
var en_admin_settings_fields_r2_upload_path = () => {
	return `Upload Path`;
};
var zh_admin_settings_fields_r2_upload_path = () => {
	return `上传路径`;
};
/** @type {(inputs: Admin_Settings_Fields_R2_Upload_PathInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_r2_upload_path = zh_admin_settings_fields_r2_upload_path;
/**
* | output |
* | --- |
* | "Upload Path" |
*
* @param {Admin_Settings_Fields_R2_Upload_PathInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_r2_upload_path = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_r2_upload_path(inputs);
	if (locale === "zh") return zh_admin_settings_fields_r2_upload_path(inputs);
	return zh_tw2_admin_settings_fields_r2_upload_path(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_R2_EndpointInputs */
var en_admin_settings_fields_r2_endpoint = () => {
	return `Endpoint`;
};
var zh_admin_settings_fields_r2_endpoint = () => {
	return `端点`;
};
/** @type {(inputs: Admin_Settings_Fields_R2_EndpointInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_r2_endpoint = zh_admin_settings_fields_r2_endpoint;
/**
* | output |
* | --- |
* | "Endpoint" |
*
* @param {Admin_Settings_Fields_R2_EndpointInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_r2_endpoint = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_r2_endpoint(inputs);
	if (locale === "zh") return zh_admin_settings_fields_r2_endpoint(inputs);
	return zh_tw2_admin_settings_fields_r2_endpoint(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_R2_DomainInputs */
var en_admin_settings_fields_r2_domain = () => {
	return `Domain`;
};
var zh_admin_settings_fields_r2_domain = () => {
	return `公共域名`;
};
/** @type {(inputs: Admin_Settings_Fields_R2_DomainInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_r2_domain = zh_admin_settings_fields_r2_domain;
/**
* | output |
* | --- |
* | "Domain" |
*
* @param {Admin_Settings_Fields_R2_DomainInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_r2_domain = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_r2_domain(inputs);
	if (locale === "zh") return zh_admin_settings_fields_r2_domain(inputs);
	return zh_tw2_admin_settings_fields_r2_domain(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Openai_Base_UrlInputs */
var en_admin_settings_fields_openai_base_url = () => {
	return `Base URL`;
};
var zh_admin_settings_fields_openai_base_url = () => {
	return `Base URL`;
};
/** @type {(inputs: Admin_Settings_Fields_Openai_Base_UrlInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_openai_base_url = zh_admin_settings_fields_openai_base_url;
/**
* | output |
* | --- |
* | "Base URL" |
*
* @param {Admin_Settings_Fields_Openai_Base_UrlInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_openai_base_url = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_openai_base_url(inputs);
	if (locale === "zh") return zh_admin_settings_fields_openai_base_url(inputs);
	return zh_tw2_admin_settings_fields_openai_base_url(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Openai_Api_KeyInputs */
var en_admin_settings_fields_openai_api_key = () => {
	return `API Key`;
};
var zh_admin_settings_fields_openai_api_key = () => {
	return `API 密钥`;
};
/** @type {(inputs: Admin_Settings_Fields_Openai_Api_KeyInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_openai_api_key = zh_admin_settings_fields_openai_api_key;
/**
* | output |
* | --- |
* | "API Key" |
*
* @param {Admin_Settings_Fields_Openai_Api_KeyInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_openai_api_key = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_openai_api_key(inputs);
	if (locale === "zh") return zh_admin_settings_fields_openai_api_key(inputs);
	return zh_tw2_admin_settings_fields_openai_api_key(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Anthropic_Base_UrlInputs */
var en_admin_settings_fields_anthropic_base_url = () => {
	return `Base URL`;
};
var zh_admin_settings_fields_anthropic_base_url = () => {
	return `Base URL`;
};
/** @type {(inputs: Admin_Settings_Fields_Anthropic_Base_UrlInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_anthropic_base_url = zh_admin_settings_fields_anthropic_base_url;
/**
* | output |
* | --- |
* | "Base URL" |
*
* @param {Admin_Settings_Fields_Anthropic_Base_UrlInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_anthropic_base_url = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_anthropic_base_url(inputs);
	if (locale === "zh") return zh_admin_settings_fields_anthropic_base_url(inputs);
	return zh_tw2_admin_settings_fields_anthropic_base_url(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Anthropic_Api_KeyInputs */
var en_admin_settings_fields_anthropic_api_key = () => {
	return `API Key`;
};
var zh_admin_settings_fields_anthropic_api_key = () => {
	return `API 密钥`;
};
/** @type {(inputs: Admin_Settings_Fields_Anthropic_Api_KeyInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_anthropic_api_key = zh_admin_settings_fields_anthropic_api_key;
/**
* | output |
* | --- |
* | "API Key" |
*
* @param {Admin_Settings_Fields_Anthropic_Api_KeyInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_anthropic_api_key = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_anthropic_api_key(inputs);
	if (locale === "zh") return zh_admin_settings_fields_anthropic_api_key(inputs);
	return zh_tw2_admin_settings_fields_anthropic_api_key(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Replicate_Api_TokenInputs */
var en_admin_settings_fields_replicate_api_token = () => {
	return `API Token`;
};
var zh_admin_settings_fields_replicate_api_token = () => {
	return `API Token`;
};
/** @type {(inputs: Admin_Settings_Fields_Replicate_Api_TokenInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_replicate_api_token = zh_admin_settings_fields_replicate_api_token;
/**
* | output |
* | --- |
* | "API Token" |
*
* @param {Admin_Settings_Fields_Replicate_Api_TokenInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_replicate_api_token = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_replicate_api_token(inputs);
	if (locale === "zh") return zh_admin_settings_fields_replicate_api_token(inputs);
	return zh_tw2_admin_settings_fields_replicate_api_token(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Fal_Api_KeyInputs */
var en_admin_settings_fields_fal_api_key = () => {
	return `API Key`;
};
var zh_admin_settings_fields_fal_api_key = () => {
	return `API 密钥`;
};
/** @type {(inputs: Admin_Settings_Fields_Fal_Api_KeyInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_fal_api_key = zh_admin_settings_fields_fal_api_key;
/**
* | output |
* | --- |
* | "API Key" |
*
* @param {Admin_Settings_Fields_Fal_Api_KeyInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_fal_api_key = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_fal_api_key(inputs);
	if (locale === "zh") return zh_admin_settings_fields_fal_api_key(inputs);
	return zh_tw2_admin_settings_fields_fal_api_key(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Google_Analytics_IdInputs */
var en_admin_settings_fields_google_analytics_id = () => {
	return `Measurement ID`;
};
var zh_admin_settings_fields_google_analytics_id = () => {
	return `Measurement ID`;
};
/** @type {(inputs: Admin_Settings_Fields_Google_Analytics_IdInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_google_analytics_id = zh_admin_settings_fields_google_analytics_id;
/**
* | output |
* | --- |
* | "Measurement ID" |
*
* @param {Admin_Settings_Fields_Google_Analytics_IdInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_google_analytics_id = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_google_analytics_id(inputs);
	if (locale === "zh") return zh_admin_settings_fields_google_analytics_id(inputs);
	return zh_tw2_admin_settings_fields_google_analytics_id(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Plausible_DomainInputs */
var en_admin_settings_fields_plausible_domain = () => {
	return `Domain`;
};
var zh_admin_settings_fields_plausible_domain = () => {
	return `域名`;
};
/** @type {(inputs: Admin_Settings_Fields_Plausible_DomainInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_plausible_domain = zh_admin_settings_fields_plausible_domain;
/**
* | output |
* | --- |
* | "Domain" |
*
* @param {Admin_Settings_Fields_Plausible_DomainInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_plausible_domain = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_plausible_domain(inputs);
	if (locale === "zh") return zh_admin_settings_fields_plausible_domain(inputs);
	return zh_tw2_admin_settings_fields_plausible_domain(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Plausible_SrcInputs */
var en_admin_settings_fields_plausible_src = () => {
	return `Script Src`;
};
var zh_admin_settings_fields_plausible_src = () => {
	return `脚本地址`;
};
/** @type {(inputs: Admin_Settings_Fields_Plausible_SrcInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_plausible_src = zh_admin_settings_fields_plausible_src;
/**
* | output |
* | --- |
* | "Script Src" |
*
* @param {Admin_Settings_Fields_Plausible_SrcInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_plausible_src = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_plausible_src(inputs);
	if (locale === "zh") return zh_admin_settings_fields_plausible_src(inputs);
	return zh_tw2_admin_settings_fields_plausible_src(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Adsense_CodeInputs */
var en_admin_settings_fields_adsense_code = () => {
	return `Publisher ID`;
};
var zh_admin_settings_fields_adsense_code = () => {
	return `Publisher ID`;
};
/** @type {(inputs: Admin_Settings_Fields_Adsense_CodeInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_adsense_code = zh_admin_settings_fields_adsense_code;
/**
* | output |
* | --- |
* | "Publisher ID" |
*
* @param {Admin_Settings_Fields_Adsense_CodeInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_adsense_code = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_adsense_code(inputs);
	if (locale === "zh") return zh_admin_settings_fields_adsense_code(inputs);
	return zh_tw2_admin_settings_fields_adsense_code(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Crisp_EnabledInputs */
var en_admin_settings_fields_crisp_enabled = () => {
	return `Enable Crisp`;
};
var zh_admin_settings_fields_crisp_enabled = () => {
	return `启用 Crisp`;
};
/** @type {(inputs: Admin_Settings_Fields_Crisp_EnabledInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_crisp_enabled = zh_admin_settings_fields_crisp_enabled;
/**
* | output |
* | --- |
* | "Enable Crisp" |
*
* @param {Admin_Settings_Fields_Crisp_EnabledInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_crisp_enabled = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_crisp_enabled(inputs);
	if (locale === "zh") return zh_admin_settings_fields_crisp_enabled(inputs);
	return zh_tw2_admin_settings_fields_crisp_enabled(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Crisp_Website_IdInputs */
var en_admin_settings_fields_crisp_website_id = () => {
	return `Website ID`;
};
var zh_admin_settings_fields_crisp_website_id = () => {
	return `网站 ID`;
};
/** @type {(inputs: Admin_Settings_Fields_Crisp_Website_IdInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_crisp_website_id = zh_admin_settings_fields_crisp_website_id;
/**
* | output |
* | --- |
* | "Website ID" |
*
* @param {Admin_Settings_Fields_Crisp_Website_IdInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_crisp_website_id = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_crisp_website_id(inputs);
	if (locale === "zh") return zh_admin_settings_fields_crisp_website_id(inputs);
	return zh_tw2_admin_settings_fields_crisp_website_id(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Tawk_EnabledInputs */
var en_admin_settings_fields_tawk_enabled = () => {
	return `Enable Tawk.to`;
};
var zh_admin_settings_fields_tawk_enabled = () => {
	return `启用 Tawk.to`;
};
/** @type {(inputs: Admin_Settings_Fields_Tawk_EnabledInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_tawk_enabled = zh_admin_settings_fields_tawk_enabled;
/**
* | output |
* | --- |
* | "Enable Tawk.to" |
*
* @param {Admin_Settings_Fields_Tawk_EnabledInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_tawk_enabled = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_tawk_enabled(inputs);
	if (locale === "zh") return zh_admin_settings_fields_tawk_enabled(inputs);
	return zh_tw2_admin_settings_fields_tawk_enabled(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Tawk_Property_IdInputs */
var en_admin_settings_fields_tawk_property_id = () => {
	return `Property ID`;
};
var zh_admin_settings_fields_tawk_property_id = () => {
	return `Property ID`;
};
/** @type {(inputs: Admin_Settings_Fields_Tawk_Property_IdInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_tawk_property_id = zh_admin_settings_fields_tawk_property_id;
/**
* | output |
* | --- |
* | "Property ID" |
*
* @param {Admin_Settings_Fields_Tawk_Property_IdInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_tawk_property_id = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_tawk_property_id(inputs);
	if (locale === "zh") return zh_admin_settings_fields_tawk_property_id(inputs);
	return zh_tw2_admin_settings_fields_tawk_property_id(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Fields_Tawk_Widget_IdInputs */
var en_admin_settings_fields_tawk_widget_id = () => {
	return `Widget ID`;
};
var zh_admin_settings_fields_tawk_widget_id = () => {
	return `Widget ID`;
};
/** @type {(inputs: Admin_Settings_Fields_Tawk_Widget_IdInputs) => LocalizedString} */
var zh_tw2_admin_settings_fields_tawk_widget_id = zh_admin_settings_fields_tawk_widget_id;
/**
* | output |
* | --- |
* | "Widget ID" |
*
* @param {Admin_Settings_Fields_Tawk_Widget_IdInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_fields_tawk_widget_id = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_fields_tawk_widget_id(inputs);
	if (locale === "zh") return zh_admin_settings_fields_tawk_widget_id(inputs);
	return zh_tw2_admin_settings_fields_tawk_widget_id(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ "\"starter_monthly\": \"prod_xxx\"": NonNullable<unknown> }} Admin_Settings_Placeholders_Creem_Product_Ids_MappingInputs */
var en_admin_settings_placeholders_creem_product_ids_mapping = (i) => {
	return `${i?.["\"starter_monthly\": \"prod_xxx\""]}`;
};
var zh_admin_settings_placeholders_creem_product_ids_mapping = (i) => {
	return `${i?.["\"starter_monthly\": \"prod_xxx\""]}`;
};
/** @type {(inputs: Admin_Settings_Placeholders_Creem_Product_Ids_MappingInputs) => LocalizedString} */
var zh_tw2_admin_settings_placeholders_creem_product_ids_mapping = zh_admin_settings_placeholders_creem_product_ids_mapping;
/**
* | output |
* | --- |
* | "{\"starter_monthly\": \"prod_xxx\"}" |
*
* @param {Admin_Settings_Placeholders_Creem_Product_Ids_MappingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_placeholders_creem_product_ids_mapping = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_placeholders_creem_product_ids_mapping(inputs);
	if (locale === "zh") return zh_admin_settings_placeholders_creem_product_ids_mapping(inputs);
	return zh_tw2_admin_settings_placeholders_creem_product_ids_mapping(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Placeholders_Creem_Test_AmountInputs */
var en_admin_settings_placeholders_creem_test_amount = () => {
	return `Leave empty to use real amount, 1 = $0.01`;
};
var zh_admin_settings_placeholders_creem_test_amount = () => {
	return `留空使用实际金额，填 1 则支付 $0.01`;
};
/** @type {(inputs: Admin_Settings_Placeholders_Creem_Test_AmountInputs) => LocalizedString} */
var zh_tw2_admin_settings_placeholders_creem_test_amount = zh_admin_settings_placeholders_creem_test_amount;
/**
* | output |
* | --- |
* | "Leave empty to use real amount, 1 = $0.01" |
*
* @param {Admin_Settings_Placeholders_Creem_Test_AmountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_placeholders_creem_test_amount = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_placeholders_creem_test_amount(inputs);
	if (locale === "zh") return zh_admin_settings_placeholders_creem_test_amount(inputs);
	return zh_tw2_admin_settings_placeholders_creem_test_amount(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Placeholders_Paypal_Test_AmountInputs */
var en_admin_settings_placeholders_paypal_test_amount = () => {
	return `Leave empty to use real amount, 1 = $0.01`;
};
var zh_admin_settings_placeholders_paypal_test_amount = () => {
	return `留空使用实际金额，填 1 则支付 $0.01`;
};
/** @type {(inputs: Admin_Settings_Placeholders_Paypal_Test_AmountInputs) => LocalizedString} */
var zh_tw2_admin_settings_placeholders_paypal_test_amount = zh_admin_settings_placeholders_paypal_test_amount;
/**
* | output |
* | --- |
* | "Leave empty to use real amount, 1 = $0.01" |
*
* @param {Admin_Settings_Placeholders_Paypal_Test_AmountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_placeholders_paypal_test_amount = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_placeholders_paypal_test_amount(inputs);
	if (locale === "zh") return zh_admin_settings_placeholders_paypal_test_amount(inputs);
	return zh_tw2_admin_settings_placeholders_paypal_test_amount(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Placeholders_Alipay_Test_AmountInputs */
var en_admin_settings_placeholders_alipay_test_amount = () => {
	return `Leave empty to use real amount, 1 = ¥0.01`;
};
var zh_admin_settings_placeholders_alipay_test_amount = () => {
	return `留空使用实际金额，填 1 则支付 ¥0.01`;
};
/** @type {(inputs: Admin_Settings_Placeholders_Alipay_Test_AmountInputs) => LocalizedString} */
var zh_tw2_admin_settings_placeholders_alipay_test_amount = zh_admin_settings_placeholders_alipay_test_amount;
/**
* | output |
* | --- |
* | "Leave empty to use real amount, 1 = ¥0.01" |
*
* @param {Admin_Settings_Placeholders_Alipay_Test_AmountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_placeholders_alipay_test_amount = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_placeholders_alipay_test_amount(inputs);
	if (locale === "zh") return zh_admin_settings_placeholders_alipay_test_amount(inputs);
	return zh_tw2_admin_settings_placeholders_alipay_test_amount(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Settings_Placeholders_Wechat_Test_AmountInputs */
var en_admin_settings_placeholders_wechat_test_amount = () => {
	return `Leave empty to use real amount, 1 = ¥0.01`;
};
var zh_admin_settings_placeholders_wechat_test_amount = () => {
	return `留空使用实际金额，填 1 则支付 ¥0.01`;
};
/** @type {(inputs: Admin_Settings_Placeholders_Wechat_Test_AmountInputs) => LocalizedString} */
var zh_tw2_admin_settings_placeholders_wechat_test_amount = zh_admin_settings_placeholders_wechat_test_amount;
/**
* | output |
* | --- |
* | "Leave empty to use real amount, 1 = ¥0.01" |
*
* @param {Admin_Settings_Placeholders_Wechat_Test_AmountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_settings_placeholders_wechat_test_amount = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_settings_placeholders_wechat_test_amount(inputs);
	if (locale === "zh") return zh_admin_settings_placeholders_wechat_test_amount(inputs);
	return zh_tw2_admin_settings_placeholders_wechat_test_amount(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_TitleInputs */
var en_admin_tickets_title = () => {
	return `Support Tickets`;
};
var zh_admin_tickets_title = () => {
	return `工单管理`;
};
/** @type {(inputs: Admin_Tickets_TitleInputs) => LocalizedString} */
var zh_tw2_admin_tickets_title = zh_admin_tickets_title;
/**
* | output |
* | --- |
* | "Support Tickets" |
*
* @param {Admin_Tickets_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_title(inputs);
	if (locale === "zh") return zh_admin_tickets_title(inputs);
	return zh_tw2_admin_tickets_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_DescriptionInputs */
var en_admin_tickets_description = () => {
	return `View and reply to user tickets`;
};
var zh_admin_tickets_description = () => {
	return `查看并回复用户提交的工单`;
};
/** @type {(inputs: Admin_Tickets_DescriptionInputs) => LocalizedString} */
var zh_tw2_admin_tickets_description = zh_admin_tickets_description;
/**
* | output |
* | --- |
* | "View and reply to user tickets" |
*
* @param {Admin_Tickets_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_description(inputs);
	if (locale === "zh") return zh_admin_tickets_description(inputs);
	return zh_tw2_admin_tickets_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Title_ColInputs */
var en_admin_tickets_title_col = () => {
	return `Subject`;
};
var zh_admin_tickets_title_col = () => {
	return `标题`;
};
/** @type {(inputs: Admin_Tickets_Title_ColInputs) => LocalizedString} */
var zh_tw2_admin_tickets_title_col = zh_admin_tickets_title_col;
/**
* | output |
* | --- |
* | "Subject" |
*
* @param {Admin_Tickets_Title_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_title_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_title_col(inputs);
	if (locale === "zh") return zh_admin_tickets_title_col(inputs);
	return zh_tw2_admin_tickets_title_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_User_ColInputs */
var en_admin_tickets_user_col = () => {
	return `User`;
};
var zh_admin_tickets_user_col = () => {
	return `用户`;
};
/** @type {(inputs: Admin_Tickets_User_ColInputs) => LocalizedString} */
var zh_tw2_admin_tickets_user_col = zh_admin_tickets_user_col;
/**
* | output |
* | --- |
* | "User" |
*
* @param {Admin_Tickets_User_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_user_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_user_col(inputs);
	if (locale === "zh") return zh_admin_tickets_user_col(inputs);
	return zh_tw2_admin_tickets_user_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Status_ColInputs */
var en_admin_tickets_status_col = () => {
	return `Status`;
};
var zh_admin_tickets_status_col = () => {
	return `状态`;
};
/** @type {(inputs: Admin_Tickets_Status_ColInputs) => LocalizedString} */
var zh_tw2_admin_tickets_status_col = zh_admin_tickets_status_col;
/**
* | output |
* | --- |
* | "Status" |
*
* @param {Admin_Tickets_Status_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_status_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_status_col(inputs);
	if (locale === "zh") return zh_admin_tickets_status_col(inputs);
	return zh_tw2_admin_tickets_status_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Updated_ColInputs */
var en_admin_tickets_updated_col = () => {
	return `Last Updated`;
};
var zh_admin_tickets_updated_col = () => {
	return `更新时间`;
};
/** @type {(inputs: Admin_Tickets_Updated_ColInputs) => LocalizedString} */
var zh_tw2_admin_tickets_updated_col = zh_admin_tickets_updated_col;
/**
* | output |
* | --- |
* | "Last Updated" |
*
* @param {Admin_Tickets_Updated_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_updated_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_updated_col(inputs);
	if (locale === "zh") return zh_admin_tickets_updated_col(inputs);
	return zh_tw2_admin_tickets_updated_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Actions_ColInputs */
var en_admin_tickets_actions_col = () => {
	return `Actions`;
};
var zh_admin_tickets_actions_col = () => {
	return `操作`;
};
/** @type {(inputs: Admin_Tickets_Actions_ColInputs) => LocalizedString} */
var zh_tw2_admin_tickets_actions_col = zh_admin_tickets_actions_col;
/**
* | output |
* | --- |
* | "Actions" |
*
* @param {Admin_Tickets_Actions_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_actions_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_actions_col(inputs);
	if (locale === "zh") return zh_admin_tickets_actions_col(inputs);
	return zh_tw2_admin_tickets_actions_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Tab_AllInputs */
var en_admin_tickets_tab_all = () => {
	return `All`;
};
var zh_admin_tickets_tab_all = () => {
	return `全部`;
};
/** @type {(inputs: Admin_Tickets_Tab_AllInputs) => LocalizedString} */
var zh_tw2_admin_tickets_tab_all = zh_admin_tickets_tab_all;
/**
* | output |
* | --- |
* | "All" |
*
* @param {Admin_Tickets_Tab_AllInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_tab_all = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_tab_all(inputs);
	if (locale === "zh") return zh_admin_tickets_tab_all(inputs);
	return zh_tw2_admin_tickets_tab_all(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Tab_OpenInputs */
var en_admin_tickets_tab_open = () => {
	return `Open`;
};
var zh_admin_tickets_tab_open = () => {
	return `待处理`;
};
/** @type {(inputs: Admin_Tickets_Tab_OpenInputs) => LocalizedString} */
var zh_tw2_admin_tickets_tab_open = zh_admin_tickets_tab_open;
/**
* | output |
* | --- |
* | "Open" |
*
* @param {Admin_Tickets_Tab_OpenInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_tab_open = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_tab_open(inputs);
	if (locale === "zh") return zh_admin_tickets_tab_open(inputs);
	return zh_tw2_admin_tickets_tab_open(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Tab_RepliedInputs */
var en_admin_tickets_tab_replied = () => {
	return `In Progress`;
};
var zh_admin_tickets_tab_replied = () => {
	return `处理中`;
};
/** @type {(inputs: Admin_Tickets_Tab_RepliedInputs) => LocalizedString} */
var zh_tw2_admin_tickets_tab_replied = zh_admin_tickets_tab_replied;
/**
* | output |
* | --- |
* | "In Progress" |
*
* @param {Admin_Tickets_Tab_RepliedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_tab_replied = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_tab_replied(inputs);
	if (locale === "zh") return zh_admin_tickets_tab_replied(inputs);
	return zh_tw2_admin_tickets_tab_replied(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Tab_ClosedInputs */
var en_admin_tickets_tab_closed = () => {
	return `Closed`;
};
var zh_admin_tickets_tab_closed = () => {
	return `已关闭`;
};
/** @type {(inputs: Admin_Tickets_Tab_ClosedInputs) => LocalizedString} */
var zh_tw2_admin_tickets_tab_closed = zh_admin_tickets_tab_closed;
/**
* | output |
* | --- |
* | "Closed" |
*
* @param {Admin_Tickets_Tab_ClosedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_tab_closed = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_tab_closed(inputs);
	if (locale === "zh") return zh_admin_tickets_tab_closed(inputs);
	return zh_tw2_admin_tickets_tab_closed(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Status_OpenInputs */
var en_admin_tickets_status_open = () => {
	return `Open`;
};
var zh_admin_tickets_status_open = () => {
	return `待处理`;
};
/** @type {(inputs: Admin_Tickets_Status_OpenInputs) => LocalizedString} */
var zh_tw2_admin_tickets_status_open = zh_admin_tickets_status_open;
/**
* | output |
* | --- |
* | "Open" |
*
* @param {Admin_Tickets_Status_OpenInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_status_open = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_status_open(inputs);
	if (locale === "zh") return zh_admin_tickets_status_open(inputs);
	return zh_tw2_admin_tickets_status_open(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Status_RepliedInputs */
var en_admin_tickets_status_replied = () => {
	return `In Progress`;
};
var zh_admin_tickets_status_replied = () => {
	return `处理中`;
};
/** @type {(inputs: Admin_Tickets_Status_RepliedInputs) => LocalizedString} */
var zh_tw2_admin_tickets_status_replied = zh_admin_tickets_status_replied;
/**
* | output |
* | --- |
* | "In Progress" |
*
* @param {Admin_Tickets_Status_RepliedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_status_replied = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_status_replied(inputs);
	if (locale === "zh") return zh_admin_tickets_status_replied(inputs);
	return zh_tw2_admin_tickets_status_replied(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Status_ClosedInputs */
var en_admin_tickets_status_closed = () => {
	return `Closed`;
};
var zh_admin_tickets_status_closed = () => {
	return `已关闭`;
};
/** @type {(inputs: Admin_Tickets_Status_ClosedInputs) => LocalizedString} */
var zh_tw2_admin_tickets_status_closed = zh_admin_tickets_status_closed;
/**
* | output |
* | --- |
* | "Closed" |
*
* @param {Admin_Tickets_Status_ClosedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_status_closed = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_status_closed(inputs);
	if (locale === "zh") return zh_admin_tickets_status_closed(inputs);
	return zh_tw2_admin_tickets_status_closed(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_EmptyInputs */
var en_admin_tickets_empty = () => {
	return `No tickets`;
};
var zh_admin_tickets_empty = () => {
	return `暂无工单`;
};
/** @type {(inputs: Admin_Tickets_EmptyInputs) => LocalizedString} */
var zh_tw2_admin_tickets_empty = zh_admin_tickets_empty;
/**
* | output |
* | --- |
* | "No tickets" |
*
* @param {Admin_Tickets_EmptyInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_empty = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_empty(inputs);
	if (locale === "zh") return zh_admin_tickets_empty(inputs);
	return zh_tw2_admin_tickets_empty(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Reply_PlaceholderInputs */
var en_admin_tickets_reply_placeholder = () => {
	return `Write a reply...`;
};
var zh_admin_tickets_reply_placeholder = () => {
	return `输入回复内容…`;
};
/** @type {(inputs: Admin_Tickets_Reply_PlaceholderInputs) => LocalizedString} */
var zh_tw2_admin_tickets_reply_placeholder = zh_admin_tickets_reply_placeholder;
/**
* | output |
* | --- |
* | "Write a reply..." |
*
* @param {Admin_Tickets_Reply_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_reply_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_reply_placeholder(inputs);
	if (locale === "zh") return zh_admin_tickets_reply_placeholder(inputs);
	return zh_tw2_admin_tickets_reply_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Reply_SubmitInputs */
var en_admin_tickets_reply_submit = () => {
	return `Send Reply`;
};
var zh_admin_tickets_reply_submit = () => {
	return `发送回复`;
};
/** @type {(inputs: Admin_Tickets_Reply_SubmitInputs) => LocalizedString} */
var zh_tw2_admin_tickets_reply_submit = zh_admin_tickets_reply_submit;
/**
* | output |
* | --- |
* | "Send Reply" |
*
* @param {Admin_Tickets_Reply_SubmitInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_reply_submit = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_reply_submit(inputs);
	if (locale === "zh") return zh_admin_tickets_reply_submit(inputs);
	return zh_tw2_admin_tickets_reply_submit(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_ReplyingInputs */
var en_admin_tickets_replying = () => {
	return `Sending...`;
};
var zh_admin_tickets_replying = () => {
	return `发送中…`;
};
/** @type {(inputs: Admin_Tickets_ReplyingInputs) => LocalizedString} */
var zh_tw2_admin_tickets_replying = zh_admin_tickets_replying;
/**
* | output |
* | --- |
* | "Sending..." |
*
* @param {Admin_Tickets_ReplyingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_replying = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_replying(inputs);
	if (locale === "zh") return zh_admin_tickets_replying(inputs);
	return zh_tw2_admin_tickets_replying(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Reply_SuccessInputs */
var en_admin_tickets_reply_success = () => {
	return `Reply sent`;
};
var zh_admin_tickets_reply_success = () => {
	return `回复已发送`;
};
/** @type {(inputs: Admin_Tickets_Reply_SuccessInputs) => LocalizedString} */
var zh_tw2_admin_tickets_reply_success = zh_admin_tickets_reply_success;
/**
* | output |
* | --- |
* | "Reply sent" |
*
* @param {Admin_Tickets_Reply_SuccessInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_reply_success = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_reply_success(inputs);
	if (locale === "zh") return zh_admin_tickets_reply_success(inputs);
	return zh_tw2_admin_tickets_reply_success(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Status_UpdatedInputs */
var en_admin_tickets_status_updated = () => {
	return `Status updated`;
};
var zh_admin_tickets_status_updated = () => {
	return `状态已更新`;
};
/** @type {(inputs: Admin_Tickets_Status_UpdatedInputs) => LocalizedString} */
var zh_tw2_admin_tickets_status_updated = zh_admin_tickets_status_updated;
/**
* | output |
* | --- |
* | "Status updated" |
*
* @param {Admin_Tickets_Status_UpdatedInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_status_updated = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_status_updated(inputs);
	if (locale === "zh") return zh_admin_tickets_status_updated(inputs);
	return zh_tw2_admin_tickets_status_updated(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Close_TicketInputs */
var en_admin_tickets_close_ticket = () => {
	return `Close Ticket`;
};
var zh_admin_tickets_close_ticket = () => {
	return `关闭工单`;
};
/** @type {(inputs: Admin_Tickets_Close_TicketInputs) => LocalizedString} */
var zh_tw2_admin_tickets_close_ticket = zh_admin_tickets_close_ticket;
/**
* | output |
* | --- |
* | "Close Ticket" |
*
* @param {Admin_Tickets_Close_TicketInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_close_ticket = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_close_ticket(inputs);
	if (locale === "zh") return zh_admin_tickets_close_ticket(inputs);
	return zh_tw2_admin_tickets_close_ticket(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Reopen_TicketInputs */
var en_admin_tickets_reopen_ticket = () => {
	return `Reopen Ticket`;
};
var zh_admin_tickets_reopen_ticket = () => {
	return `重新打开`;
};
/** @type {(inputs: Admin_Tickets_Reopen_TicketInputs) => LocalizedString} */
var zh_tw2_admin_tickets_reopen_ticket = zh_admin_tickets_reopen_ticket;
/**
* | output |
* | --- |
* | "Reopen Ticket" |
*
* @param {Admin_Tickets_Reopen_TicketInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_reopen_ticket = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_reopen_ticket(inputs);
	if (locale === "zh") return zh_admin_tickets_reopen_ticket(inputs);
	return zh_tw2_admin_tickets_reopen_ticket(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_AdminInputs */
var en_admin_tickets_admin = () => {
	return `Admin`;
};
var zh_admin_tickets_admin = () => {
	return `管理员`;
};
/** @type {(inputs: Admin_Tickets_AdminInputs) => LocalizedString} */
var zh_tw2_admin_tickets_admin = zh_admin_tickets_admin;
/**
* | output |
* | --- |
* | "Admin" |
*
* @param {Admin_Tickets_AdminInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_admin = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_admin(inputs);
	if (locale === "zh") return zh_admin_tickets_admin(inputs);
	return zh_tw2_admin_tickets_admin(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Latest_Reply_ColInputs */
var en_admin_tickets_latest_reply_col = () => {
	return `Latest Reply`;
};
var zh_admin_tickets_latest_reply_col = () => {
	return `最新回复`;
};
/** @type {(inputs: Admin_Tickets_Latest_Reply_ColInputs) => LocalizedString} */
var zh_tw2_admin_tickets_latest_reply_col = zh_admin_tickets_latest_reply_col;
/**
* | output |
* | --- |
* | "Latest Reply" |
*
* @param {Admin_Tickets_Latest_Reply_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_latest_reply_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_latest_reply_col(inputs);
	if (locale === "zh") return zh_admin_tickets_latest_reply_col(inputs);
	return zh_tw2_admin_tickets_latest_reply_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Admin_Tickets_Created_ColInputs */
var en_admin_tickets_created_col = () => {
	return `Created At`;
};
var zh_admin_tickets_created_col = () => {
	return `创建时间`;
};
/** @type {(inputs: Admin_Tickets_Created_ColInputs) => LocalizedString} */
var zh_tw2_admin_tickets_created_col = zh_admin_tickets_created_col;
/**
* | output |
* | --- |
* | "Created At" |
*
* @param {Admin_Tickets_Created_ColInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var admin_tickets_created_col = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_admin_tickets_created_col(inputs);
	if (locale === "zh") return zh_admin_tickets_created_col(inputs);
	return zh_tw2_admin_tickets_created_col(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Nav_FeaturesInputs */
var en_landing_nav_features = () => {
	return `Features`;
};
var zh_landing_nav_features = () => {
	return `功能`;
};
/** @type {(inputs: Landing_Nav_FeaturesInputs) => LocalizedString} */
var zh_tw2_landing_nav_features = zh_landing_nav_features;
/**
* | output |
* | --- |
* | "Features" |
*
* @param {Landing_Nav_FeaturesInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_nav_features = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_nav_features(inputs);
	if (locale === "zh") return zh_landing_nav_features(inputs);
	return zh_tw2_landing_nav_features(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Nav_PricingInputs */
var en_landing_nav_pricing = () => {
	return `Pricing`;
};
var zh_landing_nav_pricing = () => {
	return `价格`;
};
/** @type {(inputs: Landing_Nav_PricingInputs) => LocalizedString} */
var zh_tw2_landing_nav_pricing = zh_landing_nav_pricing;
/**
* | output |
* | --- |
* | "Pricing" |
*
* @param {Landing_Nav_PricingInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_nav_pricing = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_nav_pricing(inputs);
	if (locale === "zh") return zh_landing_nav_pricing(inputs);
	return zh_tw2_landing_nav_pricing(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Hero_HeadlineInputs */
var en_landing_hero_headline = () => {
	return `World of Warcraft: Forever, documented.`;
};
var zh_landing_hero_headline = () => {
	return `《魔兽世界：Forever》资料站`;
};
var zh_tw2_landing_hero_headline = () => {
	return `記錄 World of Warcraft: Forever。`;
};
/**
* | output |
* | --- |
* | "World of Warcraft: Forever, documented." |
*
* @param {Landing_Hero_HeadlineInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_hero_headline = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_hero_headline(inputs);
	if (locale === "zh") return zh_landing_hero_headline(inputs);
	return zh_tw2_landing_hero_headline(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Hero_SubheadlineInputs */
var en_landing_hero_subheadline = () => {
	return `Races, racials, nine classes, talent calculators, dungeons, and Forever vs Classic diffs — labeled by source confidence for the pre-Beta window.`;
};
var zh_landing_hero_subheadline = () => {
	return `种族/特长、九大职业、天赋计算器、地下城，以及 Forever 与经典旧世对比——按来源可信度标注，覆盖预 Beta 窗口。`;
};
/** @type {(inputs: Landing_Hero_SubheadlineInputs) => LocalizedString} */
var zh_tw2_landing_hero_subheadline = zh_landing_hero_subheadline;
/**
* | output |
* | --- |
* | "Races, racials, nine classes, talent calculators, dungeons, and Forever vs Classic diffs — labeled by source confidence for the pre-Beta window." |
*
* @param {Landing_Hero_SubheadlineInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_hero_subheadline = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_hero_subheadline(inputs);
	if (locale === "zh") return zh_landing_hero_subheadline(inputs);
	return zh_tw2_landing_hero_subheadline(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Hero_CtaInputs */
var en_landing_hero_cta = () => {
	return `Search the wiki`;
};
var zh_landing_hero_cta = () => {
	return `搜索百科`;
};
var zh_tw2_landing_hero_cta = () => {
	return `搜尋 Wiki`;
};
/**
* | output |
* | --- |
* | "Search the wiki" |
*
* @param {Landing_Hero_CtaInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_hero_cta = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_hero_cta(inputs);
	if (locale === "zh") return zh_landing_hero_cta(inputs);
	return zh_tw2_landing_hero_cta(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Hero_SecondaryInputs */
var en_landing_hero_secondary = () => {
	return `Browse races`;
};
var zh_landing_hero_secondary = () => {
	return `浏览种族`;
};
/** @type {(inputs: Landing_Hero_SecondaryInputs) => LocalizedString} */
var zh_tw2_landing_hero_secondary = zh_landing_hero_secondary;
/**
* | output |
* | --- |
* | "Browse races" |
*
* @param {Landing_Hero_SecondaryInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_hero_secondary = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_hero_secondary(inputs);
	if (locale === "zh") return zh_landing_hero_secondary(inputs);
	return zh_tw2_landing_hero_secondary(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Chips_AuthInputs */
var en_landing_chips_auth = () => {
	return `Authentication`;
};
var zh_landing_chips_auth = () => {
	return `身份认证`;
};
/** @type {(inputs: Landing_Chips_AuthInputs) => LocalizedString} */
var zh_tw2_landing_chips_auth = zh_landing_chips_auth;
/**
* | output |
* | --- |
* | "Authentication" |
*
* @param {Landing_Chips_AuthInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_chips_auth = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_chips_auth(inputs);
	if (locale === "zh") return zh_landing_chips_auth(inputs);
	return zh_tw2_landing_chips_auth(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Chips_PaymentInputs */
var en_landing_chips_payment = () => {
	return `Payments`;
};
var zh_landing_chips_payment = () => {
	return `支付系统`;
};
/** @type {(inputs: Landing_Chips_PaymentInputs) => LocalizedString} */
var zh_tw2_landing_chips_payment = zh_landing_chips_payment;
/**
* | output |
* | --- |
* | "Payments" |
*
* @param {Landing_Chips_PaymentInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_chips_payment = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_chips_payment(inputs);
	if (locale === "zh") return zh_landing_chips_payment(inputs);
	return zh_tw2_landing_chips_payment(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Chips_SubscriptionInputs */
var en_landing_chips_subscription = () => {
	return `Subscriptions`;
};
var zh_landing_chips_subscription = () => {
	return `订阅管理`;
};
/** @type {(inputs: Landing_Chips_SubscriptionInputs) => LocalizedString} */
var zh_tw2_landing_chips_subscription = zh_landing_chips_subscription;
/**
* | output |
* | --- |
* | "Subscriptions" |
*
* @param {Landing_Chips_SubscriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_chips_subscription = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_chips_subscription(inputs);
	if (locale === "zh") return zh_landing_chips_subscription(inputs);
	return zh_tw2_landing_chips_subscription(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Chips_CreditsInputs */
var en_landing_chips_credits = () => {
	return `Credits`;
};
var zh_landing_chips_credits = () => {
	return `积分系统`;
};
/** @type {(inputs: Landing_Chips_CreditsInputs) => LocalizedString} */
var zh_tw2_landing_chips_credits = zh_landing_chips_credits;
/**
* | output |
* | --- |
* | "Credits" |
*
* @param {Landing_Chips_CreditsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_chips_credits = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_chips_credits(inputs);
	if (locale === "zh") return zh_landing_chips_credits(inputs);
	return zh_tw2_landing_chips_credits(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Chips_RbacInputs */
var en_landing_chips_rbac = () => {
	return `RBAC`;
};
var zh_landing_chips_rbac = () => {
	return `权限管理`;
};
/** @type {(inputs: Landing_Chips_RbacInputs) => LocalizedString} */
var zh_tw2_landing_chips_rbac = zh_landing_chips_rbac;
/**
* | output |
* | --- |
* | "RBAC" |
*
* @param {Landing_Chips_RbacInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_chips_rbac = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_chips_rbac(inputs);
	if (locale === "zh") return zh_landing_chips_rbac(inputs);
	return zh_tw2_landing_chips_rbac(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Chips_I18nInputs */
var en_landing_chips_i18n = () => {
	return `i18n`;
};
var zh_landing_chips_i18n = () => {
	return `国际化`;
};
/** @type {(inputs: Landing_Chips_I18nInputs) => LocalizedString} */
var zh_tw2_landing_chips_i18n = zh_landing_chips_i18n;
/**
* | output |
* | --- |
* | "i18n" |
*
* @param {Landing_Chips_I18nInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_chips_i18n = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_chips_i18n(inputs);
	if (locale === "zh") return zh_landing_chips_i18n(inputs);
	return zh_tw2_landing_chips_i18n(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Chips_CmsInputs */
var en_landing_chips_cms = () => {
	return `CMS`;
};
var zh_landing_chips_cms = () => {
	return `内容管理`;
};
/** @type {(inputs: Landing_Chips_CmsInputs) => LocalizedString} */
var zh_tw2_landing_chips_cms = zh_landing_chips_cms;
/**
* | output |
* | --- |
* | "CMS" |
*
* @param {Landing_Chips_CmsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_chips_cms = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_chips_cms(inputs);
	if (locale === "zh") return zh_landing_chips_cms(inputs);
	return zh_tw2_landing_chips_cms(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Chips_ApikeysInputs */
var en_landing_chips_apikeys = () => {
	return `API Keys`;
};
var zh_landing_chips_apikeys = () => {
	return `API 密钥`;
};
/** @type {(inputs: Landing_Chips_ApikeysInputs) => LocalizedString} */
var zh_tw2_landing_chips_apikeys = zh_landing_chips_apikeys;
/**
* | output |
* | --- |
* | "API Keys" |
*
* @param {Landing_Chips_ApikeysInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_chips_apikeys = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_chips_apikeys(inputs);
	if (locale === "zh") return zh_landing_chips_apikeys(inputs);
	return zh_tw2_landing_chips_apikeys(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_TitleInputs */
var en_landing_features_title = () => {
	return `Browse by category`;
};
var zh_landing_features_title = () => {
	return `按分类浏览`;
};
/** @type {(inputs: Landing_Features_TitleInputs) => LocalizedString} */
var zh_tw2_landing_features_title = zh_landing_features_title;
/**
* | output |
* | --- |
* | "Browse by category" |
*
* @param {Landing_Features_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_features_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_features_title(inputs);
	if (locale === "zh") return zh_landing_features_title(inputs);
	return zh_tw2_landing_features_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_DescriptionInputs */
var en_landing_features_description = () => {
	return `Start from a hub. Article pages will appear here as content is published.`;
};
var zh_landing_features_description = () => {
	return `从分类入口开始。词条发布后将出现在对应分类下。`;
};
/** @type {(inputs: Landing_Features_DescriptionInputs) => LocalizedString} */
var zh_tw2_landing_features_description = zh_landing_features_description;
/**
* | output |
* | --- |
* | "Start from a hub. Article pages will appear here as content is published." |
*
* @param {Landing_Features_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_features_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_features_description(inputs);
	if (locale === "zh") return zh_landing_features_description(inputs);
	return zh_tw2_landing_features_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_Auth_TitleInputs */
var en_landing_features_auth_title = () => {
	return `Authentication`;
};
var zh_landing_features_auth_title = () => {
	return `身份认证`;
};
/** @type {(inputs: Landing_Features_Auth_TitleInputs) => LocalizedString} */
var zh_tw2_landing_features_auth_title = zh_landing_features_auth_title;
/**
* | output |
* | --- |
* | "Authentication" |
*
* @param {Landing_Features_Auth_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_features_auth_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_features_auth_title(inputs);
	if (locale === "zh") return zh_landing_features_auth_title(inputs);
	return zh_tw2_landing_features_auth_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_Auth_DescriptionInputs */
var en_landing_features_auth_description = () => {
	return `Email/password, Google, and GitHub OAuth — ready out of the box with session management and account linking.`;
};
var zh_landing_features_auth_description = () => {
	return `邮箱密码、Google、GitHub OAuth 登录，开箱即用，自带会话管理和账号关联。`;
};
/** @type {(inputs: Landing_Features_Auth_DescriptionInputs) => LocalizedString} */
var zh_tw2_landing_features_auth_description = zh_landing_features_auth_description;
/**
* | output |
* | --- |
* | "Email/password, Google, and GitHub OAuth — ready out of the box with session management and account linking." |
*
* @param {Landing_Features_Auth_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_features_auth_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_features_auth_description(inputs);
	if (locale === "zh") return zh_landing_features_auth_description(inputs);
	return zh_tw2_landing_features_auth_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_Payment_TitleInputs */
var en_landing_features_payment_title = () => {
	return `Payments`;
};
var zh_landing_features_payment_title = () => {
	return `支付系统`;
};
/** @type {(inputs: Landing_Features_Payment_TitleInputs) => LocalizedString} */
var zh_tw2_landing_features_payment_title = zh_landing_features_payment_title;
/**
* | output |
* | --- |
* | "Payments" |
*
* @param {Landing_Features_Payment_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_features_payment_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_features_payment_title(inputs);
	if (locale === "zh") return zh_landing_features_payment_title(inputs);
	return zh_tw2_landing_features_payment_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_Payment_DescriptionInputs */
var en_landing_features_payment_description = () => {
	return `Stripe, PayPal, Alipay, WeChat Pay — checkout, subscriptions, webhooks, and order management.`;
};
var zh_landing_features_payment_description = () => {
	return `Stripe、PayPal、支付宝、微信支付 — 结账、订阅、Webhook 和订单管理。`;
};
/** @type {(inputs: Landing_Features_Payment_DescriptionInputs) => LocalizedString} */
var zh_tw2_landing_features_payment_description = zh_landing_features_payment_description;
/**
* | output |
* | --- |
* | "Stripe, PayPal, Alipay, WeChat Pay — checkout, subscriptions, webhooks, and order management." |
*
* @param {Landing_Features_Payment_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_features_payment_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_features_payment_description(inputs);
	if (locale === "zh") return zh_landing_features_payment_description(inputs);
	return zh_tw2_landing_features_payment_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_Rbac_TitleInputs */
var en_landing_features_rbac_title = () => {
	return `Roles & Permissions`;
};
var zh_landing_features_rbac_title = () => {
	return `角色与权限`;
};
/** @type {(inputs: Landing_Features_Rbac_TitleInputs) => LocalizedString} */
var zh_tw2_landing_features_rbac_title = zh_landing_features_rbac_title;
/**
* | output |
* | --- |
* | "Roles & Permissions" |
*
* @param {Landing_Features_Rbac_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_features_rbac_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_features_rbac_title(inputs);
	if (locale === "zh") return zh_landing_features_rbac_title(inputs);
	return zh_tw2_landing_features_rbac_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_Rbac_DescriptionInputs */
var en_landing_features_rbac_description = () => {
	return `Fine-grained RBAC with wildcard matching. Full admin panel for managing users, roles, and permissions.`;
};
var zh_landing_features_rbac_description = () => {
	return `细粒度的 RBAC 权限控制，支持通配符匹配。完整的管理后台管理用户、角色和权限。`;
};
/** @type {(inputs: Landing_Features_Rbac_DescriptionInputs) => LocalizedString} */
var zh_tw2_landing_features_rbac_description = zh_landing_features_rbac_description;
/**
* | output |
* | --- |
* | "Fine-grained RBAC with wildcard matching. Full admin panel for managing users, roles, and permissions." |
*
* @param {Landing_Features_Rbac_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_features_rbac_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_features_rbac_description(inputs);
	if (locale === "zh") return zh_landing_features_rbac_description(inputs);
	return zh_tw2_landing_features_rbac_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_I18n_TitleInputs */
var en_landing_features_i18n_title = () => {
	return `Internationalization`;
};
var zh_landing_features_i18n_title = () => {
	return `国际化`;
};
/** @type {(inputs: Landing_Features_I18n_TitleInputs) => LocalizedString} */
var zh_tw2_landing_features_i18n_title = zh_landing_features_i18n_title;
/**
* | output |
* | --- |
* | "Internationalization" |
*
* @param {Landing_Features_I18n_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_features_i18n_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_features_i18n_title(inputs);
	if (locale === "zh") return zh_landing_features_i18n_title(inputs);
	return zh_tw2_landing_features_i18n_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_I18n_DescriptionInputs */
var en_landing_features_i18n_description = () => {
	return `English and Chinese built-in with locale-aware routing. Easy to extend with additional languages.`;
};
var zh_landing_features_i18n_description = () => {
	return `内置中英文支持，路由感知语言切换，轻松扩展更多语言。`;
};
/** @type {(inputs: Landing_Features_I18n_DescriptionInputs) => LocalizedString} */
var zh_tw2_landing_features_i18n_description = zh_landing_features_i18n_description;
/**
* | output |
* | --- |
* | "English and Chinese built-in with locale-aware routing. Easy to extend with additional languages." |
*
* @param {Landing_Features_I18n_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_features_i18n_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_features_i18n_description(inputs);
	if (locale === "zh") return zh_landing_features_i18n_description(inputs);
	return zh_tw2_landing_features_i18n_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_Cms_TitleInputs */
var en_landing_features_cms_title = () => {
	return `Content Management`;
};
var zh_landing_features_cms_title = () => {
	return `内容管理`;
};
/** @type {(inputs: Landing_Features_Cms_TitleInputs) => LocalizedString} */
var zh_tw2_landing_features_cms_title = zh_landing_features_cms_title;
/**
* | output |
* | --- |
* | "Content Management" |
*
* @param {Landing_Features_Cms_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_features_cms_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_features_cms_title(inputs);
	if (locale === "zh") return zh_landing_features_cms_title(inputs);
	return zh_tw2_landing_features_cms_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_Cms_DescriptionInputs */
var en_landing_features_cms_description = () => {
	return `Categories and posts with full CRUD, status management, and admin panel — build your blog or docs.`;
};
var zh_landing_features_cms_description = () => {
	return `分类和文章的完整 CRUD，支持状态管理和管理后台 — 快速搭建博客或文档。`;
};
/** @type {(inputs: Landing_Features_Cms_DescriptionInputs) => LocalizedString} */
var zh_tw2_landing_features_cms_description = zh_landing_features_cms_description;
/**
* | output |
* | --- |
* | "Categories and posts with full CRUD, status management, and admin panel — build your blog or docs." |
*
* @param {Landing_Features_Cms_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_features_cms_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_features_cms_description(inputs);
	if (locale === "zh") return zh_landing_features_cms_description(inputs);
	return zh_tw2_landing_features_cms_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_Credits_TitleInputs */
var en_landing_features_credits_title = () => {
	return `Credit System`;
};
var zh_landing_features_credits_title = () => {
	return `积分系统`;
};
/** @type {(inputs: Landing_Features_Credits_TitleInputs) => LocalizedString} */
var zh_tw2_landing_features_credits_title = zh_landing_features_credits_title;
/**
* | output |
* | --- |
* | "Credit System" |
*
* @param {Landing_Features_Credits_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_features_credits_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_features_credits_title(inputs);
	if (locale === "zh") return zh_landing_features_credits_title(inputs);
	return zh_tw2_landing_features_credits_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Features_Credits_DescriptionInputs */
var en_landing_features_credits_description = () => {
	return `FIFO consumption, expiration, auto-grant on signup, and revocation — ready for usage-based billing.`;
};
var zh_landing_features_credits_description = () => {
	return `FIFO 消费、过期控制、注册自动发放和撤销 — 为按量计费做好准备。`;
};
/** @type {(inputs: Landing_Features_Credits_DescriptionInputs) => LocalizedString} */
var zh_tw2_landing_features_credits_description = zh_landing_features_credits_description;
/**
* | output |
* | --- |
* | "FIFO consumption, expiration, auto-grant on signup, and revocation — ready for usage-based billing." |
*
* @param {Landing_Features_Credits_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_features_credits_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_features_credits_description(inputs);
	if (locale === "zh") return zh_landing_features_credits_description(inputs);
	return zh_tw2_landing_features_credits_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_TitleInputs */
var en_landing_pricing_title = () => {
	return `Pricing`;
};
var zh_landing_pricing_title = () => {
	return `价格`;
};
/** @type {(inputs: Landing_Pricing_TitleInputs) => LocalizedString} */
var zh_tw2_landing_pricing_title = zh_landing_pricing_title;
/**
* | output |
* | --- |
* | "Pricing" |
*
* @param {Landing_Pricing_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_title(inputs);
	if (locale === "zh") return zh_landing_pricing_title(inputs);
	return zh_tw2_landing_pricing_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_DescriptionInputs */
var en_landing_pricing_description = () => {
	return `Choose the plan that works for you.`;
};
var zh_landing_pricing_description = () => {
	return `选择适合你的方案。`;
};
/** @type {(inputs: Landing_Pricing_DescriptionInputs) => LocalizedString} */
var zh_tw2_landing_pricing_description = zh_landing_pricing_description;
/**
* | output |
* | --- |
* | "Choose the plan that works for you." |
*
* @param {Landing_Pricing_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_description(inputs);
	if (locale === "zh") return zh_landing_pricing_description(inputs);
	return zh_tw2_landing_pricing_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_MonthlyInputs */
var en_landing_pricing_monthly = () => {
	return `Monthly`;
};
var zh_landing_pricing_monthly = () => {
	return `月付`;
};
/** @type {(inputs: Landing_Pricing_MonthlyInputs) => LocalizedString} */
var zh_tw2_landing_pricing_monthly = zh_landing_pricing_monthly;
/**
* | output |
* | --- |
* | "Monthly" |
*
* @param {Landing_Pricing_MonthlyInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_monthly = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_monthly(inputs);
	if (locale === "zh") return zh_landing_pricing_monthly(inputs);
	return zh_tw2_landing_pricing_monthly(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_YearlyInputs */
var en_landing_pricing_yearly = () => {
	return `Yearly`;
};
var zh_landing_pricing_yearly = () => {
	return `年付`;
};
/** @type {(inputs: Landing_Pricing_YearlyInputs) => LocalizedString} */
var zh_tw2_landing_pricing_yearly = zh_landing_pricing_yearly;
/**
* | output |
* | --- |
* | "Yearly" |
*
* @param {Landing_Pricing_YearlyInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_yearly = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_yearly(inputs);
	if (locale === "zh") return zh_landing_pricing_yearly(inputs);
	return zh_tw2_landing_pricing_yearly(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_LifetimeInputs */
var en_landing_pricing_lifetime = () => {
	return `Lifetime`;
};
var zh_landing_pricing_lifetime = () => {
	return `买断`;
};
/** @type {(inputs: Landing_Pricing_LifetimeInputs) => LocalizedString} */
var zh_tw2_landing_pricing_lifetime = zh_landing_pricing_lifetime;
/**
* | output |
* | --- |
* | "Lifetime" |
*
* @param {Landing_Pricing_LifetimeInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_lifetime = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_lifetime(inputs);
	if (locale === "zh") return zh_landing_pricing_lifetime(inputs);
	return zh_tw2_landing_pricing_lifetime(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_PopularInputs */
var en_landing_pricing_popular = () => {
	return `Popular`;
};
var zh_landing_pricing_popular = () => {
	return `热门`;
};
/** @type {(inputs: Landing_Pricing_PopularInputs) => LocalizedString} */
var zh_tw2_landing_pricing_popular = zh_landing_pricing_popular;
/**
* | output |
* | --- |
* | "Popular" |
*
* @param {Landing_Pricing_PopularInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_popular = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_popular(inputs);
	if (locale === "zh") return zh_landing_pricing_popular(inputs);
	return zh_tw2_landing_pricing_popular(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Best_ValueInputs */
var en_landing_pricing_best_value = () => {
	return `Best value`;
};
var zh_landing_pricing_best_value = () => {
	return `超值`;
};
/** @type {(inputs: Landing_Pricing_Best_ValueInputs) => LocalizedString} */
var zh_tw2_landing_pricing_best_value = zh_landing_pricing_best_value;
/**
* | output |
* | --- |
* | "Best value" |
*
* @param {Landing_Pricing_Best_ValueInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_best_value = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_best_value(inputs);
	if (locale === "zh") return zh_landing_pricing_best_value(inputs);
	return zh_tw2_landing_pricing_best_value(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Buy_LifetimeInputs */
var en_landing_pricing_buy_lifetime = () => {
	return `Buy once`;
};
var zh_landing_pricing_buy_lifetime = () => {
	return `一次买断`;
};
/** @type {(inputs: Landing_Pricing_Buy_LifetimeInputs) => LocalizedString} */
var zh_tw2_landing_pricing_buy_lifetime = zh_landing_pricing_buy_lifetime;
/**
* | output |
* | --- |
* | "Buy once" |
*
* @param {Landing_Pricing_Buy_LifetimeInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_buy_lifetime = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_buy_lifetime(inputs);
	if (locale === "zh") return zh_landing_pricing_buy_lifetime(inputs);
	return zh_tw2_landing_pricing_buy_lifetime(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_StarterInputs */
var en_landing_pricing_starter = () => {
	return `Starter`;
};
var zh_landing_pricing_starter = () => {
	return `入门版`;
};
/** @type {(inputs: Landing_Pricing_StarterInputs) => LocalizedString} */
var zh_tw2_landing_pricing_starter = zh_landing_pricing_starter;
/**
* | output |
* | --- |
* | "Starter" |
*
* @param {Landing_Pricing_StarterInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_starter = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_starter(inputs);
	if (locale === "zh") return zh_landing_pricing_starter(inputs);
	return zh_tw2_landing_pricing_starter(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Starter_DescInputs */
var en_landing_pricing_starter_desc = () => {
	return `For individuals`;
};
var zh_landing_pricing_starter_desc = () => {
	return `适合个人用户`;
};
/** @type {(inputs: Landing_Pricing_Starter_DescInputs) => LocalizedString} */
var zh_tw2_landing_pricing_starter_desc = zh_landing_pricing_starter_desc;
/**
* | output |
* | --- |
* | "For individuals" |
*
* @param {Landing_Pricing_Starter_DescInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_starter_desc = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_starter_desc(inputs);
	if (locale === "zh") return zh_landing_pricing_starter_desc(inputs);
	return zh_tw2_landing_pricing_starter_desc(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_ProInputs */
var en_landing_pricing_pro = () => {
	return `Pro`;
};
var zh_landing_pricing_pro = () => {
	return `专业版`;
};
/** @type {(inputs: Landing_Pricing_ProInputs) => LocalizedString} */
var zh_tw2_landing_pricing_pro = zh_landing_pricing_pro;
/**
* | output |
* | --- |
* | "Pro" |
*
* @param {Landing_Pricing_ProInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_pro = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_pro(inputs);
	if (locale === "zh") return zh_landing_pricing_pro(inputs);
	return zh_tw2_landing_pricing_pro(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Pro_DescInputs */
var en_landing_pricing_pro_desc = () => {
	return `For growing teams`;
};
var zh_landing_pricing_pro_desc = () => {
	return `适合成长型团队`;
};
/** @type {(inputs: Landing_Pricing_Pro_DescInputs) => LocalizedString} */
var zh_tw2_landing_pricing_pro_desc = zh_landing_pricing_pro_desc;
/**
* | output |
* | --- |
* | "For growing teams" |
*
* @param {Landing_Pricing_Pro_DescInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_pro_desc = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_pro_desc(inputs);
	if (locale === "zh") return zh_landing_pricing_pro_desc(inputs);
	return zh_tw2_landing_pricing_pro_desc(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_EnterpriseInputs */
var en_landing_pricing_enterprise = () => {
	return `Enterprise`;
};
var zh_landing_pricing_enterprise = () => {
	return `企业版`;
};
/** @type {(inputs: Landing_Pricing_EnterpriseInputs) => LocalizedString} */
var zh_tw2_landing_pricing_enterprise = zh_landing_pricing_enterprise;
/**
* | output |
* | --- |
* | "Enterprise" |
*
* @param {Landing_Pricing_EnterpriseInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_enterprise = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_enterprise(inputs);
	if (locale === "zh") return zh_landing_pricing_enterprise(inputs);
	return zh_tw2_landing_pricing_enterprise(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Enterprise_DescInputs */
var en_landing_pricing_enterprise_desc = () => {
	return `For large organizations`;
};
var zh_landing_pricing_enterprise_desc = () => {
	return `适合大型组织`;
};
/** @type {(inputs: Landing_Pricing_Enterprise_DescInputs) => LocalizedString} */
var zh_tw2_landing_pricing_enterprise_desc = zh_landing_pricing_enterprise_desc;
/**
* | output |
* | --- |
* | "For large organizations" |
*
* @param {Landing_Pricing_Enterprise_DescInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_enterprise_desc = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_enterprise_desc(inputs);
	if (locale === "zh") return zh_landing_pricing_enterprise_desc(inputs);
	return zh_tw2_landing_pricing_enterprise_desc(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Feature_1_ProjectInputs */
var en_landing_pricing_feature_1_project = () => {
	return `1 project`;
};
var zh_landing_pricing_feature_1_project = () => {
	return `1 个项目`;
};
/** @type {(inputs: Landing_Pricing_Feature_1_ProjectInputs) => LocalizedString} */
var zh_tw2_landing_pricing_feature_1_project = zh_landing_pricing_feature_1_project;
/**
* | output |
* | --- |
* | "1 project" |
*
* @param {Landing_Pricing_Feature_1_ProjectInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_feature_1_project = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_feature_1_project(inputs);
	if (locale === "zh") return zh_landing_pricing_feature_1_project(inputs);
	return zh_tw2_landing_pricing_feature_1_project(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Feature_5k_CreditsInputs */
var en_landing_pricing_feature_5k_credits = () => {
	return `5,000 credits`;
};
var zh_landing_pricing_feature_5k_credits = () => {
	return `5,000 积分`;
};
/** @type {(inputs: Landing_Pricing_Feature_5k_CreditsInputs) => LocalizedString} */
var zh_tw2_landing_pricing_feature_5k_credits = zh_landing_pricing_feature_5k_credits;
/**
* | output |
* | --- |
* | "5,000 credits" |
*
* @param {Landing_Pricing_Feature_5k_CreditsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_feature_5k_credits = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_feature_5k_credits(inputs);
	if (locale === "zh") return zh_landing_pricing_feature_5k_credits(inputs);
	return zh_tw2_landing_pricing_feature_5k_credits(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Feature_Email_SupportInputs */
var en_landing_pricing_feature_email_support = () => {
	return `Email support`;
};
var zh_landing_pricing_feature_email_support = () => {
	return `邮件支持`;
};
/** @type {(inputs: Landing_Pricing_Feature_Email_SupportInputs) => LocalizedString} */
var zh_tw2_landing_pricing_feature_email_support = zh_landing_pricing_feature_email_support;
/**
* | output |
* | --- |
* | "Email support" |
*
* @param {Landing_Pricing_Feature_Email_SupportInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_feature_email_support = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_feature_email_support(inputs);
	if (locale === "zh") return zh_landing_pricing_feature_email_support(inputs);
	return zh_tw2_landing_pricing_feature_email_support(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Feature_Unlimited_ProjectsInputs */
var en_landing_pricing_feature_unlimited_projects = () => {
	return `Unlimited projects`;
};
var zh_landing_pricing_feature_unlimited_projects = () => {
	return `无限项目`;
};
/** @type {(inputs: Landing_Pricing_Feature_Unlimited_ProjectsInputs) => LocalizedString} */
var zh_tw2_landing_pricing_feature_unlimited_projects = zh_landing_pricing_feature_unlimited_projects;
/**
* | output |
* | --- |
* | "Unlimited projects" |
*
* @param {Landing_Pricing_Feature_Unlimited_ProjectsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_feature_unlimited_projects = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_feature_unlimited_projects(inputs);
	if (locale === "zh") return zh_landing_pricing_feature_unlimited_projects(inputs);
	return zh_tw2_landing_pricing_feature_unlimited_projects(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Feature_50k_CreditsInputs */
var en_landing_pricing_feature_50k_credits = () => {
	return `50,000 credits`;
};
var zh_landing_pricing_feature_50k_credits = () => {
	return `50,000 积分`;
};
/** @type {(inputs: Landing_Pricing_Feature_50k_CreditsInputs) => LocalizedString} */
var zh_tw2_landing_pricing_feature_50k_credits = zh_landing_pricing_feature_50k_credits;
/**
* | output |
* | --- |
* | "50,000 credits" |
*
* @param {Landing_Pricing_Feature_50k_CreditsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_feature_50k_credits = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_feature_50k_credits(inputs);
	if (locale === "zh") return zh_landing_pricing_feature_50k_credits(inputs);
	return zh_tw2_landing_pricing_feature_50k_credits(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Feature_Priority_SupportInputs */
var en_landing_pricing_feature_priority_support = () => {
	return `Priority support`;
};
var zh_landing_pricing_feature_priority_support = () => {
	return `优先支持`;
};
/** @type {(inputs: Landing_Pricing_Feature_Priority_SupportInputs) => LocalizedString} */
var zh_tw2_landing_pricing_feature_priority_support = zh_landing_pricing_feature_priority_support;
/**
* | output |
* | --- |
* | "Priority support" |
*
* @param {Landing_Pricing_Feature_Priority_SupportInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_feature_priority_support = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_feature_priority_support(inputs);
	if (locale === "zh") return zh_landing_pricing_feature_priority_support(inputs);
	return zh_tw2_landing_pricing_feature_priority_support(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Feature_Api_AccessInputs */
var en_landing_pricing_feature_api_access = () => {
	return `API access`;
};
var zh_landing_pricing_feature_api_access = () => {
	return `API 访问`;
};
/** @type {(inputs: Landing_Pricing_Feature_Api_AccessInputs) => LocalizedString} */
var zh_tw2_landing_pricing_feature_api_access = zh_landing_pricing_feature_api_access;
/**
* | output |
* | --- |
* | "API access" |
*
* @param {Landing_Pricing_Feature_Api_AccessInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_feature_api_access = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_feature_api_access(inputs);
	if (locale === "zh") return zh_landing_pricing_feature_api_access(inputs);
	return zh_tw2_landing_pricing_feature_api_access(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Feature_Everything_ProInputs */
var en_landing_pricing_feature_everything_pro = () => {
	return `Everything in Pro`;
};
var zh_landing_pricing_feature_everything_pro = () => {
	return `包含专业版全部功能`;
};
/** @type {(inputs: Landing_Pricing_Feature_Everything_ProInputs) => LocalizedString} */
var zh_tw2_landing_pricing_feature_everything_pro = zh_landing_pricing_feature_everything_pro;
/**
* | output |
* | --- |
* | "Everything in Pro" |
*
* @param {Landing_Pricing_Feature_Everything_ProInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_feature_everything_pro = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_feature_everything_pro(inputs);
	if (locale === "zh") return zh_landing_pricing_feature_everything_pro(inputs);
	return zh_tw2_landing_pricing_feature_everything_pro(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Feature_Unlimited_CreditsInputs */
var en_landing_pricing_feature_unlimited_credits = () => {
	return `Unlimited credits`;
};
var zh_landing_pricing_feature_unlimited_credits = () => {
	return `无限积分`;
};
/** @type {(inputs: Landing_Pricing_Feature_Unlimited_CreditsInputs) => LocalizedString} */
var zh_tw2_landing_pricing_feature_unlimited_credits = zh_landing_pricing_feature_unlimited_credits;
/**
* | output |
* | --- |
* | "Unlimited credits" |
*
* @param {Landing_Pricing_Feature_Unlimited_CreditsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_feature_unlimited_credits = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_feature_unlimited_credits(inputs);
	if (locale === "zh") return zh_landing_pricing_feature_unlimited_credits(inputs);
	return zh_tw2_landing_pricing_feature_unlimited_credits(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Feature_Dedicated_SupportInputs */
var en_landing_pricing_feature_dedicated_support = () => {
	return `Dedicated support`;
};
var zh_landing_pricing_feature_dedicated_support = () => {
	return `专属支持`;
};
/** @type {(inputs: Landing_Pricing_Feature_Dedicated_SupportInputs) => LocalizedString} */
var zh_tw2_landing_pricing_feature_dedicated_support = zh_landing_pricing_feature_dedicated_support;
/**
* | output |
* | --- |
* | "Dedicated support" |
*
* @param {Landing_Pricing_Feature_Dedicated_SupportInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_feature_dedicated_support = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_feature_dedicated_support(inputs);
	if (locale === "zh") return zh_landing_pricing_feature_dedicated_support(inputs);
	return zh_tw2_landing_pricing_feature_dedicated_support(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Pricing_Feature_Custom_IntegrationsInputs */
var en_landing_pricing_feature_custom_integrations = () => {
	return `Custom integrations`;
};
var zh_landing_pricing_feature_custom_integrations = () => {
	return `定制集成`;
};
/** @type {(inputs: Landing_Pricing_Feature_Custom_IntegrationsInputs) => LocalizedString} */
var zh_tw2_landing_pricing_feature_custom_integrations = zh_landing_pricing_feature_custom_integrations;
/**
* | output |
* | --- |
* | "Custom integrations" |
*
* @param {Landing_Pricing_Feature_Custom_IntegrationsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_pricing_feature_custom_integrations = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_pricing_feature_custom_integrations(inputs);
	if (locale === "zh") return zh_landing_pricing_feature_custom_integrations(inputs);
	return zh_tw2_landing_pricing_feature_custom_integrations(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Faq_TitleInputs */
var en_landing_faq_title = () => {
	return `Frequently asked questions`;
};
var zh_landing_faq_title = () => {
	return `常见问题`;
};
/** @type {(inputs: Landing_Faq_TitleInputs) => LocalizedString} */
var zh_tw2_landing_faq_title = zh_landing_faq_title;
/**
* | output |
* | --- |
* | "Frequently asked questions" |
*
* @param {Landing_Faq_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_faq_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_faq_title(inputs);
	if (locale === "zh") return zh_landing_faq_title(inputs);
	return zh_tw2_landing_faq_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Faq_DescriptionInputs */
var en_landing_faq_description = () => {
	return `Everything you need to know before getting started.`;
};
var zh_landing_faq_description = () => {
	return `开始之前你可能想了解的一切。`;
};
/** @type {(inputs: Landing_Faq_DescriptionInputs) => LocalizedString} */
var zh_tw2_landing_faq_description = zh_landing_faq_description;
/**
* | output |
* | --- |
* | "Everything you need to know before getting started." |
*
* @param {Landing_Faq_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_faq_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_faq_description(inputs);
	if (locale === "zh") return zh_landing_faq_description(inputs);
	return zh_tw2_landing_faq_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Faq_Stack_QuestionInputs */
var en_landing_faq_stack_question = () => {
	return `What's the tech stack?`;
};
var zh_landing_faq_stack_question = () => {
	return `用的是什么技术栈？`;
};
/** @type {(inputs: Landing_Faq_Stack_QuestionInputs) => LocalizedString} */
var zh_tw2_landing_faq_stack_question = zh_landing_faq_stack_question;
/**
* | output |
* | --- |
* | "What's the tech stack?" |
*
* @param {Landing_Faq_Stack_QuestionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_faq_stack_question = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_faq_stack_question(inputs);
	if (locale === "zh") return zh_landing_faq_stack_question(inputs);
	return zh_tw2_landing_faq_stack_question(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Faq_Stack_AnswerInputs */
var en_landing_faq_stack_answer = () => {
	return `Next.js 16 with the App Router, React 19, TypeScript strict mode, Tailwind CSS 4, shadcn/ui, Drizzle ORM, and better-auth. Every piece of business logic is inlined — no external packages for payment, email, storage, or AI.`;
};
var zh_landing_faq_stack_answer = () => {
	return `Next.js 16（App Router）、React 19、TypeScript 严格模式、Tailwind CSS 4、shadcn/ui、Drizzle ORM 和 better-auth。所有业务逻辑都内置在代码里——支付、邮件、存储、AI 都不依赖外部包。`;
};
/** @type {(inputs: Landing_Faq_Stack_AnswerInputs) => LocalizedString} */
var zh_tw2_landing_faq_stack_answer = zh_landing_faq_stack_answer;
/**
* | output |
* | --- |
* | "Next.js 16 with the App Router, React 19, TypeScript strict mode, Tailwind CSS 4, shadcn/ui, Drizzle ORM, and better-auth. Every piece of business logic is i..." |
*
* @param {Landing_Faq_Stack_AnswerInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_faq_stack_answer = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_faq_stack_answer(inputs);
	if (locale === "zh") return zh_landing_faq_stack_answer(inputs);
	return zh_tw2_landing_faq_stack_answer(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Faq_Payment_QuestionInputs */
var en_landing_faq_payment_question = () => {
	return `Which payment providers are supported?`;
};
var zh_landing_faq_payment_question = () => {
	return `支持哪些支付方式？`;
};
/** @type {(inputs: Landing_Faq_Payment_QuestionInputs) => LocalizedString} */
var zh_tw2_landing_faq_payment_question = zh_landing_faq_payment_question;
/**
* | output |
* | --- |
* | "Which payment providers are supported?" |
*
* @param {Landing_Faq_Payment_QuestionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_faq_payment_question = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_faq_payment_question(inputs);
	if (locale === "zh") return zh_landing_faq_payment_question(inputs);
	return zh_tw2_landing_faq_payment_question(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Faq_Payment_AnswerInputs */
var en_landing_faq_payment_answer = () => {
	return `Stripe, PayPal, Creem, Alipay, and WeChat Pay out of the box. The PaymentManager abstraction makes it straightforward to add more providers by implementing a single interface.`;
};
var zh_landing_faq_payment_answer = () => {
	return `开箱即用支持 Stripe、PayPal、Creem、支付宝和微信支付。通过 PaymentManager 抽象层，只需实现一个接口就能接入新的支付渠道。`;
};
/** @type {(inputs: Landing_Faq_Payment_AnswerInputs) => LocalizedString} */
var zh_tw2_landing_faq_payment_answer = zh_landing_faq_payment_answer;
/**
* | output |
* | --- |
* | "Stripe, PayPal, Creem, Alipay, and WeChat Pay out of the box. The PaymentManager abstraction makes it straightforward to add more providers by implementing a..." |
*
* @param {Landing_Faq_Payment_AnswerInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_faq_payment_answer = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_faq_payment_answer(inputs);
	if (locale === "zh") return zh_landing_faq_payment_answer(inputs);
	return zh_tw2_landing_faq_payment_answer(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Faq_Database_QuestionInputs */
var en_landing_faq_database_question = () => {
	return `Which databases can I use?`;
};
var zh_landing_faq_database_question = () => {
	return `支持哪些数据库？`;
};
/** @type {(inputs: Landing_Faq_Database_QuestionInputs) => LocalizedString} */
var zh_tw2_landing_faq_database_question = zh_landing_faq_database_question;
/**
* | output |
* | --- |
* | "Which databases can I use?" |
*
* @param {Landing_Faq_Database_QuestionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_faq_database_question = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_faq_database_question(inputs);
	if (locale === "zh") return zh_landing_faq_database_question(inputs);
	return zh_tw2_landing_faq_database_question(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Faq_Database_AnswerInputs */
var en_landing_faq_database_answer = () => {
	return `Drizzle ORM handles PostgreSQL, MySQL, SQLite, Turso, and Cloudflare D1. Switch providers by editing DATABASE_PROVIDER in your .env — the schema templates and drizzle config adapt automatically.`;
};
var zh_landing_faq_database_answer = () => {
	return `Drizzle ORM 支持 PostgreSQL、MySQL、SQLite、Turso 和 Cloudflare D1。只需修改 .env 中的 DATABASE_PROVIDER——schema 模板和 drizzle 配置会自动适配。`;
};
/** @type {(inputs: Landing_Faq_Database_AnswerInputs) => LocalizedString} */
var zh_tw2_landing_faq_database_answer = zh_landing_faq_database_answer;
/**
* | output |
* | --- |
* | "Drizzle ORM handles PostgreSQL, MySQL, SQLite, Turso, and Cloudflare D1. Switch providers by editing DATABASE_PROVIDER in your .env — the schema templates an..." |
*
* @param {Landing_Faq_Database_AnswerInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_faq_database_answer = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_faq_database_answer(inputs);
	if (locale === "zh") return zh_landing_faq_database_answer(inputs);
	return zh_tw2_landing_faq_database_answer(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Faq_Customize_QuestionInputs */
var en_landing_faq_customize_question = () => {
	return `How customizable is the landing page?`;
};
var zh_landing_faq_customize_question = () => {
	return `落地页可以自定义到什么程度？`;
};
/** @type {(inputs: Landing_Faq_Customize_QuestionInputs) => LocalizedString} */
var zh_tw2_landing_faq_customize_question = zh_landing_faq_customize_question;
/**
* | output |
* | --- |
* | "How customizable is the landing page?" |
*
* @param {Landing_Faq_Customize_QuestionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_faq_customize_question = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_faq_customize_question(inputs);
	if (locale === "zh") return zh_landing_faq_customize_question(inputs);
	return zh_tw2_landing_faq_customize_question(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Faq_Customize_AnswerInputs */
var en_landing_faq_customize_answer = () => {
	return `The src/blocks/ directory ships with demo sections — they're designed to be rewritten per project. The durable primitives live in src/components/, so your rebrand touches blocks and translations, not the chassis.`;
};
var zh_landing_faq_customize_answer = () => {
	return `src/blocks/ 下的 section 都是示例内容，本来就是要每个项目自己重写的。src/components/ 里才是长期沉淀的基础组件——换品牌只动 blocks 和翻译，底层架构不变。`;
};
/** @type {(inputs: Landing_Faq_Customize_AnswerInputs) => LocalizedString} */
var zh_tw2_landing_faq_customize_answer = zh_landing_faq_customize_answer;
/**
* | output |
* | --- |
* | "The src/blocks/ directory ships with demo sections — they're designed to be rewritten per project. The durable primitives live in src/components/, so your re..." |
*
* @param {Landing_Faq_Customize_AnswerInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_faq_customize_answer = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_faq_customize_answer(inputs);
	if (locale === "zh") return zh_landing_faq_customize_answer(inputs);
	return zh_tw2_landing_faq_customize_answer(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Faq_License_QuestionInputs */
var en_landing_faq_license_question = () => {
	return `Can I use this for commercial projects?`;
};
var zh_landing_faq_license_question = () => {
	return `可以用于商业项目吗？`;
};
/** @type {(inputs: Landing_Faq_License_QuestionInputs) => LocalizedString} */
var zh_tw2_landing_faq_license_question = zh_landing_faq_license_question;
/**
* | output |
* | --- |
* | "Can I use this for commercial projects?" |
*
* @param {Landing_Faq_License_QuestionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_faq_license_question = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_faq_license_question(inputs);
	if (locale === "zh") return zh_landing_faq_license_question(inputs);
	return zh_tw2_landing_faq_license_question(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Faq_License_AnswerInputs */
var en_landing_faq_license_answer = () => {
	return `Yes. ShipAny Next is built for shipping production SaaS products. You own the code after cloning — no per-seat fees, no runtime dependencies on our infrastructure.`;
};
var zh_landing_faq_license_answer = () => {
	return `可以。ShipAny Next 就是为生产级 SaaS 打造的。克隆之后代码归你——没有按用户数收费，也不依赖我们的任何基础设施。`;
};
/** @type {(inputs: Landing_Faq_License_AnswerInputs) => LocalizedString} */
var zh_tw2_landing_faq_license_answer = zh_landing_faq_license_answer;
/**
* | output |
* | --- |
* | "Yes. ShipAny Next is built for shipping production SaaS products. You own the code after cloning — no per-seat fees, no runtime dependencies on our infrastru..." |
*
* @param {Landing_Faq_License_AnswerInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_faq_license_answer = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_faq_license_answer(inputs);
	if (locale === "zh") return zh_landing_faq_license_answer(inputs);
	return zh_tw2_landing_faq_license_answer(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Cta_HeadlineInputs */
var en_landing_cta_headline = () => {
	return `Ready to ship your SaaS?`;
};
var zh_landing_cta_headline = () => {
	return `准备好构建你的 SaaS 了吗？`;
};
/** @type {(inputs: Landing_Cta_HeadlineInputs) => LocalizedString} */
var zh_tw2_landing_cta_headline = zh_landing_cta_headline;
/**
* | output |
* | --- |
* | "Ready to ship your SaaS?" |
*
* @param {Landing_Cta_HeadlineInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_cta_headline = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_cta_headline(inputs);
	if (locale === "zh") return zh_landing_cta_headline(inputs);
	return zh_tw2_landing_cta_headline(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Cta_SubheadlineInputs */
var en_landing_cta_subheadline = () => {
	return `Stop wiring auth, payments, and RBAC from scratch. Start with ShipAny Next and build what actually makes your product unique.`;
};
var zh_landing_cta_subheadline = () => {
	return `别再从零搭建认证、支付和权限系统了。用 ShipAny Next 起步，专注打造真正让产品与众不同的东西。`;
};
/** @type {(inputs: Landing_Cta_SubheadlineInputs) => LocalizedString} */
var zh_tw2_landing_cta_subheadline = zh_landing_cta_subheadline;
/**
* | output |
* | --- |
* | "Stop wiring auth, payments, and RBAC from scratch. Start with ShipAny Next and build what actually makes your product unique." |
*
* @param {Landing_Cta_SubheadlineInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_cta_subheadline = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_cta_subheadline(inputs);
	if (locale === "zh") return zh_landing_cta_subheadline(inputs);
	return zh_tw2_landing_cta_subheadline(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Cta_ButtonInputs */
var en_landing_cta_button = () => {
	return `Get started for free`;
};
var zh_landing_cta_button = () => {
	return `免费开始使用`;
};
/** @type {(inputs: Landing_Cta_ButtonInputs) => LocalizedString} */
var zh_tw2_landing_cta_button = zh_landing_cta_button;
/**
* | output |
* | --- |
* | "Get started for free" |
*
* @param {Landing_Cta_ButtonInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_cta_button = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_cta_button(inputs);
	if (locale === "zh") return zh_landing_cta_button(inputs);
	return zh_tw2_landing_cta_button(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_TaglineInputs */
var en_landing_footer_tagline = () => {
	return `An unofficial community wiki for World of Warcraft: Forever.`;
};
var zh_landing_footer_tagline = () => {
	return `《魔兽世界：Forever》非官方社区百科。`;
};
var zh_tw2_landing_footer_tagline = () => {
	return `非官方、依證據等級整理的 WoW Forever 社群 Wiki。`;
};
/**
* | output |
* | --- |
* | "An unofficial community wiki for World of Warcraft: Forever." |
*
* @param {Landing_Footer_TaglineInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_footer_tagline = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_footer_tagline(inputs);
	if (locale === "zh") return zh_landing_footer_tagline(inputs);
	return zh_tw2_landing_footer_tagline(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_FeatureInputs */
var en_landing_footer_feature = () => {
	return `Feature`;
};
var zh_landing_footer_feature = () => {
	return `功能`;
};
/** @type {(inputs: Landing_Footer_FeatureInputs) => LocalizedString} */
var zh_tw2_landing_footer_feature = zh_landing_footer_feature;
/**
* | output |
* | --- |
* | "Feature" |
*
* @param {Landing_Footer_FeatureInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_footer_feature = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_footer_feature(inputs);
	if (locale === "zh") return zh_landing_footer_feature(inputs);
	return zh_tw2_landing_footer_feature(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_ProductInputs */
var en_landing_footer_product = () => {
	return `Product`;
};
var zh_landing_footer_product = () => {
	return `产品`;
};
/** @type {(inputs: Landing_Footer_ProductInputs) => LocalizedString} */
var zh_tw2_landing_footer_product = zh_landing_footer_product;
/**
* | output |
* | --- |
* | "Product" |
*
* @param {Landing_Footer_ProductInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_footer_product = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_footer_product(inputs);
	if (locale === "zh") return zh_landing_footer_product(inputs);
	return zh_tw2_landing_footer_product(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_ResourcesInputs */
var en_landing_footer_resources = () => {
	return `Explore`;
};
var zh_landing_footer_resources = () => {
	return `探索`;
};
var zh_tw2_landing_footer_resources = () => {
	return `資料`;
};
/**
* | output |
* | --- |
* | "Explore" |
*
* @param {Landing_Footer_ResourcesInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_footer_resources = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_footer_resources(inputs);
	if (locale === "zh") return zh_landing_footer_resources(inputs);
	return zh_tw2_landing_footer_resources(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_LegalInputs */
var en_landing_footer_legal = () => {
	return `Legal`;
};
var zh_landing_footer_legal = () => {
	return `法律信息`;
};
var zh_tw2_landing_footer_legal = () => {
	return `法律與說明`;
};
/**
* | output |
* | --- |
* | "Legal" |
*
* @param {Landing_Footer_LegalInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_footer_legal = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_footer_legal(inputs);
	if (locale === "zh") return zh_landing_footer_legal(inputs);
	return zh_tw2_landing_footer_legal(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_PrivacyInputs */
var en_landing_footer_privacy = () => {
	return `Privacy Policy`;
};
var zh_landing_footer_privacy = () => {
	return `隐私政策`;
};
var zh_tw2_landing_footer_privacy = () => {
	return `隱私權政策`;
};
/**
* | output |
* | --- |
* | "Privacy Policy" |
*
* @param {Landing_Footer_PrivacyInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_footer_privacy = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_footer_privacy(inputs);
	if (locale === "zh") return zh_landing_footer_privacy(inputs);
	return zh_tw2_landing_footer_privacy(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_TermsInputs */
var en_landing_footer_terms = () => {
	return `Terms of Service`;
};
var zh_landing_footer_terms = () => {
	return `服务条款`;
};
var zh_tw2_landing_footer_terms = () => {
	return `服務條款`;
};
/**
* | output |
* | --- |
* | "Terms of Service" |
*
* @param {Landing_Footer_TermsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_footer_terms = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_footer_terms(inputs);
	if (locale === "zh") return zh_landing_footer_terms(inputs);
	return zh_tw2_landing_footer_terms(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_SettingsInputs */
var en_landing_footer_settings = () => {
	return `Settings`;
};
var zh_landing_footer_settings = () => {
	return `设置`;
};
/** @type {(inputs: Landing_Footer_SettingsInputs) => LocalizedString} */
var zh_tw2_landing_footer_settings = zh_landing_footer_settings;
/**
* | output |
* | --- |
* | "Settings" |
*
* @param {Landing_Footer_SettingsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_footer_settings = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_footer_settings(inputs);
	if (locale === "zh") return zh_landing_footer_settings(inputs);
	return zh_tw2_landing_footer_settings(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_AdminInputs */
var en_landing_footer_admin = () => {
	return `Admin Panel`;
};
var zh_landing_footer_admin = () => {
	return `管理后台`;
};
/** @type {(inputs: Landing_Footer_AdminInputs) => LocalizedString} */
var zh_tw2_landing_footer_admin = zh_landing_footer_admin;
/**
* | output |
* | --- |
* | "Admin Panel" |
*
* @param {Landing_Footer_AdminInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_footer_admin = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_footer_admin(inputs);
	if (locale === "zh") return zh_landing_footer_admin(inputs);
	return zh_tw2_landing_footer_admin(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_DocsInputs */
var en_landing_footer_docs = () => {
	return `Documentation`;
};
var zh_landing_footer_docs = () => {
	return `文档`;
};
/** @type {(inputs: Landing_Footer_DocsInputs) => LocalizedString} */
var zh_tw2_landing_footer_docs = zh_landing_footer_docs;
/**
* | output |
* | --- |
* | "Documentation" |
*
* @param {Landing_Footer_DocsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_footer_docs = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_footer_docs(inputs);
	if (locale === "zh") return zh_landing_footer_docs(inputs);
	return zh_tw2_landing_footer_docs(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_GithubInputs */
var en_landing_footer_github = () => {
	return `GitHub`;
};
var zh_landing_footer_github = () => {
	return `GitHub`;
};
/** @type {(inputs: Landing_Footer_GithubInputs) => LocalizedString} */
var zh_tw2_landing_footer_github = zh_landing_footer_github;
/**
* | output |
* | --- |
* | "GitHub" |
*
* @param {Landing_Footer_GithubInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_footer_github = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_footer_github(inputs);
	if (locale === "zh") return zh_landing_footer_github(inputs);
	return zh_tw2_landing_footer_github(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Blog_TitleInputs */
var en_blog_title = () => {
	return `Blog`;
};
var zh_blog_title = () => {
	return `博客`;
};
/** @type {(inputs: Blog_TitleInputs) => LocalizedString} */
var zh_tw2_blog_title = zh_blog_title;
/**
* | output |
* | --- |
* | "Blog" |
*
* @param {Blog_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var blog_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_title(inputs);
	if (locale === "zh") return zh_blog_title(inputs);
	return zh_tw2_blog_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Blog_DescriptionInputs */
var en_blog_description = () => {
	return `Product updates, guides, and engineering notes from the team.`;
};
var zh_blog_description = () => {
	return `来自团队的产品动态、使用指南与工程笔记。`;
};
/** @type {(inputs: Blog_DescriptionInputs) => LocalizedString} */
var zh_tw2_blog_description = zh_blog_description;
/**
* | output |
* | --- |
* | "Product updates, guides, and engineering notes from the team." |
*
* @param {Blog_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var blog_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_description(inputs);
	if (locale === "zh") return zh_blog_description(inputs);
	return zh_tw2_blog_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Blog_No_PostsInputs */
var en_blog_no_posts = () => {
	return `No posts yet — check back soon.`;
};
var zh_blog_no_posts = () => {
	return `暂无文章,敬请期待。`;
};
/** @type {(inputs: Blog_No_PostsInputs) => LocalizedString} */
var zh_tw2_blog_no_posts = zh_blog_no_posts;
/**
* | output |
* | --- |
* | "No posts yet — check back soon." |
*
* @param {Blog_No_PostsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var blog_no_posts = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_no_posts(inputs);
	if (locale === "zh") return zh_blog_no_posts(inputs);
	return zh_tw2_blog_no_posts(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Blog_Back_To_BlogInputs */
var en_blog_back_to_blog = () => {
	return `Back to blog`;
};
var zh_blog_back_to_blog = () => {
	return `返回博客`;
};
/** @type {(inputs: Blog_Back_To_BlogInputs) => LocalizedString} */
var zh_tw2_blog_back_to_blog = zh_blog_back_to_blog;
/**
* | output |
* | --- |
* | "Back to blog" |
*
* @param {Blog_Back_To_BlogInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var blog_back_to_blog = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_back_to_blog(inputs);
	if (locale === "zh") return zh_blog_back_to_blog(inputs);
	return zh_tw2_blog_back_to_blog(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Blog_Read_MoreInputs */
var en_blog_read_more = () => {
	return `Read more`;
};
var zh_blog_read_more = () => {
	return `阅读全文`;
};
/** @type {(inputs: Blog_Read_MoreInputs) => LocalizedString} */
var zh_tw2_blog_read_more = zh_blog_read_more;
/**
* | output |
* | --- |
* | "Read more" |
*
* @param {Blog_Read_MoreInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var blog_read_more = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_blog_read_more(inputs);
	if (locale === "zh") return zh_blog_read_more(inputs);
	return zh_tw2_blog_read_more(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Nav_BlogInputs */
var en_landing_nav_blog = () => {
	return `Blog`;
};
var zh_landing_nav_blog = () => {
	return `博客`;
};
/** @type {(inputs: Landing_Nav_BlogInputs) => LocalizedString} */
var zh_tw2_landing_nav_blog = zh_landing_nav_blog;
/**
* | output |
* | --- |
* | "Blog" |
*
* @param {Landing_Nav_BlogInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_nav_blog = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_nav_blog(inputs);
	if (locale === "zh") return zh_landing_nav_blog(inputs);
	return zh_tw2_landing_nav_blog(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Blog_TitleInputs */
var en_landing_blog_title = () => {
	return `From the blog`;
};
var zh_landing_blog_title = () => {
	return `最新博客`;
};
/** @type {(inputs: Landing_Blog_TitleInputs) => LocalizedString} */
var zh_tw2_landing_blog_title = zh_landing_blog_title;
/**
* | output |
* | --- |
* | "From the blog" |
*
* @param {Landing_Blog_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_blog_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_blog_title(inputs);
	if (locale === "zh") return zh_landing_blog_title(inputs);
	return zh_tw2_landing_blog_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Blog_DescriptionInputs */
var en_landing_blog_description = () => {
	return `Product updates, guides, and engineering notes from the team.`;
};
var zh_landing_blog_description = () => {
	return `来自团队的产品动态、使用指南与工程笔记。`;
};
/** @type {(inputs: Landing_Blog_DescriptionInputs) => LocalizedString} */
var zh_tw2_landing_blog_description = zh_landing_blog_description;
/**
* | output |
* | --- |
* | "Product updates, guides, and engineering notes from the team." |
*
* @param {Landing_Blog_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_blog_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_blog_description(inputs);
	if (locale === "zh") return zh_landing_blog_description(inputs);
	return zh_tw2_landing_blog_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Blog_View_AllInputs */
var en_landing_blog_view_all = () => {
	return `View all posts`;
};
var zh_landing_blog_view_all = () => {
	return `查看全部文章`;
};
/** @type {(inputs: Landing_Blog_View_AllInputs) => LocalizedString} */
var zh_tw2_landing_blog_view_all = zh_landing_blog_view_all;
/**
* | output |
* | --- |
* | "View all posts" |
*
* @param {Landing_Blog_View_AllInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_blog_view_all = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_blog_view_all(inputs);
	if (locale === "zh") return zh_landing_blog_view_all(inputs);
	return zh_tw2_landing_blog_view_all(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_BlogInputs */
var en_landing_footer_blog = () => {
	return `Blog`;
};
var zh_landing_footer_blog = () => {
	return `博客`;
};
/** @type {(inputs: Landing_Footer_BlogInputs) => LocalizedString} */
var zh_tw2_landing_footer_blog = zh_landing_footer_blog;
/**
* | output |
* | --- |
* | "Blog" |
*
* @param {Landing_Footer_BlogInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_footer_blog = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_footer_blog(inputs);
	if (locale === "zh") return zh_landing_footer_blog(inputs);
	return zh_tw2_landing_footer_blog(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Notice_TitleInputs */
var en_landing_notice_title = () => {
	return `Content coming soon`;
};
var zh_landing_notice_title = () => {
	return `内容筹备中`;
};
/** @type {(inputs: Landing_Notice_TitleInputs) => LocalizedString} */
var zh_tw2_landing_notice_title = zh_landing_notice_title;
/**
* | output |
* | --- |
* | "Content coming soon" |
*
* @param {Landing_Notice_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_notice_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_notice_title(inputs);
	if (locale === "zh") return zh_landing_notice_title(inputs);
	return zh_tw2_landing_notice_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Notice_DescriptionInputs */
var en_landing_notice_description = () => {
	return `We're organizing source material first. Category pages are live as placeholders so navigation and SEO are ready when entries ship.`;
};
var zh_landing_notice_description = () => {
	return `我们正在整理资料。分类页已上线为占位，便于导航与收录，词条就绪后即可填充。`;
};
/** @type {(inputs: Landing_Notice_DescriptionInputs) => LocalizedString} */
var zh_tw2_landing_notice_description = zh_landing_notice_description;
/**
* | output |
* | --- |
* | "We're organizing source material first. Category pages are live as placeholders so navigation and SEO are ready when entries ship." |
*
* @param {Landing_Notice_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_notice_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_notice_description(inputs);
	if (locale === "zh") return zh_landing_notice_description(inputs);
	return zh_tw2_landing_notice_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_BrowseInputs */
var en_landing_footer_browse = () => {
	return `Browse`;
};
var zh_landing_footer_browse = () => {
	return `浏览`;
};
var zh_tw2_landing_footer_browse = () => {
	return `瀏覽`;
};
/**
* | output |
* | --- |
* | "Browse" |
*
* @param {Landing_Footer_BrowseInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_footer_browse = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_footer_browse(inputs);
	if (locale === "zh") return zh_landing_footer_browse(inputs);
	return zh_tw2_landing_footer_browse(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Landing_Footer_ContactInputs */
var en_landing_footer_contact = () => {
	return `Contact`;
};
var zh_landing_footer_contact = () => {
	return `联系我们`;
};
var zh_tw2_landing_footer_contact = () => {
	return `聯絡我們`;
};
/**
* | output |
* | --- |
* | "Contact" |
*
* @param {Landing_Footer_ContactInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var landing_footer_contact = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_landing_footer_contact(inputs);
	if (locale === "zh") return zh_landing_footer_contact(inputs);
	return zh_tw2_landing_footer_contact(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Nav_RacesInputs */
var en_wiki_nav_races = () => {
	return `Races`;
};
var zh_wiki_nav_races = () => {
	return `种族`;
};
var zh_tw2_wiki_nav_races = () => {
	return `種族`;
};
/**
* | output |
* | --- |
* | "Races" |
*
* @param {Wiki_Nav_RacesInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_nav_races = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_nav_races(inputs);
	if (locale === "zh") return zh_wiki_nav_races(inputs);
	return zh_tw2_wiki_nav_races(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Nav_ClassesInputs */
var en_wiki_nav_classes = () => {
	return `Classes`;
};
var zh_wiki_nav_classes = () => {
	return `职业`;
};
var zh_tw2_wiki_nav_classes = () => {
	return `職業`;
};
/**
* | output |
* | --- |
* | "Classes" |
*
* @param {Wiki_Nav_ClassesInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_nav_classes = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_nav_classes(inputs);
	if (locale === "zh") return zh_wiki_nav_classes(inputs);
	return zh_tw2_wiki_nav_classes(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Nav_ZonesInputs */
var en_wiki_nav_zones = () => {
	return `Zones`;
};
var zh_wiki_nav_zones = () => {
	return `地图`;
};
/** @type {(inputs: Wiki_Nav_ZonesInputs) => LocalizedString} */
var zh_tw2_wiki_nav_zones = zh_wiki_nav_zones;
/**
* | output |
* | --- |
* | "Zones" |
*
* @param {Wiki_Nav_ZonesInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_nav_zones = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_nav_zones(inputs);
	if (locale === "zh") return zh_wiki_nav_zones(inputs);
	return zh_tw2_wiki_nav_zones(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Nav_QuestsInputs */
var en_wiki_nav_quests = () => {
	return `Quests`;
};
var zh_wiki_nav_quests = () => {
	return `任务`;
};
/** @type {(inputs: Wiki_Nav_QuestsInputs) => LocalizedString} */
var zh_tw2_wiki_nav_quests = zh_wiki_nav_quests;
/**
* | output |
* | --- |
* | "Quests" |
*
* @param {Wiki_Nav_QuestsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_nav_quests = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_nav_quests(inputs);
	if (locale === "zh") return zh_wiki_nav_quests(inputs);
	return zh_tw2_wiki_nav_quests(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Nav_ItemsInputs */
var en_wiki_nav_items = () => {
	return `Items`;
};
var zh_wiki_nav_items = () => {
	return `物品`;
};
/** @type {(inputs: Wiki_Nav_ItemsInputs) => LocalizedString} */
var zh_tw2_wiki_nav_items = zh_wiki_nav_items;
/**
* | output |
* | --- |
* | "Items" |
*
* @param {Wiki_Nav_ItemsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_nav_items = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_nav_items(inputs);
	if (locale === "zh") return zh_wiki_nav_items(inputs);
	return zh_tw2_wiki_nav_items(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Nav_NpcsInputs */
var en_wiki_nav_npcs = () => {
	return `NPCs`;
};
var zh_wiki_nav_npcs = () => {
	return `NPC`;
};
/** @type {(inputs: Wiki_Nav_NpcsInputs) => LocalizedString} */
var zh_tw2_wiki_nav_npcs = zh_wiki_nav_npcs;
/**
* | output |
* | --- |
* | "NPCs" |
*
* @param {Wiki_Nav_NpcsInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_nav_npcs = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_nav_npcs(inputs);
	if (locale === "zh") return zh_wiki_nav_npcs(inputs);
	return zh_tw2_wiki_nav_npcs(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Nav_AboutInputs */
var en_wiki_nav_about = () => {
	return `About`;
};
var zh_wiki_nav_about = () => {
	return `关于`;
};
var zh_tw2_wiki_nav_about = () => {
	return `關於`;
};
/**
* | output |
* | --- |
* | "About" |
*
* @param {Wiki_Nav_AboutInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_nav_about = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_nav_about(inputs);
	if (locale === "zh") return zh_wiki_nav_about(inputs);
	return zh_tw2_wiki_nav_about(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Nav_SearchInputs */
var en_wiki_nav_search = () => {
	return `Search`;
};
var zh_wiki_nav_search = () => {
	return `搜索`;
};
var zh_tw2_wiki_nav_search = () => {
	return `搜尋`;
};
/**
* | output |
* | --- |
* | "Search" |
*
* @param {Wiki_Nav_SearchInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_nav_search = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_nav_search(inputs);
	if (locale === "zh") return zh_wiki_nav_search(inputs);
	return zh_tw2_wiki_nav_search(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Categories_Races_TitleInputs */
var en_wiki_categories_races_title = () => {
	return `Races`;
};
var zh_wiki_categories_races_title = () => {
	return `种族`;
};
/** @type {(inputs: Wiki_Categories_Races_TitleInputs) => LocalizedString} */
var zh_tw2_wiki_categories_races_title = zh_wiki_categories_races_title;
/**
* | output |
* | --- |
* | "Races" |
*
* @param {Wiki_Categories_Races_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_categories_races_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_categories_races_title(inputs);
	if (locale === "zh") return zh_wiki_categories_races_title(inputs);
	return zh_tw2_wiki_categories_races_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Categories_Races_DescriptionInputs */
var en_wiki_categories_races_description = () => {
	return `Playable and lore races, traits, and starting areas.`;
};
var zh_wiki_categories_races_description = () => {
	return `可玩种族与设定、特性与起始区域。`;
};
/** @type {(inputs: Wiki_Categories_Races_DescriptionInputs) => LocalizedString} */
var zh_tw2_wiki_categories_races_description = zh_wiki_categories_races_description;
/**
* | output |
* | --- |
* | "Playable and lore races, traits, and starting areas." |
*
* @param {Wiki_Categories_Races_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_categories_races_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_categories_races_description(inputs);
	if (locale === "zh") return zh_wiki_categories_races_description(inputs);
	return zh_tw2_wiki_categories_races_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Categories_Classes_TitleInputs */
var en_wiki_categories_classes_title = () => {
	return `Classes`;
};
var zh_wiki_categories_classes_title = () => {
	return `职业`;
};
/** @type {(inputs: Wiki_Categories_Classes_TitleInputs) => LocalizedString} */
var zh_tw2_wiki_categories_classes_title = zh_wiki_categories_classes_title;
/**
* | output |
* | --- |
* | "Classes" |
*
* @param {Wiki_Categories_Classes_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_categories_classes_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_categories_classes_title(inputs);
	if (locale === "zh") return zh_wiki_categories_classes_title(inputs);
	return zh_tw2_wiki_categories_classes_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Categories_Classes_DescriptionInputs */
var en_wiki_categories_classes_description = () => {
	return `Class roles, abilities, and progression notes.`;
};
var zh_wiki_categories_classes_description = () => {
	return `职责定位、技能与成长要点。`;
};
/** @type {(inputs: Wiki_Categories_Classes_DescriptionInputs) => LocalizedString} */
var zh_tw2_wiki_categories_classes_description = zh_wiki_categories_classes_description;
/**
* | output |
* | --- |
* | "Class roles, abilities, and progression notes." |
*
* @param {Wiki_Categories_Classes_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_categories_classes_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_categories_classes_description(inputs);
	if (locale === "zh") return zh_wiki_categories_classes_description(inputs);
	return zh_tw2_wiki_categories_classes_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Categories_Zones_TitleInputs */
var en_wiki_categories_zones_title = () => {
	return `Zones`;
};
var zh_wiki_categories_zones_title = () => {
	return `地图`;
};
/** @type {(inputs: Wiki_Categories_Zones_TitleInputs) => LocalizedString} */
var zh_tw2_wiki_categories_zones_title = zh_wiki_categories_zones_title;
/**
* | output |
* | --- |
* | "Zones" |
*
* @param {Wiki_Categories_Zones_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_categories_zones_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_categories_zones_title(inputs);
	if (locale === "zh") return zh_wiki_categories_zones_title(inputs);
	return zh_tw2_wiki_categories_zones_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Categories_Zones_DescriptionInputs */
var en_wiki_categories_zones_description = () => {
	return `Regions, cities, dungeons, and world landmarks.`;
};
var zh_wiki_categories_zones_description = () => {
	return `区域、主城、副本与地标。`;
};
/** @type {(inputs: Wiki_Categories_Zones_DescriptionInputs) => LocalizedString} */
var zh_tw2_wiki_categories_zones_description = zh_wiki_categories_zones_description;
/**
* | output |
* | --- |
* | "Regions, cities, dungeons, and world landmarks." |
*
* @param {Wiki_Categories_Zones_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_categories_zones_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_categories_zones_description(inputs);
	if (locale === "zh") return zh_wiki_categories_zones_description(inputs);
	return zh_tw2_wiki_categories_zones_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Categories_Quests_TitleInputs */
var en_wiki_categories_quests_title = () => {
	return `Quests`;
};
var zh_wiki_categories_quests_title = () => {
	return `任务`;
};
/** @type {(inputs: Wiki_Categories_Quests_TitleInputs) => LocalizedString} */
var zh_tw2_wiki_categories_quests_title = zh_wiki_categories_quests_title;
/**
* | output |
* | --- |
* | "Quests" |
*
* @param {Wiki_Categories_Quests_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_categories_quests_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_categories_quests_title(inputs);
	if (locale === "zh") return zh_wiki_categories_quests_title(inputs);
	return zh_tw2_wiki_categories_quests_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Categories_Quests_DescriptionInputs */
var en_wiki_categories_quests_description = () => {
	return `Quest chains, objectives, and rewards.`;
};
var zh_wiki_categories_quests_description = () => {
	return `任务线、目标与奖励。`;
};
/** @type {(inputs: Wiki_Categories_Quests_DescriptionInputs) => LocalizedString} */
var zh_tw2_wiki_categories_quests_description = zh_wiki_categories_quests_description;
/**
* | output |
* | --- |
* | "Quest chains, objectives, and rewards." |
*
* @param {Wiki_Categories_Quests_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_categories_quests_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_categories_quests_description(inputs);
	if (locale === "zh") return zh_wiki_categories_quests_description(inputs);
	return zh_tw2_wiki_categories_quests_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Categories_Items_TitleInputs */
var en_wiki_categories_items_title = () => {
	return `Items`;
};
var zh_wiki_categories_items_title = () => {
	return `物品`;
};
/** @type {(inputs: Wiki_Categories_Items_TitleInputs) => LocalizedString} */
var zh_tw2_wiki_categories_items_title = zh_wiki_categories_items_title;
/**
* | output |
* | --- |
* | "Items" |
*
* @param {Wiki_Categories_Items_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_categories_items_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_categories_items_title(inputs);
	if (locale === "zh") return zh_wiki_categories_items_title(inputs);
	return zh_tw2_wiki_categories_items_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Categories_Items_DescriptionInputs */
var en_wiki_categories_items_description = () => {
	return `Gear, consumables, materials, and unique drops.`;
};
var zh_wiki_categories_items_description = () => {
	return `装备、消耗品、材料与特殊掉落。`;
};
/** @type {(inputs: Wiki_Categories_Items_DescriptionInputs) => LocalizedString} */
var zh_tw2_wiki_categories_items_description = zh_wiki_categories_items_description;
/**
* | output |
* | --- |
* | "Gear, consumables, materials, and unique drops." |
*
* @param {Wiki_Categories_Items_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_categories_items_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_categories_items_description(inputs);
	if (locale === "zh") return zh_wiki_categories_items_description(inputs);
	return zh_tw2_wiki_categories_items_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Categories_Npcs_TitleInputs */
var en_wiki_categories_npcs_title = () => {
	return `NPCs`;
};
var zh_wiki_categories_npcs_title = () => {
	return `NPC`;
};
/** @type {(inputs: Wiki_Categories_Npcs_TitleInputs) => LocalizedString} */
var zh_tw2_wiki_categories_npcs_title = zh_wiki_categories_npcs_title;
/**
* | output |
* | --- |
* | "NPCs" |
*
* @param {Wiki_Categories_Npcs_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_categories_npcs_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_categories_npcs_title(inputs);
	if (locale === "zh") return zh_wiki_categories_npcs_title(inputs);
	return zh_tw2_wiki_categories_npcs_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Categories_Npcs_DescriptionInputs */
var en_wiki_categories_npcs_description = () => {
	return `Vendors, trainers, bosses, and story characters.`;
};
var zh_wiki_categories_npcs_description = () => {
	return `商人、训练师、首领与剧情角色。`;
};
/** @type {(inputs: Wiki_Categories_Npcs_DescriptionInputs) => LocalizedString} */
var zh_tw2_wiki_categories_npcs_description = zh_wiki_categories_npcs_description;
/**
* | output |
* | --- |
* | "Vendors, trainers, bosses, and story characters." |
*
* @param {Wiki_Categories_Npcs_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_categories_npcs_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_categories_npcs_description(inputs);
	if (locale === "zh") return zh_wiki_categories_npcs_description(inputs);
	return zh_tw2_wiki_categories_npcs_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Hub_EyebrowInputs */
var en_wiki_hub_eyebrow = () => {
	return `Wiki category`;
};
var zh_wiki_hub_eyebrow = () => {
	return `百科分类`;
};
/** @type {(inputs: Wiki_Hub_EyebrowInputs) => LocalizedString} */
var zh_tw2_wiki_hub_eyebrow = zh_wiki_hub_eyebrow;
/**
* | output |
* | --- |
* | "Wiki category" |
*
* @param {Wiki_Hub_EyebrowInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_hub_eyebrow = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_hub_eyebrow(inputs);
	if (locale === "zh") return zh_wiki_hub_eyebrow(inputs);
	return zh_tw2_wiki_hub_eyebrow(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Hub_Placeholder_TitleInputs */
var en_wiki_hub_placeholder_title = () => {
	return `Entries not published yet`;
};
var zh_wiki_hub_placeholder_title = () => {
	return `词条尚未发布`;
};
/** @type {(inputs: Wiki_Hub_Placeholder_TitleInputs) => LocalizedString} */
var zh_tw2_wiki_hub_placeholder_title = zh_wiki_hub_placeholder_title;
/**
* | output |
* | --- |
* | "Entries not published yet" |
*
* @param {Wiki_Hub_Placeholder_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_hub_placeholder_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_hub_placeholder_title(inputs);
	if (locale === "zh") return zh_wiki_hub_placeholder_title(inputs);
	return zh_tw2_wiki_hub_placeholder_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Hub_Placeholder_BodyInputs */
var en_wiki_hub_placeholder_body = () => {
	return `This hub is ready. Individual articles will be linked here once the source material is curated and written.`;
};
var zh_wiki_hub_placeholder_body = () => {
	return `分类页已就绪。资料整理并撰写完成后，将在此挂上各词条链接。`;
};
/** @type {(inputs: Wiki_Hub_Placeholder_BodyInputs) => LocalizedString} */
var zh_tw2_wiki_hub_placeholder_body = zh_wiki_hub_placeholder_body;
/**
* | output |
* | --- |
* | "This hub is ready. Individual articles will be linked here once the source material is curated and written." |
*
* @param {Wiki_Hub_Placeholder_BodyInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_hub_placeholder_body = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_hub_placeholder_body(inputs);
	if (locale === "zh") return zh_wiki_hub_placeholder_body(inputs);
	return zh_tw2_wiki_hub_placeholder_body(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Search_TitleInputs */
var en_wiki_search_title = () => {
	return `Search`;
};
var zh_wiki_search_title = () => {
	return `搜索`;
};
/** @type {(inputs: Wiki_Search_TitleInputs) => LocalizedString} */
var zh_tw2_wiki_search_title = zh_wiki_search_title;
/**
* | output |
* | --- |
* | "Search" |
*
* @param {Wiki_Search_TitleInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_search_title = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_search_title(inputs);
	if (locale === "zh") return zh_wiki_search_title(inputs);
	return zh_tw2_wiki_search_title(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Search_DescriptionInputs */
var en_wiki_search_description = () => {
	return `Search races, classes, dungeons, raids, talents, and racials from the Forever research archive.`;
};
var zh_wiki_search_description = () => {
	return `搜索 Forever 研究资料中的种族、职业、副本、团队副本、天赋与种族特性。`;
};
/** @type {(inputs: Wiki_Search_DescriptionInputs) => LocalizedString} */
var zh_tw2_wiki_search_description = zh_wiki_search_description;
/**
* | output |
* | --- |
* | "Search races, classes, dungeons, raids, talents, and racials from the Forever research archive." |
*
* @param {Wiki_Search_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_search_description = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_search_description(inputs);
	if (locale === "zh") return zh_wiki_search_description(inputs);
	return zh_tw2_wiki_search_description(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Search_PlaceholderInputs */
var en_wiki_search_placeholder = () => {
	return `Search races, classes, talents…`;
};
var zh_wiki_search_placeholder = () => {
	return `搜索种族、职业、天赋…`;
};
/** @type {(inputs: Wiki_Search_PlaceholderInputs) => LocalizedString} */
var zh_tw2_wiki_search_placeholder = zh_wiki_search_placeholder;
/**
* | output |
* | --- |
* | "Search races, classes, talents…" |
*
* @param {Wiki_Search_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_search_placeholder = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_search_placeholder(inputs);
	if (locale === "zh") return zh_wiki_search_placeholder(inputs);
	return zh_tw2_wiki_search_placeholder(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Search_SubmitInputs */
var en_wiki_search_submit = () => {
	return `Search`;
};
var zh_wiki_search_submit = () => {
	return `搜索`;
};
/** @type {(inputs: Wiki_Search_SubmitInputs) => LocalizedString} */
var zh_tw2_wiki_search_submit = zh_wiki_search_submit;
/**
* | output |
* | --- |
* | "Search" |
*
* @param {Wiki_Search_SubmitInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_search_submit = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_search_submit(inputs);
	if (locale === "zh") return zh_wiki_search_submit(inputs);
	return zh_tw2_wiki_search_submit(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ query: NonNullable<unknown> }} Wiki_Search_EmptyInputs */
var en_wiki_search_empty = (i) => {
	return `No results for “${i?.query}”.`;
};
var zh_wiki_search_empty = (i) => {
	return `暂无与「${i?.query}」相关的结果。`;
};
/** @type {(inputs: Wiki_Search_EmptyInputs) => LocalizedString} */
var zh_tw2_wiki_search_empty = zh_wiki_search_empty;
/**
* | output |
* | --- |
* | "No results for “{query}”." |
*
* @param {Wiki_Search_EmptyInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_search_empty = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_search_empty(inputs);
	if (locale === "zh") return zh_wiki_search_empty(inputs);
	return zh_tw2_wiki_search_empty(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{ count: NonNullable<unknown>, query: NonNullable<unknown> }} Wiki_Search_Results_CountInputs */
var en_wiki_search_results_count = (i) => {
	return `${i?.count} results for “${i?.query}”`;
};
var zh_wiki_search_results_count = (i) => {
	return `「${i?.query}」共 ${i?.count} 条结果`;
};
/** @type {(inputs: Wiki_Search_Results_CountInputs) => LocalizedString} */
var zh_tw2_wiki_search_results_count = zh_wiki_search_results_count;
/**
* | output |
* | --- |
* | "{count} results for “{query}”" |
*
* @param {Wiki_Search_Results_CountInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_search_results_count = ((inputs, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_search_results_count(inputs);
	if (locale === "zh") return zh_wiki_search_results_count(inputs);
	return zh_tw2_wiki_search_results_count(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Search_Category_ClassInputs */
var en_wiki_search_category_class = () => {
	return `Class`;
};
var zh_wiki_search_category_class = () => {
	return `职业`;
};
/** @type {(inputs: Wiki_Search_Category_ClassInputs) => LocalizedString} */
var zh_tw2_wiki_search_category_class = zh_wiki_search_category_class;
/**
* | output |
* | --- |
* | "Class" |
*
* @param {Wiki_Search_Category_ClassInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_search_category_class = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_search_category_class(inputs);
	if (locale === "zh") return zh_wiki_search_category_class(inputs);
	return zh_tw2_wiki_search_category_class(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Search_Category_RaceInputs */
var en_wiki_search_category_race = () => {
	return `Race`;
};
var zh_wiki_search_category_race = () => {
	return `种族`;
};
/** @type {(inputs: Wiki_Search_Category_RaceInputs) => LocalizedString} */
var zh_tw2_wiki_search_category_race = zh_wiki_search_category_race;
/**
* | output |
* | --- |
* | "Race" |
*
* @param {Wiki_Search_Category_RaceInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_search_category_race = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_search_category_race(inputs);
	if (locale === "zh") return zh_wiki_search_category_race(inputs);
	return zh_tw2_wiki_search_category_race(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Search_Category_DungeonInputs */
var en_wiki_search_category_dungeon = () => {
	return `Dungeon`;
};
var zh_wiki_search_category_dungeon = () => {
	return `副本`;
};
/** @type {(inputs: Wiki_Search_Category_DungeonInputs) => LocalizedString} */
var zh_tw2_wiki_search_category_dungeon = zh_wiki_search_category_dungeon;
/**
* | output |
* | --- |
* | "Dungeon" |
*
* @param {Wiki_Search_Category_DungeonInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_search_category_dungeon = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_search_category_dungeon(inputs);
	if (locale === "zh") return zh_wiki_search_category_dungeon(inputs);
	return zh_tw2_wiki_search_category_dungeon(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Search_Category_RaidInputs */
var en_wiki_search_category_raid = () => {
	return `Raid`;
};
var zh_wiki_search_category_raid = () => {
	return `团队副本`;
};
/** @type {(inputs: Wiki_Search_Category_RaidInputs) => LocalizedString} */
var zh_tw2_wiki_search_category_raid = zh_wiki_search_category_raid;
/**
* | output |
* | --- |
* | "Raid" |
*
* @param {Wiki_Search_Category_RaidInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_search_category_raid = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_search_category_raid(inputs);
	if (locale === "zh") return zh_wiki_search_category_raid(inputs);
	return zh_tw2_wiki_search_category_raid(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Search_Category_TalentInputs */
var en_wiki_search_category_talent = () => {
	return `Talent`;
};
var zh_wiki_search_category_talent = () => {
	return `天赋`;
};
/** @type {(inputs: Wiki_Search_Category_TalentInputs) => LocalizedString} */
var zh_tw2_wiki_search_category_talent = zh_wiki_search_category_talent;
/**
* | output |
* | --- |
* | "Talent" |
*
* @param {Wiki_Search_Category_TalentInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_search_category_talent = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_search_category_talent(inputs);
	if (locale === "zh") return zh_wiki_search_category_talent(inputs);
	return zh_tw2_wiki_search_category_talent(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Search_Category_RacialInputs */
var en_wiki_search_category_racial = () => {
	return `Racial`;
};
var zh_wiki_search_category_racial = () => {
	return `种族特性`;
};
/** @type {(inputs: Wiki_Search_Category_RacialInputs) => LocalizedString} */
var zh_tw2_wiki_search_category_racial = zh_wiki_search_category_racial;
/**
* | output |
* | --- |
* | "Racial" |
*
* @param {Wiki_Search_Category_RacialInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_search_category_racial = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_search_category_racial(inputs);
	if (locale === "zh") return zh_wiki_search_category_racial(inputs);
	return zh_tw2_wiki_search_category_racial(inputs);
});
/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */
/** @typedef {{}} Wiki_Search_Category_PageInputs */
var en_wiki_search_category_page = () => {
	return `Page`;
};
var zh_wiki_search_category_page = () => {
	return `页面`;
};
/** @type {(inputs: Wiki_Search_Category_PageInputs) => LocalizedString} */
var zh_tw2_wiki_search_category_page = zh_wiki_search_category_page;
/**
* | output |
* | --- |
* | "Page" |
*
* @param {Wiki_Search_Category_PageInputs} inputs
* @param {{ locale?: "en" | "zh" | "zh-TW" }} options
* @returns {LocalizedString}
*/
var wiki_search_category_page = ((inputs = {}, options = {}) => {
	const locale = options.locale ?? getLocale();
	if (locale === "en") return en_wiki_search_category_page(inputs);
	if (locale === "zh") return zh_wiki_search_category_page(inputs);
	return zh_tw2_wiki_search_category_page(inputs);
});
var _index_exports = /* @__PURE__ */ __exportAll({
	"admin.back_to_dashboard": () => admin_back_to_dashboard,
	"admin.categories.actions_col": () => admin_categories_actions_col,
	"admin.categories.all": () => admin_categories_all,
	"admin.categories.cancel": () => admin_categories_cancel,
	"admin.categories.confirm_delete": () => admin_categories_confirm_delete,
	"admin.categories.count": () => admin_categories_count,
	"admin.categories.create": () => admin_categories_create,
	"admin.categories.create_description": () => admin_categories_create_description,
	"admin.categories.create_title": () => admin_categories_create_title,
	"admin.categories.created": () => admin_categories_created,
	"admin.categories.created_at": () => admin_categories_created_at,
	"admin.categories.delete_confirm": () => admin_categories_delete_confirm,
	"admin.categories.delete_title": () => admin_categories_delete_title,
	"admin.categories.deleted": () => admin_categories_deleted,
	"admin.categories.description": () => admin_categories_description,
	"admin.categories.description_col": () => admin_categories_description_col,
	"admin.categories.description_field": () => admin_categories_description_field,
	"admin.categories.description_placeholder": () => admin_categories_description_placeholder,
	"admin.categories.edit_description": () => admin_categories_edit_description,
	"admin.categories.edit_title": () => admin_categories_edit_title,
	"admin.categories.no_data": () => admin_categories_no_data,
	"admin.categories.save": () => admin_categories_save,
	"admin.categories.slug_col": () => admin_categories_slug_col,
	"admin.categories.slug_field": () => admin_categories_slug_field,
	"admin.categories.slug_placeholder": () => admin_categories_slug_placeholder,
	"admin.categories.status_col": () => admin_categories_status_col,
	"admin.categories.title": () => admin_categories_title,
	"admin.categories.title_col": () => admin_categories_title_col,
	"admin.categories.title_field": () => admin_categories_title_field,
	"admin.categories.title_placeholder": () => admin_categories_title_placeholder,
	"admin.categories.updated": () => admin_categories_updated,
	"admin.credits.all_credits": () => admin_credits_all_credits,
	"admin.credits.amount": () => admin_credits_amount,
	"admin.credits.count": () => admin_credits_count,
	"admin.credits.created_at": () => admin_credits_created_at,
	"admin.credits.description": () => admin_credits_description,
	"admin.credits.expires_at": () => admin_credits_expires_at,
	"admin.credits.no_credits": () => admin_credits_no_credits,
	"admin.credits.remaining": () => admin_credits_remaining,
	"admin.credits.scene": () => admin_credits_scene,
	"admin.credits.tab_all": () => admin_credits_tab_all,
	"admin.credits.tab_consume": () => admin_credits_tab_consume,
	"admin.credits.tab_grant": () => admin_credits_tab_grant,
	"admin.credits.title": () => admin_credits_title,
	"admin.credits.transaction_no": () => admin_credits_transaction_no,
	"admin.credits.type": () => admin_credits_type,
	"admin.credits.user": () => admin_credits_user,
	"admin.description": () => admin_description,
	"admin.invite_codes.actions_col": () => admin_invite_codes_actions_col,
	"admin.invite_codes.cancel": () => admin_invite_codes_cancel,
	"admin.invite_codes.code_col": () => admin_invite_codes_code_col,
	"admin.invite_codes.copied": () => admin_invite_codes_copied,
	"admin.invite_codes.count_label": () => admin_invite_codes_count_label,
	"admin.invite_codes.create_button": () => admin_invite_codes_create_button,
	"admin.invite_codes.create_description": () => admin_invite_codes_create_description,
	"admin.invite_codes.create_submit": () => admin_invite_codes_create_submit,
	"admin.invite_codes.create_success": () => admin_invite_codes_create_success,
	"admin.invite_codes.create_title": () => admin_invite_codes_create_title,
	"admin.invite_codes.created_col": () => admin_invite_codes_created_col,
	"admin.invite_codes.creating": () => admin_invite_codes_creating,
	"admin.invite_codes.delete_confirm": () => admin_invite_codes_delete_confirm,
	"admin.invite_codes.delete_description": () => admin_invite_codes_delete_description,
	"admin.invite_codes.delete_success": () => admin_invite_codes_delete_success,
	"admin.invite_codes.delete_title": () => admin_invite_codes_delete_title,
	"admin.invite_codes.description": () => admin_invite_codes_description,
	"admin.invite_codes.empty": () => admin_invite_codes_empty,
	"admin.invite_codes.expires_col": () => admin_invite_codes_expires_col,
	"admin.invite_codes.expires_label": () => admin_invite_codes_expires_label,
	"admin.invite_codes.invalid_input": () => admin_invite_codes_invalid_input,
	"admin.invite_codes.max_uses_label": () => admin_invite_codes_max_uses_label,
	"admin.invite_codes.note_col": () => admin_invite_codes_note_col,
	"admin.invite_codes.note_label": () => admin_invite_codes_note_label,
	"admin.invite_codes.note_placeholder": () => admin_invite_codes_note_placeholder,
	"admin.invite_codes.tab_all": () => admin_invite_codes_tab_all,
	"admin.invite_codes.tab_available": () => admin_invite_codes_tab_available,
	"admin.invite_codes.tab_used": () => admin_invite_codes_tab_used,
	"admin.invite_codes.title": () => admin_invite_codes_title,
	"admin.invite_codes.trial_days_col": () => admin_invite_codes_trial_days_col,
	"admin.invite_codes.trial_days_label": () => admin_invite_codes_trial_days_label,
	"admin.invite_codes.usage_col": () => admin_invite_codes_usage_col,
	"admin.loading": () => admin_loading,
	"admin.nav.billing": () => admin_nav_billing,
	"admin.nav.categories": () => admin_nav_categories,
	"admin.nav.content": () => admin_nav_content,
	"admin.nav.credits": () => admin_nav_credits,
	"admin.nav.invite_codes": () => admin_nav_invite_codes,
	"admin.nav.overview": () => admin_nav_overview,
	"admin.nav.payments": () => admin_nav_payments,
	"admin.nav.permissions": () => admin_nav_permissions,
	"admin.nav.posts": () => admin_nav_posts,
	"admin.nav.rbac": () => admin_nav_rbac,
	"admin.nav.roles": () => admin_nav_roles,
	"admin.nav.settings": () => admin_nav_settings,
	"admin.nav.subscriptions": () => admin_nav_subscriptions,
	"admin.nav.support": () => admin_nav_support,
	"admin.nav.tickets": () => admin_nav_tickets,
	"admin.nav.users": () => admin_nav_users,
	"admin.payments.all_payments": () => admin_payments_all_payments,
	"admin.payments.amount": () => admin_payments_amount,
	"admin.payments.cancel": () => admin_payments_cancel,
	"admin.payments.count": () => admin_payments_count,
	"admin.payments.created_at": () => admin_payments_created_at,
	"admin.payments.description": () => admin_payments_description,
	"admin.payments.edit_description": () => admin_payments_edit_description,
	"admin.payments.edit_title": () => admin_payments_edit_title,
	"admin.payments.no_payments": () => admin_payments_no_payments,
	"admin.payments.order_no": () => admin_payments_order_no,
	"admin.payments.product_description_label": () => admin_payments_product_description_label,
	"admin.payments.product_id_label": () => admin_payments_product_id_label,
	"admin.payments.product_name_label": () => admin_payments_product_name_label,
	"admin.payments.provider": () => admin_payments_provider,
	"admin.payments.save": () => admin_payments_save,
	"admin.payments.saving": () => admin_payments_saving,
	"admin.payments.search_placeholder": () => admin_payments_search_placeholder,
	"admin.payments.status": () => admin_payments_status,
	"admin.payments.status_created": () => admin_payments_status_created,
	"admin.payments.status_deleted": () => admin_payments_status_deleted,
	"admin.payments.status_failed": () => admin_payments_status_failed,
	"admin.payments.status_label": () => admin_payments_status_label,
	"admin.payments.status_paid": () => admin_payments_status_paid,
	"admin.payments.status_pending": () => admin_payments_status_pending,
	"admin.payments.tab_all": () => admin_payments_tab_all,
	"admin.payments.tab_one_time": () => admin_payments_tab_one_time,
	"admin.payments.tab_subscription": () => admin_payments_tab_subscription,
	"admin.payments.title": () => admin_payments_title,
	"admin.payments.type": () => admin_payments_type,
	"admin.payments.update_success": () => admin_payments_update_success,
	"admin.payments.user": () => admin_payments_user,
	"admin.permissions.action_col": () => admin_permissions_action_col,
	"admin.permissions.action_field": () => admin_permissions_action_field,
	"admin.permissions.action_placeholder": () => admin_permissions_action_placeholder,
	"admin.permissions.actions_col": () => admin_permissions_actions_col,
	"admin.permissions.all_permissions": () => admin_permissions_all_permissions,
	"admin.permissions.cancel": () => admin_permissions_cancel,
	"admin.permissions.code_col": () => admin_permissions_code_col,
	"admin.permissions.code_field": () => admin_permissions_code_field,
	"admin.permissions.code_placeholder": () => admin_permissions_code_placeholder,
	"admin.permissions.confirm_delete": () => admin_permissions_confirm_delete,
	"admin.permissions.count": () => admin_permissions_count,
	"admin.permissions.create_description": () => admin_permissions_create_description,
	"admin.permissions.create_permission": () => admin_permissions_create_permission,
	"admin.permissions.create_title": () => admin_permissions_create_title,
	"admin.permissions.created": () => admin_permissions_created,
	"admin.permissions.delete_confirm": () => admin_permissions_delete_confirm,
	"admin.permissions.delete_title": () => admin_permissions_delete_title,
	"admin.permissions.deleted": () => admin_permissions_deleted,
	"admin.permissions.description": () => admin_permissions_description,
	"admin.permissions.edit_description": () => admin_permissions_edit_description,
	"admin.permissions.edit_title": () => admin_permissions_edit_title,
	"admin.permissions.no_permissions": () => admin_permissions_no_permissions,
	"admin.permissions.resource_col": () => admin_permissions_resource_col,
	"admin.permissions.resource_field": () => admin_permissions_resource_field,
	"admin.permissions.resource_placeholder": () => admin_permissions_resource_placeholder,
	"admin.permissions.save": () => admin_permissions_save,
	"admin.permissions.title": () => admin_permissions_title,
	"admin.permissions.title_col": () => admin_permissions_title_col,
	"admin.permissions.title_field": () => admin_permissions_title_field,
	"admin.permissions.title_placeholder": () => admin_permissions_title_placeholder,
	"admin.permissions.updated": () => admin_permissions_updated,
	"admin.posts.actions_col": () => admin_posts_actions_col,
	"admin.posts.all": () => admin_posts_all,
	"admin.posts.author_col": () => admin_posts_author_col,
	"admin.posts.author_field": () => admin_posts_author_field,
	"admin.posts.author_placeholder": () => admin_posts_author_placeholder,
	"admin.posts.cancel": () => admin_posts_cancel,
	"admin.posts.category_field": () => admin_posts_category_field,
	"admin.posts.category_placeholder": () => admin_posts_category_placeholder,
	"admin.posts.confirm_delete": () => admin_posts_confirm_delete,
	"admin.posts.content_field": () => admin_posts_content_field,
	"admin.posts.content_placeholder": () => admin_posts_content_placeholder,
	"admin.posts.count": () => admin_posts_count,
	"admin.posts.create": () => admin_posts_create,
	"admin.posts.create_description": () => admin_posts_create_description,
	"admin.posts.create_title": () => admin_posts_create_title,
	"admin.posts.created": () => admin_posts_created,
	"admin.posts.created_at": () => admin_posts_created_at,
	"admin.posts.delete_confirm": () => admin_posts_delete_confirm,
	"admin.posts.delete_title": () => admin_posts_delete_title,
	"admin.posts.deleted": () => admin_posts_deleted,
	"admin.posts.description": () => admin_posts_description,
	"admin.posts.description_field": () => admin_posts_description_field,
	"admin.posts.description_placeholder": () => admin_posts_description_placeholder,
	"admin.posts.edit_description": () => admin_posts_edit_description,
	"admin.posts.edit_title": () => admin_posts_edit_title,
	"admin.posts.no_data": () => admin_posts_no_data,
	"admin.posts.save": () => admin_posts_save,
	"admin.posts.slug_col": () => admin_posts_slug_col,
	"admin.posts.slug_field": () => admin_posts_slug_field,
	"admin.posts.slug_placeholder": () => admin_posts_slug_placeholder,
	"admin.posts.status_col": () => admin_posts_status_col,
	"admin.posts.status_draft": () => admin_posts_status_draft,
	"admin.posts.status_field": () => admin_posts_status_field,
	"admin.posts.status_published": () => admin_posts_status_published,
	"admin.posts.tab_all": () => admin_posts_tab_all,
	"admin.posts.tab_draft": () => admin_posts_tab_draft,
	"admin.posts.tab_published": () => admin_posts_tab_published,
	"admin.posts.title": () => admin_posts_title,
	"admin.posts.title_col": () => admin_posts_title_col,
	"admin.posts.title_field": () => admin_posts_title_field,
	"admin.posts.title_placeholder": () => admin_posts_title_placeholder,
	"admin.posts.updated": () => admin_posts_updated,
	"admin.roles.actions_col": () => admin_roles_actions_col,
	"admin.roles.all_roles": () => admin_roles_all_roles,
	"admin.roles.cancel": () => admin_roles_cancel,
	"admin.roles.confirm_delete": () => admin_roles_confirm_delete,
	"admin.roles.count": () => admin_roles_count,
	"admin.roles.create_description": () => admin_roles_create_description,
	"admin.roles.create_role": () => admin_roles_create_role,
	"admin.roles.create_title": () => admin_roles_create_title,
	"admin.roles.created": () => admin_roles_created,
	"admin.roles.delete_confirm": () => admin_roles_delete_confirm,
	"admin.roles.delete_title": () => admin_roles_delete_title,
	"admin.roles.deleted": () => admin_roles_deleted,
	"admin.roles.description": () => admin_roles_description,
	"admin.roles.description_col": () => admin_roles_description_col,
	"admin.roles.description_field": () => admin_roles_description_field,
	"admin.roles.description_placeholder": () => admin_roles_description_placeholder,
	"admin.roles.edit_description": () => admin_roles_edit_description,
	"admin.roles.edit_title": () => admin_roles_edit_title,
	"admin.roles.manage_permissions": () => admin_roles_manage_permissions,
	"admin.roles.manage_permissions_description": () => admin_roles_manage_permissions_description,
	"admin.roles.manage_permissions_title": () => admin_roles_manage_permissions_title,
	"admin.roles.name_col": () => admin_roles_name_col,
	"admin.roles.name_field": () => admin_roles_name_field,
	"admin.roles.name_placeholder": () => admin_roles_name_placeholder,
	"admin.roles.no_roles": () => admin_roles_no_roles,
	"admin.roles.permissions_saved": () => admin_roles_permissions_saved,
	"admin.roles.save": () => admin_roles_save,
	"admin.roles.status_col": () => admin_roles_status_col,
	"admin.roles.title": () => admin_roles_title,
	"admin.roles.title_col": () => admin_roles_title_col,
	"admin.roles.title_field": () => admin_roles_title_field,
	"admin.roles.title_placeholder": () => admin_roles_title_placeholder,
	"admin.roles.updated": () => admin_roles_updated,
	"admin.settings.custom.add": () => admin_settings_custom_add,
	"admin.settings.custom.description": () => admin_settings_custom_description,
	"admin.settings.custom.empty": () => admin_settings_custom_empty,
	"admin.settings.custom.key_placeholder": () => admin_settings_custom_key_placeholder,
	"admin.settings.custom.remove": () => admin_settings_custom_remove,
	"admin.settings.custom.title": () => admin_settings_custom_title,
	"admin.settings.custom.value_placeholder": () => admin_settings_custom_value_placeholder,
	"admin.settings.description": () => admin_settings_description,
	"admin.settings.fields.adsense_code": () => admin_settings_fields_adsense_code,
	"admin.settings.fields.alipay_app_id": () => admin_settings_fields_alipay_app_id,
	"admin.settings.fields.alipay_enabled": () => admin_settings_fields_alipay_enabled,
	"admin.settings.fields.alipay_notify_url": () => admin_settings_fields_alipay_notify_url,
	"admin.settings.fields.alipay_private_key": () => admin_settings_fields_alipay_private_key,
	"admin.settings.fields.alipay_public_key": () => admin_settings_fields_alipay_public_key,
	"admin.settings.fields.alipay_test_amount": () => admin_settings_fields_alipay_test_amount,
	"admin.settings.fields.anthropic_api_key": () => admin_settings_fields_anthropic_api_key,
	"admin.settings.fields.anthropic_base_url": () => admin_settings_fields_anthropic_base_url,
	"admin.settings.fields.app_description": () => admin_settings_fields_app_description,
	"admin.settings.fields.app_name": () => admin_settings_fields_app_name,
	"admin.settings.fields.app_url": () => admin_settings_fields_app_url,
	"admin.settings.fields.cloudflare_email_account_id": () => admin_settings_fields_cloudflare_email_account_id,
	"admin.settings.fields.cloudflare_email_api_token": () => admin_settings_fields_cloudflare_email_api_token,
	"admin.settings.fields.cloudflare_email_sender_email": () => admin_settings_fields_cloudflare_email_sender_email,
	"admin.settings.fields.creem_api_key": () => admin_settings_fields_creem_api_key,
	"admin.settings.fields.creem_enabled": () => admin_settings_fields_creem_enabled,
	"admin.settings.fields.creem_environment": () => admin_settings_fields_creem_environment,
	"admin.settings.fields.creem_product_ids_mapping": () => admin_settings_fields_creem_product_ids_mapping,
	"admin.settings.fields.creem_signing_secret": () => admin_settings_fields_creem_signing_secret,
	"admin.settings.fields.creem_test_amount": () => admin_settings_fields_creem_test_amount,
	"admin.settings.fields.crisp_enabled": () => admin_settings_fields_crisp_enabled,
	"admin.settings.fields.crisp_website_id": () => admin_settings_fields_crisp_website_id,
	"admin.settings.fields.default_payment_provider": () => admin_settings_fields_default_payment_provider,
	"admin.settings.fields.email_auth_enabled": () => admin_settings_fields_email_auth_enabled,
	"admin.settings.fields.email_provider": () => admin_settings_fields_email_provider,
	"admin.settings.fields.email_verification_enabled": () => admin_settings_fields_email_verification_enabled,
	"admin.settings.fields.fal_api_key": () => admin_settings_fields_fal_api_key,
	"admin.settings.fields.github_auth_enabled": () => admin_settings_fields_github_auth_enabled,
	"admin.settings.fields.github_client_id": () => admin_settings_fields_github_client_id,
	"admin.settings.fields.github_client_secret": () => admin_settings_fields_github_client_secret,
	"admin.settings.fields.google_analytics_id": () => admin_settings_fields_google_analytics_id,
	"admin.settings.fields.google_auth_enabled": () => admin_settings_fields_google_auth_enabled,
	"admin.settings.fields.google_client_id": () => admin_settings_fields_google_client_id,
	"admin.settings.fields.google_client_secret": () => admin_settings_fields_google_client_secret,
	"admin.settings.fields.google_one_tap_enabled": () => admin_settings_fields_google_one_tap_enabled,
	"admin.settings.fields.initial_credits_amount": () => admin_settings_fields_initial_credits_amount,
	"admin.settings.fields.initial_credits_description": () => admin_settings_fields_initial_credits_description,
	"admin.settings.fields.initial_credits_enabled": () => admin_settings_fields_initial_credits_enabled,
	"admin.settings.fields.initial_credits_valid_days": () => admin_settings_fields_initial_credits_valid_days,
	"admin.settings.fields.initial_role_enabled": () => admin_settings_fields_initial_role_enabled,
	"admin.settings.fields.initial_role_name": () => admin_settings_fields_initial_role_name,
	"admin.settings.fields.invite_code_required": () => admin_settings_fields_invite_code_required,
	"admin.settings.fields.openai_api_key": () => admin_settings_fields_openai_api_key,
	"admin.settings.fields.openai_base_url": () => admin_settings_fields_openai_base_url,
	"admin.settings.fields.paypal_client_id": () => admin_settings_fields_paypal_client_id,
	"admin.settings.fields.paypal_client_secret": () => admin_settings_fields_paypal_client_secret,
	"admin.settings.fields.paypal_enabled": () => admin_settings_fields_paypal_enabled,
	"admin.settings.fields.paypal_environment": () => admin_settings_fields_paypal_environment,
	"admin.settings.fields.paypal_test_amount": () => admin_settings_fields_paypal_test_amount,
	"admin.settings.fields.paypal_webhook_id": () => admin_settings_fields_paypal_webhook_id,
	"admin.settings.fields.plausible_domain": () => admin_settings_fields_plausible_domain,
	"admin.settings.fields.plausible_src": () => admin_settings_fields_plausible_src,
	"admin.settings.fields.r2_access_key": () => admin_settings_fields_r2_access_key,
	"admin.settings.fields.r2_bucket_name": () => admin_settings_fields_r2_bucket_name,
	"admin.settings.fields.r2_domain": () => admin_settings_fields_r2_domain,
	"admin.settings.fields.r2_endpoint": () => admin_settings_fields_r2_endpoint,
	"admin.settings.fields.r2_secret_key": () => admin_settings_fields_r2_secret_key,
	"admin.settings.fields.r2_upload_path": () => admin_settings_fields_r2_upload_path,
	"admin.settings.fields.replicate_api_token": () => admin_settings_fields_replicate_api_token,
	"admin.settings.fields.resend_api_key": () => admin_settings_fields_resend_api_key,
	"admin.settings.fields.resend_sender_email": () => admin_settings_fields_resend_sender_email,
	"admin.settings.fields.select_payment_enabled": () => admin_settings_fields_select_payment_enabled,
	"admin.settings.fields.stripe_enabled": () => admin_settings_fields_stripe_enabled,
	"admin.settings.fields.stripe_publishable_key": () => admin_settings_fields_stripe_publishable_key,
	"admin.settings.fields.stripe_secret_key": () => admin_settings_fields_stripe_secret_key,
	"admin.settings.fields.stripe_signing_secret": () => admin_settings_fields_stripe_signing_secret,
	"admin.settings.fields.tawk_enabled": () => admin_settings_fields_tawk_enabled,
	"admin.settings.fields.tawk_property_id": () => admin_settings_fields_tawk_property_id,
	"admin.settings.fields.tawk_widget_id": () => admin_settings_fields_tawk_widget_id,
	"admin.settings.fields.wechat_api_v3_key": () => admin_settings_fields_wechat_api_v3_key,
	"admin.settings.fields.wechat_app_id": () => admin_settings_fields_wechat_app_id,
	"admin.settings.fields.wechat_enabled": () => admin_settings_fields_wechat_enabled,
	"admin.settings.fields.wechat_mch_id": () => admin_settings_fields_wechat_mch_id,
	"admin.settings.fields.wechat_notify_url": () => admin_settings_fields_wechat_notify_url,
	"admin.settings.fields.wechat_private_key": () => admin_settings_fields_wechat_private_key,
	"admin.settings.fields.wechat_serial_no": () => admin_settings_fields_wechat_serial_no,
	"admin.settings.fields.wechat_test_amount": () => admin_settings_fields_wechat_test_amount,
	"admin.settings.groups.adsense.description": () => admin_settings_groups_adsense_description,
	"admin.settings.groups.adsense.title": () => admin_settings_groups_adsense_title,
	"admin.settings.groups.alipay.description": () => admin_settings_groups_alipay_description,
	"admin.settings.groups.alipay.title": () => admin_settings_groups_alipay_title,
	"admin.settings.groups.anthropic.description": () => admin_settings_groups_anthropic_description,
	"admin.settings.groups.anthropic.title": () => admin_settings_groups_anthropic_title,
	"admin.settings.groups.appinfo.description": () => admin_settings_groups_appinfo_description,
	"admin.settings.groups.appinfo.title": () => admin_settings_groups_appinfo_title,
	"admin.settings.groups.basic_payment.description": () => admin_settings_groups_basic_payment_description,
	"admin.settings.groups.basic_payment.title": () => admin_settings_groups_basic_payment_title,
	"admin.settings.groups.cloudflare_email.description": () => admin_settings_groups_cloudflare_email_description,
	"admin.settings.groups.cloudflare_email.title": () => admin_settings_groups_cloudflare_email_title,
	"admin.settings.groups.credit.description": () => admin_settings_groups_credit_description,
	"admin.settings.groups.credit.title": () => admin_settings_groups_credit_title,
	"admin.settings.groups.creem.description": () => admin_settings_groups_creem_description,
	"admin.settings.groups.creem.title": () => admin_settings_groups_creem_title,
	"admin.settings.groups.crisp.description": () => admin_settings_groups_crisp_description,
	"admin.settings.groups.crisp.title": () => admin_settings_groups_crisp_title,
	"admin.settings.groups.email_auth.description": () => admin_settings_groups_email_auth_description,
	"admin.settings.groups.email_auth.title": () => admin_settings_groups_email_auth_title,
	"admin.settings.groups.email_general.description": () => admin_settings_groups_email_general_description,
	"admin.settings.groups.email_general.title": () => admin_settings_groups_email_general_title,
	"admin.settings.groups.fal.description": () => admin_settings_groups_fal_description,
	"admin.settings.groups.fal.title": () => admin_settings_groups_fal_title,
	"admin.settings.groups.github_auth.description": () => admin_settings_groups_github_auth_description,
	"admin.settings.groups.github_auth.title": () => admin_settings_groups_github_auth_title,
	"admin.settings.groups.google_analytics.description": () => admin_settings_groups_google_analytics_description,
	"admin.settings.groups.google_analytics.title": () => admin_settings_groups_google_analytics_title,
	"admin.settings.groups.google_auth.description": () => admin_settings_groups_google_auth_description,
	"admin.settings.groups.google_auth.title": () => admin_settings_groups_google_auth_title,
	"admin.settings.groups.openai.description": () => admin_settings_groups_openai_description,
	"admin.settings.groups.openai.title": () => admin_settings_groups_openai_title,
	"admin.settings.groups.paypal.description": () => admin_settings_groups_paypal_description,
	"admin.settings.groups.paypal.title": () => admin_settings_groups_paypal_title,
	"admin.settings.groups.plausible.description": () => admin_settings_groups_plausible_description,
	"admin.settings.groups.plausible.title": () => admin_settings_groups_plausible_title,
	"admin.settings.groups.r2.description": () => admin_settings_groups_r2_description,
	"admin.settings.groups.r2.title": () => admin_settings_groups_r2_title,
	"admin.settings.groups.replicate.description": () => admin_settings_groups_replicate_description,
	"admin.settings.groups.replicate.title": () => admin_settings_groups_replicate_title,
	"admin.settings.groups.resend.description": () => admin_settings_groups_resend_description,
	"admin.settings.groups.resend.title": () => admin_settings_groups_resend_title,
	"admin.settings.groups.stripe.description": () => admin_settings_groups_stripe_description,
	"admin.settings.groups.stripe.title": () => admin_settings_groups_stripe_title,
	"admin.settings.groups.tawk.description": () => admin_settings_groups_tawk_description,
	"admin.settings.groups.tawk.title": () => admin_settings_groups_tawk_title,
	"admin.settings.groups.user_role.description": () => admin_settings_groups_user_role_description,
	"admin.settings.groups.user_role.title": () => admin_settings_groups_user_role_title,
	"admin.settings.groups.wechat.description": () => admin_settings_groups_wechat_description,
	"admin.settings.groups.wechat.title": () => admin_settings_groups_wechat_title,
	"admin.settings.placeholders.alipay_test_amount": () => admin_settings_placeholders_alipay_test_amount,
	"admin.settings.placeholders.creem_product_ids_mapping": () => admin_settings_placeholders_creem_product_ids_mapping,
	"admin.settings.placeholders.creem_test_amount": () => admin_settings_placeholders_creem_test_amount,
	"admin.settings.placeholders.paypal_test_amount": () => admin_settings_placeholders_paypal_test_amount,
	"admin.settings.placeholders.wechat_test_amount": () => admin_settings_placeholders_wechat_test_amount,
	"admin.settings.save": () => admin_settings_save,
	"admin.settings.save_error": () => admin_settings_save_error,
	"admin.settings.save_success": () => admin_settings_save_success,
	"admin.settings.saving": () => admin_settings_saving,
	"admin.settings.tabs.ads": () => admin_settings_tabs_ads,
	"admin.settings.tabs.ai": () => admin_settings_tabs_ai,
	"admin.settings.tabs.analytics": () => admin_settings_tabs_analytics,
	"admin.settings.tabs.auth": () => admin_settings_tabs_auth,
	"admin.settings.tabs.custom": () => admin_settings_tabs_custom,
	"admin.settings.tabs.customer_service": () => admin_settings_tabs_customer_service,
	"admin.settings.tabs.email": () => admin_settings_tabs_email,
	"admin.settings.tabs.general": () => admin_settings_tabs_general,
	"admin.settings.tabs.payment": () => admin_settings_tabs_payment,
	"admin.settings.tabs.storage": () => admin_settings_tabs_storage,
	"admin.settings.test.button": () => admin_settings_test_button,
	"admin.settings.test.close": () => admin_settings_test_close,
	"admin.settings.test.description": () => admin_settings_test_description,
	"admin.settings.test.error": () => admin_settings_test_error,
	"admin.settings.test.run": () => admin_settings_test_run,
	"admin.settings.test.running": () => admin_settings_test_running,
	"admin.settings.test.title": () => admin_settings_test_title,
	"admin.settings.title": () => admin_settings_title,
	"admin.stats.roles": () => admin_stats_roles,
	"admin.stats.total_users": () => admin_stats_total_users,
	"admin.subscriptions.all_subscriptions": () => admin_subscriptions_all_subscriptions,
	"admin.subscriptions.amount": () => admin_subscriptions_amount,
	"admin.subscriptions.count": () => admin_subscriptions_count,
	"admin.subscriptions.created_at": () => admin_subscriptions_created_at,
	"admin.subscriptions.description": () => admin_subscriptions_description,
	"admin.subscriptions.interval": () => admin_subscriptions_interval,
	"admin.subscriptions.no_subscriptions": () => admin_subscriptions_no_subscriptions,
	"admin.subscriptions.period": () => admin_subscriptions_period,
	"admin.subscriptions.provider": () => admin_subscriptions_provider,
	"admin.subscriptions.status": () => admin_subscriptions_status,
	"admin.subscriptions.subscription_no": () => admin_subscriptions_subscription_no,
	"admin.subscriptions.tab_all": () => admin_subscriptions_tab_all,
	"admin.subscriptions.tab_month": () => admin_subscriptions_tab_month,
	"admin.subscriptions.tab_year": () => admin_subscriptions_tab_year,
	"admin.subscriptions.title": () => admin_subscriptions_title,
	"admin.subscriptions.user": () => admin_subscriptions_user,
	"admin.tickets.actions_col": () => admin_tickets_actions_col,
	"admin.tickets.admin": () => admin_tickets_admin,
	"admin.tickets.close_ticket": () => admin_tickets_close_ticket,
	"admin.tickets.created_col": () => admin_tickets_created_col,
	"admin.tickets.description": () => admin_tickets_description,
	"admin.tickets.empty": () => admin_tickets_empty,
	"admin.tickets.latest_reply_col": () => admin_tickets_latest_reply_col,
	"admin.tickets.reopen_ticket": () => admin_tickets_reopen_ticket,
	"admin.tickets.reply_placeholder": () => admin_tickets_reply_placeholder,
	"admin.tickets.reply_submit": () => admin_tickets_reply_submit,
	"admin.tickets.reply_success": () => admin_tickets_reply_success,
	"admin.tickets.replying": () => admin_tickets_replying,
	"admin.tickets.status_closed": () => admin_tickets_status_closed,
	"admin.tickets.status_col": () => admin_tickets_status_col,
	"admin.tickets.status_open": () => admin_tickets_status_open,
	"admin.tickets.status_replied": () => admin_tickets_status_replied,
	"admin.tickets.status_updated": () => admin_tickets_status_updated,
	"admin.tickets.tab_all": () => admin_tickets_tab_all,
	"admin.tickets.tab_closed": () => admin_tickets_tab_closed,
	"admin.tickets.tab_open": () => admin_tickets_tab_open,
	"admin.tickets.tab_replied": () => admin_tickets_tab_replied,
	"admin.tickets.title": () => admin_tickets_title,
	"admin.tickets.title_col": () => admin_tickets_title_col,
	"admin.tickets.updated_col": () => admin_tickets_updated_col,
	"admin.tickets.user_col": () => admin_tickets_user_col,
	"admin.title": () => admin_title,
	"admin.users.actions_col": () => admin_users_actions_col,
	"admin.users.all_users": () => admin_users_all_users,
	"admin.users.count": () => admin_users_count,
	"admin.users.credits_action_deduct": () => admin_users_credits_action_deduct,
	"admin.users.credits_action_grant": () => admin_users_credits_action_grant,
	"admin.users.credits_amount_label": () => admin_users_credits_amount_label,
	"admin.users.credits_col": () => admin_users_credits_col,
	"admin.users.credits_deducted": () => admin_users_credits_deducted,
	"admin.users.credits_desc_label": () => admin_users_credits_desc_label,
	"admin.users.credits_desc_placeholder": () => admin_users_credits_desc_placeholder,
	"admin.users.credits_granted": () => admin_users_credits_granted,
	"admin.users.credits_invalid_amount": () => admin_users_credits_invalid_amount,
	"admin.users.credits_submit": () => admin_users_credits_submit,
	"admin.users.credits_submitting": () => admin_users_credits_submitting,
	"admin.users.description": () => admin_users_description,
	"admin.users.email_col": () => admin_users_email_col,
	"admin.users.ip_col": () => admin_users_ip_col,
	"admin.users.joined_col": () => admin_users_joined_col,
	"admin.users.manage_credits_for": () => admin_users_manage_credits_for,
	"admin.users.manage_credits_title": () => admin_users_manage_credits_title,
	"admin.users.manage_roles": () => admin_users_manage_roles,
	"admin.users.manage_roles_description": () => admin_users_manage_roles_description,
	"admin.users.manage_roles_title": () => admin_users_manage_roles_title,
	"admin.users.no_users": () => admin_users_no_users,
	"admin.users.role_assigned": () => admin_users_role_assigned,
	"admin.users.role_removed": () => admin_users_role_removed,
	"admin.users.source_col": () => admin_users_source_col,
	"admin.users.title": () => admin_users_title,
	"admin.users.user_col": () => admin_users_user_col,
	"blog.back_to_blog": () => blog_back_to_blog,
	"blog.description": () => blog_description,
	"blog.no_posts": () => blog_no_posts,
	"blog.read_more": () => blog_read_more,
	"blog.title": () => blog_title,
	"common.auth_callback.error": () => common_auth_callback_error,
	"common.auth_callback.redirecting": () => common_auth_callback_redirecting,
	"common.error.message": () => common_error_message,
	"common.error.retry": () => common_error_retry,
	"common.error.title": () => common_error_title,
	"common.metadata.description": () => common_metadata_description,
	"common.metadata.title": () => common_metadata_title,
	"common.nav.apikeys": () => common_nav_apikeys,
	"common.nav.billing": () => common_nav_billing,
	"common.nav.get_started": () => common_nav_get_started,
	"common.nav.profile": () => common_nav_profile,
	"common.nav.settings": () => common_nav_settings,
	"common.nav.sign_in": () => common_nav_sign_in,
	"common.nav.theme_dark": () => common_nav_theme_dark,
	"common.nav.theme_light": () => common_nav_theme_light,
	"common.nav.theme_system": () => common_nav_theme_system,
	"common.not_found.back_home": () => common_not_found_back_home,
	"common.not_found.message": () => common_not_found_message,
	"common.pages.back_to_home": () => common_pages_back_to_home,
	"common.pages.last_updated": () => common_pages_last_updated,
	"common.pricing.choose_payment": () => common_pricing_choose_payment,
	"common.pricing.choose_payment_desc": () => common_pricing_choose_payment_desc,
	"common.pricing.get_started": () => common_pricing_get_started,
	"common.pricing.payment_for": () => common_pricing_payment_for,
	"common.pricing.payment_for_plan": () => common_pricing_payment_for_plan,
	"common.pricing.processing": () => common_pricing_processing,
	"common.search.placeholder": () => common_search_placeholder,
	"common.sign.already_have_account": () => common_sign_already_have_account,
	"common.sign.back_to_sign_in": () => common_sign_back_to_sign_in,
	"common.sign.confirm_new_password_placeholder": () => common_sign_confirm_new_password_placeholder,
	"common.sign.confirm_password_placeholder": () => common_sign_confirm_password_placeholder,
	"common.sign.confirm_password_title": () => common_sign_confirm_password_title,
	"common.sign.email_placeholder": () => common_sign_email_placeholder,
	"common.sign.email_title": () => common_sign_email_title,
	"common.sign.forgot_password": () => common_sign_forgot_password,
	"common.sign.forgot_password_description": () => common_sign_forgot_password_description,
	"common.sign.forgot_password_title": () => common_sign_forgot_password_title,
	"common.sign.github_sign_in": () => common_sign_github_sign_in,
	"common.sign.google_sign_in": () => common_sign_google_sign_in,
	"common.sign.invite_code_invalid": () => common_sign_invite_code_invalid,
	"common.sign.invite_code_placeholder": () => common_sign_invite_code_placeholder,
	"common.sign.invite_code_required": () => common_sign_invite_code_required,
	"common.sign.invite_code_title": () => common_sign_invite_code_title,
	"common.sign.name_placeholder": () => common_sign_name_placeholder,
	"common.sign.name_title": () => common_sign_name_title,
	"common.sign.new_password_placeholder": () => common_sign_new_password_placeholder,
	"common.sign.new_password_title": () => common_sign_new_password_title,
	"common.sign.no_account": () => common_sign_no_account,
	"common.sign.no_methods_description": () => common_sign_no_methods_description,
	"common.sign.no_methods_title": () => common_sign_no_methods_title,
	"common.sign.or": () => common_sign_or,
	"common.sign.password_mismatch": () => common_sign_password_mismatch,
	"common.sign.password_placeholder": () => common_sign_password_placeholder,
	"common.sign.password_reset_unavailable_description": () => common_sign_password_reset_unavailable_description,
	"common.sign.password_reset_unavailable_title": () => common_sign_password_reset_unavailable_title,
	"common.sign.password_title": () => common_sign_password_title,
	"common.sign.redeem_description": () => common_sign_redeem_description,
	"common.sign.redeem_submit": () => common_sign_redeem_submit,
	"common.sign.redeem_title": () => common_sign_redeem_title,
	"common.sign.resend_verification": () => common_sign_resend_verification,
	"common.sign.resend_verification_countdown": () => common_sign_resend_verification_countdown,
	"common.sign.reset_link_sent_description": () => common_sign_reset_link_sent_description,
	"common.sign.reset_link_sent_title": () => common_sign_reset_link_sent_title,
	"common.sign.reset_password_description": () => common_sign_reset_password_description,
	"common.sign.reset_password_invalid_token": () => common_sign_reset_password_invalid_token,
	"common.sign.reset_password_missing_token": () => common_sign_reset_password_missing_token,
	"common.sign.reset_password_submit": () => common_sign_reset_password_submit,
	"common.sign.reset_password_success": () => common_sign_reset_password_success,
	"common.sign.reset_password_title": () => common_sign_reset_password_title,
	"common.sign.send_reset_link": () => common_sign_send_reset_link,
	"common.sign.sign_in_description": () => common_sign_sign_in_description,
	"common.sign.sign_in_title": () => common_sign_sign_in_title,
	"common.sign.sign_out_title": () => common_sign_sign_out_title,
	"common.sign.sign_up_description": () => common_sign_sign_up_description,
	"common.sign.sign_up_title": () => common_sign_sign_up_title,
	"common.sign.verify_email_continue": () => common_sign_verify_email_continue,
	"common.sign.verify_email_email_required": () => common_sign_verify_email_email_required,
	"common.sign.verify_email_not_verified_yet": () => common_sign_verify_email_not_verified_yet,
	"common.sign.verify_email_page_description": () => common_sign_verify_email_page_description,
	"common.sign.verify_email_page_title": () => common_sign_verify_email_page_title,
	"common.sign.verify_email_send_failed": () => common_sign_verify_email_send_failed,
	"common.sign.verify_email_tip": () => common_sign_verify_email_tip,
	"common.support.attachments_label": () => common_support_attachments_label,
	"common.support.cancel": () => common_support_cancel,
	"common.support.content_label": () => common_support_content_label,
	"common.support.content_placeholder": () => common_support_content_placeholder,
	"common.support.description": () => common_support_description,
	"common.support.open_label": () => common_support_open_label,
	"common.support.required": () => common_support_required,
	"common.support.sign_in": () => common_support_sign_in,
	"common.support.sign_in_notice": () => common_support_sign_in_notice,
	"common.support.submit": () => common_support_submit,
	"common.support.submitting": () => common_support_submitting,
	"common.support.success": () => common_support_success,
	"common.support.title": () => common_support_title,
	"common.support.title_label": () => common_support_title_label,
	"common.support.title_placeholder": () => common_support_title_placeholder,
	"common.support.track_hint_link": () => common_support_track_hint_link,
	"common.support.track_hint_prefix": () => common_support_track_hint_prefix,
	"common.systems.admin": () => common_systems_admin,
	"common.systems.home": () => common_systems_home,
	"common.systems.label": () => common_systems_label,
	"common.systems.settings": () => common_systems_settings,
	"common.table.next": () => common_table_next,
	"common.table.no_data": () => common_table_no_data,
	"common.table.page_info": () => common_table_page_info,
	"common.table.previous": () => common_table_previous,
	"common.table.refresh": () => common_table_refresh,
	"common.table.total": () => common_table_total,
	"landing.blog.description": () => landing_blog_description,
	"landing.blog.title": () => landing_blog_title,
	"landing.blog.view_all": () => landing_blog_view_all,
	"landing.chips.apikeys": () => landing_chips_apikeys,
	"landing.chips.auth": () => landing_chips_auth,
	"landing.chips.cms": () => landing_chips_cms,
	"landing.chips.credits": () => landing_chips_credits,
	"landing.chips.i18n": () => landing_chips_i18n,
	"landing.chips.payment": () => landing_chips_payment,
	"landing.chips.rbac": () => landing_chips_rbac,
	"landing.chips.subscription": () => landing_chips_subscription,
	"landing.cta.button": () => landing_cta_button,
	"landing.cta.headline": () => landing_cta_headline,
	"landing.cta.subheadline": () => landing_cta_subheadline,
	"landing.faq.customize.answer": () => landing_faq_customize_answer,
	"landing.faq.customize.question": () => landing_faq_customize_question,
	"landing.faq.database.answer": () => landing_faq_database_answer,
	"landing.faq.database.question": () => landing_faq_database_question,
	"landing.faq.description": () => landing_faq_description,
	"landing.faq.license.answer": () => landing_faq_license_answer,
	"landing.faq.license.question": () => landing_faq_license_question,
	"landing.faq.payment.answer": () => landing_faq_payment_answer,
	"landing.faq.payment.question": () => landing_faq_payment_question,
	"landing.faq.stack.answer": () => landing_faq_stack_answer,
	"landing.faq.stack.question": () => landing_faq_stack_question,
	"landing.faq.title": () => landing_faq_title,
	"landing.features.auth.description": () => landing_features_auth_description,
	"landing.features.auth.title": () => landing_features_auth_title,
	"landing.features.cms.description": () => landing_features_cms_description,
	"landing.features.cms.title": () => landing_features_cms_title,
	"landing.features.credits.description": () => landing_features_credits_description,
	"landing.features.credits.title": () => landing_features_credits_title,
	"landing.features.description": () => landing_features_description,
	"landing.features.i18n.description": () => landing_features_i18n_description,
	"landing.features.i18n.title": () => landing_features_i18n_title,
	"landing.features.payment.description": () => landing_features_payment_description,
	"landing.features.payment.title": () => landing_features_payment_title,
	"landing.features.rbac.description": () => landing_features_rbac_description,
	"landing.features.rbac.title": () => landing_features_rbac_title,
	"landing.features.title": () => landing_features_title,
	"landing.footer.admin": () => landing_footer_admin,
	"landing.footer.blog": () => landing_footer_blog,
	"landing.footer.browse": () => landing_footer_browse,
	"landing.footer.contact": () => landing_footer_contact,
	"landing.footer.docs": () => landing_footer_docs,
	"landing.footer.feature": () => landing_footer_feature,
	"landing.footer.github": () => landing_footer_github,
	"landing.footer.legal": () => landing_footer_legal,
	"landing.footer.privacy": () => landing_footer_privacy,
	"landing.footer.product": () => landing_footer_product,
	"landing.footer.resources": () => landing_footer_resources,
	"landing.footer.settings": () => landing_footer_settings,
	"landing.footer.tagline": () => landing_footer_tagline,
	"landing.footer.terms": () => landing_footer_terms,
	"landing.hero.cta": () => landing_hero_cta,
	"landing.hero.headline": () => landing_hero_headline,
	"landing.hero.secondary": () => landing_hero_secondary,
	"landing.hero.subheadline": () => landing_hero_subheadline,
	"landing.nav.blog": () => landing_nav_blog,
	"landing.nav.features": () => landing_nav_features,
	"landing.nav.pricing": () => landing_nav_pricing,
	"landing.notice.description": () => landing_notice_description,
	"landing.notice.title": () => landing_notice_title,
	"landing.pricing.best_value": () => landing_pricing_best_value,
	"landing.pricing.buy_lifetime": () => landing_pricing_buy_lifetime,
	"landing.pricing.description": () => landing_pricing_description,
	"landing.pricing.enterprise": () => landing_pricing_enterprise,
	"landing.pricing.enterprise_desc": () => landing_pricing_enterprise_desc,
	"landing.pricing.feature_1_project": () => landing_pricing_feature_1_project,
	"landing.pricing.feature_50k_credits": () => landing_pricing_feature_50k_credits,
	"landing.pricing.feature_5k_credits": () => landing_pricing_feature_5k_credits,
	"landing.pricing.feature_api_access": () => landing_pricing_feature_api_access,
	"landing.pricing.feature_custom_integrations": () => landing_pricing_feature_custom_integrations,
	"landing.pricing.feature_dedicated_support": () => landing_pricing_feature_dedicated_support,
	"landing.pricing.feature_email_support": () => landing_pricing_feature_email_support,
	"landing.pricing.feature_everything_pro": () => landing_pricing_feature_everything_pro,
	"landing.pricing.feature_priority_support": () => landing_pricing_feature_priority_support,
	"landing.pricing.feature_unlimited_credits": () => landing_pricing_feature_unlimited_credits,
	"landing.pricing.feature_unlimited_projects": () => landing_pricing_feature_unlimited_projects,
	"landing.pricing.lifetime": () => landing_pricing_lifetime,
	"landing.pricing.monthly": () => landing_pricing_monthly,
	"landing.pricing.popular": () => landing_pricing_popular,
	"landing.pricing.pro": () => landing_pricing_pro,
	"landing.pricing.pro_desc": () => landing_pricing_pro_desc,
	"landing.pricing.starter": () => landing_pricing_starter,
	"landing.pricing.starter_desc": () => landing_pricing_starter_desc,
	"landing.pricing.title": () => landing_pricing_title,
	"landing.pricing.yearly": () => landing_pricing_yearly,
	"settings.apikeys.actions_col": () => settings_apikeys_actions_col,
	"settings.apikeys.cancel": () => settings_apikeys_cancel,
	"settings.apikeys.confirm_delete": () => settings_apikeys_confirm_delete,
	"settings.apikeys.copied": () => settings_apikeys_copied,
	"settings.apikeys.copy_failed": () => settings_apikeys_copy_failed,
	"settings.apikeys.create": () => settings_apikeys_create,
	"settings.apikeys.create_description": () => settings_apikeys_create_description,
	"settings.apikeys.create_key": () => settings_apikeys_create_key,
	"settings.apikeys.create_title": () => settings_apikeys_create_title,
	"settings.apikeys.created": () => settings_apikeys_created,
	"settings.apikeys.created_col": () => settings_apikeys_created_col,
	"settings.apikeys.created_title": () => settings_apikeys_created_title,
	"settings.apikeys.created_warning": () => settings_apikeys_created_warning,
	"settings.apikeys.creating": () => settings_apikeys_creating,
	"settings.apikeys.delete_description": () => settings_apikeys_delete_description,
	"settings.apikeys.delete_failed": () => settings_apikeys_delete_failed,
	"settings.apikeys.delete_title": () => settings_apikeys_delete_title,
	"settings.apikeys.deleted": () => settings_apikeys_deleted,
	"settings.apikeys.deleting": () => settings_apikeys_deleting,
	"settings.apikeys.description": () => settings_apikeys_description,
	"settings.apikeys.done": () => settings_apikeys_done,
	"settings.apikeys.failed": () => settings_apikeys_failed,
	"settings.apikeys.key_col": () => settings_apikeys_key_col,
	"settings.apikeys.key_copied": () => settings_apikeys_key_copied,
	"settings.apikeys.key_name": () => settings_apikeys_key_name,
	"settings.apikeys.key_name_placeholder": () => settings_apikeys_key_name_placeholder,
	"settings.apikeys.last_used_col": () => settings_apikeys_last_used_col,
	"settings.apikeys.name_col": () => settings_apikeys_name_col,
	"settings.apikeys.never_used": () => settings_apikeys_never_used,
	"settings.apikeys.no_keys": () => settings_apikeys_no_keys,
	"settings.apikeys.title": () => settings_apikeys_title,
	"settings.apikeys.your_keys": () => settings_apikeys_your_keys,
	"settings.apikeys.your_keys_description": () => settings_apikeys_your_keys_description,
	"settings.billing.actions_col": () => settings_billing_actions_col,
	"settings.billing.adjust": () => settings_billing_adjust,
	"settings.billing.amount": () => settings_billing_amount,
	"settings.billing.cancel": () => settings_billing_cancel,
	"settings.billing.cancel_back": () => settings_billing_cancel_back,
	"settings.billing.cancel_confirm": () => settings_billing_cancel_confirm,
	"settings.billing.cancel_description": () => settings_billing_cancel_description,
	"settings.billing.cancel_failed": () => settings_billing_cancel_failed,
	"settings.billing.cancel_success": () => settings_billing_cancel_success,
	"settings.billing.cancel_title": () => settings_billing_cancel_title,
	"settings.billing.canceled_at": () => settings_billing_canceled_at,
	"settings.billing.canceled_end_at": () => settings_billing_canceled_end_at,
	"settings.billing.canceled_reason": () => settings_billing_canceled_reason,
	"settings.billing.canceling": () => settings_billing_canceling,
	"settings.billing.close": () => settings_billing_close,
	"settings.billing.credits": () => settings_billing_credits,
	"settings.billing.credits_description": () => settings_billing_credits_description,
	"settings.billing.current_period": () => settings_billing_current_period,
	"settings.billing.date": () => settings_billing_date,
	"settings.billing.description": () => settings_billing_description,
	"settings.billing.end_time": () => settings_billing_end_time,
	"settings.billing.ends_on": () => settings_billing_ends_on,
	"settings.billing.interval": () => settings_billing_interval,
	"settings.billing.no_payments": () => settings_billing_no_payments,
	"settings.billing.no_subscription": () => settings_billing_no_subscription,
	"settings.billing.order_no": () => settings_billing_order_no,
	"settings.billing.payments": () => settings_billing_payments,
	"settings.billing.period_end": () => settings_billing_period_end,
	"settings.billing.period_start": () => settings_billing_period_start,
	"settings.billing.plan": () => settings_billing_plan,
	"settings.billing.provider": () => settings_billing_provider,
	"settings.billing.renews_on": () => settings_billing_renews_on,
	"settings.billing.status": () => settings_billing_status,
	"settings.billing.subscribe": () => settings_billing_subscribe,
	"settings.billing.subscription": () => settings_billing_subscription,
	"settings.billing.subscription_details": () => settings_billing_subscription_details,
	"settings.billing.subscription_no": () => settings_billing_subscription_no,
	"settings.billing.subscriptions": () => settings_billing_subscriptions,
	"settings.billing.tab_active": () => settings_billing_tab_active,
	"settings.billing.tab_all": () => settings_billing_tab_all,
	"settings.billing.tab_canceled": () => settings_billing_tab_canceled,
	"settings.billing.tab_expired": () => settings_billing_tab_expired,
	"settings.billing.tab_paused": () => settings_billing_tab_paused,
	"settings.billing.tab_pending_cancel": () => settings_billing_tab_pending_cancel,
	"settings.billing.tab_trialing": () => settings_billing_tab_trialing,
	"settings.billing.title": () => settings_billing_title,
	"settings.billing.view": () => settings_billing_view,
	"settings.credits.balance": () => settings_credits_balance,
	"settings.credits.credits": () => settings_credits_credits,
	"settings.credits.date": () => settings_credits_date,
	"settings.credits.description": () => settings_credits_description,
	"settings.credits.description_col": () => settings_credits_description_col,
	"settings.credits.expires_at": () => settings_credits_expires_at,
	"settings.credits.no_records": () => settings_credits_no_records,
	"settings.credits.purchase": () => settings_credits_purchase,
	"settings.credits.remaining": () => settings_credits_remaining,
	"settings.credits.scene": () => settings_credits_scene,
	"settings.credits.tab_all": () => settings_credits_tab_all,
	"settings.credits.tab_consume": () => settings_credits_tab_consume,
	"settings.credits.tab_grant": () => settings_credits_tab_grant,
	"settings.credits.title": () => settings_credits_title,
	"settings.credits.transaction_no": () => settings_credits_transaction_no,
	"settings.credits.type": () => settings_credits_type,
	"settings.nav.apikeys": () => settings_nav_apikeys,
	"settings.nav.billing": () => settings_nav_billing,
	"settings.nav.credits": () => settings_nav_credits,
	"settings.nav.overview": () => settings_nav_overview,
	"settings.nav.payments": () => settings_nav_payments,
	"settings.nav.profile": () => settings_nav_profile,
	"settings.nav.tickets": () => settings_nav_tickets,
	"settings.overview.apikeys_description": () => settings_overview_apikeys_description,
	"settings.overview.getting_started": () => settings_overview_getting_started,
	"settings.overview.getting_started_description": () => settings_overview_getting_started_description,
	"settings.overview.plan": () => settings_overview_plan,
	"settings.overview.plan_description": () => settings_overview_plan_description,
	"settings.overview.plan_free": () => settings_overview_plan_free,
	"settings.overview.usage": () => settings_overview_usage,
	"settings.overview.usage_description": () => settings_overview_usage_description,
	"settings.payments.amount": () => settings_payments_amount,
	"settings.payments.date": () => settings_payments_date,
	"settings.payments.description": () => settings_payments_description,
	"settings.payments.invoice": () => settings_payments_invoice,
	"settings.payments.no_payments": () => settings_payments_no_payments,
	"settings.payments.order_no": () => settings_payments_order_no,
	"settings.payments.product": () => settings_payments_product,
	"settings.payments.provider": () => settings_payments_provider,
	"settings.payments.status": () => settings_payments_status,
	"settings.payments.tab_all": () => settings_payments_tab_all,
	"settings.payments.tab_one_time": () => settings_payments_tab_one_time,
	"settings.payments.tab_renew": () => settings_payments_tab_renew,
	"settings.payments.tab_subscription": () => settings_payments_tab_subscription,
	"settings.payments.title": () => settings_payments_title,
	"settings.payments.type": () => settings_payments_type,
	"settings.placeholder": () => settings_placeholder,
	"settings.profile.avatar": () => settings_profile_avatar,
	"settings.profile.avatar_hint": () => settings_profile_avatar_hint,
	"settings.profile.description": () => settings_profile_description,
	"settings.profile.email": () => settings_profile_email,
	"settings.profile.loading": () => settings_profile_loading,
	"settings.profile.name": () => settings_profile_name,
	"settings.profile.profile": () => settings_profile_profile,
	"settings.profile.save": () => settings_profile_save,
	"settings.profile.save_failed": () => settings_profile_save_failed,
	"settings.profile.saved": () => settings_profile_saved,
	"settings.profile.saving": () => settings_profile_saving,
	"settings.profile.title": () => settings_profile_title,
	"settings.tickets.actions_col": () => settings_tickets_actions_col,
	"settings.tickets.attachments_label": () => settings_tickets_attachments_label,
	"settings.tickets.cancel": () => settings_tickets_cancel,
	"settings.tickets.close_success": () => settings_tickets_close_success,
	"settings.tickets.close_ticket": () => settings_tickets_close_ticket,
	"settings.tickets.closed_notice": () => settings_tickets_closed_notice,
	"settings.tickets.content_label": () => settings_tickets_content_label,
	"settings.tickets.content_placeholder": () => settings_tickets_content_placeholder,
	"settings.tickets.create_button": () => settings_tickets_create_button,
	"settings.tickets.create_description": () => settings_tickets_create_description,
	"settings.tickets.create_submit": () => settings_tickets_create_submit,
	"settings.tickets.create_success": () => settings_tickets_create_success,
	"settings.tickets.create_title": () => settings_tickets_create_title,
	"settings.tickets.created_col": () => settings_tickets_created_col,
	"settings.tickets.creating": () => settings_tickets_creating,
	"settings.tickets.description": () => settings_tickets_description,
	"settings.tickets.empty": () => settings_tickets_empty,
	"settings.tickets.latest_reply_col": () => settings_tickets_latest_reply_col,
	"settings.tickets.reply_placeholder": () => settings_tickets_reply_placeholder,
	"settings.tickets.reply_submit": () => settings_tickets_reply_submit,
	"settings.tickets.replying": () => settings_tickets_replying,
	"settings.tickets.required": () => settings_tickets_required,
	"settings.tickets.status_closed": () => settings_tickets_status_closed,
	"settings.tickets.status_col": () => settings_tickets_status_col,
	"settings.tickets.status_open": () => settings_tickets_status_open,
	"settings.tickets.status_replied": () => settings_tickets_status_replied,
	"settings.tickets.support_team": () => settings_tickets_support_team,
	"settings.tickets.title": () => settings_tickets_title,
	"settings.tickets.title_col": () => settings_tickets_title_col,
	"settings.tickets.title_label": () => settings_tickets_title_label,
	"settings.tickets.title_placeholder": () => settings_tickets_title_placeholder,
	"settings.tickets.updated_col": () => settings_tickets_updated_col,
	"settings.tickets.you": () => settings_tickets_you,
	"settings.title": () => settings_title,
	"settings.welcome": () => settings_welcome,
	"wiki.categories.classes.description": () => wiki_categories_classes_description,
	"wiki.categories.classes.title": () => wiki_categories_classes_title,
	"wiki.categories.items.description": () => wiki_categories_items_description,
	"wiki.categories.items.title": () => wiki_categories_items_title,
	"wiki.categories.npcs.description": () => wiki_categories_npcs_description,
	"wiki.categories.npcs.title": () => wiki_categories_npcs_title,
	"wiki.categories.quests.description": () => wiki_categories_quests_description,
	"wiki.categories.quests.title": () => wiki_categories_quests_title,
	"wiki.categories.races.description": () => wiki_categories_races_description,
	"wiki.categories.races.title": () => wiki_categories_races_title,
	"wiki.categories.zones.description": () => wiki_categories_zones_description,
	"wiki.categories.zones.title": () => wiki_categories_zones_title,
	"wiki.hub.eyebrow": () => wiki_hub_eyebrow,
	"wiki.hub.placeholder_body": () => wiki_hub_placeholder_body,
	"wiki.hub.placeholder_title": () => wiki_hub_placeholder_title,
	"wiki.nav.about": () => wiki_nav_about,
	"wiki.nav.classes": () => wiki_nav_classes,
	"wiki.nav.items": () => wiki_nav_items,
	"wiki.nav.npcs": () => wiki_nav_npcs,
	"wiki.nav.quests": () => wiki_nav_quests,
	"wiki.nav.races": () => wiki_nav_races,
	"wiki.nav.search": () => wiki_nav_search,
	"wiki.nav.zones": () => wiki_nav_zones,
	"wiki.search.category.class": () => wiki_search_category_class,
	"wiki.search.category.dungeon": () => wiki_search_category_dungeon,
	"wiki.search.category.page": () => wiki_search_category_page,
	"wiki.search.category.race": () => wiki_search_category_race,
	"wiki.search.category.racial": () => wiki_search_category_racial,
	"wiki.search.category.raid": () => wiki_search_category_raid,
	"wiki.search.category.talent": () => wiki_search_category_talent,
	"wiki.search.description": () => wiki_search_description,
	"wiki.search.empty": () => wiki_search_empty,
	"wiki.search.placeholder": () => wiki_search_placeholder,
	"wiki.search.results_count": () => wiki_search_results_count,
	"wiki.search.submit": () => wiki_search_submit,
	"wiki.search.title": () => wiki_search_title
});
//#endregion
export { admin_invite_codes_creating as $, common_sign_or as $a, settings_overview_apikeys_description as $c, admin_users_description as $i, settings_tickets_status_col as $l, admin_posts_slug_field as $n, common_table_total as $o, admin_settings_save_success as $r, settings_billing_actions_col as $s, admin_permissions_action_field as $t, admin_credits_amount as A, common_sign_already_have_account as Aa, settings_billing_subscription_no as Ac, admin_tickets_reply_placeholder as Ai, settings_profile_title as Al, admin_posts_author_placeholder as An, common_support_cancel as Ao, admin_roles_name_placeholder as Ar, settings_apikeys_create_description as As, admin_nav_subscriptions as At, admin_credits_user as B, common_sign_github_sign_in as Ba, settings_credits_purchase as Bc, admin_title as Bi, settings_tickets_create_description as Bl, admin_posts_created as Bn, common_support_success as Bo, admin_settings_custom_description as Br, settings_apikeys_deleted as Bs, admin_payments_order_no as Bt, admin_categories_slug_placeholder as C, common_pricing_choose_payment as Ca, settings_billing_plan as Cc, admin_tickets_admin as Ci, settings_profile_loading as Cl, admin_permissions_title_col as Cn, common_sign_verify_email_email_required as Co, admin_roles_description_placeholder as Cr, landing_pricing_title as Cs, admin_nav_overview as Ct, admin_categories_title_field as D, common_pricing_payment_for_plan as Da, settings_billing_subscribe as Dc, admin_tickets_empty as Di, settings_profile_save_failed as Dl, admin_posts_actions_col as Dn, common_sign_verify_email_send_failed as Do, admin_roles_manage_permissions_title as Dr, settings_apikeys_confirm_delete as Ds, admin_nav_rbac as Dt, admin_categories_title_col as E, common_pricing_payment_for as Ea, settings_billing_status as Ec, admin_tickets_description as Ei, settings_profile_save as El, admin_permissions_updated as En, common_sign_verify_email_page_title as Eo, admin_roles_manage_permissions_description as Er, settings_apikeys_cancel as Es, admin_nav_posts as Et, admin_credits_remaining as F, common_sign_email_placeholder as Fa, settings_credits_date as Fc, admin_tickets_status_updated as Fi, settings_tickets_close_ticket as Fl, admin_posts_content_field as Fn, common_support_required as Fo, admin_roles_title_col as Fr, settings_apikeys_created_title as Fs, admin_payments_created_at as Ft, admin_invite_codes_copied as G, common_sign_invite_code_title as Ga, settings_credits_type as Gc, admin_users_credits_col as Gi, settings_tickets_creating as Gl, admin_posts_description as Gn, common_support_track_hint_prefix as Go, admin_settings_custom_value_placeholder as Gr, settings_apikeys_key_copied as Gs, admin_payments_status as Gt, admin_invite_codes_actions_col as H, common_sign_invite_code_invalid as Ha, settings_credits_scene as Hc, admin_users_credits_action_deduct as Hi, settings_tickets_create_success as Hl, admin_posts_delete_confirm as Hn, common_support_title_label as Ho, admin_settings_custom_key_placeholder as Hr, settings_apikeys_description as Hs, admin_payments_save as Ht, admin_credits_scene as I, common_sign_email_title as Ia, settings_credits_description as Ic, admin_tickets_title as Ii, settings_tickets_closed_notice as Il, admin_posts_content_placeholder as In, common_support_sign_in as Io, admin_roles_title_field as Ir, settings_apikeys_created_warning as Is, admin_payments_description as It, admin_invite_codes_create_description as J, common_sign_new_password_placeholder as Ja, settings_nav_credits as Jc, admin_users_credits_desc_placeholder as Ji, settings_tickets_latest_reply_col as Jl, admin_posts_edit_description as Jn, common_systems_settings as Jo, admin_settings_placeholders_creem_test_amount as Jr, settings_apikeys_last_used_col as Js, admin_payments_title as Jt, admin_invite_codes_count_label as K, common_sign_name_placeholder as Ka, settings_nav_apikeys as Kc, admin_users_credits_deducted as Ki, settings_tickets_description as Kl, admin_posts_description_field as Kn, common_systems_admin as Ko, admin_settings_description as Kr, settings_apikeys_key_name as Ks, admin_payments_status_label as Kt, admin_credits_title as L, common_sign_forgot_password as La, settings_credits_description_col as Lc, admin_tickets_title_col as Li, settings_tickets_content_label as Ll, admin_posts_create as Ln, common_support_sign_in_notice as Lo, admin_roles_title_placeholder as Lr, settings_apikeys_creating as Ls, admin_payments_edit_description as Lt, admin_credits_description as M, common_sign_confirm_new_password_placeholder as Ma, settings_billing_view as Mc, admin_tickets_reply_success as Mi, settings_tickets_attachments_label as Ml, admin_posts_category_field as Mn, common_support_content_placeholder as Mo, admin_roles_permissions_saved as Mr, settings_apikeys_create_title as Ms, admin_nav_users as Mt, admin_credits_expires_at as N, common_sign_confirm_password_placeholder as Na, settings_credits_balance as Nc, admin_tickets_replying as Ni, settings_tickets_cancel as Nl, admin_posts_category_placeholder as Nn, common_support_description as No, admin_roles_save as Nr, settings_apikeys_created as Ns, admin_payments_amount as Nt, admin_categories_title_placeholder as O, common_pricing_processing as Oa, settings_billing_subscription as Oc, admin_tickets_latest_reply_col as Oi, settings_profile_saved as Ol, admin_posts_author_col as On, common_sign_verify_email_tip as Oo, admin_roles_name_col as Or, settings_apikeys_copy_failed as Os, admin_nav_roles as Ot, admin_credits_no_credits as P, common_sign_confirm_password_title as Pa, settings_credits_credits as Pc, admin_tickets_status_col as Pi, settings_tickets_close_success as Pl, admin_posts_confirm_delete as Pn, common_support_open_label as Po, admin_roles_title as Pr, settings_apikeys_created_col as Ps, admin_payments_cancel as Pt, admin_invite_codes_created_col as Q, common_sign_no_methods_title as Qa, settings_nav_tickets as Qc, admin_users_credits_submitting as Qi, settings_tickets_required as Ql, admin_posts_slug_col as Qn, common_table_refresh as Qo, admin_settings_save_error as Qr, settings_apikeys_title as Qs, admin_permissions_action_col as Qt, admin_credits_transaction_no as R, common_sign_forgot_password_description as Ra, settings_credits_expires_at as Rc, admin_tickets_updated_col as Ri, settings_tickets_content_placeholder as Rl, admin_posts_create_description as Rn, common_support_submit as Ro, admin_roles_updated as Rr, settings_apikeys_delete_description as Rs, admin_payments_edit_title as Rt, admin_categories_slug_field as S, common_pages_last_updated as Sa, settings_billing_period_start as Sc, admin_tickets_actions_col as Si, settings_profile_email as Sl, admin_permissions_title as Sn, common_sign_verify_email_continue as So, admin_roles_description_field as Sr, landing_pricing_starter_desc as Ss, admin_nav_invite_codes as St, admin_categories_title as T, common_pricing_get_started as Ta, settings_billing_renews_on as Tc, admin_tickets_created_col as Ti, settings_profile_profile as Tl, admin_permissions_title_placeholder as Tn, common_sign_verify_email_page_description as To, admin_roles_edit_title as Tr, settings_apikeys_actions_col as Ts, admin_nav_permissions as Tt, admin_invite_codes_cancel as U, common_sign_invite_code_placeholder as Ua, settings_credits_title as Uc, admin_users_credits_action_grant as Ui, settings_tickets_create_title as Ul, admin_posts_delete_title as Un, common_support_title_placeholder as Uo, admin_settings_custom_remove as Ur, settings_apikeys_done as Us, admin_payments_saving as Ut, admin_description as V, common_sign_google_sign_in as Va, settings_credits_remaining as Vc, admin_users_actions_col as Vi, settings_tickets_create_submit as Vl, admin_posts_created_at as Vn, common_support_title as Vo, admin_settings_custom_empty as Vr, settings_apikeys_deleting as Vs, admin_payments_provider as Vt, admin_invite_codes_code_col as W, common_sign_invite_code_required as Wa, settings_credits_transaction_no as Wc, admin_users_credits_amount_label as Wi, settings_tickets_created_col as Wl, admin_posts_deleted as Wn, common_support_track_hint_link as Wo, admin_settings_custom_title as Wr, settings_apikeys_key_col as Ws, admin_payments_search_placeholder as Wt, admin_invite_codes_create_success as X, common_sign_no_account as Xa, settings_nav_payments as Xc, admin_users_credits_invalid_amount as Xi, settings_tickets_reply_submit as Xl, admin_posts_no_data as Xn, common_table_no_data as Xo, admin_settings_placeholders_wechat_test_amount as Xr, settings_apikeys_never_used as Xs, admin_payments_update_success as Xt, admin_invite_codes_create_submit as Y, common_sign_new_password_title as Ya, settings_nav_overview as Yc, admin_users_credits_granted as Yi, settings_tickets_reply_placeholder as Yl, admin_posts_edit_title as Yn, common_table_next as Yo, admin_settings_placeholders_paypal_test_amount as Yr, settings_apikeys_name_col as Ys, admin_payments_type as Yt, admin_invite_codes_create_title as Z, common_sign_no_methods_description as Za, settings_nav_profile as Zc, admin_users_credits_submit as Zi, settings_tickets_replying as Zl, admin_posts_save as Zn, common_table_previous as Zo, admin_settings_save as Zr, settings_apikeys_no_keys as Zs, admin_payments_user as Zt, admin_categories_edit_description as _, common_auth_callback_redirecting as _a, settings_billing_end_time as _c, admin_subscriptions_provider as _i, settings_payments_type as _l, admin_permissions_no_permissions as _n, common_sign_reset_password_title as _o, admin_roles_delete_confirm as _r, landing_pricing_monthly as _s, admin_loading as _t, wiki_search_empty as _u, admin_categories_create as a, admin_users_manage_roles_description as aa, settings_billing_cancel_description as ac, admin_settings_test_run as ai, settings_overview_usage as al, admin_permissions_code_placeholder as an, common_sign_redeem_description as ao, admin_posts_title as ar, landing_pricing_feature_1_project as as, admin_invite_codes_empty as at, settings_tickets_updated_col as au, admin_categories_save as b, common_nav_theme_light as ba, settings_billing_no_subscription as bc, admin_subscriptions_title as bi, settings_profile_avatar_hint as bl, admin_permissions_resource_placeholder as bn, common_sign_sign_out_title as bo, admin_roles_description as br, landing_pricing_pro_desc as bs, admin_nav_content as bt, wiki_search_submit as bu, admin_categories_created as c, admin_users_role_assigned as ca, settings_billing_cancel_title as cc, admin_settings_title as ci, settings_payments_date as cl, admin_permissions_create_permission as cn, common_sign_resend_verification as co, admin_posts_title_placeholder as cr, landing_pricing_feature_api_access as cs, admin_invite_codes_invalid_input as ct, settings_welcome as cu, admin_categories_delete_title as d, admin_users_title as da, settings_billing_canceled_reason as dc, admin_subscriptions_amount as di, settings_payments_no_payments as dl, admin_permissions_delete_confirm as dn, common_sign_reset_link_sent_title as do, admin_roles_cancel as dr, landing_pricing_feature_email_support as ds, admin_invite_codes_note_label as dt, wiki_search_category_page as du, admin_users_email_col as ea, settings_billing_adjust as ec, admin_settings_saving as ei, settings_overview_getting_started as el, admin_permissions_action_placeholder as en, common_sign_password_mismatch as eo, admin_posts_slug_placeholder as er, landing_pricing_best_value as es, admin_invite_codes_delete_confirm as et, settings_tickets_support_team as eu, admin_categories_deleted as f, admin_users_user_col as fa, settings_billing_canceling as fc, admin_subscriptions_created_at as fi, settings_payments_order_no as fl, admin_permissions_delete_title as fn, common_sign_reset_password_description as fo, admin_roles_confirm_delete as fr, landing_pricing_feature_everything_pro as fs, admin_invite_codes_note_placeholder as ft, wiki_search_category_race as fu, admin_categories_description_placeholder as g, common_auth_callback_error as ga, settings_billing_description as gc, admin_subscriptions_period as gi, settings_payments_title as gl, admin_permissions_edit_title as gn, common_sign_reset_password_success as go, admin_roles_created as gr, landing_pricing_lifetime as gs, admin_invite_codes_usage_col as gt, wiki_search_description as gu, admin_categories_description_field as h, blog_title as ha, settings_billing_date as hc, admin_subscriptions_no_subscriptions as hi, settings_payments_status as hl, admin_permissions_edit_description as hn, common_sign_reset_password_submit as ho, admin_roles_create_title as hr, landing_pricing_feature_unlimited_projects as hs, admin_invite_codes_trial_days_label as ht, wiki_search_category_talent as hu, admin_categories_confirm_delete as i, admin_users_manage_credits_title as ia, settings_billing_cancel_confirm as ic, admin_settings_test_error as ii, settings_overview_plan_free as il, admin_permissions_code_field as in, common_sign_password_title as io, admin_posts_status_published as ir, landing_pricing_enterprise_desc as is, admin_invite_codes_description as it, settings_tickets_title_placeholder as iu, admin_credits_created_at as j, common_sign_back_to_sign_in as ja, settings_billing_title as jc, admin_tickets_reply_submit as ji, settings_tickets_actions_col as jl, admin_posts_cancel as jn, common_support_content_label as jo, admin_roles_no_roles as jr, settings_apikeys_create_key as js, admin_nav_tickets as jt, admin_categories_updated as k, common_search_placeholder as ka, settings_billing_subscription_details as kc, admin_tickets_reopen_ticket as ki, settings_profile_saving as kl, admin_posts_author_field as kn, common_support_attachments_label as ko, admin_roles_name_field as kr, settings_apikeys_create as ks, admin_nav_settings as kt, admin_categories_created_at as l, admin_users_role_removed as la, settings_billing_canceled_at as lc, admin_stats_roles as li, settings_payments_description as ll, admin_permissions_create_title as ln, common_sign_resend_verification_countdown as lo, admin_posts_updated as lr, landing_pricing_feature_custom_integrations as ls, admin_invite_codes_max_uses_label as lt, wiki_search_category_class as lu, admin_categories_description_col as m, blog_no_posts as ma, settings_billing_current_period as mc, admin_subscriptions_interval as mi, settings_payments_provider as ml, admin_permissions_description as mn, common_sign_reset_password_missing_token as mo, admin_roles_create_role as mr, landing_pricing_feature_unlimited_credits as ms, admin_invite_codes_trial_days_col as mt, wiki_search_category_raid as mu, admin_categories_actions_col as n, admin_users_joined_col as na, settings_billing_cancel as nc, admin_settings_test_close as ni, settings_overview_plan as nl, admin_permissions_cancel as nn, common_sign_password_reset_unavailable_description as no, admin_posts_status_draft as nr, landing_pricing_description as ns, admin_invite_codes_delete_success as nt, settings_tickets_title_col as nu, admin_categories_create_description as o, admin_users_manage_roles_title as oa, settings_billing_cancel_failed as oc, admin_settings_test_running as oi, settings_overview_usage_description as ol, admin_permissions_confirm_delete as on, common_sign_redeem_submit as oo, admin_posts_title_col as or, landing_pricing_feature_50k_credits as os, admin_invite_codes_expires_col as ot, settings_tickets_you as ou, admin_categories_description as p, blog_description as pa, settings_billing_close as pc, admin_subscriptions_description as pi, settings_payments_product as pl, admin_permissions_deleted as pn, common_sign_reset_password_invalid_token as po, admin_roles_create_description as pr, landing_pricing_feature_priority_support as ps, admin_invite_codes_title as pt, wiki_search_category_racial as pu, admin_invite_codes_create_button as q, common_sign_name_title as qa, settings_nav_billing as qc, admin_users_credits_desc_label as qi, settings_tickets_empty as ql, admin_posts_description_placeholder as qn, common_systems_home as qo, admin_settings_placeholders_alipay_test_amount as qr, settings_apikeys_key_name_placeholder as qs, admin_payments_tab_all as qt, admin_categories_cancel as r, admin_users_manage_credits_for as ra, settings_billing_cancel_back as rc, admin_settings_test_description as ri, settings_overview_plan_description as rl, admin_permissions_code_col as rn, common_sign_password_reset_unavailable_title as ro, admin_posts_status_field as rr, landing_pricing_enterprise as rs, admin_invite_codes_delete_title as rt, settings_tickets_title_label as ru, admin_categories_create_title as s, admin_users_no_users as sa, settings_billing_cancel_success as sc, admin_settings_test_title as si, settings_payments_amount as sl, admin_permissions_create_description as sn, common_sign_redeem_title as so, admin_posts_title_field as sr, landing_pricing_feature_5k_credits as ss, admin_invite_codes_expires_label as st, settings_title as su, _index_exports as t, admin_users_ip_col as ta, settings_billing_amount as tc, admin_settings_test_button as ti, settings_overview_getting_started_description as tl, admin_permissions_actions_col as tn, common_sign_password_placeholder as to, admin_posts_status_col as tr, landing_pricing_buy_lifetime as ts, admin_invite_codes_delete_description as tt, settings_tickets_title as tu, admin_categories_delete_confirm as u, admin_users_source_col as ua, settings_billing_canceled_end_at as uc, admin_stats_total_users as ui, settings_payments_invoice as ul, admin_permissions_created as un, common_sign_reset_link_sent_description as uo, admin_roles_actions_col as ur, landing_pricing_feature_dedicated_support as us, admin_invite_codes_note_col as ut, wiki_search_category_dungeon as uu, admin_categories_edit_title as v, common_nav_profile as va, settings_billing_ends_on as vc, admin_subscriptions_status as vi, settings_placeholder as vl, admin_permissions_resource_col as vn, common_sign_send_reset_link as vo, admin_roles_delete_title as vr, landing_pricing_popular as vs, admin_nav_billing as vt, wiki_search_placeholder as vu, admin_categories_status_col as w, common_pricing_choose_payment_desc as wa, settings_billing_provider as wc, admin_tickets_close_ticket as wi, settings_profile_name as wl, admin_permissions_title_field as wn, common_sign_verify_email_not_verified_yet as wo, admin_roles_edit_description as wr, landing_pricing_yearly as ws, admin_nav_payments as wt, admin_categories_slug_col as x, common_nav_theme_system as xa, settings_billing_period_end as xc, admin_subscriptions_user as xi, settings_profile_description as xl, admin_permissions_save as xn, common_sign_sign_up_title as xo, admin_roles_description_col as xr, landing_pricing_starter as xs, admin_nav_credits as xt, wiki_search_title as xu, admin_categories_no_data as y, common_nav_theme_dark as ya, settings_billing_interval as yc, admin_subscriptions_subscription_no as yi, settings_profile_avatar as yl, admin_permissions_resource_field as yn, common_sign_sign_in_title as yo, admin_roles_deleted as yr, landing_pricing_pro as ys, admin_nav_categories as yt, wiki_search_results_count as yu, admin_credits_type as z, common_sign_forgot_password_title as za, settings_credits_no_records as zc, admin_tickets_user_col as zi, settings_tickets_create_button as zl, admin_posts_create_title as zn, common_support_submitting as zo, admin_settings_custom_add as zr, settings_apikeys_delete_title as zs, admin_payments_no_payments as zt };
