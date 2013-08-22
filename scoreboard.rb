Bundler.require
require "goliath/rack/sprockets"

class Scoreboard < Goliath::API
  use Goliath::Rack::Render, "json"
  use Goliath::Rack::Params
  use Goliath::Rack::Validation::RequestMethod, %w(GET) # allow GET requests only

  use(Goliath::Rack::Sprockets, asset_paths: ["assets/images", "assets/javascripts", "assets/stylesheets", "assets/vendor"])

  # render static files from ./public
  use( Rack::Static,
    :root  => Goliath::Application.app_path("public"),
    :urls  => ["/favicon.ico", "/partials", "/data"],
    :index => "/index.html",
    :cache_control => "public, max-age=3600" )

  def response(env)    
    case env["PATH_INFO"]
      when "/some-action"
        [200, {}, "Some Action Response"]
      else
        raise Goliath::Validation::NotFoundError
    end
  end

end