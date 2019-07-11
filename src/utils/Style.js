import {Dimensions, StyleSheet, Alert} from 'react-native';
const {height, width} = Dimensions.get('window');
//总则u开头表示样式(ui),c开头表示颜色(color)
const styles = StyleSheet.create({
    h100: {
        height: '100%'
    },
    w100: {
        width: '100%'
    },
    uWrap: {
        flexWrap: "wrap"//自动换行
    },
    uNoWrap: {
        flexWrap: "nowrap"//截断
    },
    //主轴的排列方向
    udr: {
        //子项横向排列
        flexDirection: 'row'
    },
    udc: {
        //子项竖向排列
        flexDirection: 'column'
    },
    //主轴的排列方向 end

    uf1: {
        flex: 1
    },

    //次轴排序
    uas: {
        //居前
        alignItems: 'flex-start',
    },
    uac: {
        //居中
        alignItems: 'center',
    },
    uae: {
        //居后
        alignItems: 'flex-end',
    },
    //主轴排序
    ujs: {
        //居前
        justifyContent: 'flex-start',
    },
    ujc: {
        //居中
        justifyContent: 'center',
    },
    uje: {
        //居后
        justifyContent: 'flex-end',
    },
    uja: {
        //平均分布
        justifyContent: "space-around",
    },
    ujb: {
        //两端
        justifyContent: "space-between",
    },
    //自身次轴对齐 alignSelf enum('auto', 'flex-start', 'flex-end', 'center', 'stretch')
    uSelfAuto: {alignSelf: "auto"},
    uSelfStart: {alignSelf: "flex-start"},
    uSelfEnd: {alignSelf: "flex-end"},
    uSelfCenter: {alignSelf: "center"},
    uSelfStretch: {alignSelf: "stretch"},


    upa: {
        //绝对定位
        position: 'absolute'
    },
    upr: {
        position: 'relative'
    },
    //文字水平居中 enum('auto', 'left', 'right', 'center')
    utxc: {
        textAlign: "center"
    },
    //水平居右
    utxr: {
        textAlign: "right"
    },
    //文字垂直居中 textAlignVertical enum('auto', 'top', 'bottom', 'center') 只支持安卓
    utxvc: {
        textAlignVertical: "center"
    },
    //文本横线-底部
    utxdu: {
        textDecorationLine: "underline"
    },
    //文本横线-中间
    utxdt: {
        textDecorationLine: "line-through"
    },
    //文本横线-中间和底部
    utxdut: {
        textDecorationLine: "underline line-through"
    },
});

/**
 * UI设计原型：基于iphone6
 分辨率：1334 x 750 px；
 屏幕大小：4.7英寸
 DPI 326dpi（约等于320dpi，density=2;1dp＝(1*density)px）
 全屏dp值：667 x 375 dp ((1334/density) x (750/density) )
 * @type {Object.height}
 */
styles.winh = height;
styles.winw = width;
const designWidth = 750 / 1.3;
const designheight = 1334 / 1.3;
const designRatio = designWidth / designheight;
const realRatio = width / height;

//用设计图的宽度和屏幕的宽度来作为比例
const calculateByWidth = width / designWidth;

let calculateByWidthOrHeight;
if (designRatio > realRatio) {
    calculateByWidthOrHeight = width / designWidth;
} else {
    calculateByWidthOrHeight = height / designheight;
}

//获取比例
function getalculate(bool) {
    if (bool) {
        return calculateByWidth;
    } else {
        return calculateByWidthOrHeight;
    }
}

//盒子
function uf(number) {
    return {flex: number}
}

//高度百分比
function hRatio(number) {
    return {height: number + "%"}
}
//高度
function h(number, b) {
    let bili = getalculate(b);
    return {height: Math.round(number * bili)}
}
//最小高度
function minh(number, b) {
    let bili = getalculate(b);
    return {minHeight: Math.round(number * bili)}
}
//最大高度
function maxh(number, b) {
    let bili = getalculate(b);
    return {maxHeight: Math.round(number * bili)}
}
//宽度百分比
function wRatio(number) {
    return {width: number + "%"}
}
//宽度
function w(number, b) {
    let bili = getalculate(b);
    return {width: Math.round(number * bili)}
}
//最小宽度
function minw(number, b) {
    let bili = getalculate(b);
    return {minWidth: Math.round(number * bili)}
}
//最大宽度
function maxw(number, b) {
    let bili = getalculate(b);
    return {maxWidth: Math.round(number * bili)}
}
//内边距
function pt(number, b) {
    let bili = getalculate(b);
    return {paddingTop:Math.round(number * bili)}
}
function pr(number, b) {
    let bili = getalculate(b);
    return {paddingRight: Math.round(number * bili)}
}
function pl(number, b) {
    let bili = getalculate(b);
    return {paddingLeft: Math.round(number * bili)}
}
function pb(number, b) {
    let bili = getalculate(b);
    return {paddingBottom: Math.round(number * bili)}
}

function ptb(number, b) {
    let bili = getalculate(b);
    return {paddingTop: Math.round(number * bili), paddingBottom: Math.round(number * bili)}
}
function plr(number, b) {
    let bili = getalculate(b);
    return {paddingRight:Math.round(number * bili), paddingLeft: Math.round(number * bili)}
}
function pa(number, b) {
    let bili = getalculate(b);
    return {padding: Math.round(number * bili)}
}

function padding(arr, b) {
    let bili = getalculate(b);
    /*传递的是一个数组*/
    if (arr.constructor == Array) {
        if (arr.length == 4) {
            return {
                paddingTop: Math.round(arr[0] * bili),
                paddingRight: Math.round(arr[1] * bili),
                paddingBottom: Math.round(arr[2] * bili),
                paddingLeft: Math.round(arr[3] * bili)
            }
        } else if (arr.length == 2) {
            return {
                paddingTop: Math.round(arr[0] * bili),
                paddingRight: Math.round(arr[1] * bili),
                paddingBottom: Math.round(arr[0] * bili),
                paddingLeft: Math.round(arr[1] * bili)
            }
        } else if (arr.length == 3) {
            return {
                paddingTop: Math.round(arr[0] * bili),
                paddingRight: Math.round(arr[1] * bili),
                paddingBottom: Math.round(arr[0] * bili),
                paddingLeft: Math.round(arr[2] * bili)
            }
        } else {
            return {
                padding: Math.round(arr[0] * bili),
            }
        }
    } else {
        Alert.alert("提示:", "padding方法第一个参数为数组,四个参数的时候分别代表上右下左,也可以传递3,2,1个参数");
    }
}

//边框
function bt(number, b) {
    let bili = getalculate(b);
    return {borderTopWidth: Math.round(number * bili)}
}
function bb(number, b) {
    let bili = getalculate(b);
    return {borderBottomWidth: Math.round(number * bili)}
}
function bl(number, b) {
    let bili = getalculate(b);
    return {borderLeftWidth: Math.round(number * bili)}
}
function br(number, b) {
    let bili = getalculate(b);
    return {borderRightWidth: Math.round(number * bili)}
}
function blr(number, b) {
    let bili = getalculate(b);
    return {borderLeftWidth: Math.round(number * bili), borderRightWidth: Math.round(number * bili)}
}
function btb(number, b) {
    let bili = getalculate(b);
    return {borderTopWidth: Math.round(number * bili), borderBottomWidth: Math.round(number * bili)}
}
function ba(number, b) {
    let bili = getalculate(b);
    return {borderWidth: Math.round(number * bili)}
}

function border(arr, b) {
    let bili = getalculate(b);
    /*传递的是一个数组*/
    if (arr.constructor == Array) {
        if (arr.length == 4) {
            return {
                borderTopWidth: Math.round(arr[0] * bili),
                borderRightWidth: Math.round(arr[1] * bili),
                borderBottomWidth: Math.round(arr[2] * bili),
                borderLeftWidth: Math.round(arr[3] * bili)
            }
        } else if (arr.length == 2) {
            return {
                borderTopWidth: Math.round(arr[0] * bili),
                borderRightWidth: Math.round(arr[1] * bili),
                borderBottomWidth: Math.round(arr[0] * bili),
                borderLeftWidth: Math.round(arr[1] * bili)
            }
        } else if (arr.length == 3) {
            return {
                borderTopWidth: Math.round(arr[0] * bili),
                borderRightWidth: Math.round(arr[1] * bili),
                borderBottomWidth: Math.round(arr[0] * bili),
                borderLeftWidth: Math.round(arr[2] * bili)
            }
        } else {
            return {
                borderWidth: Math.round(arr[0] * bili),
            }
        }
    } else {
        Alert.alert("提示:", "border方法第一个参数为数组,四个参数的时候分别代表上右下左,也可以传递3,2,1个参数");
    }
}

//外边距
function mt(number, b) {
    let bili = getalculate(b);
    return {marginTop: Math.round(number * bili)}
}
function mb(number, b) {
    let bili = getalculate(b);
    return {marginBottom: Math.round(number * bili)}
}
function ml(number, b) {
    let bili = getalculate(b);
    return {marginLeft: Math.round(number * bili)}
}
function mr(number, b) {
    let bili = getalculate(b);
    return {marginRight: Math.round(number * bili)}
}
function mlr(number, b) {
    let bili = getalculate(b);
    return {marginLeft: Math.round(number * bili), marginRight: Math.round(number * bili)}
}
function mtb(number, b) {
    let bili = getalculate(b);
    return {marginTop: Math.round(number * bili), marginBottom: Math.round(number * bili)}
}
function ma(number, b) {
    let bili = getalculate(b);
    return {margin: Math.round(number * bili)}
}

function margin(arr, b) {
    let bili = getalculate(b);
    /*传递的是一个数组*/
    if (arr.constructor == Array) {
        if (arr.length == 4) {
            return {
                marginTop: Math.round(arr[0] * bili),
                marginRight: Math.round(arr[1] * bili),
                marginBottom: Math.round(arr[2] * bili),
                marginLeft: Math.round(arr[3] * bili)
            }
        } else if (arr.length == 2) {
            return {
                marginTop: Math.round(arr[0] * bili),
                marginRight: Math.round(arr[1] * bili),
                marginBottom: Math.round(arr[0] * bili),
                marginLeft: Math.round(arr[1] * bili)
            }
        } else if (arr.length == 3) {
            return {
                marginTop: Math.round(arr[0] * bili),
                marginRight: Math.round(arr[1] * bili),
                marginBottom: Math.round(arr[0] * bili),
                marginLeft: Math.round(arr[2] * bili)
            }
        } else {
            return {
                margin: Math.round(arr[0] * bili),
            }
        }
    } else {
        Alert.alert("提示:", "margin方法第一个参数为数组,四个参数的时候分别代表上右下左,也可以传递3,2,1个参数");
    }
}

//圆角
function radiusA(number, b) {
    let bili = getalculate(b);
    return {borderRadius: Math.round(number * bili)}
}
function radiusTL(number, b) {
    let bili = getalculate(b);
    return {borderTopLeftRadius: Math.round(number * bili)}
}
function radiusTR(number, b) {
    let bili = getalculate(b);
    return {borderTopRightRadius: Math.round(number * bili)}
}
function radiusBL(number, b) {
    let bili = getalculate(b);
    return {borderBottomLeftRadius: Math.round(number * bili)}
}
function radiusBR(number, b) {
    let bili = getalculate(b);
    return {borderBottomRightRadius: Math.round(number * bili)}
}
function borderRadius(arr, b) {
    let bili = getalculate(b);
    /*传递的是一个数组*/
    if (arr.constructor == Array) {
        if (arr.length == 4) {
            return {
                borderTopLeftRadius: Math.round(arr[0] * bili),
                borderTopRightRadius: Math.round(arr[1] * bili),
                borderBottomRightRadius: Math.round(arr[2] * bili),
                borderBottomLeftRadius: Math.round(arr[3] * bili)
            }
        } else {
            Alert.alert("提示:", "radius方法中第一个数组参数必须为四个元素,默认左上为第一个参数,顺时针旋转");
        }
    } else {
        Alert.alert("提示:", "radius方法中第一个数组参数必须为四个元素,默认左上为第一个参数,顺时针旋转");
    }
}
//位置

function absT(number, b) {
    let bili = getalculate(b);
    return {top: Math.round(number * bili)}
}
function absB(number, b) {
    let bili = getalculate(b);
    return {bottom: Math.round(number * bili)}
}
function absL(number, b) {
    let bili = getalculate(b);
    return {left: Math.round(number * bili)}
}
function absR(number, b) {
    let bili = getalculate(b);
    return {right: Math.round(number * bili)}
}

function abs(arr, b) {
    let bili = getalculate(b);
    /*传递的是一个数组*/
    if (arr.constructor == Array) {
        if (arr.length === 4) {
            return {
                top: Math.round(arr[0] * bili),
                right: Math.round(arr[1] * bili),
                bottom: Math.round(arr[2] * bili),
                left: Math.round(arr[3] * bili)
            }
        } else if (arr.length === 2) {
            return {
                top: Math.round(arr[0] * bili),
                right: Math.round(arr[1] * bili),
                bottom: Math.round(arr[0] * bili),
                left: Math.round(arr[1] * bili)
            }
        } else if (arr.length === 3) {
            return {
                top: Math.round(arr[0] * bili),
                right: Math.round(arr[1] * bili),
                bottom: Math.round(arr[0] * bili),
                left: Math.round(arr[2] * bili)
            }
        } else {
            return {
                top: Math.round(arr[0] * bili),
                right: Math.round(arr[0] * bili),
                bottom: Math.round(arr[0] * bili),
                left: Math.round(arr[0] * bili)
            }
        }
    } else {
        Alert.alert("提示:", "abs方法第一个参数为数组,四个参数的时候分别代表上右下左,也可以传递3,2,1个参数");
    }
}

/*字体大小*/
function fSize(number, b) {
    let bili = getalculate(b);
    return {fontSize: Math.round(number * bili)};
}

/*字体颜色*/
function color(c) {
    return {color: c};
}
/*背景色*/
function bgColor(c) {
    return {backgroundColor: c};
}
/*边框色*/
function bdColor(c) {
    return {borderColor: c};
}
/*透明度*/

function opacity(c) {
    return {opacity: c};
}


function create(b, obj) {
    let bili = getalculate(b);
    for (let key in obj) {
        let temp = obj[key];
        for (let key1 in temp) {
            let temp1 = temp[key1];
            if (typeof temp1 == "number") {
                obj[key][key1] = temp1 * bili;
            }
        }
    }
    return StyleSheet.create(obj)
}

export {
    create, h, w,
    pt, pr, pl, pb, ptb, plr, pa, padding,
    bt, bb, bl, br, btb, blr, ba, border,
    mt, mb, mr, ml, mtb, mlr, ma, margin,
    radiusTL, radiusTR, radiusBL, radiusBR,
    absT, absB, absL, absR, abs, color, bgColor,
    bdColor, fSize, opacity,
}
//宽高
styles.h = h;
styles.hRatio = hRatio;
styles.minh = minh;
styles.maxh = maxh;
styles.w = w;
styles.minw = minw;
styles.maxw = maxw;
//宽度百分比
styles.wRatio = wRatio;
//内边距
styles.pt = pt;
styles.pr = pr;
styles.pl = pl;
styles.pb = pb;
styles.ptb = ptb;
styles.plr = plr;
styles.pa = pa;
styles.padding = padding;

/*边框宽度*/
styles.bt = bt;
styles.bb = bb;
styles.bl = bl;
styles.br = br;
styles.blr = blr;
styles.btb = btb;
styles.ba = ba;
styles.border = border;

/*盒子*/
styles.uf = uf;

/*外边距*/
styles.mt = mt;
styles.mb = mb;
styles.ml = ml;
styles.mr = mr;
styles.mlr = mlr;
styles.mtb = mtb;
styles.ma = ma;
styles.margin = margin;

/*2种比例*/
styles.calculateByWidth = calculateByWidth;
styles.calculateByWidthOrHeight = calculateByWidthOrHeight;
/*圆角*/
styles.radiusA = radiusA;
styles.radiusTL = radiusTL;
styles.radiusTR = radiusTR;
styles.radiusBL = radiusBL;
styles.radiusBR = radiusBR;
styles.borderRadius = borderRadius;
/*位置*/
styles.absT = absT;
styles.absB = absB;
styles.absL = absL;
styles.absR = absR;
styles.abs = abs;
/*字体大小*/
styles.fSize = fSize;
/*颜色*/
styles.color = color;
styles.bgColor = bgColor;
styles.bdColor = bdColor;
/*透明度*/
styles.opacity = opacity;
export default styles;