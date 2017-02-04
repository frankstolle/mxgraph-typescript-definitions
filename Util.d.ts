/******************      Util      **************/

/** Common interfaces for Utils */
declare module Util {

    /** Common handler for addListener of EventSource */
    interface EventHandler {
        (sender: any, state: any);
    }

}

/** 
* The mxEventObject is a wrapper for all properties of a single event.  Additionally, it also offers functions 
* to consume the event and check if it was consumed as follows:*/
declare class mxEventObject {
    constructor(
        name: string,
        key1?: string,
        val1?: any);

    /** Holds the name. */
    name: string;

    /** Holds the properties as an associative array. */
    properties: any;

    /** Returns name */
    getName: () => string;

    /** Returns the property for the given key. */
    getProperty: (key: string) => any;
}

/** 
* A wrapper class for an associative array with object keys.  Note: This implementation uses <mxObjectIdentitiy> to 
* turn object keys into strings. 
*/
declare class mxDictionary {

    /** Stores the (key, value) pairs in this dictionary. */
    map: any;

    /**
     * Returns the value for the given key.
     * @param key
     */
    get: (key: any) => any;

    /**
     * Stores the value under the given key and returns the previous value for that key.
     * @param key
     * @param value
     */
    put: (key: any, value: any) => any;

    /** Returns all keys as an array. */
    getKeys: () => string[];
    /** Returns all values as an array. */
    getValues: () => string[];
}




/**    
* Base class for objects that dispatch named events.  To create a subclass that inherits from mxEventSource, the following code is used.
*/
declare class mxEventSource {

    /**
     * Binds the specified function to the given event name.  If no event name is given, then the listener 
     * is registered for all events. 
     * The parameters of the listener are the sender and an mxEventObject. 
     */
    addListener(name: any, func: Util.EventHandler);

}

/**
* Encapsulates the URL, width and height of an image.
*/
declare class mxImage {

    /** Encapsulates the URL, width and height of an image. */
    constructor(src: string, width: number, height: number);

    src: string;
    width: number;

    height: number;
}


/** 
 * Cross-browser DOM event support
 */
declare class mxEventType {
    ACTIVATE: string;
    ADD: string;
    ADD_CELLS: string;
    ADD_OVERLAY: string;
    ADD_VERTEX: string;
    AFTER_ADD_VERTEX: string;
    ALIGN_CELLS: string;
    BEFORE_ADD_VERTEX: string;
    BEFORE_UNDO: string;
    BEGIN_UPDATE: string;
    CELLS_ADDED: string;
    CELLS_FOLDED: string;
    CELLS_MOVED: string;
    CELLS_ORDERED: string;
    CELLS_REMOVED: string;
    CELLS_RESIZED: string;
    CELLS_TOGGLED: string;
    CELL_CONNECTED: string;
    CHANGE: string;
    CLEAR: string;
    CLICK: string;
    CLOSE: string;
    CONNECT: string;
    CONNECT_CELL: string;
    CUSTOM_HANDLE: number;
    DESTROY: string;
    DISCONNECT: string;
    DONE: string;
    DOUBLE_CLICK: string;
    DOWN: string;
    EDITING_STARTED: string;
    EDITING_STOPPED: string;
    END_EDIT: string;
    END_UPDATE: string;
    ESCAPE: string;
    EXECUTE: string;
    EXECUTED: string;
    FIRED: string;
    FIRE_MOUSE_EVENT: string;
    FLIP_EDGE: string;
    FOLD_CELLS: string;
    GESTURE: string;
    GET: string;
    GROUP_CELLS: string;
    HIDE: string;
    LABEL_CHANGED: string;
    LABEL_HANDLE: number;
    LAYOUT_CELLS: string;
    MARK: string;
    MAXIMIZE: string;
    MINIMIZE: string;
    MOUSE_DOWN: string;
    MOUSE_MOVE: string;
    MOUSE_UP: string;
    MOVE: string;
    MOVE_CELLS: string;
    MOVE_END: string;
    MOVE_START: string;
    NORMALIZE: string;
    NOTIFY: string;
    OPEN: string;
    ORDER_CELLS: string;
    PAN: string;
    PAN_END: string;
    PAN_START: string;
    POST: string;
    RECEIVE: string;
    REDO: string;
    REFRESH: string;
    REMOVE: string;
    REMOVE_CELLS: string;
    REMOVE_CELLS_FROM_PARENT: string;
    REMOVE_OVERLAY: string;
    RESET: string;
    RESIZE: string;
    RESIZE_CELLS: string;
    RESIZE_END: string;
    RESIZE_START: string;
    RESUME: string;
    ROOT: string;
    ROTATION_HANDLE: number;
    SAVE: string;
    SCALE: string;
    SCALE_AND_TRANSLATE: string;
    SELECT: string;
    SHOW: string;
    SIZE: string;
    SPLIT_EDGE: string;
    START: string;
    START_EDIT: string;
    START_EDITING: string;
    SUSPEND: string;
    TAP_AND_HOLD: string;
    TOGGLE_CELLS: string;
    TRANSLATE: string;
    UNDO: string;
    UNGROUP_CELLS: string;
    UP: string;
    UPDATE_CELL_SIZE: string;

    addListener: (element: Document | HTMLElement, eventName: string, funct: Function) => void;

    getSource(evt: Event): Node;

    consume(evt: Event,
        preventDefault?: boolean,
        stopPropagation?: boolean);

    isMouseEvent(evt: Event): boolean;
    isAltDown(evt: Event): boolean;
    isMultiTouchEvent(evt: Event): boolean;
    isShiftDown(evt: Event): boolean;
    addGestureListeners(
        node: Node,
        startListener?: Function,
        moveListener?: Function,
        endListener?: Function): void;

    removeGestureListeners(
        node: Node,
        startListener?: Function,
        moveListener?: Function,
        endListener?: Function): void;

    getClientX(e: Event): number;
    getClientY(e: Event): number;
    isPopupTrigger(e: Event): number;
}

declare class mxMouseEvent {
    consumed;
    evt;
    graphX;
    graphY;
    state;
    getEvent();
    getSource();
    isSource(shape);
    getX();
    getY();
    getGraphX();
    getGraphY();
    getState();
    getCell();
    isPopupTrigger();
    isConsumed();
    consume(preventDefault);
}

declare class mxPoint {

    /** Constructs a new point for the optional x and y coordinates.  If no coordinates are given, then the default values for x and y are used. */
    constructor(x: number, y: number);

    x: number;
    y: number;

    /**
     * Returns true if the given object equals this point.
     * @param obj
     */
    equals(obj: any): boolean;

    clone();

}

declare class mxRectangle extends mxPoint {
    constructor(
        x: number,
        y: number,
        width: number,
        height: number);

    width: number;
    height: number;
    grow(amount: number);
    add(rect: mxRectangle);

    static fromRectangle(rect: mxRectangle): mxRectangle;
}

declare class mxUtilsType {
    bind: (
        scope: Object,
        funct: Function) => Function;

    button: (label: string,
        funct: Function,
        doc?: Document) => HTMLButtonElement;

    write: (parent: Node,
        text: string) => Node;

    writeln: (parent: Node,
        text: string) => Node;

    getValue(array: any,
        key: string,
        defaultValue?: any): any;

    contains(
        bounds: mxRectangle,
        x: number,
        y: number): boolean;

    setOpacity(
        node: Node,
        value: number);

    createImage(src: string): HTMLImageElement;

    makeDraggable(
        element: Node,
        graphF: mxGraph,
        funct: Function,
        dragElement?: Node,
        dx?: number,
        dy?: number,
        autoscroll?: boolean,
        scalePreview?: boolean,
        highlightDropTargets?: boolean,
        getDropTarget?: Function): mxDragSource;

}

declare class mxResourcesType {
    get: (key: string,
        params?: string[],
        defaultValue?: string) => string;
}

declare class mxConstantsType {
    ABSOLUTE_LINE_HEIGHT: boolean;
    ALIGN_BOTTOM: string;
    ALIGN_CENTER: string;
    ALIGN_LEFT: string;
    ALIGN_MIDDLE: string;
    ALIGN_RIGHT: string;
    ALIGN_TOP: string;
    ARROW_BLOCK: string;
    ARROW_BLOCK_THIN: string;
    ARROW_CLASSIC: string;
    ARROW_CLASSIC_THIN: string;
    ARROW_DIAMOND: string;
    ARROW_DIAMOND_THIN: string;
    ARROW_OPEN: string;
    ARROW_OPEN_THIN: string;
    ARROW_OVAL: string;
    ARROW_SIZE: number;
    ARROW_SPACING: number;
    ARROW_WIDTH: number;
    CONNECT_HANDLE_FILLCOLOR: string;
    CONNECT_TARGET_COLOR: string;
    CURSOR_BEND_HANDLE: string;
    CURSOR_CONNECT: string;
    CURSOR_LABEL_HANDLE: string;
    CURSOR_MOVABLE_EDGE: string;
    CURSOR_MOVABLE_VERTEX: string;
    CURSOR_TERMINAL_HANDLE: string;
    CURSOR_VIRTUAL_BEND_HANDLE: string;
    DEFAULT_FONTFAMILY: string;
    DEFAULT_FONTSIZE: number;
    DEFAULT_FONTSTYLE: number;
    DEFAULT_HOTSPOT: number;
    DEFAULT_IMAGESIZE: number;
    DEFAULT_INVALID_COLOR: string;
    DEFAULT_MARKERSIZE: number;
    DEFAULT_STARTSIZE: number;
    DEFAULT_TEXT_DIRECTION: string;
    DEFAULT_VALID_COLOR: string;
    DIALECT_MIXEDHTML: string;
    DIALECT_PREFERHTML: string;
    DIALECT_STRICTHTML: string;
    DIALECT_SVG: string;
    DIALECT_VML: string;
    DIRECTION_EAST: string;
    DIRECTION_MASK_ALL: number;
    DIRECTION_MASK_EAST: number;
    DIRECTION_MASK_NONE: number;
    DIRECTION_MASK_NORTH: number;
    DIRECTION_MASK_SOUTH: number;
    DIRECTION_MASK_WEST: number;
    DIRECTION_NORTH: string;
    DIRECTION_SOUTH: string;
    DIRECTION_WEST: string;
    DROP_TARGET_COLOR: string;
    EDGESTYLE_ELBOW: string;
    EDGESTYLE_ENTITY_RELATION: string;
    EDGESTYLE_LOOP: string;
    EDGESTYLE_ORTHOGONAL: string;
    EDGESTYLE_SEGMENT: string;
    EDGESTYLE_SIDETOSIDE: string;
    EDGESTYLE_TOPTOBOTTOM: string;
    EDGE_SELECTION_COLOR: string;
    EDGE_SELECTION_DASHED: boolean;
    EDGE_SELECTION_STROKEWIDTH: number;
    ELBOW_HORIZONTAL: string;
    ELBOW_VERTICAL: string;
    ENTITY_SEGMENT: number;
    FONT_BOLD: number;
    FONT_ITALIC: number;
    FONT_UNDERLINE: number;
    GUIDE_COLOR: string;
    GUIDE_STROKEWIDTH: number;
    HANDLE_FILLCOLOR: string;
    HANDLE_SIZE: number;
    HANDLE_STROKECOLOR: string;
    HIGHLIGHT_COLOR: string;
    HIGHLIGHT_OPACITY: number;
    HIGHLIGHT_SIZE: number;
    HIGHLIGHT_STROKEWIDTH: number;
    INVALID_COLOR: string;
    INVALID_CONNECT_TARGET_COLOR: string;
    LABEL_HANDLE_FILLCOLOR: string;
    LABEL_HANDLE_SIZE: number;
    LINE_ARCSIZE: number;
    LINE_HEIGHT: number;
    LOCKED_HANDLE_FILLCOLOR: string;
    MAX_HOTSPOT_SIZE: number;
    MIN_HOTSPOT_SIZE: number;
    NODETYPE_ATTRIBUTE: number;
    NODETYPE_CDATA: number;
    NODETYPE_COMMENT: number;
    NODETYPE_DOCUMENT: number;
    NODETYPE_DOCUMENTTYPE: number;
    NODETYPE_DOCUMENT_FRAGMENT: number;
    NODETYPE_ELEMENT: number;
    NODETYPE_ENTITY: number;
    NODETYPE_ENTITY_REFERENCE: number;
    NODETYPE_NOTATION: number;
    NODETYPE_PROCESSING_INSTRUCTION: number;
    NODETYPE_TEXT: number;
    NONE: string;
    NS_SVG: string;
    NS_XHTML: string;
    NS_XLINK: string;
    OUTLINE_COLOR: string;
    OUTLINE_HANDLE_FILLCOLOR: string;
    OUTLINE_HANDLE_STROKECOLOR: string;
    OUTLINE_HIGHLIGHT_COLOR: string;
    OUTLINE_HIGHLIGHT_STROKEWIDTH: number;
    OUTLINE_STROKEWIDTH: number;
    PAGE_FORMAT_A4_LANDSCAPE: mxRectangle;
    PAGE_FORMAT_A4_PORTRAIT: mxRectangle;
    PAGE_FORMAT_LETTER_LANDSCAPE: mxRectangle;
    PAGE_FORMAT_LETTER_PORTRAIT: mxRectangle;
    PERIMETER_ELLIPSE: string;
    PERIMETER_HEXAGON: string;
    PERIMETER_RECTANGLE: string;
    PERIMETER_RHOMBUS: string;
    PERIMETER_TRIANGLE: string;
    RECTANGLE_ROUNDING_FACTOR: number;
    RENDERING_HINT_EXACT: string;
    RENDERING_HINT_FASTER: string;
    RENDERING_HINT_FASTEST: string;
    SHADOWCOLOR: string;
    SHADOW_OFFSET_X: number;
    SHADOW_OFFSET_Y: number;
    SHADOW_OPACITY: number;
    SHAPE_ACTOR: string;
    SHAPE_ARROW: string;
    SHAPE_ARROW_CONNECTOR: string;
    SHAPE_CLOUD: string;
    SHAPE_CONNECTOR: string;
    SHAPE_CYLINDER: string;
    SHAPE_DOUBLE_ELLIPSE: string;
    SHAPE_ELLIPSE: string;
    SHAPE_HEXAGON: string;
    SHAPE_IMAGE: string;
    SHAPE_LABEL: string;
    SHAPE_LINE: string;
    SHAPE_RECTANGLE: string;
    SHAPE_RHOMBUS: string;
    SHAPE_SWIMLANE: string;
    SHAPE_TRIANGLE: string;
    STYLE_ALIGN: string;
    STYLE_ARCSIZE: string;
    STYLE_ASPECT: string;
    STYLE_AUTOSIZE: string;
    STYLE_BENDABLE: string;
    STYLE_CLONEABLE: string;
    STYLE_CURVED: string;
    STYLE_DASHED: string;
    STYLE_DASH_PATTERN: string;
    STYLE_DELETABLE: string;
    STYLE_DIRECTION: string;
    STYLE_EDGE: string;
    STYLE_EDITABLE: string;
    STYLE_ELBOW: string;
    STYLE_ENDARROW: string;
    STYLE_ENDFILL: string;
    STYLE_ENDSIZE: string;
    STYLE_ENTRY_PERIMETER: string;
    STYLE_ENTRY_X: string;
    STYLE_ENTRY_Y: string;
    STYLE_EXIT_PERIMETER: string;
    STYLE_EXIT_X: string;
    STYLE_EXIT_Y: string;
    STYLE_FILLCOLOR: string;
    STYLE_FILL_OPACITY: string;
    STYLE_FLIPH: string;
    STYLE_FLIPV: string;
    STYLE_FOLDABLE: string;
    STYLE_FONTCOLOR: string;
    STYLE_FONTFAMILY: string;
    STYLE_FONTSIZE: string;
    STYLE_FONTSTYLE: string;
    STYLE_GLASS: string;
    STYLE_GRADIENTCOLOR: string;
    STYLE_GRADIENT_DIRECTION: string;
    STYLE_HORIZONTAL: string;
    STYLE_IMAGE: string;
    STYLE_IMAGE_ALIGN: string;
    STYLE_IMAGE_ASPECT: string;
    STYLE_IMAGE_BACKGROUND: string;
    STYLE_IMAGE_BORDER: string;
    STYLE_IMAGE_HEIGHT: string;
    STYLE_IMAGE_VERTICAL_ALIGN: string;
    STYLE_IMAGE_WIDTH: string;
    STYLE_INDICATOR_COLOR: string;
    STYLE_INDICATOR_DIRECTION: string;
    STYLE_INDICATOR_GRADIENTCOLOR: string;
    STYLE_INDICATOR_HEIGHT: string;
    STYLE_INDICATOR_IMAGE: string;
    STYLE_INDICATOR_SHAPE: string;
    STYLE_INDICATOR_SPACING: string;
    STYLE_INDICATOR_STROKECOLOR: string;
    STYLE_INDICATOR_WIDTH: string;
    STYLE_JETTY_SIZE: string;
    STYLE_LABEL_BACKGROUNDCOLOR: string;
    STYLE_LABEL_BORDERCOLOR: string;
    STYLE_LABEL_PADDING: string;
    STYLE_LABEL_POSITION: string;
    STYLE_LABEL_WIDTH: string;
    STYLE_LOOP: string;
    STYLE_MARGIN: string;
    STYLE_MOVABLE: string;
    STYLE_NOEDGESTYLE: string;
    STYLE_NOLABEL: string;
    STYLE_OPACITY: string;
    STYLE_ORTHOGONAL: string;
    STYLE_ORTHOGONAL_LOOP: string;
    STYLE_OVERFLOW: string;
    STYLE_PERIMETER: string;
    STYLE_PERIMETER_SPACING: string;
    STYLE_POINTER_EVENTS: string;
    STYLE_PORT_CONSTRAINT: string;
    STYLE_PORT_CONSTRAINT_ROTATION: string;
    STYLE_RESIZABLE: string;
    STYLE_RESIZE_HEIGHT: string;
    STYLE_RESIZE_WIDTH: string;
    STYLE_ROTATABLE: string;
    STYLE_ROTATION: string;
    STYLE_ROUNDED: string;
    STYLE_ROUTING_CENTER_X: string;
    STYLE_ROUTING_CENTER_Y: string;
    STYLE_SEGMENT: string;
    STYLE_SEPARATORCOLOR: string;
    STYLE_SHADOW: string;
    STYLE_SHAPE: string;
    STYLE_SMOOTH: string;
    STYLE_SOURCE_JETTY_SIZE: string;
    STYLE_SOURCE_PERIMETER_SPACING: string;
    STYLE_SOURCE_PORT: string;
    STYLE_SPACING: string;
    STYLE_SPACING_BOTTOM: string;
    STYLE_SPACING_LEFT: string;
    STYLE_SPACING_RIGHT: string;
    STYLE_SPACING_TOP: string;
    STYLE_STARTARROW: string;
    STYLE_STARTFILL: string;
    STYLE_STARTSIZE: string;
    STYLE_STROKECOLOR: string;
    STYLE_STROKEWIDTH: string;
    STYLE_STROKE_OPACITY: string;
    STYLE_SWIMLANE_FILLCOLOR: string;
    STYLE_SWIMLANE_LINE: string;
    STYLE_TARGET_JETTY_SIZE: string;
    STYLE_TARGET_PERIMETER_SPACING: string;
    STYLE_TARGET_PORT: string;
    STYLE_TEXT_DIRECTION: string;
    STYLE_TEXT_OPACITY: string;
    STYLE_VERTICAL_ALIGN: string;
    STYLE_VERTICAL_LABEL_POSITION: string;
    STYLE_WHITE_SPACE: string;
    TEXT_DIRECTION_AUTO: string;
    TEXT_DIRECTION_DEFAULT: string;
    TEXT_DIRECTION_LTR: string;
    TEXT_DIRECTION_RTL: string;
    TOOLTIP_VERTICAL_OFFSET: 16
    VALID_COLOR: string;
    VERTEX_SELECTION_COLOR: string;
    VERTEX_SELECTION_DASHED: boolean;
    VERTEX_SELECTION_STROKEWIDTH: 1
    VML_SHADOWCOLOR: string;
    WORD_WRAP: string;
}

declare class mxDragSource {

    currentHighlight: any;

    constructor(
        element: HTMLElement,
        dropHandler: Function);

    getDropTarget: Function;

    isGuidesEnabled: Function;

    isActive(): boolean;

    reset(): void;

    startDrag(evt: Event): void;

    stopDrag(): void;

    mouseMove(evt: Event): void;

    mouseUp(evt: Event): void;

    mouseDown(evt: Event): void;

    dragEnter(
        graph: mxGraph,
        evt: Event);

    dragExit(
        graph: mxGraph,
        evt: Event);

    dragOver(
        graph: mxGraph,
        evt: Event);

    createPreviewElement(
        graph: mxGraph): HTMLElement;
}

declare class mxPopupMenuType {
    prototype: mxPopupMenuType;

    zIndex: number;
}

/******************      Util end      **************/

declare var mxUtils: mxUtilsType;
declare var mxEvent: mxEventType;
declare var mxResources: mxResourcesType;
declare var mxConstants: mxConstantsType;
declare var mxPopupMenu: mxPopupMenuType;