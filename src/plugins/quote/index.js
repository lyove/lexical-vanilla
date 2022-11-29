import { FORMAT_TEXT_COMMAND, $getSelection, $isRangeSelection } from "lexical";
import { $createQuoteNode } from "@lexical/rich-text";
import { $wrapNodes } from "@lexical/selection";

import ToolbarPlugin from "../../constructor/ToolbarPlugins";

/**
 * Quote Plugin
 */
export default class Quote extends ToolbarPlugin {
  /**
   * @inheritDoc
   */
  static get name() {
    return "quote";
  }

  /**
   * Init plugin
   */
  init() {
    this.newToolbarItem(
      {
        label: "Quote",
        command: this.constructor.name,
        className: "toolbar-item",
      },
      this.execute,
    );
  }

  /**
   * Execute
   */
  execute() {
    this.editor.engine.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $wrapNodes(selection, () => $createQuoteNode());
      }
    });
  }
}