#\ -p 3000

use Rack::Deflater

map '/assets' do
  environment = Sprockets::Environment.new
  environment.append_path 'assets/images'
  environment.append_path 'assets/javascripts'
  environment.append_path 'assets/stylesheets'
  environment.append_path 'vendor/images'
  environment.append_path 'vendor/javascripts'
  environment.append_path 'vendor/stylesheets'
  run environment
end

require './server'
run Sinatra::Application
