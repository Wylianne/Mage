ace.define("ace/theme/mage",["require","exports","module","ace/lib/dom"], function(require, exports, module) {
"use strict";

exports.isDark = false;
exports.cssText = ".ace-mage .ace_gutter {\
background: #ebebeb;\
border-right: 1px solid rgb(159, 159, 159);\
color: rgb(136, 136, 136);\
}\
.ace-mage .ace_print-margin {\
width: 1px;\
background: #ebebeb;\
}\
.ace-mage {\
background-color: #FFFFFF;\
color: black;\
}\
.ace-mage .ace_fold {\
background-color: rgb(60, 76, 114);\
}\
.ace-mage .ace_cursor {\
color: black;\
}\
.ace-mage .ace_storage,\
.ace-mage .ace_keyword,\
.ace-mage .ace_variable {\
color: rgb(127, 0, 85);\
}\
.ace-mage .ace_constant.ace_buildin {\
color: rgb(88, 72, 246);\
}\
.ace-mage .ace_constant.ace_library {\
color: rgb(6, 150, 14);\
}\
.ace-mage .ace_function {\
color: rgb(60, 76, 114);\
}\
.ace-mage .ace_string {\
color: rgb(42, 0, 255);\
}\
.ace-mage .ace_comment {\
color: rgb(113, 150, 130);\
}\
.ace-mage .ace_comment.ace_doc {\
color: rgb(63, 95, 191);\
}\
.ace-mage .ace_comment.ace_doc.ace_tag {\
color: rgb(127, 159, 191);\
}\
.ace-mage .ace_constant.ace_numeric {\
color: darkblue;\
}\
.ace-mage .ace_tag {\
color: rgb(25, 118, 116);\
}\
.ace-mage .ace_type {\
color: rgb(127, 0, 127);\
}\
.ace-mage .ace_xml-pe {\
color: rgb(104, 104, 91);\
}\
.ace-mage .ace_marker-layer .ace_selection {\
background: rgb(181, 213, 255);\
}\
.ace-mage .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgb(192, 192, 192);\
}\
.ace-mage .ace_meta.ace_tag {\
color:rgb(25, 118, 116);\
}\
.ace-mage .ace_invisible {\
color: #ddd;\
}\
.ace-mage .ace_entity.ace_other.ace_attribute-name {\
color:rgb(127, 0, 127);\
}\
.ace-mage .ace_marker-layer .ace_step {\
background: rgb(255, 255, 0);\
}\
.ace-mage .ace_active-line {\
background: rgb(232, 242, 254);\
}\
.ace-mage .ace_gutter-active-line {\
background-color : #DADADA;\
}\
.ace-mage .ace_marker-layer .ace_selected-word {\
border: 1px solid rgb(181, 213, 255);\
}\
.ace-mage .ace_indent-guide {\
background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y;\
}\
.ace-mage .ace_mage {\
color:#CB6D12;\
}\
.ace-mage .ace_mage.ace_constant {\
}\
.ace-mage .ace_mage.ace_begin {\
}\
.ace-mage .ace_mage.ace_variable {\
color:#A7807A;\
font-style: italic;\
}\
.ace-mage .ace_mage.ace_directive {\
border-bottom:1px dotted #A7807A;\
}\
.ace-mage .ace_mage.ace_string {\
color:#A7807A;\
font-style: italic;\
}";




exports.cssClass = "ace-mage";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
