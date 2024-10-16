import { defineCustomElement } from 'vue';
import BlocksEditor from '@/BlocksEditor.ce.vue';

const BlocksEditorElement = defineCustomElement(BlocksEditor);

customElements.define('blocks-editor', BlocksEditorElement);
