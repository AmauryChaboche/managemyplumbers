require 'test_helper'

class ClientsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get clients_new_url
    assert_response :success
  end

  test "should get create" do
    get clients_create_url
    assert_response :success
  end

  test "should get edit" do
    get clients_edit_url
    assert_response :success
  end

  test "should get update" do
    get clients_update_url
    assert_response :success
  end

end
