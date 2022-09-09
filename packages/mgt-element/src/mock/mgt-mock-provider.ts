/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import { property } from 'lit/decorators.js';
import { MgtBaseProvider } from '../components/baseProvider';
import { Providers } from '../providers/Providers';
import { MockProvider } from './MockProvider';
import { customElement } from '../utils/CustomElement';
/**
 * Sets global provider to a mock Provider
 *
 * @export
 * @class MgtMockProvider
 * @extends {LitElement}
 */
@customElement('mock-provider')
// @customElement('mgt-mock-provider')
export class MgtMockProvider extends MgtBaseProvider {
  /**
   * A property to allow the developer to start the sample logged out if they desired.
   *
   * @memberof MgtMockProvider
   */
  @property({
    attribute: 'signed-out',
    type: Boolean
  })
  public signedOut;

  /**
   * method called to initialize the provider. Each derived class should provide
   * their own implementation
   *
   * @protected
   * @memberof MgtBaseProvider
   */
  protected initializeProvider() {
    Providers.globalProvider = new MockProvider(!this.signedOut);
  }
}
