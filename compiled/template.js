'use strict';

module.exports = function () {

  return function (h) {

    var theme = this.Theme;
    var prevChunk = '';
    var nextChunk = '';
    var firstPage = '';
    var lastPage = '';
    var items = this.pages.map(function (page) {

      return h(
        'a',
        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + this.activeClass(page),
          on: {
            'click': this.setPage.bind(this, page)
          },
          attrs: {
            href: 'javascript:void(0)',
            role: 'button' }
        },
        [page]
      );
    }.bind(this));

    if (this.opts.edgeNavigation && this.totalChunks > 1) {
      firstPage = h(
        'a',
        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + (this.page === 1 ? theme.disabled : '') + ' VuePagination__pagination-item-prev-chunk',
          on: {
            'click': this.setPage.bind(this, 1)
          },
          attrs: {
            href: 'javascript:void(0);',
            disabled: this.page === 1 }
        },
        [this.opts.texts.first]
      );

      lastPage = h(
        'a',
        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + (this.page === this.totalPages ? theme.disabled : '') + ' VuePagination__pagination-item-prev-chunk',
          on: {
            'click': this.setPage.bind(this, this.totalPages)
          },
          attrs: {
            href: 'javascript:void(0);',
            disabled: this.page === this.totalPages }
        },
        [this.opts.texts.last]
      );
    }

    if (this.opts.chunksNavigation === 'fixed') {
      prevChunk = h(
        'a',
        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + theme.prev + ' VuePagination__pagination-item-prev-chunk ' + this.allowedChunkClass(-1),
          on: {
            'click': this.setChunk.bind(this, -1)
          },
          attrs: {
            href: 'javascript:void(0);',
            disabled: !!this.allowedChunkClass(-1) }
        },
        [h('i', { 'class': 'angle double left icon' })]
      );

      nextChunk = h(
        'a',
        { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + theme.next + ' VuePagination__pagination-item-next-chunk ' + this.allowedChunkClass(1),
          on: {
            'click': this.setChunk.bind(this, 1)
          },
          attrs: {
            href: 'javascript:void(0);',
            disabled: !!this.allowedChunkClass(1) }
        },
        [h('i', { 'class': 'angle double right icon' })]
      );
    }

    return h(
      'div',
      { 'class': 'VuePagination ' + theme.wrapper },
      [h(
        'nav',
        { 'class': '' + theme.nav },
        [h(
          'div',
          {
            directives: [{
              name: 'show',
              value: this.totalPages > 1
            }],

            'class': ' ui menu pagination ' + theme.list + ' VuePagination__pagination' },
          [firstPage, prevChunk, h(
            'a',
            { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + theme.prev + ' VuePagination__pagination-item-prev-page ' + this.allowedPageClass(this.page - 1),
              on: {
                'click': this.prev.bind(this)
              },
              attrs: {
                href: 'javascript:void(0);',
                disabled: !!this.allowedPageClass(this.page - 1)
              }
            },
            [h('i', { 'class': 'angle left icon' })]
          ), items, h(
            'a',
            { 'class': 'VuePagination__pagination-item ' + theme.item + ' ' + theme.next + ' VuePagination__pagination-item-next-page ' + this.allowedPageClass(this.page + 1),
              on: {
                'click': this.next.bind(this)
              },
              attrs: {
                href: 'javascript:void(0);',
                disabled: !!this.allowedPageClass(this.page + 1)
              }
            },
            [h('i', { 'class': 'angle right icon' })]
          ), nextChunk, lastPage]
        ), h(
          'p',
          {
            directives: [{
              name: 'show',
              value: parseInt(this.records)
            }],

            'class': 'VuePagination__count ' + theme.count },
          [this.count]
        )]
      )]
    );
  };
};