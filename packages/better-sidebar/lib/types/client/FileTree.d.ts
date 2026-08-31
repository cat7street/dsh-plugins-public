/** Root label: the last path segment (mirror of the host rootLabel). */
export declare function baseName(path: string): string;
/**
 * Marker stored in `expanded` after the user first toggles a workspace
 * root. Roots start open (VS Code multi-root); once this marker is present
 * the root follows the same include/exclude rule as any other directory.
 */
export declare const ROOT_FOLD_SEEDED = "__dsh-sidebar-root-fold__";
/** Whether a workspace root row is currently expanded. */
export declare function isRootExpanded(expanded: readonly string[], root: string): boolean;
/**
 * Toggle a workspace root. The first click seeds {@link ROOT_FOLD_SEEDED}
 * and records the other still-open roots so they stay expanded.
 */
export declare function nextExpandedForRoot(expanded: readonly string[], roots: readonly string[], root: string): string[];
export declare function FileTree(props: {
    sessionId: string;
    cwd: string | undefined;
    /** Additional workspace folders (cwd is always the first root). */
    folders?: readonly string[];
    expanded: string[];
    onToggle: (path: string) => void;
    onOpenFile: (path: string) => void;
    /** Context-menu "open in a new tab" (file rows; absent → no entry). */
    onOpenFileNewTab?: (path: string) => void;
    /** Context-menu "open to the side" (file rows; absent → no entry). */
    onOpenFileSide?: (path: string) => void;
    /** Insert `@<relative path>` into the composer draft. */
    onReferenceFile: (path: string) => void;
    /** Bump to wipe the level cache and reload the visible set. */
    refreshTick: number;
}): import("react").JSX.Element;
