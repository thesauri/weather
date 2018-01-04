require 'test_helper'

class TemperatureTest < ActiveSupport::TestCase
  test "should not save non-numerical temperatures" do
    measurement = Measurement.new temperature: "abc", city: City.all.first
    assert_not measurement.save
  end

  test "should not save hexadecimal temperatures" do
    measurement = Measurement.new temperature: "0xabc", city: City.all.first
    assert_not measurement.save
  end

  test "should not save measurements of 100C or more" do
    measurement = Measurement.new temperature: 100, city: City.all.first
    assert_not measurement.save
    measurement = Measurement.new temperature: 101, city: City.all.first
    assert_not measurement.save
  end

  test "should not save measurements of -100 or less" do
    measurement = Measurement.new temperature: -100, city: City.all.first
    assert_not measurement.save
    measurement = Measurement.new temperature: -101, city: City.all.first
    assert_not measurement.save
  end

  test "should save correct measurements" do
    (0...100).each do |i|
      measurement = Measurement.new temperature: i, city: City.all.first
      assert measurement.save
    end
  end
end
