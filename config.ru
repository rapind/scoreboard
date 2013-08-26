#\ -p 3000

use Rack::Deflater

require './server'
run Sinatra::Application
