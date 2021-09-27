/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {MSStoreBadge} from '../ms-store-badge.js';

import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('ms-store-badge', () => {
  test('is defined', () => {
    const el = document.createElement('ms-store-badge');
    assert.instanceOf(el, MSStoreBadge);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<ms-store-badge></ms-store-badge>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<ms-store-badge name="Test"></ms-store-badge>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = (await fixture(html`<ms-store-badge></ms-store-badge>`)) as MSStoreBadge;
    const button = el.shadowRoot!.querySelector('button')!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });

  test('styling applied', async () => {
    const el = (await fixture(html`<ms-store-badge></ms-store-badge>`)) as MSStoreBadge;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).paddingTop, '16px');
  });
});
