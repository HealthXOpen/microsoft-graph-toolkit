/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { html } from 'lit';
import { withCodeEditor } from '../../../.storybook/addons/codeEditorAddon/codeAddon';
import { defaultDocsPage } from '../../../.storybook/story-elements/defaultDocsPage';

export default {
  title: 'Components / mgt-people',
  component: 'people',
  decorators: [withCodeEditor],
  parameters: {
    docs: {
      page: defaultDocsPage,
      source: { code: '<mgt-people show-max="5"></mgt-people>' }
    }
  }
};

export const People = () => html`
  <mgt-people show-max="5"></mgt-people>
`;

export const RTL = () => html`
  <body dir="rtl">
    <mgt-people show-max="5"></mgt-people>
  </body>
`;
