var __vite_style__ = document.createElement("style");
__vite_style__.innerHTML = `
    @import"/static/awescnb/font-awesome/css/all.min5.15.2.css";
    #under_post_card1,#under_post_card2{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;vertical-align:baseline;box-sizing:border-box}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1;-webkit-tap-highlight-color:rgba(0,0,0,0)}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}button{outline:none}a{color:inherit;cursor:pointer}a,a:hover,a:link,a:visited{text-decoration:none!important}:root{--color-primary: var(--themeColor)}:root{--color-basic-50: #ffffff;--color-basic-75: #fafafa;--color-basic-100: #f8f8f8;--color-basic-200: #eaeaea;--color-basic-300: #e1e1e1;--color-basic-400: #cacaca;--color-basic-500: #b3b3b3;--color-basic-600: #8e8e8e;--color-basic-700: #6e6e6e;--color-basic-800: #4b4b4b;--color-basic-900: #2c2c2c;--bg-body: #f5f6f7;--bg-mainContent: #f5f6f7;--bg-sidebar: #fff;--bg-tags: #eaeaea;--bg-footer: #fff;--bg-btn-hover: #f5f6f7;--bg-btn-active: #eaeaea;--bg-pager: #fff;--bg-pager-btn: #f5f6f7;--bg-listItem: #fff;--bg-listItemTitle: #fff;--bg-form: #ffffff;--bg-form-title: #f6f8fa;--bg-common-body: #f5f6f7;--bg-layer: #ccc;--bg-md-hr: #ddd;--bg-md-blockquote: #f6f8fa;--bg-md-summary: rgb(250, 250, 250);--bg-md-single-code: #eee;--bg-search-bar: #fff;--bg-account: #fff;--bg-logo: linear-gradient( to bottom, #fff 0%, #fff 76%, rgba(21, 23, 40, 0) 100% );--bg-profile-menu: #f8f8f8;--bg-tool-item: #eee;--bg-calendar: #f6f8fa;--bg-post-signature: #f6f8fa;--bg-scrollbar-track: rgba(0, 0, 0, .01);--bg-scrollbar-thumb: rgba(0, 0, 0, .11);--bg-scrollbar-thumb-hover: rgba(0, 0, 0, .2);--bg-card: #fff;--bg-profile-links: #333;--bg-profile-links-hover: #eaeaea;--bg-emoji: #fff;--border-sidebar-block: #f5f6f7;--border-form: #ccc;--border-avatar: rgb(240, 239, 239);--border-post-signature: var(--color-primary);--border-catalog: #eaeaea;--border-md-details: rgb(234, 234, 234);--border-md-details-active: rgb(234, 234, 234)}:root[theme=dark]{--color-basic-50: #252525;--color-basic-75: #2f2f2f;--color-basic-100: #323232;--color-basic-200: #3e3e3e;--color-basic-300: #4a4a4a;--color-basic-400: #5a5a5a;--color-basic-500: #6e6e6e;--color-basic-600: #909090;--color-basic-700: #b9b9b9;--color-basic-800: #bdbdbd;--color-basic-900: #c2c2c2;--bg-body: #373e57;--bg-mainContent: #24273b;--bg-sidebar: #151728;--bg-tags: #303447;--bg-footer: #24273b;--bg-btn-hover: #202234;--bg-btn-active: #5c5e6e;--bg-pager: #151728;--bg-pager-btn: #202234;--bg-listItem: #202234;--bg-listItemTitle: #202234;--bg-form: #151728;--bg-form-title: #202234;--bg-common-body: #202234;--bg-layer: #202234;--bg-md-hr: #5c5e6e;--bg-md-blockquote: #515363;--bg-md-summary: #3d4052;--bg-md-single-code: #24273b;--bg-search-bar: #151728;--bg-account: #151728;--bg-logo: linear-gradient( to bottom, #151728 0%, #151728 76%, rgba(21, 23, 40, 0) 100% );--bg-profile-menu: #151728;--bg-tool-item: #24273b;--bg-calendar: #202234;--bg-post-signature: #24273b;--bg-scrollbar-track: rgba(255, 255, 255, .01);--bg-scrollbar-thumb: rgba(255, 255, 255, .11);--bg-scrollbar-thumb-hover: rgba(255, 255, 255, .2);--bg-card: #151728;--bg-profile-links: rgb(156, 156, 171);--bg-profile-links-hover: #1b1d2e;--bg-emoji: #303447;--border-sidebar-block: #272a3a;--border-form: #202234;--border-avatar: #151728;--border-post-signature: var(--color-primary);--border-catalog: #272a3a;--border-md-details: rgba(255, 255, 255, .2);--border-md-details-active: var(--color-primary)}#cnblogs_post_body.blogpost-body-html,#mainContent .cnblogs-markdown{word-break:break-word;line-height:1.75;font-weight:400;font-size:15px}#cnblogs_post_body.blogpost-body-html h1,#cnblogs_post_body.blogpost-body-html h2,#cnblogs_post_body.blogpost-body-html h3,#cnblogs_post_body.blogpost-body-html h4,#cnblogs_post_body.blogpost-body-html h5,#cnblogs_post_body.blogpost-body-html h6,#mainContent .cnblogs-markdown h1,#mainContent .cnblogs-markdown h2,#mainContent .cnblogs-markdown h3,#mainContent .cnblogs-markdown h4,#mainContent .cnblogs-markdown h5,#mainContent .cnblogs-markdown h6{line-height:1.5;margin:35px 0 10px;padding:0 0 5px}#cnblogs_post_body.blogpost-body-html h1,#mainContent .cnblogs-markdown h1{font-size:30px;margin-bottom:5px}#cnblogs_post_body.blogpost-body-html h2,#mainContent .cnblogs-markdown h2{padding-bottom:12px;font-size:24px;border-bottom:1px solid var(--bg-md-hr)}#cnblogs_post_body.blogpost-body-html h3,#mainContent .cnblogs-markdown h3{font-size:18px;padding-bottom:0}#cnblogs_post_body.blogpost-body-html h4,#mainContent .cnblogs-markdown h4{font-size:16px}#cnblogs_post_body.blogpost-body-html h5,#mainContent .cnblogs-markdown h5{font-size:15px}#cnblogs_post_body.blogpost-body-html h6,#mainContent .cnblogs-markdown h6{margin-top:5px}#cnblogs_post_body.blogpost-body-html p,#mainContent .cnblogs-markdown p{margin:22px 0;line-height:inherit}#cnblogs_post_body.blogpost-body-html img,#mainContent .cnblogs-markdown img{display:flex;margin:10px auto;max-width:100%!important;border-radius:4px}#cnblogs_post_body.blogpost-body-html hr,#mainContent .cnblogs-markdown hr{margin:32px 0;border:none;border-bottom:1px solid var(--bg-md-hr)}#cnblogs_post_body.blogpost-body-html code,#mainContent .cnblogs-markdown code{font-family:"Menlo,Monaco,Consolas,'Courier New', monospace";word-break:break-word;border-radius:2px;overflow-x:auto;background-color:var(--bg-md-single-code)!important;color:#15a7a7!important;font-size:.87em;padding:2px 6px!important;display:inline}#cnblogs_post_body.blogpost-body-html a,#mainContent .cnblogs-markdown a{color:#47a1f6}#cnblogs_post_body.blogpost-body-html a:hover,#mainContent .cnblogs-markdown a:hover{color:#68b5fb}#cnblogs_post_body.blogpost-body-html table,#mainContent .cnblogs-markdown table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto}#cnblogs_post_body.blogpost-body-html thead,#mainContent .cnblogs-markdown thead{background:none;text-align:left}#cnblogs_post_body.blogpost-body-html thead th,#mainContent .cnblogs-markdown thead th{background:none}#cnblogs_post_body.blogpost-body-html tr:nth-child(2n),#mainContent .cnblogs-markdown tr:nth-child(2n){background:none}#cnblogs_post_body.blogpost-body-html th,#cnblogs_post_body.blogpost-body-html td,#mainContent .cnblogs-markdown th,#mainContent .cnblogs-markdown td{padding:8px 4px;line-height:24px}#cnblogs_post_body.blogpost-body-html td,#mainContent .cnblogs-markdown td{min-width:120px}#cnblogs_post_body.blogpost-body-html ol,#cnblogs_post_body.blogpost-body-html ul,#mainContent .cnblogs-markdown ol,#mainContent .cnblogs-markdown ul{margin:22px 0;padding:0 0 0 28px}#cnblogs_post_body.blogpost-body-html ol li,#cnblogs_post_body.blogpost-body-html ul li,#mainContent .cnblogs-markdown ol li,#mainContent .cnblogs-markdown ul li{margin-bottom:0}#cnblogs_post_body.blogpost-body-html ol ul,#cnblogs_post_body.blogpost-body-html ol ol,#cnblogs_post_body.blogpost-body-html ul ul,#cnblogs_post_body.blogpost-body-html ul ol,#mainContent .cnblogs-markdown ol ul,#mainContent .cnblogs-markdown ol ol,#mainContent .cnblogs-markdown ul ul,#mainContent .cnblogs-markdown ul ol{margin-top:4px}#cnblogs_post_body.blogpost-body-html blockquote,#mainContent .cnblogs-markdown blockquote{margin:22px 0;padding:1px 22px;color:var(--color-basic-700);background:var(--bg-md-blockquote);border-left:4px solid var(--color-primary)}#cnblogs_post_body.blogpost-body-html blockquote:after,#mainContent .cnblogs-markdown blockquote:after{display:block;content:""}#cnblogs_post_body.blogpost-body-html blockquote>p,#mainContent .cnblogs-markdown blockquote>p{margin:10px 0}#cnblogs_post_body.blogpost-body-html details,#mainContent .cnblogs-markdown details{margin:1.5rem 0;padding:.5rem 1rem;background:var(--bg-md-summary);border-radius:3px;border:1px solid;border-color:var(--border-md-details)}#cnblogs_post_body.blogpost-body-html details>summary,#mainContent .cnblogs-markdown details>summary{font-weight:500;outline:none;cursor:pointer}#cnblogs_post_body.blogpost-body-html details[open],#mainContent .cnblogs-markdown details[open]{border:1px solid var(--border-md-details-active)}#cnblogs_post_body.blogpost-body-html iframe,#mainContent .cnblogs-markdown iframe{width:100%;height:40vw}#cnblogs_post_body.blogpost-body-html iframe.music,#mainContent .cnblogs-markdown iframe.music{width:auto;height:auto}#mainContent .cnblogs-markdown kbd{display:inline-block;padding:3px 5px;font:11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;line-height:10px;color:#444d56;vertical-align:middle;background-color:#fafbfc;border:1px solid #d1d5da;border-radius:2px;box-shadow:inset 0 -1px #d1d5da}#mainContent .cnblogs-markdown mark{background-color:var(--color-primary)}#mainContent #blog-comments-placeholder blockquote,#mainContent #blog-comments-placeholder p{margin:4px 0}@media screen and (max-width: 1023px){iframe{height:60vw}}@media screen and (max-width: 768px){h1{font-size:24px}h2{font-size:20px}h3{font-size:18px}#cnblogs_post_body iframe,.cnblogs-post-body iframe,.cnblogs-markdown iframe{height:50vw}}::-webkit-scrollbar{width:12px;height:12px;border-radius:4px}::-webkit-scrollbar-track{background:var(--bg-scrollbar-track)}::-webkit-scrollbar-thumb{background:var(--bg-scrollbar-thumb);border-radius:4px}::-webkit-scrollbar-thumb:hover{background:var(--bg-scrollbar-thumb-hover)}.copy-btns:before,.custom-comment-avatar:after,#commentform_title:before,.diggit:before,.feedback_area_title:before,.buryit:before,#green_channel_favorite:before,#green_channel_follow:before,.custom-card-title:before,[class^=fa-]:before,[class^=fa-]:after{font-family:"Font Awesome 5 free","Font Awesome 5 Brands";font-weight:700}.post-message{display:flex;flex-direction:column;justify-content:space-around;margin-bottom:20px;width:100%}.message-top{display:flex;flex-wrap:wrap}.message-top .message-categories,.message-top .message-tags{display:flex;align-items:center;margin:8px 0}.message-top .message-categories a,.message-top .message-tags a{padding:4px 8px;font-size:13px;line-height:14px;border-radius:4px;margin:0 0 0 8px}.message-top .message-categories{margin:0 16px 0 0}.message-top .message-categories a{color:#fff;background-color:#f13a3a;border:1px solid #f13a3a}.message-top .message-tags a{border:1px solid;color:var(--color-basic-700)}.message-tags a:nth-child(1){border-color:#22a6b3}.message-tags a:nth-child(2){border-color:#0097e6}.message-tags a:nth-child(3){border-color:#fbc531}.message-tags a:nth-child(4){border-color:#10ac84}.message-bottom{display:flex;gap:8px;color:var(--color-basic-600);white-space:nowrap;overflow:auto;font-size:13px}#EntryTag,#BlogPostCategory{display:none}#cnblogs_post_body.blogpost-body-html pre,#mainContent .cnblogs-markdown pre{margin-top:8px;padding:24px 0 10px;border-radius:4px;background:var(--hl-base);font-family:Consolas,Lucida Console,Monaco,Andale Mono,Ubuntu Mono,monospace!important}#cnblogs_post_body.blogpost-body-html code,#mainContent .cnblogs-markdown code{font-family:Consolas,Lucida Console,Monaco,Andale Mono,Ubuntu Mono,monospace!important;font-size:15px!important;margin:0;word-break:break-word!important;border:none!important}#cnblogs_post_body.blogpost-body-html li code,#mainContent .cnblogs-markdown li code{font-weight:700}#cnblogs_post_body.blogpost-body-html .hljs,#mainContent .cnblogs-markdown .hljs{display:block!important;color:var(--hl-mono-1)!important;background:var(--hl-base)!important;border:none!important;padding:16px 10px 8px 13px!important;font-weight:400;white-space:inherit}#cnblogs_post_body.blogpost-body-html .hljs-punctuation,#cnblogs_post_body.blogpost-body-html .hljs-tag,#mainContent .cnblogs-markdown .hljs-punctuation,#mainContent .cnblogs-markdown .hljs-tag{color:var(--hl-mono-1)}#cnblogs_post_body.blogpost-body-html .hljs-comment,#cnblogs_post_body.blogpost-body-html .hljs-quote,#mainContent .cnblogs-markdown .hljs-comment,#mainContent .cnblogs-markdown .hljs-quote{color:var(--hl-mono-3);font-style:italic}#cnblogs_post_body.blogpost-body-html .hljs-tag,#mainContent .cnblogs-markdown .hljs-tag{color:var(--hl-tag)}#cnblogs_post_body.blogpost-body-html .hljs-doctag,#cnblogs_post_body.blogpost-body-html .hljs-formula,#cnblogs_post_body.blogpost-body-html .hljs-keyword,#mainContent .cnblogs-markdown .hljs-doctag,#mainContent .cnblogs-markdown .hljs-formula,#mainContent .cnblogs-markdown .hljs-keyword{color:var(--hl-hue-3)}#cnblogs_post_body.blogpost-body-html .hljs-deletion,#cnblogs_post_body.blogpost-body-html .hljs-name,#cnblogs_post_body.blogpost-body-html .hljs-section,#cnblogs_post_body.blogpost-body-html .hljs-selector-tag,#cnblogs_post_body.blogpost-body-html .hljs-subst,#mainContent .cnblogs-markdown .hljs-deletion,#mainContent .cnblogs-markdown .hljs-name,#mainContent .cnblogs-markdown .hljs-section,#mainContent .cnblogs-markdown .hljs-selector-tag,#mainContent .cnblogs-markdown .hljs-subst{color:var(--hl-hue-5)}#cnblogs_post_body.blogpost-body-html .hljs-literal,#mainContent .cnblogs-markdown .hljs-literal{color:var(--hl-hue-1)}#cnblogs_post_body.blogpost-body-html .hljs-addition,#cnblogs_post_body.blogpost-body-html .hljs-attribute,#cnblogs_post_body.blogpost-body-html .hljs-meta-string,#cnblogs_post_body.blogpost-body-html .hljs-regexp,#cnblogs_post_body.blogpost-body-html .hljs-string,#mainContent .cnblogs-markdown .hljs-addition,#mainContent .cnblogs-markdown .hljs-attribute,#mainContent .cnblogs-markdown .hljs-meta-string,#mainContent .cnblogs-markdown .hljs-regexp,#mainContent .cnblogs-markdown .hljs-string{color:var(--hl-hue-4)}#cnblogs_post_body.blogpost-body-html .hljs-built_in,#cnblogs_post_body.blogpost-body-html .hljs-class .hljs-title,#mainContent .cnblogs-markdown .hljs-built_in,#mainContent .cnblogs-markdown .hljs-class .hljs-title{color:var(--hl-hue-6-2)}#cnblogs_post_body.blogpost-body-html .hljs-attr,#cnblogs_post_body.blogpost-body-html .hljs-number,#cnblogs_post_body.blogpost-body-html .hljs-selector-attr,#cnblogs_post_body.blogpost-body-html .hljs-selector-class,#cnblogs_post_body.blogpost-body-html .hljs-selector-pseudo,#cnblogs_post_body.blogpost-body-html .hljs-template-variable,#cnblogs_post_body.blogpost-body-html .hljs-type,#cnblogs_post_body.blogpost-body-html .hljs-variable,#mainContent .cnblogs-markdown .hljs-attr,#mainContent .cnblogs-markdown .hljs-number,#mainContent .cnblogs-markdown .hljs-selector-attr,#mainContent .cnblogs-markdown .hljs-selector-class,#mainContent .cnblogs-markdown .hljs-selector-pseudo,#mainContent .cnblogs-markdown .hljs-template-variable,#mainContent .cnblogs-markdown .hljs-type,#mainContent .cnblogs-markdown .hljs-variable{color:var(--hl-hue-6)}#cnblogs_post_body.blogpost-body-html .hljs-bullet,#cnblogs_post_body.blogpost-body-html .hljs-link,#cnblogs_post_body.blogpost-body-html .hljs-meta,#cnblogs_post_body.blogpost-body-html .hljs-selector-id,#cnblogs_post_body.blogpost-body-html .hljs-symbol,#cnblogs_post_body.blogpost-body-html .hljs-title,#mainContent .cnblogs-markdown .hljs-bullet,#mainContent .cnblogs-markdown .hljs-link,#mainContent .cnblogs-markdown .hljs-meta,#mainContent .cnblogs-markdown .hljs-selector-id,#mainContent .cnblogs-markdown .hljs-symbol,#mainContent .cnblogs-markdown .hljs-title{color:var(--hl-hue-2)}#cnblogs_post_body.blogpost-body-html .hljs-emphasis,#mainContent .cnblogs-markdown .hljs-emphasis{font-style:italic}#cnblogs_post_body.blogpost-body-html .hljs-strong,#mainContent .cnblogs-markdown .hljs-strong{font-weight:700}#cnblogs_post_body.blogpost-body-html .hljs-link,#mainContent .cnblogs-markdown .hljs-link{text-decoration:underline}#cnblogs_post_body .cnblogs_code{border:none;background-color:var(--hl-base);border-radius:4px}#cnblogs_post_body .cnblogs_code pre{padding:30px 12px 12px;overflow:auto}#cnblogs_post_body .cnblogs_code pre:before{display:none}#cnblogs_post_body .cnblogs_code>img{display:none}#cnblogs_post_body .cnblogs_code span{background-color:var(--hl-base)!important}#cnblogs_post_body .cnblogs_code span[style="color: #008000;"]{color:var(--hl-mono-3)!important;font-style:italic}#cnblogs_post_body .cnblogs_code span[style="color: rgba(0, 128, 128, 1);"]{color:red!important}#cnblogs_post_body .cnblogs_code span[style="background-color: #f5f5f5; color: #000000;"],#cnblogs_post_body .cnblogs_code span[style="color: #000000;"]{color:var(--hl-mono-1)!important}#cnblogs_post_body .cnblogs_code span[style="background-color: #f5f5f5; color: #800000;"]{color:var(--hl-hue-2)!important}#cnblogs_post_body .cnblogs_code span[style="color: #0000ff;"],#cnblogs_post_body .cnblogs_code span[style="background-color: #f5f5f5; color: #0000ff;"]{color:var(--hl-hue-3)!important}#cnblogs_post_body .cnblogs_code span[style="color: #800000;"],#cnblogs_post_body .cnblogs_code span[style="color: #ff0000;"],#cnblogs_post_body .cnblogs_code span[style="background-color: #f5f5f5; color: #ff0000;"]{color:var(--hl-hue-4)!important}#cnblogs_post_body .cnblogs_code span[style="color: #8b0000;"]{color:var(--hl-hue-6)!important}#cnblogs_post_body .cnblogs_code_collapse,#cnblogs_post_body .cnblogs_code_toolbar,#cnblogs_post_body .code_img_opened,#cnblogs_post_body .code_img_closed{display:none}#cnblogs_post_body .cnblogs_code_hide{display:block}.syntaxhighlighter{background:var(--hl-base)!important}.syntaxhighlighter .line.alt1,.syntaxhighlighter .line.alt2{background-color:var(--hl-base)!important}#cnblogs_post_body .cnblogs_Highlighter table tbody{width:100%!important}#cnblogs_post_body .cnblogs_Highlighter table .gutter{padding-bottom:0!important}#cnblogs_post_body .cnblogs_Highlighter code{background-color:var(--hl-base)!important}#cnblogs_post_body .cnblogs_Highlighter .keyword{color:var(--hl-hue-3)!important}#cnblogs_post_body .cnblogs_Highlighter .string{color:var(--hl-hue-4)!important}#cnblogs_post_body .cnblogs_Highlighter .plain,#cnblogs_post_body .cnblogs_Highlighter .variable{color:var(--hl-mono-1)!important}#cnblogs_post_body .cnblogs_Highlighter .comments{color:var(--hl-mono-3)!important;font-style:italic!important}#cnblogs_post_body .cnblogs_Highlighter .functions{color:var(--hl-hue-2)!important}@media screen and (max-width: 767px){#cnblogs_post_body td{white-space:pre}}@media screen and (max-width: 768px){.awes-linenumber{display:none}}#cnblogs_post_body pre{display:flex}#cnblogs_post_body pre ul.awes-linenumber{margin-top:0}#cnblogs_post_body pre .awes-linenumber{margin:0;padding:16px 16px 8px}#cnblogs_post_body pre .awes-linenumber li{font-weight:400;color:#999;list-style:none;text-align:right;line-height:1.5;font-size:15px}#cnblogs_post_body .cnblogs_code pre{display:block}#cnblogs_post_body .cnblogs_code pre span[style="color: #008080;"]{padding:2px 0;border:none;text-align:center;color:#999!important;word-break:normal;white-space:pre}#tip_comment{display:none}.custom-signature{padding:1rem 14px;font-size:1em;line-height:1.5em}.qaq-btn{user-select:none;cursor:pointer}.qaq-wrap{display:none;position:absolute;top:34px;left:-4%;padding:8px;background-color:var(--bg-emoji);border:1px solid var(--border-form);border-radius:4px;width:500px;max-width:283px;z-index:3}.qaq-wrap:before,.qaq-wrap:after{position:absolute;content:"";margin:0;width:0;height:0}.qaq-wrap:after{top:-9px;left:14px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid var(--border-form)}.qaq-wrap:before{top:-8px;left:14px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid var(--bg-emoji);z-index:1}.emoji-list{display:flex;flex-wrap:wrap;gap:4px;max-height:200px;overflow-y:auto;overflow-x:hidden;font-size:14px}.emoji-list .emoji-item{display:flex;justify-content:center;align-items:center;padding:4px 6px;color:var(--color-basic-700);cursor:pointer;box-sizing:border-box;border:1px solid transparent;border-radius:4px;user-select:none}.emoji-list .emoji-item img.emoji{width:20px;height:20px}.emoji-list .emoji-item:hover{background-color:var(--bg-tags);border-color:var(--border-post-signature)}.emoji-list .emoji-item:hover>.emoji{transform:scale(1.2);transition:transform .15s cubic-bezier(.2,0,.13,2)}.emoji-list::-webkit-scrollbar{width:8px;height:8px}.emoji-list::-webkit-scrollbar-corner{background-color:transparent}.emoji-list::-webkit-scrollbar-thumb{background-color:#d2cfcf;border-radius:4px}.emoji-list::-webkit-scrollbar-track{background-color:transparent}.qaq-mask{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2;display:block;cursor:default;content:" ";background:transparent;z-index:-1}.anim-scale-in{animation-name:scale-in;animation-duration:.15s;animation-timing-function:cubic-bezier(.2,0,.13,1.5)}@keyframes scale-in{0%{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}body .medium-zoom-overlay{background:var(--bg-tool-item)!important;z-index:6}body .medium-zoom-image--opened{z-index:7}html .medium-zoom--opened .medium-zoom-overlay{opacity:.9}.lightbox-post{cursor:zoom-in}.gallery{display:none}.custom-gallery div{display:flex;flex-wrap:wrap;margin-top:20px}.custom-gallery div img{margin:8px;width:170px;height:170px;border-radius:4px}.message-wrap{position:fixed;top:20px;right:20px;z-index:999}.gradient-border{position:relative;display:flex;align-items:center;justify-content:center;width:400px;height:200px;color:#fff;font-family:Raleway;font-size:2.5rem;--borderWidth: 3px;background:#1d1f20;border-radius:var(--borderWidth)}.gradient-border:after{content:"";position:absolute;top:calc(-1 * var(--borderWidth));left:calc(-1 * var(--borderWidth));height:calc(100% + var(--borderWidth) * 2);width:calc(100% + var(--borderWidth) * 2);background:linear-gradient(60deg,#f79533,#f37055,#ef4e7b,#a166ab,#5073b8,#1098ad,#07b39b,#6fba82);border-radius:calc(2 * var(--borderWidth));z-index:-1;animation:animatedgradient 3s ease alternate infinite;background-size:300% 300%}@keyframes animatedgradient{0%{background-position:0% 50%}50%{background-position:100% 50%}to{background-position:0% 50%}}#mainContent #post-signature{position:relative;display:flex;flex-direction:column;margin:25px 0;padding:10px 24px 10px 15px;background:var(--bg-post-signature);border-left:5px solid var(--border-post-signature);border-radius:2px}#mainContent #post-signature p{margin:0;font-size:14px;line-height:1.6em;white-space:nowrap;overflow:hidden}#mainContent #post-signature a{color:inherit;border-bottom:none}#mainContent #post-signature:before{content:"!";background:var(--border-post-signature);position:absolute;top:16px;left:-12px;color:#fff;width:18px;height:18px;border-radius:50%;text-align:center;line-height:18px;font-weight:800;font-size:12px}.custom-toolbar{position:fixed;bottom:30px;right:30px;width:40px;height:40px}.toolbar-item{position:relative;width:40px;height:40px;background-color:var(--bg-md-summary);border-radius:50%;text-align:center;font-size:20px;line-height:40px;box-shadow:0 2px 12px #0000001a;cursor:pointer}.toolbar-item.toolbar-item-toggle{position:absolute;bottom:0}.toolbar-item i{display:flex;justify-content:center;font-style:normal;outline:none}.toolbar-item i:before{margin-right:0}.toolbar-item i::selection{background:none}.toolbar-item .tooltip{position:relative;display:flex;justify-content:center;align-items:center;height:24px;background-color:#333;color:#fff;text-align:center;border-radius:2px;font-size:12px;pointer-events:none;visibility:hidden;transform:translateY(-31px);z-index:9}.toolbar-item .tooltip:after{position:absolute;right:-5px;content:"";width:0;height:0;margin:0;border-bottom:6px solid transparent;border-top:6px solid transparent;border-left:6px solid #333}.toolbar-item:hover .tooltip{visibility:visible;transform:translate(-50px,-31px);transition:transform .2s}.toolbar-item:active{filter:brightness(.8);transition:filter .2s}@media screen and (max-width: 1366px){.menu-item-tooltip{display:none}}@media screen and (max-width: 1024px){.toolbar-item:hover .tooltip{visibility:hidden}}@media screen and (max-width: 767px){.custom-tools-menu .menu-item:not(:last-child):hover{transform:none}.custom-tools-menu{right:20px;bottom:20px}}.dark-to-light:after{content:"";width:100vw;height:100vh;position:fixed;z-index:99999;left:0;top:0;margin-left:0;background-color:#252528;opacity:.7;animation:toLight 1s linear 0s forwards}.light-to-dark:after{content:"";width:100vw;height:100vh;position:fixed;z-index:99999;left:0;top:0;margin-left:0;background-color:#fff;opacity:.7;animation:toDark 1s linear 0s forwards;pointer-events:none}@keyframes toLight{0%{background-color:#252528;opacity:.7}to{background-color:#fff;opacity:0}}@keyframes toDark{0%{background-color:#fff;opacity:.7}to{background-color:#252528;opacity:0}}#player.aplayer{background:none}#player.aplayer .aplayer-list ol li{background:var(--bg-tags)}#player:hover .aplayer-list{transform:scaleX(1);left:0}#player:hover .aplayer-body{left:0}#player .aplayer-list{position:relative;transform:scaleX(.838);left:-34px}#player .aplayer-body{left:-66px;background-color:var(--bg-tags)}#player .aplayer-body .aplayer-info{border-top:none}#player .aplayer-body .aplayer-miniswitcher{background-color:var(--bg-tags);border-left:1px solid #999}#player .aplayer-lrc{display:none}#player .aplayer-lrc .aplayer-lrc-contents{color:inherit}#player .aplayer-lrc .aplayer-lrc-contents p{color:inherit;font-size:14px;text-shadow:none}@media screen and (max-width: 767px){#player{display:none}}#cnblogs_post_body pre{margin:24px 0}.awes-lang{position:absolute;top:-19px;right:32px;padding:0 16px;font-size:12px;color:#999;background:var(--hl-base);border-radius:4px 4px 0 0}pre{position:relative}.cbt-traffic_light{position:absolute;top:10px;left:13px;display:flex;align-items:center}.cbt-traffic_light span{margin-right:8px;width:14px;height:14px;border-radius:50%}.cbt-traffic_light span:nth-child(1){background-color:#ff5f56}.cbt-traffic_light span:nth-child(2){background-color:#ffbd2e}.cbt-traffic_light span:nth-child(3){background-color:#27c93f}.custom-toolbar{z-index:9}.rocket-rotate{position:relative;top:2px;transform:rotate(-45deg)}.custom-comment-avatar{position:relative}.custom-comment-avatar img{width:50px;height:50px;border-radius:50%}.custom-comments-author .custom-comment-avatar:after{position:absolute;bottom:11px;right:5px;content:"\\f058";color:#4ac7ff;background-color:#fff;line-height:1em;border-radius:50%;margin-right:0;font-size:80%}.custom-categories a,.custom-tags a{box-shadow:none}.medium-zoom-image--opened{z-index:41}.toolbar-item{box-shadow:0 2px 6px #0003}.custom-drag-menu{z-index:3}.medium-zoom-overlay{z-index:2}#click-effects{z-index:6}body .aplayer.aplayer-fixed .aplayer-lrc{bottom:30px}#catalog{padding:25px;font-size:14px;overflow-x:hidden;word-wrap:nowrap;text-overflow:ellipsis}#catalog .catalog-title{display:flex;align-items:center;position:sticky;top:0;font-family:DM Sans,sans-serif;color:var(--color-basic-700);font-size:15px;margin-bottom:20px}#catalog ul{border-left:1px solid var(--border-catalog)}#catalog ul li{color:var(--color-basic-800);display:flex;align-items:center;line-height:1.8}#catalog ul li:before{position:relative;right:5px;display:block;width:7px;height:7px;content:"";border-radius:50%;border:1px solid var(--color-primary);background-color:var(--bg-sidebar);margin-right:4px;transition:transform .2s}#catalog ul li:hover{color:var(--color-basic-900)}#catalog ul li a{display:inline-block;width:100%}#catalog ul li a .icon{width:1.2em;height:1.8em}#catalog ul .h1-list{font-weight:700;font-size:16px}#catalog ul .h2-list{font-size:14px}#catalog ul .h3-list,#catalog ul .h4-list,#catalog ul .h5-list,#catalog ul .h6-list{font-size:12px}#catalog ul .h1-list~.h2-list{margin-left:1em;font-size:14px}#catalog ul .h2-list~.h3-list{margin-left:2em}#catalog ul .h3-list~.h4-list{margin-left:3em}#catalog ul .h4-list~.h5-list{margin-left:4em}#catalog ul .h5-list~.h6-list{margin-left:5em}#catalog ul .catalog-active{color:var(--color-primary);transition:all .3s}#catalog ul .catalog-active:before{transform:scale(1) translate(0);background-color:var(--color-primary)}.cnblogs_code,.cnblogs_Highlighter{position:relative}.cnblogs_code .copy-btns,.cnblogs_Highlighter .copy-btns{z-index:1}.copy-btns{position:absolute;right:8px;top:8px;width:86px;font-size:12px;cursor:pointer;padding:2px 4px 1px 8px;border-radius:4px;color:var(--color-basic-600)}.copy-btns:before{content:"\\f0c5";margin-right:8px;font-weight:500}.copy-btns:hover{background:var(--color-basic-200);transition:background .2s}.awes-lang{position:absolute;right:98px;top:13px;height:14px;line-height:1.2;padding-right:14px;margin-right:4px;border-right:1px solid var(--color-basic-300);font-size:12px;text-transform:uppercase;color:var(--color-basic-500)}.blog_comment_body .awes-linenumber{display:none}@media screen and (max-width: 1024px){.blog_comment_body .awes-lang{display:none}}*::selection{background:var(--theme-primary-4);color:inherit}html{-webkit-font-smoothing:antialiased;box-sizing:border-box}body{background-color:var(--bg-body);color:var(--color-basic-900);font-size:1em;line-height:1.5;font-family:UbuntuMono,Varela Round,PingFang SC,Microsoft YaHei,Helvetica,Arial,Menlo,Monaco,monospace,sans-serif;overflow:hidden}#home{display:grid;grid-template-columns:14vw 1fr 1fr 19vw;grid-template-rows:1fr 1fr 1fr;grid-template-areas:"left main main right" "left main main right" "left main main right";height:100vh}.forFlow{z-index:2}#header{display:none!important}#main{grid-area:main;display:grid;grid-template-rows:40px 1fr 30px;grid-template-columns:1fr}#mainContent{position:relative;display:grid;grid-template-columns:100%;grid-template-rows:40vh 1fr;padding:20px;background-color:var(--bg-mainContent);overflow:auto}.dayTitle{display:none}.postTitl2,.entrylistPosttitle{width:100%}.entrylistPostSummary,.postCon{color:var(--color-basic-700);font-size:14px}.entrylistItem{padding:20px}#sideBar,#left-side{overflow:auto}#sideBar{grid-area:right;background-color:var(--bg-sidebar);border-radius:0 4px 0 0}#sideBarMain{padding-bottom:20px}#sidebar_news,#sidebar_search{display:none!important}.sidebar-block{padding:20px 20px 0}.sidebar-block h3{color:var(--color-basic-900);font-size:14px;margin-bottom:16px;font-weight:500}.sidebar-block ul li{padding:4px 8px;font-size:12px;cursor:pointer}.sidebar-block ul li:hover{color:var(--color-primary);transition:all .2s}#sidebar_shortcut ul,#sidebar_toptags ul{display:flex;flex-wrap:wrap}#sidebar_shortcut ul li,#sidebar_toptags ul li{margin:0 4px 4px 0;padding:4px 12px;background-color:var(--bg-tags);font-size:12px;border-radius:2px}.recent_comment_body{background-color:var(--bg-tags);border-radius:4px}#sidebar_recentposts ul li,.recent_comment_title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#sidebar_recentcomments .recent_comment_body{padding:12px}#sidebar_recentcomments .recent_comment_body:hover{color:inherit;transition:all .2s}#left-side{grid-area:left;border-right:1px solid var(--border-sidebar-block);display:flex;flex-direction:column;background-color:var(--bg-sidebar);flex-shrink:0;border-radius:4px 0 0}#footer{margin:0;display:flex;justify-content:center;align-items:center;background-color:var(--bg-footer);color:var(--color-basic-700);font-size:13px;border-top:1px solid var(--color-basic-200)}#footer #poweredby{margin-left:12px}#post_detail{margin-top:20px;padding:16px;animation:content-in .5s ease-in 0s;border-radius:4px;background-color:var(--bg-form);overflow:hidden}#post_detail #topics .postDesc{margin:0 0 20px;padding:0;color:var(--color-basic-700);text-align:center;font-size:13px;text-transform:capitalize}#post_detail #topics .postDesc a{text-transform:none}#post_detail .postTitle{font-size:30px}.pager{display:flex;justify-content:center;grid-column-start:1;grid-column-end:5;padding:8px 0;margin:24px 0 0;font-size:14px;text-align:center;background-color:var(--bg-pager);color:var(--color-basic-700);border-radius:4px}.pager a,.pager span.current{margin:0 10px;padding:0 12px;border-radius:4px;background-color:var(--bg-pager-btn);border:2px solid rgba(0,0,0,0)}.pager a:hover,.pager span.current:hover{transition:all .2s;border:2px solid var(--color-primary)}.pager a{color:var(--color-basic-900)}.pager span.current{color:var(--color-primary);font-weight:500}h1.PostListTitle+.pager,#homepage_top_pager{display:none}#homepage_bottom_pager{margin:8px 0}.topicListFooter{grid-column-start:1;grid-column-end:4}#nav_next_page{margin:0 0 12px;text-align:center}#nav_next_page a{padding:8px 0;border-radius:4px;width:100%;background-color:var(--bg-pager);display:block;border:2px solid rgba(0,0,0,0)}#nav_next_page a:hover{color:var(--color-primary);border-color:var(--color-primary);transition:all .2s}#taglist_title,.custom-gallery h3,.entrylistTitle,.PostListTitle{margin:20px 0 0;padding:12px;font-size:16px;font-weight:400;background-color:var(--bg-listItemTitle);text-align:center}.PostListTitle{margin-bottom:16px}.entrylistDescription,.postSeparator{display:none}.entrylistTitle{grid-column-start:1;grid-column-end:4}#myposts{margin-left:0;display:grid;grid-template-columns:repeat(4,1fr);grid-gap:12px}#myposts .PostList{padding:8px;margin:0;background-color:var(--bg-listItem);border-radius:4px;box-shadow:0 2px 12px #0000001a}#myposts .PostList .postTitl2{color:var(--color-basic-800);font-size:16px;font-weight:400}#myposts .PostList .postDesc2{margin-bottom:0;padding-top:0;color:var(--color-basic-600)}#myposts .PostList .postText2{display:none}#taglist_main{margin-top:0;background-color:var(--bg-sidebar)}#taglist_main #taglist_title_wrap{border-radius:4px;padding:0!important}#taglist_main #taglist{padding:20px}#taglist_main #taglist table,#taglist_main #taglist tbody,#taglist_main #taglist tr,#taglist_main #taglist td{display:block}#taglist_main #taglist tr{display:grid;grid-template-columns:repeat(4,1fr);grid-gap:8px;margin-bottom:8px;width:100%}#taglist_main #taglist td{position:relative;display:flex;align-items:center;padding:0}#taglist_main #taglist td a{display:block;padding:6px 18px;width:100%;border-radius:4px;background-color:var(--bg-tags);border:1px solid var(--tag-border-color);font-size:13px}#taglist_main #taglist td a:hover{background:var(--bg-btn-hover);transition:all .2s}#taglist_main #taglist td a:active{background:var(--bg-btn-active);transition:all .2s}#taglist_main #taglist td span{position:absolute;right:4px;top:0}#blog_post_info_block{display:flex;justify-content:center;flex-direction:column;margin:0}#BlogPostCategory{margin-bottom:5.4px;font-size:16px;order:1}#EntryTag{margin-bottom:5.4px;font-size:16px;order:2}#blog_post_info{order:3;display:flex;justify-content:center;flex-wrap:wrap;align-items:baseline;margin:20px 0}#author_profile{display:flex;align-items:center;margin:0 10.8px 0 0;padding:0;width:auto;order:-1}#author_profile #author_profile_info,#author_profile #author_profile_follow{display:none}#green_channel{display:flex;align-items:center;flex-wrap:wrap;margin:0;padding:0;width:auto;border:none}#green_channel a,#green_channel span{background:none;box-shadow:none;font-weight:400;text-shadow:none;padding:0 12px}#green_channel #green_channel_follow,#green_channel #green_channel_favorite{padding:6px 12px;border-radius:4px;background-color:var(--bg-pager-btn);border:1px solid var(--border-form)!important;color:var(--color-basic-900)!important}#green_channel #green_channel_follow:hover,#green_channel #green_channel_favorite:hover{filter:brightness(1.1);transition:all .2s}#green_channel #green_channel_follow:active,#green_channel #green_channel_favorite:active{filter:brightness(.95);transition:all .2s}#green_channel #green_channel_follow:before{content:"\\f004";margin-right:4px;font-weight:500}#green_channel #green_channel_favorite:before{content:"\\f005";margin-right:4px;font-weight:500}#green_channel #green_channel_digg,#green_channel #green_channel_weibo,#green_channel #green_channel_wechat{display:none}#div_digg{display:flex;justify-content:center;align-items:center;margin:0;padding:0}#div_digg .diggit,#div_digg .buryit{width:auto;height:auto;margin:0;background:none;padding:6px 12px;border-radius:4px;background-color:var(--bg-pager-btn);border:1px solid var(--border-form)!important;white-space:nowrap}#div_digg .diggit:hover,#div_digg .buryit:hover{filter:brightness(1.1);transition:all .2s}#div_digg .diggit:active,#div_digg .buryit:active{filter:brightness(.95);transition:all .2s}#div_digg .diggit span,#div_digg .buryit span{color:var(--color-basic-900)}#div_digg .diggit .diggnum,#div_digg .diggit .burynum,#div_digg .buryit .diggnum,#div_digg .buryit .burynum{line-height:1em!important}#div_digg .diggit{margin-right:10px}#div_digg .diggit:before{content:"\\f164";font-weight:500}#div_digg .buryit:before{content:"\\f165";font-weight:500}#div_digg .diggword{display:none}#post_next_prev{display:none;order:3;margin-top:21.6px;font-size:16px;color:#999}#post_next_prev a:nth-child(3n+1){display:none}#blog-comments-placeholder br,#comment_pager_top{display:none}#blog-comments-placeholder{border-radius:4px;padding:0 16px;background-color:var(--bg-form);overflow:hidden}#blog-comments-placeholder .feedback_area_title{padding:7.56px 10.8px;border:1px solid var(--border-form);background-color:var(--bg-form-title);border-radius:2px 2px 0 0;font-size:12px;font-weight:700}#blog-comments-placeholder .feedback_area_title:before{content:"\\f086";margin-right:4px;font-weight:400}#blog-comments-placeholder .feedbackItem{border-left:1px solid var(--border-form);border-right:1px solid var(--border-form);padding:17.982px 10.8px}#blog-comments-placeholder .feedbackItem:nth-last-child(2){border-bottom:1px solid var(--border-form)}#blog-comments-placeholder .custom-comments-author{display:flex;flex-direction:column;align-items:flex-end;position:relative}#blog-comments-placeholder .custom-comments-author .louzhu{display:none}#blog-comments-placeholder .custom-comments-author .blog_comment_body{background-color:var(--bg-common-body)!important;color:var(--color-basic-700);margin-right:10px;margin-left:0}#blog-comments-placeholder .custom-comments-author .blog_comment_body a:nth-child(1){border-bottom:none}#blog-comments-placeholder .custom-comments-author .blog_comment_body:before{display:none}#blog-comments-placeholder .custom-comments-author .blog_comment_body:after{content:"";display:block;position:absolute;right:-18.84px;top:5.4px;width:6.258px;height:0;border-left:solid 12.96px var(--bg-common-body);border-top:solid 3.24px rgba(0,0,0,0);border-bottom:solid 7.182px rgba(0,0,0,0)}#blog-comments-placeholder .custom-comments-author .feedbackManage{order:0}#blog-comments-placeholder .custom-comments-author .layer{margin-left:5.4px;order:3!important}#blog-comments-placeholder .custom-comments-author .comment_vote{order:-3}#blog-comments-placeholder .custom-comments-author .comment_date{order:-1!important}#blog-comments-placeholder .custom-comments-author .feedbackManage{order:-2!important}#blog-comments-placeholder .custom-comments-author .feedbackCon{flex-direction:row-reverse;max-width:100%}#blog-comments-placeholder .custom-comments-author .feedbackCon br,#blog-comments-placeholder br{display:none}#blog-comments-placeholder .layer{padding:0 5.4px;background-color:var(--bg-layer);color:var(--color-basic-700);border-radius:4px;margin-right:5.4px;order:0;font-size:12px}#blog-comments-placeholder .comment_date{margin:0 5.4px;order:2;font-size:14px}.feedbackListSubtitle{display:flex;align-items:center;flex-wrap:wrap;margin-bottom:5px;font-size:0;color:var(--color-basic-600)}.feedbackListSubtitle .comment_actions a:last-child{margin-right:8px}.feedbackListSubtitle>a:last-of-type{margin-left:8px;color:var(--color-primary);order:1;font-size:14px}.feedbackListSubtitle .feedbackManage{order:3;font-size:14px}.feedbackListSubtitle .feedbackManage .comment_actions{border-bottom:1px solid var(--color-primary)}.feedbackListSubtitle .comment_vote{order:4;font-size:14px}.feedbackListSubtitle .comment_vote a{padding-left:8px}.feedbackCon{display:flex;align-items:center;margin-top:5px;align-items:flex-start}.feedbackCon .blog_comment_body{position:relative;margin:16px 0 0 10px;max-width:72%;border-radius:4px;color:var(--color-basic-700);font-size:14px;line-height:1.6;padding:5.4px 10.8px;background-color:var(--bg-common-body);box-shadow:0 4px 8px #0003}.feedbackCon .blog_comment_body:before{content:"";display:block;position:absolute;left:-24.84px;top:5.4px;width:12.258px;height:0;border-right:solid 12.96px var(--bg-common-body);border-top:solid 3.24px rgba(0,0,0,0);border-bottom:solid 7.182px rgba(0,0,0,0)}.feedbackCon .avatar{border-radius:50%;transform:scale(.8)}#comment_form{padding:32px 16px;background-color:var(--bg-form);overflow:hidden}#comment_form #divCommentShow,#comment_form #ad_text_under_commentbox,#comment_form #comment_nav,#comment_form .commentbox_footer{display:none}#comment_form #comment_form_container{position:relative;border:1px solid var(--border-form);border-radius:4px}#comment_form #comment_form_container>p:nth-of-type(3),#comment_form #comment_form_container>a:first-of-type{display:none}#comment_form #comment_form_container>p:last-of-type{color:var(--color-basic-300);margin-left:10.8px;font-size:14px}#comment_form #comment_form_container #commentform_title{background:none;margin-bottom:0;padding:7.56px 10.8px;border-bottom:1px solid var(--border-form);background-color:var(--bg-form-title);border-radius:2px 2px 0 0;font-size:12px;font-weight:700}#comment_form #comment_form_container #commentform_title:before{content:"\\f4ad";font-weight:400;margin-right:4px}#comment_form #comment_form_container #tip_comment{display:none}#comment_form #comment_form_container .comment_textarea{width:100%;border-color:var(--text-9);background:none;border:none}#comment_form #comment_form_container .comment_textarea .commentbox_title{border-bottom-color:var(--border-form)}#comment_form #comment_form_container .comment_textarea .commentbox_tab.active{border-color:var(--color-primary)}#comment_form #comment_form_container .comment_textarea .commentbox_title_left{display:none}#comment_form #comment_form_container .comment_textarea #tbCommentBody{margin-bottom:10.8px!important;height:81px;min-height:170px;background:none;font-size:16px;border-bottom:1px dashed var(--border-form);color:#999}#comment_form #comment_form_container #commentbox_opt>a{display:none}#comment_form #comment_form_container #commentbox_opt #btn_comment_submit{position:absolute;bottom:10.8px;right:10.8px;width:75.6px;height:32px;padding:4px 12px;background-color:var(--color-primary);outline:none;border:1px solid var(--color-primary);box-shadow:0 2px 4px var(--theme-primary-4);color:#fff;border-radius:4px;cursor:pointer;box-sizing:border-box;white-space:nowrap}#comment_form #comment_form_container #commentbox_opt #btn_comment_submit:hover{background-color:var(--theme-primary-8);border:1px solid var(--theme-primary-8)}#comment_form #comment_form_container #commentbox_opt #btn_comment_submit:active{background-color:var(--color-primary);border:1px solid var(--color-primary);box-shadow:none}#comment_form #comment_form_container #commentbox_opt #btn_comment_submit:focus{box-shadow:0 2px 4px var(--theme-primary-4),0 0 0 3px var(--theme-primary-4)}#comment_form #comment_form_container #commentbox_opt #btn_comment_submit:hover{transition:all .2s;filter:brightness(.8)}#comment_form #comment_form_container #tip_comment2{display:none}#ad_t2{margin:21.6px 0 0;padding:0;display:flex;flex-direction:column;font-size:14px;color:var(--color-basic-600);border-radius:4px}#ad_t2 br{display:none}#ad_t2 a{border-radius:4px;margin-right:0;padding:4px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:var(--bg-common-body)}#ad_t2 a:not(:nth-child(1)){margin-top:5px}#top_nav,#commentform_title a,#bannerbar,#under_post_kb,#under_post_news,#cnblogs_c1,#cnblogs_c2,#HistoryToday,.under-comment-nav,.under-comment-box-nav{display:none}@media screen and (max-width: 1366px){.topicListFooter{grid-column-end:4}#home{display:grid;grid-template-columns:68px 1fr 1fr 280px}.topicListFooter{margin-left:0;margin-right:0}#blog-comments-placeholder,#comment_form,#post_detail{padding-left:12px;padding-right:12px}#taglist_main #taglist tr{grid-template-columns:repeat(2,1fr);grid-gap:8px}}@media screen and (max-width: 1024px){.topicListFooter{grid-column-end:3}}@media screen and (max-width: 768px){#home{grid-template-columns:1fr;grid-template-rows:1fr 1fr;grid-template-areas:"header header" "main main"}#main{margin-top:0;grid-area:auto;height:100vh;padding:0}#mainContent{grid-template-rows:30vh 1fr;padding:10px}#mainContent::-webkit-scrollbar{display:none}.commentform{margin-left:0}.topicListFooter{grid-column-end:2}#blog_post_info_block #blog_post_info #div_digg{margin-top:12px}.comment_actions{margin:0 8px}.comment_vote a:last-child{padding-right:8px}.comment_vote,.comment_date,#poweredby{display:none}#myposts{grid-template-columns:repeat(1,1fr)}#myposts .pager{grid-column-start:1;grid-column-end:2}.pager a{padding:0 8px;margin:0 8px}#GalleryThumbNailViewer1_ThumbNails>tbody>tr{grid-template-columns:repeat(3,1fr)}#post_detail #topics .postDesc{display:none}.custom-searchbar{z-index:5}.sidebar-block{padding:30px}#sideBar,#left-side{grid-area:none}#left-side{padding-top:20px}#left-side .leftside-bottom{display:none}#left-side .side-wrapper{padding:30px 0}#left-side .side-wrapper h3{padding-left:22px;position:relative}}@keyframes content-in{0%{transform:translateY(10rem);opacity:0}to{transform:translateY(0);opacity:1}}.day,.c_b_p_desc_readmore{display:none}.cards-list,.entrylist{margin:1rem 0;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:1rem}.entrylistTitle{margin-top:1rem}.custom-card,.entrylistItem{background-color:var(--bg-card);border-radius:4px;box-sizing:border-box;flex-grow:1;animation:content-in .5s ease-in 0s;box-shadow:0 2px 12px #0000001a}.custom-card{display:flex;flex-direction:column;word-break:break-all}.custom-card.top .custom-card-title:before{content:"\\f004";font-weight:700;color:#f14668;margin-right:8px}.custom-card-title{padding:20px 20px 8px;font-size:14px;color:var(--color-basic-900)}.custom-card-title:before{content:"\\f15c";font-weight:400;margin-right:8px}.custom-card-title:hover{color:var(--color-primary)}.custom-card-desc{color:var(--color-basic-600);padding:0 20px 8px;flex-grow:1;font-size:13px}.custom-card-desc .c_b_p_desc{line-height:1.8}.custom-card-desc .MJXp-math{white-space:break-spaces}.custom-card-desc .MJXp-merror{padding:0;background:none;border:none;color:inherit;font-size:100%}.custom-card-desc .MathJax .noError{padding:0;border:none;color:inherit;font-size:100%;white-space:break-spaces}.custom-card-actions{display:flex;align-items:center;padding:10px;border-top:1px solid var(--color-basic-200)}.custom-card-actions div{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;margin-right:10px}.custom-card-actions div li:before{margin-right:4px}.custom-card-actions a:first-of-type{margin-left:auto;margin-right:10px}.custom-card-actions button{margin-left:auto;padding:4px 12px;background-color:var(--color-primary);outline:none;border:1px solid var(--color-primary);box-shadow:0 2px 4px var(--theme-primary-4);color:#fff;border-radius:4px;cursor:pointer;box-sizing:border-box;white-space:nowrap}.custom-card-actions button:hover{background-color:var(--theme-primary-8);border:1px solid var(--theme-primary-8)}.custom-card-actions button:active{background-color:var(--color-primary);border:1px solid var(--color-primary);box-shadow:none}.custom-card-actions button:focus{box-shadow:0 2px 4px var(--theme-primary-4),0 0 0 3px var(--theme-primary-4)}.custom-card-actions li:before{font-weight:400}@media screen and (min-width: 1920px){.cards-list{grid-template-columns:repeat(4,1fr)}}@media screen and (max-width: 1175px){.cards-list{grid-template-columns:repeat(2,1fr)}}@media screen and (max-width: 908px){.cards-list{grid-template-columns:1fr;grid-template-rows:auto}.custom-card:hover,.entrylistItem:hover{transition:none;box-shadow:none}}.account{display:flex;align-items:center;height:60px;position:sticky;top:0;background-color:var(--bg-account);z-index:2;flex-shrink:0}.account-button{border:0;background:0;color:var(--color-basic-500);padding:0;cursor:pointer;position:relative;margin-left:20px}.account-button .fas:before{font-size:20px;font-weight:500}.fa-bell:before{margin-right:0}.account-button-notice{position:relative}.account-button-notice .notice-count{display:inline-block;position:absolute;top:-7px;right:-5px;width:14px;height:14px;line-height:11px;border-radius:50%;color:#fff;background:var(--color-primary);font-size:8px;text-align:center;white-space:nowrap;border:2px solid var(--bg-account)}.account-button.stats{position:relative}.account-button.stats .stat-list{visibility:hidden;position:absolute;top:0;padding:8px 12px;border-radius:4px;background:var(--bg-body);opacity:0}.account-button.stats .stat-list li{display:flex;white-space:nowrap;font-size:13px;line-height:1.7;color:var(--color-basic-700)}.account-button.stats:hover .stat-list{opacity:1;visibility:visible;transform:translateY(24px);transition:all .3s}.view-count{flex:1;text-align:center}.account-avatar{margin-left:auto;margin-right:20px;font-size:20px;color:var(--color-basic-700)}#custom-calendar{padding:18px 18px 0}.event-wrapper,#blogCalendar{background-color:var(--bg-calendar)}#blog-calendar{display:none!important;position:relative;padding:20px;border-bottom:1px solid #272a3a;overflow:hidden}#blog-calendar #blogCalendar table,#blog-calendar #blogCalendar tbody,#blog-calendar #blogCalendar tr,#blog-calendar #blogCalendar td{display:block}#blog-calendar #blogCalendar tr:nth-child(1){display:flex;flex-direction:row;justify-content:space-between}#blog-calendar #blogCalendar tr:nth-child(1)>td:first-of-type{width:100%}#blog-calendar #blogCalendar tr:nth-child(1)>td:first-of-type td{width:auto}#blog-calendar #blogCalendar tr:nth-child(2){padding:0 3.24px;margin-bottom:5px;border-bottom:1px solid #24273b}#blog-calendar #blogCalendar tr:not(:nth-child(1)){display:flex;justify-content:space-between}#blog-calendar #blogCalendar tr:not(:nth-child(1)) td{display:flex;justify-content:center;align-items:center;width:25px;height:25px}#blog-calendar #blogCalendar tr th,#blog-calendar #blogCalendar tr td{padding:.2rem}#blog-calendar #blogCalendar u{color:var(--color-primary)}#blog-calendar #blogCalendar .CalTodayDay{background-color:#24273b;color:var(--color-primary);border-radius:2px;font-size:.7em}.event-wrapper{position:relative;padding:20px 8px 8px;border-radius:0 0 2px 2px}.event-wrapper img{width:90%;height:120px;display:block;border-radius:2px 2px 0 0;margin:0 auto}.event-wrapper .event-date{position:absolute;left:-14px;top:-14px;font-size:12px;font-weight:700;transform:scale(.8)}.event-wrapper .event-date .event-month{background-color:#1687fa;padding:1px 14px;font-family:DM Sans,sans-serif;color:#fff;text-align:center;border-radius:4px 4px 0 0}.event-wrapper .event-date .event-day{width:100%;backdrop-filter:blur(4px);color:#fff;font-family:DM Sans,sans-serif;background-color:#0006;text-align:center}.event-wrapper .event-title{color:var(--color-basic-700);margin:8px 0 0;font-family:DM Sans,sans-serif;padding:0 14px;font-size:13px}.event-wrapper .event-subtitle{color:var(--color-basic-500);font-family:DM Sans,sans-serif;font-size:12px;font-weight:500;padding:0 14px}#blogCalendar{padding-bottom:30px;position:relative;bottom:-50px}@media screen and (max-width: 767px){.event-wrapper{padding-top:20px}.event-wrapper img{padding-bottom:12px}#home #sideBar{display:none}}.custom-searchbar{display:grid;grid-template-columns:1fr;position:relative;border-bottom:1px solid var(--color-basic-200);background-color:var(--bg-search-bar);z-index:5}.custom-searchbar input{padding:0 54px;border:none;background-color:transparent;background-image:url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='512' height='512'%3e%3cpath d='M508.9 478.7L360 330a201.6 201.6 0 0045.2-127.3C405.3 90.9 314.4 0 202.7 0S0 91 0 202.7s91 202.6 202.7 202.6c48.2 0 92.4-17 127.3-45.2L478.7 509c4.2 4.1 11 4.1 15 0l15.2-15.1c4.1-4.2 4.1-11 0-15zm-306.2-116c-88.3 0-160-71.8-160-160s71.7-160 160-160 160 71.7 160 160-71.8 160-160 160z' data-original='%23000000' class='active-path' data-old_color='%23000000' fill='%23D8D8D8'/%3e%3c/svg%3e");background-repeat:no-repeat;background-size:16px;background-position:25px 50%;color:var(--color-basic-900);font-size:13px;outline:none}.profile{position:relative;display:flex;flex-direction:column;z-index:1}.profile-blur{position:absolute;left:0;top:0;margin:0;width:100%;height:100%;background-repeat:no-repeat;background-size:cover;background-position:center;opacity:.9;z-index:-1;filter:blur(50px)}.profile-banner{position:relative;display:flex;justify-content:center;align-items:center;flex:1;border-radius:4px 4px 0 0;background-position:50%;background-size:cover;background-repeat:no-repeat;overflow:hidden}.profile-banner .profile-signature{position:relative;bottom:24px;max-width:60%;text-align:center;white-space:wrap;font-size:16px;color:#fff;text-shadow:0 0 3px #151728;z-index:2}.profile-menu{display:flex;padding-left:185px;background:var(--bg-profile-menu);border-radius:0 0 4px 4px}.profile-menu a{padding:12px 16px;color:var(--color-basic-900);cursor:pointer;font-size:14px}.profile-menu a.active,.profile-menu a:hover{color:var(--color-primary);background-color:var(--bg-profile-links-hover);transition:.3s}.profile-avatar{position:absolute;align-items:center;display:flex;z-index:1;bottom:16px;left:24px}.profile-avatar img{width:150px;height:150px;border-radius:50%;object-fit:cover;border:3px solid var(--border-avatar)}.profile-msg{position:absolute;left:200px;bottom:80px;z-index:1}.profile-msg button{margin-left:10px;background-color:var(--color-primary);border:none;font-size:12px;color:#fff;border-radius:4px;padding:3px 7px;cursor:pointer}.profile-msg p{display:flex;align-items:center}.profile-msg p:nth-child(1){font-size:22px;color:#fff;font-weight:700;font-family:DM Sans,sans-serif;text-shadow:0 0 3px #33354b}.profile-msg p:nth-child(2){margin-top:12px;font-size:13px;color:#fff;text-shadow:0 0 3px #151728}.profile-msg p:nth-child(2) a,.profile-msg p:nth-child(2) span{margin-right:16px}@media screen and (max-width: 1366px){.profile-menu{padding:0 30px;overflow:auto;font-size:14px}.profile-menu a{padding:10px 8px}.profile-avatar{left:20px;bottom:54px}.profile-avatar img{width:80px;height:80px}.profile-msg{left:114px;bottom:62px}}@media screen and (max-width: 768px){.profile-avatar{left:10px;bottom:38px}.profile-avatar img{width:60px;height:60px}.profile-msg{left:83px;bottom:51px}.profile-banner .profile-signature{max-width:80%;font-size:14px}}.profile-followstate.disabled{cursor:no-drop}#left-side .fas{margin-right:8px}.logo{font-family:DM Sans,sans-serif;font-size:15px;color:var(--color-basic-900);font-weight:700;text-align:center;height:68px;line-height:68px;letter-spacing:4px;position:sticky;top:0;background:var(--bg-logo)}#cnblog-nav ul a{margin-bottom:20px;cursor:pointer}#cnblog-nav a:nth-child(1) span:before{color:#0984e3}#cnblog-nav a:nth-child(2) span:before{color:#00d1b2}#cnblog-nav a:nth-child(3) span:before{color:#ff6b81}#cnblog-nav a:nth-child(4) span:before{color:#10ac84}#cnblog-nav a:nth-child(5) span:before{color:#ffd257}#cnblog-nav a:nth-child(6) span:before{color:#00d1b2}#cnblog-nav a:nth-child(7) span:before{color:#48c774}.side-wrapper{padding:20px}.side-wrapper h3{font-family:DM Sans,sans-serif;color:#5c5e6e;font-size:15px;font-weight:700;margin-bottom:20px}.side-wrapper ul{display:flex;flex-direction:column;font-size:15px;white-space:nowrap}.side-wrapper ul li{text-decoration:none;color:var(--color-basic-700);display:flex;align-items:center}.side-wrapper ul li:not(:last-child){margin-bottom:20px}.side-wrapper ul li:hover{color:var(--color-basic-900)}.left-sidebar_bottom{margin-top:auto}.side-wrapper.links{padding-top:0}.side-wrapper.links a{font-size:13px}.links{overflow-y:auto}.links h3{position:sticky;top:0;background-color:var(--bg-sidebar)}.follow-me{display:flex;align-items:center;text-decoration:none;font-size:14px;overflow:hidden;color:#9c9cab;padding:0 20px;height:52px;border-top:1px solid var(--border-sidebar-block);position:relative}.follow-me .follow-text{display:flex;align-items:center;transition:.3s}.follow-me .developer{position:absolute;left:0;top:-100%;display:flex;transition:.3s;padding:0 20px;align-items:center;background-color:var(--bg-sidebar);width:100%;height:100%}.follow-me .developer img{border-radius:50%;width:26px;height:26px;object-fit:cover;margin-right:10px}.follow-me:hover .follow-text{transform:translateY(100%)}.follow-me:hover .developer{top:0}@media screen and (max-width: 1366px){#cnblog-nav .fas{font-size:22px;margin-right:0}#cnblog-nav .nav-item-text{display:none}#cnblog-nav ul a{margin-bottom:5px}#cnblog-nav ul a li{padding:18px 0}#cnblog-nav ul a li span:last-child{margin-top:10px}.side-wrapper{padding:60px 0 0}.side-wrapper h3{display:none}.side-wrapper ul li{padding:10px 0 5px;flex-direction:column;font-size:12px}.side-wrapper ul li a{margin-top:10px}.side-wrapper ul li:active{filter:brightness(.6)}.logo,.links,.developer span,.follow-text span{display:none}}@media screen and (max-width: 768px){#home #sideBar,#home #left-side{display:none}#blog_nav_rss,#blog_nav_newpost{display:block}.side-wrapper{padding:30px}#left-side #cnblog-nav{padding-top:60px;flex-direction:row;flex-wrap:wrap;border-bottom:1px solid var(--border-sidebar-block)}#left-side #cnblog-nav ul{flex-direction:row}#left-side #cnblog-nav ul a{width:20%}#left-side #cnblog-nav ul a li span:first-child{background-color:var(--bg-tags);border-radius:50%;display:flex;justify-content:center;align-items:center;width:10vw;height:10vw}#left-side #cnblog-nav ul a li span:first-child:before{font-size:16px}#left-side .links{display:block}}@media screen and (min-width: 768px){.mobile-menu{display:none}}@media screen and (max-width: 768px){.mobile-menu{display:none;position:fixed;top:0;left:0;right:0;height:100vh;overflow:auto;z-index:4}.mobile-menu::-webkit-scrollbar{display:none}#side-btn-wrap{visibility:visible;position:fixed;bottom:21.6px;right:27px;padding:10px;background:#fff;box-shadow:1px 1px 8px var(--color-primary);border-radius:50%;z-index:20}#left-side .favourite{padding:30px;border-bottom:1px solid var(--border-sidebar-block)}#left-side .favourite h3{display:block;padding-left:0}#left-side .favourite ul{flex-direction:row;flex-wrap:wrap}#left-side .favourite ul li{padding:.3rem .6rem;border-radius:2px;margin-bottom:.5rem;margin-right:.5rem;background-color:var(--bg-tags);font-size:12px}#left-side .favourite ul li a{margin:0}#custom-mobile-nav .icon{width:27px;margin-left:5px;transform:rotate(90deg)}#side-btn{position:relative;width:25px;height:25px;cursor:pointer}#side-btn-burger{position:absolute;background:var(--color-primary);width:100%;height:3px;top:50%;right:0;margin-top:-1px;opacity:1;transition:all .2s ease-in-out}#side-btn-burger:after,#side-btn-burger:before{border-radius:2px;background:var(--color-primary);position:absolute;width:100%;height:3px;content:"";display:block;transition:all .2s ease-in-out}#side-btn-burger:before{top:8px}#side-btn-burger:after{bottom:8px}#side-btn.side-btn-active #side-btn-burger{background:0 0}#side-btn.side-btn-active #side-btn-burger:before{transition:all .2s;transform:rotate(45deg);top:0}#side-btn.side-btn-active #side-btn-burger:after,#side-btn.side-btn-active #side-btn-burger:before{transition:all .2}#side-btn.side-btn-active #side-btn-burger:after{transition:all .3s;transform:rotate(-45deg);bottom:0}#side-btn.side-btn-active #side-btn-burger:after,#side-btn.side-btn-active #side-btn-burger:before{transition:all .2s}.navbar-burger{cursor:pointer;display:block;width:39px;height:39px;position:absolute;top:0;right:4px;margin-left:auto;z-index:5}.navbar-burger span{background-color:currentColor;display:block;height:1px;left:calc(50% - 8px);position:absolute;transform-origin:center;transition-duration:86ms;transition-property:background-color,opacity,transform;transition-timing-function:ease-out;width:16px}.navbar-burger span:nth-child(1){top:calc(50% - 6px)}.navbar-burger span:nth-child(2){top:calc(50% - 1px)}.navbar-burger span:nth-child(3){top:calc(50% + 4px)}.navbar-burger.is-active span:nth-child(1){transform:translateY(5px) rotate(45deg)}.navbar-burger.is-active span:nth-child(2){opacity:0}.navbar-burger.is-active span:nth-child(3){transform:translateY(-5px) rotate(-45deg)}}.mobile-menu.is-active{display:block;animation:fadeIn .3s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes notyf-fadeinup{0%{opacity:0;transform:translateY(25%)}to{opacity:1;transform:translateY(0)}}@keyframes notyf-fadeinup{0%{opacity:0;transform:translateY(25%)}to{opacity:1;transform:translateY(0)}}@-webkit-keyframes notyf-fadeinleft{0%{opacity:0;transform:translate(25%)}to{opacity:1;transform:translate(0)}}@keyframes notyf-fadeinleft{0%{opacity:0;transform:translate(25%)}to{opacity:1;transform:translate(0)}}@-webkit-keyframes notyf-fadeoutright{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:translate(25%)}}@keyframes notyf-fadeoutright{0%{opacity:1;transform:translate(0)}to{opacity:0;transform:translate(25%)}}@-webkit-keyframes notyf-fadeoutdown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(25%)}}@keyframes notyf-fadeoutdown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(25%)}}@-webkit-keyframes ripple{0%{transform:scale(0) translateY(-45%) translate(13%)}to{transform:scale(1) translateY(-45%) translate(13%)}}@keyframes ripple{0%{transform:scale(0) translateY(-45%) translate(13%)}to{transform:scale(1) translateY(-45%) translate(13%)}}.notyf{position:fixed;top:0;left:0;height:100%;width:100%;color:#fff;z-index:9999;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;pointer-events:none;box-sizing:border-box;padding:20px}.notyf__icon--error,.notyf__icon--success{height:21px;width:21px;background:#fff;border-radius:50%;display:block;margin:0 auto;position:relative}.notyf__icon--error:after,.notyf__icon--error:before{content:"";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px;left:9px;height:12px;top:5px}.notyf__icon--error:after{transform:rotate(-45deg)}.notyf__icon--error:before{transform:rotate(45deg)}.notyf__icon--success:after,.notyf__icon--success:before{content:"";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px}.notyf__icon--success:after{height:6px;transform:rotate(-45deg);top:9px;left:6px}.notyf__icon--success:before{height:11px;transform:rotate(45deg);top:5px;left:10px}.notyf__toast{display:block;overflow:hidden;pointer-events:auto;-webkit-animation:notyf-fadeinup .3s ease-in forwards;animation:notyf-fadeinup .3s ease-in forwards;box-shadow:0 3px 7px #00000040;position:relative;padding:0 15px;border-radius:2px;max-width:300px;transform:translateY(25%);box-sizing:border-box;flex-shrink:0}.notyf__toast--disappear{transform:translateY(0);-webkit-animation:notyf-fadeoutdown .3s forwards;animation:notyf-fadeoutdown .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s}.notyf__toast--disappear .notyf__icon,.notyf__toast--disappear .notyf__message{-webkit-animation:notyf-fadeoutdown .3s forwards;animation:notyf-fadeoutdown .3s forwards;opacity:1;transform:translateY(0)}.notyf__toast--disappear .notyf__dismiss{-webkit-animation:notyf-fadeoutright .3s forwards;animation:notyf-fadeoutright .3s forwards;opacity:1;transform:translate(0)}.notyf__toast--disappear .notyf__message{-webkit-animation-delay:.05s;animation-delay:.05s}.notyf__toast--upper{margin-bottom:20px}.notyf__toast--lower{margin-top:20px}.notyf__toast--dismissible .notyf__wrapper{padding-right:30px}.notyf__ripple{height:400px;width:400px;position:absolute;transform-origin:bottom right;right:0;top:0;border-radius:50%;transform:scale(0) translateY(-51%) translate(13%);z-index:5;-webkit-animation:ripple .4s ease-out forwards;animation:ripple .4s ease-out forwards}.notyf__wrapper{display:flex;align-items:center;padding-top:17px;padding-bottom:17px;padding-right:15px;border-radius:3px;position:relative;z-index:10}.notyf__icon{width:22px;text-align:center;font-size:1.3em;opacity:0;-webkit-animation:notyf-fadeinup .3s forwards;animation:notyf-fadeinup .3s forwards;-webkit-animation-delay:.3s;animation-delay:.3s;margin-right:13px}.notyf__dismiss{position:absolute;top:0;right:0;height:100%;width:26px;margin-right:-15px;-webkit-animation:notyf-fadeinleft .3s forwards;animation:notyf-fadeinleft .3s forwards;-webkit-animation-delay:.35s;animation-delay:.35s;opacity:0}.notyf__dismiss-btn{background-color:#00000040;border:none;cursor:pointer;transition:opacity .2s ease,background-color .2s ease;outline:none;opacity:.35;height:100%;width:100%}.notyf__dismiss-btn:after,.notyf__dismiss-btn:before{content:"";background:#fff;height:12px;width:2px;border-radius:3px;position:absolute;left:calc(50% - 1px);top:calc(50% - 5px)}.notyf__dismiss-btn:after{transform:rotate(-45deg)}.notyf__dismiss-btn:before{transform:rotate(45deg)}.notyf__dismiss-btn:hover{opacity:.7;background-color:#00000026}.notyf__dismiss-btn:active{opacity:.8}.notyf__message{vertical-align:middle;position:relative;opacity:0;-webkit-animation:notyf-fadeinup .3s forwards;animation:notyf-fadeinup .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s;line-height:1.5em}@media only screen and (max-width:480px){.notyf{padding:0}.notyf__ripple{height:600px;width:600px;-webkit-animation-duration:.5s;animation-duration:.5s}.notyf__toast{max-width:none;border-radius:0;box-shadow:0 -2px 7px #00000021;width:100%}.notyf__dismiss{width:56px}}
`;
document.head.appendChild(__vite_style__);
(function() {
    "use strict";
    var ea = "";

    function bo() {
        const o = $("#loading");
        o.length && o.fadeOut(300)
    }

    var go = o => {
        bo()
    };
    const V = Object.assign,
        fo = Array.isArray;

    function X(o) {
        return typeof o == "function"
    }

    function uo() {
        return {
            theme: null,
            config: {
                globalProperties: {}
            }
        }
    }

    function ho() {
        return function() {
            const t = uo(),
                e = new Set,
                n = t.theme = {
                    _context: t,
                    version: "3.0",
                    get config() {
                        return t.config
                    },
                    set config(a) {},
                    use(a, ...r) {
                        return e.has(a) || (a && X(a.install) ? (e.add(a), a.install(n, ...r)) : X(a) && (e.add(a), a(n, ...r))), n
                    }
                };
            return n
        }
    }

    function xo(o) {
        return go(), {
            createTheme: ho()
        }
    }

    function yo(o) {
        return xo().createTheme()
    }

    const vo = (o, t, e) => {
            const n = V({}, o, e);
            return V({}, n, t)
        },
        _o = (o = [], t = {}) => {
            const n = Object.keys(t).find(a => o.includes(a));
            return n ? t[n] : null
        },
        wo = o => {
            const t = window.opts || {};
            if (typeof o == "string") return t[o];
            if (fo(o)) return _o(o, t)
        },
        d = (o, t) => e => vo(t, wo(o), e);
    var na = "";
    const {
        currentBlogApp: ko
    } = window, G = () => window.isBlogOwner, T = () => !!$("#profile_block").length;

    function J() {
        if (T()) return $("#profile_block>a:nth-of-type(1)").html().trim();
        const o = $("#Header1_HeaderTitle").text().trim();
        return o.length ? o : ko
    }

    function $o() {
        return T() ? $("#profile_block a:nth-of-type(3)").text().trim() : "\u672A\u77E5"
    }

    function Co() {
        return T() ? $("#profile_block a:nth-of-type(4)").text().trim() : "\u672A\u77E5"
    }

    function jo() {
        return $("#p_b_follow>a").text().trim() === "-\u53D6\u6D88\u5173\u6CE8"
    }

    function zo() {
        return T() ? $("#profile_block a:nth-of-type(2)").text().trim() : "\u672A\u77E5"
    }

    const To = () => {
        const o = window.cb_blogUserGuid;
        o ? window.follow(o) : $("#p_b_follow>a").trigger("click")
    };

    function Mo() {
        return !!$(".day").length
    }

    function No() {
        return !!$(".entrylistItem").length
    }

    function Lo() {
        return $("#stats_post_count").text().trim().replace(/[^0-9]/gi, "")
    }

    function Eo() {
        return $("#stats_article_count").text().trim().replace(/[^0-9]/gi, "")
    }

    function Io() {
        return $("#stats-comment_count").text().trim().replace(/[^0-9]/gi, "")
    }

    function So() {
        return $("#stats-total-view-count>span").text().trim()
    }

    function Oo(o, t, e, n, a, r, i, s) {
        return `
        <div class="${o ? "custom-card top" : "custom-card"}">
            <a href="${i}">
               <div class="custom-card-title">${t}</div>
            </a>
            <div class="custom-card-desc">${e}</div>
            <div class="custom-card-actions">
                <div>
                    <li class="fas fa-eye"></li>
                    <span>${n}</span>
                </div>
                <div>
                    <li class="fas fa-comment-dots"></li>
                    <span>${a}</span>
                </div>
                <div>
                    <li class="fas fa-thumbs-up"></li>
                    <span>${r}</span>
                </div>
                <a href="${i}"><button>\u9605\u8BFB</button></a>
                <a href="${s}"><button>\u7F16\u8F91</button></a>
            </div>
        </div>
        `
    }

    function Po(o) {
        return o.indexOf("\u7F6E\u9876") !== -1
    }

    function Ao() {
        $(".c_b_p_desc_readmore").remove()
    }

    function Do() {
        $(".pager").length == 2 && $(".pager:first").remove(), $(".forFlow>.entrylistTitle").length === 0 && $(".entrylistTitle").prependTo(".forFlow")
    }

    function qo(o) {
        const t = '<div class="cards-list">';
        ({
            home: () => {
                $(".forFlow").prepend(t)
            },
            category: () => {
                $(".entrylistTitle").after(t)
            }
        })[o]()
    }

    function Bo({
                    page: o,
                    wrap: t,
                    find: e,
                    callback: n
                }) {
        qo(o);
        const a = $(t).find(e);
        for (var r = 0; r < a.length; r += 3) {
            const i = $(a.slice(r, r + 3)[0]),
                s = $(a.slice(r, r + 3)[1]),
                l = $(a.slice(r, r + 3)[2]),
                p = i.text().trim(),
                c = i.find("a").attr("href"),
                u = s.html(),
                w = l.find("a:last").attr("href"),
                y = Po(p),
                C = j => l.find(`${j}`).text() ? l.find(`${j}`).text().match(/\(([^)]*)\)/)[1] : 0,
                S = C(".post-view-count"),
                O = C(".post-digg-count"),
                P = C(".post-comment-count");
            $(".cards-list").append(Oo(y, p, u, S, P, O, c, w))
        }
        n()
    }

    var Fo = () => {
            const o = Mo(),
                t = No();
            if (!o && !t) return;
            Ao();
            let e = {};
            o && (e = {
                page: "home",
                wrap: ".day",
                find: ".postTitle,.postCon,.postDesc",
                callback() {
                    $(".day").remove()
                }
            }), t && (Do(), e = {
                page: "category",
                wrap: ".entrylistItem",
                find: ".entrylistPosttitle,.entrylistPostSummary,.entrylistItemPostDesc",
                callback() {
                    $(".entrylist").remove()
                }
            }), Bo(e)
        },
        aa = "";
    const k = d("theme", {
            name: "reacg",
            color: "#FFB3CC",
            avatar: "",
            headerBackground: ""
        }),
        Ho = d("bodyBackground", {
            enable: !1,
            value: "",
            opacity: .85,
            repeat: !1
        }),
        Yo = d("catalog", {
            enable: !1,
            position: "left"
        }),
        Ro = d(["clickEffects", "click"], {
            enable: !1,
            colors: [],
            size: 30,
            maxCount: 10
        }),
        Uo = d("codeCopy", {
            enable: !1
        }),
        Wo = d(["codeHighlight", "highLight"], {
            dark: "atomOneDark",
            light: "atomOneLight"
        }),
        Z = d("codeLang", {
            enable: !1
        }),
        Vo = d("codeTrafficLight", {
            enable: !1
        }),
        Xo = d("emoji", {
            enable: !1,
            buttonIcon: "",
            emojiList: []
        }),
        Go = d("links", {
            enable: !1,
            value: []
        }),
        Jo = d(["imagePreview", "imagebox"], {
            enable: !1
        }),
        Zo = d("live2d", {
            enable: !1,
            page: "all",
            agent: "pc",
            model: "haru-01",
            width: 150,
            height: 200,
            position: "left",
            gap: "default"
        }),
        Qo = d(["mode", "darkMode"], {
            enable: !1,
            darkDefault: !1,
            autoDark: !1,
            autoLight: !1
        }),
        Ko = d("musicPlayer", {
            enable: !1,
            page: "all",
            agent: "pc",
            autoplay: !1,
            volume: .4,
            lrc: {
                enable: !1,
                type: 1,
                color: ""
            },
            audio: [{
                name: "404 not found",
                artist: "REOL",
                url: "https://guangzan.gitee.io/imagehost/awescnb/music/demo4.mp3",
                cover: "https://guangzan.gitee.io/imagehost/awescnb/music/demo.jpg",
                lrc: ""
            }]
        }),
        ot = d("notice", {
            enable: !1,
            contents: []
        }),
        tt = d(["license", "postSignature"], {
            enable: !1,
            license: !0,
            licenseName: "",
            licenseLink: "",
            contents: []
        }),
        et = d("signature", {
            enable: !1,
            contents: []
        }),
        nt = d("tools", {
            initialOpen: !0,
            mobileAutoClose: !0
        }),
        at = d("github", {
            enable: !1,
            color: "#ffb3cc",
            url: ""
        }),
        rt = d("webTag", {
            enable: !1,
            title: "",
            favicon: ""
        });

    function it() {
        let o = new Date().getMonth();
        if (o < 3) return "Spring";
        if (o < 6) return "Summer";
        if (o < 9) return "Autumn";
        if (o < 12) return "Winter"
    }

    function st() {
        const o = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
            t = new Date().getMonth();
        return o[t]
    }

    function Q(o, t) {
        if (o()) {
            const e = t();
            return typeof e == "boolean" || typeof e == "string" ? e : !0
        } else {
            let e = 1,
                n = setInterval(() => {
                    if (o()) {
                        const a = t();
                        return typeof a == "boolean" || typeof a == "string" ? a : (clearInterval(n), !0)
                    }
                    if (e === 180) return clearInterval(n), !1;
                    e++
                }, 1e3)
        }
    }

    function lt() {
        return $(window).width() > 768 ? "pc" : "phone"
    }

    const {
            currentBlogApp: M
        } = window,
        ct = J(),
        K = "https://home.cnblogs.com",
        D = "http://www.blog51.com",
        oo = "https://i.cnblogs.com",
        to = "https://msg.cnblogs.com",
        dt = `${K}/u/${M}/followers`,
        pt = `${K}/u/${M}/followees`,
        mt = D, bt = `${D}/${M}/rss`,
        // N = `${D}/${M}`,
        N = `${D}`,
        gt = `${oo}/posts/edit`,
        ft = $("#blog_nav_contact").attr("href"),
        ut = oo,
        ht = `${to}`,
        xt = `${to}/send/${ct}`,
        yt = "https://wz.cnblogs.com",
        vt = "https://q.cnblogs.com",
        _t = "https://ing.cnblogs.com",
        wt = "https://group.cnblogs.com",
        kt = "https://i.cnblogs.com/posts";
    k().avatar;

    function $t() {
        $("#sideBar").appendTo($("#home"))
    }

    function Ct() {
        const o = $("#msg_count").text(),
            t = `
    <div class="account">
        <div class="account-button email">
            <a href="${xt}" target="_bank">
                <li class="fas fa-envelope"></li>
            </a>
        </div>
        <div class="account-button message">
            <a href="${ht}" class='account-button-notice'>
                <li class="fas fa-bell"></li>
                <span class="notice-count" ${!o && "style=display:none"}>${o}</span>
            </a>
        </div>
        <div class="account-button stats">
            <div class="account-button-stats">
                <li class="fas fa-chart-bar"></li>
            </div>
        </div>
    </div>`;
        $("#sideBarMain").prepend(t)
    }

    function jt() {
        const {
            enable: o,
            url: t
        } = at({
            enable: !0
        }), e = `<div class="account-avatar">
                <a href="${t}"><i class="fab fa-github"></i></a>
              </div>`;
        $(".account").append(e)
    }

    function zt() {
        Q(() => !Number.isNaN(parseInt($("#stats_post_count").text().trim().replace(/[^0-9]/gi, ""))), () => {
            const o = `<ul class="stat-list">
                      <li>\u968F\u7B14\uFF1A<span>${Lo()}</span></li>
                      <li>\u6587\u7AE0\uFF1A<span>${Eo()}</span></li>
                      <li>\u8BC4\u8BBA\uFF1A<span>${Io()}</span></li>
                      <li>\u9605\u8BFB\uFF1A<span>${So()}</span></li>
                    </ul>`;
            $(".account-button-stats").after(o)
        })
    }

    function Tt() {
        const o = it(),
            t = `/static/awescnb/Illustrations/${o.toLowerCase()}.png`,
            e = st(),
            n = new Date,
            a = n.getFullYear(),
            r = n.getDate() < 10 ? "0" + n.getDate() : n.getDate(),
            i = `
    <div id="custom-calendar" class="sidebar-block">
        <div class="event-wrapper">
            <img src="${t}" class="event-img">
            <div class="event-title">${o} Wonderland</div>
            <div class="event-subtitle">${r} ${e}, ${a}</div>
            <div class="event-date">
                <div class="event-month">${e}</div>
                <div class="event-day">${r}</div>
            </div>
        </div>
    </div>
    `;
        $("#leftcontentcontainer").before($(i))
    }

    var Mt = () => {
            $t(), Ct(), zt(), jt(), Tt()
        },
        ra = "";
    const Nt = () => {
        const o = '<div class="custom-searchbar"><input id="q" type="text" placeholder="Search..." onkeydown="return zzk_go_enter(event);"/></div>';
        $("#main").prepend(o), $("#sidebar_search").remove()
    };
    var ia = "";

    function Lt() {
        return $("<div>").addClass("profile")
    }

    function Et() {
        return $("<div>").addClass("profile-signature")
    }

    function It() {
        const {
            headerBackground: o
        } = k(), t = Et();
        return $("<div>").addClass("profile-banner").css("backgroundImage", `url(${o})`).append(t)
    }

    function St() {
        const o = $("<div>").addClass("profile-menu");
        return [{
            title: "\u9996\u9875",
            url: N,
            target: "_self"
        },
            // {title: "\u6536\u85CF", url: yt, target: "_blank"},
            // {title: "\u95EA\u5B58", url: _t, target: "_blank"},
            // {title: "\u5C0F\u7EC4", url: wt, target: "_blank"},
            // {title: "\u535A\u95EE", url: vt, target: "_blank"}
        ].forEach(e => {
            const n = $("<a>").attr("target", e.target).attr("href", e.url).text(e.title);
            o.append(n)
        }), o
    }

    function Ot() {
        const {
            headerBackground: o
        } = k();
        return $("<div>").addClass("profile-blur").css("backgroundImage", `url(${o})`)
    }

    function Pt() {
        const {
            avatar: o
        } = k();
        return $("<div>").addClass("profile-avatar").append(`<a href="${N}"><img src="${o}" /></a>`)
    }

    function At() {
        return $("<div>").addClass("profile-msg")
            .append($("<p>")
                .append($("<a>").addClass("profile-nickname").attr("href", N))
                .append($("<button>").addClass("profile-followstate").attr("href", N).text("+ \u5173\u6CE8"))
            )
            .append($("<p>")
                    //后期根据需求改动
                    .append($("<span>").addClass("profile-age").text("\u56ED\u9F84\uFF1A0.5\u5929"))
                // .append($("<a>").addClass("profile-followers").attr("href", dt).text("\u7C89\u4E1D\uFF1A"))
                // .append($("<a>").addClass("profile-following").attr("href", pt).text("\u5173\u6CE8\uFF1A"))
            )
    }

    function Dt() {
        $(".profile-msg button").click(function() {
            if (G()) return;
            const o = $(".profile-followstate");
            o.text() === "+ \u5173\u6CE8" && (To(), o.text("\u5DF2\u5173\u6CE8"))
        })
    }

    function qt() {
        const o = jo(),
            t = J(),
            e = zo(),
            n = $o(),
            a = Co();
        $(".profile-nickname").text(t),
            $(".profile-age").append(e),
            $(".profile-followers").append(n),
            $(".profile-following").append(a),
            $(".profile-followstate").text(o ? "\u5DF2\u5173\u6CE8" : "+ \u5173\u6CE8")
    }

    var Bt = () => {
            const o = Lt(),
                t = It(),
                e = St(),
                n = Ot(),
                a = At(),
                r = Pt();
            o.append(t).append(e).append(n).append(r).append(a),
                $("#mainContent").prepend(o),
                Dt(),
                Q(() => $("#home #profile_block>a").length, qt)
        },
        sa = "";
    const Ft = () => {
            const o = $("<div id='left-side'></div>");
            $("#home").append(o)
        },
        Ht = () => {
            const o = $(`<div class='logo'>
                    <a href="javascript:;">Personal BLOG</a>
                </div>`);
            $("#left-side").append(o)
        },
        Yt = () => {
            function o(a) {
                for (const [r] of Object.entries(e))
                    if (!Number.isNaN(parseInt(r))) return !0;
                return !1
            }

            let t;
            const e = Go();
            if (o()) {
                t = [];
                for (const [a, r] of Object.entries(e)) Number.isNaN(parseInt(a)) || t.push(r)
            } else {
                const {
                    enable: a,
                    value: r
                } = e;
                if (t = r, !a) return
            }
            const n = $(`<div class="links side-wrapper">
                      <h3>LINKS</h3>
                      <ul></ul>
                  </div>`);
            for (const {
                name: a,
                link: r
            } of t) n.find("ul").append(`<li><a href="${r}" target="_blank">${a}</a></li>`);
            $("#left-side").append(n)
        },
        Rt = () => {
            const o = [{
                    icon: "fa-blog",
                    title: "\u535A\u5BA2\u56ED",
                    url: mt,
                    allowVisit: !0
                }, {
                    icon: "fa-home",
                    title: "\u9996\u9875",
                    url: N,
                    allowVisit: !0
                }, {
                    icon: "fa-pen-square",
                    title: "\u65B0\u968F\u7B14",
                    url: gt,
                    allowVisit: !0
                }, {
                    icon: "fa-paper-plane",
                    title: "\u8349\u7A3F\u7BB1",
                    url: kt,
                    allowVisit: !0
                }, {
                    icon: "fa-envelope",
                    title: "\u8054\u7CFB",
                    url: ft,
                    allowVisit: !0
                }, {
                    icon: "fa-rss",
                    title: "\u8BA2\u9605",
                    url: bt,
                    allowVisit: !0
                }, {
                    icon: "fa-cog",
                    title: "\u7BA1\u7406",
                    url: ut,
                    allowVisit: !1
                }],
                t = $(`
    <div id="cnblog-nav" class="side-wrapper">
        <h3>MENU</h3>
        <ul></ul>
    </div>
    `);
            for (const {
                icon: e,
                title: n,
                url: a,
                allowVisit: r
            } of o) {
                const i = n === "\u9996\u9875" ? "_self" : "_blank",
                    s = $(`<a href="${a}" target="${i}">
            <li>
                <span class="fas fa-fw ${e}"></span>
                <span class="nav-item-text">${n}</span>
            </li>
        </a>`);
                !G && !r || (n === "\u8BA2\u9605" && s.removeAttr("target").attr({
                    "data-rss": a,
                    href: "javascript:void(0)",
                    onclick: '$("#blog_nav_rss").trigger("click");'
                }), t.find("ul").append(s))
            }
            $("#left-side .logo").after(t)
        };
    var Ut = () => {
            Ft(), Ht(), Yt(), Rt()
        },
        la = "";

    function Wt() {
        const o = $("<div>").addClass("mobile-menu");
            $("#left-side").clone().appendTo(o),
            $("#sideBar").clone().appendTo(o),
            $("body").append(o),
            $(".mobile-menu #catalog").remove()
    }

    function Vt() {
        const o = '<div id="navbarBurger" class="navbar-burger burger" data-target="navMenuMore"><span></span> <span></span><span></span></div>';
        $(o).appendTo(".custom-searchbar").click(function() {
            $(this).toggleClass("is-active"), $(".mobile-menu").toggleClass("is-active")
        })
    }

    var Xt = () => {
        lt() !== "pc" && (Wt(), Vt())
    };
    const Gt = () => {
            $(".clear").remove()
        },
        Jt = () => {
            $("#footer").appendTo("#main")
        };
    var Zt = () => {
        Gt(), Jt(), Fo(), Mt(), Nt(), Bt(), Ut(), Xt()
    };

    function Qt(o) {
        return navigator.clipboard.writeText(o)
    }

    function Kt(o, t) {
        const e = () => {
                $(document).unbind("mousewheel DOMMouseScroll")
            },
            n = () => {
                o(), e()
            },
            a = () => {
                o(), e()
            };
        $(document).on("mousewheel DOMMouseScroll", function(r) {
            const i = r.originalEvent.wheelDelta || -r.originalEvent.detail;
            Math.max(-1, Math.min(1, i)) < 0 ? n() : a()
        })
    }

    function oe(o) {
        $("head").append("<link>"),
        $("head").children(":last").attr({
            rel: "stylesheet",
            type: "text/css",
            href: o
        })
    }

    function q(o, t) {
        if (o()) {
            const e = t();
            return typeof e == "boolean" || typeof e == "string" ? e : !0
        } else {
            let e = 1,
                n = setInterval(() => {
                    if (o()) {
                        const a = t();
                        return typeof a == "boolean" || typeof a == "string" ? a : (clearInterval(n), !0)
                    }
                    if (e === 50) return clearInterval(n), !1;
                    e++
                }, 500)
        }
    }

    function L(o, t = function() {}) {
        $.ajax({
            type: "GET",
            dataType: "script",
            cache: !0,
            url: o,
            success() {
                t()
            }
        })
    }

    function te(o, t, e) {
        let n;
        return function() {
            let a = this,
                r = arguments,
                i = function() {
                    n = null, e || o.apply(a, r)
                },
                s = e && !n;
            clearTimeout(n), n = setTimeout(i, t), s && o.apply(a, r)
        }
    }

    function ee(o) {
        let t, e = 0;
        for (let n in o) Math.random() < 1 / ++e && (t = n);
        return t
    }

    function ne(o) {
        let t = "";
        if (o === "rgba") {
            const e = Math.floor(Math.random() * 256),
                n = Math.floor(Math.random() * 256),
                a = Math.floor(Math.random() * 256);
            t = `rgba(${e},${n},${a},${.6})`
        } else if (o === "16") t = "#" + Math.floor(Math.random() * 16777215).toString(16);
        else {
            const e = o || ["#FE0302", "#FF7204", "#FFAA02", "#FFD302", "#FFFF00", "#A0EE00", "#00CD00", "#019899", "#4266BE", "#89D5FF", "#CC0273", "#CC0273"],
                n = Math.floor(Math.random() * e.length);
            t = e[n]
        }
        return t
    }

    function ae(o) {
        const {
            top: t,
            bottom: e,
            left: n,
            right: a,
            height: r,
            width: i
        } = o.getBoundingClientRect();
        return {
            top: t,
            bottom: e,
            left: n,
            right: a,
            height: r || e - t,
            width: i || a - n
        }
    }

    function E() {
        return $(window).width() > 768 ? "pc" : "phone"
    }

    function re() {
        return $(window).width() <= 768
    }

    function eo(o) {
        return new RegExp("http").test(o)
    }

    function ie(o, t) {
        $(t).css("opacity", `${o}`)
    }

    function se(o, t) {
        const e = eo(o) ? "img" : "color";
        e === "color" && $("body").css("background-color", `${o}`),
        e === "img" && ($("body").css("background-image", `url(${o})`),
        t || ($("body").css({"background-repeat": "no-repeat", "background-size": "100% 100%", "background-attachment": "fixed"}),
        E() === "phone" && $("body").css("background-size", "cover")))
    }

    const le = (o, t, e) => {
            const {
                enable: n,
                opacity: a,
                value: r,
                repeat: i
            } = Ho(t);
            if (!n) return;
            const {
                opacitySelector: s
            } = Object.assign({}, {
                opacitySelector: "#main,#navigator"
            }, e);
            se(r, i), ie(a, s)
        },
        {
            currentBlogApp: ce
        } = window,
        de = () => !!$("#profile_block").length;

    function pe() {
        if (de()) return $("#profile_block>a:nth-of-type(1)").html().trim();
        const o = $("#Header1_HeaderTitle").text().trim();
        return o.length ? o : ce
    }

    function me() {
        return location.href.indexOf("#") === -1 ? location.href : location.href.substring(0, location.href.lastIndexOf("#"))
    }

    function h() {
        return !!$("#post_detail").length
    }

    function no() {
        return !!$(".gallery").length
    }

    function x() {
        return $("#post_detail").length ? "post" : $(".day").length ? "index" : $("#taglist_main").length ? "tag" : $(".entrylistPosttitle").length ? "list" : $("#myposts").length ? "tag" : void 0
    }

    function g() {
        return $("#cnblogs_post_body").hasClass("cnblogs-markdown")
    }

    function be() {
        return !!$("#cnblogs_post_body>h1,#cnblogs_post_body>h2,#cnblogs_post_body>h3,#cnblogs_post_body>h4").length
    }

    function ge() {
        $(".diggit").trigger("click")
    }

    function fe(o) {
        const t = $('<nav id="catalog"></nav>');
        return o && t.append("<h3 class='catalog-title'>\u76EE\u5F55</h3>"), t
    }

    function ue() {
        const o = $("<ul>"),
            t = /^h[1-6]$/;
        return $("#cnblogs_post_body :header").each(function(e) {
            if (t.test(this.tagName.toLowerCase())) {
                const n = `${this.nodeName.toLowerCase()}-list`,
                    a = $(this).children(".math.inline");
                let r, i;
                if (a.length ? r = a.prop("outerHTML") + $(this).contents().filter(function() {
                    return this.nodeType === 3
                }).text() : r = $(this).text(), r.length === 0) return;
                this.id !== "" ? i = this.id : (i = r.trim(), $(this).attr("id", i));
                const s = $(`<li class='${n}'><a href='#${i}'>${r}</a></li>`);
                e === 0 && s.addClass("catalog-active"), o.append(s)
            }
        }), o
    }

    function he(o, t, e) {
        const n = fe(e),
            a = ue(),
            r = n.append(a);
        $(o)[t]($(r))
    }

    function xe(o, t) {
        $(o).scroll(te(() => {
            ve(), ye(o, t)
        }, 50, 1e3 / 60))
    }

    function ye(o, t) {
        if (!t) return;
        const e = $("#catalog");
        if (o.scrollY < 100) return e.stop().animate({
            scrollTop: 0
        }, 800);
        $("#cnblogs_post_body :header").each(function() {
            const n = $(this).attr("id"),
                a = $('a[href="#' + n + '"]', e);
            if ($(this).offset().top - $(window).height() / 2 < $(window).scrollTop() && $(this).offset().top + $(this).height() - $(window).height() / 2 > $(window).scrollTop()) {
                const r = a.position().top + e.scrollTop();
                return e.stop().animate({
                    scrollTop: r
                }, 800)
            }
        })
    }

    function ve() {
        for (let o = $("#catalog ul li").length - 1; o >= 0; o--) {
            const t = $($("#catalog ul li")[o]).find("a").attr("href").replace(/[#]/g, ""),
                e = document.querySelector(`#cnblogs_post_body [id='${t}']`);
            if (ae(e).top <= 100) {
                if ($($("#catalog ul li")[o]).hasClass("catalog-active")) return;
                $($("#catalog ul li")[o]).addClass("catalog-active"), $($("#catalog ul li")[o]).siblings().removeClass("catalog-active");
                return
            }
        }
    }

    function _e() {
        $(".catalog-title").click(function() {
            $("#catalog ul").toggle("fast", "linear", function() {
                $(this).css("display") === "none" ? $(".catalog-title").removeClass("is-active") : $(".catalog-title").addClass("is-active")
            })
        })
    }

    function we(o) {
        o || $("#catalog").css({
            overflow: "hidden"
        })
    }

    function ke(o, t, e = {}) {
        const n = {
            mountedNode: "body",
            fn: "append",
            scrollContainer: window,
            updateNavigation: !1,
            showTitle: !0,
            showScrollbar: !0
        };
        $.extend(!0, n, e);
        const {
            enable: a
        } = Yo(t);
        a && be() && x() === "post" && E() === "pc" && (he(n.mountedNode, n.fn, n.showTitle), xe(n.scrollContainer, n.updateNavigation), _e(), we(n.showScrollbar))
    }

    const $e = "https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/medium-zoom/1.0.6/medium-zoom.min.js",
        Ce = "https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js",
        je = "https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.css",
        ze = "/static/awescnb/lib/typed.min.js";

    function ao(o) {
        const t = {
            colors: ["#eb125f", "#6eff8a", "#6386ff", "#f9f383"],
            size: 30,
            maxCount: 30
        };
        this.params = Object.assign({}, t, o), o.colors.length || (this.params.colors = t.colors)
    }

    function Te(o) {
        return o[Math.floor(Math.random() * o.length)]
    }

    function Me(o) {
        let t = Math.random() > .5,
            e = Math.random() > .5,
            n = parseInt(Math.random() * 160),
            a = parseInt(Math.random() * 160);
        t && (n = n * -1), e && (a = a * -1);
        let r = "translate3d(" + n + "px," + a + "px, 0) scale(0)";
        o.style.webkitTransform = r, o.style.MozTransform = r, o.style.msTransform = r, o.style.OTransform = r, o.style.transform = r
    }

    ao.prototype.fly = function(o, t, e, n) {
        n || (n = 300);
        let a = [],
            r = document.createDocumentFragment(),
            i = this.params.maxCount;
        e && (i = i * e);
        let s = 0;
        for (let l = 0; l < i; l++) {
            let p = parseInt(l / this.params.maxCount),
                c = document.createElement("i");
            c.className = "color-ball ball-loop-" + p, c.style.left = o + "px", c.style.top = t + "px", c.style.width = this.params.size + "px", c.style.height = this.params.size + "px", c.style.position = "fixed", c.style.borderRadius = "1000px", c.style.boxSizing = "border-box", c.style.zIndex = 9999, c.style.opacity = 0, p === 0 && (c.style.opacity = 1), c.style.transform = "translate3d(0px, 0px, 0px) scale(1)", c.style.transition = "transform 0.7s " + p * n / 1e3 + "s ease-out", c.style.backgroundColor = Te(this.params.colors), r.appendChild(c), a.push(c), p !== s && (function(u) {
                setTimeout(function() {
                    let w = document.getElementsByClassName("ball-loop-" + u);
                    for (let y = 0; y < w.length; y++) w[y].style.opacity = 1;
                    u === s && ro(a)
                }, u * n + 30)
            }(p), s = p)
        }
        document.body.appendChild(r), !e && ro(a), setTimeout(function() {
            for (let l = 0; l < a.length; l++) Me(a[l])
        }, 10)
    };

    function ro(o) {
        setTimeout(function() {
            for (let t = 0; t < o.length; t++) document.body.removeChild(o[t])
        }, 1e3)
    }

    const Ne = o => {
            const t = {
                    colors: o.colors,
                    size: o.size,
                    maxCount: o.maxCount
                },
                e = new ao(t);
            $("body").click(n => {
                e.fly(n.clientX, n.clientY)
            })
        },
        Le = (o, t) => {
            const e = Ro(t);
            e.enable && Ne(e)
        };
    /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.

      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.

      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
    var m = function() {
            return m = Object.assign || function(t) {
                for (var e, n = 1, a = arguments.length; n < a; n++) {
                    e = arguments[n];
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                }
                return t
            }, m.apply(this, arguments)
        },
        Ee = function() {
            function o(t) {
                this.options = t, this.listeners = {}
            }

            return o.prototype.on = function(t, e) {
                var n = this.listeners[t] || [];
                this.listeners[t] = n.concat([e])
            }, o.prototype.triggerEvent = function(t, e) {
                var n = this,
                    a = this.listeners[t] || [];
                a.forEach(function(r) {
                    return r({
                        target: n,
                        event: e
                    })
                })
            }, o
        }(),
        _;
    (function(o) {
        o[o.Add = 0] = "Add", o[o.Remove = 1] = "Remove"
    })(_ || (_ = {}));
    var Ie = function() {
            function o() {
                this.notifications = []
            }

            return o.prototype.push = function(t) {
                this.notifications.push(t), this.updateFn(t, _.Add, this.notifications)
            }, o.prototype.splice = function(t, e) {
                var n = this.notifications.splice(t, e)[0];
                return this.updateFn(n, _.Remove, this.notifications), n
            }, o.prototype.indexOf = function(t) {
                return this.notifications.indexOf(t)
            }, o.prototype.onUpdate = function(t) {
                this.updateFn = t
            }, o
        }(),
        f;
    (function(o) {
        o.Dismiss = "dismiss", o.Click = "click"
    })(f || (f = {}));
    var io = {
            types: [{
                type: "success",
                className: "notyf__toast--success",
                backgroundColor: "#3dc763",
                icon: {
                    className: "notyf__icon--success",
                    tagName: "i"
                }
            }, {
                type: "error",
                className: "notyf__toast--error",
                backgroundColor: "#ed3d3d",
                icon: {
                    className: "notyf__icon--error",
                    tagName: "i"
                }
            }],
            duration: 2e3,
            ripple: !0,
            position: {
                x: "right",
                y: "bottom"
            },
            dismissible: !1
        },
        Se = function() {
            function o() {
                this.notifications = [], this.events = {}, this.X_POSITION_FLEX_MAP = {
                    left: "flex-start",
                    center: "center",
                    right: "flex-end"
                }, this.Y_POSITION_FLEX_MAP = {
                    top: "flex-start",
                    center: "center",
                    bottom: "flex-end"
                };
                var t = document.createDocumentFragment(),
                    e = this._createHTMLElement({
                        tagName: "div",
                        className: "notyf"
                    });
                t.appendChild(e), document.body.appendChild(t), this.container = e, this.animationEndEventName = this._getAnimationEndEventName(), this._createA11yContainer()
            }

            return o.prototype.on = function(t, e) {
                var n;
                this.events = m(m({}, this.events), (n = {}, n[t] = e, n))
            }, o.prototype.update = function(t, e) {
                e === _.Add ? this.addNotification(t) : e === _.Remove && this.removeNotification(t)
            }, o.prototype.removeNotification = function(t) {
                var e = this,
                    n = this._popRenderedNotification(t),
                    a;
                if (!!n) {
                    a = n.node, a.classList.add("notyf__toast--disappear");
                    var r;
                    a.addEventListener(this.animationEndEventName, r = function(i) {
                        i.target === a && (a.removeEventListener(e.animationEndEventName, r), e.container.removeChild(a))
                    })
                }
            }, o.prototype.addNotification = function(t) {
                var e = this._renderNotification(t);
                this.notifications.push({
                    notification: t,
                    node: e
                }), this._announce(t.options.message || "Notification")
            }, o.prototype._renderNotification = function(t) {
                var e, n = this._buildNotificationCard(t),
                    a = t.options.className;
                return a && (e = n.classList).add.apply(e, a.split(" ")), this.container.appendChild(n), n
            }, o.prototype._popRenderedNotification = function(t) {
                for (var e = -1, n = 0; n < this.notifications.length && e < 0; n++) this.notifications[n].notification === t && (e = n);
                if (e !== -1) return this.notifications.splice(e, 1)[0]
            }, o.prototype.getXPosition = function(t) {
                var e;
                return ((e = t == null ? void 0 : t.position) === null || e === void 0 ? void 0 : e.x) || "right"
            }, o.prototype.getYPosition = function(t) {
                var e;
                return ((e = t == null ? void 0 : t.position) === null || e === void 0 ? void 0 : e.y) || "bottom"
            }, o.prototype.adjustContainerAlignment = function(t) {
                var e = this.X_POSITION_FLEX_MAP[this.getXPosition(t)],
                    n = this.Y_POSITION_FLEX_MAP[this.getYPosition(t)],
                    a = this.container.style;
                a.setProperty("justify-content", n), a.setProperty("align-items", e)
            }, o.prototype._buildNotificationCard = function(t) {
                var e = this,
                    n = t.options,
                    a = n.icon;
                this.adjustContainerAlignment(n);
                var r = this._createHTMLElement({
                        tagName: "div",
                        className: "notyf__toast"
                    }),
                    i = this._createHTMLElement({
                        tagName: "div",
                        className: "notyf__ripple"
                    }),
                    s = this._createHTMLElement({
                        tagName: "div",
                        className: "notyf__wrapper"
                    }),
                    l = this._createHTMLElement({
                        tagName: "div",
                        className: "notyf__message"
                    });
                l.innerHTML = n.message || "";
                var p = n.background || n.backgroundColor;
                if (a) {
                    var c = this._createHTMLElement({
                        tagName: "div",
                        className: "notyf__icon"
                    });
                    if ((typeof a == "string" || a instanceof String) && (c.innerHTML = new String(a).valueOf()), typeof a == "object") {
                        var u = a.tagName,
                            w = u === void 0 ? "i" : u,
                            y = a.className,
                            C = a.text,
                            S = a.color,
                            O = S === void 0 ? p : S,
                            P = this._createHTMLElement({
                                tagName: w,
                                className: y,
                                text: C
                            });
                        O && (P.style.color = O), c.appendChild(P)
                    }
                    s.appendChild(c)
                }
                if (s.appendChild(l), r.appendChild(s), p && (n.ripple ? (i.style.background = p, r.appendChild(i)) : r.style.background = p), n.dismissible) {
                    var j = this._createHTMLElement({
                            tagName: "div",
                            className: "notyf__dismiss"
                        }),
                        W = this._createHTMLElement({
                            tagName: "button",
                            className: "notyf__dismiss-btn"
                        });
                    j.appendChild(W), s.appendChild(j), r.classList.add("notyf__toast--dismissible"), W.addEventListener("click", function(A) {
                        var z, v;
                        (v = (z = e.events)[f.Dismiss]) === null || v === void 0 || v.call(z, {
                            target: t,
                            event: A
                        }), A.stopPropagation()
                    })
                }
                r.addEventListener("click", function(A) {
                    var z, v;
                    return (v = (z = e.events)[f.Click]) === null || v === void 0 ? void 0 : v.call(z, {
                        target: t,
                        event: A
                    })
                });
                var ta = this.getYPosition(n) === "top" ? "upper" : "lower";
                return r.classList.add("notyf__toast--" + ta), r
            }, o.prototype._createHTMLElement = function(t) {
                var e = t.tagName,
                    n = t.className,
                    a = t.text,
                    r = document.createElement(e);
                return n && (r.className = n), r.textContent = a || null, r
            }, o.prototype._createA11yContainer = function() {
                var t = this._createHTMLElement({
                    tagName: "div",
                    className: "notyf-announcer"
                });
                t.setAttribute("aria-atomic", "true"), t.setAttribute("aria-live", "polite"), t.style.border = "0", t.style.clip = "rect(0 0 0 0)", t.style.height = "1px", t.style.margin = "-1px", t.style.overflow = "hidden", t.style.padding = "0", t.style.position = "absolute", t.style.width = "1px", t.style.outline = "0", document.body.appendChild(t), this.a11yContainer = t
            }, o.prototype._announce = function(t) {
                var e = this;
                this.a11yContainer.textContent = "", setTimeout(function() {
                    e.a11yContainer.textContent = t
                }, 100)
            }, o.prototype._getAnimationEndEventName = function() {
                var t = document.createElement("_fake"),
                    e = {
                        MozTransition: "animationend",
                        OTransition: "oAnimationEnd",
                        WebkitTransition: "webkitAnimationEnd",
                        transition: "animationend"
                    },
                    n;
                for (n in e)
                    if (t.style[n] !== void 0) return e[n];
                return "animationend"
            }, o
        }(),
        Oe = function() {
            function o(t) {
                var e = this;
                this.dismiss = this._removeNotification, this.notifications = new Ie, this.view = new Se;
                var n = this.registerTypes(t);
                this.options = m(m({}, io), t), this.options.types = n, this.notifications.onUpdate(function(a, r) {
                    return e.view.update(a, r)
                }), this.view.on(f.Dismiss, function(a) {
                    var r = a.target,
                        i = a.event;
                    e._removeNotification(r), r.triggerEvent(f.Dismiss, i)
                }), this.view.on(f.Click, function(a) {
                    var r = a.target,
                        i = a.event;
                    return r.triggerEvent(f.Click, i)
                })
            }

            return o.prototype.error = function(t) {
                var e = this.normalizeOptions("error", t);
                return this.open(e)
            }, o.prototype.success = function(t) {
                var e = this.normalizeOptions("success", t);
                return this.open(e)
            }, o.prototype.open = function(t) {
                var e = this.options.types.find(function(r) {
                        var i = r.type;
                        return i === t.type
                    }) || {},
                    n = m(m({}, e), t);
                this.assignProps(["ripple", "position", "dismissible"], n);
                var a = new Ee(n);
                return this._pushNotification(a), a
            }, o.prototype.dismissAll = function() {
                for (; this.notifications.splice(0, 1););
            }, o.prototype.assignProps = function(t, e) {
                var n = this;
                t.forEach(function(a) {
                    e[a] = e[a] == null ? n.options[a] : e[a]
                })
            }, o.prototype._pushNotification = function(t) {
                var e = this;
                this.notifications.push(t);
                var n = t.options.duration !== void 0 ? t.options.duration : this.options.duration;
                n && setTimeout(function() {
                    return e._removeNotification(t)
                }, n)
            }, o.prototype._removeNotification = function(t) {
                var e = this.notifications.indexOf(t);
                e !== -1 && this.notifications.splice(e, 1)
            }, o.prototype.normalizeOptions = function(t, e) {
                var n = {
                    type: t
                };
                return typeof e == "string" ? n.message = e : typeof e == "object" && (n = m(m({}, n), e)), n
            }, o.prototype.registerTypes = function(t) {
                var e = (t && t.types || []).slice(),
                    n = io.types.map(function(a) {
                        var r = -1;
                        e.forEach(function(s, l) {
                            s.type === a.type && (r = l)
                        });
                        var i = r !== -1 ? e.splice(r, 1)[0] : {};
                        return m(m({}, a), i)
                    });
                return n.concat(e)
            }, o
        }(),
        ca = "",
        I = (o, t = "success", e) => {
            const n = new Oe({
                position: {
                    x: "right",
                    y: "top"
                },
                icon: !1,
                duration: 2500,
                dismissible: !0,
                type: "success",
                types: [{
                    type: "info",
                    background: "rgba(0,0,0,0.7)",
                    icon: !1
                }, {
                    type: "warning",
                    background: "orange",
                    icon: {
                        className: "material-icons",
                        tagName: "i",
                        text: "warning"
                    }
                }, {
                    type: "error",
                    background: "indianred",
                    duration: 2e3,
                    dismissible: !0
                }]
            });
            t === "info" ? n.open({
                type: t,
                message: o,
                duration: e,
                icon: !1
            }) : n[t]({
                message: o,
                duration: e,
                icon: !1
            })
        };

    function Pe() {
        return '<div class="copy-btns">\u590D\u5236\u4EE3\u7801</div>'
    }

    function Ae(o, t) {
        Qt(o).then(() => {
            I("\u590D\u5236\u6210\u529F"), t.text("\u590D\u5236\u6210\u529F"), setTimeout(() => {
                t.text("\u590D\u5236\u4EE3\u7801")
            }, 1500)
        }).catch(e => {
            console.error("\u65E0\u6CD5\u590D\u5236", e)
        })
    }

    function De() {
        const o = g(),
            e = `${o ? "pre" : ".cnblogs_code"},.cnblogs_Highlighter`;
        $(e).on("click", ".copy-btns", function() {
            let n;
            if ($(this).parent().hasClass("cnblogs_Highlighter")) n = $(this).siblings().find("code").text();
            else {
                const a = o ? "code" : "pre";
                n = $(this).siblings(a).text()
            }
            Ae(n, $(this))
        })
    }

    function qe() {
        const o = g(),
            t = Pe(),
            e = $("#cnblogs_post_body").find("pre");
        if (e.length) {
            const n = o ? "prepend" : "before";
            e.each((a, r) => {
                $(r)[n](t)
            })
        }
        if (!o) {
            const n = $(".cnblogs_Highlighter");
            if (!n.length) return;
            n.each((a, r) => {
                $(r).prepend(t)
            })
        }
    }

    const Be = (o, t) => {
            const {
                enable: e
            } = Uo(t);
            !e || !h() || (qe(), De())
        },
        B = {
            atomOneDark: "--hl-base: #282c34;--hl-mono-1: #abb2bf;--hl-mono-3: #5c6370;--hl-hue-1: #56b6c2;--hl-hue-2: #61aeee;--hl-hue-3: #c678dd;--hl-hue-4: #98c379;--hl-hue-5: #e06c75;--hl-hue-6: #d19a66;--hl-hue-6-2: #e6c07b;--hl-tag: #abb2bf;",
            atomOneLight: "--hl-base: #f6f8fa;--hl-mono-1: #383a42;--hl-mono-3: #a0a1a7;--hl-hue-1: #0184bb;--hl-hue-2: #4078f2;--hl-hue-3: #a626a4;--hl-hue-4: #50a14f;--hl-hue-5: #e45649;--hl-hue-6: #986801;--hl-hue-6-2: #c18401;--hl-tag: #383A42;",
            github: "--hl-base: #f6f8fa;--hl-mono-1: #333333;--hl-mono-3: #6a737d;--hl-hue-1: #0086b3;--hl-hue-2: #0086b3;--hl-hue-3: #d73a49;--hl-hue-4: #55a532;--hl-hue-5: #63a35c;--hl-hue-6: #6f42c1;--hl-hue-6-2: #6f42c1;--hl-tag: #d73a49;",
            pande: "--hl-base: #292a2b;--hl-mono-1: #e6e6e6;--hl-mono-3: #ffcc95;--hl-hue-1: #0086b3;--hl-hue-2: #0086b3;--hl-hue-3: #d73a49;--hl-hue-4: #19f9d866;--hl-hue-5: #19f9d8;--hl-hue-6: #ff4b82;--hl-hue-6-2: #ff4b82;--hl-tag: #ffb86c;"
        };

    function Fe(o, t) {
        let e;
        g() ? e = `<style>
              :root{${B[o]}}
              :root[theme="dark"]{${B[t]}}
            </style>` : e = `<style>
        :root{${B.github}}
        </style>`, $("head").append(e)
    }

    const He = (o, t) => {
        if (x() !== "post" || $("pre").length === 0) return;
        const {
            light: e,
            dark: n
        } = Wo(t);
        Fe(e, n)
    };

    function Ye(o) {
        return $("<div>").addClass("awes-lang").text(o)
    }

    function Re() {
        $("pre code").each(function() {
            let o = $(this)[0].classList[0];
            if (o !== void 0) {
                if (o = o.substring(9), o === "" && (o = $(this)[0].classList[1], o === void 0 || o === "")) return;
                const t = Ye(o);
                $(this).before(t)
            }
        })
    }

    const Ue = (o, t) => {
        const {
            enable: e
        } = Z(t);
        !e || !h() || !g() || Re()
    };

    function We() {
        $("pre code").each(function() {
            const o = $("<ul/>").addClass("awes-linenumber"),
                t = $(this).text().split(``).length - 1;
            for (let e = 1; e <= t; e++) o.append($("<li/>").text(e));
            $(this).before(o)
        })
    }

    const Ve = (o, t) => {
        const {
            enable: e
        } = Z(t);
        !h || !e || !g() || We()
    };

    function Xe() {
        $(".custom-comment-avatar").length || $(".feedbackItem").each(function() {
            let o = $(this).children(".feedbackCon").children("span:last").html();
            o = o ? o.replace("http://", "https://") : "https://pic.cnblogs.com/face/sample_face.gif";
            const t = `<div class='custom-comment-avatar'><img src="${o}" class='avatar' /></div>`;
            $(this).children(".feedbackCon").prepend(t)
        })
    }

    function Ge() {
        $(".comment_vote").each(function() {
            $(this).appendTo($(this).parent().siblings(".feedbackListSubtitle"))
        })
    }

    function Je() {
        $(".feedbackItem").each(function() {
            $(this).find(".louzhu").text() === "\u697C\u4E3B" && $(this).addClass("custom-comments-author")
        })
    }

    function so() {
        Xe(), Ge(), Je()
    }

    function Ze() {
        window.renderCommentsAvatars = so, $(document).ajaxComplete(function(o, t, e) {
            (e.url.indexOf("PostComment/Add") > -1 || e.url.indexOf("DeleteComment") > -1) && new blogCommentManager().renderComments(0)
        }), $(document).ajaxComplete(function(o, t, e) {
            e.url.indexOf("GetComments") > -1 && (window.renderCommentsAvatars(), window.buildEmojis(), window.imagebox())
        }), q(() => $(".feedbackItem").length, so)
    }

    const Qe = () => {
            x() === "post" && ($(".custom-comment-avatar").lenght || Ze())
        },
        Ke = [{
            value: "\u{1F923}",
            label: "\u7B11\u54ED"
        }, {
            value: "\u{1F603}",
            label: "\u5927\u7B11"
        }, {
            value: "\u{1F605}",
            label: "\u82E6\u7B11"
        }, {
            value: "\u{1F606}",
            label: "\u659C\u773C\u7B11"
        }, {
            value: "\u{1F60F}",
            label: "\u5F97\u610F"
        }, {
            value: "\u{1F60A}",
            label: "\u5FAE\u7B11"
        }, {
            value: "\u{1F60E}",
            label: "\u9177\uFF01"
        }, {
            value: "\u{1F60D}",
            label: "\u82B1\u75F4"
        }, {
            value: "\u{1F642}",
            label: "\u5475\u5475"
        }, {
            value: "\u{1F929}",
            label: "\u597D\u5D07\u62DC\u54E6"
        }, {
            value: "\u{1F914}",
            label: "\u601D\u8003"
        }, {
            value: "\u{1F644}",
            label: "\u767D\u773C"
        }, {
            value: "\u{1F61C}",
            label: "\u7565\u7565\u7565"
        }, {
            value: "\u{1F632}",
            label: "\u5446\u4F4F"
        }, {
            value: "\u{1F62D}",
            label: "\u5927\u54ED"
        }, {
            value: "\u{1F92F}",
            label: "\u5934\u70B8\u4E86"
        }, {
            value: "\u{1F630}",
            label: "\u51B7\u6C57"
        }, {
            value: "\u{1F631}",
            label: "\u5413\u6B7B\u4E86"
        }, {
            value: "\u{1F92A}",
            label: "\u7565\u7565\u7565"
        }, {
            value: "\u{1F635}",
            label: "\u6655"
        }, {
            value: "\u{1F621}",
            label: "\u6124\u6012"
        }, {
            value: "\u{1F973}",
            label: "\u795D\u8D3A"
        }, {
            value: "\u{1F921}",
            label: "\u5C0F\u4E11\u7ADF\u662F\u6211"
        }, {
            value: "\u{1F92B}",
            label: "\u5618~"
        }, {
            value: "\u{1F412}",
            label: "\u7334"
        }, {
            value: "\u{1F92D}",
            label: "\u7B11\u7B11\u4E0D\u8BF4\u8BDD"
        }, {
            value: "\u{1F402}",
            label: "\u725B"
        }, {
            value: "\u{1F37A}",
            label: "\u5564\u9152"
        }, {
            value: "(=\u30FB\u03C9\u30FB=)",
            label: ""
        }, {
            value: "(\uFF61\uFF65\u03C9\uFF65\uFF61)",
            label: ""
        }];

    function on(o) {
        return `<span class="qaq-btn" title="\u8868\u60C5">${o.length ? o : "\u{1F37A}"}</span>`
    }

    function tn(o) {
        const {
            value: t,
            label: e
        } = o, n = $("<div>").addClass("emoji-item");
        if (eo(t)) {
            const a = $("<img />").addClass("emoji emoji-img").attr("src", t);
            n.append(a)
        } else n.append(`<div class="emoji emoji-text">${t}</div>`);
        return typeof e == "string" && n.attr("title", e), n
    }

    function en(o) {
        o.length || (o = Ke);
        const t = $('<div class="emoji-list"></div>');
        return o.forEach(e => {
            const n = tn(e);
            t.append(n)
        }), t
    }

    function nn() {
        return $("<div>").addClass("qaq-wrap anim-scale-in")
    }

    function an() {
        return $("<div>").addClass("qaq-mask")
    }

    function F() {
        $(".qaq-wrap").toggle()
    }

    function rn() {
        $(".emoji-item").click(function() {
            const o = $(this).find(".emoji");
            let t;
            o.hasClass("emoji-img") ? t = `![](${o.attr("src")})` : t = o.html(), document.querySelector("#tbCommentBody").value += t, F()
        })
    }

    function sn(o, t) {
        const e = on(t),
            n = nn(),
            a = an(),
            r = en(o);
        n.append(r).append(a), $(".commentbox_title_right").prepend(e).css("position", "relative"), $(".qaq-btn").after(n).click(() => F()), $(".qaq-mask").click(() => F()), rn()
    }

    const ln = (o, t) => {
            const {
                enable: e,
                emojiList: n,
                buttonIcon: a
            } = Xo(t);
            if (!e || !h()) return;
            const r = () => {
                $(".qaq-btn").length || !$(".commentbox_title_right").length || sn(n, a)
            };
            r(), window.buildEmojis = r
        },
        H = "custom-gallery",
        cn = {
            opacity: .5
        };

    function dn() {
        g() || $("p img").css("display", "block").unwrap()
    }

    function pn() {
        if (!no()) return;
        const o = $(".thumbTitle, .galleryTitle").text().trim(),
            t = `
    <section class="${H}">
        <h3>${o}</h3>
        <div></div>
    </section>`;
        let e = $(t);
        $(".gallery img").each(function() {
            const a = $(this).attr("src").replace(/t_/, "o_");
            e.find("div").append(`<img src="${a}"/>`)
        }), $(".forFlow").append(e), $(".gallery").remove()
    }

    function lo() {
        const o = $(` .blog_comment_body img, .${H} img`);
        if (o === 0) return;
        $.each(o, e => {
            $(o[e]).addClass("custom-zoom")
        });
        const t = window.mediumZoom(".custom-zoom", cn);
        t.on("open", () => {
            Kt(() => {
                t.close()
            })
        }), dn()
    }

    const mn = (o, t) => {
            const {
                enable: e
            } = Jo(t);
            !e || !g() && !no() && !h() || $(".custom-zoom").length || (pn(), L($e, () => {
                q(() => $(".blog_comment_body").length || $("." + H).length, lo)
            }), window.imagebox = lo)
        },
        Y = {
            chitose: "live2d-widget-model-epsilon2_1/assets/Epsilon2.1.model.json",
            epsilon2_1: "live2d-widget-model-chitose/assets/chitose.model.json",
            "haru-01": "live2d-widget-model-haru/01/assets/haru01.model.json",
            "haru-02": "live2d-widget-model-haru/02/assets/haru02.model.json",
            hijiki: "live2d-widget-model-hijiki/assets/hijiki.model.json",
            tororo: "live2d-widget-model-tororo/assets/tororo.model.json",
            ryoufuku: "misaki/ryoufuku.model.json",
            seifuku: "misaki/seifuku.model.json",
            shifuku: "misaki/shifuku.model.json",
            vert_classic: "vert_classic/vert_classic.model.json",
            vert_normal: "vert_normal/vert_normal.model.json",
            vert_swimwear: "vert_swimwear/vert_swimwear.model.json",
            \u5C0F\u57CB: "\u5C0F\u57CB/13.json",
            \u4F0A\u8299\u52A0\u767B: "\u4F0A\u8299\u52A0\u767B/14.json",
            \u7389\u85FB\u524D: "\u7389\u85FB\u524D/16.json"
        },
        bn = "https://cdn.jsdelivr.net/gh/guangzan/awesCnb-live2dModels",
        gn = "https://guangzan.gitee.io/imagehost/awescnb/js/live2d.min.js";

    function fn(o, t, e) {
        const n = `<canvas id="model" style="position:fixed;${o}:0;bottom:0;z-index:30;pointer-events: none;" width="${t}"height="${e}" ></canvas>`;
        $("body").append(n)
    }

    function un(o, t) {
        t !== "default" && $("#model").css(o, t)
    }

    function hn(o) {
        let t = o === "random" ? Y[ee(Y)] : Y[o];
        const e = `${bn}@latest/${t}`;
        L(gn, () => {
            loadlive2d("model", e)
        })
    }

    const xn = (o, t) => {
        const {
            enable: e,
            page: n,
            agent: a,
            model: r,
            position: i,
            gap: s,
            width: l,
            height: p
        } = Zo(t);
        !e || n !== x() && n !== "all" || a !== E() && a !== "all" || (fn(i, l, p), un(i, s), hn(r))
    };

    function b(o, t = !0) {
        o === "dark" ? ($("html").attr("theme", "dark"), localStorage.modeType = "dark", t && $("body").addClass("light-to-dark"), setTimeout(() => {
            $("body").removeClass("light-to-dark")
        }, 1200)) : ($("html").removeAttr("theme"), localStorage.modeType = "light", t && $("body").addClass("dark-to-light"), setTimeout(() => {
            $("body").removeClass("dark-to-light")
        }, 1200))
    }

    function yn(o, t, e) {
        const n = new Date().getHours(),
            a = n > 19 || n <= 5,
            r = localStorage.modeType,
            i = () => {
                if (r) {
                    b(r === "dark" ? "dark" : "light", !1);
                    return
                }
                r || (window.matchMedia("(prefers-color-scheme: dark)").matches ? b("dark", !1) : b("light", !1))
            };
        if (!r && o) {
            b("dark", !1);
            return
        }
        a && (t ? b("dark", !1) : i()), a || (e ? b("light", !1) : i())
    }

    function vn() {
        $(document).on("click", ".mode-change", () => {
            const o = $("html").attr("theme");
            b(o ? "light" : "dark")
        })
    }

    const _n = (o, t) => {
        const {
            enable: e,
            darkDefault: n,
            autoDark: a,
            autoLight: r
        } = Qo(t);
        !e || (yn(n, a, r), vn())
    };

    function wn(o, t, e, n) {
        $("body").append('<div id="player" class="aplayer music-APlayer"></div>');
        const a = new APlayer({
            container: document.getElementById("player"),
            fixed: !0,
            preload: "auto",
            autoplay: o,
            volume: e,
            lrcType: n.enable ? n.type : null,
            audio: t
        });
        window.onbeforeunload = () => {
            const r = a.audio.currentTime;
            localStorage.audioTime = r
        }, window.onload = () => {
            a.seek(localStorage.audioTime ? Number(localStorage.audioTime) : 0)
        }, o && $(".aplayer-lrc").show(), localStorage.playerState === "on" && a.play(), a.on("play", () => {
            localStorage.playerState = "on", n.enable && $(".aplayer-lrc").show()
        }), a.on("pause", () => {
            localStorage.playerState = "off", n.enable && $(".aplayer-lrc").hide()
        }), n.enable && n.color !== "" && $(".aplayer-lrc").css("color", n.color)
    }

    const kn = (o, t) => {
        const {
            enable: e,
            page: n,
            agent: a,
            autoplay: r,
            audio: i,
            volume: s,
            lrc: l
        } = Ko(t);
        !e || n !== x() && n !== "all" || a !== E() && a !== "all" || (oe(je), L(Ce, () => {
            wn(r, i, s, l)
        }))
    };

    function $n(o) {
        const t = o.length;
        for (let e = 0; e < t; e++) I(o[e], "info")
    }

    const Cn = (o, t) => {
        const {
            enable: e,
            contents: n
        } = ot(t);
        !e && n.length || $n(n)
    };

    function jn() {
        const o = $("#post-date").text(),
            t = $("#post_view_count").text(),
            e = $("#post_comment_count").text(),
            n = $("#digg_count").text();
        return {
            date: o,
            viewCount: t,
            commentCount: e,
            diggCount: n
        }
    }

    function zn() {
        return $("<div>").addClass("post-message")
    }

    function Tn() {
        const o = $("<div>").addClass("message-top"),
            t = () => {
                const r = $("<div>").addClass("message-categories").text("\u{1F4C2}");
                return $("#BlogPostCategory a").length ? ($("#BlogPostCategory a").each(function() {
                    r.append($(this).get(0))
                }), r) : (r.append("<a>\u672A\u5206\u7C7B</a>"), r)
            },
            e = () => {
                const r = $("<div>").addClass("message-tags").text("\u{1F516}");
                return $("#EntryTag a").length ? ($("#EntryTag a").each(function() {
                    r.append($(this).get(0))
                }), r) : (r.append("<a>\u65E0\u6807\u7B7E</a>"), r)
            },
            n = t(),
            a = e();
        return o.append(n).append(a), o
    }

    function Mn() {
        const {
            date: o,
            viewCount: t,
            commentCount: e,
            diggCount: n
        } = jn(), a = $("<div>").addClass("message-bottom");
        return a.append($("<span>").text(o)).append($("<span>").text(`\u9605\u8BFB: ${t}`)).append($("<span>").text(`\u8BC4\u8BBA: ${e}`)).append($("<span>").text(`\u63A8\u8350: ${n}`)), a
    }

    function Nn() {
        const o = zn(),
            t = Tn(),
            e = Mn();
        o.append(t).append(e), $(".post").prepend(o)
    }

    const Ln = () => {
            !h() || q(() => $("#EntryTag a").length && $("#BlogPostCategory a").length, Nn)
        },
        R = "post-signature";

    function En() {
        const o = pe(),
            t = me(),
            e = `<div id='${R}'>
                    <p>\u672C\u6587\u4F5C\u8005\uFF1A${o}</p>
                    <p>\u672C\u6587\u94FE\u63A5\uFF1A${t}</p>
                </div>`;
        $("#blog_post_info_block").before(e)
    }

    const In = (o, t, e) => {
        if (!o) return;
        const a = `<p>\u7248\u6743\u58F0\u660E\uFF1A\u672C\u4F5C\u54C1\u91C7\u7528${t.length ? t : "\u77E5\u8BC6\u5171\u4EAB\u7F72\u540D-\u975E\u5546\u4E1A\u6027\u4F7F\u7528-\u7981\u6B62\u6F14\u7ECE 2.5 \u4E2D\u56FD\u5927\u9646"}<a href='${e}' target="_blank">\u8BB8\u53EF\u534F\u8BAE</a>\u8FDB\u884C\u8BB8\u53EF\u3002</p>`;
        $(`#${R}`).append(a)
    };

    function Sn(o) {
        let t = "";
        for (let e = 0; e < o.length; e++) t += "<p>" + o[e] + "</p>";
        $(`#${R}`).append(t)
    }

    const On = (o, t) => {
        const {
            enable: e,
            license: n,
            licenseName: a,
            licenseLink: r,
            contents: i
        } = tt(t);
        !e || x() === "post" && ($("#MySignature").children().length || (En(), In(n, a, r), Sn(i)))
    };

    function Pn(o) {
        const t = "<div class='custom-signature'><span></span></div>";
        $(o).append(t)
    }

    function An(o) {
        L(ze, () => {
            new Typed(".custom-signature span", {
                strings: o,
                typeSpeed: 100,
                loop: true
            });
            // 第三方库-打印机
            //Github：https://github.com/mattboldt/typed.js
            //演示：http://mattboldt.github.io/typed.js/
            //文档：http://mattboldt.github.io/typed.js/docs/
        })
    }

    const Dn = (o, t, e) => {
        const {
            enable: n,
            contents: a
        } = et(t);
        if (!n) return;
        let r = {
            selector: "#sidebar_news"
        };
        e && (r = Object.assign({}, r, e));
        const {
            selector: i
        } = r;
        Pn(i), An(a)
    };

    function U(o, t) {
        if (!o) return;
        if (/^rgb\(/.test(o) || !/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(o)) return o;
        const a = parseInt("0x" + o.slice(1, 3)),
            r = parseInt("0x" + o.slice(3, 5)),
            i = parseInt("0x" + o.slice(5, 7)),
            s = `rgb(${a},${r},${i})`;
        return t ? `rgba(${a},${r},${i},${t})` : s
    }

    function qn(o) {
        return o === "random" ? ne("rgba") : o
    }

    function Bn(o) {
        const t = qn(o),
            e = U(t, .85),
            n = U(t, .4),
            a = U(t, .2);
        $("head").append(`<style class="themeColor">:root{
            --themeColor: ${t};
            --theme-primary-8: ${e};
            --theme-primary-4: ${n};
            --theme-primary-2: ${a};
        </style>`)
    }

    const Fn = (o, t) => {
        const {
            color: e
        } = k(t);
        Bn(e)
    };

    function Hn(o) {
        o !== "" && (document.title = o)
    }

    function Yn(o) {
        if (o === "") return;
        const t = document.getElementById("favicon");
        t === null ? $("title").after(`<link id="favicon" rel="shortcut icon" href="${o}" type="image/svg+xml">`) : t.href = o
    }

    const Rn = (o, t) => {
        const {
            enable: e,
            title: n,
            favicon: a
        } = rt(t);
        !e || (Hn(n), Yn(a))
    };

    function Un(o) {
        $(o).animate({
            scrollTop: $("#mainContent")[0].scrollHeight
        }, 300)
    }

    function Wn(o) {
        $(o).animate({
            scrollTop: 0
        }, 200)
    }

    function Vn() {
        return $('<div class="custom-toolbar">')
    }

    function co(o) {
        const t = $("<i>");
        return o.length > 2 ? t.addClass(o) : t.html(o), t
    }

    function po(o, t) {
        const e = $(`<div class="tooltip">${o}</div>`);
        return t && e.addClass(t), e
    }

    function Xn(o) {
        const t = $('<div class="toolbar-item toolbar-item-toggle"></div>'),
            e = co(o),
            n = po("\u5C55\u5F00", " tooltip-toggle");
        return t.append(e), t.append(n), t
    }

    function Gn(o, t, e) {
        const {
                className: n,
                callback: a,
                icon: r,
                tooltip: i
            } = o,
            s = $(`<div class="toolbar-item" style="transform: translateY(-${t}px)">`);
        n && s.addClass(n), s.on("click", function(c) {
            a(e)
        });
        const l = co(r),
            p = po(i);
        return s.append(l), s.append(p), s
    }

    function Jn(o) {
        const {
                toolbarItems: t,
                scrollContainer: e
            } = o, n = Vn(), a = Xn(o.menuIcon),
            r = s => s === x() || s === "all";
        let i = 0;
        t.reverse().forEach(s => {
            if (!!s.enable && r(s.page)) {
                const l = Gn(s, i, o);
                i += 40, n.append(l)
            }
        }), n.append(a), $("body").append(n), $(".toolbar-item-toggle").click(mo)
    }

    function mo() {
        $(".toolbar-item-toggle").toggleClass("extend");
        const o = e => {
                let n = e;
                $(".toolbar-item:not(.toolbar-item-toggle)").each(function(a, r) {
                    $(r).css({
                        transform: `translateY(${n}px)`
                    }), n += e - 40
                })
            },
            t = e => {
                const n = e ? "\u5C55\u5F00" : "\u6536\u8D77",
                    a = e ? 90 : -50,
                    r = i => i ? "down" : "up";
                $(".toolbar-item-toggle").find("i").removeClass(`fa-angle-${r(e)}`).addClass(`fa-angle-${r(!e)}`), $(".tooltip-toggle").text(n), o(a)
            };
        $(".toolbar-item-toggle").hasClass("extend") ? t(!1) : t(!0)
    }

    const Zn = (o, t, e) => {
        const {
            enable: n,
            initialOpen: a
        } = nt(t);
        if (!n) return;
        const r = {
                scrollContainer: "html",
                menuIcon: "\u2795",
                toolbarItems: [{
                    enable: !0,
                    page: "all",
                    icon: "\u{1F680}",
                    tooltip: "\u56DE\u9876",
                    callback: s => Wn(s.scrollContainer)
                }, {
                    enable: !1,
                    page: "all",
                    icon: "\u{1F31C}",
                    tooltip: "\u6DF1\u8272",
                    className: "mode-change",
                    callback() {}
                }, {
                    enable: !0,
                    page: "post",
                    icon: "\u{1F44D}",
                    tooltip: "\u63A8\u8350",
                    callback() {
                        I("\u63A8\u8350\u6210\u529F"), ge()
                    }
                }, {
                    enable: !0,
                    page: "post",
                    icon: "\u{1F497}",
                    tooltip: "\u5173\u6CE8",
                    callback() {
                        I("\u5173\u6CE8\u6210\u529F"), window.follow()
                    }
                }, {
                    enable: !0,
                    page: "post",
                    icon: "\u{1F4CC}",
                    tooltip: "\u6536\u85CF",
                    callback() {
                        window.AddToWz()
                    }
                }, {
                    enable: !0,
                    page: "post",
                    icon: "\u{1F4AC}",
                    tooltip: "\u8BC4\u8BBA",
                    callback: s => Un(s.scrollContainer)
                }]
            },
            i = $.extend(!0, r, e);
        Jn(i), !re() && a && mo()
    };

    function Qn() {
        const o = $("<div>").addClass("cbt-traffic_light");
        for (let t = 0; t < 3; t++) o.append($("<span>"));
        return o
    }

    function Kn() {
        $("pre code").each(function() {
            $(this).before(Qn())
        })
    }

    function oa(o, t) {
        const {
            enable: e
        } = Vo(t);
        !e || !h() || !g() || Kn()
    }

    yo().use(Zt).use(oa, {
        enable: !0
    }).use(He, {
        enable: !0
    }).use(Ve, {
        enable: !0
    }).use(Ue, {
        enable: !0
    }).use(Be, {
        enable: !0
    }).use(Le, {
        enable: !1
    }).use(Qe, {
        enable: !0
    }).use(Fn, {
        enable: !0,
        color: "#1B86F9"
    }).use(ln, {
        enable: !0
    }).use(mn, {
        enable: !0
    }).use(On, {
        enable: !0
    }).use(Rn, {
        enable: !0
    }).use(kn, {
        enable: !1
    }).use(xn, {
        enable: !1
    }).use(_n, {
        enable: !0
    }).use(Cn, {
        enable: !1
    }).use(Ln, {
        enable: !0
    }).use(Dn, {
        enable: !0,
        contents: ['\u6B22\u8FCE\u4F7F\u7528\u76AE\u80A4 <b style="color:#3742fa">Geek</b>', "\u5FEB\u53BB\u81EA\u5B9A\u4E49\u7B7E\u540D\u5427~"]
    }, {
        selector: ".profile-signature"
    }).use(le, {
        enable: !0
    }, {
        opacitySelector: "#left-side,#sideBar,#mainContent, #footer,.custom-searchbar"
    }).use(ke, {
        enable: !0
    }, {
        mountedNode: ".account",
        fn: "after",
        scrollContainer: "#mainContent"
    }).use(Zn, {
        enable: !0
    }, {
        menuIcon: "",
        scrollContainer: "#mainContent",
        toolbarItems: [{
            icon: "fa-rocket rocket-rotate"
        }, {
            enable: !0,
            icon: "fa-moon"
        }, {
            icon: "fa-thumbs-up"
        }, {
            icon: "fa-heart"
        }, {
            icon: "fa-star"
        }, {
            icon: "fa-comment-dots"
        }]
    })
})();