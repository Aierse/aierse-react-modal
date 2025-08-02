var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
/**
 *
 * @example
 * const [isOpen, setIsOpen] = useState(false)
 *
 * <Modal open={isOpen}>
 *  <YourHTMLCode />
 * </Modal>
 *
 * @returns
 */
export default function Modal(_a) {
    var children = _a.children, open = _a.open, beforeOpen = _a.beforeOpen, beforeClose = _a.beforeClose, backdropProps = _a.backdropProps, props = __rest(_a, ["children", "open", "beforeOpen", "beforeClose", "backdropProps"]);
    var target = useRef(null);
    useEffect(function () {
        var _a, _b;
        if (open) {
            if (beforeOpen instanceof Function) {
                beforeOpen();
            }
            (_a = target.current) === null || _a === void 0 ? void 0 : _a.showModal();
        }
        else {
            if (beforeClose instanceof Function) {
                beforeClose();
            }
            (_b = target.current) === null || _b === void 0 ? void 0 : _b.close();
        }
    }, [open, beforeOpen, beforeClose]);
    return (_jsx("dialog", __assign({ ref: target }, backdropProps, { children: _jsx("div", __assign({ onClick: function (e) { return e.stopPropagation(); } }, props, { children: children })) })));
}
