// Type definitions for mxGraph 2.3.0.2
// Project: https://www.jgraph.com/
// Definitions by: George Kiselev <https://github.com/gooddaytoday>
// Definitions: https://github.com/gooddaytoday

/* 

    Definitions devided to modules equal to official api documentation's packages:    https://jgraph.github.io/mxgraph/docs/js-api/files/index-txt.html

    - Each class has its "declare class mxEvent {}"
    - Interfaces of class members should be in module: 
     module mxEvent {
        interface SomeInterface { }
     }
    - Common package interfaces should be in module, named by package:    module Util {
        interface CommonUtilInterface { }
    }

    Now definitions are poor. A lot of <any> types and empty classes. Feel free to get some donkey work.

*/

/// <reference path="Model.d.ts"/>
/// <reference path="Util.d.ts"/>
/// <reference path="View.d.ts"/>
/// <reference path="Handlers.d.ts"/>
/// <reference path="Shape.d.ts"/>

declare class mxClientType {
    IS_CHROMEAPP: boolean;
    IS_EDGE: boolean;
    IS_EM: boolean;
    IS_FF: boolean;
    IS_GC: true
    IS_IE: boolean;
    IS_IE6: boolean;
    IS_IE11: boolean;
    IS_IOS: boolean;
    IS_LOCAL: boolean;
    IS_MAC: boolean;
    IS_MT: boolean;
    IS_NS: true
    IS_OP: boolean;
    IS_OT: boolean;
    IS_POINTER: true
    IS_QUIRKS: boolean;
    IS_SF: boolean;
    IS_SVG: true
    IS_TOUCH: boolean;
    IS_VML: boolean;
    IS_WIN: true
    NO_FO: boolean;
    OFFICE_PREFIX: string;
    VERSION: string;
    VML_PREFIX: string;
    basePath: string;
    defaultLanguage: string;
    dispose: () => void;
    imageBasePath: string;
    include: (src: string) => void;
    isBrowserSupported: () => boolean;
    language: string;
    languages: string[];
    link: (rel: string, href: string, doc: Element) => void;
}

declare var mxClient: mxClientType;
declare var mxLoadStylesheets:boolean;
declare var mxLoadResources:boolean;