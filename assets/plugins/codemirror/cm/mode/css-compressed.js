CodeMirror.defineMode("css",function(h){return CodeMirror.getMode(h,"text/css")});
CodeMirror.defineMode("css-base",function(h,g){function d(e,c){k=c;return e}function l(e,c){var a=e.next();if(b[a]){var f=b[a](e,c);if(!1!==f)return f}if("@"==a)return e.eatWhile(/[\w\\\-]/),d("def",e.current());if("="==a)d(null,"compare");else{if(("~"==a||"|"==a)&&e.eat("="))return d(null,"compare");if('"'==a||"'"==a)return c.tokenize=m(a),c.tokenize(e,c);if("#"==a)return e.eatWhile(/[\w\\\-]/),d("atom","hash");if("!"==a)return e.match(/^\s*\w*/),d("keyword","important");if(/\d/.test(a))return e.eatWhile(/[\w.%]/),
d("number","unit");if("-"===a){if(/\d/.test(e.peek()))return e.eatWhile(/[\w.%]/),d("number","unit");if(e.match(/^[^-]+-/))return d("meta","meta")}else{if(/[,+>*\/]/.test(a))return d(null,"select-op");if("."==a&&e.match(/^-?[_a-z][_a-z0-9-]*/i))return d("qualifier","qualifier");if(":"==a)return d("operator",a);if(/[;{}\[\]\(\)]/.test(a))return d(null,a);"u"==a&&e.match("rl(")?(e.backUp(1),c.tokenize=n):e.eatWhile(/[\w\\\-]/);return d("property","variable")}}}function m(e,c){return function(a,f){for(var b=
!1,j;null!=(j=a.next())&&(j!=e||b);)b=!b&&"\\"==j;b||(c&&a.backUp(1),f.tokenize=l);return d("string","string")}}function n(e,c){e.next();c.tokenize=e.match(/\s*[\"\']/,!1)?l:m(")",!0);return d(null,"(")}var p=h.indentUnit,b=g.hooks||{},j=g.atMediaTypes||{},t=g.atMediaFeatures||{},q=g.propertyKeywords||{},r=g.colorKeywords||{},s=g.valueKeywords||{},u=!!g.allowNested,k=null;return{startState:function(e){return{tokenize:l,baseIndent:e||0,stack:[]}},token:function(e,c){c.tokenize=c.tokenize||l;if(c.tokenize==
l&&e.eatSpace())return null;var a=c.tokenize(e,c);a&&"string"!=typeof a&&(a=d(a[0],a[1]));var f=c.stack[c.stack.length-1];if("variable"==a)return"variable-definition"==k&&c.stack.push("propertyValue"),"variable-2";if("property"==a){var b=e.current().toLowerCase();"propertyValue"==f?a=s.hasOwnProperty(b)?"string-2":r.hasOwnProperty(b)?"keyword":"variable-2":"rule"==f?q.hasOwnProperty(b)||(a+=" error"):"block"==f?a=q.hasOwnProperty(b)?"property":r.hasOwnProperty(b)?"keyword":s.hasOwnProperty(b)?"string-2":
"tag":!f||"@media{"==f?a="tag":"@media"==f?a=j[e.current()]?"attribute":/^(only|not)$/.test(b)?"keyword":"and"==b?"error":t.hasOwnProperty(b)?"error":"attribute error":"@mediaType"==f?j.hasOwnProperty(b)?a="attribute":"and"==b?a="operator":(/^(only|not)$/.test(b),a="error"):"@mediaType("==f?q.hasOwnProperty(b)||(a=j.hasOwnProperty(b)?"error":"and"==b?"operator":/^(only|not)$/.test(b)?"error":a+" error"):a="@import"==f?"tag":"error"}else"atom"==a?!f||"@media{"==f||"block"==f?a="builtin":"propertyValue"==
f?/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e.current())||(a+=" error"):a="error":"@media"==f&&"{"==k&&(a="error");"{"==k?"@media"==f||"@mediaType"==f?(c.stack.pop(),c.stack[c.stack.length-1]="@media{"):c.stack.push(u?"block":"rule"):"}"==k?("interpolation"==c.stack[c.stack.length-1]&&(a="operator"),c.stack.pop(),"propertyValue"==f&&c.stack.pop()):"interpolation"==k?c.stack.push("interpolation"):"@media"==k?c.stack.push("@media"):"@import"==k?c.stack.push("@import"):"@media"==f&&/\b(keyword|attribute)\b/.test(a)?
c.stack.push("@mediaType"):"@mediaType"==f&&","==e.current()?c.stack.pop():"@mediaType"==f&&"("==k?c.stack.push("@mediaType("):"@mediaType("==f&&")"==k?c.stack.pop():("rule"==f||"block"==f)&&":"==k?c.stack.push("propertyValue"):"propertyValue"==f&&";"==k?c.stack.pop():"@import"==f&&";"==k&&c.stack.pop();return a},indent:function(b,c){var a=b.stack.length;/^\}/.test(c)&&(a-="propertyValue"==b.stack[b.stack.length-1]?2:1);return b.baseIndent+a*p},electricChars:"}",blockCommentStart:"/*",blockCommentEnd:"*/"}});
(function(){function h(b){for(var j={},d=0;d<b.length;++d)j[b[d]]=!0;return j}function g(b,d){for(var g=!1,h;null!=(h=b.next());){if(g&&"/"==h){d.tokenize=null;break}g="*"==h}return["comment","comment"]}var d=h("all aural braille handheld print projection screen tty tv embossed".split(" ")),l=h("width min-width max-width height min-height max-height device-width min-device-width max-device-width device-height min-device-height max-device-height aspect-ratio min-aspect-ratio max-aspect-ratio device-aspect-ratio min-device-aspect-ratio max-device-aspect-ratio color min-color max-color color-index min-color-index max-color-index monochrome min-monochrome max-monochrome resolution min-resolution max-resolution scan grid".split(" ")),
m=h("align-content align-items align-self alignment-adjust alignment-baseline anchor-point animation animation-delay animation-direction animation-duration animation-iteration-count animation-name animation-play-state animation-timing-function appearance azimuth backface-visibility background background-attachment background-clip background-color background-image background-origin background-position background-repeat background-size baseline-shift binding bleed bookmark-label bookmark-level bookmark-state bookmark-target border border-bottom border-bottom-color border-bottom-left-radius border-bottom-right-radius border-bottom-style border-bottom-width border-collapse border-color border-image border-image-outset border-image-repeat border-image-slice border-image-source border-image-width border-left border-left-color border-left-style border-left-width border-radius border-right border-right-color border-right-style border-right-width border-spacing border-style border-top border-top-color border-top-left-radius border-top-right-radius border-top-style border-top-width border-width bottom box-decoration-break box-shadow box-sizing break-after break-before break-inside caption-side clear clip color color-profile column-count column-fill column-gap column-rule column-rule-color column-rule-style column-rule-width column-span column-width columns content counter-increment counter-reset crop cue cue-after cue-before cursor direction display dominant-baseline drop-initial-after-adjust drop-initial-after-align drop-initial-before-adjust drop-initial-before-align drop-initial-size drop-initial-value elevation empty-cells fit fit-position flex flex-basis flex-direction flex-flow flex-grow flex-shrink flex-wrap float float-offset font font-feature-settings font-family font-kerning font-language-override font-size font-size-adjust font-stretch font-style font-synthesis font-variant font-variant-alternates font-variant-caps font-variant-east-asian font-variant-ligatures font-variant-numeric font-variant-position font-weight grid-cell grid-column grid-column-align grid-column-sizing grid-column-span grid-columns grid-flow grid-row grid-row-align grid-row-sizing grid-row-span grid-rows grid-template hanging-punctuation height hyphens icon image-orientation image-rendering image-resolution inline-box-align justify-content left letter-spacing line-break line-height line-stacking line-stacking-ruby line-stacking-shift line-stacking-strategy list-style list-style-image list-style-position list-style-type margin margin-bottom margin-left margin-right margin-top marker-offset marks marquee-direction marquee-loop marquee-play-count marquee-speed marquee-style max-height max-width min-height min-width move-to nav-down nav-index nav-left nav-right nav-up opacity order orphans outline outline-color outline-offset outline-style outline-width overflow overflow-style overflow-wrap overflow-x overflow-y padding padding-bottom padding-left padding-right padding-top page page-break-after page-break-before page-break-inside page-policy pause pause-after pause-before perspective perspective-origin pitch pitch-range play-during position presentation-level punctuation-trim quotes rendering-intent resize rest rest-after rest-before richness right rotation rotation-point ruby-align ruby-overhang ruby-position ruby-span size speak speak-as speak-header speak-numeral speak-punctuation speech-rate stress string-set tab-size table-layout target target-name target-new target-position text-align text-align-last text-decoration text-decoration-color text-decoration-line text-decoration-skip text-decoration-style text-emphasis text-emphasis-color text-emphasis-position text-emphasis-style text-height text-indent text-justify text-outline text-shadow text-space-collapse text-transform text-underline-position text-wrap top transform transform-origin transform-style transition transition-delay transition-duration transition-property transition-timing-function unicode-bidi vertical-align visibility voice-balance voice-duration voice-family voice-pitch voice-range voice-rate voice-stress voice-volume volume white-space widows width word-break word-spacing word-wrap z-index clip-path clip-rule mask enable-background filter flood-color flood-opacity lighting-color stop-color stop-opacity pointer-events color-interpolation color-interpolation-filters color-profile color-rendering fill fill-opacity fill-rule image-rendering marker marker-end marker-mid marker-start shape-rendering stroke stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-rendering baseline-shift dominant-baseline glyph-orientation-horizontal glyph-orientation-vertical kerning text-anchor writing-mode".split(" ")),
n=h("aliceblue antiquewhite aqua aquamarine azure beige bisque black blanchedalmond blue blueviolet brown burlywood cadetblue chartreuse chocolate coral cornflowerblue cornsilk crimson cyan darkblue darkcyan darkgoldenrod darkgray darkgreen darkkhaki darkmagenta darkolivegreen darkorange darkorchid darkred darksalmon darkseagreen darkslateblue darkslategray darkturquoise darkviolet deeppink deepskyblue dimgray dodgerblue firebrick floralwhite forestgreen fuchsia gainsboro ghostwhite gold goldenrod gray green greenyellow honeydew hotpink indianred indigo ivory khaki lavender lavenderblush lawngreen lemonchiffon lightblue lightcoral lightcyan lightgoldenrodyellow lightgray lightgreen lightpink lightsalmon lightseagreen lightskyblue lightslategray lightsteelblue lightyellow lime limegreen linen magenta maroon mediumaquamarine mediumblue mediumorchid mediumpurple mediumseagreen mediumslateblue mediumspringgreen mediumturquoise mediumvioletred midnightblue mintcream mistyrose moccasin navajowhite navy oldlace olive olivedrab orange orangered orchid palegoldenrod palegreen paleturquoise palevioletred papayawhip peachpuff peru pink plum powderblue purple red rosybrown royalblue saddlebrown salmon sandybrown seagreen seashell sienna silver skyblue slateblue slategray snow springgreen steelblue tan teal thistle tomato turquoise violet wheat white whitesmoke yellow yellowgreen".split(" ")),
p=h("above absolute activeborder activecaption afar after-white-space ahead alias all all-scroll alternate always amharic amharic-abegede antialiased appworkspace arabic-indic armenian asterisks auto avoid background backwards baseline below bidi-override binary bengali blink block block-axis bold bolder border border-box both bottom break-all break-word button button-bevel buttonface buttonhighlight buttonshadow buttontext cambodian capitalize caps-lock-indicator caption captiontext caret cell center checkbox circle cjk-earthly-branch cjk-heavenly-stem cjk-ideographic clear clip close-quote col-resize collapse compact condensed contain content content-box context-menu continuous copy cover crop cross crosshair currentcolor cursive dashed decimal decimal-leading-zero default default-button destination-atop destination-in destination-out destination-over devanagari disc discard document dot-dash dot-dot-dash dotted double down e-resize ease ease-in ease-in-out ease-out element ellipsis embed end ethiopic ethiopic-abegede ethiopic-abegede-am-et ethiopic-abegede-gez ethiopic-abegede-ti-er ethiopic-abegede-ti-et ethiopic-halehame-aa-er ethiopic-halehame-aa-et ethiopic-halehame-am-et ethiopic-halehame-gez ethiopic-halehame-om-et ethiopic-halehame-sid-et ethiopic-halehame-so-et ethiopic-halehame-ti-er ethiopic-halehame-ti-et ethiopic-halehame-tig ew-resize expanded extra-condensed extra-expanded fantasy fast fill fixed flat footnotes forwards from geometricPrecision georgian graytext groove gujarati gurmukhi hand hangul hangul-consonant hebrew help hidden hide higher highlight highlighttext hiragana hiragana-iroha horizontal hsl hsla icon ignore inactiveborder inactivecaption inactivecaptiontext infinite infobackground infotext inherit initial inline inline-axis inline-block inline-table inset inside intrinsic invert italic justify kannada katakana katakana-iroha khmer landscape lao large larger left level lighter line-through linear lines list-item listbox listitem local logical loud lower lower-alpha lower-armenian lower-greek lower-hexadecimal lower-latin lower-norwegian lower-roman lowercase ltr malayalam match media-controls-background media-current-time-display media-fullscreen-button media-mute-button media-play-button media-return-to-realtime-button media-rewind-button media-seek-back-button media-seek-forward-button media-slider media-sliderthumb media-time-remaining-display media-volume-slider media-volume-slider-container media-volume-sliderthumb medium menu menulist menulist-button menulist-text menulist-textfield menutext message-box middle min-intrinsic mix mongolian monospace move multiple myanmar n-resize narrower ne-resize nesw-resize no-close-quote no-drop no-open-quote no-repeat none normal not-allowed nowrap ns-resize nw-resize nwse-resize oblique octal open-quote optimizeLegibility optimizeSpeed oriya oromo outset outside overlay overline padding padding-box painted paused persian plus-darker plus-lighter pointer portrait pre pre-line pre-wrap preserve-3d progress push-button radio read-only read-write read-write-plaintext-only relative repeat repeat-x repeat-y reset reverse rgb rgba ridge right round row-resize rtl run-in running s-resize sans-serif scroll scrollbar se-resize searchfield searchfield-cancel-button searchfield-decoration searchfield-results-button searchfield-results-decoration semi-condensed semi-expanded separate serif show sidama single skip-white-space slide slider-horizontal slider-vertical sliderthumb-horizontal sliderthumb-vertical slow small small-caps small-caption smaller solid somali source-atop source-in source-out source-over space square square-button start static status-bar stretch stroke sub subpixel-antialiased super sw-resize table table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group telugu text text-bottom text-top textarea textfield thai thick thin threeddarkshadow threedface threedhighlight threedlightshadow threedshadow tibetan tigre tigrinya-er tigrinya-er-abegede tigrinya-et tigrinya-et-abegede to top transparent ultra-condensed ultra-expanded underline up upper-alpha upper-armenian upper-greek upper-hexadecimal upper-latin upper-norwegian upper-roman uppercase urdu url vertical vertical-text visible visibleFill visiblePainted visibleStroke visual w-resize wait wave wider window windowframe windowtext x-large x-small xor xx-large xx-small".split(" "));
CodeMirror.defineMIME("text/css",{atMediaTypes:d,atMediaFeatures:l,propertyKeywords:m,colorKeywords:n,valueKeywords:p,hooks:{"<":function(b,d){function g(b,d){for(var j=0,h;null!=(h=b.next());){if(2<=j&&">"==h){d.tokenize=null;break}j="-"==h?j+1:0}return["comment","comment"]}if(b.eat("!"))return d.tokenize=g,g(b,d)},"/":function(b,d){return b.eat("*")?(d.tokenize=g,g(b,d)):!1}},name:"css-base"});CodeMirror.defineMIME("text/x-scss",{atMediaTypes:d,atMediaFeatures:l,propertyKeywords:m,colorKeywords:n,
valueKeywords:p,allowNested:!0,hooks:{$:function(b){b.match(/^[\w-]+/);return":"==b.peek()?["variable","variable-definition"]:["variable","variable"]},"/":function(b,d){return b.eat("/")?(b.skipToEnd(),["comment","comment"]):b.eat("*")?(d.tokenize=g,g(b,d)):["operator","operator"]},"#":function(b){if(b.eat("{"))return["operator","interpolation"];b.eatWhile(/[\w\\\-]/);return["atom","hash"]}},name:"css-base"})})();