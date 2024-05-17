/**
 * @module indent-first/ui
 */

import { Plugin } from '@ckeditor/ckeditor5-core';
import { ButtonView } from '@ckeditor/ckeditor5-ui';
import { ATTRIBUTE } from './index';
import indentFirst from '../theme/icons/indent-first.svg';

export class IndentFirstUi extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'IndentFirstUI';
	}

	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		const t = editor.t;

		editor.ui.componentFactory.add(ATTRIBUTE, (locale) => {
			const command = editor.commands.get(ATTRIBUTE);
			const buttonView = new ButtonView(locale);

			buttonView.set({
				label: t( 'Indent first' ),
				icon: indentFirst,
				tooltip: true,
				isToggleable: true,
			});

			buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

			// Execute command.
			this.listenTo(buttonView, 'execute', () => {
				editor.execute(ATTRIBUTE);
				editor.editing.view.focus();
			});

			return buttonView;
		});
	}
}
