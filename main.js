$(function main(){

    $('.container').on('click', '.shopping-item-delete', function(event){
        $(this).closest('li').remove()
    })

    $('.container').on('click','.shopping-item-toggle', function(event){
        $(this).closest('li').toggleClass('shopping-item-checked')
    })


    $('#js-shopping-list-form').on('submit', function(event){
        event.preventDefault();
        let listItem = $('#shopping-list-entry').val();
        let template = `<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
      $('#shopping-list-entry').val('');
        $('.shopping-list').append(template);

    
    })
})
$(main);