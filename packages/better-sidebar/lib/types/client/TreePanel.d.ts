export declare function TreePanel(props: {
    sessionId: string;
    cwd: string | undefined;
    /** Additional workspace folders shown as sibling explorer roots. */
    folders?: readonly string[];
    expanded: string[];
    onToggle: (path: string) => void;
    onOpenFile: (path: string) => void;
    /** File context-menu "open in a new tab" (passed through to FileTree). */
    onOpenFileNewTab?: (path: string) => void;
    /** File context-menu "open to the side" (passed through to FileTree). */
    onOpenFileSide?: (path: string) => void;
    onReferenceFile: (path: string) => void;
    /** Shared explorer refresh tick from the tab-strip control. */
    refreshTick?: number;
    /** Full-window presentation: the panel fills its host instead of docking
     *  at a fixed width. */
    full?: boolean;
}): import("react").JSX.Element;
