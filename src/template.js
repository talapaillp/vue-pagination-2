module.exports = function() {
  
  return function(h) {
    
    var theme = this.Theme;
    var prevChunk = '';
    var nextChunk = '';
    var firstPage = '';
    var lastPage = '';
    var items = this.pages.map(function(page) {
      
      return <a class={`VuePagination__pagination-item ${theme.item} ${this.activeClass(page)}`} 
      onClick={this.setPage.bind(this, page)}
      href="javascript:void(0)"
      role="button">{page}</a>
      
    }.bind(this));
    
    
    if (this.opts.edgeNavigation && this.totalChunks > 1) {
      firstPage = <a class={`VuePagination__pagination-item ${theme.item} ${this.page===1?theme.disabled:''} VuePagination__pagination-item-prev-chunk`}
      onClick={this.setPage.bind(this, 1)}
      href="javascript:void(0);"
      disabled={this.page===1}>{this.opts.texts.first}</a>;
      
      lastPage = <a class={`VuePagination__pagination-item ${theme.item} ${this.page===this.totalPages?theme.disabled:''} VuePagination__pagination-item-prev-chunk`}
      onClick={this.setPage.bind(this, this.totalPages)}
      href="javascript:void(0);"
      disabled={this.page===this.totalPages}>{this.opts.texts.last}</a>;
    }
    
    if (this.opts.chunksNavigation==='fixed') {
      prevChunk = <a class={`VuePagination__pagination-item ${theme.item} ${theme.prev} VuePagination__pagination-item-prev-chunk ${this.allowedChunkClass(-1)}`}
      onClick={this.setChunk.bind(this,-1)}
      href="javascript:void(0);"
      disabled={!!this.allowedChunkClass(-1)}><i class='angle double left icon'></i></a>;
      
      nextChunk = <a  class={`VuePagination__pagination-item ${theme.item} ${theme.next} VuePagination__pagination-item-next-chunk ${this.allowedChunkClass(1)}`}
      onClick={this.setChunk.bind(this,1)}
      href="javascript:void(0);"
      disabled={!!this.allowedChunkClass(1)}><i class='angle double right icon'></i></a>;
      
    }
    
    
    return <div class={`VuePagination ${theme.wrapper}`}><nav class={`${theme.nav}`}>
    <div v-show={this.totalPages>1}
    class={`${theme.list} VuePagination__pagination`}>
    {firstPage}
    {prevChunk}
    <a class={`VuePagination__pagination-item ${theme.item} ${theme.prev} VuePagination__pagination-item-prev-page ${this.allowedPageClass(this.page-1)}`}
    onClick={this.prev.bind(this)}
    href="javascript:void(0);"
    disabled={!!this.allowedPageClass(this.page-1)} 
    ><i class='angle left icon'></i></a>
    {items}
    <a class={`VuePagination__pagination-item ${theme.item} ${theme.next} VuePagination__pagination-item-next-page ${this.allowedPageClass(this.page+1)}`}
    onClick={this.next.bind(this)}
    href="javascript:void(0);"
    disabled={!!this.allowedPageClass(this.page+1)} 
    ><i class='angle right icon'></i></a>
    {nextChunk}
    {lastPage}
    </div>
    <p v-show={parseInt(this.records)}
    class={`VuePagination__count ${theme.count}`}>{this.count}</p>
    </nav>
    </div>
  }
}
