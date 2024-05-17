/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { CKFinderUploadAdapter } from '@ckeditor/ckeditor5-adapter-ckfinder';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CKBox } from '@ckeditor/ckeditor5-ckbox';
import { CKFinder } from '@ckeditor/ckeditor5-ckfinder';
import { EasyImage } from '@ckeditor/ckeditor5-easy-image';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, PictureEditing, ImageResize } from '@ckeditor/ckeditor5-image';
import { Bold, Italic, Underline, Strikethrough, Subscript, Superscript, Code } from '@ckeditor/ckeditor5-basic-styles';
import { FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { List, ListProperties, TodoList } from '@ckeditor/ckeditor5-list';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
export default class ClassicEditor extends ClassicEditorBase {
    static builtinPlugins: (typeof TextTransformation | typeof Essentials | typeof CKFinderUploadAdapter | typeof Paragraph | typeof Heading | typeof Autoformat | typeof BlockQuote | typeof Image | typeof ImageCaption | typeof ImageResize | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof CloudServices | typeof CKBox | typeof CKFinder | typeof EasyImage | typeof List | typeof ListProperties | typeof TodoList | typeof Indent | typeof IndentBlock | typeof Link | typeof MediaEmbed | typeof PasteFromOffice | typeof Table | typeof TableToolbar | typeof Superscript | typeof Subscript | typeof Bold | typeof Code | typeof Italic | typeof Strikethrough | typeof Underline | typeof FontColor | typeof FontFamily | typeof FontSize | typeof Highlight | typeof Alignment | typeof HorizontalLine | typeof CodeBlock | typeof SourceEditing | typeof FindAndReplace | typeof PictureEditing)[];
    static defaultConfig: {
        indentBlock: {
            offset: number;
            unit: string;
        };
        fontFamily: {
            options: string[];
        };
        fontSize: {
            options: (string | number)[];
        };
        toolbar: {
            items: string[];
        };
        image: {
            toolbar: string[];
        };
        table: {
            contentToolbar: string[];
        };
        language: string;
    };
}
