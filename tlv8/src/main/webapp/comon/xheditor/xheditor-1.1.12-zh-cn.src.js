(function(e, Z) {
    if (window.xheditor) return ! 1;
    var ia = navigator.userAgent.toLowerCase(),
    Ca = -1 !== ia.indexOf("mobile"),
    H = e.browser,
    qa = parseFloat(H.version),
    j = H.msie,
    ra = H.mozilla,
    Q = H.safari,
    Ra = H.opera,
    eb = -1 < ia.indexOf(" adobeair/"),
    md;
    e.fn.xheditor = function(j) {
        if (Ca) return ! 1;
        var n = [];
        this.each(function() {
            if (e.nodeName(this, "TEXTAREA")) if (!1 === j) {
                if (this.xheditor) this.xheditor.remove(),
                this.xheditor = null
            } else if (this.xheditor) n.push(this.xheditor);
            else {
                var o = /({.*})/.exec(e(this).attr("class"));
                if (o) {
                    try {
                        o = eval("(" + o[1] + ")")
                    } catch(t) {}
                    j = e.extend({},
                    o, j)
                }
                o = new sa(this, j);
                if (o.init()) this.xheditor = o,
                n.push(o)
            }
        });
        0 === n.length && (n = !1);
        1 === n.length && (n = n[0]);
        md = this;
        md_ID = md.attr("id");
        var xediterFrame = e(".editMode_fram")[0].contentWindow;
        xediterFrame.document.body.onblur = function(){
        	var nvalue = e("#"+md_ID).val();
        	var chanefn = md.attr("onchange");
        	if(typeof chanefn =="function" && xediterFrame.xediterval != nvalue){
        		chanefn({obj:md_ID,value:nvalue,oldvalue:xediterFrame.xediterval?xediterFrame.xediterval:""});
        	}
        	xediterFrame.xediterval = nvalue;
        }
        return n
    };
    var $ = 0,
    R = !1,
    ta = !0,
    ua = !1,
    Sa = !1,
    t, aa, ba, ca, I, Da, da, Ea, Fa, Ga, J;
    e("script[src*=xheditor]").each(function() {
        var e = this.src;
        if (e.match(/xheditor[^\/]*\.js/i)) return J = e.replace(/[\?#].*$/, "").replace(/(^|[\/\\])[^\/]*$/, "$1"),
        !1
    });
    if (j) try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch(rb) {}
    var fb = {
        27 : "esc",
        9 : "tab",
        32 : "space",
        13 : "enter",
        8 : "backspace",
        145 : "scroll",
        20 : "capslock",
        144 : "numlock",
        19 : "pause",
        45 : "insert",
        36 : "home",
        46 : "del",
        35 : "end",
        33 : "pageup",
        34 : "pagedown",
        37 : "left",
        38 : "up",
        39 : "right",
        40 : "down",
        112 : "f1",
        113 : "f2",
        114 : "f3",
        115 : "f4",
        116 : "f5",
        117 : "f6",
        118 : "f7",
        119 : "f8",
        120 : "f9",
        121 : "f10",
        122 : "f11",
        123 : "f12"
    },
    Ta = "#FFFFFF,#CCCCCC,#C0C0C0,#999999,#666666,#333333,#000000,#FFCCCC,#FF6666,#FF0000,#CC0000,#990000,#660000,#330000,#FFCC99,#FF9966,#FF9900,#FF6600,#CC6600,#993300,#663300,#FFFF99,#FFFF66,#FFCC66,#FFCC33,#CC9933,#996633,#663333,#FFFFCC,#FFFF33,#FFFF00,#FFCC00,#999900,#666600,#333300,#99FF99,#66FF99,#33FF33,#33CC00,#009900,#006600,#003300,#99FFFF,#33FFFF,#66CCCC,#00CCCC,#339999,#336666,#003333,#CCFFFF,#66FFFF,#33CCFF,#3366FF,#3333FF,#000099,#000066,#CCCCFF,#9999FF,#6666CC,#6633FF,#6600CC,#333399,#330099,#FFCCFF,#FF99FF,#CC66CC,#CC33CC,#993399,#663366,#330033".split(","),
    gb = [{
        n: "p",
        t: "\u666e\u901a\u6bb5\u843d"
    },
    {
        n: "h1",
        t: "\u6807\u98981"
    },
    {
        n: "h2",
        t: "\u6807\u98982"
    },
    {
        n: "h3",
        t: "\u6807\u98983"
    },
    {
        n: "h4",
        t: "\u6807\u98984"
    },
    {
        n: "h5",
        t: "\u6807\u98985"
    },
    {
        n: "h6",
        t: "\u6807\u98986"
    },
    {
        n: "pre",
        t: "\u5df2\u7f16\u6392\u683c\u5f0f"
    },
    {
        n: "address",
        t: "\u5730\u5740"
    }],
    hb = [{
        n: "\u5b8b\u4f53",
        c: "SimSun"
    },
    {
        n: "\u4eff\u5b8b\u4f53",
        c: "FangSong_GB2312"
    },
    {
        n: "\u9ed1\u4f53",
        c: "SimHei"
    },
    {
        n: "\u6977\u4f53",
        c: "KaiTi_GB2312"
    },
    {
        n: "\u5fae\u8f6f\u96c5\u9ed1",
        c: "Microsoft YaHei"
    },
    {
        n: "Arial"
    },
    {
        n: "Arial Black"
    },
    {
        n: "Comic Sans MS"
    },
    {
        n: "Courier New"
    },
    {
        n: "System"
    },
    {
        n: "Times New Roman"
    },
    {
        n: "Tahoma"
    },
    {
        n: "Verdana"
    }],
    S = [{
        n: "x-small",
        s: "10px",
        t: "\u6781\u5c0f"
    },
    {
        n: "small",
        s: "13px",
        t: "\u7279\u5c0f"
    },
    {
        n: "medium",
        s: "16px",
        t: "\u5c0f"
    },
    {
        n: "large",
        s: "18px",
        t: "\u4e2d"
    },
    {
        n: "x-large",
        s: "24px",
        t: "\u5927"
    },
    {
        n: "xx-large",
        s: "32px",
        t: "\u7279\u5927"
    },
    {
        n: "-webkit-xxx-large",
        s: "48px",
        t: "\u6781\u5927"
    }],
    ib = [{
        s: "\u5de6\u5bf9\u9f50",
        v: "justifyleft"
    },
    {
        s: "\u5c45\u4e2d",
        v: "justifycenter"
    },
    {
        s: "\u53f3\u5bf9\u9f50",
        v: "justifyright"
    },
    {
        s: "\u4e24\u7aef\u5bf9\u9f50",
        v: "justifyfull"
    }],
    jb = [{
        s: "\u6570\u5b57\u5217\u8868",
        v: "insertOrderedList"
    },
    {
        s: "\u7b26\u53f7\u5217\u8868",
        v: "insertUnorderedList"
    }],
    kb = {
        "default": {
            name: "\u9ed8\u8ba4",
            width: 24,
            height: 24,
            line: 7,
            list: {
                smile: "\u5fae\u7b11",
                tongue: "\u5410\u820c\u5934",
                titter: "\u5077\u7b11",
                laugh: "\u5927\u7b11",
                sad: "\u96be\u8fc7",
                wronged: "\u59d4\u5c48",
                fastcry: "\u5feb\u54ed\u4e86",
                cry: "\u54ed",
                wail: "\u5927\u54ed",
                mad: "\u751f\u6c14",
                knock: "\u6572\u6253",
                curse: "\u9a82\u4eba",
                crazy: "\u6293\u72c2",
                angry: "\u53d1\u706b",
                ohmy: "\u60ca\u8bb6",
                awkward: "\u5c34\u5c2c",
                panic: "\u60ca\u6050",
                shy: "\u5bb3\u7f9e",
                cute: "\u53ef\u601c",
                envy: "\u7fa1\u6155",
                proud: "\u5f97\u610f",
                struggle: "\u594b\u6597",
                quiet: "\u5b89\u9759",
                shutup: "\u95ed\u5634",
                doubt: "\u7591\u95ee",
                despise: "\u9119\u89c6",
                sleep: "\u7761\u89c9",
                bye: "\u518d\u89c1"
            }
        }
    },
    ja = {
        Cut: {
            t: "\u526a\u5207 (Ctrl+X)"
        },
        Copy: {
            t: "\u590d\u5236 (Ctrl+C)"
        },
        Paste: {
            t: "\u7c98\u8d34 (Ctrl+V)"
        },
        Pastetext: {
            t: "\u7c98\u8d34\u6587\u672c",
            h: j ? 0 : 1
        },
        Blocktag: {
            t: "\u6bb5\u843d\u6807\u7b7e",
            h: 1
        },
        Fontface: {
            t: "\u5b57\u4f53",
            h: 1
        },
        FontSize: {
            t: "\u5b57\u4f53\u5927\u5c0f",
            h: 1
        },
        Bold: {
            t: "\u52a0\u7c97 (Ctrl+B)",
            s: "Ctrl+B"
        },
        Italic: {
            t: "\u659c\u4f53 (Ctrl+I)",
            s: "Ctrl+I"
        },
        Underline: {
            t: "\u4e0b\u5212\u7ebf (Ctrl+U)",
            s: "Ctrl+U"
        },
        Strikethrough: {
            t: "\u5220\u9664\u7ebf"
        },
        FontColor: {
            t: "\u5b57\u4f53\u989c\u8272",
            h: 1
        },
        BackColor: {
            t: "\u80cc\u666f\u989c\u8272",
            h: 1
        },
        SelectAll: {
            t: "\u5168\u9009 (Ctrl+A)"
        },
        Removeformat: {
            t: "\u5220\u9664\u6587\u5b57\u683c\u5f0f"
        },
        Align: {
            t: "\u5bf9\u9f50",
            h: 1
        },
        List: {
            t: "\u5217\u8868",
            h: 1
        },
        Outdent: {
            t: "\u51cf\u5c11\u7f29\u8fdb"
        },
        Indent: {
            t: "\u589e\u52a0\u7f29\u8fdb"
        },
        Link: {
            t: "\u8d85\u94fe\u63a5 (Ctrl+L)",
            s: "Ctrl+L",
            h: 1
        },
        Unlink: {
            t: "\u53d6\u6d88\u8d85\u94fe\u63a5"
        },
        Anchor: {
            t: "\u951a\u70b9",
            h: 1
        },
        Img: {
            t: "\u56fe\u7247",
            h: 1
        },
        Flash: {
            t: "Flash\u52a8\u753b",
            h: 1
        },
        Media: {
            t: "\u591a\u5a92\u4f53\u6587\u4ef6",
            h: 1
        },
        Hr: {
            t: "\u63d2\u5165\u6c34\u5e73\u7ebf"
        },
        Emot: {
            t: "\u8868\u60c5",
            s: "ctrl+e",
            h: 1
        },
        Table: {
            t: "\u8868\u683c",
            h: 1
        },
        Source: {
            t: "\u6e90\u4ee3\u7801"
        },
        Preview: {
            t: "\u9884\u89c8"
        },
        Print: {
            t: "\u6253\u5370 (Ctrl+P)",
            s: "Ctrl+P"
        },
        Fullscreen: {
            t: "\u5168\u5c4f\u7f16\u8f91 (Esc)",
            s: "Esc"
        },
        About: {
            t: "\u5173\u4e8e xhEditor"
        }
    },
    Ha = {
        mini: "Bold,Italic,Underline,Strikethrough,|,Align,List,|,Link,Img",
        simple: "Blocktag,Fontface,FontSize,Bold,Italic,Underline,Strikethrough,FontColor,BackColor,|,Align,List,Outdent,Indent,|,Link,Img,Emot,Fullscreen",
        full: "Cut,Copy,Paste,Pastetext,|,Blocktag,Fontface,FontSize,Bold,Italic,Underline,Strikethrough,FontColor,BackColor,SelectAll,Removeformat,|,Align,List,Outdent,Indent,|,Link,Unlink,Anchor,Img,Flash,Media,Hr,Emot,Table,|,Source,Preview,Print,Fullscreen"
    };
    Ha.mfull = Ha.full.replace(/\|(,Align)/i, "/$1");
    var lb = {
        a: "Link",
        img: "Img",
        embed: "Embed"
    },
    mb = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "\u00ae": "&reg;",
        "\u00a9": "&copy;"
    },
    nb = /[<>"\u00ae\u00a9]/g,
    sa = function(z, n) {
        function o(a) {
            var a = a.target,
            b = lb[a.tagName.toLowerCase()];
            b && ("Embed" === b && (b = {
                "application/x-shockwave-flash": "Flash",
                "application/x-mplayer2": "Media"
            } [a.type.toLowerCase()]), c.exec(b))
        }
        function H(a) {
            if (27 === a.which) return ua ? c.removeModal() : R && c.hidePanel(),
            !1
        }
        function ia() {
            setTimeout(c.setSource, 10)
        }
        function T() {
            c.getSource()
        }
        function Ua(a) {
            var b, d, f;
            if (a && (b = a.originalEvent.clipboardData) && (d = b.items) && (f = d[0]) && "file" == f.kind && f.type.match(/^image\//i)) return a = f.getAsFile(),
            b = new FileReader,
            b.onload = function() {
                var a = '<img src="' + event.target.result + '">',
                a = Va(a);
                c.pasteHTML(a)
            },
            b.readAsDataURL(a),
            !1;
            var h = g.cleanPaste;
            if (0 === h || x || Ia) return ! 0;
            Ia = !0;
            c.saveBookmark();
            var a = j ? "pre": "div",
            m = e("<" + a + ' class="xhe-paste">\ufeff\ufeff</' + a + ">", l).appendTo(l.body),
            a = m[0];
            b = c.getSel();
            d = c.getRng(!0);
            m.css("top", ea.scrollTop());
            j ? (d.moveToElementText(a), d.select()) : (d.selectNodeContents(a), b.removeAllRanges(), b.addRange(d));
            setTimeout(function() {
                var a = 3 === h,
                b;
                if (a) b = m.text();
                else {
                    var d = [];
                    e(".xhe-paste", l.body).each(function(a, b) {
                        0 == e(b).find(".xhe-paste").length && d.push(b.innerHTML)
                    });
                    b = d.join("<br />")
                }
                m.remove();
                c.loadBookmark();
                if (b = b.replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "")) if (a) c.pasteText(b);
                else if (b = c.cleanHTML(b), b = c.cleanWord(b), b = c.formatXHTML(b), !g.onPaste || g.onPaste && !1 !== (b = g.onPaste(b))) b = Va(b),
                c.pasteHTML(b);
                Ia = !1
            },
            0)
        }
        function Va(a) {
            var b = g.localUrlTest,
            d = g.remoteImgSaveUrl;
            if (b && d) {
                var f = [],
                h = 0,
                a = a.replace(/(<img)((?:\s+[^>]*?)?(?:\s+src="\s*([^"]+)\s*")(?: [^>]*)?)(\/?>)/ig,
                function(a, d, c, e, r) { 
                	/^(https?|data:image)/i.test(e)&&!b.test(e)&&(f[h]=e,c=c.replace(/\s+(width|height)="[^"]*"/ig,"").replace(/\s+src="[^"]*"/ig,' src="'+va+'img/waiting.gif" remoteimg="'+h++ +'"'));return d+c+r;
                });
                0 < f.length && e.post(d, {
                    urls: f.join("|")
                },
                function(a) {
                    a = a.split("|");
                    e("img[remoteimg]", c.doc).each(function() {
                        var b = e(this);
                        K(b, "src", a[b.attr("remoteimg")]);
                        b.removeAttr("remoteimg")
                    })
                })
            }
            return a
        }
        function Ja(a) {
            try {
                c._exec("styleWithCSS", a, !0)
            } catch(b) {
                try {
                    c._exec("useCSS", !a, !0)
                } catch(d) {}
            }
        }
        function Ka() {
            if (La && !x) {
                Ja(!1);
                try {
                    c._exec("enableObjectResizing", !0, !0)
                } catch(a) {}
                if (j) try {
                    c._exec("BackgroundImageCache", !0, !0)
                } catch(b) {}
            }
        }
        function Ca(a) {
            if (x || 13 !== a.which || a.shiftKey || a.ctrlKey || a.altKey) return ! 0;
            a = c.getParent("p,h1,h2,h3,h4,h5,h6,pre,address,div,li");
            if (a.is("li")) return ! 0;
            if (g.forcePtag) 0 === a.length && c._exec("formatblock", "<p>");
            else return c.pasteHTML("<br />"),
            j && 0 < a.length && 2 === c.getRng().parentElement().childNodes.length && c.pasteHTML("<br />"),
            !1
        }
        function Ma() { ! ra && !Q && (ka && A.height("100%").css("height", A.outerHeight() - q.outerHeight()), j && q.hide().show())
        }
        function ob(a) {
            a = a.target;
            if (a.tagName.match(/(img|embed)/i)) {
                var b = c.getSel(),
                d = c.getRng(!0);
                d.selectNode(a);
                b.removeAllRanges();
                b.addRange(d)
            }
        }
        function K(a, b, d) {
            if (!b) return ! 1;
            var c = "_xhe_" + b;
            d && (wa && (d = U(d, wa, E)), a.attr(b, E ? U(d, "abs", E) : d).removeAttr(c).attr(c, d));
            return a.attr(c) || a.attr(b)
        }
        function Na() {
            ta && c.hidePanel()
        }
        function pb(a) {
            if (x) return ! 0;
            var b = a.which,
            d = fb[b],
            b = d ? d: String.fromCharCode(b).toLowerCase();
            sKey = "";
            sKey += a.ctrlKey ? "ctrl+": "";
            sKey += a.altKey ? "alt+": "";
            sKey += a.shiftKey ? "shift+": "";
            sKey += b;
            var a = la[sKey],
            f;
            for (f in a) if (f = a[f], e.isFunction(f)) {
                if (!1 === f.call(c)) return ! 1
            } else return c.exec(f),
            !1
        }
        function L(a, b) {
            var d = typeof a;
            return ! b ? "undefined" != d: "array" === b && a.hasOwnProperty && a instanceof Array ? !0 : d === b
        }
        function U(a, b, d) {
            if (a.match(/^(\w+):\/\//i) && !a.match(/^https?:/i) || /^#/i.test(a) || /^data:/i.test(a)) return a;
            var c = d ? e('<a href="' + d + '" />')[0] : location,
            d = c.protocol,
            h = c.host,
            m = c.hostname,
            i = c.port,
            c = c.pathname.replace(/\\/g, "/").replace(/[^\/]+$/i, "");
            "" === i && (i = "80");
            "" === c ? c = "/": "/" !== c.charAt(0) && (c = "/" + c);
            a = e.trim(a);
            "abs" !== b && (a = a.replace(RegExp(d + "\\/\\/" + m.replace(/\./g, "\\.") + "(?::" + i + ")" + ("80" === i ? "?": "") + "(/|$)", "i"), "/"));
            "rel" === b && (a = a.replace(RegExp("^" + c.replace(/([\/\.\+\[\]\(\)])/g, "\\$1"), "i"), ""));
            if ("rel" !== b && (a.match(/^(https?:\/\/|\/)/i) || (a = c + a), "/" === a.charAt(0))) {
                for (var m = [], a = a.split("/"), k = a.length, c = 0; c < k; c++) i = a[c],
                ".." === i ? m.pop() : "" !== i && "." !== i && m.push(i);
                "" === a[k - 1] && m.push("");
                a = "/" + m.join("/")
            }
            "abs" === b && !a.match(/^https?:\/\//i) && (a = d + "//" + h + a);
            return a = a.replace(/(https?:\/\/[^:\/?#]+):80(\/|$)/i, "$1$2")
        }
        function Wa(a, b) {
            if ("*" === b || a.match(RegExp(".(" + b.replace(/,/g, "|") + ")$", "i"))) return ! 0;
            alert("\u4e0a\u4f20\u6587\u4ef6\u6269\u5c55\u540d\u5fc5\u9700\u4e3a: " + b);
            return ! 1
        }
        function Xa(a) {
            var b = Math.floor(Math.log(a) / Math.log(1024));
            return (a / Math.pow(1024, Math.floor(b))).toFixed(2) + "Byte,KB,MB,GB,TB,PB".split(",")[b]
        }
        function M() {
            return ! 1
        }
        var c = this,
        y = e(z),
        Ya = y.closest("form"),
        q,
        A,
        V,
        ea,
        l,
        fa,
        ma = y.offsetParent().css("zIndex"),
        ga,
        La = !1,
        x = !1,
        ka = !1,
        Ia = !1,
        Oa,
        na = !1,
        Za = "",
        w = null,
        xa,
        oa = !1,
        Pa = !1,
        ha = null,
        W = null,
        N = 0,
        g = c.settings = e.extend({},
        sa.settings, n),
        ya = g.plugins,
        za = [];
        ya && (ja = e.extend({},
        ja, ya), e.each(ya,
        function(a) {
            za.push(a)
        }), za = za.join(","));
        if (g.tools.match(/^\s*(m?full|simple|mini)\s*$/i)) {
            var $a = Ha[e.trim(g.tools)];
            g.tools = g.tools.match(/m?full/i) && ya ? $a.replace("Table", "Table," + za) : $a
        }
        g.tools.match(/(^|,)\s*About\s*(,|$)/i) || (g.tools += ",About");
        g.tools = g.tools.split(",");
        if (g.editorRoot) J = g.editorRoot; ! 1 === eb && (J = U(J, "abs"));
        if (g.urlBase) g.urlBase = U(g.urlBase, "abs");
        var ab = "xheCSS_" + g.skin,
        pa = "xhe" + $ + "_container",
        bb = "xhe" + $ + "_Tool",
        cb = "xhe" + $ + "_iframearea",
        db = "xhe" + $ + "_iframe",
        Aa = "xhe" + $ + "_fixffcursor",
        O = "",
        P = "",
        va = J + "xheditor_skin/" + g.skin + "/",
        Ba = kb,
        wa = g.urlType,
        E = g.urlBase,
        X = g.emotPath,
        X = X ? X: J + "xheditor_emot/",
        Qa = "",
        Ba = e.extend({},
        Ba, g.emots),
        X = U(X, "rel", E ? E: null); (na = g.showBlocktag) && (P += " showBlocktag");
        var la = [];
        this.init = function() {
            0 === e("#" + ab).length && e("head").append('<link id="' + ab + '" rel="stylesheet" type="text/css" href="' + va + 'ui.css" />');
            var a = y.outerWidth(),
            b = y.outerHeight(),
            a = g.width || z.style.width || (10 < a ? a: 0);
            N = g.height || z.style.height || (10 < b ? b: 150);
            L(a, "number") && (a += "px");
            L(N, "string") && (N = N.replace(/[^\d]+/g, ""));
            var b = g.background || z.style.background,
            d = ['<span class="xheGStart"/>'],
            f,
            h,
            m = /\||\//i;
            e.each(g.tools,
            function(a, b) {
                b.match(m) && d.push('<span class="xheGEnd"/>');
                if ("|" === b) d.push('<span class="xheSeparator"/>');
                else if ("/" === b) d.push("<br />");
                else {
                    f = ja[b];
                    if (!f) return;
                    h = f.c ? f.c: "xheIcon xheBtn" + b;
                    d.push('<span><a href="#" title="' + f.t + '" cmd="' + b + '" class="xheButton xheEnabled" tabindex="-1" role="button"><span class="' + h + '" unselectable="on" style="font-size:0;color:transparent;text-indent:-999px;">' + f.t + "</span></a></span>");
                    f.s && c.addShortcuts(f.s, b)
                }
                b.match(m) && d.push('<span class="xheGStart"/>')
            });
            d.push('<span class="xheGEnd"/><br />');
            y.after(e('<input type="text" id="' + Aa + '" style="position:absolute;display:none;" /><span id="' + pa + '" class="xhe_' + g.skin + '" style="display:none"><table cellspacing="0" cellpadding="0" class="xheLayout" style="' + ("0px" != a ? "width:" + a + ";": "") + "height:" + N + 'px;" role="presentation"><tr><td id="' + bb + '" class="xheTool" unselectable="on" style="height:1px;" role="presentation"></td></tr><tr><td id="' + cb + '" class="xheIframeArea" role="presentation"><iframe frameborder="0" id="' + db + '" src="javascript:;" class="editMode_fram" style="width:100%;"></iframe></td></tr></table></span>'));
            q = e("#" + bb);
            A = e("#" + cb);
            O = '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><link rel="stylesheet" href="' + va + 'iframe.css"/>';
            if (a = g.loadCSS) if (L(a, "array")) for (var i in a) O += '<link rel="stylesheet" href="' + a[i] + '"/>';
            else O = a.match(/\s*<style(\s+[^>]*?)?>[\s\S]+?<\/style>\s*/i) ? O + a: O + ('<link rel="stylesheet" href="' + a + '"/>');
            i = "<html><head>" + O + "<title>\u53ef\u89c6\u5316\u7f16\u8f91\u5668,alt+1\u52309\u952e,\u5207\u6362\u5230\u5de5\u5177\u533a,tab\u952e,\u9009\u62e9\u6309\u94ae,esc\u952e,\u8fd4\u56de\u7f16\u8f91 " + (g.readTip ? g.readTip: "") + "</title>";
            b && (i += "<style>html{background:" + b + ";}</style>");
            i += '</head><body spellcheck="0" class="editMode' + P + '"></body></html>';
            c.win = V = e("#" + db)[0].contentWindow;
            ea = e(V);
            try {
                this.doc = l = V.document,
                fa = e(l),
                l.open(),
                l.write(i),
                l.close(),
                j ? l.body.contentEditable = "true": l.designMode = "On"
            } catch(k) {}
            setTimeout(Ka, 300);
            c.setSource();
            V.setInterval = null;
            q.append(d.join("")).bind("mousedown contextmenu", M).click(function(a) {
                var b = e(a.target).closest("a");
                b.is(".xheEnabled") && (clearTimeout(xa), q.find("a").attr("tabindex", "-1"), w = a, c.exec(b.attr("cmd")));
                return ! 1
            });
            q.find(".xheButton").hover(function(a) {
                var b = e(this),
                d = g.hoverExecDelay,
                f = W;
                W = null;
                if ( - 1 === d || oa || !b.is(".xheEnabled")) return ! 1;
                if (f && 10 < f) return oa = !0,
                setTimeout(function() {
                    oa = !1
                },
                100),
                !1;
                var i = b.attr("cmd");
                if (1 !== ja[i].h) return c.hidePanel(),
                !1;
                Pa && (d = 0);
                0 <= d && (xa = setTimeout(function() {
                    w = a;
                    ha = {
                        x: w.clientX,
                        y: w.clientY
                    };
                    c.exec(i)
                },
                d))
            },
            function() {
                ha = null;
                xa && clearTimeout(xa)
            }).mousemove(function(a) {
                if (ha) {
                    var b = a.clientX - ha.x,
                    c = a.clientY - ha.y;
                    if (1 < Math.abs(b) || 1 < Math.abs(c)) 0 < b && 0 < c ? (b = Math.round(Math.atan(c / b) / 0.017453293), W = W ? (W + b) / 2 : b) : W = null,
                    ha = {
                        x: a.clientX,
                        y: a.clientY
                    }
                }
            });
            t = e("#xhePanel");
            aa = e("#xheShadow");
            ba = e("#xheCntLine");
            0 === t.length && (t = e('<div id="xhePanel"></div>').mousedown(function(a) {
                a.stopPropagation()
            }), aa = e('<div id="xheShadow"></div>'), ba = e('<div id="xheCntLine"></div>'), setTimeout(function() {
                e(document.body).append(t).append(aa).append(ba)
            },
            10));
            e("#" + pa).show();
            y.hide();
            A.css("height", N - q.outerHeight());
            j & 8 > qa && setTimeout(function() {
                A.css("height", N - q.outerHeight())
            },
            1);
            y.focus(c.focus);
            Ya.submit(T).bind("reset", ia);
            g.submitID && e("#" + g.submitID).click(T);
            e(window).bind("unload beforeunload", T).bind("resize", Ma);
            e(document).mousedown(Na);
            Sa || (e(document).keydown(H), Sa = !0);
            ea.focus(function() {
                g.focus && g.focus()
            }).blur(function() {
                g.blur && g.blur()
            });
            Q && ea.click(ob);
            fa.mousedown(Na).keydown(pb).keypress(Ca).dblclick(o).bind("mousedown click",
            function(a) {
                y.trigger(a.type)
            });
            if (j) {
                fa.keydown(function(a) {
                    var b = c.getRng();
                    if (8 === a.which && b.item) return e(b.item(0)).remove(),
                    !1
                });
                var u = function(a) {
                    var a = e(a.target),
                    b; (b = a.css("width")) && a.css("width", "").attr("width", b.replace(/[^0-9%]+/g, "")); (b = a.css("height")) && a.css("height", "").attr("height", b.replace(/[^0-9%]+/g, ""))
                };
                fa.bind("controlselect",
                function(a) {
                    a = a.target;
                    e.nodeName(a, "IMG") && e(a).unbind("resizeend", u).bind("resizeend", u)
                })
            }
            fa.keydown(function(a) {
                var b = a.which;
                if (a.altKey && 49 <= b && 57 >= b) return q.find("a").attr("tabindex", "0"),
                q.find(".xheGStart").eq(b - 49).next().find("a").focus(),
                l.title = "\ufeff\ufeff",
                !1
            }).click(function() {
                q.find("a").attr("tabindex", "-1")
            });
            q.keydown(function(a) {
                var b = a.which;
                if (27 == b) q.find("a").attr("tabindex", "-1"),
                c.focus();
                else if (a.altKey && 49 <= b && 57 >= b) return q.find(".xheGStart").eq(b - 49).next().find("a").focus(),
                !1
            });
            i = e(l.documentElement);
            Ra ? i.bind("keydown",
            function(a) {
                a.ctrlKey && 86 === a.which && Ua()
            }) : i.bind(j ? "beforepaste": "paste", Ua);
            g.disableContextmenu && i.bind("contextmenu", M);
            g.html5Upload && i.bind("dragenter dragover",
            function(a) {
                var b;
                if ((b = a.originalEvent.dataTransfer.types) && -1 !== e.inArray("Files", b)) return ! 1
            }).bind("drop",
            function(a) {
                var a = a.originalEvent.dataTransfer,
                b;
                if (a && (b = a.files) && 0 < b.length) {
                    var d, f, a = ["Link", "Img", "Flash", "Media"],
                    i = [],
                    k;
                    for (d in a) f = a[d],
                    g["up" + f + "Url"] && g["up" + f + "Url"].match(/^[^!].*/i) && i.push(f + ":," + g["up" + f + "Ext"]);
                    if (0 === i.length) return ! 1;
                    k = i.join(",");
                    f = function(a) {
                        var b, c;
                        for (d = 0; d < a.length; d++) if (b = a[d].name.replace(/.+\./, ""), b = k.match(RegExp("(\\w+):[^:]*," + b + "(?:,|$)", "i"))) if (c) {
                            if (c !== b[1]) return 2
                        } else c = b[1];
                        else return 1;
                        return c
                    } (b);
                    1 === f ? alert("\u4e0a\u4f20\u6587\u4ef6\u7684\u6269\u5c55\u540d\u5fc5\u9700\u4e3a\uff1a" + k.replace(/\w+:,/g, "")) : 2 === f ? alert("\u6bcf\u6b21\u53ea\u80fd\u62d6\u653e\u4e0a\u4f20\u540c\u4e00\u7c7b\u578b\u6587\u4ef6") : f && c.startUpload(b, g["up" + f + "Url"], "*",
                    function(a) {
                        var b = [],
                        d; (d = g.onUpload) && d(a);
                        for (var r = 0,
                        i = a.length; r < i; r++) d = a[r],
                        url = L(d, "string") ? d: d.url,
                        "!" === url.substr(0, 1) && (url = url.substr(1)),
                        b.push(url);
                        c.exec(f);
                        e("#xhe" + f + "Url").val(b.join(" "));
                        e("#xheSave").click()
                    });
                    return ! 1
                }
            }); (i = g.shortcuts) && e.each(i,
            function(a, b) {
                c.addShortcuts(a, b)
            });
            $++;
            La = !0;
            g.fullscreen ? c.toggleFullscreen() : g.sourceMode && setTimeout(c.toggleSource, 20);
            return ! 0
        };
        this.remove = function() {
            c.hidePanel();
            T();
            y.unbind("focus", c.focus);
            Ya.unbind("submit", T).unbind("reset", ia);
            g.submitID && e("#" + g.submitID).unbind("mousedown", T);
            e(window).unbind("unload beforeunload", T).unbind("resize", Ma);
            e(document).unbind("mousedown", Na);
            e("#" + pa).remove();
            e("#" + Aa).remove();
            y.show();
            La = !1
        };
        this.saveBookmark = function() {
            if (!x) {
                c.focus();
                var a = c.getRng(),
                a = a.cloneRange ? a.cloneRange() : a;
                ga = {
                    top: ea.scrollTop(),
                    rng: a
                }
            }
        };
        this.loadBookmark = function() {
            if (!x && ga) {
                c.focus();
                var a = ga.rng;
                if (j) a.select();
                else {
                    var b = c.getSel();
                    b.removeAllRanges();
                    b.addRange(a)
                }
                ea.scrollTop(ga.top);
                ga = null
            }
        };
        this.focus = function() {
            x ? e("#sourceCode", l).focus() : V.focus();
            if (j) {
                var a = c.getRng();
                a.parentElement && a.parentElement().ownerDocument !== l && c.setTextCursor()
            }
            return ! 1
        };
        this.setTextCursor = function(a) {
            var b = c.getRng(!0),
            d = l.body;
            if (j) b.moveToElementText(d);
            else {
                for (var e = a ? "lastChild": "firstChild"; 3 != d.nodeType && d[e];) d = d[e];
                b.selectNode(d)
            }
            b.collapse(a ? !1 : !0);
            j ? b.select() : (a = c.getSel(), a.removeAllRanges(), a.addRange(b))
        };
        this.getSel = function() {
            return l.selection ? l.selection: V.getSelection()
        };
        this.getRng = function(a) {
            var b, d;
            try {
                a || (b = c.getSel(), d = b.createRange ? b.createRange() : 0 < b.rangeCount ? b.getRangeAt(0) : null),
                d || (d = l.body.createTextRange ? l.body.createTextRange() : l.createRange())
            } catch(e) {}
            return d
        };
        this.getParent = function(a) {
            var b = c.getRng(),
            d;
            j ? d = b.item ? b.item(0) : b.parentElement() : (d = b.commonAncestorContainer, b.collapsed || b.startContainer === b.endContainer && 2 > b.startOffset - b.endOffset && b.startContainer.hasChildNodes() && (d = b.startContainer.childNodes[b.startOffset]));
            a = a ? a: "*";
            d = e(d);
            d.is(a) || (d = e(d).closest(a));
            return d
        };
        this.getSelect = function(a) {
            var b = c.getSel(),
            d = c.getRng(),
            f = !0,
            f = !d || d.item ? !1 : !b || 0 === d.boundingWidth || d.collapsed;
            if ("text" === a) return f ? "": d.text || (b.toString ? b.toString() : "");
            d.cloneContents ? (a = e("<div></div>"), (d = d.cloneContents()) && a.append(d), d = a.html()) : d = L(d.item) ? d.item(0).outerHTML: L(d.htmlText) ? d.htmlText: d.toString();
            f && (d = "");
            d = c.processHTML(d, "read");
            d = c.cleanHTML(d);
            return d = c.formatXHTML(d)
        };
        this.pasteHTML = function(a, b) {
            if (x) return ! 1;
            c.focus();
            var a = c.processHTML(a, "write"),
            d = c.getSel(),
            f = c.getRng();
            if (b !== Z) {
                if (f.item) {
                    var h = f.item(0),
                    f = c.getRng(!0);
                    f.moveToElementText(h);
                    f.select()
                }
                f.collapse(b)
            }
            a += "<" + (j ? "img": "span") + ' id="_xhe_temp" width="0" height="0" />';
            if (f.insertNode) {
                if (0 < e(f.startContainer).closest("style,script").length) return ! 1;
                f.deleteContents();
                f.insertNode(f.createContextualFragment(a))
            } else "control" === d.type.toLowerCase() && (d.clear(), f = c.getRng()),
            f.pasteHTML(a);
            var h = e("#_xhe_temp", l),
            m = h[0];
            j ? (f.moveToElementText(m), f.select()) : (f.selectNode(m), d.removeAllRanges(), d.addRange(f));
            h.remove()
        };
        this.pasteText = function(a, b) {
            a || (a = "");
            a = c.domEncode(a);
            a = a.replace(/\r?\n/g, "<br />");
            c.pasteHTML(a, b)
        };
        this.appendHTML = function(a) {
            if (x) return ! 1;
            c.focus();
            a = c.processHTML(a, "write");
            e(l.body).append(a);
            c.setTextCursor(!0)
        };
        this.domEncode = function(a) {
            return a.replace(nb,
            function(a) {
                return mb[a]
            })
        };
        this.setSource = function(a) {
            ga = null;
            if ("string" !== typeof a && "" !== a) a = z.value;
            x ? e("#sourceCode", l).val(a) : (g.beforeSetSource && (a = g.beforeSetSource(a)), a = c.cleanHTML(a), a = c.formatXHTML(a), a = c.processHTML(a, "write"), j ? (l.body.innerHTML = '<img id="_xhe_temp" width="0" height="0" />' + a, e("#_xhe_temp", l).remove()) : l.body.innerHTML = a)
        };
        this.processHTML = function(a, b) {
            if ("write" === b) {
                a = a.replace(/(<(\/?)(\w+))((?:\s+[\w\-:]+\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))*)\s*((\/?)>)/g,
                function(a, b, c, d, e, f, h) {
                    d = d.toLowerCase();
                    ra ? "strong" === d ? d = "b": "em" === d && (d = "i") : Q && ("strong" === d ? (d = "span", c || (e += ' class="Apple-style-span" style="font-weight: bold;"')) : "em" === d ? (d = "span", c || (e += ' class="Apple-style-span" style="font-style: italic;"')) : "u" === d ? (d = "span", c || (e += ' class="Apple-style-span" style="text-decoration: underline;"')) : "strike" === d && (d = "span", c || (e += ' class="Apple-style-span" style="text-decoration: line-through;"')));
                    var p, D = "";
                    if ("del" === d) d = "strike";
                    else if ("img" === d) e = e.replace(/\s+emot\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)/i,
                    function(a, b) {
                        p = b.match(/^(["']?)(.*)\1/)[2];
                        p = p.split(",");
                        p[1] || (p[1] = p[0], p[0] = "");
                        "default" === p[0] && (p[0] = "");
                        return g.emotMark ? a: ""
                    });
                    else if ("a" === d) ! e.match(/ href=[^ ]/i) && e.match(/ name=[^ ]/i) && (D += " xhe-anchor"),
                    h && (f = "></a>");
                    else if ("table" === d && !c && (a = e.match(/\s+border\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)/i), !a || a[1].match(/^(["']?)\s*0\s*\1$/))) D += " xhe-border";
                    var Y, e = e.replace(/\s+([\w\-:]+)\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)/g,
                    function(a, b, c) {
                        b = b.toLowerCase();
                        c = c.match(/^(["']?)(.*)\1/)[2];
                        aft = "";
                        if (j && b.match(/^(disabled|checked|readonly|selected)$/) && c.match(/^(false|0)$/i) || "img" === d && p && "src" === b) return "";
                        b.match(/^(src|href)$/) && (aft = " _xhe_" + b + '="' + c + '"', E && (c = U(c, "abs", E)));
                        D && "class" === b && (c += " " + D, D = "");
                        Q && "style" === b && "span" === d && c.match(/(^|;)\s*(font-family|font-size|color|background-color)\s*:\s*[^;]+\s*(;|$)/i) && (Y = !0);
                        return " " + b + '="' + c + '"' + aft
                    });
                    p && (a = X + (p[0] ? p[0] : "default") + "/" + p[1] + ".gif", e += ' src="' + a + '" _xhe_src="' + a + '"');
                    Y && (e += ' class="Apple-style-span"');
                    D && (e += ' class="' + D + '"');
                    return "<" + c + d + e + f
                });
                j && (a = a.replace(/&apos;/ig, "&#39;"));
                if (!Q) var c = function(a, b, c, d) {
                    var b = "",
                    e, f; (e = c.match(/font-family\s*:\s*([^;"]+)/i)) && (b += ' face="' + e[1] + '"');
                    if (e = c.match(/font-size\s*:\s*([^;"]+)/i)) {
                        e = e[1].toLowerCase();
                        for (var h = 0; h < S.length; h++) if (e === S[h].n || e === S[h].s) {
                            f = h + 1;
                            break
                        }
                        f && (b += ' size="' + f + '"', c = c.replace(/(^|;)(\s*font-size\s*:\s*[^;"]+;?)+/ig, "$1"))
                    }
                    if (f = c.match(/(?:^|[\s;])color\s*:\s*([^;"]+)/i)) {
                        if (e = f[1].match(/\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i)) {
                            f[1] = "#";
                            for (h = 1; 3 >= h; h++) f[1] += (e[h] - 0).toString(16)
                        }
                        f[1] = f[1].replace(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i, "#$1$1$2$2$3$3");
                        b += ' color="' + f[1] + '"'
                    }
                    c = c.replace(/(^|;)(\s*(font-family|color)\s*:\s*[^;"]+;?)+/ig, "$1");
                    return "" !== b ? (c && (b += ' style="' + c + '"'), "<font" + b + ">" + d + "</font>") : a
                },
                a = a.replace(/<(span)(?:\s+[^>]*?)?\s+style\s*=\s*"((?:[^"]*?;)?\s*(?:font-family|font-size|color)\s*:[^"]*)"(?: [^>]*)?>(((?!<\1(\s+[^>]*?)?>)[\s\S]|<\1(\s+[^>]*?)?>((?!<\1(\s+[^>]*?)?>)[\s\S]|<\1(\s+[^>]*?)?>((?!<\1(\s+[^>]*?)?>)[\s\S])*?<\/\1>)*?<\/\1>)*?)<\/\1>/ig, c),
                a = a.replace(/<(span)(?:\s+[^>]*?)?\s+style\s*=\s*"((?:[^"]*?;)?\s*(?:font-family|font-size|color)\s*:[^"]*)"(?: [^>]*)?>(((?!<\1(\s+[^>]*?)?>)[\s\S]|<\1(\s+[^>]*?)?>((?!<\1(\s+[^>]*?)?>)[\s\S])*?<\/\1>)*?)<\/\1>/ig, c),
                a = a.replace(/<(span)(?:\s+[^>]*?)?\s+style\s*=\s*"((?:[^"]*?;)?\s*(?:font-family|font-size|color)\s*:[^"]*)"(?: [^>]*)?>(((?!<\1(\s+[^>]*?)?>)[\s\S])*?)<\/\1>/ig, c);
                a = a.replace(/<(td|th)(\s+[^>]*?)?>(\s|&nbsp;)*<\/\1>/ig, "<$1$2>" + (j ? "": "<br />") + "</$1>")
            } else {
                if (Q) for (var e = [{
                    r: /font-weight:\sbold/ig,
                    t: "strong"
                },
                {
                    r: /font-style:\sitalic/ig,
                    t: "em"
                },
                {
                    r: /text-decoration:\sunderline/ig,
                    t: "u"
                },
                {
                    r: /text-decoration:\sline-through/ig,
                    t: "strike"
                }], c = function(a, b, c, d, h) {
                    b = c + d;
                    c = "";
                    if (!b) return h;
                    for (d = 0; d < e.length; d++) if (b.match(e[d].r)) {
                        c = e[d].t;
                        break
                    }
                    return c ? "<" + c + ">" + h + "</" + c + ">": a
                },
                h = 0; 2 > h; h++) a = a.replace(/<(span)(\s+[^>]*?)?\s+class\s*=\s*"Apple-style-span"(\s+[^>]*?)?>(((?!<\1(\s+[^>]*?)?>)[\s\S]|<\1(\s+[^>]*?)?>((?!<\1(\s+[^>]*?)?>)[\s\S]|<\1(\s+[^>]*?)?>((?!<\1(\s+[^>]*?)?>)[\s\S])*?<\/\1>)*?<\/\1>)*?)<\/\1>/ig, c),
                a = a.replace(/<(span)(\s+[^>]*?)?\s+class\s*=\s*"Apple-style-span"(\s+[^>]*?)?>(((?!<\1(\s+[^>]*?)?>)[\s\S]|<\1(\s+[^>]*?)?>((?!<\1(\s+[^>]*?)?>)[\s\S])*?<\/\1>)*?)<\/\1>/ig, c),
                a = a.replace(/<(span)(\s+[^>]*?)?\s+class\s*=\s*"Apple-style-span"(\s+[^>]*?)?>(((?!<\1(\s+[^>]*?)?>)[\s\S])*?)<\/\1>/ig, c);
                a = a.replace(/(<(\w+))((?:\s+[\w\-:]+\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))*)\s*(\/?>)/g,
                function(a, b, c, d, e) {
                    var c = c.toLowerCase(),
                    f,
                    d = d.replace(/\s+_xhe_(?:src|href)\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)/i,
                    function(a, b) {
                        f = b.match(/^(["']?)(.*)\1/)[2];
                        return ""
                    });
                    f && wa && (f = U(f, wa, E));
                    d = d.replace(/\s+([\w\-:]+)\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)/g,
                    function(a, b, c) {
                        b = b.toLowerCase();
                        c = c.match(/^(["']?)(.*)\1/)[2];
                        if ("class" === b) {
                            if (c.match(/^["']?(apple|webkit)/i)) return "";
                            c = c.replace(/\s?xhe-[a-z]+/ig, "");
                            if ("" === c) return ""
                        } else {
                            if (b.match(/^((_xhe_|_moz_|_webkit_)|jquery\d+)/i)) return "";
                            if (f && b.match(/^(src|href)$/i)) return " " + b + '="' + f + '"';
                            "style" === b && (c = c.replace(/(^|;)\s*(font-size)\s*:\s*([a-z-]+)\s*(;|$)/i,
                            function(a, b, c, d, e) {
                                for (var f, h = 0; h < S.length; h++) if (a = S[h], d === a.n) {
                                    f = a.s;
                                    break
                                }
                                return b + c + ":" + f + e
                            }))
                        }
                        return " " + b + '="' + c + '"'
                    });
                    "img" === c && !d.match(/\s+alt\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)/i) && (d += ' alt=""');
                    return b + d + e
                });
                a = a.replace(/(<(td|th)(?:\s+[^>]*?)?>)\s*([\s\S]*?)(<br(\s*\/)?>)?\s*<\/\2>/ig,
                function(a, b, c, d) {
                    return b + (d ? d: "&nbsp;") + "</" + c + ">"
                });
                a = a.replace(/^\s*(?:<(p|div)(?:\s+[^>]*?)?>)?\s*(<span(?:\s+[^>]*?)?>\s*<\/span>|<br(?:\s+[^>]*?)?>|&nbsp;)*\s*(?:<\/\1>)?\s*$/i, "")
            }
            return a = a.replace(/(<pre(?:\s+[^>]*?)?>)([\s\S]+?)(<\/pre>)/gi,
            function(a, b, c, d) {
                return b + c.replace(/<br\s*\/?>/ig, "\r\n") + d
            })
        };
        this.getSource = function(a) {
            var b, d = g.beforeGetSource;
            x ? (b = e("#sourceCode", l).val(), d || (b = c.formatXHTML(b, !1))) : (b = c.processHTML(l.body.innerHTML, "read"), b = c.cleanHTML(b), b = c.formatXHTML(b, a), d && (b = d(b)));
            return z.value = b
        };
        this.cleanWord = function(a) {
            var b = g.cleanPaste;
            if (0 < b && 3 > b && a.match(/mso(-|normal)|WordDocument|<table\s+[^>]*?x:str/i)) for (var a = a.replace(/<\!--[\s\S]*?--\>|<!(--)?\[[\s\S]+?\](--)?>|<style(\s+[^>]*?)?>[\s\S]*?<\/style>/ig, ""), a = a.replace(/\r?\n/ig, ""), a = a.replace(/(<(\/?)([\w\-:]+))((?:\s+[\w\-:]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))?)*)\s*(\/?>)/g,
            function(a, c, d, i, g, u) {
                i = i.toLowerCase();
                if (i.match(/^(link|img)$/) && g.match(/file:\/\//i) || i.match(/:/) || "span" === i && 2 === b) return "";
                d || (g = g.replace(/\s([\w\-:]+)(?:\s*=\s*("[^"]*"|'[^']*'|[^>\s]+))?/ig,
                function(a, c, d) {
                    c = c.toLowerCase();
                    d = d.match(/^(["']?)(.*)\1/)[2];
                    if (c.match(/:/) || c.match(/^(class|lang|language|span)$/) || "td" === i && ("height" === c || "width" === c && !g.match(/\scolspan="\d+"/i))) return "";
                    return "style" === c ? 2 === b ? "": (d = e.trim(d.replace(/\s*(mso-[^:]+:.+?|margin\s*:\s*0cm 0cm 0pt\s*|(text-align|font-variant|line-height)\s*:\s*.+?)(;|$)\s*/ig, ""))) ? " " + c + '="' + d.replace(/"/g, "'") + '"': "": a
                }));
                return c + g + u
            }), c = 0; 3 > c; c++) a = a.replace(/<([^\s>]+)(\s+[^>]*)?>\s*<\/\1>/g,
            function(a, b) {
                return b.match(/^a$/i) ? a: ""
            });
            return a
        };
        this.cleanHTML = function(a) {
            var a = a.replace(/<!?\/?(DOCTYPE|html|body|meta)(\s+[^>]*?)?>/ig, ""),
            b,
            a = a.replace(/<head(?:\s+[^>]*?)?>([\s\S]*?)<\/head>/i,
            function(a, c) {
                b = c.match(/<(script|style)(\s+[^>]*?)?>[\s\S]*?<\/\1>/ig);
                return ""
            });
            b && (a = b.join("") + a);
            a = a.replace(/<\??xml(:\w+)?(\s+[^>]*?)?>([\s\S]*?<\/xml>)?/ig, "");
            g.internalScript || (a = a.replace(/<script(\s+[^>]*?)?>[\s\S]*?<\/script>/ig, ""));
            g.internalStyle || (a = a.replace(/<style(\s+[^>]*?)?>[\s\S]*?<\/style>/ig, ""));
            if (!g.linkTag || !g.inlineScript || !g.inlineStyle) a = a.replace(/(<(\w+))((?:\s+[\w-]+\s*=\s*(?:"[^"]*"|'[^']*'|[^>\s]+))*)\s*(\/?>)/ig,
            function(a, b, c, e, i) {
                if (!g.linkTag && "link" === c.toLowerCase()) return "";
                g.inlineScript || (e = e.replace(/\s+on(?:click|dblclick|mouse(down|up|move|over|out|enter|leave|wheel)|key(down|press|up)|change|select|submit|reset|blur|focus|load|unload)\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)/ig, ""));
                g.inlineStyle || (e = e.replace(/\s+(style|class)\s*=\s*("[^"]*"|'[^']*'|[^>\s]+)/ig, ""));
                return b + e + i
            });
            return a = a.replace(/<\/(strong|b|u|strike|em|i)>((?:\s|<br\/?>|&nbsp;)*?)<\1(\s+[^>]*?)?>/ig, "$2")
        };
        this.formatXHTML = function(a, b) {
            function d(a) {
                for (var b = {},
                a = a.split(","), c = 0; c < a.length; c++) b[a[c]] = !0;
                return b
            }
            function e(a) {
                var a = a.toLowerCase(),
                b = n[a];
                return b ? b: a
            }
            function h(a, b, c) {
                if (p[a]) for (; C.last() && D[C.last()];) g(C.last());
                Y[a] && C.last() === a && g(a); (c = F[a] || !!c) || C.push(a);
                var d = [];
                d.push("<" + a);
                b.replace(x,
                function(a, b, c, e, f) {
                    b = b.toLowerCase();
                    d.push(" " + b + '="' + (c ? c: e ? e: f ? f: l[b] ? b: "").replace(/"/g, "'") + '"')
                });
                d.push((c ? " /": "") + ">");
                u(d.join(""), a, !0);
                "pre" === a && (A = !0)
            }
            function g(a) {
                if (a) for (b = C.length - 1; 0 <= b && !(C[b] === a); b--);
                else var b = 0;
                if (0 <= b) {
                    for (var c = C.length - 1; c >= b; c--) u("</" + C[c] + ">", C[c]);
                    C.length = b
                }
                "pre" === a && (A = !1, w--)
            }
            function i(a) {
                u(c.domEncode(a))
            }
            function k(a) {
                G.push(a.replace(/^[\s\r\n]+|[\s\r\n]+$/g, ""))
            }
            function u(a, c, d) {
                A || (a = a.replace(/(\t*\r?\n\t*)+/g, ""));
                if (!A && !0 === b) if (a.match(/^\s*$/)) G.push(a);
                else {
                    var e = p[c];
                    e ? (d && w++, "" === y && w--) : y && w++; ((e ? c: "") !== y || e) && r();
                    G.push(a);
                    "br" === c && r();
                    e && (F[c] || !d) && w--;
                    y = e ? c: ""
                } else G.push(a)
            }
            function r() {
                G.push("\r\n");
                if (0 < w) for (var a = w; a--;) G.push("\t")
            }
            function s(a, b, c, d) {
                if (!c) return d;
                a = ""; (b = c.match(/ face\s*=\s*"\s*([^"]+)\s*"/i)) && (a += "font-family:" + b[1] + ";"); (b = c.match(/ size\s*=\s*"\s*(\d+)\s*"/i)) && (a += "font-size:" + S[(7 < b[1] ? 7 : 1 > b[1] ? 1 : b[1]) - 1].s + ";"); (b = c.match(/ color\s*=\s*"\s*([^"]+)\s*"/i)) && (a += "color:" + b[1] + ";"); (c = c.match(/ style\s*=\s*"\s*([^"]+)\s*"/i)) && (a += c[1]);
                a && (d = '<span style="' + a + '">' + d + "</span>");
                return d
            }
            var F = d("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"),
            p = d("address,applet,blockquote,button,center,dd,dir,div,dl,dt,fieldset,form,frameset,h1,h2,h3,h4,h5,h6,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,p,pre,table,tbody,td,tfoot,th,thead,tr,ul,script"),
            D = d("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),
            Y = d("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),
            l = d("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),
            j = d("script,style"),
            n = {
                b: "strong",
                i: "em",
                s: "del",
                strike: "del"
            },
            q = /<(?:\/([^\s>]+)|!([^>]*?)|([\w\-:]+)((?:"[^"]*"|'[^']*'|[^"'<>])*)\s*(\/?))>/g,
            x = /\s*([\w\-:]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s]+)))?/g,
            G = [],
            C = [];
            C.last = function() {
                return this[this.length - 1]
            };
            for (var v, B, o = 0,
            t, z, w = -1,
            y = "body",
            A = !1; v = q.exec(a);) {
                B = v.index;
                B > o && (o = a.substring(o, B), t ? z.push(o) : i(o));
                o = q.lastIndex;
                if (B = v[1]) if (B = e(B), t && B === t && (k(z.join("")), z = t = null), !t) {
                    g(B);
                    continue
                }
                t ? z.push(v[0]) : (B = v[3]) ? (B = e(B), h(B, v[4], v[5]), j[B] && (t = B, z = [])) : v[2] && G.push(v[0])
            }
            a.length > o && i(a.substring(o, a.length));
            g();
            a = G.join("");
            G = null;
            a = a.replace(/<(font)(\s+[^>]*?)?>(((?!<\1(\s+[^>]*?)?>)[\s\S]|<\1(\s+[^>]*?)?>((?!<\1(\s+[^>]*?)?>)[\s\S]|<\1(\s+[^>]*?)?>((?!<\1(\s+[^>]*?)?>)[\s\S])*?<\/\1>)*?<\/\1>)*?)<\/\1>/ig, s);
            a = a.replace(/<(font)(\s+[^>]*?)?>(((?!<\1(\s+[^>]*?)?>)[\s\S]|<\1(\s+[^>]*?)?>((?!<\1(\s+[^>]*?)?>)[\s\S])*?<\/\1>)*?)<\/\1>/ig, s);
            a = a.replace(/<(font)(\s+[^>]*?)?>(((?!<\1(\s+[^>]*?)?>)[\s\S])*?)<\/\1>/ig, s);
            return a = a.replace(/^(\s*\r?\n)+|(\s*\r?\n)+$/g, "")
        };
        this.toggleShowBlocktag = function(a) {
            na !== a && (na = !na, a = e(l.body), na ? (P += " showBlocktag", a.addClass("showBlocktag")) : (P = P.replace(" showBlocktag", ""), a.removeClass("showBlocktag")))
        };
        this.toggleSource = function(a) {
            if (x !== a) {
                q.find("[cmd=Source]").toggleClass("xheEnabled").toggleClass("xheActive");
                var b = l.body,
                d = e(b),
                f,
                h,
                a = 0,
                g = "";
                if (x) f = c.getSource(),
                d.html("").removeAttr("scroll").attr("class", "editMode" + P),
                j ? b.contentEditable = "true": l.designMode = "On",
                ra && (c._exec("inserthtml", "-"), e("#" + Aa).show().focus().hide()),
                g = "\u6e90\u4ee3\u7801";
                else {
                    c.pasteHTML('<span id="_xhe_cursor"></span>', !0);
                    f = c.getSource(!0);
                    a = f.indexOf('<span id="_xhe_cursor"></span>');
                    if (!Ra) a = f.substring(0, a).replace(/\r/g, "").length;
                    f = f.replace(/(\r?\n\s*|)<span id="_xhe_cursor"><\/span>(\s*\r?\n|)/,
                    function(a, b, c) {
                        return b && c ? "\r\n": b + c
                    });
                    j ? b.contentEditable = "false": l.designMode = "Off";
                    d.attr("scroll", "no").attr("class", "sourceMode").html('<textarea id="sourceCode" wrap="soft" spellcheck="false" style="width:100%;height:100%" />');
                    h = e("#sourceCode", d).blur(c.getSource)[0];
                    g = "\u53ef\u89c6\u5316\u7f16\u8f91"
                }
                x = !x;
                c.setSource(f);
                c.focus();
                x ? h.setSelectionRange ? h.setSelectionRange(a, a) : (h = h.createTextRange(), h.move("character", a), h.select()) : c.setTextCursor();
                q.find("[cmd=Source]").attr("title", g).find("span").text(g);
                q.find("[cmd=Source],[cmd=Preview]").toggleClass("xheEnabled");
                q.find(".xheButton").not("[cmd=Source],[cmd=Fullscreen],[cmd=About]").toggleClass("xheEnabled").attr("aria-disabled", x ? !0 : !1);
                setTimeout(Ka, 300)
            }
        };
        this.showPreview = function() {
            var a = g.beforeSetSource,
            b = c.getSource();
            a && (b = a(b));
            var a = "<html><head>" + O + "<title>\u9884\u89c8</title>" + (E ? '<base href="' + E + '"/>': "") + "</head><body>" + b + "</body></html>",
            b = window.screen,
            b = window.open("", "xhePreview", "toolbar=yes,location=no,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width=" + Math.round(0.9 * b.width) + ",height=" + Math.round(0.8 * b.height) + ",left=" + Math.round(0.05 * b.width)),
            d = b.document;
            d.open();
            d.write(a);
            d.close();
            b.focus()
        };
        this.toggleFullscreen = function(a) {
            if (ka !== a) {
                var a = e("#" + pa).find(".xheLayout"),
                b = e("#" + pa),
                d = jQuery.browser.version,
                d = j && (6 == d || 7 == d);
                ka ? (d && y.after(b), a.attr("style", Za), A.height(N - q.outerHeight()), e(window).scrollTop(Oa), setTimeout(function() {
                    e(window).scrollTop(Oa)
                },
                10)) : (d && e("body").append(b), Oa = e(window).scrollTop(), Za = a.attr("style"), a.removeAttr("style"), A.height("100%"), setTimeout(Ma, 100));
                ra ? (e("#" + Aa).show().focus().hide(), setTimeout(c.focus, 1)) : d && c.setTextCursor();
                ka = !ka;
                b.toggleClass("xhe_Fullscreen");
                e("html").toggleClass("xhe_Fullfix");
                q.find("[cmd=Fullscreen]").toggleClass("xheActive");
                setTimeout(Ka, 300)
            }
        };
        this.showMenu = function(a, b) {
            var d = e('<div class="xheMenu"></div>'),
            f = a.length,
            h = [];
            e.each(a,
            function(a, b) {
                h.push("<a href=\"javascript:void('" + b.v + '\')" title="' + (b.t ? b.t: b.s) + '" v="' + b.v + '" role="option" aria-setsize="' + f + '" aria-posinset="' + (a + 1) + '" tabindex="0">' + b.s + "</a>")
            });
            d.append(h.join(""));
            d.click(function(a) {
                a = a.target;
                if (!e.nodeName(a, "DIV")) return c.loadBookmark(),
                b(e(a).closest("a").attr("v")),
                c.hidePanel(),
                !1
            }).mousedown(M);
            c.saveBookmark();
            c.showPanel(d)
        };
        this.showColor = function(a) {
            var b = e('<div class="xheColor"></div>'),
            d = [],
            f = Ta.length,
            h = 0;
            e.each(Ta,
            function(a, b) {
                0 === h % 7 && d.push((0 < h ? "</div>": "") + "<div>");
                d.push("<a href=\"javascript:void('" + b + '\')" xhev="' + b + '" title="' + b + '" style="background:' + b + '" role="option" aria-setsize="' + f + '" aria-posinset="' + (h + 1) + '"></a>');
                h++
            });
            d.push("</div>");
            b.append(d.join(""));
            b.click(function(b) {
                b = b.target;
                if (e.nodeName(b, "A")) return c.loadBookmark(),
                a(e(b).attr("xhev")),
                c.hidePanel(),
                !1
            }).mousedown(M);
            c.saveBookmark();
            c.showPanel(b)
        };
        this.showPastetext = function() {
            var a = e('<div><label for="xhePastetextValue">\u4f7f\u7528\u952e\u76d8\u5feb\u6377\u952e(Ctrl+V)\u628a\u5185\u5bb9\u7c98\u8d34\u5230\u65b9\u6846\u91cc\uff0c\u6309 \u786e\u5b9a</label></div><div><textarea id="xhePastetextValue" wrap="soft" spellcheck="false" style="width:300px;height:100px;" /></div><div style="text-align:right;"><input type="button" id="xheSave" value="\u786e\u5b9a" /></div>'),
            b = e("#xhePastetextValue", a);
            e("#xheSave", a).click(function() {
                c.loadBookmark();
                var a = b.val();
                a && c.pasteText(a);
                c.hidePanel();
                return ! 1
            });
            c.saveBookmark();
            c.showDialog(a)
        };
        this.showLink = function() {
            var a = '<div><label for="xheLinkUrl">\u94fe\u63a5\u5730\u5740: </label><input type="text" id="xheLinkUrl" value="http://" class="xheText" /></div><div><label for="xheLinkTarget">\u6253\u5f00\u65b9\u5f0f: </label><select id="xheLinkTarget"><option selected="selected" value="">\u9ed8\u8ba4</option><option value="_blank">\u65b0\u7a97\u53e3</option><option value="_self">\u5f53\u524d\u7a97\u53e3</option><option value="_parent">\u7236\u7a97\u53e3</option></select></div><div style="display:none"><label for="xheLinkText">\u94fe\u63a5\u6587\u5b57: </label><input type="text" id="xheLinkText" value="" class="xheText" /></div><div style="text-align:right;"><input type="button" id="xheSave" value="\u786e\u5b9a" /></div>',
            b = fa.find("a[name]").not("[href]"),
            d = 0 < b.length;
            if (d) {
                var f = [];
                b.each(function() {
                    var a = e(this).attr("name");
                    f.push('<option value="#' + a + '">' + a + "</option>")
                });
                a = a.replace(/(<div><label for="xheLinkTarget)/, '<div><label for="xheLinkAnchor">\u9875\u5185\u951a\u70b9: </label><select id="xheLinkAnchor"><option value="">\u672a\u9009\u62e9</option>' + f.join("") + "</select></div>$1")
            }
            var a = e(a),
            h = c.getParent("a"),
            m = e("#xheLinkText", a),
            i = e("#xheLinkUrl", a),
            k = e("#xheLinkTarget", a),
            b = e("#xheSave", a),
            u = c.getSelect();
            d && a.find("#xheLinkAnchor").change(function() {
                var a = e(this).val();
                "" != a && i.val(a)
            });
            if (1 === h.length) {
                if (!h.attr("href")) return w = null,
                c.exec("Anchor");
                i.val(K(h, "href"));
                k.attr("value", h.attr("target"))
            } else "" === u && m.val(g.defLinkText).closest("div").show();
            g.upLinkUrl && c.uploadInit(i, g.upLinkUrl, g.upLinkExt);
            b.click(function() {
                c.loadBookmark();
                var a = i.val(); ("" === a || 0 === h.length) && c._exec("unlink");
                if ("" !== a && "http://" !== a) {
                    var b = a.split(" "),
                    d = k.val(),
                    f = m.val();
                    if (1 < b.length) {
                        c._exec("unlink");
                        u = c.getSelect();
                        var g = '<a href="xhe_tmpurl"',
                        Y = [];
                        "" !== d && (g += ' target="' + d + '"');
                        for (var g = g + ">xhe_tmptext</a>",
                        f = "" !== u ? u: f ? f: a, j = 0, qb = b.length; j < qb; j++) a = b[j],
                        "" !== a && (a = a.split("||"), d = g, d = d.replace("xhe_tmpurl", a[0]), d = d.replace("xhe_tmptext", a[1] ? a[1] : f), Y.push(d));
                        c.pasteHTML(Y.join("&nbsp;"))
                    } else a = b[0].split("||"),
                    f || (f = a[0]),
                    f = a[1] ? a[1] : "" !== u ? "": f ? f: a[0],
                    0 === h.length ? (f ? c.pasteHTML('<a href="#xhe_tmpurl">' + f + "</a>") : c._exec("createlink", "#xhe_tmpurl"), h = e('a[href$="#xhe_tmpurl"]', l)) : f && !Q && h.text(f),
                    K(h, "href", a[0]),
                    "" !== d ? h.attr("target", d) : h.removeAttr("target")
                }
                c.hidePanel();
                return ! 1
            });
            c.saveBookmark();
            c.showDialog(a)
        };
        this.showAnchor = function() {
            var a = e('<div><label for="xheAnchorName">\u951a\u70b9\u540d\u79f0: </label><input type="text" id="xheAnchorName" value="" class="xheText" /></div><div style="text-align:right;"><input type="button" id="xheSave" value="\u786e\u5b9a" /></div>'),
            b = c.getParent("a"),
            d = e("#xheAnchorName", a),
            f = e("#xheSave", a);
            if (1 === b.length) {
                if (b.attr("href")) return w = null,
                c.exec("Link");
                d.val(b.attr("name"))
            }
            f.click(function() {
                c.loadBookmark();
                var a = d.val();
                a ? 0 === b.length ? c.pasteHTML('<a name="' + a + '"></a>') : b.attr("name", a) : 1 === b.length && b.remove();
                c.hidePanel();
                return ! 1
            });
            c.saveBookmark();
            c.showDialog(a)
        };
        this.showImg = function() {
            var a = e('<div><label for="xheImgUrl">\u56fe\u7247\u6587\u4ef6: </label><input type="text" id="xheImgUrl" value="http://" class="xheText" /></div><div><div><label for="xheImgAlt">\u66ff\u6362\u6587\u672c: </label><input type="text" id="xheImgAlt" /></div><div><label for="xheImgAlign">\u5bf9\u9f50\u65b9\u5f0f: </label><select id="xheImgAlign"><option selected="selected" value="">\u9ed8\u8ba4</option><option value="left">\u5de6\u5bf9\u9f50</option><option value="right">\u53f3\u5bf9\u9f50</option><option value="top">\u9876\u7aef</option><option value="middle">\u5c45\u4e2d</option><option value="baseline">\u57fa\u7ebf</option><option value="bottom">\u5e95\u8fb9</option></select></div><div><label for="xheImgWidth">\u5bbd\u3000\u3000\u5ea6: </label><input type="text" id="xheImgWidth" style="width:40px;" /> <label for="xheImgHeight">\u9ad8\u3000\u3000\u5ea6: </label><input type="text" id="xheImgHeight" style="width:40px;" /></div><div><label for="xheImgBorder">\u8fb9\u6846\u5927\u5c0f: </label><input type="text" id="xheImgBorder" style="width:40px;" /></div><div><label for="xheImgHspace">\u6c34\u5e73\u95f4\u8ddd: </label><input type="text" id="xheImgHspace" style="width:40px;" /> <label for="xheImgVspace">\u5782\u76f4\u95f4\u8ddd: </label><input type="text" id="xheImgVspace" style="width:40px;" /></div><div style="text-align:right;"><input type="button" id="xheSave" value="\u786e\u5b9a" /></div>'),
            b = c.getParent("img"),
            d = e("#xheImgUrl", a),
            f = e("#xheImgAlt", a),
            h = e("#xheImgAlign", a),
            m = e("#xheImgWidth", a),
            i = e("#xheImgHeight", a),
            k = e("#xheImgBorder", a),
            u = e("#xheImgVspace", a),
            r = e("#xheImgHspace", a),
            s = e("#xheSave", a);
            if (1 === b.length) {
                d.val(K(b, "src"));
                f.val(b.attr("alt"));
                h.val(b.attr("align"));
                m.val(b.attr("width"));
                i.val(b.attr("height"));
                k.val(b.attr("border"));
                var F = b.attr("vspace"),
                p = b.attr("hspace");
                u.val(0 >= F ? "": F);
                r.val(0 >= p ? "": p)
            }
            g.upImgUrl && c.uploadInit(d, g.upImgUrl, g.upImgExt);
            s.click(function() {
                c.loadBookmark();
                var a = d.val();
                if ("" !== a && "http://" !== a) {
                    var g = a.split(" "),
                    p = f.val(),
                    s = h.val(),
                    F = m.val(),
                    j = i.val(),
                    n = k.val(),
                    o = u.val(),
                    q = r.val();
                    if (1 < g.length) {
                        var v = '<img src="xhe_tmpurl"',
                        t = [];
                        "" !== p && (v += ' alt="' + p + '"');
                        "" !== s && (v += ' align="' + s + '"');
                        "" !== F && (v += ' width="' + F + '"');
                        "" !== j && (v += ' height="' + j + '"');
                        "" !== n && (v += ' border="' + n + '"');
                        "" !== o && (v += ' vspace="' + o + '"');
                        "" !== q && (v += ' hspace="' + q + '"');
                        var v = v + " />",
                        w;
                        for (w in g) a = g[w],
                        "" !== a && (a = a.split("||"), p = v, p = p.replace("xhe_tmpurl", a[0]), a[1] && (p = '<a href="' + a[1] + '" target="_blank">' + p + "</a>"), t.push(p));
                        c.pasteHTML(t.join("&nbsp;"))
                    } else 1 === g.length && (a = g[0], "" !== a && (a = a.split("||"), 0 === b.length && (c.pasteHTML('<img src="' + a[0] + '#xhe_tmpurl" />'), b = e('img[src$="#xhe_tmpurl"]', l)), K(b, "src", a[0]), "" !== p && b.attr("alt", p), "" !== s ? b.attr("align", s) : b.removeAttr("align"), "" !== F ? b.attr("width", F) : b.removeAttr("width"), "" !== j ? b.attr("height", j) : b.removeAttr("height"), "" !== n ? b.attr("border", n) : b.removeAttr("border"), "" !== o ? b.attr("vspace", o) : b.removeAttr("vspace"), "" !== q ? b.attr("hspace", q) : b.removeAttr("hspace"), a[1] && (g = b.parent("a"), 0 === g.length && (b.wrap("<a></a>"), g = b.parent("a")), K(g, "href", a[1]), g.attr("target", "_blank"))))
                } else 1 === b.length && b.remove();
                c.hidePanel();
                return ! 1
            });
            c.saveBookmark();
            c.showDialog(a)
        };
        this.showEmbed = function(a, b, d, f, g, m, i) {
            var b = e(b),
            k = c.getParent('embed[type="' + d + '"],embed[classid="' + f + '"]'),
            u = e("#xhe" + a + "Url", b),
            r = e("#xhe" + a + "Width", b),
            s = e("#xhe" + a + "Height", b),
            a = e("#xheSave", b);
            m && c.uploadInit(u, m, i);
            1 === k.length && (u.val(K(k, "src")), r.val(k.attr("width")), s.val(k.attr("height")));
            a.click(function() {
                c.loadBookmark();
                var a = u.val();
                if ("" !== a && "http://" !== a) {
                    var b = r.val(),
                    i = s.val(),
                    m = /^\d+%?$/;
                    m.test(b) || (b = 412);
                    m.test(i) || (i = 300);
                    var j = '<embed type="' + d + '" classid="' + f + '" src="xhe_tmpurl"' + g,
                    m = a.split(" ");
                    if (1 < m.length) {
                        var n, o = [],
                        j = j + ' width="xhe_width" height="xhe_height" />',
                        q;
                        for (q in m) a = m[q].split("||"),
                        n = j,
                        n = n.replace("xhe_tmpurl", a[0]),
                        n = n.replace("xhe_width", a[1] ? a[1] : b),
                        n = n.replace("xhe_height", a[2] ? a[2] : i),
                        "" !== a && o.push(n);
                        c.pasteHTML(o.join("&nbsp;"))
                    } else 1 === m.length && (a = m[0].split("||"), 0 === k.length && (c.pasteHTML(j.replace("xhe_tmpurl", a[0] + "#xhe_tmpurl") + " />"), k = e('embed[src$="#xhe_tmpurl"]', l)), K(k, "src", a[0]), k.attr("width", a[1] ? a[1] : b), k.attr("height", a[2] ? a[2] : i))
                } else 1 === k.length && k.remove();
                c.hidePanel();
                return ! 1
            });
            c.saveBookmark();
            c.showDialog(b)
        };
        this.showEmot = function(a) {
            var b = e('<div class="xheEmot"></div>'),
            a = a ? a: Qa ? Qa: "default",
            d = Ba[a],
            f = X + a + "/",
            g = 0,
            m = [],
            i = "",
            i = d.width,
            k = d.height,
            u = d.line,
            r = d.count,
            d = d.list;
            if (r) for (d = 1; d <= r; d++) g++,
            m.push("<a href=\"javascript:void('" + d + '\')" style="background-image:url(' + f + d + '.gif);" emot="' + a + "," + d + '" xhev="" title="' + d + '" role="option">&nbsp;</a>'),
            0 === g % u && m.push("<br />");
            else e.each(d,
            function(b, c) {
                g++;
                m.push("<a href=\"javascript:void('" + c + '\')" style="background-image:url(' + f + b + '.gif);" emot="' + a + "," + b + '" title="' + c + '" xhev="' + c + '" role="option">&nbsp;</a>');
                0 === g % u && m.push("<br />")
            });
            var r = u * (i + 12),
            d = Math.ceil(g / u) * (k + 12),
            s = 0.75 * r;
            d <= s && (s = "");
            i = e("<style>" + (s ? ".xheEmot div{width:" + (r + 20) + "px;height:" + s + "px;}": "") + ".xheEmot div a{width:" + i + "px;height:" + k + "px;}</style><div>" + m.join("") + "</div>").click(function(a) {
                var a = a.target,
                b = e(a);
                if (e.nodeName(a, "A")) return c.loadBookmark(),
                c.pasteHTML('<img emot="' + b.attr("emot") + '" alt="' + b.attr("xhev") + '">'),
                c.hidePanel(),
                !1
            }).mousedown(M);
            b.append(i);
            var j = 0,
            p = ['<ul role="tablist">'];
            e.each(Ba,
            function(b, c) {
                j++;
                p.push("<li" + (a === b ? ' class="cur"': "") + ' role="presentation"><a href="javascript:void(\'' + c.name + '\')" group="' + b + '" role="tab" tabindex="0">' + c.name + "</a></li>")
            });
            1 < j && (p.push('</ul><br style="clear:both;" />'), i = e(p.join("")).click(function(a) {
                Qa = e(a.target).attr("group");
                c.exec("Emot");
                return ! 1
            }).mousedown(M), b.append(i));
            c.saveBookmark();
            c.showPanel(b)
        };
        this.showTable = function() {
            var a = e('<div><label for="xheTableRows">\u884c\u3000\u3000\u6570: </label><input type="text" id="xheTableRows" style="width:40px;" value="3" /> <label for="xheTableColumns">\u5217\u3000\u3000\u6570: </label><input type="text" id="xheTableColumns" style="width:40px;" value="2" /></div><div><label for="xheTableHeaders">\u6807\u9898\u5355\u5143: </label><select id="xheTableHeaders"><option selected="selected" value="">\u65e0</option><option value="row">\u7b2c\u4e00\u884c</option><option value="col">\u7b2c\u4e00\u5217</option><option value="both">\u7b2c\u4e00\u884c\u548c\u7b2c\u4e00\u5217</option></select></div><div><label for="xheTableWidth">\u5bbd\u3000\u3000\u5ea6: </label><input type="text" id="xheTableWidth" style="width:40px;" value="200" /> <label for="xheTableHeight">\u9ad8\u3000\u3000\u5ea6: </label><input type="text" id="xheTableHeight" style="width:40px;" value="" /></div><div><label for="xheTableBorder">\u8fb9\u6846\u5927\u5c0f: </label><input type="text" id="xheTableBorder" style="width:40px;" value="1" /></div><div><label for="xheTableCellSpacing">\u8868\u683c\u95f4\u8ddd: </label><input type="text" id="xheTableCellSpacing" style="width:40px;" value="1" /> <label for="xheTableCellPadding">\u8868\u683c\u586b\u5145: </label><input type="text" id="xheTableCellPadding" style="width:40px;" value="1" /></div><div><label for="xheTableAlign">\u5bf9\u9f50\u65b9\u5f0f: </label><select id="xheTableAlign"><option selected="selected" value="">\u9ed8\u8ba4</option><option value="left">\u5de6\u5bf9\u9f50</option><option value="center">\u5c45\u4e2d</option><option value="right">\u53f3\u5bf9\u9f50</option></select></div><div><label for="xheTableCaption">\u8868\u683c\u6807\u9898: </label><input type="text" id="xheTableCaption" /></div><div style="text-align:right;"><input type="button" id="xheSave" value="\u786e\u5b9a" /></div>'),
            b = e("#xheTableRows", a),
            d = e("#xheTableColumns", a),
            f = e("#xheTableHeaders", a),
            g = e("#xheTableWidth", a),
            m = e("#xheTableHeight", a),
            i = e("#xheTableBorder", a),
            k = e("#xheTableCellSpacing", a),
            u = e("#xheTableCellPadding", a),
            r = e("#xheTableAlign", a),
            s = e("#xheTableCaption", a);
            e("#xheSave", a).click(function() {
                c.loadBookmark();
                var a = s.val(),
                e = i.val(),
                j = b.val(),
                l = d.val(),
                n = f.val(),
                o = g.val(),
                q = m.val(),
                t = k.val(),
                w = u.val(),
                z = r.val(),
                e = "<table" + ("" !== e ? ' border="' + e + '"': "") + ("" !== o ? ' width="' + o + '"': "") + ("" !== q ? ' height="' + q + '"': "") + ("" !== t ? ' cellspacing="' + t + '"': "") + ("" !== w ? ' cellpadding="' + w + '"': "") + ("" !== z ? ' align="' + z + '"': "") + ">";
                "" !== a && (e += "<caption>" + a + "</caption>");
                if ("row" === n || "both" === n) {
                    e += "<tr>";
                    for (a = 0; a < l; a++) e += '<th scope="col"></th>';
                    e += "</tr>";
                    j--
                }
                e += "<tbody>";
                for (a = 0; a < j; a++) {
                    e += "<tr>";
                    for (o = 0; o < l; o++) e = 0 === o && ("col" === n || "both" === n) ? e + '<th scope="row"></th>': e + "<td></td>";
                    e += "</tr>"
                }
                c.pasteHTML(e + "</tbody></table>");
                c.hidePanel();
                return ! 1
            });
            c.saveBookmark();
            c.showDialog(a)
        };
        this.showAbout = function() {
            var a = e('<div style="font:12px Arial;width:245px;word-wrap:break-word;word-break:break-all;outline:none;" role="dialog" tabindex="-1"><p><span style="font-size:20px;color:#1997DF;">xhEditor</span><br />v1.1.12</div>');
            a.find("p").attr("role", "presentation");
            c.showDialog(a, !0);
            setTimeout(function() {
                a.focus()
            },
            100)
        };
        this.addShortcuts = function(a, b) {
            a = a.toLowerCase();
            la[a] === Z && (la[a] = []);
            la[a].push(b)
        };
        this.delShortcuts = function(a) {
            delete la[a]
        };
        this.uploadInit = function(a, b, d) {
            function f(b) {
                L(b, "string") && (b = [b]);
                var c = !1,
                d, e = b.length,
                f, h = []; (d = g.onUpload) && d(b);
                for (d = 0; d < e; d++) f = b[d],
                f = L(f, "string") ? f: f.url,
                "!" === f.substr(0, 1) && (c = !0, f = f.substr(1)),
                h.push(f);
                a.val(h.join(" "));
                c && a.closest(".xheDialog").find("#xheSave").click()
            }
            var h = e('<span class="xheUpload"><input type="text" style="visibility:hidden;" tabindex="-1" /><input type="button" value="' + g.upBtnText + '" class="xheBtn" tabindex="-1" /></span>'),
            m = e(".xheBtn", h),
            i = g.html5Upload,
            k = i ? g.upMultiple: 1;
            a.after(h);
            m.before(a);
            b = b.replace(/{editorRoot}/ig, J);
            if ("!" === b.substr(0, 1)) m.click(function() {
                c.showIframeModal("\u4e0a\u4f20\u6587\u4ef6", b.substr(1), f, null, null)
            });
            else {
                h.append('<input type="file"' + (1 < k ? ' multiple=""': "") + ' class="xheFile" size="13" name="filedata" tabindex="-1" />');
                var j = e(".xheFile", h);
                j.change(function() {
                    c.startUpload(j[0], b, d, f)
                });
                setTimeout(function() {
                    a.closest(".xheDialog").bind("dragenter dragover", M).bind("drop",
                    function(a) {
                        var a = a.originalEvent.dataTransfer,
                        e;
                        i && a && (e = a.files) && 0 < e.length && c.startUpload(e, b, d, f);
                        return ! 1
                    })
                },
                10)
            }
        };
        this.startUpload = function(a, b, d, f) {
            function h(a, d) {
                var e = Object,
                g = !1;
                try {
                    e = eval("(" + a + ")")
                } catch(h) {}
                e.err === Z || e.msg === Z ? alert(b + " \u4e0a\u4f20\u63a5\u53e3\u53d1\u751f\u9519\u8bef\uff01\r\n\r\n\u8fd4\u56de\u7684\u9519\u8bef\u5185\u5bb9\u4e3a: \r\n\r\n" + a) : e.err ? alert(e.err) : (m.push(e.msg), g = !0); (!g || d) && c.removeModal();
                d && g && f(m);
                return g
            }
            var m = [],
            i = g.html5Upload,
            k = i ? g.upMultiple: 1,
            j,
            r = e('<div style="padding:22px 0;text-align:center;line-height:30px;">\u6587\u4ef6\u4e0a\u4f20\u4e2d\uff0c\u8bf7\u7a0d\u5019\u2026\u2026<br /></div>'),
            s = '<img src="' + va + 'img/loading.gif">';
            if (!i || a.nodeType && (!(j = a.files) || !j[0].name)) {
                if (!Wa(a.value, d)) return;
                r.append(s);
                d = new c.html4Upload(a, b, h)
            } else {
                j || (j = a);
                a = j.length;
                if (a > k) {
                    alert("\u8bf7\u4e0d\u8981\u4e00\u6b21\u4e0a\u4f20\u8d85\u8fc7" + k + "\u4e2a\u6587\u4ef6");
                    return
                }
                for (k = 0; k < a; k++) if (!Wa(j[k].name, d)) return;
                var l = e('<div class="xheProgress"><div><span>0%</span></div></div>');
                r.append(l);
                d = new c.html5Upload("filedata", j, b, h,
                function(a) {
                    if (0 <= a.loaded) {
                        var b = Math.round(100 * a.loaded / a.total) + "%";
                        e("div", l).css("width", b);
                        e("span", l).text(b + " ( " + Xa(a.loaded) + " / " + Xa(a.total) + " )")
                    } else l.replaceWith(s)
                })
            }
            c.showModal("\u6587\u4ef6\u4e0a\u4f20\u4e2d(Esc\u53d6\u6d88\u4e0a\u4f20)", r, 320, 150);
            d.start()
        };
        this.html4Upload = function(a, b, c) {
            var f = "jUploadFrame" + (new Date).getTime(),
            g = this,
            j = e('<iframe name="' + f + '" class="xheHideArea" />').appendTo("body"),
            i = e('<form action="' + b + '" target="' + f + '" method="post" enctype="multipart/form-data" class="xheHideArea"></form>').appendTo("body"),
            k = e(a),
            l = k.clone().attr("disabled", "true");
            k.before(l).appendTo(i);
            this.remove = function() {
                null !== g && (l.before(k).remove(), j.remove(), i.remove(), g = null)
            };
            this.onLoad = function() {
                var a = j[0].contentWindow.document,
                b = e(a.body).text();
                a.write("");
                g.remove();
                c(b, !0)
            };
            this.start = function() {
                i.submit();
                j.load(g.onLoad)
            };
            return this
        };
        this.html5Upload = function(a, b, c, e, g) {
            function j(b, c, d, e) {
                k = new XMLHttpRequest;
                upload = k.upload;
                k.onreadystatechange = function() {
                    4 === k.readyState && d(k.responseText)
                };
                upload ? upload.onprogress = function(a) {
                    e(a.loaded)
                }: e( - 1);
                k.open("POST", c);
                k.setRequestHeader("Content-Type", "application/octet-stream");
                k.setRequestHeader("Content-Disposition", 'attachment; name="' + encodeURIComponent(a) + '"; filename="' + encodeURIComponent(b.name) + '"');
                k.sendAsBinary && b.getAsBinary ? k.sendAsBinary(b.getAsBinary()) : k.send(b)
            }
            function i(a) {
                g && g({
                    loaded: s + a,
                    total: n
                })
            }
            for (var k, l = 0,
            r = b.length,
            s = 0,
            n = 0,
            p = this,
            o = 0; o < r; o++) n += b[o].size;
            this.remove = function() {
                k && (k.abort(), k = null)
            };
            this.uploadNext = function(a) {
                a && (s += b[l - 1].size, i(0)); (!a || a && !0 === e(a, l === r)) && l < r && j(b[l++], c, p.uploadNext,
                function(a) {
                    i(a)
                })
            };
            this.start = function() {
                p.uploadNext()
            }
        };
        this.showIframeModal = function(a, b, d, f, g, j) {
            function i() {
                try {
                    s.callback = k,
                    s.unloadme = c.removeModal,
                    e(s.document).keydown(H),
                    n = s.name
                } catch(a) {}
            }
            function k(a) {
                s.document.write("");
                c.removeModal();
                null != a && d(a)
            }
            var b = e('<iframe frameborder="0" src="' + b.replace(/{editorRoot}/ig, J) + (/\?/.test(b) ? "&": "?") + "parenthost=" + location.host + '" style="width:100%;height:100%;display:none;" /><div class="xheModalIfmWait"></div>'),
            l = b.eq(0),
            r = b.eq(1);
            c.showModal(a, b, f, g, j);
            var s = l[0].contentWindow,
            n;
            i();
            l.load(function() {
                i();
                if (n) {
                    var a = !0;
                    try {
                        n = eval("(" + unescape(n) + ")")
                    } catch(b) {
                        a = !1
                    }
                    if (a) return k(n)
                }
                r.is(":visible") && (l.show().focus(), r.remove())
            })
        };
        this.showModal = function(a, b, d, f, h) {
            if (ua) return ! 1;
            c.panelState = R;
            R = !1;
            da = g.layerShadow;
            d = d ? d: g.modalWidth;
            f = f ? f: g.modalHeight;
            I = e('<div class="xheModal" style="width:' + (d - 1) + "px;height:" + f + "px;margin-left:-" + Math.ceil(d / 2) + "px;" + (j && 7 > qa ? "": "margin-top:-" + Math.ceil(f / 2) + "px") + '">' + (g.modalTitle ? '<div class="xheModalTitle"><span class="xheModalClose" title="\u5173\u95ed (Esc)" tabindex="0" role="button"></span>' + a + "</div>": "") + '<div class="xheModalContent"></div></div>').appendTo("body");
            Ea = e('<div class="xheModalOverlay"></div>').appendTo("body");
            0 < da && (Da = e('<div class="xheModalShadow" style="width:' + I.outerWidth() + "px;height:" + I.outerHeight() + "px;margin-left:-" + (Math.ceil(d / 2) - da - 2) + "px;" + (j && 7 > qa ? "": "margin-top:-" + (Math.ceil(f / 2) - da - 2) + "px") + '"></div>').appendTo("body"));
            e(".xheModalContent", I).css("height", f - (g.modalTitle ? e(".xheModalTitle").outerHeight() : 0)).html(b);
            j && 6 === qa && (Fa = e("select:visible").css("visibility", "hidden"));
            e(".xheModalClose", I).click(c.removeModal);
            Ea.show();
            0 < da && Da.show();
            I.show();
            setTimeout(function() {
                I.find("a,input[type=text],textarea").filter(":visible").filter(function() {
                    return "hidden" !== e(this).css("visibility")
                }).eq(0).focus()
            },
            10);
            ua = !0;
            Ga = h
        };
        this.removeModal = function() {
            Fa && Fa.css("visibility", "visible");
            I.html("").remove();
            0 < da && Da.remove();
            Ea.remove();
            Ga && Ga();
            ua = !1;
            R = c.panelState
        };
        this.showDialog = function(a, b) {
            var d = e('<div class="xheDialog"></div>'),
            f = e(a),
            h = e("#xheSave", f);
            if (1 === h.length) {
                f.find("input[type=text],select").keypress(function(a) {
                    if (13 === a.which) return h.click(),
                    !1
                });
                f.find("textarea").keydown(function(a) {
                    if (a.ctrlKey && 13 === a.which) return h.click(),
                    !1
                });
                h.after(' <input type="button" id="xheCancel" value="\u53d6\u6d88" />');
                e("#xheCancel", f).click(c.hidePanel);
                if (!g.clickCancelDialog) {
                    ta = !1;
                    var j = e('<div class="xheFixCancel"></div>').appendTo("body").mousedown(M),
                    i = A.offset();
                    j.css({
                        left: i.left,
                        top: i.top,
                        width: A.outerWidth(),
                        height: A.outerHeight()
                    })
                }
                d.mousedown(function() {
                    oa = !0
                })
            }
            d.append(f);
            c.showPanel(d, b)
        };
        this.showPanel = function(a, b) {
            if (!w.target) return ! 1;
            t.html("").append(a).css("left", -999).css("top", -999);
            ca = e(w.target).closest("a").addClass("xheActive");
            var c = ca.offset(),
            f = c.left,
            c = c.top,
            c = c + (ca.outerHeight() - 1);
            ba.css({
                left: f + 1,
                top: c,
                width: ca.width()
            }).show();
            var h = document.documentElement,
            j = document.body;
            if (f + t.outerWidth() > (window.pageXOffset || h.scrollLeft || j.scrollLeft) + (h.clientWidth || j.clientWidth)) f -= t.outerWidth() - ca.outerWidth();
            h = g.layerShadow;
            0 < h && aa.css({
                left: f + h,
                top: c + h,
                width: t.outerWidth(),
                height: t.outerHeight()
            }).show();
            ma && !isNaN(ma) && (aa.css("zIndex", parseFloat(ma) + 1), t.css("zIndex", parseFloat(ma) + 2), ba.css("zIndex", parseFloat(ma) + 3));
            t.css({
                left: f,
                top: c
            }).show();
            b || setTimeout(function() {
                t.find("a,input[type=text],textarea").filter(":visible").filter(function() {
                    return "hidden" !== e(this).css("visibility")
                }).eq(0).focus()
            },
            10);
            Pa = R = !0
        };
        this.hidePanel = function() {
            R && (ca.removeClass("xheActive"), aa.hide(), ba.hide(), t.hide(), R = !1, ta || (e(".xheFixCancel").remove(), ta = !0), Pa = oa = !1, W = null, c.focus(), c.loadBookmark())
        };
        this.exec = function(a) {
            c.hidePanel();
            var b = ja[a];
            if (!b) return ! 1;
            if (null === w) {
                w = {};
                var d = q.find(".xheButton[cmd=" + a + "]");
                if (1 === d.length) w.target = d
            }
            if (b.e) b.e.call(c);
            else switch (a = a.toLowerCase(), a) {
            case "cut":
                try {
                    if (l.execCommand(a), !l.queryCommandSupported(a)) throw "Error";
                } catch(f) {
                    alert("\u60a8\u7684\u6d4f\u89c8\u5668\u5b89\u5168\u8bbe\u7f6e\u4e0d\u5141\u8bb8\u4f7f\u7528\u526a\u5207\u64cd\u4f5c\uff0c\u8bf7\u4f7f\u7528\u952e\u76d8\u5feb\u6377\u952e(Ctrl + X)\u6765\u5b8c\u6210")
                }
                break;
            case "copy":
                try {
                    if (l.execCommand(a), !l.queryCommandSupported(a)) throw "Error";
                } catch(h) {
                    alert("\u60a8\u7684\u6d4f\u89c8\u5668\u5b89\u5168\u8bbe\u7f6e\u4e0d\u5141\u8bb8\u4f7f\u7528\u590d\u5236\u64cd\u4f5c\uff0c\u8bf7\u4f7f\u7528\u952e\u76d8\u5feb\u6377\u952e(Ctrl + C)\u6765\u5b8c\u6210")
                }
                break;
            case "paste":
                try {
                    if (l.execCommand(a), !l.queryCommandSupported(a)) throw "Error";
                } catch(n) {
                    alert("\u60a8\u7684\u6d4f\u89c8\u5668\u5b89\u5168\u8bbe\u7f6e\u4e0d\u5141\u8bb8\u4f7f\u7528\u7c98\u8d34\u64cd\u4f5c\uff0c\u8bf7\u4f7f\u7528\u952e\u76d8\u5feb\u6377\u952e(Ctrl + V)\u6765\u5b8c\u6210")
                }
                break;
            case "pastetext":
                window.clipboardData ? c.pasteText(window.clipboardData.getData("Text", !0)) : c.showPastetext();
                break;
            case "blocktag":
                var i = [];
                e.each(gb,
                function(a, b) {
                    i.push({
                        s: "<" + b.n + ">" + b.t + "</" + b.n + ">",
                        v: "<" + b.n + ">",
                        t: b.t
                    })
                });
                c.showMenu(i,
                function(a) {
                    c._exec("formatblock", a)
                });
                break;
            case "fontface":
                var k = [];
                e.each(hb,
                function(a, b) {
                    b.c = b.c ? b.c: b.n;
                    k.push({
                        s: '<span style="font-family:' + b.c + '">' + b.n + "</span>",
                        v: b.c,
                        t: b.n
                    })
                });
                c.showMenu(k,
                function(a) {
                    c._exec("fontname", a)
                });
                break;
            case "fontsize":
                var o = [];
                e.each(S,
                function(a, b) {
                    o.push({
                        s: '<span style="font-size:' + b.s + ';">' + b.t + "(" + b.s + ")</span>",
                        v: a + 1,
                        t: b.t
                    })
                });
                c.showMenu(o,
                function(a) {
                    c._exec("fontsize", a)
                });
                break;
            case "fontcolor":
                c.showColor(function(a) {
                    c._exec("forecolor", a)
                });
                break;
            case "backcolor":
                c.showColor(function(a) {
                    j ? c._exec("backcolor", a) : (Ja(!0), c._exec("hilitecolor", a), Ja(!1))
                });
                break;
            case "align":
                c.showMenu(ib,
                function(a) {
                    c._exec(a)
                });
                break;
            case "list":
                c.showMenu(jb,
                function(a) {
                    c._exec(a)
                });
                break;
            case "link":
                c.showLink();
                break;
            case "anchor":
                c.showAnchor();
                break;
            case "img":
                c.showImg();
                break;
            case "flash":
                c.showEmbed("Flash", '<div><label for="xheFlashUrl">\u52a8\u753b\u6587\u4ef6: </label><input type="text" id="xheFlashUrl" value="http://" class="xheText" /></div><div><label for="xheFlashWidth">\u5bbd\u3000\u3000\u5ea6: </label><input type="text" id="xheFlashWidth" style="width:40px;" value="480" /> <label for="xheFlashHeight">\u9ad8\u3000\u3000\u5ea6: </label><input type="text" id="xheFlashHeight" style="width:40px;" value="400" /></div><div style="text-align:right;"><input type="button" id="xheSave" value="\u786e\u5b9a" /></div>', "application/x-shockwave-flash", "clsid:d27cdb6e-ae6d-11cf-96b8-4445535400000", ' wmode="opaque" quality="high" menu="false" play="true" loop="true" allowfullscreen="true"', g.upFlashUrl, g.upFlashExt);
                break;
            case "media":
                c.showEmbed("Media", '<div><label for="xheMediaUrl">\u5a92\u4f53\u6587\u4ef6: </label><input type="text" id="xheMediaUrl" value="http://" class="xheText" /></div><div><label for="xheMediaWidth">\u5bbd\u3000\u3000\u5ea6: </label><input type="text" id="xheMediaWidth" style="width:40px;" value="480" /> <label for="xheMediaHeight">\u9ad8\u3000\u3000\u5ea6: </label><input type="text" id="xheMediaHeight" style="width:40px;" value="400" /></div><div style="text-align:right;"><input type="button" id="xheSave" value="\u786e\u5b9a" /></div>', "application/x-mplayer2", "clsid:6bf52a52-394a-11d3-b153-00c04f79faa6", ' enablecontextmenu="false" autostart="false"', g.upMediaUrl, g.upMediaExt);
                break;
            case "hr":
                c.pasteHTML("<hr />");
                break;
            case "emot":
                c.showEmot();
                break;
            case "table":
                c.showTable();
                break;
            case "source":
                c.toggleSource();
                break;
            case "preview":
                c.showPreview();
                break;
            case "print":
                V.print();
                break;
            case "fullscreen":
                c.toggleFullscreen();
                break;
            case "about":
                c.showAbout();
                break;
            default:
                c._exec(a)
            }
            w = null
        };
        this._exec = function(a, b, d) {
            d || c.focus();
            return b !== Z ? l.execCommand(a, !1, b) : l.execCommand(a, !1, null)
        }
    };
    sa.settings = {
        skin: "default",
        tools: "full",
        clickCancelDialog: !0,
        linkTag: !1,
        internalScript: !1,
        inlineScript: !1,
        internalStyle: !0,
        inlineStyle: !0,
        showBlocktag: !1,
        forcePtag: !0,
        upLinkExt: "zip,rar,txt",
        upImgExt: "jpg,jpeg,gif,png",
        upFlashExt: "swf",
        upMediaExt: "wmv,avi,wma,mp3,mid",
        modalWidth: 350,
        modalHeight: 220,
        modalTitle: !0,
        defLinkText: "\u70b9\u51fb\u6253\u5f00\u94fe\u63a5",
        layerShadow: 3,
        emotMark: !1,
        upBtnText: "\u4e0a\u4f20",
        cleanPaste: 2,
        hoverExecDelay: 100,
        html5Upload: !0,
        upMultiple: 99
    };
    window.xheditor = sa;
    e(function() {
        e.fn.oldVal = e.fn.val;
        e.fn.val = function(e) {
            var j = this,
            o;
            return e === Z ? j[0] && (o = j[0].xheditor) ? o.getSource() : j.oldVal() : j.each(function() { (o = this.xheditor) ? o.setSource(e) : j.oldVal(e)
            })
        };
        e("textarea").each(function() {
            var j = e(this),
            n = j.attr("class");
            if (n && (n = n.match(/(?:^|\s)xheditor(?:\-(m?full|simple|mini))?(?:\s|$)/i))) j.xheditor(n[1] ? {
                tools: n[1]
            }: null)
        })
    })
})(jQuery);