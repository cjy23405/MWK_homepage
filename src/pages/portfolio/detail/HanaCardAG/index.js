import React, { Component } from 'react';
import classNames from 'classnames/bind';

import { stylesCopyConvertDashes, importImages } from 'utils/core';

import { PortfolioLayout } from 'components';

import data from 'datas/portfolio/HanaCardAG';

import * as styles from './HanaCardAG.module.scss';
styles = stylesCopyConvertDashes(styles);
const cx = classNames.bind(styles);

const imagesSrc = importImages(require.context('./images/', false, /\.(png|jpe?g|gif)$/));

class HanaCardAG extends Component {
  render() {
    return (
      <PortfolioLayout data={data}>
        <div class={cx('contents')}>
          <img src={imagesSrc['pc-1.jpg']} alt="" class="is-pc-only" />
          <img src={imagesSrc['pc-2.jpg']} alt="" class="is-pc-only" />
          <img src={imagesSrc['pc-3.jpg']} alt="" class="is-pc-only" />
          <img src={imagesSrc['tablet-1.jpg']} alt="" class="is-tablet-only" />
          <img src={imagesSrc['tablet-2.jpg']} alt="" class="is-tablet-only" />
          <img src={imagesSrc['tablet-3.jpg']} alt="" class="is-tablet-only" />
          <img src={imagesSrc['tablet-4.jpg']} alt="" class="is-tablet-only" />
          <img src={imagesSrc['tablet-5.jpg']} alt="" class="is-tablet-only" />
          <img src={imagesSrc['tablet-6.jpg']} alt="" class="is-tablet-only" />
          <img src={imagesSrc['mobile-1.jpg']} alt="" class="is-mobile-only" />
          <img src={imagesSrc['mobile-2.jpg']} alt="" class="is-mobile-only" />
          <img src={imagesSrc['mobile-3.jpg']} alt="" class="is-mobile-only" />
          <img src={imagesSrc['mobile-4.jpg']} alt="" class="is-mobile-only" />
          <img src={imagesSrc['mobile-5.jpg']} alt="" class="is-mobile-only" />
          <img src={imagesSrc['mobile-6.jpg']} alt="" class="is-mobile-only" />
        </div>
      </PortfolioLayout>
    );
  }
}

export default HanaCardAG;
