require 'test_helper'

class BookingsControllerTest < ActionDispatch::IntegrationTest
  test "should get indexshow" do
    get bookings_indexshow_url
    assert_response :success
  end

  test "should get new" do
    get bookings_new_url
    assert_response :success
  end

  test "should get create" do
    get bookings_create_url
    assert_response :success
  end

  test "should get edit" do
    get bookings_edit_url
    assert_response :success
  end

  test "should get update" do
    get bookings_update_url
    assert_response :success
  end

  test "should get destroy" do
    get bookings_destroy_url
    assert_response :success
  end

end
