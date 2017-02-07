﻿
/******************      View          **************/
declare class mxCellState {

    cell: mxCell;

    style: Dictionary<any>;

    x: number;
    y: number;

    absolutePoints: mxPoint[];
}

declare class mxEdgeStyle {

    /** Implements an entity relation style for edges (as used in database schema diagrams).  At the time 
    * the function is called, the result array contains a placeholder (null) for the first absolute point, 
    * that is, the point where the edge and source terminal are connected.  The implementation of the style 
    * then adds all intermediate waypoints except for the last point, that is, the connection point between 
    * the edge and the target terminal.  The first ant the last point in the result array are then replaced 
    * with mxPoints that take into account the terminal’s perimeter and next point on the edge. 
    */
    static EntityRelation(state: mxCellState, source: mxCell, target: mxCell, points: mxPoint[], result: any): any;

    /** Implements a self-reference, aka. loop. */
    static Loop(state: mxCellState, source: mxCell, target: mxCell, points: mxPoint[], result: any): any;

    /** Uses either SideToSide or TopToBottom depending on the horizontal flag in the cell style.  
    * SideToSide is used if horizontal is true or unspecified.  See EntityRelation for a description of the parameters. 
    */
    static ElbowConnector(state: mxCellState, source: mxCell, target: mxCell, points: mxPoint[], result: any): any;

    /** Implements a vertical elbow edge.  See EntityRelation for a description of the parameters. */
    static SideToSide(state: mxCellState, source: mxCell, target: mxCell, points: mxPoint[], result: any): any;

    /** Implements a horizontal elbow edge.  See EntityRelation for a description of the parameters */
    static TopToBottom(state: mxCellState, source: mxCell, target: mxCell, points: mxPoint[], result: any): any;

    /** Implements an orthogonal edge style.  Use <mxEdgeSegmentHandler> as an interactive handler for this style. */
    static SegmentConnector(state: mxCellState, source: mxCell, target: mxCell, points: mxPoint[], result: any): any;

    /** Implements a local orthogonal router between the given cells. */
    static OrthConnector(state: mxCellState, source: mxCell, target: mxCell, points: mxPoint[], result: any): any;

}

declare class mxStylesheet {
}

declare class mxGraphView extends mxEventSource {
    getState(
        cell: mxCell,
        create?: boolean): mxCellState;

    getCanvas(): SVGElement;
    canvas: HTMLElement;

    drawPane: HTMLElement;

    scaleAndTranslate(
        scale: number,
        dx: number,
        dy: number): void;

    setTranslate(
        dx: number,
        dy: number): void;

    translate: mxPoint;

    scale: number;
}

declare class mxGraph extends mxEventSource {

    constructor(
        container: HTMLElement,
        model: mxGraphModel,
        renderHint: string,
        stylesheet: mxStylesheet);

    container: HTMLElement;
    mouseListeners;
    isMouseDown;
    model;
    view: mxGraphView;
    stylesheet: mxStylesheet;
    selectionModel;
    cellEditor;
    cellRenderer;
    multiplicities;
    renderHint;
    dialect;
    gridSize;
    gridEnabled;
    portsEnabled;
    nativeDblClickEnabled;
    doubleTapEnabled;
    doubleTapTimeout;
    doubleTapTolerance;
    lastTouchY;
    lastTouchTime;
    tapAndHoldEnabled;
    tapAndHoldDelay;
    tapAndHoldInProgress;
    tapAndHoldValid;
    initialTouchX;
    initialTouchY;
    tolerance;
    defaultOverlap;
    defaultParent;
    alternateEdgeStyle;
    backgroundImage;
    pageVisible;
    pageBreaksVisible;
    pageBreakColor;
    pageBreakDashed;
    minPageBreakDist;
    preferPageSize;
    pageFormat;
    pageScale;
    enabled;
    escapeEnabled;
    invokesStopCellEditing;
    enterStopsCellEditing;
    useScrollbarsForPanning;
    exportEnabled;
    importEnabled;
    cellsLocked;
    cellsCloneable;
    foldingEnabled;
    cellsEditable;
    cellsDeletable;
    cellsMovable;
    edgeLabelsMovable;
    vertexLabelsMovable;
    dropEnabled;
    splitEnabled;
    cellsResizable;
    cellsBendable;
    cellsSelectable;
    cellsDisconnectable;
    autoSizeCells;
    autoSizeCellsOnAdd;
    autoScroll;
    timerAutoScroll;
    allowAutoPanning;
    ignoreScrollbars;
    autoExtend;
    maximumGraphBounds;
    minimumGraphSize;
    minimumContainerSize;
    maximumContainerSize;
    resizeContainer;
    border;
    keepEdgesInForeground;
    allowNegativeCoordinates;
    constrainChildren;
    constrainChildrenOnResize;
    extendParents;
    extendParentsOnAdd;
    extendParentsOnMove;
    recursiveResize;
    collapseToPreferredSize;
    zoomFactor;
    keepSelectionVisibleOnZoom;
    centerZoom;
    resetViewOnRootChange;
    resetEdgesOnResize;
    resetEdgesOnMove;
    resetEdgesOnConnect;
    allowLoops;
    defaultLoopStyle;
    multigraph;
    connectableEdges;
    allowDanglingEdges;
    cloneInvalidEdges;
    disconnectOnMove;
    labelsVisible;
    htmlLabels;
    swimlaneSelectionEnabled;
    swimlaneNesting;
    swimlaneIndicatorColorAttribute;
    imageBundles;
    minFitScale;
    maxFitScale;
    panDx;
    panDy;
    collapsedImage;
    expandedImage;
    warningImage;
    alreadyConnectedResource;
    containsValidationErrorsResource;
    collapseExpandResource;
    getTooltipForCell(cell);
    init(container: HTMLElement);
    createHandlers(container);
    createSelectionModel();
    createStylesheet();
    createGraphView();
    createCellRenderer();
    createCellEditor();
    getModel();
    getView();
    getStylesheet();
    setStylesheet(stylesheet);
    getSelectionModel();
    setSelectionModel(selectionModel);
    getSelectionCellsForChanges(changes);
    graphModelChanged(changes);
    getRemovedCellsForChanges(changes);
    processChange(change);
    removeStateForCell(cell);
    addCellOverlay(cell, overlay);
    getCellOverlays(cell);
    removeCellOverlay(cell, overlay);
    removeCellOverlays(cell);
    clearCellOverlays(cell);
    setCellWarning(cell, warning, img, isSelect);
    startEditing(evt);
    startEditingAtCell(cell, evt);
    getEditingValue(cell, evt);
    stopEditing(cancel?);
    labelChanged(cell, value, evt);
    cellLabelChanged(cell, value, autoSize);
    escape(evt);
    click(me);
    dblClick(evt, cell);
    tapAndHold(me);
    scrollPointToVisible(x, y, extend, border);
    createPanningManager();
    getBorderSizes();
    getPreferredPageSize(bounds, width, height);
    sizeDidChange();
    doResizeContainer(width, height);
    updatePageBreaks(visible, width, height);
    getCellStyle(cell: mxCell): Dictionary<string>;
    postProcessCellStyle(style);
    setCellStyle(style, cells);
    toggleCellStyle(key, defaultValue, cell);
    toggleCellStyles(key, defaultValue, cells);
    setCellStyles(key, value, cells);
    toggleCellStyleFlags(key, flag, cells);
    setCellStyleFlags(key, flag, value, cells);
    alignCells(align, cells, param);
    flipEdge(edge);
    addImageBundle(bundle);
    removeImageBundle(bundle);
    getImageFromBundles(key);
    orderCells(back, cells);
    cellsOrdered(cells, back);
    groupCells(group, border, cells);
    getCellsForGroup(cells);
    getBoundsForGroup(group, children, border);
    createGroupCell(cells);
    ungroupCells(cells);
    removeCellsFromParent(cells);
    updateGroupBounds(cells, border, moveGroup);
    cloneCells(cells, allowInvalidEdges);
    insertEdge(parent, id, value, source, target, style);
    createEdge(parent, id, value, source, target, style);
    addEdge(edge, parent, source, target, index);
    addCell(cell, parent, index, source, target);
    addCells(cells, parent?, index?, source?, target?);
    cellsAdded(cells, parent, index, source, target, absolute, constrain);
    autoSizeCell(cell, recurse);
    removeCells(cells, includeEdges);
    cellsRemoved(cells);
    splitEdge(edge, cells, newEdge, dx, dy);
    toggleCells(show, cells, includeEdges);
    cellsToggled(cells, show);
    foldCells(collapse, recurse, cells, checkFoldable);
    cellsFolded(cells, collapse, recurse, checkFoldable);
    swapBounds(cell, willCollapse);
    updateAlternateBounds(cell, geo, willCollapse);
    addAllEdges(cells);
    getAllEdges(cells);
    updateCellSize(cell, ignoreChildren);
    cellSizeUpdated(cell, ignoreChildren);
    getPreferredSizeForCell(cell);
    resizeCell(cell, bounds, recurse);
    resizeCells(cells, bounds, recurse);
    cellsResized(cells, bounds, recurse);
    cellResized(cell, bounds, ignoreRelative, recurse);
    resizeChildCells(cell, newGeo);
    constrainChildCells(cell);
    scaleCell(cell, dx, dy, recurse);
    extendParent(cell);
    importCells(cells, dx, dy, target, evt?);
    moveCells(cells, dx, dy, clone, target, evt);
    cellsMoved(cells, dx, dy, disconnect, constrain, extend);
    translateCell(cell, dx, dy);
    getCellContainmentArea(cell);
    getMaximumGraphBounds();
    constrainChild(cell);
    resetEdges(cells);
    resetEdge(edge);
    getAllConnectionConstraints(terminal, source);
    getConnectionConstraint(edge, terminal, source);
    setConnectionConstraint(edge, terminal, source, constraint);
    getConnectionPoint(vertex, constraint);
    connectCell(edge, terminal, source, constraint);
    cellConnected(edge, terminal, source, constraint);
    disconnectGraph(cells);
    getCurrentRoot();
    getTranslateForRoot(cell);
    isPort(cell);
    getTerminalForPort(cell, source);
    getChildOffsetForCell(cell);
    enterGroup(cell);
    exitGroup();
    home();
    isValidRoot(cell);
    getGraphBounds();
    getCellBounds(cell, includeEdges, includeDescendants);
    getBoundingBoxFromGeometry(cells, includeEdges);
    refresh(cell);
    snap(value);
    panGraph(dx, dy);
    zoomIn();
    zoomOut();
    zoomActual();
    zoomTo(scale, center);
    zoom(factor, center);
    zoomToRect(rect);
    fit(border, keepOrigin);
    scrollCellToVisible(cell, center?);
    scrollRectToVisible(rect);
    getCellGeometry(cell: mxCell): mxGeometry;
    isCellVisible(cell);
    isCellCollapsed(cell);
    isCellConnectable(cell);
    isOrthogonal(edge);
    isLoop(state);
    isCloneEvent(evt);
    isToggleEvent(evt);
    isGridEnabledEvent(evt);
    isConstrainedEvent(evt);
    validationAlert(message);
    isEdgeValid(edge, source, target);
    getEdgeValidationError(edge, source, target);
    validateEdge(edge, source, target);
    validateGraph(cell, context);
    getCellValidationError(cell);
    validateCell(cell, context);
    getBackgroundImage();
    setBackgroundImage(image);
    getFoldingImage(state);
    convertValueToString(cell);
    getLabel(cell);
    isHtmlLabel(cell);
    isHtmlLabels();
    setHtmlLabels(value);
    isWrapping(cell);
    isLabelClipped(cell);
    getTooltip(state, node, x, y);
    getTooltipForCell(cell);
    getCursorForCell(cell);
    getStartSize(swimlane);
    getImage(state);
    getVerticalAlign(state);
    getIndicatorColor(state);
    getIndicatorGradientColor(state);
    getIndicatorShape(state);
    getIndicatorImage(state);
    getBorder();
    setBorder(value);
    isResizeContainer();
    setResizeContainer(value);
    isEnabled();
    setEnabled(value);
    isEscapeEnabled();
    setEscapeEnabled(value);
    isInvokesStopCellEditing();
    setInvokesStopCellEditing(value);
    isEnterStopsCellEditing();
    setEnterStopsCellEditing(value);
    isCellLocked(cell);
    isCellsLocked();
    setCellsLocked(value);
    getCloneableCells(cells);
    isCellCloneable(cell);
    isCellsCloneable();
    setCellsCloneable(value);
    getExportableCells(cells);
    canExportCell(cell);
    getImportableCells(cells);
    canImportCell(cell);
    isCellSelectable(cell);
    isCellSelectable(cell);
    isCellsSelectable();
    setCellsSelectable(value);
    getDeletableCells(cells);
    isCellDeletable(cell);
    isCellsDeletable();
    setCellsDeletable(value);
    isLabelMovable(cell);
    isCellRotatable(cell);
    getMovableCells(cells);
    isCellMovable(cell);
    isCellsMovable();
    setCellsMovable(value);
    isGridEnabled();
    setGridEnabled(value);
    isPortsEnabled();
    setPortsEnabled(value);
    getGridSize();
    setGridSize(value);
    getTolerance();
    setTolerance(value);
    isVertexLabelsMovable();
    setVertexLabelsMovable(value);
    isEdgeLabelsMovable();
    setEdgeLabelsMovable(value);
    isSwimlaneNesting();
    setSwimlaneNesting(value);
    isSwimlaneSelectionEnabled();
    setSwimlaneSelectionEnabled(value);
    isMultigraph();
    setMultigraph(value);
    isAllowLoops();
    setAllowDanglingEdges(value);
    isAllowDanglingEdges();
    setConnectableEdges(value);
    isConnectableEdges();
    setCloneInvalidEdges(value);
    isCloneInvalidEdges();
    setAllowLoops(value);
    isDisconnectOnMove();
    setDisconnectOnMove(value);
    isDropEnabled();
    setDropEnabled(value);
    isSplitEnabled();
    setSplitEnabled(value);
    isCellResizable(cell);
    isCellsResizable();
    setCellsResizable(value);
    isTerminalPointMovable(cell, source);
    isCellBendable(cell);
    isCellsBendable();
    setCellsBendable(value);
    isCellEditable(cell);
    isCellsEditable();
    setCellsEditable(value);
    isCellDisconnectable(cell, terminal, source);
    isCellsDisconnectable();
    setCellsDisconnectable(value);
    isValidSource(cell);
    isValidTarget(cell);
    isValidConnection(source, target);
    setConnectable(connectable);
    isConnectable(connectable);
    setPanning(enabled);
    isEditing(cell);
    isAutoSizeCell(cell);
    isAutoSizeCells();
    setAutoSizeCells(value);
    isExtendParent(cell);
    isExtendParents();
    setExtendParents(value);
    isExtendParentsOnAdd();
    setExtendParentsOnAdd(value);
    isExtendParentsOnMove();
    setExtendParentsOnMove(value);
    isRecursiveResize();
    setRecursiveResize(value);
    isConstrainChild(cell);
    isConstrainChildren();
    setConstrainChildrenOnResize(value);
    isConstrainChildrenOnResize();
    setConstrainChildren(value);
    isAllowNegativeCoordinates();
    setAllowNegativeCoordinates(value);
    getOverlap(cell);
    isAllowOverlapParent(cell);
    getFoldableCells(cells, collapse);
    isCellFoldable(cell, collapse);
    isValidDropTarget(cell, cells, evt);
    isSplitTarget(target, cells, evt);
    getDropTarget(cells, evt, cell);
    getDefaultParent();
    setDefaultParent(cell);
    getSwimlane(cell);
    getCellAt(x, y, parent, vertices, edges);
    intersects(state, x, y);
    hitsSwimlaneContent(swimlane, x, y);
    getChildVertices(parent);
    getChildEdges(parent);
    getChildCells(parent, vertices, edges);
    getConnections(cell, parent);
    getIncomingEdges(cell, parent);
    getOutgoingEdges(cell, parent);
    getEdges(cell, parent, incoming, outgoing, includeLoops, recurse);
    isValidAncestor(cell, parent, recurse);
    getOpposites(edges, terminal, sources, targets);
    getEdgesBetween(source, target, directed);
    getPointForEvent(evt, addOffset);
    getCells(x, y, width, height, parent, result);
    getCellsBeyond(x0, y0, parent, rightHalfpane, bottomHalfpane);
    findTreeRoots(parent, isolate, invert);
    traverse(vertex, directed, func, edge, visited);
    isCellSelected(cell);
    isSelectionEmpty();
    clearSelection();
    getSelectionCount();
    getSelectionCell(): mxCell;
    getSelectionCells(): mxCell[];
    setSelectionCell(cell);
    setSelectionCells(cells);
    addSelectionCell(cell);
    addSelectionCells(cells);
    removeSelectionCell(cell);
    removeSelectionCells(cells);
    selectRegion(rect, evt);
    selectNextCell();
    selectPreviousCell();
    selectParentCell();
    selectChildCell();
    selectCell(isNext, isParent, isChild);
    selectAll(parent);
    selectVertices(parent);
    selectEdges(parent);
    selectCells(vertices, edges, parent);
    selectCellForEvent(cell, evt);
    selectCellsForEvent(cells, evt);
    createHandler(state: mxCellState);
    addListener(name, listener);
    addMouseListener(listener);
    removeMouseListener(listener);
    updateMouseEvent(me);
    getStateForTouchEvent(evt);
    isEventIgnored(evtName, me, sender);
    isSyntheticEventIgnored(evtName, me, sender);
    isEventSourceIgnored(evtName, me);
    fireMouseEvent(evtName, me, sender);
    fireGestureEvent(evt, cell);
    destroy();
    setTooltips(enabled: boolean): void;
}

declare class mxLayoutManager {
    getLayout(parent): mxGraphLayout;
}

/******************      View end      **************/
