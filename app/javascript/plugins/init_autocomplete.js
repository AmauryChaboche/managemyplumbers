import $ from 'jquery';
import 'select2';

const initAutocomplete = () => {
  $('.select2-autocomplete').select2({
    tags: true
  });

  $('.select2-autocomplete').on('select2:select', function (e) {
    const client = $(".select2-autocomplete option:selected").data("client");
    if (client == undefined) { return; }

    $("#new_client_first_name").val(client.first_name);
    $("#new_client_last_name").val(client.last_name);
    $("#new_client_phone_number").val(client.phone_number);
    $("#new_client_address").val(client.address);
  });
};

export { initAutocomplete };
